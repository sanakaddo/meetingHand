import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AddBoxIcon from '@material-ui/icons/AddBox';



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
  },
  pos: {
    marginBottom: 12,
  },
  action:{
      float: "right"
  }
});



export default function WorkshopItem({workshopDetails, addWorkshopId}) {
  //Code to implement counter
 // const [ count, setCount] = React.useState(0);
  const classes = useStyles();

  // function addItem() {
  //   setCount(count => count + 1);
  // }
  function addWorkshopChild(){
    addWorkshopId(workshopDetails);
    //addItem();
  }


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
            {workshopDetails.event_workshop_title}
        </Typography>
        <Divider light />
      </CardContent>
      <CardActions className={classes.action}>
      {/* <Typography className={classes.price} color="textSecondary" gutterBottom>
          {`(x${count})`}
        </Typography> */}
      <Typography className={classes.price} color="textSecondary" gutterBottom>
            {`$${workshopDetails.event_workshop_price}`}
        </Typography>
        <Button onClick={addWorkshopChild}  size="small">
            <AddBoxIcon/>
        </Button>
      </CardActions>
    </Card>
  );
}
