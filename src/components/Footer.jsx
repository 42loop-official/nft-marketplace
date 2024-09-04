"use client";
import {
  HStack,
  Box,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  Text,
  Flex,
  IconButton,
  ButtonGroup,
  VStack,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { MoonIcon, Icon, SettingsIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <HStack
      minH="33px"
      w="100%"
      overflowX="scroll"
      alignItems="center"
      flexDirection="row"
      gap="0"
      paddingLeft={2}
      paddingRight={3}
      className="hide-scrollbar"
      borderTopWidth="1px"
      spacing={3}
    >
      <Box h="100%">
        <IconButton variant="ghost" icon={<MoonIcon fontSize="sm" />} />
      </Box>
      <Box h="100%">
        <IconButton
          variant="ghost"
          aria-label="Settings"
          icon={<SettingsIcon fontSize="sm" />}
        />
      </Box>
      <Box borderRightWidth="1px" h="100%" marginInlineStart={3}></Box>
      <ButtonGroup variant="ghost" spacing="1">
        <Button variant="ghost">1H</Button>
        <Button variant="ghost">24H</Button>
        <Button variant="ghost">7D</Button>
      </ButtonGroup>
      <Box borderRightWidth="1px" h="100%" marginInlineStart={3}></Box>
      <Box>
        <Popover>
          <PopoverTrigger>
            <Button
              variant="ghost"
              leftIcon={
                <Icon
                  viewBox="0 0 16 16"
                  _hover={{ colorScheme: "primary.500" }}
                >
                  <path
                    d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
                    fill="currentColor"
                  ></path>
                </Icon>
              }
            >
              Normal
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight="semibold">
              🏁 Transaction Priority
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>Change Transaction Priority Here</PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      <Box flex="1 1 0%" placeSelf="stretch"></Box>
      <Popover>
        <PopoverTrigger>
          <Text
            fontSize="sm"
            fontWeight={500}
            cursor="pointer"
            whiteSpace="nowrap"
            _hover={{ filter: "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)" }}
          >
            24h Volume: 42,690
          </Text>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Top Volume</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <VStack spacing={2}>
              <Text fontSize="sm" fontWeight={500} whiteSpace="nowrap">
                Based ArtApes: 5,000
              </Text>
              <Text fontSize="sm" fontWeight={500} whiteSpace="nowrap">
                PunkApepen: 4,000
              </Text>
              <Text fontSize="sm" fontWeight={500} whiteSpace="nowrap">
                Bomefers: 4,000
              </Text>
              <Text fontSize="sm" fontWeight={500} whiteSpace="nowrap">
                based punks: 2,000
              </Text>
              <Text fontSize="sm" fontWeight={500} whiteSpace="nowrap">
                based vector punks: 3,000
              </Text>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Box borderRightWidth="1px" h="100%" marginInlineStart={3}></Box>
      <Flex flexDirection="row" alignItems="center" marginInlineStart={3}>
        <Icon viewBox="0 0 128 128" color="primary.500">
          <path
            fill="currentColor"
            d="M65.7 96.4V128l39.2-55.1zM103.4 62.7 65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7 62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z"
          ></path>
        </Icon>
        <Text fontSize="sm" fontWeight={500} whiteSpace="nowrap">
          $ 10,500
        </Text>
      </Flex>
      <Box borderRightWidth="1px" h="100%" marginInlineStart={3}></Box>
      <Text
        fontSize="sm"
        fontWeight={500}
        whiteSpace="nowrap"
        marginInlineStart={3}
      >
        TPS: 1,000
      </Text>
    </HStack>
  );
};

export default Footer;
