import { Box, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Icon } from "@chakra-ui/icons";

const getSlideBox = (slides, height, width, showIndex) => {
  return slides.map((slide, index) => (
    <Box
      key={index}
      position={"absolute"}
      transition={"opacity 1s ease 0s"}
      height={height + "px"}
      width={width + "px"} // Changed 'w' to 'width' for clarity
      opacity={showIndex === index ? 1 : 0}
    >
      <Box position={"relative"} w={"100%"} h={"100%"}>
        <Image
          src={slide.image}
          objectFit={"cover"}
          height="100%" // Changed 'h' to 'height' for clarity
          width={"100%"} // Changed 'w' to 'width' for clarity
        />
        <VStack
          display={"flex"}
          alignItems={"start"}
          flexDirection={"column"}
          width={"100%"}
          height={"100%"}
          justifyContent={"end"}
          position={"absolute"}
          bottom={0}
          p={{ md: 10 }}
        >
          <VStack
            display={"flex"}
            alignItems={"center"}
            flexDirection={"row"}
            width={"100%"}
          >
            <VStack
              display={"flex"}
              alignItems={"start"}
              flexDirection={"column"}
              width={"100%"}
            >
              <Heading as="h2" size="3xl" color={"white"} noOfLines={1}>
                {slide.title}
              </Heading>
              <Heading as="h2" size="1xl" color={"gray.200"} noOfLines={1}>
                {slide.description}
              </Heading>
            </VStack>
            <Box></Box>
          </VStack>
          <VStack>
            <Box></Box>
          </VStack>
        </VStack>
      </Box>
    </Box>
  ));
};

export function SliderShow({ height, width }) {
  const [index, setIndex] = useState(0);
  const slides = [
    {
      image:
        "https://i.seadn.io/s/primary-drops/0xcb28749c24af4797808364d71d71539bc01e76d4/31775389:about:media:06c699f1-94dc-4f1d-aa87-97654e0c6ae6.png?auto=format&dpr=1&w=1440",
      title: "based punks",
      description: "5,000 characters on Base",
    },
    {
      image:
        "https://i.seadn.io/s/primary-drops/0xd4c5292b9689238f0a51c8505b1d1d6714ce95a0/31324667:about:media:fefc4d94-0d5b-4c59-abd5-6c72895a7222.png?auto=format&dpr=1&w=1440",
      title: "Based OnChain Dinos",
      description:
        "Based OnChain Dinos is a collection of 2,000 NFTs, each randomly generated and distinctly determined at the time of minting. These Dinos are stored entirely onchain, including images and metadata.",
    },
    {
      image:
        "https://i.seadn.io/s/primary-drops/0x73682a7f47cb707c52cb38192dbb9266d3220315/31506218:about:media:9a7c582b-c488-4b2c-8bdd-c5c9fcf81e61.png?auto=format&dpr=1&w=1440",
      title: "Outcasts",
      description:
        "Outcasts is THE reader’s pfp. 500 unique outcasts, generated using ai, with love.",
    },
    {
      image:
        "https://i.seadn.io/s/primary-drops/0xa449b4f43d9a33fcdcf397b9cc7aa909012709fd/31598462:about:media:8956d1fc-2f89-4c4a-b460-5816e1774ead.gif?auto=format&dpr=1&w=1440",
      title: "onchain gaias",
      description: "onchain gaias",
    },
  ];

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };
  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);
  //prev slide
  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <VStack
        position={"relative"}
        direction={["column", "row"]}
        height={height + "px"}
        w={width + "px"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        {getSlideBox(slides, height, width, index)}
        <Box
          position={"absolute"}
          left={7}
          top={height / 2 - 40 + "px"}
          onClick={prevSlide}
          cursor={"pointer"}
          color={"white"}
          _hover={{
            filter: "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)",
            color: "primary.600",
          }}
        >
          <Icon
            aria-label="prev"
            viewBox="0 0 24 24"
            fill="currentcolor"
            minWidth={12}
            height={12}
            fontSize={"lg"}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </Icon>
        </Box>
        <Box
          position={"absolute"}
          right={7}
          onClick={nextSlide}
          top={height / 2 - 40 + "px"}
          cursor={"pointer"}
          color={"white"}
          _hover={{
            filter: "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)",
            color: "primary.600",
          }}
        >
          <Icon
            aria-label="next"
            viewBox="0 0 24 24"
            fill="currentcolor"
            minWidth={12}
            height={12}
            fontSize={"lg"}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </Icon>
        </Box>
      </VStack>
    </>
  );
}
