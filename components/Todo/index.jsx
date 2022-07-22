import React, { useState, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { IsNotEmptyArray } from "../../helpers/ValueTests";

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
  const [filter, setFilter] = useState(ALL);

  const visibleTasks = useMemo(() => {
    if (filter === ACTIVE) {
      return todoList.filter((_t) => !_t.isChecked);
    }

    if (filter === COMPLETED) {
      return todoList.filter((_t) => _t.isChecked);
    }

    return todoList;
  }, [todoList, filter]);

  const addTask = useCallback((text) => {
    const newTask = {
      id: uuidv4(),
      text,
      isChecked: false,
    };

    setTodoList((_s) => [..._s, newTask]);
  }, []);

  const handleSelectAll = useCallback(() => {
    setTodoList((_s) => {
      if (!IsNotEmptyArray(_s)) {
        return _s;
      }

      if (_s.some((item) => !item.isChecked)) {
        return _s.map((item) => {
          item.isChecked = true;
          return item;
        });
      }

      return _s.map((item) => {
        item.isChecked = false;
        return item;
      });
    });
  }, []);

  const toggleTask = useCallback((id) => {
    setTodoList((_s) => {
      const target = _s.findIndex((item) => item.id === id);

      if (target >= 0) {
        const state = [..._s];

        state[target].isChecked = !state[target].isChecked;

        return state;
      }

      return _s;
    });
  }, []);

  const handleDelete = useCallback((id) => {
    setTodoList((todo) => todo.filter((item) => item.id !== id));
  }, []);

  const onFilter = useCallback((newFilter) => {
    setFilter((_f) => (newFilter !== _f ? newFilter : _f));
  }, []);

  return (
    <Box align="center" pad="medium" width="100%">
      <Heading size="60px">Todos</Heading>

      <Box width="40%" pad="40px" background="#fff">
        <InputBlock
          list={todoList}
          onAdd={addTask}
          handleSelectAll={handleSelectAll}
        />
        <List
          list={visibleTasks}
          onDelete={handleDelete}
          onTaskToggle={toggleTask}
        />
        <Box>
          <TabsBlock todoList={todoList} onFilter={onFilter} />
        </Box>
      </Box>
    </Box>
  );
};

export default MainTodo;
