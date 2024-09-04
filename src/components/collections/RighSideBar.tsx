"use client";
import { useState, useEffect } from "react";
import {
  Box,
  ButtonGroup,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Heading,
  VStack,
  RadioGroup,
  Radio,
  Stack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Icon,
  Switch,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
export function RighSideBar({
  showFilter,
  height,
}: {
  showFilter: boolean;
  height: number | undefined;
}) {
  const [sweepValue, setSweepValue] = useState(0);

  const topHeightNav = 300;

  const [bottomHeightNav, setBottomHeightNav] = useState(3000);

  useEffect(() => {
    if (height) {
      setBottomHeightNav(height - topHeightNav);
    }
  }, [height]);
  return (
    <Box display={"flex"}>
      <Box w="330px" h="100%" borderRightWidth="1px">
        <Box
          display={"flex"}
          flexDirection={"column"}
          h="100%"
          position={"relative"}
        >
          {/* <Box pt={3} pb={3} paddingInlineStart={3} paddingInlineEnd={3}>
            <ButtonGroup variant="outline" w="100%">
              <Button
                borderColor="primary.400"
                backgroundColor="primary.200"
                color="black"
                textTransform="uppercase"
                width="50%"
                height={10}
                minW={10}
                _hover={{
                  backgroundColor: "primary.200",
                  borderColor: "primary.400",
                  borderWidth: "2px",
                }}
              >
                Buy
              </Button>
              <Button
                borderColor="gray.400"
                backgroundColor="gray.200"
                color="gray.600"
                textTransform="uppercase"
                width="50%"
                height={10}
                minW={10}
                _hover={{
                  backgroundColor: "red.200",
                  borderColor: "red.400",
                  borderWidth: "2px",
                }}
              >
                Sell
              </Button>
            </ButtonGroup>
          </Box> */}
          <Box flex="1 1 0%">
            <Box overflow={"visible"}>
              <Box w="329px" h={topHeightNav}>
                <Box
                  className="hide-scrollbar"
                  overflow={"scroll"}
                  height="300px"
                >
                  <Box
                    className="hide-scrollbar"
                    overflow={"scroll"}
                    pb={3}
                    paddingInlineStart={4}
                    paddingInlineEnd={4}
                  >
                    <Box h="100%" w="100%">
                      <Tabs>
                        <TabList mb={3} borderBottomWidth={"0"}>
                          <Tab
                            textTransform="uppercase"
                            _selected={{
                              color: "primary.500",
                              borderColor: "primary.500",
                              filter:
                                "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)",
                            }}
                            _active={"none"}
                          >
                            SWEEP
                          </Tab>
                          {/* <Tab
                            textTransform="uppercase"
                            _selected={{
                              color: "primary.500",
                              borderColor: "primary.500",
                              filter:
                                "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)",
                            }}
                            _active={"none"}
                          >
                            BID
                          </Tab>
                          <Tab
                            textTransform="uppercase"
                            _selected={{
                              color: "primary.500",
                              borderColor: "primary.500",
                              filter:
                                "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)",
                            }}
                            _active={"none"}
                          >
                            CANCEL
                          </Tab> */}
                        </TabList>

                        <TabPanels>
                          <TabPanel p={1}>
                            <Box w="100%">
                              <Heading
                                as="h2"
                                size="sm"
                                noOfLines={1}
                                mb={1}
                                color="gray.500"
                              >
                                NFTS TO BUY
                              </Heading>
                              <VStack>
                                <Box
                                  display={"flex"}
                                  alignItems={"center"}
                                  w="100%"
                                >
                                  <Box flex="1 1 0%">
                                    <Box
                                      display={"flex"}
                                      alignItems={"center"}
                                      w="100%"
                                    >
                                      <Slider
                                        aria-label="slider-ex-3"
                                        defaultValue={0}
                                        min={0}
                                        max={50}
                                        step={1}
                                        flex="3 1 0%"
                                        outline={0}
                                        marginInlineEnd={3}
                                        marginInlineStart={3}
                                        w="100%"
                                        value={sweepValue}
                                        onChange={(val) => setSweepValue(val)}
                                      >
                                        <SliderTrack h="5px">
                                          <SliderFilledTrack background="primary.500" />
                                        </SliderTrack>
                                        <SliderThumb
                                          background="primary.500"
                                          w={5}
                                          h={5}
                                        />
                                      </Slider>
                                      <Stack
                                        display={"flex"}
                                        alignItems={"center"}
                                        flexDirection={"row"}
                                      >
                                        <NumberInput
                                          defaultValue={0}
                                          min={0}
                                          max={50}
                                          step={1}
                                          maxW="80px"
                                          minW="80px"
                                          pl={1}
                                          size={"sm"}
                                          _focusVisible={{
                                            borderColor: "primary.500",
                                            boxShadow: "0 0 0 1px #165eff",
                                          }}
                                          onChange={(val) =>
                                            setSweepValue(Number.parseInt(val))
                                          }
                                          value={sweepValue}
                                        >
                                          <NumberInputField />
                                          <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                          </NumberInputStepper>
                                        </NumberInput>
                                      </Stack>
                                    </Box>
                                  </Box>
                                  <RadioGroup
                                    ml={3}
                                    defaultValue="1"
                                    size={"sm"}
                                  >
                                    <Stack direction="row">
                                      <Radio colorScheme="primary" value="1">
                                        Count
                                      </Radio>
                                      <Radio colorScheme="primary" value="2">
                                        ETH
                                      </Radio>
                                    </Stack>
                                  </RadioGroup>
                                </Box>
                                <Button colorScheme="primary" mt={5}>
                                  SWEEP {sweepValue} NFTS
                                </Button>
                              </VStack>
                            </Box>
                          </TabPanel>
                          {/* <TabPanel>
                            <p>two!</p>
                          </TabPanel>
                          <TabPanel>
                            <p>three!</p>
                          </TabPanel> */}
                        </TabPanels>
                      </Tabs>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box w="329px" h={bottomHeightNav} opacity={showFilter ? 1 : 0}>
                <Box
                  className="hide-scrollbar"
                  overflowY={"scroll"}
                  h="100%"
                  p={3}
                >
                  <Box h="22px" mt={3} mb={3} display={"flex"}>
                    <Heading as="h2" size={"sm"}>
                      FILTERS
                    </Heading>
                  </Box>
                  <Stack
                    display={"flex"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    width="100%"
                    spacing={3}
                  >
                    <Stack
                      display={"flex"}
                      alignItems={"center"}
                      flexDirection={"row"}
                      width="100%"
                      spacing={1}
                    >
                      <Stack
                        display={"flex"}
                        alignItems={"center"}
                        flexDirection={"row"}
                        width="100%"
                      >
                        <Icon viewBox="0 0 24 24" color="gray">
                          <path
                            d="M20 4V16H22V2H8V4H20Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M2 8V22H16V8H2ZM14 10H4V20H14V10Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M17 7H5V5H19V19H17V7Z"
                            fill="currentColor"
                          ></path>
                        </Icon>
                        <Heading as="h2" size="sm" color="gray" fontSize="sm">
                          ALL NFTS
                        </Heading>
                      </Stack>
                      <Box flex="1 1 0%" placeSelf="stretch"></Box>
                      <Switch colorScheme="primary" />
                    </Stack>
                    <Stack
                      display={"flex"}
                      alignItems={"center"}
                      flexDirection={"row"}
                      width="100%"
                      spacing={1}
                    >
                      <Stack
                        display={"flex"}
                        alignItems={"center"}
                        flexDirection={"row"}
                        width="100%"
                      >
                        <Icon viewBox="0 0 16 16" color="gray">
                          <path
                            fill="currentColor"
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          ></path>
                        </Icon>
                        <Heading as="h2" size="sm" color="gray" fontSize="sm">
                          FAVORITES
                        </Heading>
                      </Stack>
                      <Box flex="1 1 0%" placeSelf="stretch"></Box>
                      <Switch colorScheme="primary" />
                    </Stack>
                    <Box w="100%">
                      <Accordion allowMultiple>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Heading
                                as="h2"
                                color="gray"
                                flex="1"
                                textAlign="left"
                                size="sm"
                                fontSize="sm"
                              >
                                PRICE
                              </Heading>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Heading
                                as="h2"
                                color="gray"
                                flex="1"
                                textAlign="left"
                                size="sm"
                                fontSize="sm"
                              >
                                RARITY
                              </Heading>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Heading
                                as="h2"
                                color="gray"
                                flex="1"
                                textAlign="left"
                                size="sm"
                                fontSize="sm"
                              >
                                TRAIT COUNT
                              </Heading>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Heading
                                as="h2"
                                color="gray"
                                flex="1"
                                textAlign="left"
                                size="sm"
                                fontSize="sm"
                              >
                                TRAITS
                              </Heading>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
