import {
  Badge,
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  useBoolean,
  useDisclosure,
} from "@chakra-ui/react";
import CollectionItemDetail from "./CollectionItemDetail";
import "./ColletionItem.css";

const CollectionItem = ({
  item,
  options,
}: {
  item: {
    rarity: string;
    name: string;
    price: string;
    imageUrl: string;
  };
  options: {
    left: number;
    top: number;
    height: number;
    with: number;
  };
}) => {
  const [hoverOption, setHoverOption] = useBoolean();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        style={{
          position: "absolute",
          left: options.left + "px",
          top: options.top + "px",
          height: options.height + "px",
          width: options.with + "px",
        }}
      >
        <Box p={1} height={"100%"} userSelect={"none"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            cursor={"pointer"}
            borderWidth={"1px"}
            borderColor={"gray.100"}
            // background={"rgb(240, 242, 244)"}
            opacity={1}
            borderRadius={"5px"}
            className="item-container"
            _hover={{ background: "primary.100" }}
            onMouseEnter={setHoverOption.on}
            onMouseLeave={setHoverOption.off}
          >
            <Box
              flexShrink={0}
              w={"100%"}
              position={"relative"}
              style={{ aspectRatio: "1/1" }}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"5px"}
                pointerEvents={"all"}
                position={"absolute"}
                zIndex={10}
                m={2}
                top={0}
                left={0}
              >
                <Badge
                  borderRadius={"50px"}
                  p={1.5}
                  fontSize={"xs"}
                  background={"gray.300"}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <Icon
                      stroke="currentColor"
                      strokeWidth="0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.87759 3.00293H19.1319C19.4518 3.00293 19.7524 3.15601 19.9406 3.41476L23.7634 8.67115C23.9037 8.86403 23.8882 9.12913 23.7265 9.30438L12.3721 21.6049C12.1848 21.8078 11.8685 21.8205 11.6656 21.6332C11.6558 21.6241 11.6464 21.6147 11.6373 21.6049L0.282992 9.30438C0.121226 9.12913 0.10575 8.86403 0.246026 8.67115L4.06886 3.41476C4.25704 3.15601 4.55766 3.00293 4.87759 3.00293Z"></path>
                    </Icon>
                  </Box>
                </Badge>
              </Box>
              <Box
                className="image-group"
                position={"relative"}
                width={"100%"}
                height={"100%"}
              >
                <Image src={item.imageUrl} />
              </Box>
              <VStack
                alignItems={"center"}
                mt={2}
                mb={2}
                w={"100%"}
                position={"absolute"}
                zIndex={10}
                bottom={2}
                left={0}
              >
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  w={"100%"}
                  opacity={hoverOption ? 1 : 0}
                >
                  <Box alignItems={"center"} opacity={1} marginInlineEnd={2}>
                    <Button
                      fontWeight={"bold"}
                      size={"xs"}
                      background={"green.500"}
                      _hover={{
                        background: "green.600",
                      }}
                    >
                      BUY
                    </Button>
                  </Box>
                  <Box alignItems={"center"} opacity={1}>
                    <Button
                      background="yellow.500"
                      fontWeight={"bold"}
                      size={"xs"}
                      _hover={{
                        background: "yellow.600",
                      }}
                    >
                      BID
                    </Button>
                  </Box>
                </Box>
              </VStack>
            </Box>
            <Box
              className="hide-scrollbar"
              flex={"1 1 0%"}
              overflowY={"hidden"}
            >
              <Box
                className="hide-scrollbar"
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                overflow={"hidden"}
                p={2}
                w={"100%"}
              >
                <HStack
                  className="hide-scrollbar"
                  width={"100%"}
                  overflowX={"auto"}
                  maxW={"100%"}
                  flexShrink={0}
                  spacing={0}
                >
                  <Icon
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    display={hoverOption ? "flex" : "none"}
                    color={"blue.300"}
                    marginRight={1}
                    fontSize={"md"}
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                  </Icon>
                  <Badge
                    fontSize={"xs"}
                    textTransform={"uppercase"}
                    background={"gray.300"}
                    color={"rgb(240, 242, 244)"}
                    borderRadius={"50px"}
                    paddingInlineEnd={1}
                    paddingInlineStart={1}
                    fontWeight={"bold"}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <Icon
                        stroke="currentColor"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.87759 3.00293H19.1319C19.4518 3.00293 19.7524 3.15601 19.9406 3.41476L23.7634 8.67115C23.9037 8.86403 23.8882 9.12913 23.7265 9.30438L12.3721 21.6049C12.1848 21.8078 11.8685 21.8205 11.6656 21.6332C11.6558 21.6241 11.6464 21.6147 11.6373 21.6049L0.282992 9.30438C0.121226 9.12913 0.10575 8.86403 0.246026 8.67115L4.06886 3.41476C4.25704 3.15601 4.55766 3.00293 4.87759 3.00293Z"></path>
                      </Icon>
                      <Text fontSize={"xs"} marginInlineStart={1}>
                        {item.rarity}
                      </Text>
                    </Box>
                  </Badge>
                  <Box flex={"1 1 0%"} flexShrink={0}></Box>
                  <HStack paddingLeft={2} spacing={0.5}>
                    <Icon
                      color={"gray.400"}
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      fontSize={"sm"}
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                    </Icon>
                    <Text
                      marginInline={"0.5rem 0"}
                      mb={0}
                      mt={0}
                      fontSize={"xs"}
                      flexShrink={0}
                    >
                      {item.name}
                    </Text>
                  </HStack>
                </HStack>
                <Box flex={"1 1 0%"} placeSelf={"stretch"}></Box>
                <HStack
                  className="hide-scrollbar"
                  overflowX={"auto"}
                  flexShrink={0}
                  maxW={"100%"}
                  mt={2}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <Box as={"span"} display={"inline-block"}>
                      <Box
                        className="hide-scrollbar"
                        overflowX={"scroll"}
                        justifyContent={"flex-start"}
                        display={"flex"}
                      >
                        <HStack spacing={1}>
                          <Icon viewBox="0 0 128 128">
                            <path
                              fill="currentColor"
                              d="M65.7 96.4V128l39.2-55.1zM103.4 62.7 65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7 62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z"
                            ></path>
                          </Icon>
                          <Text
                            fontSize={"sm"}
                            fontWeight={"bold"}
                            textOverflow={"ellipsis"}
                            overflow={"hidden"}
                          >
                            {item.price}
                          </Text>
                        </HStack>
                      </Box>
                    </Box>
                  </Box>
                </HStack>
                <Box flex={"1 1 0%"} placeSelf={"stretch"}></Box>
                <Box
                  display={"flex"}
                  alignItems={"end"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <Box></Box>
                  <HStack>
                    <Box cursor={"pointer"} height={"100%"}>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        borderRadius={"md"}
                        textAlign={"center"}
                        borderWidth={"1px"}
                        color={"primary.500"}
                        height={6}
                      >
                        <Button
                          variant={"ghost"}
                          height={6}
                          color={"primary.500"}
                          _hover={{
                            background: "primary.500",
                            color: "white",
                          }}
                          onClick={onOpen}
                        >
                          ...
                        </Button>
                      </Box>
                    </Box>
                  </HStack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <CollectionItemDetail isOpen={isOpen} onClose={onClose} item={item} />
    </>
  );
};

export default CollectionItem;
