import { Text } from "@chakra-ui/react";
import { ZDK } from "@zoralabs/zdk";
import {
  Chain,
  Network,
  SearchableEntity,
} from "@/helpers/zora/queries/queries-sdk";
import axios from "axios";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { IResponseResult } from "@/types/api/IReponseResult";

import { getOrigin } from "@/helpers/locationUtil";

const API_ENDPOINT = "https://api.zora.co/graphql";

const getCollectionItem = async (
  chainInfo: string,
  address: string,
  id: string
) => {
  try {
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
      endpoint: API_ENDPOINT,
      networks,
      apiKey: process.env.ZORA_API_KEY || "2FixN70_5TSlZ3pAXTamNA",
    });

    const args = {
      token: {
        address: address,
        tokenId: id,
      },
      includeFullDetails: false, // Optional, provides more data on the NFT such as all historical events
    };

    const response = await zdk.token(args);

    if (response) {
      // console.log(JSON.stringify(response));
      return {
        name: response.token?.token.name,
        description: response.token?.token.description,
        owner:
          response.token?.token.owner ||
          response.token?.token.mintInfo?.originatorAddress,
        collectionAddress:
          response.token?.token.tokenContract?.collectionAddress,
        chain: response.token?.token.tokenContract?.chain,
        price: {
          decimal: response.token?.token.mintInfo?.price?.nativePrice.decimal,
          raw: response.token?.token.mintInfo?.price?.nativePrice.raw,
          currency: response.token?.token.mintInfo?.price?.nativePrice.currency,
        },
        ipfs: response.token?.token.image?.url?.split("ipfs://")[1],
      };
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};

export async function generateMetadata({
  params,
}: {
  params: { chain: string; address: string; id: string };
}) {}

export default async function Page({
  params,
}: {
  params: { chain: string; address: string; id: string };
}) {
  const collectionItem = await getCollectionItem(
    params.chain,
    params.address,
    params.id
  );
  // const { data } = useNFT(params.address, params.id)
  // console.log(data)
  if (collectionItem) {
    return (
      <Card>
        <CardBody>
          <Image
            w={500}
            h={500}
            src={`https://ipfs.io/ipfs/${collectionItem.ipfs}`}
            alt={`${collectionItem.name}`}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{collectionItem.name}</Heading>
            <Text color="blue.600" fontSize="2xl">
              {collectionItem.price.decimal}{" "}
              {collectionItem.price.currency?.name}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2" alignItems={"center"}>
            <Button variant="solid" colorScheme="blue">
              BUY
            </Button>
            <Button variant="solid">BID</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  }
}
