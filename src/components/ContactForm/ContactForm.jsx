import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const FormField = ({ label, name, formik }) => {
  return (
    <label>
      {label}:
      <input
        type="text"
        {...formik.getFieldProps(name)}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div>{formik.errors[name]}</div>
      )}
    </label>
  );
};

const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name must be at most 50 characters"),
      number: Yup.string()
        .required("Number is required")
        .min(3, "Number must be at least 3 characters")
        .max(50, "Number must be at most 50 characters"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newContact = { ...values, id: nanoid() };
      onAddContact(newContact);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField label="Name" name="name" formik={formik} />
      <FormField label="Number" name="number" formik={formik} />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
