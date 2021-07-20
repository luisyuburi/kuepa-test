import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import Appbar from "../../components/appbar";
import Chat from "../../components/chat";

const Stream = () => {
  const [showChat, setShowChat] = useState(false);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Appbar showChat={showChat} setShowChat={setShowChat} />
      </Grid>
      <Grid item xs={showChat ? 1 : 12} md={8}>
        <iframe
          style={{ height: "calc(100vh - 64px)" }}
          width={"100%"}
          height="100%"
          src="https://www.youtube.com/embed/jcaXJVEt4PA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Grid>
      <Grid item xs={showChat ? 11 : 1} md={4}>
        <Chat />
      </Grid>
    </Grid>
  );
};

export default Stream;
