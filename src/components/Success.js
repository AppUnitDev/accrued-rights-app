import React, { Component } from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { StylesContext } from '@material-ui/styles';

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS YOUR FORM //
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title=" Success" />
          <h1> Thank you for your Submission</h1>
          <p>You will get an e-mail with further instruction</p>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
