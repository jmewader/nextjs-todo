import React from "react";
import Link from "next/link";

import { Box, Sidebar } from "grommet";

const MainSidebar = () => {
  return (
    <Sidebar
      border={{
        color: "#e0e0e0",
        size: "2px",
        style: "solid",
        side: "right",
      }}
      width="180px"
      pad="10px"
      background="white"
    >
      <Box
        border={{
          color: "#e0e0e0",
          size: "xsmall",
          style: "dotted",
          side: "bottom",
        }}
        pad="15px"
      >
        <Link hoverIndicator={{ color: "#bfa2f6" }} href="/">
          Home
        </Link>
      </Box>

      <Box
        border={{
          color: "#e0e0e0",
          size: "xsmall",
          style: "dotted",
          side: "bottom",
        }}
        pad="15px"
      >
        <Link href="/to-buy">Products</Link>
      </Box>

      <Box
        border={{
          color: "#e0e0e0",
          size: "xsmall",
          style: "dotted",
          side: "bottom",
        }}
        pad="15px"
      >
        <Link href="/to-watch">Movie</Link>
      </Box>
    </Sidebar>
  );
};

export default MainSidebar;
