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
  return (
    <>
      <h1 className={styles.h1}>Select your plan</h1>
      <p> You have the option of monthly or yearly billing.</p>
      <div className={styles.plans}>
        {plans.map((plan) => (
          <div className={styles.plan} key={plan.name}>
            <img src={plan.icon} alt={plan.name} />
            <div>
              <h3>{plan.name}</h3>
              <h4>{plan.price}</h4>
              <p>2 months free</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SecondStep;
