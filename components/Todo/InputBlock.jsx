import { useCallback, useState } from "react";

/* COMPONENTS */
import { Box, Button, TextInput } from "grommet";

/* ICONS */
import { Down } from "grommet-icons";

/* HELPERS */
import { IsSet } from "../../helpers/ValueTests";

const InputBlock = ({ selectAll, addNewItem, showBtn }) => {
  const [userInput, setUserInput] = useState("");

  const changedList = useCallback(
    (event) => setUserInput(event.target.value),
    []
  );

  const onClickEnter = useCallback(
    (event) => {
      if (IsSet(userInput) && event.keyCode === 13) {
        addNewItem(userInput);
        setUserInput("");
      }
    },
    [userInput, addNewItem]
  );

  return (
    <Box direction="row" gap="small">
      {showBtn && <Button icon={<Down />} onClick={selectAll} />}

      <TextInput
        value={userInput}
        onChange={changedList}
        onKeyDown={onClickEnter}
        placeholder="What needs to be done?"
      />
    </Box>
  );
};

export default InputBlock;
