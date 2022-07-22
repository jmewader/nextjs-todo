import React from "react";
import Link from "next/link";

import { Box, Sidebar, Button } from "grommet";

const MainSidebar = () => {
  return (
    <Sidebar width="180px" pad="10px" background="white">
      <Box>
        <Link href="/">
          <Button text primary hoverIndicator={{ color: "#bfa2f6" }}>
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

      <Box>
        <Link href="/to-watch">
          <Button primary hoverIndicator={{ color: "#bfa2f6" }}>
            Movie
          </Button>
        </Link>
      </Box>
    </Sidebar>
  );
};

export default MainSidebar;
