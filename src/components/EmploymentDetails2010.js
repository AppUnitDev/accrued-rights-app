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

export class EmploymentDetails2010 extends Component {
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
            <AppBar title=" Basic Employment Detials 2010" />
            <Grid container>
              <Grid item xs={6}>
                <br />
                <TextField
                  readOnly={true}
                  hintText="Organization Sector (2010)"
                  floatingLabelText="Organization Sector (2010)"
                  onChange={handleChange('orgSector2010')}
                  defaultValue={values.orgSector2010}
                  value="PU"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="Employer (2010)"
                  floatingLabelText="Employer (2010)"
                  onChange={handleChange('employer2010')}
                  // defaultValue={values.occupation}
                  value="Federal Inland Revenue"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="IPPIS Date/Self-Funded MDA"
                  floatingLabelText="IPPIS Date/Self-Funded MDA"
                  onChange={handleChange('ippisdateSelf2010')}
                  defaultValue={values.dts2010}
                  value="15-May-2010"
                />
              </Grid>

              <Grid item xs={6}>
                <br />
                <TextField
                  readOnly={true}
                  hintText="Staff_ID (2010)"
                  floatingLabelText="Staff_ID (2010)"
                  onChange={handleChange('staffId2010')}
                  defaultValue={values.staffId2007}
                  value="490"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="Salaray Structure (2010)"
                  floatingLabelText=" Salaray Structure 2010"
                  onChange={handleChange('salStructure2010')}
                  defaultValue={values.salStructure2010}
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
export default EmploymentDetails2010;
