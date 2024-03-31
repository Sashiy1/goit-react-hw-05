import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

function SearchBar({ onSubmit }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values) => {
          if (values.query === "") {
            console.log("here");
            toast.error("Please enter something");
          } else {
           
            onSubmit(values.query);
          }
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

          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;
