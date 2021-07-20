import React, { useRef, useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import TextInput from "../chatInput";
import { MessageLeft, MessageRight } from "../chatMessage";
import useSockets from "../../hooks/useSockets";
import useAuth from "../../hooks/useAuth";
import { getAll } from "../../services/messages";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    paper2: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "100%",
      height: "calc(100vh - 64px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )",
    },
  })
);

export default function Chat() {
  const classes = useStyles();
  const socket = useSockets();
  const auth = useAuth();

  const messageListRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    if (socket.userMessage !== "") {
      addMessage(socket.userMessage);
      console.log("Socket messages", socket.userMessage);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket.userMessage]);

  useEffect(() => {
    getMessage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (messageListRef && messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    socket.sendMessage(currentMessage);
    //addMessage(currentMessage);
    setCurrentMessage("");
  };

  const onChangeMessage = (e) => {
    setCurrentMessage(e.target.value);
  };

  const addMessage = (message) => {
    const messageList = [...messages];

    messageList.push(message);
    setMessages(messageList);
  };

  const getMessage = async () => {
    const response = await getAll();
    if (response.status === 200) {
      const messageResponse = await response.json();
      console.log("messageResponse", messageResponse);
      const messageList = [...messages, ...messageResponse];
      setMessages(messageList);
    }
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} zDepth={2}>
        <Paper
          id="style-1"
          className={classes.messagesBody}
          ref={messageListRef}
        >
          {messages.map((msg) => (
            <React.Fragment>
              {msg.user.id === JSON.parse(auth.user).data.id ? (
                <MessageRight
                  message={msg.content}
                  timestamp={msg.createdAt}
                  photoURL=""
                  displayName={msg.user.name}
                  avatarDisp={true}
                  role={msg.user.role}
                />
              ) : (
                <MessageLeft
                  message={msg.content}
                  timestamp={msg.createdAt}
                  photoURL=""
                  displayName={msg.user.name}
                  avatarDisp={true}
                  role={msg.user.role}
                />
              )}
            </React.Fragment>
          ))}
        </Paper>
        <TextInput
          sendMessage={sendMessage}
          onChangeMessage={onChangeMessage}
          message={currentMessage}
        />
      </Paper>
    </div>
  );
}
