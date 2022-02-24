import React, { Children } from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import useStyle from "../utils/Style";

function Layout({ children }) {

  const classes = useStyle();

  return (
    <div>
      <Head>
        <title>next amazone</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazone</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>

      <footer className={classes.footer}>
        <Typography>All rights reserved. Next Amazona.</Typography>
      </footer>
    </div>
  );
}

export default Layout;
