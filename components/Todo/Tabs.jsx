import React, { useCallback } from "react";
import { Box, Tabs, Tab } from "grommet";

/* CONST */
import { ALL, ACTIVE, COMPLETED } from "./";

/* ICONS */
import { List, Checkbox, CheckboxSelected } from "grommet-icons";

const TabsBlock = ({ todoList, sortList }) => {
  const sortingAll = useCallback(() => {
    sortList(ALL);
  }, [sortList]);

  const sortingActive = useCallback(() => {
    sortList(ACTIVE);
  }, [sortList]);

  const sortingCompleted = useCallback(() => {
    sortList(COMPLETED);
  }, [sortList]);

  return (
    <Box direction="row" align="center" gap="small" margin="30px 0px 0px">
      <Tabs>
        <Tab title={<List />} onClick={sortingAll} />
        <Tab title={<Checkbox />} onClick={sortingActive} />
        <Tab title={<CheckboxSelected />} onClick={sortingCompleted} />
      </Tabs>
    </Box>
  );
};

export default TabsBlock;
