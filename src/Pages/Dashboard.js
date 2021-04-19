import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import { AuthContext } from "../context/auth";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import UsersIcon from "@material-ui/icons/PeopleAltSharp";
import Addproduct from "@material-ui/icons/AddCircleSharp";
import DashboardIcon from "@material-ui/icons/DashboardSharp";
import CategorySharpIcon from "@material-ui/icons/CategorySharp";
import FeedbackSharpIcon from "@material-ui/icons/FeedbackSharp";
import LogoutIcon from "@material-ui/icons/ExitToAppSharp";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Badge, IconButton } from "@material-ui/core";

import Homefragment from '../Fragments/Homefragment';
import Productfragment from "../Fragments/Productfragment";
import Categoryfragment from "../Fragments/Categoryfragment";
import { BrowserRouter } from "react-router-dom";
import Usersdetail from "../Fragments/Usersdetail";
import Feedback from "../Fragments/Feedback";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  //console.log(AuthContext)

  return (
    <>
      {user ? (
        <>
       
          <div className={classes.root}>
            <CssBaseline />
            {/* navigation  */}
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <Typography variant="h6" noWrap>
                  Welcome to Zoddok Admin
                </Typography>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Toolbar />
              <div className={classes.drawerContainer}>
                <List>
                  <ListItem button key="Dashboard">
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItem>
                </List>
                <List>
                  <ListItem button key="Products">
                    <ListItemIcon>
                      <Addproduct />
                    </ListItemIcon>
                    <ListItemText primary="Products" />
                  </ListItem>
                </List>
                <List>
                  <ListItem button key="Category">
                    <ListItemIcon>
                      <CategorySharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Category" />
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem button key="Users">
                    <ListItemIcon>
                      <UsersIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users Details" />
                  </ListItem>
                </List>
                <List>
                  <ListItem button key="Feedback">
                    <ListItemIcon>
                      <FeedbackSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Feedback" />
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem button key="Logout">
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItem>
                </List>
              </div>
            </Drawer>
            {/* navigation end */}

            {/* Main content */}
            <main className={classes.content}>
              <Toolbar />
              <Typography paragraph>
                  <Homefragment/>
                    {/* <Productfragment /> */}
                    {/* <Categoryfragment /> */}
                    {/* <Usersdetail/> */}
                    {/* <Feedback /> */}
              </Typography>
             
            </main>
            {/* Main content end */}
          </div>
        </>
      ) : (
        <>
          <Redirect to={"/login"} />
        </>
      )}
    </>
  );
}
