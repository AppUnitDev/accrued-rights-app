import React, { Component } from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { StylesContext } from '@material-ui/styles';

export class BasicEmploymentDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title=" Basic Employment Detials" />
          {/* <TextField
            disabled
            hintText="Enter Your Occupation"
            floatingLabelText="Ocupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          /> */}
          <br />
          <TextField
            // disabled={true}

            readOnly={true}
            hintText="Date of First Appointment"
            floatingLabelText="Date of First Appointment"
            onChange={handleChange('dofa')}
            defaultValue={values.dofa}
            value="13-june-1997"
          />
          <br />
          <TextField
            readOnly={true}
            hintText="Date of Transfer of Service"
            floatingLabelText="Date of Transfer of Service"
            onChange={handleChange('dts')}
            defaultValue={values.dts}
            value="23-Aug-2005"
          />
          <br />
          <TextField
            hintText="Date of Death"
            floatingLabelText="Date of Death"
            onChange={handleChange('dod')}
            defaultValue={values.dod}
            value="12-Aug-2020"
          />
          <br />
          <TextField
            readOnly={true}
            hintText="Number of Emploment with FGN"
            floatingLabelText="Number of Emploment with FGN"
            onChange={handleChange('noEmploymentFgn')}
            defaultValue={values.noEmploymentFgn}
            value="3"
          />
          <br />
          <div>
            <RaisedButton
              label="Continue"
              secondary={true}
              style={StylesContext.button}
              onClick={this.continue}
            />
            <RaisedButton
              label="Back"
              primary={true}
              style={StylesContext.button}
              onClick={this.back}
            />
          </div>
        </>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};
export default BasicEmploymentDetails;
