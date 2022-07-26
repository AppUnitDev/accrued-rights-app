import React, { Component, useState } from "react";
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from "material-ui/AppBar";
//import TextField from 'material-ui/TextField';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import RaisedButton from 'material-ui/RaisedButton';
import RaisedButton from "material-ui/RaisedButton";
import { StylesContext } from "@material-ui/styles";
import { Grid, makeStyles, TextField } from "@material-ui/core";
import { fontSize } from "@mui/system";
import { useForm, Form } from "./useForm";
import Popup from "../components/Popup";
import Controls from "./controls/Controls";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    transform: "translateZ(0)",
  },
});

export class BasicEmploymentDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  constructor() {
    super();

    this.state = {
      openPopup: false,
      setOpenPopup: false,
    };
  }

  render() {
    const { values, handleChange } = this.props;
    // const [openPopup, setOpenPopup] = useState(false);
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
            <AppBar
              title=" Basic Employment Detials"
              style={{ width: "700px" }}
            />

            <Grid container>
              <Grid item xs={6}>
                <br />
                <TextField
                  // disabled={true}
                  error
                  // readOnly={true}

                  label="Date of First Appointment"
                  hintText="Date of First Appointment"
                  floatingLabelText="Date of First Appointment"
                  onChange={handleChange("dofa")}
                  defaultValue={values.dofa}
                  helperText="Date of First Appointment does not match MDA Submission"
                  FormHelperTextProps={{
                    onClick: () => {
                      handlePopup();
                    },
                    style: { cursor: "pointer" },
                  }}
                  value="13-june-1997"
                  style={{ paddingBottom: "5px", fontSize: 180 }}
                />
                <br />
                <TextField
                  // readOnly={true}
                  //fullWidth
                  label="Date of Transfer of Service"
                  hintText="Date of Transfer of Service"
                  floatingLabelText="Date of Transfer of Service"
                  onChange={handleChange("dts")}
                  defaultValue={values.dts}
                  value="23-Aug-2005"
                  style={{ width: "245px", paddingBottom: "5px" }}
                />
              </Grid>
              <Grid item xs={6}>
                <br />
                <TextField
                  label="Date of Death"
                  hintText="Date of Death"
                  floatingLabelText="Date of Death"
                  onChange={handleChange("dod")}
                  defaultValue={values.dod}
                  value="12-Aug-2020"
                  style={{ paddingBottom: "5px" }}
                />
                <br />
                <TextField
                  style={{ width: "245px", paddingBottom: "10px" }}
                  label="Number of Employment with FGN"
                  //readOnly={true}
                  hintText="Number of Emploment with FGN"
                  floatingLabelText="Number of Emploment with FGN"
                  onChange={handleChange("noEmploymentFgn")}
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
              // style={{ innerHeight: "70%" }}
              readOnly={true}
              value="23-Jun-1984"
              label="DOFA From MDA"
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
export default BasicEmploymentDetails;
