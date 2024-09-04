import {
  HStack,
  Icon,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

const getActivies = () => {
  const items = [
    {
      type: "BID",
      image:
        "https://i.seadn.io/s/production/2df59de1-cd0c-4605-b454-85eed439d364.png?w=500&auto=format",
      name: "#1234",
      price: "4.20",
      quantity: 2,
      trader: "MysticWho.eth",
      time: "1 days ago",
    },
    {
      type: "BID",
      image:
        "https://i.seadn.io/s/production/2df59de1-cd0c-4605-b454-85eed439d364.png?w=500&auto=format",
      name: "#1234",
      price: "4.206",
      quantity: 2,
      trader: "noname.eth",
      time: "3 days ago",
    },
    {
      type: "SALE",
      image:
        "https://i.seadn.io/s/production/2df59de1-cd0c-4605-b454-85eed439d364.png?w=500&auto=format",
      name: "#1234",
      price: "4.2069",
      quantity: 2,
      trader: "sahada.eth",
      time: "5 days ago",
    },
  ];
  return items.map((item, i) => (
    <Tr key={i}>
      <Td>{item.type}</Td>
      <Td>
        <VStack display={"flex"} alignItems={"center"} flexDirection={"row"}>
          <Image
            src={item.image}
            w="32px"
            h="32px"
            objectFit={"cover"}
            minW={"32px"}
            flex={"0 1 0%"}
          />
          <VStack
            display={"flex"}
            alignItems={"start"}
            flexDirection={"column"}
          >
            <Text fontWeight={600}>{item.name}</Text>
          </VStack>
        </VStack>
      </Td>
      <Td>
        <HStack spacing={1}>
          <Icon viewBox="0 0 128 128">
            <path
              fill="currentColor"
              d="M65.7 96.4V128l39.2-55.1zM103.4 62.7 65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7 62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z"
            ></path>
          </Icon>
          <Text>{item.price}</Text>
        </HStack>
      </Td>
      <Td>{item.quantity}</Td>
      <Td color={"primary.500"}>{item.trader}</Td>
      <Td color={"primary.500"}>{item.time}</Td>
    </Tr>
  ));
};

const CollectionActivityTab = (props: any) => {
  return (
    <TableContainer>
      <Table variant="simple" fontSize={"sm"}>
        <Thead>
          <Tr>
            <Th w={"150px"}>TYPE</Th>
            <Th>ITEM</Th>
            <Th w={"200px"}>PRICE</Th>
            <Th w={"200px"}>QUANTITY</Th>
            <Th>TRADER</Th>
            <Th>TIME</Th>
          </Tr>
        </Thead>
        <Tbody>{getActivies()}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default CollectionActivityTab;
