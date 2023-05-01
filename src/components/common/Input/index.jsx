import React from "react";
import styles from "./Input.module.scss";

const Input = ({ type, name, placeholder, label }) => {
  return (
    <div className={styles.Input_wrap}>
      <div>
        <label className={styles.label}>{label}</label>
        <p className={styles.error}>is required</p>
      </div>
      <input
        className={styles.input}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
