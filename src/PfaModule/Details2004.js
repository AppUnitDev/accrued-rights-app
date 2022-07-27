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


export class Details2004 extends Component {
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
                  <div className="card-profile-image">
                    
                  </div>
                </Col>
              </Row>
              {/* <Search /> */}
              {/* <CardBody className="pt-0 pt-md-4">
             
                <div className="text-center">
                  
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Search
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
                      </div> */}
                  {/* <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div> */}
                  {/* <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div> */}
                  {/* <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div> */}
                  <hr className="my-4" />
                  {/* <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p> */}
                  {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a> */}
                {/* </div>
              </CardBody> */}
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
          
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h2 className="heading-big text-muted mb-4">
                    2004 Employment Details
                  </h2>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Organizational Sector
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
                            Employer
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
                            IPPIS date/Self Funded MDA
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
                            Staff ID
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
                            2004 Salary Structure
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
                            2004 Grade Level
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
                            2004 Step
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

export default Details2004;
