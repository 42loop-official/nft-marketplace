"use client";
import { fetchMetadata } from "frames.js/next";
import { getOrigin } from "@/helpers/locationUtil";

import {
  Box,
  Container,
  HStack,
  Stack,
  Text,
  VStack,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { useSize } from "@chakra-ui/react-use-size";
import { useEffect, useRef, useState } from "react";
import { RighSideBar } from "@/components/collections/RighSideBar";
import { CollectionItems } from "@/components/collections/CollectionItems";

const getRightSideBar = (
  showSidebar: boolean,
  showFilter: boolean,
  height: number | undefined
) => {
  if (showSidebar) {
    return <RighSideBar showFilter={showFilter} height={height} />;
  }
};

export default function Page({ params }: { params: { name: string } }) {
  const elementRightNavRef = useRef(null);
  const sizeRightNav = useSize(elementRightNavRef);
  const [isLargerThan919] = useMediaQuery("(min-width: 919px)");
  const [showFilter, setShowFilter] = useState(true);
  useEffect(() => {
    setShowFilter(showFilter);
  }, [showFilter]);
  //Xử lý show sidebar
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    setShowSidebar(showSidebar);
    if (!showSidebar) {
      setShowFilter(false);
    }
  }, [showSidebar]);

  return (
    <Box
      ref={elementRightNavRef}
      className="hide-scrollbar"
      h="100%"
      overflowY={"auto"}
      display={"flex"}
    >
      {getRightSideBar(
        isLargerThan919 && showSidebar,
        isLargerThan919 && showFilter,
        sizeRightNav?.height
      )}

      <CollectionItems
        slug={params.name}
        showSideBar={isLargerThan919 && showSidebar}
        setShowSideBar={setShowSidebar}
        showFilter={isLargerThan919 && showFilter}
        setShowFilter={setShowFilter}
        isLargerThan919={isLargerThan919}
      />
    </Box>
  );
}
