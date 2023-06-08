import { useUser } from "../../UserContext";
import Button from "../common/Button";
import ContainedButton from "../common/Button/ContainedButton";
import styles from "./Form.module.scss";

const SecondStep = ({
  plans,
  planIndex,
  setPlanIndex,
  isDurationToggled,
  setIsDurationToggled,
}) => {
  const { active, setActive } = useUser();
  return (
    <section className={styles.form}>
      <>
        <div className={styles.fields}>
          <h1 className={styles.h1}>Select your plan</h1>
          <p> You have the option of monthly or yearly billing.</p>
          <div className={styles.plans}>
            {plans.map((plan, index) => (
              <div
                className={
                  planIndex === index
                    ? `${styles.plan} ${styles.selected}`
                    : styles.plan
                }
                key={plan.name}
                onClick={() => setPlanIndex(index)}
              >
                <img src={plan.icon} alt={plan.name} />
                <div>
                  <h3>{plan.name}</h3>
                  <h4>${plan.price}/mo</h4>
                  <p>2 months free</p>
                </div>
              </div>
            ))}
          </div>
          <Switch
            isDurationToggled={isDurationToggled}
            setIsDurationToggled={setIsDurationToggled}
          />
        </div>
        <div className={styles.buttons}>
          <Button onClick={() => setActive(active - 1)}>Go Back</Button>

          <ContainedButton
            className={styles.next}
            onClick={() => setActive(active + 1)}
          >
            Next Step
          </ContainedButton>
        </div>
      </>
    </section>
  );
};

export default SecondStep;

const Switch = ({ isDurationToggled, setIsDurationToggled }) => {
  return (
    <div className={styles.switchWrap}>
      <p className={isDurationToggled ? styles.gray_p : styles.blue_p}>
        Monthly
      </p>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isDurationToggled}
          onChange={() => setIsDurationToggled(!isDurationToggled)}
        />
        <span className={styles.slider} />
      </label>
      <p className={!isDurationToggled ? styles.gray_p : styles.blue_p}>
        Yearly
      </p>
    </div>
  );
};
