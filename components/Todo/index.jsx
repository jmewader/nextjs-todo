import React, { useState, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

/* HELPERS */
import { IsNotEmptyArray } from "../../helpers/ValueTests";

/* COMPONENTS */
import { Box, Heading } from "grommet";
import TabsBlock from "./Tabs";
import List from "./List";
import InputBlock from "./InputBlock";

/* CONST */
export const ALL = "all";
export const ACTIVE = "active";
export const COMPLETED = "completed";

const MainTodo = ({ todoListStatic }) => {
  const [todoList, setTodoList] = useState(
    todoListStatic && todoListStatic.length > 0 ? todoListStatic : []
  );
  const [sorting, setSorting] = useState(ALL);

  const showList = useMemo(() => {
    if (sorting === ACTIVE) {
      return todoList.filter((item) => !item.isChecked);
    }

    if (sorting === COMPLETED) {
      return todoList.filter((item) => item.isChecked);
    }

    return todoList;
  }, [todoList, sorting]);

  const addNewItem = useCallback((text) => {
    const newTask = {
      id: uuidv4(),
      text,
      isChecked: false,
    };

    setTodoList((list) => [...list, newTask]);
  }, []);

  const handleSorting = useCallback((tab) => {
    setSorting((item) => (tab !== item ? tab : item));
  }, []);

  const handleDelete = useCallback((id) => {
    setTodoList((list) => list.filter((item) => item.id != id));
  }, []);

  const handleSelectAll = useCallback(() => {
    setTodoList((list) => {
      if (!IsNotEmptyArray(list)) {
        return list;
      }

      if (list.some((item) => !item.isChecked)) {
        return list.map((item) => {
          item.isChecked = true;
          return item;
        });
      }

      return list.map((item) => {
        item.isChecked = false;
        return item;
      });
    });
  }, []);

  const initItem = useCallback((id) => {
    setTodoList((list) => {
      const itemId = list.findIndex((item) => item.id === id);

      if (itemId >= 0) {
        const tempTodoList = [...list];

        tempTodoList[itemId].isChecked = !tempTodoList[itemId].isChecked;

        return tempTodoList;
      }

      return list;
    });
  }, []);

  return (
    <Box align="center" pad="medium" width="100%">
      <Heading size="60px">T o d o s</Heading>

      <Box
        border={{
          color: "#e0e0e0",
          size: "xsmall",
          style: "dotted",
        }}
        round="small"
        width="40%"
        pad="40px"
        background="#fff"
      >
        <InputBlock
          list={todoList}
          addNewItem={addNewItem}
          handleSelectAll={handleSelectAll}
          showBtn={showList.length > 0}
        />
        {showList.length > 0 && (
          <List list={showList} initItem={initItem} deleteItem={handleDelete} />
        )}
        {todoList.length > 0 && (
          <Box>
            <TabsBlock todoList={todoList} sortList={handleSorting} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainTodo;
