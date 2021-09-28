import React from "react";
import "./MainBody.css";
import StorageIcon from '@mui/icons-material/Storage';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import card_image from '../../../card.png';


function MainBody() {
  return (
  <div className = "mainbody">
    <div className = 'mainbody_top' style = {{fontSize: "25px", color: "#8b8b8b"}}>
      Recent forms
    </div>

    <div className = " mainbody_docs">
      <div className = "mainbody_cards">
       <img src = {card_image} className = "card_image"/>
        <div className = "mainbody_card_content">
          <h5></h5>
          <div className = "card_content" style ={{fontSize: "12px", color:"grey"}}>
              <div className = "content_left">
                <StorageIcon style = {{color: "white", fontSize: "12px",
                 backgroundColor: "grey", padding:"3px", marginLeft: "3px", borderRadius : "2px" }}/>Opened 6 Jun 2021
              </div>
            <MoreVertIcon style ={{fontSize: "16px", color:"grey"}}/>
          </div>
        </div>
      </div>

    </div>

    </div>

  )
}

export default MainBody;
