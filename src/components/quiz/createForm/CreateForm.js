import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./CreateForm.css";
import uuid from 'react-uuid';
import {useHistory} from "react-router-dom";

function CreateForm() {

  const history = useHistory();

  const createNewForm = () => {
   const id_ = uuid();
   history.push("/form/" + id_)
  };
  return (
    <div className="createForm_section">
      <div className="createForm_left">
        <span style={{ fontSize: "25px", color: "#8b8b8b" }}>
         Create new qiuz
        </span>
      </div>
      <div className="createForm_right" onClick={createNewForm}>
        <IconButton>
          <AddCircleIcon style={{ color: "#8c7cb6", fontSize: "70" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default CreateForm;
