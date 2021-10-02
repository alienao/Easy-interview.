import React from "react";
import styles from "./FormHeader.module.css";

function FormHeader() {
  return (
    <div className={styles.form_header}>
      <h2 style={{ color: "grey" }}>Untitled form</h2>
    </div>
  );
}

export default FormHeader;
