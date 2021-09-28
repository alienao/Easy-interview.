import React from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import TempDrawer from "../drawer/TempDrawer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className="header">
      <div className="header_info">
        <TempDrawer />
      </div>

      <div className="header_right">
        <IconButton>
          <AccountCircleIcon style={{ color: '#8c7cb6', fontSize: '50' }}/>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
