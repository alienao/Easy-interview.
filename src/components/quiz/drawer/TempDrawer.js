import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ForumIcon from "@material-ui/icons/Forum";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Drawer.css";

const useStyles = makeStyles({
  listItem: {
    fontSize: "20px",
    marginLeft: "20px",
    color: "white",
  },

  paper: {
    background: "#a99ec9",
  },
});

function TempDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ width: "300px" }} role="presentation">
      <List className="listMain">
        <ListItem className="list_item">
          <ForumIcon style={{ color: "white" }} />
          <div className={classes.listItem}>Questions</div>
        </ListItem>
        <ListItem className="list_item">
          <SettingsIcon style={{ color: "white" }} />
          <div className={classes.listItem}>Settings</div>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon style={{ color: "#969696", fontSize: "40" }} />
        </IconButton>
        <Drawer
          classes={{ paper: classes.paper }}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default TempDrawer;
