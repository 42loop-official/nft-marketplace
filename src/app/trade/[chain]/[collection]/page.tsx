import { fetchMetadata } from "frames.js/next";
import Navbar from "@/components/Navbar";

export async function generateMetadata({
  params,
}: {
  params: { chain: string; collection: string };
}) {
  const meta = await fetchMetadata(
    new URL(
      `/trade/frames/collections?chain=${params.chain}&collection=${params.collection}`,
      process.env.NEXT_PUBLIC_FRAMES_URL || `http://localhost:3000`
    )
  );
  console.log(meta);
  return {
    title: `Bored Ape Yacht Club #4210`,
    // provide a full URL to your /frames endpoint
    other: meta,
  };
}

import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  Image,
  Divider,
  ButtonGroup,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
export default function Page({
  params,
}: {
  params: { chain: string; collection: string };
}) {
  const cards = [
    {
      id: "1",
      name: "Bored Ape Yacht Club #4210",
      price: "13.2 ETH | $41,542.22",
      imageUrl:
        "https://zora.co/api/thumbnail/8453/0x98fc9d0867fb07389adadebd4f83f27797e8e473/1",
    },
    {
      id: "2",
      name: "Bored Ape Yacht Club #4210",
      price: "13.2 ETH | $41,542.22",
      imageUrl:
        "https://zora.co/api/thumbnail/8453/0x98fc9d0867fb07389adadebd4f83f27797e8e473/1",
    },
    {
      id: "3",
      name: "Bored Ape Yacht Club #4210",
      price: "13.2 ETH | $41,542.22",
      imageUrl:
        "https://zora.co/api/thumbnail/8453/0x98fc9d0867fb07389adadebd4f83f27797e8e473/1",
    },
    {
      id: "4",
      name: "Bored Ape Yacht Club #4210",
      price: "13.2 ETH | $41,542.22",
      imageUrl:
        "https://zora.co/api/thumbnail/8453/0x98fc9d0867fb07389adadebd4f83f27797e8e473/1",
    },
  ];

  const cardElements = [];
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    cardElements.push(
      <Card>
        <CardBody>
          <Image
            src={card.imageUrl}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{card.name}</Heading>
            <Text color="blue.600" fontSize="2xl">
              {card.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2" alignItems={"center"}>
            <Button variant="solid" colorScheme="teal">
              BUY
            </Button>
            <Button variant="solid">BID</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  }
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {cardElements}
    </SimpleGrid>
  );
}
