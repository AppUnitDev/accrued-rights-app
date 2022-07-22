import React, { Component } from 'react';
import BasicEmploymentDetails from './BasicEmploymentDetails';
import DeceasedBioData from './DeceasedBioData';
import EmploymentDetails2004 from './EmploymentDetails2004';
import EmploymentDetails2007 from './EmploymentDetails2007';
import EmploymentDetails2010 from './EmploymentDetails2010';
import EmploymentDetails2013 from './EmploymentDetails2013';
import EmploymentDetails2016 from './EmploymentDetails2016';
import EmploymentDetails2019 from './EmploymentDetails2019';
import EmploymentDetailsYOD from './EmploymentDetailsYOD';
import DeceasedDocumentsUpload from './DeceasedDocumentsUpload';
import Confirm from './Confirm';
import Succses from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: 'Collins',
    lastName: 'Paul',
    email: '',
    otherNames: 'Charles',
    occupation: '',
    city: '',
    bio: '',
    gender: 'Male',
    dob: '20-08-1967',
    employerName: 'Ministry of Tourism',
  };

  // Proceed to to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      occupation,
      city,
      employerName,
      bio,
      gender,
      dob,
      otherNames,
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      occupation,
      city,
      gender,
      employerName,
      bio,
      dob,
      otherNames,
    };
    switch (step) {
      case 1:
        return (
          <DeceasedBioData
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <BasicEmploymentDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <EmploymentDetails2004
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <EmploymentDetails2007
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <EmploymentDetails2010
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <EmploymentDetails2013
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return (
          <EmploymentDetails2016
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 8:
        return (
          <EmploymentDetails2019
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 9:
        return (
          <EmploymentDetailsYOD
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 10:
        return (
          <DeceasedDocumentsUpload
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      // case 3: EmploymentDetails2007
      //   return (
      //     <Confirm
      //       nextStep={this.nextStep}
      //       prevStep={this.prevStep}
      //       values={values}
      //     />
      //   );
      // case 4:
      //   return <Succses />;
    }
  }
}

export default UserForm;
