import {
  VStack,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import { useCollections } from "@/hooks/useCollections";

export function CollectionTables() {
  return (
    <>
      <VStack w={"100%"}>
        <VStack w={"100%"}>
          <TableContainer
            width={"100%"}
            maxWidth={"100%"}
            whiteSpace={"nowrap"}
            overflow={"auto hide"}
            flex={"1 1 0%"}
          >
            <Table variant="simple" w={"100%"}>
              <Thead>
                <Tr>
                  <Th>Collection</Th>
                  <Th>Floor</Th>
                  <Th>1h volume</Th>
                  <Th isNumeric>1h %</Th>
                  <Th isNumeric>Sale</Th>
                  <Th isNumeric>Market cap</Th>
                  <Th isNumeric>Total volume</Th>
                  <Th isNumeric>Listed</Th>
                </Tr>
              </Thead>
              <Tbody>{useCollections()}</Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </VStack>
    </>
  );
}
