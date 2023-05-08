import { ErrorMessage, Field, Form, Formik } from "formik";
import ContainedButton from "../common/Button/ContainedButton";
import Input from "../common/Input";
import styles from "./Form.module.scss";
import {
  mustBeEmail,
  mustBeLettersOnly,
  mustBePhone,
  required,
} from "../../utils/validation.util";

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

const FirstStep = ({ active, setActive }) => {
  const formData = [
    {
      name: "name",
      label: "Name",
      placeholder: "e.g. Stephen King",
      type: "text",
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "e.g. stephenking@lorem.com",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "e.g. +1 234 567 890",
      type: "tel",
    },
  ];

  const handleSubmit = (values, helpers) => {
    // helpers.setSubmitting(true);
    // setActive(active + 1);
    console.log(values);
    console.log(helpers);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};

          errors.name = required(values.name) || mustBeLettersOnly(values.name);

          errors.email = required(values.email) || mustBeEmail(values.email);

          errors.phone = required(values.phone) || mustBePhone(values.phone);

          return errors;
        }}
      >
        {(formik) => (
          <Form>
            <div className={styles.fields}>
              <h1 className={styles.h1}>Personal info</h1>
              <p>Please provide your name, email address and phone number.</p>
              <div>
                {formData.map((data, index) => (
                  <Field key={data.name} name={data.name}>
                    {({ field, meta }) => (
                      <>
                        <Input
                          {...field}
                          {...data}
                          error={<ErrorMessage name={data.name} />}
                        />
                      </>
                    )}
                  </Field>
                ))}
              </div>
            </div>
            <div className={styles.buttons}>
              <div></div>
              <ContainedButton
                disabled={formik.isSubmitting || !formik.isValid}
                className={styles.next}
                type="submit"
              >
                Next Step
              </ContainedButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FirstStep;
