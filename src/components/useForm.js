import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

export function useForm(initialFValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values, //Helps to display value for all the names in the object
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };
  //Set values and dislplay on Textfield
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}

//Custom CCS For the textfield
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

//Re-usable Form
export function Form(props) {
  const { children, ...other } = props;
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="false" {...other}>
      {props.children}
    </form>
  );
}
