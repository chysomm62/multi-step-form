import { useState, useRef, useEffect } from "react";
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
  active,
}) => {
  const [confirm, setConfirm] = useState(false);
  const planRef = useRef(null);
  const addOnRef = useRef(null);

  const totalAmount = [];

  totalAmount.push(
    isDurationToggled ? plans[planIndex].price * 12 : plans[planIndex].price
  );

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
                <h4>
                  $
                  <span ref={planRef}>
                    {isDurationToggled
                      ? plans[planIndex].price * 12
                      : plans[planIndex].price}
                  </span>
                  /{isDurationToggled ? "yr" : "mo"}
                </h4>
              </div>
              <div className={styles.addSum}>
                {addOns.map((addOn, index) => {
                  if (selected.includes(index)) {
                    totalAmount.push(
                      isDurationToggled ? addOn.price * 12 : addOn.price
                    );
                    return (
                      <div key={addOn.name} className={styles.addOn}>
                        <div>
                          <p>{addOn.name}</p>
                        </div>
                        <div>
                          <h4 className={styles.price}>
                            $
                            <span ref={addOnRef}>
                              {isDurationToggled
                                ? addOn.price * 12
                                : addOn.price}
                            </span>
                            /{isDurationToggled ? "yr" : "mo"}
                          </h4>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            <div className={styles.total}>
              <div>
                <p>Total ({isDurationToggled ? "per year" : "per month"})</p>
              </div>

              <div>
                <h4 className={styles.price}>
                  +$
                  {/* {isDurationToggled ? addOn.price * 12 : addOn.price}/ */}
                  {totalAmount.reduce((result, num) => result + num)}
                  {isDurationToggled ? "yr" : "mo"}
                </h4>
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
