import React, { Component } from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { StylesContext } from '@material-ui/styles';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  makeStyles,
} from '@material-ui/core';
import { useForm, Form } from './useForm';

export class EmploymentDetailsYOD extends Component {
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
          <Form>
            <AppBar title=" Year of Death Employment Detials" />
            <Grid container>
              <Grid item xs={6}>
                <br />
                <TextField
                  size="large"
                  readOnly={true}
                  hintText="Organization Sector (Y.O.D)"
                  floatingLabelText="Organization Sector (2019)"
                  onChange={handleChange('orgSector2019')}
                  defaultValue={values.orgSector2019}
                  value="PU"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="Employer (Y.O.D)"
                  floatingLabelText="Employer (Y.O.D)"
                  onChange={handleChange('employerYOD')}
                  //defaultValue={values.occupation}
                  value="Federal Inland Revenue"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="IPPIS Date/Self-Funded MDA"
                  floatingLabelText="IPPIS Date/Self-Funded MDA"
                  onChange={handleChange('ippisdateSelfYOD')}
                  defaultValue={values.dtsYOD}
                  value="15-May-2018"
                />
              </Grid>

              <Grid item xs={6}>
                <br />
                <TextField
                  readOnly={true}
                  hintText="Staff_ID (Y.O.D)"
                  floatingLabelText="Staff_ID (Y.O.D)"
                  onChange={handleChange('staffIdYOD')}
                  //defaultValue={values.staffId2007}
                  value="490"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="Salaray Structure (Y.O.D)"
                  floatingLabelText="Salaray Structure (Y.O.D)"
                  onChange={handleChange('salStructureYOD')}
                  defaultValue={values.salStructureYOD}
                  value="HATISS"
                />
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
export default EmploymentDetailsYOD;
