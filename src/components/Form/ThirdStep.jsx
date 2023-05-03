import { useState } from "react";
import styles from "./Form.module.scss";

const addOns = [
  {
    name: "Online service",
    detail: " Access to multiplayer games",
    price: "+$1/mo",
  },
  {
    name: "Larger storage",
    detail: " Extra 1TB of cloud save",
    price: "+$2/mo",
  },
  {
    name: "Customizable Profile",
    detail: "Custom theme on your profile",
    price: "+$2/mo",
  },
];

const ThirdStep = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [selected, setSelected] = useState([]);

  return (
    <>
      <h1 className={styles.h1}>Pick add-ons</h1>
      <p> Add-ons help enhance your gaming experience.</p>
      <div className={styles.addOns}>
        {addOns.map((addOn, index) => (
          <div key={addOn.name} className={styles.addOn}>
            <div className={styles.first_child}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  // checked={isToggled}
                  // onChange={() => setIsToggled(!isToggled)}
                />
                <span className={styles.checkmark} />
              </label>
              <div>
                <h3>{addOn.name}</h3>
                <p>{addOn.detail}</p>
              </div>
            </div>
            <div>
              <h4 className={styles.price}>{addOn.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ThirdStep;
