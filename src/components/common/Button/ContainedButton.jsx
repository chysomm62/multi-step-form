import styles from "./Button.module.scss";

const ContainedButton = ({ children }) => {
  return <button className={styles.contained_btn}>{children}</button>;
};

export default ContainedButton;
