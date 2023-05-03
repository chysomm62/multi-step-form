import FirstStep from "./FirstStep";
import Button from "../common/Button";
import ContainedButton from "../common/Button/ContainedButton";
import styles from "./Form.module.scss";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

const Form = ({ active, setActive }) => {
  const getTabs = () => {
    switch (active) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourthStep />;
      default:
        break;
    }
  };

  return (
    <section className={styles.form}>
      <div className={styles.fields}>{getTabs()}</div>

      <div className={styles.buttons}>
        {active !== 1 ? (
          <Button onClick={() => setActive(active - 1)}>Go Back</Button>
        ) : (
          <div></div>
        )}
        {active !== 4 ? (
          <ContainedButton
            className={styles.next}
            onClick={() => setActive(active + 1)}
          >
            Next Step
          </ContainedButton>
        ) : (
          <ContainedButton>Confirm</ContainedButton>
        )}
      </div>
    </section>
  );
};

export default Form;
