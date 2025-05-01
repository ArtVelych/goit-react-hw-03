import { useId } from "react";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";

export default function ContactForm({ initialValues, onSubmit }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.formField}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.formField}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css.input}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <div className={css.submitField}>
          <button className={css.formButton} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
