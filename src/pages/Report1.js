import React from "react";
import { Container, Table } from "react-bootstrap";

const Report1 = () => {
  return (
    <div className="report1">
      <Container>
        <h1
          className="shadow-sm-text-succes mt -5 p-3 text-center rounded"
          style={{ color: "blue", style: "flex" }}
        >
          Consolidated Paid (Accrued Rights & Pension Increase)
        </h1>
      </Container>

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
            {/* <tr
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Consolidated Paid (Accrued Rights & Pension Increase)
            </tr> */}

            <tr>
              <th>S/N</th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Report1;
