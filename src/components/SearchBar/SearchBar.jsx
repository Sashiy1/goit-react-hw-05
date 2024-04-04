import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  query: Yup.string().required("Please enter something"),
});

function SearchBar({ onSubmit }) {
  return (
    <header className={css.header}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ query: "" }}
        onSubmit={(values) => {
         
            onSubmit(values.query);
          
        }}
      >
        <Form>
          <Field
            className={css.formInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.formButton} type="submit">
            Search
          </button>
          <ErrorMessage
            className={css.ErrorMessage}
            name="query"
            component="div"
          />

          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;

//
