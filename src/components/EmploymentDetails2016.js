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

export class EmploymentDetails2016 extends Component {
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
            <AppBar title=" Basic Employment Detials 2016" />
            <Grid container>
              <Grid item xs={6}>
                <br />
                <TextField
                  readOnly={true}
                  hintText="Organization Sector (2016)"
                  floatingLabelText="Organization Sector (2016)"
                  onChange={handleChange('orgSector2016')}
                  defaultValue={values.orgSector2016}
                  value="PU"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="Employer (2016)"
                  floatingLabelText="Employer (2016)"
                  onChange={handleChange('employer2016')}
                  //defaultValue={values.occupation}
                  value="Federal Inland Revenue"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="IPPIS Date/Self-Funded MDA"
                  floatingLabelText="IPPIS Date/Self-Funded MDA"
                  onChange={handleChange('ippisdateSelf2016')}
                  defaultValue={values.dts2016}
                  value="15-May-2016"
                />
              </Grid>

              <Grid item xs={6}>
                <br />
                <TextField
                  readOnly={true}
                  hintText="Staff_ID (2016)"
                  floatingLabelText="Staff_ID (2016)"
                  onChange={handleChange('staffId2016')}
                  //defaultValue={values.staffId2007}
                  value="490"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="Salaray Structure (2016)"
                  floatingLabelText="Salaray Structure (2016)"
                  onChange={handleChange('salStructure2016')}
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
export default EmploymentDetails2016;
