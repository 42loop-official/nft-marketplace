import {
  HStack,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const CollectionOfferTab = (props: any) => {
  return (
    <TableContainer>
      <Table variant="simple" fontSize={"sm"}>
        <Thead>
          <Tr>
            <Th w={"150px"}>BID PRICE</Th>
            <Th w={"150px"}>QUANTITY</Th>
            <Th>MARKETPLACE</Th>
            <Th>BIDDER</Th>
            <Th>TIME</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <HStack spacing={1}>
                <Icon viewBox="0 0 128 128">
                  <path
                    fill="currentColor"
                    d="M65.7 96.4V128l39.2-55.1zM103.4 62.7 65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7 62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z"
                  ></path>
                </Icon>
                <Text>4.20</Text>
              </HStack>
            </Td>
            <Td>2</Td>
            <Td>OpenSea</Td>
            <Td color={"primary.500"}>MysticWho.eth</Td>
            <Td color={"primary.500"}>1 days ago</Td>
          </Tr>
          <Tr>
            <Td>
              <HStack spacing={1}>
                <Icon viewBox="0 0 128 128">
                  <path
                    fill="currentColor"
                    d="M65.7 96.4V128l39.2-55.1zM103.4 62.7 65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7 62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z"
                  ></path>
                </Icon>
                <Text>4.206</Text>
              </HStack>
            </Td>
            <Td>2</Td>
            <Td>OpenSea</Td>
            <Td color={"primary.500"}>noname.eth</Td>
            <Td color={"primary.500"}>3 days ago</Td>
          </Tr>
          <Tr>
            <Td>
              <HStack spacing={1}>
                <Icon viewBox="0 0 128 128">
                  <path
                    fill="currentColor"
                    d="M65.7 96.4V128l39.2-55.1zM103.4 62.7 65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7 62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z"
                  ></path>
                </Icon>
                <Text>4.2069</Text>
              </HStack>
            </Td>
            <Td>2</Td>
            <Td>OpenSea</Td>
            <Td color={"primary.500"}>sahada.eth</Td>
            <Td color={"primary.500"}>5 days ago</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CollectionOfferTab;
