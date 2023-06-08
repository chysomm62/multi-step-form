import { useUser } from "../../UserContext";
import Button from "../common/Button";
import ContainedButton from "../common/Button/ContainedButton";
import styles from "./Form.module.scss";

const ThirdStep = ({ addOns, selected, setSelected }) => {
  const { active, setActive } = useUser();

  const handleChange = (e, index) => {
    const { target } = e;
    if (target.checked) {
      setSelected([...selected, index]);
      // target.setAttribute("checked", true);
    } else {
      selected.splice(selected.indexOf(index), 1);

      // target.removeAttribute(checked);
    }
  };

  return (
    <section className={styles.form}>
      <>
        <div className={styles.fields}>
          <h1 className={styles.h1}>Pick add-ons</h1>
          <p> Add-ons help enhance your gaming experience.</p>
          <div className={styles.addOns}>
            {addOns.map((addOn, index) => (
              <div
                key={addOn.name}
                className={
                  selected.includes(index)
                    ? `${styles.selected} ${styles.addOn}`
                    : styles.addOn
                }
              >
                <div className={styles.first_child}>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      defaultChecked={
                        selected.includes(index) === true ? true : false
                      }
                      onClick={(e) => handleChange(e, index)}
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
        </div>
        <div className={styles.buttons}>
          <Button onClick={() => setActive(active - 1)}>Go Back</Button>

          <ContainedButton
            className={styles.next}
            onClick={() => setActive(active + 1)}
            disabled={selected.length < 1}
          >
            Next Step
          </ContainedButton>
        </div>
      </>
    </section>
  );
};

export default ThirdStep;
