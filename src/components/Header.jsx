"use client";
import {
  Box,
  Button,
  Flex,
  HStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Kbd,
  Tag,
  Avatar,
  TagLabel,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon, UnlockIcon } from "@chakra-ui/icons";
import { usePrivy } from "@privy-io/react-auth";
import Logo from "@/images/42loop-logo";
import { use, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const getUserNameTemplate = ({ name, logout }) => {
  return (
    <Menu size="sm">
      <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
        {name}
      </MenuButton>
      <MenuList>
        <MenuItem color={"primary.500"} icon={<UnlockIcon />} onClick={logout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const showWallet = ({ login, authenticated, user, ready, logout }) => {
  const getName = () => {
    if (user) {
      if (user.farcaster?.displayName) {
        return getUserNameTemplate({
          name: user.farcaster.displayName,
          logout,
        });
      }
      return getUserNameTemplate({
        name: `${user.wallet.address.substring(
          0,
          5
        )}...${user.wallet.address.substring(user.wallet.address.length - 6)}`,
        logout,
      });
    }
    return "NaN";
  };
  if (authenticated && ready) {
    const name = getName();
    return (
      <Tag size="sm" colorScheme="twitter" borderRadius="full">
        <Avatar
          src={user.farcaster?.pfp ?? "https://bit.ly/sage-adebayo"}
          size="xs"
          name={name}
          ml={-1}
          mr={2}
        />
        <TagLabel>{name}</TagLabel>
      </Tag>
    );
  }
  return (
    <Button
      textTransform="uppercase"
      variant={"solid"}
      _hover={{ textDecoration: "none" }}
      onClick={login}
    >
      Connect Wallet
    </Button>
  );
};
const Header = () => {
  const { login, authenticated, user, ready, logout } = usePrivy();
  const pathName = usePathname();
  const [activeLink, setActiveLink] = useState(pathName);

  return (
    <Flex
      flex="1 1 0%"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      paddingInlineStart={3}
      paddingInlineEnd={3}
      paddingTop={1}
      paddingBottom={1}
      borderBottomWidth={1}
    >
      <Box>
        <HStack minH="40px" alignItems="center" gap={0} flexDirection="row">
          <Link href="/" onClick={() => setActiveLink("/")}>
            <Logo />
          </Link>
          <Button
            textTransform="uppercase"
            variant="ghost"
            margin={0}
            colorScheme="primary.500"
            color="primary.500"
            fontWeight={600}
            style={
              activeLink === "/" || activeLink.indexOf("/collections") !== -1
                ? { filter: "drop-shadow(rgba(11, 87, 255) 0px 0px 8px)" }
                : {}
            }
          >
            <Link href={"/"} onClick={() => setActiveLink("/")}>
              Collections
            </Link>
          </Button>
        </HStack>
      </Box>
      <Box flex="1 1 0%">
        <Box paddingInlineStart={3} paddingInlineEnd={3}>
          <Flex justifyContent="center" width="100%">
            <InputGroup
              w="100%"
              minW={300}
              maxW={600}
              isolation="isolate"
              flex="1 1 0%"
              position="relative"
              size="sm"
            >
              <InputLeftElement pointerEvents="none" fontSize="1.2em">
                <SearchIcon fontSize="sm" />
              </InputLeftElement>
              <Input
                focusBorderColor="twitter.500"
                placeholder="Search collection / Wallet"
                _focus={{
                  borderColor: "primary.500",
                }}
              />
              <InputRightElement fontWeight="500" paddingRight={1}>
                <Kbd p={1}>⌘K</Kbd>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Box>
      </Box>
      <Box>{showWallet({ login, authenticated, user, ready, logout })}</Box>
    </Flex>
  );
};
export default Header;
