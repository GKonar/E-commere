import { useState } from 'react';

export default function useForm(initialValues, onSubmit, schema) {
  const [state, setState] = useState({
    values: initialValues,
    errors: {},
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (event) => {
    event.persist();
    setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handleSubmit with schema
    if (onSubmit && schema) {
      let errors = {}
      schema.validate(state.values)
        .then(() => {
          setSubmitting(true);
          setState(prevState => {
            return {
              ...prevState,
              // clean error state
              errors: {}
            };
          });
          setSubmitSuccess(true);
          onSubmit();
          setTimeout(() => setSubmitting(false), 500);
        })
        .catch((err) => {
          for (let value in initialValues) {
            if (err.path === value) errors = { ...errors, [value]: err.message }
          }
          setState(prevState => {
            return {
              ...prevState,
              errors
            };
          });
        })
      // handleSubmit without schema
    } else if (onSubmit) {
      setSubmitting(true);
      try {
        onSubmit();
        setTimeout(() => setSubmitting(false), 500);
      } catch (e) {
        console.log('Submit error: ', e);
      }
    }
    console.log(state.errors)
  }

  return {
    values: state.values,
    errors: state.errors,
    handleChange,
    handleSubmit,
    submitting,
    submitSuccess,
    submitError,
  };
}