import { create } from 'ipfs-http-client';

const ipfs = create({ host: '192.168.50.108', port: 9501, protocol: 'http' });

async function ipfsCat(id: string): Promise<Buffer> {
    const chunks = [];
    const stream = ipfs.cat(id);
    for await (const chunk of stream) {
        chunks.push(chunk);
    }
    return Buffer.concat(chunks);
}

export default ipfsCat;
