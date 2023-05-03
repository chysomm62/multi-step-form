import styles from "./Button.module.scss";

const ContainedButton = ({ children, onClick }) => {
  return (
    <button className={styles.contained_btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default ContainedButton;
