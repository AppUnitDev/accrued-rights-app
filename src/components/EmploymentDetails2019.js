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

export class EmploymentDetails2019 extends Component {
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
            <AppBar title=" Basic Employment Detials 2019" />
            <Grid container>
              <Grid item xs={6}>
                <br />
                <TextField
                  size="large"
                  readOnly={true}
                  hintText="Organization Sector (2019)"
                  floatingLabelText="Organization Sector (2019)"
                  onChange={handleChange('orgSector2019')}
                  defaultValue={values.orgSector2019}
                  value="PU"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="Employer (2019)"
                  floatingLabelText="Employer (2019)"
                  onChange={handleChange('employer2019')}
                  //defaultValue={values.occupation}
                  value="Federal Inland Revenue"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="IPPIS Date/Self-Funded MDA"
                  floatingLabelText="IPPIS Date/Self-Funded MDA"
                  onChange={handleChange('ippisdateSelf2019')}
                  defaultValue={values.dts2019}
                  value="15-May-2016"
                />
              </Grid>

              <Grid item xs={6}>
                <br />
                <TextField
                  readOnly={true}
                  hintText="Staff_ID (2019)"
                  floatingLabelText="Staff_ID (2019)"
                  onChange={handleChange('staffId2019')}
                  //defaultValue={values.staffId2007}
                  value="490"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="Salaray Structure (2019)"
                  floatingLabelText="Salaray Structure (2019)"
                  onChange={handleChange('salStructure2019')}
                  defaultValue={values.salStructure2016}
                  value="COMPAS"
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
export default EmploymentDetails2019;
