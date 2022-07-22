import { useCallback } from "react";

/* COMPONENTS */
import { Box, Button, CheckBox } from "grommet";

import Basket from "/public/jsx/Basket";

const Item = (props) => {
  const { text, id, isChecked, onDelete, onTaskToggle } = props;

  const toggleCheckbox = useCallback(() => {
    onTaskToggle(id);
  }, [id, onTaskToggle]);

  const deleteItem = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  return (
    <Box width="100%" justify="between" direction="row">
      <CheckBox label={text} checked={isChecked} onChange={toggleCheckbox} />

      <Button onClick={deleteItem}>
        <Basket />
      </Button>
    </Box>
  );
};

const List = ({ list, ...others }) => {
  return (
    <Box pad="30px 0px 30px 10px" gap="small">
      {list.map((todo) => {
        return <Item key={todo.id} {...todo} {...others} />;
      })}
    </Box>
  );
};

export default List;
