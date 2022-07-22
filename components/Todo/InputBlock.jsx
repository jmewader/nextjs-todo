import { useCallback, useState } from "react";

/* COMPONENTS */
import { Box, Button, TextInput } from "grommet";

/* ICONS */
import { Down } from "grommet-icons";

/* HELPERS */
import { IsSet } from "../../helpers/ValueTests";

const InputBlock = ({ onAdd, handleSelectAll }) => {
  const [userInput, setUserInput] = useState("");

  const changedList = useCallback((e) => setUserInput(e.target.value), []);

  const onKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13 && IsSet(userInput)) {
        onAdd(userInput);
        setUserInput("");
      }
    },
    [userInput, onAdd]
  );

  return (
    <Box direction="row" gap="small">
      <Button
        icon={<Down />}
        hoverIndicator
        focusIndicator
        onClick={handleSelectAll}
      />

      <TextInput
        onChange={changedList}
        value={userInput}
        onKeyDown={onKeyDown}
        placeholder="What needs to be done?"
      />
    </Box>
  );
};

export default InputBlock;
