import { HStack, Icon, Image, Td, Text, Tr, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { OpenSeaSDK, Chain, CollectionOrderByOption } from "opensea-js";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useOpenseaSdk } from "./useOpensea";

export function useCollections() {
  const sdk = useOpenseaSdk();

  const [items, setItems] = useState([]);
  useEffect(() => {
    sdk.api
      .getCollections(CollectionOrderByOption.SEVEN_DAY_VOLUME, Chain.Base)
      .then((collectionRes) => {
        if (
          !collectionRes ||
          !collectionRes.collections ||
          !collectionRes.collections.length
        ) {
          return;
        }
        const collections = collectionRes.collections.map((collection) => {
          return {
            rarity: collection.rarity?.tokensScored?.toString() || "0",
            name: collection.name,
            slug: collection.collection,
            volume: "0",
            imageUrl: collection.imageUrl?.replace(
              "https://ipfs.io/ipfs/",
              "https://ipfs.42loop.life/ipfs/"
            ),
            totalSupply: collection.totalSupply,
            floor: "0",
            percent: "0",
            sale: "0",
            marketCap: "0",
            totalVolume: "0",
            listed: "0",
          };
        });
        setItems(collections as any);
      });
  }, []);

  return items.map((collection: any, index) => (
    <Tr key={index}>
      <Td>
        <Link href={`/collections/${collection.slug}`}>
          <VStack display={"flex"} alignItems={"center"} flexDirection={"row"}>
            <Image
              src={collection.imageUrl}
              w="56px"
              h="56px"
              objectFit={"cover"}
              minW={"56px"}
              flex={"0 1 0%"}
            />
            <VStack
              display={"flex"}
              alignItems={"start"}
              flexDirection={"column"}
            >
              <Text fontSize={"md"} fontWeight={600}>
                {collection.name}
              </Text>
              <Text fontSize={"sm"}>{collection.totalSupply}</Text>
            </VStack>
          </VStack>
        </Link>
      </Td>
      <Td>
        <HStack spacing={1}>
          <Icon viewBox="0 0 128 128">
            <path
              fill="currentColor"
              d="M65.7 96.4V128l39.2-55.1zM103.4 62.7 65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7 62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z"
            ></path>
          </Icon>
          <Text>{collection.floor}</Text>
        </HStack>
      </Td>
      <Td>
        <HStack spacing={1}>
          <Icon viewBox="0 0 128 128">
            <path
              fill="currentColor"
              d="M65.7 96.4V128l39.2-55.1zM103.4 62.7 65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7 62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z"
            ></path>
          </Icon>
          <Text>{collection.volume}</Text>
        </HStack>
      </Td>
      <Td isNumeric>{collection.percent}%</Td>
      <Td isNumeric>{collection.sale}</Td>
      <Td isNumeric>{collection.marketCap}</Td>
      <Td isNumeric>{collection.totalVolume}</Td>
      <Td isNumeric>{collection.listed}%</Td>
    </Tr>
  ));
}
