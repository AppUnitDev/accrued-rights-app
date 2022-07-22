import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
//import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import RaisedButton from 'material-ui/RaisedButton';
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
  TextField,
} from '@material-ui/core';
import { useForm, Form } from './useForm';
// import { RaisedButton } from 'material-ui';

export class EmploymentDetails2004 extends Component {
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
            <AppBar
              title=" Basic Employment Detials 2004"
              style={{ width: '900px' }}
            />

            <Grid container>
              <Grid item xs={6}>
                <br />
                <TextField
                  label="                  Organization Sector (2004)                      "
                  //readOnly={true}
                  hintText="Organization Sector (2004)"
                  floatingLabelText="Organization Sector (2004)"
                  onChange={handleChange('orgSector')}
                  defaultValue={values.orgSector}
                  name="orgSectors"
                  //value={valuess.orgSector}
                  //onChanged={handleInputChange}
                  value="PU"
                  fullWidth
                />
                <br />
                <TextField
                  label="Employer (2004)"
                  //readOnly={true}
                  hintText="Employer (2004)"
                  floatingLabelText="Employer (2004)"
                  onChange={handleChange('employer2004')}
                  defaultValue={values.occupation}
                  // value="Ministry of Power"
                />
                <br />
                <TextField
                  label="IPPIS Date/Self-Funded MDA"
                  //readOnly={true}
                  hintText="IPPIS Date/Self-Funded MDA"
                  floatingLabelText="IPPIS Date/Self-Funded MDA"
                  onChange={handleChange('ippisdateSelf')}
                  defaultValue={values.dts}
                  value="15-Aug-2012"
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <br />
                <TextField
                  //readOnly={true}
                  label="Staff ID (2004) "
                  hintText="Staff_ID (2004)"
                  floatingLabelText="Staff_ID (2004)"
                  onChange={handleChange('staffId')}
                  defaultValue={values.staffId}
                  value="339"
                />
                <br />
                <TextField
                  readOnly={true}
                  hintText="Salaray Structure (2004)"
                  floatingLabelText="Salaray Structure (2004)"
                  onChange={handleChange('salStructure2004')}
                  defaultValue={values.salStructure2004}
                  value="HATIS"
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
export default EmploymentDetails2004;
