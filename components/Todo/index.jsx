import React, { useState } from "react";

import {
  Box,
  Paragraph,
  Heading,
  TextInput,
  Form,
  FormField,
  Button,
  CheckBoxGroup,
  Tabs,
  Tab,
} from "grommet";

const MainTodo = () => {
  const [userInput, setUserInput] = useState("");
  const [value, setValue] = useState({});
  const [todoList, setTodoList] = useState([]);

  const changedList = (e) => {
    e.preventDefault();

    setUserInput(e.target.value);
    console.log(userInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput != "") {
      setTodoList([userInput, ...todoList]);
    }

    setUserInput("");
  };

  const handleDelete = (todo) => {
    const newList = todoList.filter(
      (todoItem) => todoList.indexOf(todoItem) != todoList.indexOf(todo)
    );
    setTodoList(newList);
  };

  return (
    <Box align="center" pad="medium" width="xxlarge">
      <Heading size="100px" color="rgba(175, 47, 47, 0.15)">
        todos
      </Heading>

      <Box background="#fff">
        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onReset={() => setValue({})}
          onSubmit={({ value }) => {}}
        >
          <Box direction="column" gap="medium">
            <TextInput
              onChange={changedList}
              value={userInput}
              id="text-input-id"
              name="name"
              placeholder="What needs to be done?"
            />

            <Button
              onClick={handleSubmit}
              type="submit"
              primary
              label="Submit"
            />

            <Box>
              {todoList.length >= 1
                ? todoList.map((todo, index) => {
                    return (
                      <Box direction="row" key={index}>
                        <CheckBoxGroup options={[todo]} />
                        <Button
                          type="submit"
                          primary
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete(todo);
                          }}
                        >
                          Х
                        </Button>
                      </Box>
                    );
                  })
                : null}
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
          </Box>
        </Form>
      </Box>

      <Box align="center" width="small">
        <Paragraph color="#bfbfbf" size="10px">
          Double-click to edit a todo Created by Hannes Johansson based on React
          example by petehunt Part of TodoMVC
        </Paragraph>
      </Box>
    </Box>
  );
};

export default MainTodo;
