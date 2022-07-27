import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
// import UserHeader from "components/Headers/UserHeader.js";
// import Search from "components/Search/Search.js";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    // constructor(props) {
    // super(props);
    // this.state ={value: ""};
    // this.handleChange = this.handleChange.bind(this);
    
  }
  // handleChange(event) { this.setState({value: event.target.value})}
  // event.preventDefault();

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
        {/* <UserHeader /> */}
            {/* <AppBar title="Enter User Details" />
            
             */}

<Grid Container>
  <Grid item xs={6}>
        
                <Form>
                  <h2 className="heading-big text-muted mb-4">
                    BioData of Deceased Employee
                  </h2>
                  <div className="pl-lg-4">
                    
                      {/* <Col lg="6"> */}
                        <FormGroup>
                          <br />
                        <TextField 
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              
            />
           <br />
                        <TextField 
                          label="Other Name"
                          hintText="Other Name"
                          floatingLabelText="Other NAme"
                          margin="normal"
                          />
                          
<br />
<TextField
                          label="Surname"
                          hintText="Surname"
                          floatingLabelText="Surname"
                          margin="normal"
                          />
<br />
<TextField
                          label="Gender"
                          hintText="Gender"
                          floatingLabelText="Gender"
                          margin="normal"
                          />
<br />
<TextField
                          label="Date of Birth"
                          hintText="Date of Birth"
                          floatingLabelText="Date of Birth"
                          margin="normal"
                          />
<br />
<TextField
                          label="Employer Name"
                          hintText="Employer Name"
                          floatingLabelText="Employer NAme"
                          margin="normal"
                          />

                        </FormGroup>
                      {/* </Col> */}
                      
                    
                   
                  </div>
                  <hr className="my-4" />
                 
                </Form>
              
        
        <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
        </Grid>
        </Grid>
      
    </>
  

            
        
      </MuiThemeProvider>
    );
  }
}


export default FormUserDetails;