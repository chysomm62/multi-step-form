import styles from "./Button.module.scss";

const ContainedButton = ({ children, onClick, disabled, type }) => {
  return (
    <button
      className={styles.contained_btn}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default ContainedButton;
