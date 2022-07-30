import { useCallback } from "react";

/* COMPONENTS */
import { Box, Button, CheckBox } from "grommet";

/* IMG */
import Basket from "/public/jsx/Basket";

const Item = (props) => {
  const { text, id, isChecked, initItem, deleteItem } = props;

  const handleChecked = useCallback(() => {
    initItem(id);
  }, [id, initItem]);

  const deleteTodo = useCallback(() => {
    deleteItem(id);
  }, [id, deleteItem]);

  return (
    <Box width="100%" justify="between" direction="row">
      <CheckBox label={text} onChange={handleChecked} checked={isChecked} />

      <Button onClick={deleteTodo}>
        <Basket />
      </Button>
    </Box>
  );
};

const List = ({ list, ...others }) => {
  return (
    <Box pad="30px 0px 0px 10px" gap="small">
      {list.map((todo) => {
        return <Item key={todo.id} {...todo} {...others} />;
      })}
    </Box>
  );
};

export default List;
