import CollectionItem from "@/components/collections/CollectionItem";
import { OpenSeaSDK, Chain } from "opensea-js";
import { ethers } from "ethers";
import { use, useEffect, useState } from "react";
import { useOpenseaSdk } from "@/hooks/useOpensea";
export function useNfts(slug: string, width: number) {
  const sdk = useOpenseaSdk();
  const [items, setItems] = useState([]);

  useEffect(() => {
    sdk.api.getNFTsByCollection(slug).then((nftsResponse) => {
      if (
        !nftsResponse ||
        !nftsResponse.nfts ||
        nftsResponse.nfts.length === 0
      ) {
        return <div>No NFTs found</div>;
      }
      const dataNfts = nftsResponse.nfts.map((item, index) => {
        return {
          rarity: item.rarity?.rank?.toString() || "0",
          name: `#${item.identifier}`,
          price: "0",
          imageUrl:
            item.image_url?.replace(
              "https://ipfs.io/ipfs/",
              "https://ipfs.42loop.life/ipfs/"
            ) || "",
        };
      });
      setItems(dataNfts as any);
    });
  }, []);

  const calcWith = (width: number) => {
    const numberItem = Math.floor(width / 193);
    const rmWith = width - numberItem * 193;
    return { itemWidth: 193 + rmWith / numberItem, numberItem };
  };
  const { itemWidth, numberItem } = calcWith(width);
  const itemHeight = (itemWidth * 3) / 2;
  return items.map((item, index) => (
    <CollectionItem
      key={index}
      item={item}
      options={{
        left: (index % numberItem) * itemWidth,
        top: Math.floor(index / numberItem) * itemHeight,
        height: itemHeight,
        with: itemWidth,
      }}
    />
  ));
}
