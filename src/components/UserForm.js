import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormAdditionalServices from './FormAdditionalServices';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import data from './data/registration-form-setup-information.json'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/Event';
import FormSummary from './FormSummary'


export class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state.mainData = data;
        this.addWorkShop = this.addWorkShop.bind(this)
      }

    state = {
        step: 1, 
        RegisterationType:{},
        firstName:'',
        lastName:'',
        email:'',
        eventWorkshops:[],
        totalAmount: 0,
        users: [],
        mainData: {},
    }

    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });

    };
      //Proceed to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

   
    
    addWorkShop = (workshopObj) => {
       // this.updateTotal();
        this.setState({ 
            eventWorkshops: this.state.eventWorkshops.concat(workshopObj),
        });
     };
    setRegistrationType = (obj) => {
        this.setState({RegisterationType: obj});

    };
    removeWorkshopChild = (workshopObj) => {
        this.updateTotal();
        var array = [...this.state.eventWorkshops];
        const index = array.findIndex(item => item.event_workshop_id === workshopObj.event_workshop_id);
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({eventWorkshops: array});
        }
    };
    addUser = () => {
        let newUser = {
            RegisterationType: this.state.RegisterationType ,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            eventWorkshops:this.state.eventWorkshops,
            totalAmount:this.state.totalAmount,
        }
        this.setState({ 
            step: 1, 
            RegisterationType:{},
            firstName:'',
            lastName:'',
            email:'',
            eventWorkshops:[],
            totalAmount: 0,
            users: this.state.users.concat(newUser),
        });
    };
   
    
    renderSwitch() {
        const {step, users} = this.state;
        const {mainData} = this.state;
        const { RegisterationType, firstName, lastName, email, eventWorkshops, totalAmount} = this.state;
        const values = {RegisterationType, firstName, lastName, email, eventWorkshops, totalAmount}
        switch(step){
            case 1: 
                return(
                    <FormUserDetails
                        nextStep= {this.nextStep}
                        handleChange= {this.handleChange}
                        values= {values}
                        mainData= {mainData}
                        setRegistrationType={this.setRegistrationType}
                    />
                )
            case 2: 
                return <FormAdditionalServices
                nextStep= {this.nextStep}
                prevStep= {this.prevStep}
                values= {values}
                addWorkShop={this.addWorkShop}
                removeWorkshopChild= {this.removeWorkshopChild}
                workshops={mainData.workshops}
                />
            case 3: 
            return <FormSummary
                nextStep= {this.nextStep}
                prevStep= {this.prevStep}
                values= {values}
                addWorkShop={this.addWorkShop}
                removeWorkshopChild= {this.removeWorkshopChild}
                workshops={mainData.workshops}
                addUser={this.addUser}
                users={users}
            />
            case 4:
                return <h1>Success</h1>
                //Save data to JSON file...
            default:
                return <h1>Error</h1>
        }
      }
  
    render() {
        const {mainData} = this.state;
        return(
            <MuiThemeProvider>
            <div>
            <AppBar title={mainData.event_long_name} >
            <Toolbar>
            <div>
                <Typography className={styles.sub} >
                        {`${mainData.venue.event_venue_title} - ${mainData.venue.event_venue_city},${mainData.venue.event_venue_country} `}
                </Typography> 
                <Typography className={styles.sub}>
                        {`${new Date(mainData.event_start_date).toLocaleDateString()}- ${new Date(mainData.event_end_date).toLocaleDateString()} `}
                </Typography>
            </div>
          <EventIcon fontSize="large"  className={styles.icon}/>
            </Toolbar>
            </AppBar>
            {this.renderSwitch()}
            </div>
            </MuiThemeProvider>
        )
    }
}
const styles = {
      sub: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
        color: 'white',
        paddingTop: '20px',
      },
      icon: {
        color: "white",
        padding:"20px" 
      }
  };

export default UserForm
