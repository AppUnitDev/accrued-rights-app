import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { useForm, Form } from '../components/useForm';
import React, { useEffect } from 'react';
import Controls from '../components/controls/Controls';
import * as pencomUsersService from '../services/pencomUsersService';

// const userStatusItems = [
//   { id: 'active', title: 'Active' },
//   { id: 'inActive', title: 'Inactive' },
// ];

const initialFValues = {
  id: 0,
  userId: '',
  staffId: '',
  role: '',
  firstName: '',
  lastName: '',
  middleName: '',
  gender: 'male',
  department: '',
  organisation: '',
  email: '',
  effectiveDate: new Date(),
  userStatus: 'Inactive',
  createdBy: '',
  dateCreated: new Date(),
  password: '',
  isPermanent: false,
};

export default function MaintainPencomUsersForm(props) {
  const { addOrEdit, recordForEdit } = props;

  //Validations for Components in PenCom Model
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('userId' in fieldValues)
      temp.userId = values.userId ? '' : 'User ID is required.';
    if ('staffId' in fieldValues)
      temp.staffId = values.staffId ? '' : 'Staff ID is required.';
    //  temp.role = values.role ? '' : 'Role is required.';
    if ('firstName' in fieldValues)
      temp.firstName = values.firstName ? '' : 'First Name is required.';
    if ('lastName' in fieldValues)
      temp.lastName = values.lastName ? '' : 'Last Name is required.';
    if ('middleName' in fieldValues)
      temp.middleName = values.middleName ? '' : 'Middle Name is required.';
    // if ('department' in fieldValues)
    //   temp.department = values.department ? '' : 'Department is required.';

    // if ('password' in fieldValues)
    //   temp.password = values.password ? '' : 'Password is required.';
    // if('mobile' in fieldValues)
    // temp.mobile= values.mobile.length >9? "" : "Minium 10 numbers required"
    //temp.email = values.email ? '' : 'Email Department is required.';
    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(values.email) ? '' : 'Email is Invalid';
    setErrors({
      ...temp,
    });

    if ((fieldValues = values))
      return Object.values(temp).every((x) => x == '');
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const useStyles = makeStyles({
    textField: {
      width: '300',
    },
  });
  // const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            size="small"
            style={{ width: '50%' }}
            variant="outlined"
            name="userId"
            label="User Id"
            value={values.userId}
            onChange={handleInputChange}
          />
          <div>
            <TextField
              size="small"
              variant="outlined"
              style={{ width: '20%' }}
              label="Staff Id"
              name="staffId"
              value={values.staffId}
              onChange={handleInputChange}
            />
          </div>

          <Controls.Input
            name="firstName"
            label="First Name"
            value={values.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
          />
          {/* <Controls.Input
            label="Role"
            name="role"
            value={values.role}
            onChange={handleInputChange}
          /> */}
          {/* <Controls.Input
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          /> */}

          <Controls.Input
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
          />

          <Controls.Input
            label="Middle Name"
            name="middleName"
            value={values.middleName}
            onChange={handleInputChange}
            error={errors.middleName}
          />
          <Controls.Select
            label="Department"
            name="department"
            value={values.department}
            onChange={handleInputChange}
            options={pencomUsersService.getDepartmentCollection()} // We will be using an API to get the Data from DB
            //error={errors.}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Select
            label="Role"
            name="role"
            value={values.role}
            onChange={handleInputChange}
            options={pencomUsersService.getUserRoleCollection()} // We will be using an API to get the Data from DB
          />

          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          {/* <Controls.DatePicker
            label="Effective Date"
            name="effectiveDate"
            value={values.effectiveDate}
            onChange={handleInputChange}
          /> */}

          <Controls.DatePicker
            label="Date Created"
            name="dateCreated"
            value={values.dateCreated}
            onChange={handleInputChange}
          />
          {/* <Controls.Input
            label="Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            error={errors.password}
          /> */}

          <FormControl>
            <FormLabel>User Status</FormLabel>
            <RadioGroup
              row
              name="userStatus"
              value={values.userStatus}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="active"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="inactive"
                control={<Radio />}
                label="Inactive"
              />
            </RadioGroup>
          </FormControl>

          <div>
            <Controls.Button
              variant="contained"
              color="primary"
              size="medium"
              text="Submit"
              type="submit"
            />
            <Controls.Button
              color="secondary"
              text="Reset"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
