import React, { useState } from "react";
import Link from "next/link";

import {
  Box,
  Tabs,
  Tab,
} from "grommet";

const TabsBlock = ({todoList}) => {
  return (
    <Box>
      {todoList.length >= 1 && (
        <Box>
          <span>{todoList.length}items left</span>
          <Tabs>
            <Tab title="All" />

            <Tab title="Active" />

            <Tab title="Completed" />
          </Tabs>
        </Box>
      )}
    </Box>
  );
};

export default TabsBlock;
