import React from "react";
import styles from "./Input.module.scss";

const Input = ({
  type,
  name,
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className={styles.Input_wrap}>
      <div>
        <label className={styles.label}>{label}</label>
        <p className={styles.error}>{error}</p>
      </div>
      <input
        className={styles.input}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
