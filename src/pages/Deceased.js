import React, { useState } from "react";
import {
  Container,
  Navbar,
  Table,
  Button,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import {BsFillArrowUpSquareFill } from 'react-bootstrap-icons';

import { FaExternalLinkAlt } from "react-icons/fa";

const label = {
  headingOne: "Accrued Right Computation Module - Deceased",
  sComputationLabel: "Single Computation",
  bComputationLabel: "Bulk Computation",
  excelLabel: " Excel",
  pdfLabel: " PDF",
  eDorLabel: "SUBMISSION DATE :",
  sDate: "START DATE",
  eDate: "END DATE",
};

// const button = () => {
//     return(
//         <div>

//         </div>

//     )
// }

// const RSAFORM = () => {
//     return (
//         <div>

//             <Container >
//                     <InputGroup className="mb-3" style={{ display: "flex", justifyContent: "left", alignItems:'left', width: '40%'  }}>
//                         <InputGroup.Text>RSA PIN:</InputGroup.Text>
//                         <FormControl aria-label="" style={{ width: '40%' }}/>
//                         <Button variant="primary" size="lg" active>LOAD</Button>{' '}
//                         </InputGroup>

//                     </Container>:null

//         </div>
//     )
// }

const DeceasedForm = () => {
  const [comPutationState, setComputationState] = useState(
    label.bComputationLabel
  );
  const [showButton, setShowButton] = useState(true);
  return (
    <div>
      <Container>
        <h1
          className="shadow-sm-text-succes mt -5 p-3 text-center rounded"
          onClick={() => {
            alert("Report Exported");
          }}
        >
          {label.headingOne}
        </h1>
        <h2>{comPutationState}</h2>
      </Container>

      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
            width: "30%",
          }}
        >
          <Col xs={7}>
            <Form.Select
              className="costume-select"
              variant="secondary"
              onChange={(e) => {
                const selectedComputation = e.target.value;
                setComputationState(selectedComputation);
              }}
            >
              <option>{label.bComputationLabel}</option>
              <option>{label.sComputationLabel}</option>
            </Form.Select>

            {comPutationState === label.sComputationLabel ? (
              <Container>
                <InputGroup
                  className="mb-3"
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "left",
                    width: "40%",
                  }}
                >
                  <InputGroup.Text>RSA PIN:</InputGroup.Text>
                  <FormControl aria-label="" style={{ width: "40%" }} />
                  <Button variant="primary" size="lg" active>
                    LOAD
                  </Button>{" "}
                </InputGroup>
              </Container>
            ) : null}
          </Col>
        </Row>
      </Container>

      <conntainer>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5>
            {" "}
            <FaExternalLinkAlt
              onClick={() => {
                alert("Report Exported");
              }}
            />{" "}
            {label.excelLabel}{" "}
          </h5>

          <h5>
            {" "}
            <FaExternalLinkAlt
              onClick={() => {
                alert("Report Exported");
              }}
            />{" "}
            {label.pdfLabel}
          </h5>
        </Row>
      </conntainer>

      <Container>
        <Container
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
          }}
        >
          <h5>{label.eDorLabel}</h5>
        </Container>

        <InputGroup className="mb-3" style={{ width: "50%" }}>
          <InputGroup.Text>{label.sDate}</InputGroup.Text>
          <Form.Control type="date"></Form.Control>
          <InputGroup.Text>{label.eDate}</InputGroup.Text>
          <Form.Control type="date"></Form.Control>
          <Button variant="primary" size="lg" active>
            Apply
          </Button>{" "}
        </InputGroup>
      </Container>

      <Container></Container>

      <Navbar bg="" expand="lg"></Navbar>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
        }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th> RSA PIN </th>
              <th>NAME</th>
              <th>EDOR/DOD</th>
              <th>DOB</th>
              <th>DOFA</th>
              <th>Gender</th>
              <th>2004 Salary Structure</th>
              <th>2004 GL </th>
              <th>2004 Step</th>
              <th>Organization Sector</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>PEN200256488365</td>
              <td>Otto</td>
              <td>11/12/2020</td>
              <td>11/9/1987</td>
              <td>11/12/2007</td>
              <td>MALE</td>
              <td>2004</td>
              <td>9</td>
              <td>8</td>
              <td>NITDA</td>
            </tr>
            <tr>
              <td>2</td>
              <td>PEN200256488365</td>
              <td>Otto</td>
              <td>11/12/2020</td>
              <td>11/9/1987</td>
              <td>11/12/2007</td>
              <td>MALE</td>
              <td>2004</td>
              <td>9</td>
              <td>8</td>
              <td>NITDA</td>
            </tr>
            <tr>
              <td>3</td>
              <td>PEN200256488365</td>
              <td>Otto</td>
              <td>11/12/2020</td>
              <td>11/9/1987</td>
              <td>11/12/2007</td>
              <td>MALE</td>
              <td>2004</td>
              <td>9</td>
              <td>8</td>
              <td>NITDA</td>
            </tr>

            <tr>
              <td>4</td>
              <td>PEN200256488365</td>
              <td>Otto</td>
              <td>11/12/2020</td>
              <td>11/9/1987</td>
              <td>11/12/2007</td>
              <td>MALE</td>
              <td>2004</td>
              <td>9</td>
              <td>8</td>
              <td>NITDA</td>
            </tr>

            <tr>
              <td>5</td>
              <td>PEN200256488365</td>
              <td>Otto</td>
              <td>11/12/2020</td>
              <td>11/9/1987</td>
              <td>11/12/2007</td>
              <td>MALE</td>
              <td>2004</td>
              <td>9</td>
              <td>8</td>
              <td>NITDA</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container>
        <>
          <Button
            variant="primary"
            size="lg"
            active
            onClick={() => {
              alert("Computation iS Done!!");
            }}
          >
            Compute
          </Button>{" "}
          <Button variant="secondary" size="lg" active>
            Display Result
          </Button>
        </>
      </Container>
    </div>
  );
};
export default DeceasedForm;
