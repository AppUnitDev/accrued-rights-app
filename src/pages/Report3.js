import * as React from "react";
import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

// import *  as XSLX  from "xslx";

export default function Report3() {
  return (
    <div>
      <IconButton aria-label="excel">
        <BorderAllIcon />
      </IconButton>
      <IconButton aria-label="excel">
        <PictureAsPdfIcon />
      </IconButton>
      <TableContainer component={Paper}>
        <Table 
          sx={{ minWidth: 400, backgroundColor: "lightgrey" }}
          aria-label="caption table"
        >
          <caption>Accrued Rights Payment Per PFA Table</caption>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "grey",
                // borderTop: "2px solid black",
                // borderBottom: "2px solid black",
                "& th": {
                  fontSize: "1rem",
                  color: "black",
                },
              }}
            >
              <TableCell align="center" colSpan={6}>
                ACCRUED RIGHTS PAYMENT PER PFA
              </TableCell>
            </TableRow>

            <TableRow
              sx={{
                backgroundColor: "grey",
                // borderTop: "2px solid black",
                // borderBottom: "2px solid black",
                "& th": {
                  fontSize: "1rem",
                  color: "black",
                },
              }}
            >
              <TableCell>EDOR/DOD:</TableCell>
              <TableCell></TableCell>
              <TableCell>Start Date:</TableCell>
              <TableCell></TableCell>
              <TableCell>End Date:</TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow
              sx={{
                backgroundColor: "grey",
                // borderTop: "2px solid black",
                // borderBottom: "2px solid black",
                "& th": {
                  fontSize: "1rem",
                  color: "black",
                },
              }}
            >
              <TableCell>Submission Date:</TableCell>
              <TableCell></TableCell>
              <TableCell>Start Date:</TableCell>
              <TableCell></TableCell>
              <TableCell>End Date:</TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow
              sx={{
                backgroundColor: "grey",
                // borderTop: "2px solid black",
                // borderBottom: "2px solid black",
                "& th": {
                  fontSize: "1rem",
                  color: "black",
                },
              }}
            >
              <TableCell>Batch Name:</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow
              sx={{
                backgroundColor: "grey",
                // borderTop: "2px solid black",
                // borderBottom: "2px solid black",
                "& th": {
                  fontSize: "1rem",
                  color: "black",
                },
              }}
            >
              <TableCell>PFA Name:</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow
              sx={{
                backgroundColor: "grey",
                // borderTop: "2px solid black",
                // borderBottom: "2px solid black",
                "& th": {
                  fontSize: "1rem",
                  color: "black",
                },
              }}
            >
              <TableCell>S/NO</TableCell>
              <TableCell>FULLNAME</TableCell>
              <TableCell>RSA PIN</TableCell>
              <TableCell>PFA NAME</TableCell>
              <TableCell>BATCH NAME</TableCell>
              <TableCell>ACCRUED RIGHTS</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>2</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>3</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>4</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>5</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            {/* <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
