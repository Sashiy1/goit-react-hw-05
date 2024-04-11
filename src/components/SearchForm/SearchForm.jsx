import css from "./SearchForm.module.css";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SearchForm = ({ onSubmit }) => {
  return (
    <div className={css.FormBox}>
      <Formik

        initialValues={{ query: "" }}
        onSubmit={(values) => {
          if (!values.query.trim()) {
            return toast.error("Can not be empty");
          }
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
            placeholder="Search for films"
          />
          <button className={css.formButton} type="submit">
            Search
          </button>

          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;
