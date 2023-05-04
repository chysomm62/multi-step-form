import styles from "./Form.module.scss";

const ThirdStep = ({ addOns, selected, setSelected }) => {
  const handleChange = (e, index) => {
    if (e.target.checked && !selected.includes(index)) {
      setSelected([...selected, index]);
    } else {
      selected.splice(selected.indexOf(index), 1);
    }
  };

  return (
    <>
      <h1 className={styles.h1}>Pick add-ons</h1>
      <p> Add-ons help enhance your gaming experience.</p>
      <div className={styles.addOns}>
        {addOns.map((addOn, index) => (
          <div
            key={addOn.name}
            className={
              !selected.includes(index)
                ? styles.addOn
                : `${styles.selected} ${styles.addOn}`
            }
          >
            <div className={styles.first_child}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={selected.includes(index)}
                  onChange={(e) => handleChange(e, index)}
                />
                <span className={styles.checkmark} />
              </label>
              <div>
                <h3>{addOn.name}</h3>
                <p>{addOn.detail}</p>
              </div>
            </div>
            <div>
              <h4 className={styles.price}>+${addOn.price}/mo</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ThirdStep;
