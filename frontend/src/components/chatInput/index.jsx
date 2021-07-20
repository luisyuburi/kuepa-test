import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapForm: {
      display: "flex",
      justifyContent: "center",
      width: "95%",
      margin: `${theme.spacing(0)} auto`,
    },
    wrapText: {
      width: "100%",
    },
    button: {
      //margin: theme.spacing(1),
    },
  })
);
const RETURN_KEY_CODE = 13;

const TextInput = ({ sendMessage, onChangeMessage, message }) => {
  const classes = useStyles();
  const onKeyDown = ({ keyCode }) => {
    if (keyCode !== RETURN_KEY_CODE) {
      return;
    }

    sendMessage();
  };
  return (
    <div className={classes.wrapForm}>
      <TextField
        id="standard-text"
        label="Mensaje"
        className={classes.wrapText}
        onChange={onChangeMessage}
        value={message}
        onKeyDown={onKeyDown}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={sendMessage}
      >
        <SendIcon />
      </Button>
    </div>
  );
};

export default TextInput;
