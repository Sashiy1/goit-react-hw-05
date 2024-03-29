import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css"

function SearchBar({onSubmit}) {
  return (
    <header className={css.header}>
      <Formik
      initialValues={{query: ""}}
      onSubmit={(values) => {
        
        onSubmit(values.query)
      }}>
        
        <Form>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;

