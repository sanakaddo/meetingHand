import React from 'react'
import PropTypes from 'prop-types';
import BuildIcon from '@material-ui/icons/Build';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import DisplayUserDetails from './DisplayUserDetails';
import RaisedButton from 'material-ui/RaisedButton';
import Modal from '@material-ui/core/Modal';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export class FormSummary extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
    
  }
   totalAmountItem = (item) => {
    let total = (item.RegisterationType.event_registration_type_price) ? item.RegisterationType.event_registration_type_price: 0 ;
    if(!(item.eventWorkshops === undefined || item.eventWorkshops.length === 0)){
        item.eventWorkshops.forEach(function (item) {
            total += item.event_workshop_price;
        });
    }
    return total;
  }
   updateTotal = () => {
    let total = this.totalAmountItem(this.props.values);
    if(!(this.props.users === undefined || this.props.users.length === 0)){
        this.props.users.map((item) => {
            console.log(this.totalAmountItem(item));
            total += this.totalAmountItem(item);
        });
    }
    return total;
  }
 

  state= {
    open: false,
  };
 
  

    render() {
        const handleOpen = () => {
            this.setState({ open : true});
          };
        
          const handleClose = () => {
            this.setState({ open : false});
          };
          const body = (
            <div  className={styles.paper}>
              <h2 id="simple-modal-title">Terms and Conditions</h2>
              <p id="simple-modal-description">
        
                    Welcome to Website Name!
        
                    These terms and conditions outline the rules and regulations for the use of Company Name's Website, located at Website.com.
        
                    By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.
        
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. "
              </p>
              <RaisedButton
                    label= "Add Participant"
                    primary={true}
                    style={styles.button}
                    onClick={this.props.addUser}
         />
            </div>
           
          );
        const { classes, values, removeWorkshopChild} = this.props;
        return (
            <div className={classes.root}>
                <Box>
                     <h1><BuildIcon fontSize="large"/> Summary  </h1>
                    {this.props.users.map( (item, i) => (
                        <DisplayUserDetails
                        key={i}
                        values={item}
                        removeWorkshopChild = {removeWorkshopChild}
                        current={false}
                        />
                    ))} 
                    <DisplayUserDetails
                        values={values}
                        removeWorkshopChild = {removeWorkshopChild}
                        current={false}
                        />
                     
                </Box>
                     <div>
                        <button type="button" onClick={handleOpen}>
                            Add Participant
                        </button>
                        <Modal
                            open={this.state.open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            {body}
                            
                        </Modal>
                    </div>
                    <p>{`$${this.updateTotal()}`}</p>
                <br/>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Choose Your Payment Plan</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" >
                    <FormControlLabel value="Pay Now" control={<Radio />} label="Pay Now" />
                    <FormControlLabel value="Pay Later" control={<Radio />} label="Pay Later" />
                    <br/>
                <RaisedButton
                        label= "Prev"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                <RaisedButton
                        label= "Complete"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <br/>
                    
                   
      </RadioGroup>
    </FormControl>
                    
            </div>
        );
    }
}



FormSummary.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  const styles = {
      root: {
        width: '100%',
        maxWidth: 600,
        backgroundColor: 'white',
        margin: 'auto',
        paddingTop: 30,
        color: '#1976d2',
      },
      button:{
       margin: 20,
      },
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
      },
    };
export default withStyles(styles)(FormSummary);
