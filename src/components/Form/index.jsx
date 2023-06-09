import FirstStep from "./FirstStep";
import styles from "./Form.module.scss";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import { useState } from "react";
import { useUser } from "../../UserContext";

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
  const { active } = useUser();

  const getTabs = () => {
    switch (active) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep plans={plans} />;
      case 3:
        return <ThirdStep addOns={addOns} />;
      case 4:
        return <FourthStep plans={plans} addOns={addOns} />;
      default:
        break;
    }
  };

  return <>{getTabs()}</>;
};

export default Form;
