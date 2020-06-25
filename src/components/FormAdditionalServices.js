import React from 'react'
import PropTypes from 'prop-types';
import BuildIcon from '@material-ui/icons/Build';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import DisplayUserDetails from './DisplayUserDetails';
import RaisedButton from 'material-ui/RaisedButton';




import WorkshopSelect from './WorkshopSelect'

export class FormAdditionalServices extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
    
  }
      handleBasketItemClick = (workshopObj) => {
        this.props.addWorkShop(workshopObj);
      };

    render() {
        const { classes, values, removeWorkshopChild } = this.props;

        return (
            <div className={classes.root}>
                <Box>
                     <h1><BuildIcon fontSize="large"/> Workshops  </h1>
                     <DisplayUserDetails
                        values={values}
                        removeWorkshopChild = {removeWorkshopChild}
                     />
                </Box>
                {this.props.workshops.map( (item, i) => (
                    <WorkshopSelect 
                        key={i}
                        workshopDetails={item}
                        addWorkshopId={this.handleBasketItemClick}
                    />
                ))}
                <RaisedButton
                        label= "Prev"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                <RaisedButton
                        label= "Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    
            </div>
        );
    }
}
FormAdditionalServices.propTypes = {
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
    });
export default withStyles(styles)(FormAdditionalServices);
