import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
 import Paper from '@material-ui/core/Paper';
//  import UserHeader from "components/Headers/UserHeader.js";
//  import Search from "components/Search/Search.js";
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


export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
        {/* <UserHeader /> */}
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
          <Container className="mt--30" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  
                </Col>
              </Row>
              {/* <Search /> */}
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  {/* <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col> */}
                  
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h2 className="heading-big text-muted mb-4">
                    Basic Employment Details
                  </h2>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Date of First Appointment
                          </label>
                          <Input
                            className="form-control-alternative"
                            // defaultValue="lucky.jesse"
                            id="input-username"
                            // placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Date of Transfer of Service
                          </label>
                          <Input
                            className="form-control-alternative"
                            // defaultValue="lucky.jesse"
                            id="input-username"
                            // placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Date of Death
                          </label>
                          <Input
                            className="form-control-alternative"
                            // defaultValue="lucky.jesse"
                            id="input-username"
                            // placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Number of Employment with Federal Government
                          </label>
                          <Input
                            className="form-control-alternative"
                            // defaultValue="lucky.jesse"
                            id="input-username"
                            // placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                  
                  </div>
                  <hr className="my-4" />
                  
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>

 <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>

      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
