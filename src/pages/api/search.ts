import { NextApiRequest, NextApiResponse } from 'next';
import { ZDK } from "@zoralabs/zdk";
import { Chain, Network } from "@zoralabs/zdk/dist/queries/queries-sdk";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { text } = req.query;
    let networks =
        process.env.NODE_ENV === "production"
            ? [
                { chain: Chain.BaseMainnet, network: Network.Base },
                { chain: Chain.ZoraMainnet, network: Network.Zora },
                { chain: Chain.OptimismMainnet, network: Network.Optimism },
            ]
            : [
                { chain: "BASE_SEPOLIA" as any, network: Network.Base },
                { chain: "ZORA_SEPOLIA" as any, network: Network.Zora },
                { chain: "ETHEREUM_SEPOLIA" as any, network: Network.Ethereum },
            ];
    const zdk = new ZDK({
        endpoint: process.env.ZORA_API_ENDPOINT || "https://api.zora.co/graphql",
        networks,
        apiKey: process.env.ZORA_API_KEY || "2FixN70_5TSlZ3pAXTamNA",
    });

    try {
        const searchResult = await zdk.search({
            query: text as string,
            pagination: { limit: 3 }
        });
        console.log("collection", JSON.stringify(searchResult));
        res.status(200).json({ data: searchResult });
    } catch (error) {
        res.status(200).json({ data: error });
    }
    res.status(200).json({ text });
}