import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width:'100%'
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



export default function SelectedWorkshopDisplay({item, removeWorkshopChild, current}) {
  const [ count, setCount] = React.useState(0);
  const classes = useStyles();

  function addItem() {
    setCount(count => count + 1);
  }
  function removeItem() {
    setCount(count => count - 1);
  }
  function removeWorkshop(){
    removeWorkshopChild(item);
    removeItem();
  }


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography >
            {item.event_workshop_title}
        </Typography>
        <Divider light />
      </CardContent>
      <CardActions className={classes.action}>
      <Typography className={classes.price} color="textSecondary" gutterBottom>
            {`$${item.event_workshop_price}`}
        </Typography>
        {current ?
          <Button onClick={removeWorkshop}  size="small">
          <DeleteIcon/>
          </Button>
         : <br/>}
       
      </CardActions>
    </Card>
  );
}
