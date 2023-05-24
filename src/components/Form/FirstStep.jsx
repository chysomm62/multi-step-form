import { ErrorMessage, Field, Form, Formik } from "formik";
import ContainedButton from "../common/Button/ContainedButton";
import Input from "../common/Input";
import styles from "./Form.module.scss";

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
    helpers.setSubmitting(true);
    setActive(active + 1);

    setTimeout(() => {
      helpers.setSubmitting(false);
      // helpers.resetForm({ values });
    }, 1000);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Field is required";
          }
          if (!values.email) {
            errors.email = "Field is required";
          } else if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
          ) {
            errors.email = "Invalid Email Address";
          }
          if (!values.phone) {
            errors.phone = "Field is required";
          } else if (
            !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(values.phone)
          ) {
            errors.phone = "Invalid Phone Number";
          }

          return errors;
        }}
      >
        {(formik) => (
          <Form className={styles.form}>
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
                disabled={
                  formik.isSubmitting || !(formik.isValid && formik.dirty)
                }
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
