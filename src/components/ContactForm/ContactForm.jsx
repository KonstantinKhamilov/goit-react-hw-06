import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

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
      dispatch(addContact(newContact));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </label>

      <label>
        Number:
        <input
          type="text"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.number && formik.errors.number ? (
          <div>{formik.errors.number}</div>
        ) : null}
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
