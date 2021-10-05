import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./CreateForm.module.css";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";
import names from "../../../json/names.json"
function CreateForm() {
  const history = useHistory();

  const createNewForm = () => {
    const id_ = uuid();
    history.push("/form/" + id_);
  };
  return (
    <div className={styles.createForm_section}>
      <div className={styles.createForm_left}>
        <span style={{ fontSize: "25px", color: "#8b8b8b" }}>
          {names.CreateFormNewQuize}
        </span>
      </div>
      <div className={styles.createForm_right} onClick={createNewForm}>
        <IconButton>
          <AddCircleIcon style={{ color: "#8c7cb6", fontSize: "70" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default CreateForm;
