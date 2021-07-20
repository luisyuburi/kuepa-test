import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

import useAuth from "../hooks/useAuth";

const USER_MESSAGE = "user-message";
const NEW_MESSAGE = "new-message";

const useSocket = () => {
  const socketRef = useRef();
  const auth = useAuth();

  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    socketRef.current = socketIOClient("http://localhost:8000");

    socketRef.current.on(NEW_MESSAGE, (message) => {
      setUserMessage(message);
      console.log("message", message);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (messageBody) => {
    console.log("auth", auth.user);
    const newMessage = {
      userId: JSON.parse(auth.user).data.id,
      content: messageBody,
    };
    socketRef.current.emit(USER_MESSAGE, newMessage);
  };

  return {
    userMessage,
    sendMessage,
  };
};

export default useSocket;
