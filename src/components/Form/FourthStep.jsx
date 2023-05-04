import styles from "./Form.module.scss";

const FourthStep = ({
  plans,
  planIndex,
  isDurationToggled,
  setActive,
  addOns,
  selected,
}) => {
  // console.log(plans[planIndex].price + )
  return (
    <>
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
    </>
  );
};

export default FourthStep;
