import React, { useState } from "react";
import Link from "next/link";

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
  Nav,
} from "grommet";
import TabsBlock from "./Tabs";

const MainTodo = ({ todoListStatic }) => {
  const [userInput, setUserInput] = useState("");
  const [value, setValue] = useState({});
  const [todoList, setTodoList] = useState(
    todoListStatic && todoListStatic.length > 0 ? todoListStatic : []
  );

  const changedList = (e) => {
    e.preventDefault();

    setUserInput(e.target.value);
    console.log(userInput);
  };

  const handleSubmit = (e) => {
    let item = {
      text: "",
    };
    e.preventDefault();

    if (userInput != "") {
      item.text = userInput;
      setTodoList([item, ...todoList]);
    }

    setUserInput("");
  };

  const handleDelete = (todo) => {
    const newList = todoList.filter(
      (todoItem) => todoList.indexOf(todoItem) != todoList.indexOf(todo)
    );
    setTodoList(newList);
  };

  console.log("==", todoList);

  return (
    <Box align="center" pad="medium" width="100%">
      <Heading size="100px">Todos</Heading>

      <Box width="50%" pad="40px" background="#fff">
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

            <Box width="160px">
              <Button
                onClick={handleSubmit}
                type="submit"
                primary
                label="Submit"
              />
            </Box>
            <Box>
              {todoList.length >= 1
                ? todoList.map((todo, index) => {
                    return (
                      <Box direction="row" key={index}>
                        <CheckBoxGroup options={[todo.text]} />
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
              <TabsBlock todoList={todoList} />
            </Box>
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default MainTodo;
