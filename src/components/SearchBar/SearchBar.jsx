import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css"
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
  query: Yup.string().required("Must be a valid value"), 
});

function SearchBar({onSubmit}) {
  return (
    <header className={css.header}>
      <Formik
      validationSchema={validationSchema}
      initialValues={{query: ""}}
      onSubmit={(values) => {
        
        onSubmit(values.query)

      }}>
        
        <Form>
          <Field className={css.formInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            
          />
          <button className={css.formButton} type="submit">Search</button>
          <ErrorMessage className={css.ErrorMessage} name="query" component="div"/>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;

