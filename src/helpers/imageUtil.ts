import Canvas from 'canvas';
import axios from 'axios';
import { promises as fs } from 'fs';
import path from 'path';
import { PutObjectCommand, S3Client, HeadObjectCommand } from '@aws-sdk/client-s3';


Canvas.registerFont(path.join(process.cwd(), 'public', 'fonts', 'Montserrat-Regular.ttf'), { family: 'Montserrat' });

// Khởi tạo AWS SDK
const s3Client = new S3Client([{ region: process.env.AWS_REGION, credentials: { accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY } }]);

async function loadImageFromUrl(url: string): Promise<Canvas.Image | null> {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        if (response.status !== 200) {
            return null;
        }
        return new Promise((resolve, reject) => {
            const img = new Canvas.Image();
            img.onload = () => resolve(img);
            img.onerror = (err) => reject(new Error('Error loading image: ' + err.message));
            img.src = Buffer.from(response.data, 'binary');
        });
    } catch (error) {
        return null;
    }
}

async function loadImageFromLocal(filePath: string): Promise<Canvas.Image | null> {
    try {
        const data = await fs.readFile(filePath);
        const img = new Canvas.Image();
        img.src = data;
        return img;
    } catch (error) {
        return null;
    }
}

function drawRoundedImage(ctx: Canvas.CanvasRenderingContext2D, image: Canvas.Image, x: number, y: number, width: number, height: number, radius: number): void {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(image, x, y, width, height);
}

function addTextToCanvas(ctx: Canvas.CanvasRenderingContext2D, text: string, x: number, y: number, fontSize: number = 32, weight: string = '', color: string = 'white'): void {
    let font = `${fontSize}px Montserrat`
    if (weight) {
        font = `${weight} ${fontSize}px Montserrat`
    }
    ctx.font = font;  // Set the font size and style to Montserrat
    ctx.fillStyle = color;  // Set the text color
    ctx.fillText(text, x, y);
}

function getAddress(name: string): string {
    if (name.length > 20) {
        return `${name.substring(
            0,
            5
        )}...${name?.substring(
            name?.length - 8
        )}`
    }
    return name

}

function getCollectionName(name: string): string {
    if (name.length > 22) {
        return `${name.substring(0, 22)}...`
    }
    return name

}

async function exitsObject(s3Client: S3Client, amzObjectKey: string): Promise<boolean> {
    try {
        var headObject = new HeadObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: amzObjectKey
        });
        const headObjectResponse = await s3Client.send(headObject);
        return headObjectResponse.$metadata.httpStatusCode === 200;
    } catch (error) {
        return false;
    }
}

async function getImageUrl(params: { id: string, name: string, platform: string, owner: string, address: string }) {
    let imageUrl: string = '';
    const { id, name, owner, address } = params
    const amzObjectKey = `${id}.jpg`;
    const framePath = path.join(process.cwd(), 'public', 'images', 'zora_bg_1000.png');
    const logoPath = path.join(process.cwd(), 'public', '42loop-logo.svg');
    let frame = null;
    let logo = null;

    try {
        // gán link ảnh mặc định
        imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${amzObjectKey}`;
        frame = await loadImageFromLocal(framePath);
        logo = await loadImageFromLocal(logoPath);

        const nftUrl = process.env.IPFS_GATEWAY + `${id}`;
        const image = await loadImageFromUrl(nftUrl);
        // Check đã có file chưa? nếu có thì trả về luôn
        if (await exitsObject(s3Client, amzObjectKey)) {
            return imageUrl;
        }

        // check id là mintnotfound thì trả ảnh mintnotfound
        if (id === 'mintnotfound' || !image || !frame || !logo) {
            const canvas = Canvas.createCanvas(1000, 1000);
            const ctx = canvas.getContext('2d');
            if (frame) {
                // add frame
                ctx.drawImage(frame, 0, 0);
            }

            if (logo && frame) {
                // Add logo
                ctx.drawImage(logo, frame.width - 100, 25, 80, 58);
            }

            addTextToCanvas(ctx, "Not Found", 400, 480, 60, '', 'white');

            const s3Params = new PutObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: amzObjectKey, // Key của object trên S3
                Body: canvas.toBuffer('image/jpeg', { quality: 0.9 }),
                ACL: 'public-read' // ACL để đảm bảo rằng ảnh có thể được truy cập công khai
            });
            await s3Client.send(s3Params);

            return imageUrl;
        }

        // Tạo mới ảnh và composite
        const canvas = Canvas.createCanvas(frame.width, frame.height);
        const ctx = canvas.getContext('2d');

        // add frame
        ctx.drawImage(frame, 0, 0);

        // Add logo
        ctx.drawImage(logo, frame.width - 100, 25, 80, 58);


        const nftHeight = frame.width * 0.75;
        const nftWidth = frame.height * 0.75;
        const x = (frame.width - nftWidth) / 2;
        const y = (frame.height - nftHeight - 60);

        // add Name
        addTextToCanvas(ctx, getCollectionName(name as string), 20, 70, 50, 'bold');
        addTextToCanvas(ctx, getAddress(address as string), 20, 115, 30, '', '#64748B');
        // addTextToCanvas(ctx, getAddress(owner as string), frame.width - 170, 120, 28);

        // add nft
        if (image) {
            drawRoundedImage(ctx, image, x, y, nftWidth, nftHeight, 20)
        }
        // Nén hình ảnh
        let quality = 1  // Bắt đầu với chất lượng cao
        let compressedImage;
        do {
            compressedImage = canvas.toBuffer('image/jpeg', { quality });
            quality -= 0.05; // Giảm chất lượng để tiếp tục nén
        } while (compressedImage.length > 512 * 1024 && quality > 0.1);
        if (compressedImage.length > 512 * 1024) {
            throw new Error('Cannot compress the image below 256KB without significant quality loss.');
        }
        // let base64Image = compressedImage.toString('base64');
        // const dataUrl = `data:image/jpeg;base64,${base64Image}`;
        const s3Params = new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${id}.jpg`, // Key của object trên S3
            Body: compressedImage,
            ACL: 'public-read' // ACL để đảm bảo rằng ảnh có thể được truy cập công khai
        });

        await s3Client.send(s3Params);

        return imageUrl;
    } catch (error: any) {
        console.log(error)
        // gán lại ảnh mặc định
        imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mintruntimeerror.jpg`;

        // check exits error object in amz
        if (await exitsObject(s3Client, 'mintruntimeerror.jpg')) {
            return imageUrl;
        }

        // tạo mới ảnh runtime error và lưu vào s3
        const canvas = Canvas.createCanvas(1000, 1000);
        const ctx = canvas.getContext('2d');
        if (frame) {
            // add frame
            ctx.drawImage(frame, 0, 0);
        }

        if (logo && frame) {
            // Add logo
            ctx.drawImage(logo, frame.width - 100, 25, 80, 58);
        }

        addTextToCanvas(ctx, "Runtime Error", 330, 500, 60, '', 'white');
        const s3Params = new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `mintruntimeerror.jpg`,
            Body: canvas.toBuffer('image/jpeg', { quality: 0.9 }),
            ACL: 'public-read'
        });

        await s3Client.send(s3Params);

        return imageUrl;
    }
}

export { getImageUrl };