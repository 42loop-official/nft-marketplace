"use client";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Box, Flex } from "@chakra-ui/react";
import { PrivyProvider } from "@privy-io/react-auth";
import { base, baseGoerli, baseSepolia } from "viem/chains";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const chain = process.env.NODE_ENV === "production" ? base : baseSepolia;
  return (
    <html lang="en" className={fonts.montserrat.className} data-theme="light">
      <head>
        <link rel="icon" href="/42loop-logo.ico" type="image/x-icon" />
        <title>42Loop Marketplace</title>
        <meta property="og:title" content="42Loop Marketplace"></meta>
        <meta
          property="description"
          content="42Loop is a cutting-edge NFT marketplace, powered by the Base blockchain, where users can seamlessly explore, buy, and sell exclusive digital assets sourced from various platforms such as Zora, Sound, and more, all integrated within the vibrant ecosystem of Farcater"
        />
        <meta
          property="og:description"
          content="42Loop is a cutting-edge NFT marketplace, powered by the Base blockchain, where users can seamlessly explore, buy, and sell exclusive digital assets sourced from various platforms such as Zora, Sound, and more, all integrated within the vibrant ecosystem of Farcater"
        />
        <meta property="og:url" content="https://testnet.42loop.life" />
        <meta property="og:image" content="/42loop-logo.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/42loop-logo.svg" />
        <meta property="twitter:title" content="42Loop Marketplace" />
        <meta
          property="twitter:description"
          content="42Loop is a cutting-edge NFT marketplace, powered by the Base blockchain, where users can seamlessly explore, buy, and sell exclusive digital assets sourced from various platforms such as Zora, Sound, and more, all integrated within the vibrant ecosystem of Farcater"
        />
      </head>
      <body>
        <Providers>
          <PrivyProvider
            appId="clvb0jk4n08fvg2fvy1a0sr2z"
            config={{
              defaultChain: chain,
              supportedChains: [base, baseGoerli, baseSepolia],
            }}
          >
            <Flex w="100%" h="100%" flexDirection={"column"} overflow="hidden">
              <Flex
                w="100%"
                shrink="0"
                flexDirection="column"
                position="relative"
              >
                <Header />
              </Flex>
              <Box flex="1 1 0%" overflow="hidden">
                {children}
              </Box>
              <Footer />
            </Flex>
          </PrivyProvider>
        </Providers>
      </body>
    </html>
  );
}
