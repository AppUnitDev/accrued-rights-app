import React from "react";
import { Button } from "react-bootstrap";
import "../App.css";

function Report1() {
  return (
    <div
      className="reports1">
      <h1>CRUD APPLICATION</h1>

      <div className="form">
        <label>Movie Name</label>
        <input type="text" name="movieName" />
        <label>Review</label>
        <input type="text" name="movieName" />

        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default Report1;
