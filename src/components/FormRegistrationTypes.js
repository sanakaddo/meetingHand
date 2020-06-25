import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';





class FormRegistrationTypes extends React.Component {
  state = {
    selectedIndex: 1,
    data: this.data,
  };

  handleListItemClick = ( item) => {
    this.props.updateTypeTitle(item);
    this.setState({ selectedIndex: item.event_registration_type_id, })
  };

  render() {
    const { classes, mainData } = this.props;

    return (
      <div className={classes.root}>
        <Box>
          <h1><AccountCircleIcon fontSize="large"/> Registration Types and Fees  </h1>
        </Box>
        <List component="nav">
            {mainData.registration_types.map( (item, i) => (
                <ListItem
                buttons="true"
                key={i}
                selected={this.state.selectedIndex === item.event_registration_type_id}
                onClick={() => this.handleListItemClick(item)}
                 >
                <ListItemIcon>
                    <Checkbox
                        checked={this.state.selectedIndex === item.event_registration_type_id}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary={item.event_registration_type_title} />
                <ListItemSecondaryAction>
                    <ListItemText primary={`$${item.event_registration_type_price}`} />
                  <ListItemAvatar className={classes.price}>
                      <PaymentOutlinedIcon />
                  </ListItemAvatar>
                </ListItemSecondaryAction>
                
                </ListItem>
            ))}
        </List>
      </div>
    );
  }
}

FormRegistrationTypes.propTypes = {
  classes: PropTypes.object.isRequired,
};
const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
      margin: 'auto',
      paddingTop: 30,
      color: '#1976d2',
    },
    price: {
      float: "right",
    },
  });

export default withStyles(styles)(FormRegistrationTypes);