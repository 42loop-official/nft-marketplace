"use client";
import { SliderShow } from "@/components/SliderShow";
import { CollectionTables } from "@/components/CollectionTables";
import { Box, Container } from "@chakra-ui/react";
export default function Page() {
  return (
    <Box className="hide-scrollbar" overflowY={"auto"} h="100%">
      <Container
        display={"flex"}
        w={"100%"}
        maxW="8xl"
        flexDirection={"column"}
        paddingInlineStart={4}
        paddingInlineEnd={4}
        p={0}
      >
        <SliderShow height={420} width={1440} />
        <Box>
          <CollectionTables />
        </Box>
      </Container>
    </Box>
  );
}
