import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.8),
  },
  label: {
    teextTransform: 'none',
  },
}));
export default function Button(props) {
  const { text, size, saveIcon, color, variant, onClick, ...other } = props;
  const classes = useStyles();
  return (
    <MuiButton
      variant={variant || 'contained'}
      color={color || 'primary'}
      size={size || 'medium'}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
}
