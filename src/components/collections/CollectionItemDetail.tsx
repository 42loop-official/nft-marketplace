import {
  Badge,
  Box,
  Button,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const CollectionItemDetail = (props: any) => {
  const { item, isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        maxW={"6xl"}
        maxH={"90vh"}
        boxShadow={"lg"}
        filter={"drop-shadow(gray 0px 0px 5px)"}
      >
        <ModalHeader
          flex={"0 1 0%"}
          paddingInlineStart={5}
          paddingInlineEnd={5}
          pt={3}
          pb={3}
          fontSize={"xl"}
          fontWeight={"semibold"}
          borderWidth={"1px"}
          borderTopLeftRadius={"5px"}
          borderTopRightRadius={"5px"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Stack flexDirection={"column"} width={"100%"} spacing={1} gap={0}>
              <HStack gap={0}>
                <HStack gap={0}>
                  <Icon
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    color={"gray.400"}
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                  </Icon>
                  <Text fontSize={"xl"}>{item.name}</Text>
                </HStack>
                <HStack marginLeft={2} gap={0}>
                  <Box>
                    <Badge
                      background={"green.500"}
                      color={"rgb(240, 242, 244)"}
                      borderRadius={10}
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <Icon
                          color={"rgb(240, 242, 244)"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="currentColor"
                        >
                          <path d="M4.87759 3.00293H19.1319C19.4518 3.00293 19.7524 3.15601 19.9406 3.41476L23.7634 8.67115C23.9037 8.86403 23.8882 9.12913 23.7265 9.30438L12.3721 21.6049C12.1848 21.8078 11.8685 21.8205 11.6656 21.6332C11.6558 21.6241 11.6464 21.6147 11.6373 21.6049L0.282992 9.30438C0.121226 9.12913 0.10575 8.86403 0.246026 8.67115L4.06886 3.41476C4.25704 3.15601 4.55766 3.00293 4.87759 3.00293Z"></path>
                        </Icon>
                        <Text fontSize={"sm"} marginLeft={1}>
                          {item.rarity}
                        </Text>
                      </Box>
                    </Badge>
                  </Box>
                </HStack>
              </HStack>
            </Stack>

            <HStack gap={0} alignItems={"center"}>
              <Box>
                <HStack gap={0}>
                  <Button
                    variant={"ghost"}
                    minW={8}
                    height={8}
                    fontWeight={"semibold"}
                    fontSize={"sm"}
                    p={0}
                    paddingInlineStart={3}
                    paddingInlineEnd={3}
                    aria-label="refetch nft"
                  >
                    <Icon
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      color={"black"}
                    >
                      <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
                      <path
                        fillRule="evenodd"
                        d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                      ></path>
                    </Icon>
                  </Button>
                  <Button
                    variant={"ghost"}
                    minW={8}
                    height={8}
                    fontWeight={"semibold"}
                    fontSize={"sm"}
                    p={0}
                    paddingInlineStart={3}
                    paddingInlineEnd={3}
                    aria-label="prev"
                  >
                    <Icon
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 1024 1024"
                      color={"black"}
                    >
                      <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                    </Icon>
                  </Button>
                  <Button
                    variant={"ghost"}
                    minW={8}
                    height={8}
                    fontWeight={"semibold"}
                    fontSize={"sm"}
                    p={0}
                    paddingInlineStart={3}
                    paddingInlineEnd={3}
                    aria-label="next"
                  >
                    <Icon
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 1024 1024"
                      color={"black"}
                    >
                      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                    </Icon>
                  </Button>
                  <Button
                    variant={"ghost"}
                    minW={8}
                    height={8}
                    fontWeight={"semibold"}
                    fontSize={"sm"}
                    p={0}
                    paddingInlineStart={3}
                    paddingInlineEnd={3}
                    aria-label="close"
                    onClick={onClose}
                  >
                    <Icon
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 1024 1024"
                      color={"black"}
                    >
                      <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
                    </Icon>
                  </Button>
                </HStack>
              </Box>
            </HStack>
          </Box>
        </ModalHeader>
        <ModalBody
          flex={"1 1 0%"}
          overflow={"auto"}
          pt={0}
          paddingInlineStart={5}
          paddingInlineEnd={5}
        >
          <Tabs>
            <TabList>
              <Tab
                textTransform="uppercase"
                _selected={{
                  color: "primary.500",
                  borderColor: "primary.500",
                  filter: "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)",
                }}
                _active={"none"}
                fontSize={"sm"}
              >
                Overview
              </Tab>
              <Tab
                textTransform="uppercase"
                _selected={{
                  color: "primary.500",
                  borderColor: "primary.500",
                  filter: "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)",
                }}
                _active={"none"}
                fontSize={"sm"}
              >
                activity
              </Tab>
              <Tab
                textTransform="uppercase"
                _selected={{
                  color: "primary.500",
                  borderColor: "primary.500",
                  filter: "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)",
                }}
                _active={"none"}
                fontSize={"sm"}
              >
                offers
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter>xxx</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CollectionItemDetail;
