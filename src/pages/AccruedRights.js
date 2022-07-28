import { useState } from "react";
import React from "react";
import {
  
  Navbar,
  
  Form,
  InputGroup,
  
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button,Table,    MenuItem, InputLabel, NativeSelect,CardActions,Typography } from '@material-ui/core';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';

import TextField from '@mui/material/TextField';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from "@mui/material/Grid";


import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Stack from '@mui/material/Stack';







import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';






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


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, dob, dofa, gender, SalStruct, GL, Step, OrgSector, status, BENEFIT) {
  return { name, calories, fat, carbs, protein, dob,dofa, gender, SalStruct, GL, Step, OrgSector, status, BENEFIT};
}
const rows = [
  createData('', 1, 'PEN10645635353', 24, 4.0, '20-10-2022', '20-10-1998', 'MALE', 'HATISS', 9, 2, 'NIRA', 'Completed', 100.000 ),
  createData('', 2, 'PEN10645635353', 37, 4.3, '20-10-2022', '20-10-1998', 'MALE', 'HATISS', 9, 2, 'NIRA', 'Completed', 100.000 ),
  createData('', 3, 'PEN10645635353', 24, 6.0, '20-10-2022', '20-10-1998', 'MALE', 'HATISS', 9, 2, 'NIRA', 'Completed', 100.000),
  createData('', 4, 'PEN10645635353', 67, 4.3, '20-10-2022', '20-10-1998', 'MALE', 'HATISS', 9, 2, 'NIRA', 'Completed', 100.000),
  
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export const AccruedRights = () => {
  return (
    <div className="accrued-rights">
      <h1>Reports and reporting</h1>
    </div>
  );
};



export const Retirees = () => {


  const [value, setValue] = React.useState('');

  const handleChangeValue = (event) => {
    setValue(event.target.value);
};
  
  const [state, setSate] = React.useState('');

  const handleValueChange = (event) => {
    setSate(event.target.value);
};
  

const [alignment, setAlignment] = useState("");
  return (
    
    <div className="retirees">
      <Container>
        <h1 className="shadow-sm-text-succes mt -5 p-3 text-center rounded">
          Accrued Right Computation - Retirees
        </h1>
      </Container>

     
      
   
        
   
      <container style={{
            display: "center",
            justifyContent: "center",
            alignItems: "center",
      }} >
        
      <Box sx={{ flexGrow: 3 }}>
      <Grid container spacing={2} columns={40}>
        <Grid item xs={8}>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <NativeSelect>
        <option value={10}> Single Computation </option>
        <option value = {10}> Bulk Computation </option>
      </NativeSelect>
    </Box>
        </Grid>
        <Grid item xs={1}>
        <FormControl sx={{ m: 1, width: 100, mt: 3 }}>
      <InputLabel> <ImportExportIcon /> Export</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="value"
          onChange={handleChangeValue}
        >
          <MenuItem value={10}>PDF</MenuItem>
          <MenuItem value={20}> EXCEL</MenuItem>
          
        </Select>
      </FormControl>
        </Grid>
      </Grid>
        </Box>
        
        </container>

      

      
      

      

      
      <container style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
      }}>
   

              
      </container>
      
      <container style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
      }} >
        
        <CardActions className='cardactions'>
    <TextField id="standard-basic" label="RSA PIN" variant="standard" />
    <Button variant='contained' color='success'>Search</Button>
  </CardActions>

    
        
      </container>
      

      
        

    
      
   

      <container style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
      }} >
        
        
        <Typography><b>EDOR:</b> </Typography>

      <Box sx={{ flexGrow: 3 }}>
      <Grid container spacing={2} columns={40}>
        <Grid item xs={8}>
        <TextField
        id="date"
        label="Start Date"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
          />
        </Grid>
        <Grid item xs={8}>
        <TextField
        id="date"
        label="End Date"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        />
            </Grid>
            
            <Grid item xs={8}>
        
            <Button variant='contained' color='success'>Search</Button>


        </Grid>
      </Grid>
        </Box>
        
        </container>
    
      

      <container>

      

      </container>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="customized table">
          
        <colgroup>
      <col style={{width:'1%'}}/>
      <col style={{width:'2%'}}/>
            <col style={{ width: '3%' }} />
            <col style={{width:'4%'}}/>
      <col style={{width:'20%'}}/>
            <col style={{ width: '20%' }} />
            <col style={{width:'1%'}}/>
      <col style={{width:'10%'}}/>
            <col style={{ width: '20%' }} />
            <col style={{width:'20%'}}/>
      <col style={{width:'20%'}}/>
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            
   </colgroup>
        <TableHead>
            <TableRow>
            <StyledTableCell> S/N</StyledTableCell>
            <StyledTableCell align="right">RSA PIN</StyledTableCell>
            <StyledTableCell align="right">Name&nbsp;</StyledTableCell>
            <StyledTableCell align="right">EDOR/DOD&nbsp;</StyledTableCell>
              <StyledTableCell align="right">DOB&nbsp;</StyledTableCell>
              <StyledTableCell align="right">DOFA&nbsp;</StyledTableCell>
              <StyledTableCell align="right">GENDER&nbsp;</StyledTableCell>
              <StyledTableCell align="right">2004 S/S &nbsp;</StyledTableCell>
              <StyledTableCell align="right">2004 GL &nbsp;</StyledTableCell>
              <StyledTableCell align="right">2004 STEP &nbsp;</StyledTableCell>
              <StyledTableCell align="right">Organisation Sector&nbsp;</StyledTableCell>
              <StyledTableCell align="right">STATUS &nbsp;</StyledTableCell>
              <StyledTableCell align="right">BENEFIT &nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.calories}
                
              </StyledTableCell>
             
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.dob}</StyledTableCell>
              <StyledTableCell align="right">{row.dofa}</StyledTableCell>
              <StyledTableCell align="right">{row.gender}</StyledTableCell>
              <StyledTableCell align="right">{row.SalStruct}</StyledTableCell>
              <StyledTableCell align="right">{row.GL}</StyledTableCell>
              <StyledTableCell align="right">{row.Step}</StyledTableCell>
              <StyledTableCell align="right">{row.OrgSector}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.BENEFIT}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  

      <Navbar bg="" expand="lg"></Navbar>
      
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "20%",
        }}
      >
        <Button color="primary" variant="contained"> COMPUTE </Button>
        
  
        
       
      </Container>
    </div>
  );
};

export const Deceased = () => {
  const [comPutationState, setComputationState] = useState(
    label.bComputationLabel
  );
  
  return (
    <div>

      
      <Container >
        <h1
          className="shadow-sm-text-succes mt -5 p-3 text-center rounded"
          
        >
          {label.headingOne}
        </h1>
      
      </Container>
      

      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        
        <h2 >{comPutationState}</h2>
           
            
     
      </Container>

        <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        
             
            <ImportExportIcon /> Export
            
     
      </Container>

      <Container >
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "35%",
            
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
              
                <InputGroup  className="mb-1" style={{ width: "50%" }}>
                  <InputGroup.Text>RSA PIN:</InputGroup.Text> <FormControl aria-label="" style={{ width: "45%" }} />
                  
                  <Button color="primary" variant="contained"> LOAD</Button>
                
                </InputGroup>
              
            ) : null}
          </Col>
        </Row>
      </Container>

      <conntainer
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "right",
        }}
      >
        
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
          <Button color="primary" variant="contained"> Search </Button>
        </InputGroup>
      </Container>

     

      <Navbar bg="" expand="lg"></Navbar>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
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
              <th>ACCRUED BENEFIT</th>
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
              <td>COMPUTED</td>
              <td>100.00</td>
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
              <td>COMPUTED</td>
              <td>100.00</td>
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
              <td>COMPUTED</td>
              <td>100.00</td>
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
              <td>COMPUTED</td>
              <td>100.00</td>
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
              <td>COMPUTED</td>
              <td>100.00</td>
            </tr>

            <tr>
              <td>6</td>
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
              <td>COMPUTED</td>
              <td>100.00</td>

            </tr>
          </tbody>
        </Table>
      </Container>

      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "20%",
        }}
      >
        <Button color="primary" variant="contained"> COMPUTE </Button>
        
  
        
       
      </Container>

  
     
    </div>
  );
};


