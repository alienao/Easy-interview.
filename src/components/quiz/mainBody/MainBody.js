import React from "react";
import styles from "./MainBody.module.css";
import StorageIcon from "@mui/icons-material/Storage";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import card_image from "../../../assets/images/card.png";
import names from "../../../json/names.json"
function MainBody() {
  return (
    <div className={styles.mainbody}>
      <div
        className={styles.mainbody_top}
        style={{ fontSize: "25px", color: "#8b8b8b" }}
      >
        {names.MainBodyRecentforms}
      </div>

      <div className={styles.mainbody_docs}>
        <div className={styles.mainbody_cards}>
          <img src={card_image} className={styles.card_image} />
          <div className="mainbody_card_content">
            <h5></h5>
            <div
              className={styles.card_content}
              style={{ fontSize: "12px", color: "grey" }}
            >
              <div className={styles.content_left}>
                <StorageIcon
                  style={{
                    color: "white",
                    fontSize: "12px",
                    backgroundColor: "grey",
                    padding: "3px",
                    marginLeft: "3px",
                    borderRadius: "2px",
                  }}
                />
                {names.MainodyOpened6}
              </div>
              <MoreVertIcon style={{ fontSize: "16px", color: "grey" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
