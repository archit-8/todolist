import React from "react";
import styles from "./todototal.module.css";
function Jooter({ completedtodo, Totaltodos, leftTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.items}>Completed task:{completedtodo}</span>
      <span className={styles.items}>Total task:{Totaltodos}</span>
      <span className={styles.items}>Remaining task:{leftTodos}</span>
    </div>
  );
}
export default Jooter;
