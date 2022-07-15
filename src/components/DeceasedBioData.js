import React, { Component } from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { StylesContext } from '@material-ui/styles';
import Controls from './controls/Controls';
import { useForm, Form } from './useForm';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  makeStyles,
} from '@material-ui/core';

export class DeceasedBioData extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <Form>
            <AppBar title="Bio Data" />
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  hintText="first Name"
                  floatingLabelText="First Name"
                  onChange={handleChange('firstName')}
                  defaultValue={values.firstName}
                  readOnly={true}
                />
                <TextField
                  hintText="Last Name"
                  floatingLabelText="Last Name"
                  onChange={handleChange('lastName')}
                  defaultValue={values.lastName}
                  readOnly={true}
                />
                <TextField
                  hintText="Other Names"
                  floatingLabelText="Other Names"
                  onChange={handleChange('otherNames')}
                  value="Kenneth"
                  defaultValue={values.otherNames}
                  readOnly={true}
                />

                {/* <TextField
                  hintText="Date of Birth"
                  floatingLabelText="Date of Birth"
                  onChange={handleChange('dob')}
                  defaultValue={values.dob}
                />
                <TextField
                  hintText="Employer Name"
                  floatingLabelText="employerName"
                  onChange={handleChange('employerName')}
                  defaultValue={values.employerName}
                /> */}
              </Grid>

              <Grid item xs={6}>
                <TextField
                  hintText="Gender"
                  floatingLabelText="Gender"
                  onChange={handleChange('gender')}
                  defaultValue={values.gender}
                  readOnly={true}
                />
                <br />
                <TextField
                  hintText="Date of Birth"
                  floatingLabelText="Date of Birth"
                  onChange={handleChange('dob')}
                  defaultValue={values.dob}
                  readOnly={true}
                />

                <TextField
                  hintText="Employer Name"
                  floatingLabelText="employerName"
                  onChange={handleChange('employerName')}
                  defaultValue={values.employerName}
                  readOnly={true}
                />

                <RaisedButton
                  label="Continue"
                  secondary={true}
                  style={StylesContext.button}
                  onClick={this.continue}
                />
              </Grid>
            </Grid>
          </Form>
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
export default DeceasedBioData;
