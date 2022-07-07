import React from 'react';
import { TextField } from '@material-ui/core';
export default function Input(props) {
  const { name, size, label, error = null, value, onChange, ...other } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      size={size || 'small'}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
