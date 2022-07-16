import React, { useState } from "react";
import Link from "next/link";
import MainSidebar from "./sidebar";

import { Main } from "grommet";

const MainLayout = ({children}) => {
  return (
    <Main flex width="100%" height="xxlarge" direction="row">
      <MainSidebar />
      {children}
    </Main>
  );
};

export default MainLayout;
