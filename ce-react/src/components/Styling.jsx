import React from "react";
import "./css/myStyles.css";
import styles from "./css/myStyles.module.css";

const heading = {
  fontSize: "72px",
  color: "blue",
};

function Styling(props) {
  const Primary = props.isPrimary ? "primary" : "secondary";
  return (
    <div>
      <h1 className={`${Primary} font-xl`}>Stylesheets </h1>
      <h2 style={heading}>Inline</h2>
      <h2 className={styles.success}>Success</h2>
      <h2 className={styles.danger}>Danger</h2>
    </div>
  );
}

export default Styling;
