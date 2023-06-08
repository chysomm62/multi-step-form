import FirstStep from "./FirstStep";
import styles from "./Form.module.scss";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import { useState } from "react";

const plans = [
  {
    icon: "/assets/images/icon-arcade.svg",
    name: "Arcade",
    price: 9,
  },
  {
    icon: "/assets/images/icon-advanced.svg",
    name: "Advanced",
    price: 12,
  },
  {
    icon: "/assets/images/icon-pro.svg",
    name: "Pro",
    price: 15,
  },
];

const addOns = [
  {
    name: "Online service",
    detail: " Access to multiplayer games",
    price: 1,
  },
  {
    name: "Larger storage",
    detail: " Extra 1TB of cloud save",
    price: 2,
  },
  {
    name: "Customizable Profile",
    detail: "Custom theme on your profile",
    price: 2,
  },
];

const Form = () => {
  // second step
  const [planIndex, setPlanIndex] = useState(0);
  const [isDurationToggled, setIsDurationToggled] = useState(false);

  // third step
  const [selected, setSelected] = useState([]);
  const [totalAmount, setTotalAmount] = useState([]);

  const getTabs = () => {
    switch (active) {
      case 1:
        return <FirstStep />;
      case 2:
        return (
          <SecondStep
            plans={plans}
            planIndex={planIndex}
            setPlanIndex={setPlanIndex}
            isDurationToggled={isDurationToggled}
            setIsDurationToggled={setIsDurationToggled}
          />
        );
      case 3:
        return (
          <ThirdStep
            addOns={addOns}
            selected={selected}
            setSelected={setSelected}
          />
        );
      case 4:
        return (
          <FourthStep
            plans={plans}
            planIndex={planIndex}
            isDurationToggled={isDurationToggled}
            addOns={addOns}
            selected={selected}
          />
        );
      default:
        break;
    }
  };

  return <>{getTabs()}</>;
};

export default Form;
