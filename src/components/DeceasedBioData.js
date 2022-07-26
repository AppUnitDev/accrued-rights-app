import React, { Component, useState } from "react";
import AppBar from "material-ui/AppBar";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import RaisedButton from "material-ui/RaisedButton";
import { StylesContext } from "@material-ui/styles";
import Controls from "./controls/Controls";
import { useForm, Form } from "./useForm";
import Popup from "../components/Popup";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  makeStyles,
  TextField,
} from "@material-ui/core";

export class DeceasedBioData extends Component {
  // const [openPopup, setOpenPopup] = props;
  // constructor(props) {
  //  // super(props);
  //   this.state = {
  //     openPopup: openPopup,
  //     setOpenPopup: setOpenPopup,
  //   };
  // }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  //const[(openPopup, setOpenPopup)] = useState(false);
  constructor() {
    super();

    this.state = {
      openPopup: false,
      setOpenPopup: false,
    };
  }
  render() {
    const { values, handleChange } = this.props;
    // const { openPopup, setOpenPopup } = this.props;

    const handlePopup = () => {
      this.setState({
        openPopup: (this.state.openPopup = true),
        setOpenPopup: (this.state.setOpenPopup = true),
      });
    };

    const handleClosePopup = () => {
      //alert('Clicked');
      this.setState({
        openPopup: (this.state.openPopup = false),
        setOpenPopup: (this.state.setOpenPopup = false),
      });
    };

    return (
      <MuiThemeProvider>
        <>
          <Form>
            <AppBar title="Bio Data" />
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  error
                  focused
                  helperText="Firs Name does not match MDA Submission"
                  FormHelperTextProps={{
                    onClick: () => {
                      handlePopup();
                    },
                    style: { cursor: "pointer" },
                  }}
                  label="First Name"
                  hintText="first Name"
                  floatingLabelText="First Name"
                  onChange={handleChange("firstName")}
                  defaultValue={values.firstName}
                  // readOnly={true}
                />
                <TextField
                  label="Last Name"
                  hintText="Last Name"
                  floatingLabelText="Last Name"
                  onChange={handleChange("lastName")}
                  defaultValue={values.lastName}
                  // readOnly={true}
                />
                <TextField
                  label="Other Names"
                  hintText="Other Names"
                  floatingLabelText="Other Names"
                  onChange={handleChange("otherNames")}
                  //value="Kenneth"
                  defaultValue={values.otherNames}
                  //readOnly={true}
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
                  label="Gender"
                  hintText="Gender"
                  floatingLabelText="Gender"
                  onChange={handleChange("gender")}
                  defaultValue={values.gender}
                  //readOnly={true}
                />
                <br />
                <TextField
                  hintText="Date of Birth"
                  floatingLabelText="Date of Birth"
                  onChange={handleChange("dob")}
                  defaultValue={values.dob}
                  // readOnly={true}
                  label="Date of Birth"
                />

                <TextField
                  label="Employer Name"
                  hintText="Employer Name"
                  floatingLabelText="employerName"
                  onChange={handleChange("employerName")}
                  defaultValue={values.employerName}
                  //readOnly={true}
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
          <Popup
            openPopup={this.state.openPopup}
            setOpenPopup={this.state.setOpenPopup}
            title="Deceased First Name from MDA"
          >
            <Controls.ActionButton
              onClick={() => {
                handleClosePopup();
              }}
              color="secondary"
            >
              Close
            </Controls.ActionButton>
            <Controls.Input
              focused
              readOnly={true}
              value="Kollins"
              label="Name From MDA"
            ></Controls.Input>
          </Popup>
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
