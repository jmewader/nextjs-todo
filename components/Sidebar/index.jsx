import React from "react";
import Link from "next/link";

import { Box, Paragraph, Sidebar, Header, Markdown, Button } from "grommet";

const MainSidebar = () => {
  return (
    <Sidebar pad="10px" margin="7px" width="small" background="white">
      <Box>
        <Link href="/">
          <Button primary hoverIndicator={{ color: "#bfa2f6" }}>
            Home
          </Button>
        </Link>
      </Box>

      <Box>
        <Link href="/to-buy">
          <Button primary hoverIndicator={{ color: "#bfa2f6" }}>
            Products
          </Button>
        </Link>
      </Box>

      <Box
        border={{
          color: "#c5c5c5",
          size: "xsmall",
          style: "dashed",
          side: "top",
        }}
      />
      <Box>
        <Link href="/to-watch">
          <Button primary hoverIndicator={{ color: "#bfa2f6" }}>
            Movie
          </Button>
        </Link>
      </Box>
      <Box
        border={{
          color: "#c5c5c5",
          size: "xsmall",
          style: "dashed",
          side: "top",
        }}
      />
    </Sidebar>
  );
};

export default MainSidebar;
