import React from "react";
import MainSidebar from "./Sidebar/sidebar";

import { Main, Box } from "grommet";

const MainLayout = ({ children }) => {
  return (
    <Main flex width="100%">
      <Box direction="row" height="100vh">
        <MainSidebar />
        {children}
      </Box>
    </Main>
  );
};

export default MainLayout;
