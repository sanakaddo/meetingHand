import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SelectedWorkshopDisplay from './SelectedWorkshopDisplay'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  price: {
    fontSize: 14,
    float: "left"
  },
  pos: {
    marginBottom: 12,
  },
  action:{
      float: "right"
  },
  name:{
      float: "left",
      fontSize: 14,
      fontWeight: "bold"

  }
});



export default function DisplayUserDetails({values, removeWorkshopChild, current}) {
  const classes = useStyles();
  const removeWorkshop = (item)=>{
    removeWorkshopChild(item, values);
 }
  
 const updateTotal = () => {
  let total = (values.RegisterationType.event_registration_type_price) ? values.RegisterationType.event_registration_type_price: 0 ;
  if(!(values.eventWorkshops === undefined || values.eventWorkshops.length === 0)){
      values.eventWorkshops.forEach(function (item) {
          total += item.event_workshop_price;
      });
  }
  return total;
}

  return [
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.price}>
            Registration Details for 
        </Typography>
        <Typography className={classes.action} color="textSecondary">
            Amount
        </Typography>
        <br/>
        <Typography component="h2" className={classes.name}>
            {values.firstName} {values.lastName}
        </Typography>
        <Typography className={classes.action}>
            {`$${updateTotal()}`}
        </Typography>
        <br/>
        <Divider/>
        <Typography className={classes.price}>
            Registration Information
        </Typography>
        <br/>
        <Typography component="h2" className={classes.name}>
            {values.RegisterationType.event_registration_type_title} 
        </Typography>
      </CardContent>
      </Card>,
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography className={classes.heading}>Additional Services</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <List>
                { values.eventWorkshops ? values.eventWorkshops.map( (item,i) =>     
                <ListItem key={i}>
                  <SelectedWorkshopDisplay
                    current={current}
                    item={item}
                    removeWorkshopChild={removeWorkshop}
                  />
                </ListItem>
                ) :
                <ListItem>  
                    <ListItemText
                    primary="No Services Selected"
                    />
                </ListItem>
                }
            </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
  ];
}
