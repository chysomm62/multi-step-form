import { useState } from "react";
import styles from "./Form.module.scss";
import Button from "../common/Button";
import ContainedButton from "../common/Button/ContainedButton";

const FourthStep = ({
  plans,
  planIndex,
  isDurationToggled,
  setActive,
  addOns,
  selected,
}) => {
  const [confirm, setConfirm] = useState(true);

  return (
    <>
      {confirm ? (
        <Success />
      ) : (
        <>
          <div className={styles.fields}>
            <h1 className={styles.h1}>Finishing up</h1>
            <p> Double-check everything looks OK before confirming.</p>

            <div className={styles.summary}>
              <div className={styles.plan}>
                <div>
                  <h3>
                    {plans[planIndex].name}&nbsp;
                    {isDurationToggled === false ? "(Monthly)" : "(Yearly)"}
                  </h3>
                  <button onClick={() => setActive(2)}>Change</button>
                </div>
                <h4>${plans[planIndex].price}/mo</h4>
              </div>
              <div className={styles.addSum}>
                {addOns.map((addOn, index) => {
                  if (selected.includes(index)) {
                    return (
                      <div key={addOn.name} className={styles.addOn}>
                        <div>
                          <p>{addOn.name}</p>
                        </div>
                        {console.log(addOn.price)}

                        <div>
                          <h4 className={styles.price}>+${addOn.price}/mo</h4>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button onClick={() => setActive(active - 1)}>Go Back</Button>

            <ContainedButton>Confirm</ContainedButton>
          </div>
        </>
      )}
    </>
  );
};

export default FourthStep;

const Success = () => {
  return (
    <div className={styles.fields}>
      <div className={styles.success}>
        <img src="/assets/images/icon-thank-you.svg" alt="success image" />
        <h3>Thank you!</h3>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};
