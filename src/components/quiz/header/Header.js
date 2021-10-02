import React from "react";
import styles from "./Header.module.css";
import { IconButton } from "@material-ui/core";
import TempDrawer from "../Drawer/TempDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_info}>
        <TempDrawer />
      </div>

      <div className={styles.header_right}>
        <IconButton>
          <AccountCircleIcon style={{ color: "#8c7cb6", fontSize: "50" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
