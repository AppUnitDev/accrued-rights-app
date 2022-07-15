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
//import PreviewIcon from '@mui/icons-material/Preview';
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
export default function DeceasedDocumentsUpload() {
  const [openPopup, setOpenPopup] = useState(false);
  const classes = useStyles();
  // const [records, setRecords] = useState(PencomUserService.getAllPencomUsers);
  const { TblContainer } = useTables();
  return (
    <>
      <Paper className={classes.myPageHeaderTest}>
        {/* <PageHeader
          title="View Uploaded "
          subtitle="Approve or Reject Submission"
          icon={<PeopleOutlineIcon fontSize="large" />}
        /> */}
      </Paper>

      <Paper className={classes.pageContent}>
        <TblContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>S/No</TableCell>
                <TableCell>Types of Documents</TableCell>
                <TableCell>Upload Status</TableCell>
                <TableCell>View Document</TableCell>
                {/* <TableCell>Last Name</TableCell>
                <TableCell>PFA</TableCell>
                <TableCell>MDA</TableCell>
                <TableCell>Request Date</TableCell>
                <TableCell>View</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>
                  Death/Missing Person Notification Form from PFA
                </TableCell>
                <TableCell>Mandatory</TableCell>
                <TableCell>
                  <Controls.ActionButton color="primary">
                    View
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Letter of Introduction from MDA</TableCell>
                <TableCell>Mandatory</TableCell>
                <TableCell>
                  <Controls.ActionButton color="primary">
                    {/* <PreviewIcon 
               fontSize="small"
                     onClick={() => { 
               openInPopup(item);
                     }}
                    >  */}
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Copy of certificate of Death</TableCell>
                <TableCell>Mandatory</TableCell>
                <TableCell>
                  <Controls.ActionButton color="primary">
                    {/* <PreviewIcon
                      fontSize="small"
                      onClick={() => setOpenPopup(true)}
                    /> */}
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>
                  Copy of Birth Certificate/ Age Declaration
                </TableCell>
                <TableCell>Mandatory</TableCell>
                <TableCell>
                  <Controls.ActionButton color="primary">
                    {/* <PreviewIcon
                      fontSize="small"
                      onClick={() => setOpenPopup(true)}
                    /> */}
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TblContainer>
      </Paper>

      {/* <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Deceaced Details"
      >
        <UserForm />
      </Popup> */}
    </>
  );
}
