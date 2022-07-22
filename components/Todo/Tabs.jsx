import React, { useCallback } from "react";

import { Box, Tabs, Tab } from "grommet";

/* CONST */
import { ALL, ACTIVE, COMPLETED } from ".";

const TabsBlock = ({ todoList, onFilter }) => {
  const filterAll = useCallback(() => {
    onFilter(ALL);
  }, [onFilter]);

  const filterActive = useCallback(() => {
    onFilter(ACTIVE);
  }, [onFilter]);

  const filterCompleted = useCallback(() => {
    onFilter(COMPLETED);
  }, [onFilter]);

  return (
    <Box direction="row" align="center" gap="small">
      {todoList.length >= 1 && (
        <Tabs>
          <Tab
            title="All"
            onClick={filterAll}
          />
          <Tab
            title="Active"
            onClick={filterActive}
          />
          <Tab
            title="Completed"
            onClick={filterCompleted}
          />
        </Tabs>
      )}
    </Box>
  );
};

export default TabsBlock;
