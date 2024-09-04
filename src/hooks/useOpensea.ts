import { ethers } from "ethers";
import { Chain, OpenSeaSDK } from "opensea-js";

export function useOpenseaSdk() {
    const provider = new ethers.JsonRpcProvider(
        "https://base-mainnet.infura.io/v3/7286392f9e444744bd9ad653d58b9692"
    );
    // const wallet = new ethers.Wallet("clvb0jk4n08fvg2fvy1a0sr2z", provider)
    const openseaSDK = new OpenSeaSDK(provider, {
        chain: Chain.Base,
        apiKey: "dcf84b9f58334587984979019e496f75",
        apiBaseUrl: "https://api.42loop.life/os",
    });
    return openseaSDK;
}