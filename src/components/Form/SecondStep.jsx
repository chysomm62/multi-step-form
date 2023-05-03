import { useState } from "react";
import styles from "./Form.module.scss";

const plans = [
  {
    icon: "/assets/images/icon-arcade.svg",
    name: "Arcade",
    price: "$9/mo",
  },
  {
    icon: "/assets/images/icon-advanced.svg",
    name: "Advanced",
    price: "$12/mo",
  },
  {
    icon: "/assets/images/icon-pro.svg",
    name: "Pro",
    price: "$15/mo",
  },
];

const SecondStep = () => {
  const [planIndex, setPlanIndex] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
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
              <h4>{plan.price}</h4>
              <p>2 months free</p>
            </div>
          </div>
        ))}
      </div>
      <Switch isToggled={isToggled} setIsToggled={setIsToggled} />
    </>
  );
};

export default SecondStep;

const Switch = ({ isToggled, setIsToggled }) => {
  return (
    <div className={styles.switchWrap}>
      <p className={isToggled ? styles.gray_p : styles.blue_p}>Monthly</p>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isToggled}
          onChange={() => setIsToggled(!isToggled)}
        />
        <span className={styles.slider} />
      </label>
      <p className={!isToggled ? styles.gray_p : styles.blue_p}>Yearly</p>
    </div>
  );
};
