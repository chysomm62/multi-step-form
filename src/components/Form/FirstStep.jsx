import Input from "../common/Input";
import styles from "./Form.module.scss";

const FirstStep = () => {
  const formData = [
    { name: "name", label: "Name", placeholder: "e.g. Stephen King" },
    {
      name: "email",
      label: "Email Address",
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "e.g. +1 234 567 890",
    },
  ];

  return (
    <>
      <h1 className={styles.h1}>Personal info</h1>
      <p>Please provide your name, email address and phone number.</p>
      <form>
        {formData.map((data, index) => (
          <Input
            key={index}
            name={data.name}
            label={data.label}
            placeholder={data.placeholder}
          />
        ))}
      </form>
    </>
  );
};

export default FirstStep;
