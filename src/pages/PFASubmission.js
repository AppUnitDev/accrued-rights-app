import {
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Table from '@mui/material/Table';
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import useTables from '../components/useTables';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import * as PencomUserService from '../services/pencomUsersService';
import Controls from '../components/controls/Controls';
import PreviewIcon from '@mui/icons-material/Preview';
import Popup from '../components/Popup';
import MaintainPencomUsers from '../pages/MaintainPencomUsers';
import UserForm from '../components/UserForm';

const useStyles = makeStyles((theme) => ({
  myPageHeaderTest: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    //width: '98%',
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
const headCells = [{ id: '' }];
export default function PFASubmission() {
  const [openPopup, setOpenPopup] = useState(false);
  const classes = useStyles();
  // const [records, setRecords] = useState(PencomUserService.getAllPencomUsers);
  const { TblContainer } = useTables();
  return (
    <>
      <Paper className={classes.myPageHeaderTest}>
        <PageHeader
          title="PFAs Submission"
          subtitle="Approve or Reject Submission"
          icon={<PeopleOutlineIcon fontSize="large" />}
        />
      </Paper>

      <Paper className={classes.pageContent}>
        <TblContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>S/No</TableCell>
                <TableCell>PIN</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>PFA</TableCell>
                <TableCell>MDA</TableCell>
                <TableCell>Request Date</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <TableRow>
                <TableCell>1</TableCell>
                <TableCell>PEN110039903909</TableCell>
                <TableCell>Tunde</TableCell>
                <TableCell>Oluwole</TableCell>
                <TableCell>Stainbic Ibtc</TableCell>
                <TableCell>Ministry of Interior</TableCell>
                <TableCell>21-Apr-2022</TableCell> */}
              {/* <TableCell>Alfred Akpan</TableCell> */}
              {/* <TableCell>
                  <Controls.ActionButton color="primary">
                    <PreviewIcon */}
              {/* fontSize="small" */}
              {/* onClick={() => { */}
              {/* openInPopup(item);
                    }}
                    > */}
              {/* </Controls.ActionButton>
                </TableCell>
              </TableRow> */}
              {/* <TableRow>
                <TableCell>2</TableCell>
                <TableCell>PEN100293849845</TableCell>
                <TableCell>Majek</TableCell>
                <TableCell>Fashek</TableCell>
                <TableCell>Premium Pension</TableCell>
                <TableCell>Ministry of Tourism</TableCell>
                <TableCell>01-Mar-2022</TableCell> */}
              {/* <TableCell>Charles Soludo</TableCell> */}
              {/* <TableCell>
                  <Controls.ActionButton color="primary"> */}
              {/* <PreviewIcon */}
              {/* fontSize="small"
                     onClick={() => { */}
              {/* openInPopup(item);
                     }}
                    > */}
              {/* </Controls.ActionButton> */}
              {/* </TableCell> */}
              {/* </TableRow> */}
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>PEN100298749860</TableCell>
                <TableCell>Collins</TableCell>
                <TableCell>Paul</TableCell>
                <TableCell>Premium Pension</TableCell>
                <TableCell>Ministry of Tourism</TableCell>
                <TableCell>01-Mar-2022</TableCell>

                {/* <TableCell>Alfed Akpan</TableCell> */}
                <TableCell>
                  <Controls.ActionButton color="primary">
                    <PreviewIcon
                      fontSize="small"
                      onClick={() => setOpenPopup(true)}
                    />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TblContainer>
      </Paper>

      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Deceaced Details"
      >
        <UserForm />
      </Popup>
    </>
  );
}
