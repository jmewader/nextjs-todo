import React, { useState } from "react";

import {
  Box,
  Paragraph,
  Heading,
  TextInput,
  Form,
  FormField,
  Button,
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

      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => {}}
      >
        <TextInput
          onChange={changedList}
          value={userInput}
          id="text-input-id"
          name="name"
          placeholder="What needs to be done?"
        />

        <Box direction="column" gap="medium">
          <Button onClick={handleSubmit} type="submit" primary label="Submit" />

          <ul>
            {todoList.length >= 1
              ? todoList.map((todo, index) => {
                  return (
                    <li key={index}>
                      {todo}{" "}
                      <Button
                        type="submit"
                        primary
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(todo);
                        }}
                      >
                        Удалить
                      </Button>
                    </li>
                  );
                })
              : null}
          </ul>
        </Box>
      </Form>

      <Paragraph color="#bfbfbf" size="10px">
        Double-click to edit a todo Created by Hannes Johansson based on React
        example by petehunt Part of TodoMVC
      </Paragraph>
    </Box>
  );
};

export default MainTodo;
