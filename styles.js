import { createGlobalStyle } from "styled-components";
import { Advent_Pro } from "@next/font/google";

const advent = Advent_Pro({
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    font-family: ${advent.style.fontFamily};
  }
`;
