/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next/pages-router/server";
const frames = createFrames({
  basePath: "/api/frames/collections",
});

import { getImageUrl } from "@/helpers/imageUtil";
const handleRequest = frames(async ({ searchParams, pressedButton }) => {
  console.log("searchParams", searchParams);
  console.log("action", pressedButton);
  const { name, platform } = searchParams;
  const imageParams: {
    id: string;
    name: string;
    platform: string;
    owner: string;
    address: string;
  } = {
    id: name,
    name,
    platform,
    owner: "xxx",
    address: "xxx",
  };
  return {
    image: <div>xxx</div>,
    imageOptions: {
        aspectRatio: "1:1",
    },
    buttons: [<Button action="post">Click me</Button>],
  };
});

export default handleRequest;
