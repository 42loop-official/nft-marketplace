import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
  VStack,
  HStack,
  Image,
  Icon,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
} from "@chakra-ui/react";
import Link from "next/link";
import { useSize } from "@chakra-ui/react-use-size";
import { useEffect, useRef, useState } from "react";
import CollectionOfferTab from "./CollectionBidTab";
import CollectionActivityTab from "./CollectionActivityTab";
import { useNfts } from "@/hooks/useNfts";
import { useOpenseaSdk } from "@/hooks/useOpensea";
import { OpenSeaCollection } from "opensea-js";
export function CollectionItems(props: any) {
  const sdk = useOpenseaSdk();
  const [collection, setCollection] = useState<OpenSeaCollection>();
  useEffect(() => {
    sdk.api
      .getCollection(props.slug)
      .then((collectionRes) => {
        setCollection(collectionRes);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const itemRef = useRef(null);
  const itemSize = useSize(itemRef);
  const [itemsWidth, setItemsWidth] = useState(0);
  useEffect(() => {
    if (itemSize && itemSize?.width) {
      setItemsWidth(itemSize?.width);
    }
  }, [itemSize?.width]);

  return (
    <Box
      flex="1 1 0%"
      height={"100%"}
      overflow={"hidden"}
      borderRightWidth={"1px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        minW={"550px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
          height={"6rem"}
          borderBottomWidth={"1px"}
        >
          <Stack
            className="hide-scrollbar"
            flexDirection={"row"}
            overflowX={"scroll"}
            alignItems={"center"}
            w={"100%"}
            gap={0}
          >
            <HStack alignItems={"center"} gap={0} spacing={0}>
              <Box paddingInlineStart={4} paddingInlineEnd={4}>
                <Box p={3} w={"calc(-1px + 6rem)"} h={"calc(-1px + 6rem)"}>
                  <Image
                    alt="name"
                    objectFit={"cover"}
                    borderRadius={"50%"}
                    src={collection?.imageUrl}
                  ></Image>
                </Box>
              </Box>
              <VStack alignItems={"center"} spacing={0} whiteSpace={"nowrap"}>
                <HStack alignItems={"center"} justifyContent={"start"} w="100%">
                  <Icon
                    fill={"currentcolor"}
                    stroke={"currentcolor"}
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    cursor={"pointer"}
                    _hover={{ color: "orange" }}
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                  </Icon>
                  <Popover trigger="hover">
                    <PopoverTrigger>
                      <Heading as={"h2"} fontSize={"md"}>
                        {collection?.name}
                      </Heading>
                    </PopoverTrigger>
                    <PopoverContent
                      filter={"drop-shadow(gray 0px 0px 5px)"}
                      _focusVisible={{
                        filter: "drop-shadow(gray 0px 0px 5px)",
                        borderColor: "gray.200",
                        outline: "none",
                      }}
                    >
                      <PopoverBody
                        overflow={"auto"}
                        p={2}
                        paddingInlineStart={5}
                        paddingInlineEnd={5}
                        borderColor={"gray.200"}
                      >
                        <Text
                          fontSize={"xs"}
                          textAlign={"center"}
                          whiteSpace={"normal"}
                          w="100%"
                        >
                          {collection?.description}
                        </Text>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover trigger="hover">
                    <PopoverTrigger>
                      <Icon
                        viewBox="0 0 512 512"
                        stroke={"currentcolor"}
                        strokeWidth={0}
                        fill={"currentcolor"}
                        color={"orange"}
                      >
                        <path d="M188.28 59.47c-19.086 0-34.56 15.468-34.56 34.56 0 16.077 10.983 29.57 25.843 33.44l-35.344 81.936c15.877 2.885 27.905 16.784 27.905 33.5 0 18.806-15.23 34.063-34.03 34.063-18.802 0-34.032-15.258-34.032-34.064 0-13.37 7.703-24.924 18.906-30.5l-50.814-79.22c8.007-5.82 13.22-15.24 13.22-25.905 0-17.693-14.314-32.06-32-32.06-17.688 0-32.032 14.37-32.032 32.06 0 17.693 14.344 32.032 32.03 32.032.734 0 1.468-.014 2.188-.062l41.907 227h316l41.936-227c.72.048 1.455.063 2.188.063 17.686 0 32.03-14.34 32.03-32.032 0-17.693-14.344-32.06-32.03-32.06-17.687 0-32.03 14.37-32.03 32.06-.002 10.723 5.286 20.187 13.373 26l-50.656 79.532c10.778 5.72 18.126 17.04 18.126 30.094 0 18.806-15.23 34.063-34.03 34.063s-34.032-15.258-34.032-34.064c0-17.11 12.602-31.267 29.03-33.687l-34.75-81.532c15.275-3.577 26.657-17.287 26.657-33.657 0-19.094-15.474-34.56-34.56-34.56-19.09 0-34.564 15.468-34.564 34.56 0 14.798 9.308 27.415 22.375 32.345L268 202.345c14.62 4.52 25.25 18.112 25.25 34.218 0 19.796-16.053 35.843-35.844 35.843-19.79 0-35.812-16.047-35.812-35.844 0-15.158 9.403-28.102 22.687-33.343l-44.124-76.72c13.234-4.845 22.688-17.552 22.688-32.47 0-19.094-15.475-34.56-34.563-34.56zM97.438 384.936c-23.978 3.763-22.86 39.844 4.188 39.844h6.656l.064.345h294.28l.063-.344h7.625c26.034 0 27.88-35.928 4.313-39.842H97.437z"></path>
                      </Icon>
                    </PopoverTrigger>
                    <PopoverContent
                      filter={"drop-shadow(gray 0px 0px 5px)"}
                      _focusVisible={{
                        filter: "drop-shadow(gray 0px 0px 5px)",
                        borderColor: "gray.200",
                        outline: "none",
                      }}
                    >
                      <PopoverBody
                        overflow={"auto"}
                        p={2}
                        paddingInlineStart={5}
                        paddingInlineEnd={5}
                        borderColor={"gray.200"}
                      >
                        <Text
                          fontSize={"xs"}
                          textAlign={"center"}
                          whiteSpace={"normal"}
                          w="100%"
                        >
                          This collection enforces royalties. Rate: 0.00%
                        </Text>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </HStack>
                <HStack alignItems={"center"} justifyContent={"start"} w="100%">
                  <HStack alignItems={"center"} spacing={1}>
                    <Link href={collection?.projectUrl || "/"} target="_blank">
                      <Button
                        aria-label="Website"
                        variant={"ghost"}
                        p={0}
                        size={"xs"}
                        fontSize={"xs"}
                        height={6}
                      >
                        <Icon
                          stroke={"currentcolor"}
                          strokeWidth={0}
                          fill={"currentcolor"}
                          viewBox="0 0 496 512"
                        >
                          <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path>
                        </Icon>
                      </Button>
                    </Link>
                    <Link href={collection?.discordUrl || "/"} target="_blank">
                      <Button
                        aria-label="Discord"
                        variant={"ghost"}
                        p={0}
                        size={"xs"}
                        fontSize={"xs"}
                        height={6}
                      >
                        <Icon
                          stroke={"currentcolor"}
                          strokeWidth={0}
                          fill={"currentcolor"}
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                        </Icon>
                      </Button>
                    </Link>
                    <Link
                      href={
                        `https://x.com/${collection?.twitterUsername}` || "/"
                      }
                      target="_blank"
                    >
                      <Button
                        aria-label="X.Com"
                        variant={"ghost"}
                        p={0}
                        fontSize={"xs"}
                        size={"xs"}
                        height={6}
                      >
                        <Icon
                          stroke={"currentcolor"}
                          strokeWidth={0}
                          fill={"currentcolor"}
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                        </Icon>
                      </Button>
                    </Link>
                  </HStack>
                </HStack>
              </VStack>
            </HStack>
            <VStack
              spacing={0}
              marginInlineStart={6}
              marginInlineEnd={0}
              marginBottom={0}
              marginTop={0}
              alignItems={"start"}
            >
              <Text as={"b"} color={"green.500"} fontSize={"sm"}>
                30.80
              </Text>
              <Text
                textTransform={"uppercase"}
                color={"gray.500"}
                fontSize={"xs"}
              >
                BUY NOW
              </Text>
            </VStack>
            <VStack
              spacing={0}
              marginInlineStart={6}
              marginInlineEnd={0}
              marginBottom={0}
              marginTop={0}
              alignItems={"start"}
            >
              <Text
                as={"b"}
                color={"red.500"}
                fontSize={"sm"}
                whiteSpace={"nowrap"}
              >
                25.80
              </Text>
              <Text
                textTransform={"uppercase"}
                color={"gray.500"}
                fontSize={"xs"}
                whiteSpace={"nowrap"}
              >
                SELL NOW
              </Text>
            </VStack>
            <VStack
              spacing={0}
              marginInlineStart={6}
              marginInlineEnd={0}
              marginBottom={0}
              marginTop={0}
              alignItems={"start"}
            >
              <Text as={"b"} fontSize={"sm"} whiteSpace={"nowrap"}>
                412/4,993 (8.25%)
              </Text>
              <Text
                textTransform={"uppercase"}
                color={"gray.500"}
                fontSize={"xs"}
                whiteSpace={"nowrap"}
              >
                LISTED/SUPPLY
              </Text>
            </VStack>
            <VStack
              spacing={0}
              marginInlineStart={6}
              marginInlineEnd={0}
              marginBottom={0}
              marginTop={0}
              alignItems={"start"}
            >
              <Text as={"b"} fontSize={"sm"} whiteSpace={"nowrap"}>
                154
              </Text>
              <Text
                textTransform={"uppercase"}
                color={"gray.500"}
                fontSize={"xs"}
                whiteSpace={"nowrap"}
              >
                VOLUME (1H)
              </Text>
            </VStack>
            <VStack
              spacing={0}
              marginInlineStart={6}
              marginInlineEnd={0}
              marginBottom={0}
              marginTop={0}
              alignItems={"start"}
            >
              <Text as={"b"} fontSize={"sm"} whiteSpace={"nowrap"}>
                2,349,848
              </Text>
              <Text
                textTransform={"uppercase"}
                color={"gray.500"}
                fontSize={"xs"}
                whiteSpace={"nowrap"}
              >
                VOLUME (ALL)
              </Text>
            </VStack>
            <VStack
              spacing={0}
              marginInlineStart={6}
              marginInlineEnd={0}
              marginBottom={0}
              marginTop={0}
              alignItems={"start"}
            >
              <Text as={"b"} fontSize={"sm"} whiteSpace={"nowrap"}>
                5
              </Text>
              <Text
                textTransform={"uppercase"}
                color={"gray.500"}
                fontSize={"xs"}
                whiteSpace={"nowrap"}
              >
                SALES (1H)
              </Text>
            </VStack>
            <VStack
              spacing={0}
              marginInlineStart={6}
              marginInlineEnd={0}
              marginBottom={0}
              marginTop={0}
              alignItems={"start"}
            >
              <Text as={"b"} fontSize={"sm"} whiteSpace={"nowrap"}>
                0.00%
              </Text>
              <Text
                textTransform={"uppercase"}
                color={"gray.500"}
                fontSize={"xs"}
                whiteSpace={"nowrap"}
              >
                PRICE Δ (1H)
              </Text>
            </VStack>
          </Stack>
        </Box>
        <Tabs flex={"1 1 0%"}>
          <HStack
            className="hide-scrollbar"
            justifyContent={"start"}
            pt={[0, 3]}
            paddingInlineEnd={[0, 3]}
            paddingInlineStart={[0, 3]}
          >
            <TabList borderBottomWidth={"0"}>
              <HStack alignItems={"center"}>
                <Button
                  p={0}
                  m={0}
                  minW={"32px"}
                  minH={"32px"}
                  fontSize={"sm"}
                  height={8}
                  verticalAlign="middle"
                  background={props.showSideBar ? "primary.500" : "gray.300"}
                  color={props.showSideBar ? "white" : "black"}
                  _hover={{ color: "white", background: "primary.500" }}
                  display={!props.isLargerThan919 ? "none" : "inline-flex"}
                  onClick={() => {
                    props.setShowSideBar(!props.showSideBar);
                  }}
                >
                  <Icon
                    viewBox="0 0 16 16"
                    strokeWidth={0}
                    stroke={"currentcolor"}
                    fill={"currentcolor"}
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </Icon>
                </Button>
                <Button
                  p={0}
                  m={0}
                  minW={"32px"}
                  minH={"32px"}
                  fontSize={"sm"}
                  height={8}
                  background={props.showFilter ? "primary.500" : "gray.300"}
                  color={props.showFilter ? "white" : "black"}
                  verticalAlign="middle"
                  _hover={{ color: "white", background: "primary.500" }}
                  display={!props.isLargerThan919 ? "none" : "inline-flex"}
                  onClick={() => {
                    if (!props.showFilter) {
                      props.setShowSideBar(true);
                    }
                    props.setShowFilter(!props.showFilter);
                  }}
                >
                  <Icon
                    viewBox="0 0 24 24"
                    strokeWidth={0}
                    stroke={"currentcolor"}
                    fill={"currentcolor"}
                  >
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </Icon>
                </Button>
                <Tab
                  borderWidth={"0 0 3px"}
                  fontSize={"sm"}
                  _selected={{
                    color: "primary.500",
                    borderColor: "primary.500",
                    filter: "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)",
                  }}
                  _active={"none"}
                >
                  ITEMS
                </Tab>
                <Tab
                  borderWidth={"0 0 3px"}
                  fontSize={"sm"}
                  _selected={{
                    color: "primary.500",
                    borderColor: "primary.500",
                    filter: "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)",
                  }}
                  _active={"none"}
                >
                  BIDS
                </Tab>
                <Tab
                  borderWidth={"0 0 3px"}
                  fontSize={"sm"}
                  _selected={{
                    color: "primary.500",
                    borderColor: "primary.500",
                    filter: "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)",
                  }}
                  _active={"none"}
                >
                  ACTIVITY
                </Tab>
              </HStack>
            </TabList>
          </HStack>
          <TabPanels>
            <TabPanel>
              <VStack ref={itemRef} width={"100%"} height={"100%"}>
                <Box
                  width={"100%"}
                  height={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    flexShrink={0}
                    mb={1}
                  >
                    <HStack w={"100%"} spacing={[0, 2]}>
                      <HStack w={"100%"} spacing={[0, 2]}>
                        <Box w={"50%"}>
                          <InputGroup>
                            <InputLeftElement
                              pointerEvents="none"
                              w={6}
                              left={0}
                              height={"100%"}
                              fontSize={"xs"}
                            >
                              <SearchIcon color="gray.300" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Search NFTs by Name"
                              height={6}
                              fontSize={"xs"}
                              paddingInlineEnd={2}
                              paddingInlineStart={6}
                              size={"xs"}
                              borderRadius={"5px"}
                              outline={"transparent solid 2px"}
                              _focusVisible={{
                                borderColor: "primary.500",
                                boxShadow: "0 0 0 1px #165eff",
                              }}
                            />
                          </InputGroup>
                        </Box>
                        <Box flex={"1 1 0%"} placeSelf={"stretch"}></Box>
                        <Box display={"flex"} alignItems={"center"} pb={1}>
                          <Button
                            variant={"ghost"}
                            fontSize={"md"}
                            minW={10}
                            height={10}
                            fontWeight={"semibold"}
                            paddingInlineStart={4}
                            paddingInlineEnd={4}
                          >
                            <Icon
                              stroke="currentColor"
                              strokeWidth={0}
                              fill="currentColor"
                              viewBox="0 0 17 17"
                            >
                              <g></g>
                              <path d="M1 1h3v3h-3v-3zM5 4h3v-3h-3v3zM9 4h3v-3h-3v3zM13 1v3h3v-3h-3zM1 8h3v-3h-3v3zM5 8h3v-3h-3v3zM9 8h3v-3h-3v3zM13 8h3v-3h-3v3zM1 12h3v-3h-3v3zM5 12h3v-3h-3v3zM9 12h3v-3h-3v3zM13 12h3v-3h-3v3zM1 16h3v-3h-3v3zM5 16h3v-3h-3v3zM9 16h3v-3h-3v3zM13 16h3v-3h-3v3z"></path>
                            </Icon>
                          </Button>
                          <Button
                            variant={"ghost"}
                            fontSize={"md"}
                            minW={10}
                            height={10}
                            fontWeight={"semibold"}
                            paddingInlineStart={4}
                            paddingInlineEnd={4}
                          >
                            <Icon
                              stroke="currentColor"
                              strokeWidth={0}
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"></path>
                            </Icon>
                          </Button>
                          <Button
                            variant={"ghost"}
                            fontSize={"md"}
                            minW={10}
                            height={10}
                            fontWeight={"semibold"}
                            paddingInlineStart={4}
                            paddingInlineEnd={4}
                          >
                            <Icon
                              stroke="currentColor"
                              strokeWidth={0}
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                            </Icon>
                          </Button>
                        </Box>
                      </HStack>
                      <Select
                        size={"xs"}
                        maxW={"200px"}
                        height={6}
                        w={"100%"}
                        paddingInlineStart={2}
                        minW={0}
                        borderRadius={5}
                        iconSize="xl"
                        icon={<ChevronDownIcon />}
                      >
                        <option value="price (low to high)">
                          price (low to high)
                        </option>
                        <option value="price (high to low)">
                          price (high to low)
                        </option>
                        <option value="rarity (rare to common)">
                          rarity (rare to common)
                        </option>
                        <option value="rarity (common to rare)">
                          rarity (common to rare)
                        </option>
                        <option value="last sale (low to high)">
                          last sale (low to high)
                        </option>
                        <option value="last sale (high to low)">
                          last sale (high to low)
                        </option>
                        <option value="recently listed">recently listed</option>
                      </Select>
                      <Button variant={"ghost"}>
                        <Icon
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
                          <path
                            fillRule="evenodd"
                            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                          ></path>
                        </Icon>
                      </Button>
                    </HStack>
                  </Box>
                  <Box></Box>
                  <Box flex={"1 1 0%"} width={"100%"}>
                    <Box display={"flex"} flexDirection={"column"} h={"100%"}>
                      <Box
                        className="hide-scrollbar"
                        overflowX={"scroll"}
                        flex={"1 1 0%"}
                      >
                        <Box
                          style={{
                            overflow: "visible",
                          }}
                        >
                          <Box
                            style={{
                              position: "relative",
                              height: "666px",
                              width: itemsWidth + "px",
                              overflow: "hidden auto",
                              willChange: "transform",
                              direction: "ltr",
                            }}
                          >
                            <Box width={itemsWidth + "px"} height={"1750px"}>
                              {useNfts(props.slug, itemsWidth)}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </VStack>
            </TabPanel>
            <TabPanel>
              <CollectionOfferTab />
            </TabPanel>
            <TabPanel>
              <CollectionActivityTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
