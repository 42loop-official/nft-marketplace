/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { collections } from "./collections";

const handleRequest = collections(async (ctx) => {
  return !ctx.pressedButton
    ? {
        image:
          "https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2F7%252FrdF%252Fe%252F0iXY8HduhRCoIehkmFeXPeOQQFbbmIPfjCat5O29Hw72GIMsTv1WIVu3GJa3NivyEK0RdB4elphVU4tZoXLAXDg35zPttO0Kksum%252FaIb0MpTyz%252FJ5W2VeuWdfXJhPzxqY%252BoA2GnNFYsmEtP93Wm2kZtDnFd6EsP8vRc%253D.png",
        imageOptions: { aspectRatio: "1:1" },
        buttons: [
          <Button action="post" target={{ query: { value: "buy" } }}>
            BUY
          </Button>,
          <Button action="post" target={{ query: { value: "bid" } }}>
            BID
          </Button>,
        ],
      }
    : {
        image: (
          <span>
            {ctx.searchParams.value === "buy"
              ? "Buy successed"
              : "Bid successed"}
          </span>
        ),
      };
});

export const GET = handleRequest;
export const POST = handleRequest;
