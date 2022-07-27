import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Details2004 from './Details2004';
import Details2007 from './Details2007';
import Details2010 from './Details2010';
import Details2013 from './Details2013';
import Details2016 from './Details2016';
import Details2019 from './Details2019';
// import Confirm from './PfaModule/Confirm';
// import Success from './PfaModule/Success';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
        return (
          <Details2004
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 4:
        return (
          <Details2007
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 5:
        return (
          <Details2010
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 6:
        return (
          <Details2013
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 7:
        return (
          <Details2016
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 8:
        return (
          <Details2019
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      // case 9:
      //   return (
      //     <Confirm
      //       nextStep={this.nextStep}
      //       prevStep={this.prevStep}
      //       values={values}
      //     />
      //   );
      // case 10:
      //   return <Success />;
      // default:
      //   (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;