import React, { useState } from 'react';
import MaintainPencomUsersForm from './MaintainPencomUsersForm';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PageHeader from '../components/PageHeader';
import {
  InputAdornment,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Tooltip,
} from '@material-ui/core';
import PencomUsersTable from '../components/controls/PencomUsersTable';
import * as PencomUserService from '../services/pencomUsersService';
import Controls from '../components/controls/Controls';
import { Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../components/Popup';

import CloseIcon from '@material-ui/icons/Close';
import { ModeEditOutlineOutlined } from '@mui/icons-material';
import Notification from '../components/controls/Notification';
import ConfirmDialog from '../components/ConfirmDialog';
//import * as pencomUsersService from '..services/pencomUsersService';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  myPageHeaderTest: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    width: '98%',
  },
  searchInput: {
    width: '75%',
    // heigt: '75%',
  },
  newButton: {
    position: 'absolute',
    right: '10px',
  },
}));
const headCells = [
  { id: 'staffId', label: 'Staff ID' },
  { id: 'userId', label: 'User ID' },
  { id: 'firstName', label: 'First Name' },
  { id: 'middleName', label: 'Middle Namae' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'department', label: 'Department' },
  { id: 'effectiveDate', label: 'Effective Date' },
  { id: 'action', label: 'Actions', disableSorting: true },
];
export default function MaintainPencomUsers() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(PencomUserService.getAllPencomUsers);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    PencomUsersTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == '') return items;
        else
          return items.filter(
            (x) => x.staffId.toLowerCase().includes(target.value) //SET THE COLUNM YOU WANT SEARCH WITH
          );
      },
    });
  };

  const addOrEdit = (pencomusers, resetForm) => {
    if (pencomusers.id == 0) {
      PencomUserService.insertPencomUser(pencomusers);
      resetForm();
      setOpenPopup(false);
      setRecords(PencomUserService.getAllPencomUsers());
      setNotify({
        isOpen: true,
        message: 'PenCom Usser Succesfully Added!',
        type: 'success',
      });
    } else {
      PencomUserService.updatePencomUser(pencomusers);
      resetForm();
      setRecordForEdit(null);
      setOpenPopup(false);
      setRecords(PencomUserService.getAllPencomUsers());
      setNotify({
        isOpen: true,
        message: 'PenCom Usser Updated Succesfully!',
        type: 'success',
      });
    }
  };
  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };
  const onDelete = (id) => {
    // if (window.confirm('Are you sure you want to delete this User')) { };
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    PencomUserService.deletePencomUser(id);
    setRecords(PencomUserService.getAllPencomUsers());
    setNotify({
      isOpen: true,
      message: 'PenCom User Succesfully Deleted!',
      type: 'error',
    });
  };

  return (
    <>
      <Paper className={classes.myPageHeaderTest}>
        <PageHeader
          title="PenCom Users"
          subtitle="Create New User"
          icon={<PeopleOutlineIcon fontSize="large" />}
        />
      </Paper>
      {/* <Paper className={classes.pageContent}>
        <MaintainPencomUsersForm />
      </Paper> */}
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search PenCom Users"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text="Add User"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.staffId}</TableCell>
                <TableCell>{item.userId}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.middleName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.effectiveDate}</TableCell>
                {/* <TableCell>{item.password}</TableCell> */}
                <TableCell>
                  <Controls.ActionButton color="primary">
                    <ModeEditOutlineOutlined
                      fontSize="small"
                      onClick={() => {
                        openInPopup(item);
                      }}
                    />
                  </Controls.ActionButton>

                  <Controls.ActionButton
                    color="secondary"
                    onClick={() => {
                      // onDelete(item.id);
                      setConfirmDialog({
                        isOpen: true,
                        title: 'Are you sure you want to Delete this User?',
                        subTitle: "you can't undo this operation",
                        onConfirm: () => {
                          onDelete(item.id);
                        },
                      });
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="PenCom User Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <MaintainPencomUsersForm
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
        />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}
