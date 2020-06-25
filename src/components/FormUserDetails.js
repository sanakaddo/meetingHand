import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormRegistrationTypes from './FormRegistrationTypes';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        
    }
    updateTypeTitle = (obj) =>{ 
        this.props.setRegistrationType(obj);

    }
    render() {
        const { values, handleChange, mainData } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <FormRegistrationTypes
                        mainData = {mainData}
                        updateTypeTitle = {this.updateTypeTitle}
                    />
                    <TextField
                        required
                        label="Required"
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                        required
                        label="Required"
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                        required
                        label="Required"
                        hintText="Enter Your E-mail Address"
                        floatingLabelText="E-mail "
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                        label= "Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin:15
    }
}

export default FormUserDetails
