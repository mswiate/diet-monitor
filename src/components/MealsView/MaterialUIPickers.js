import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
<<<<<<< HEAD
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import Paper from '@material-ui/core/Paper';
=======
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from '@material-ui/pickers';
>>>>>>> f45367a... dont break dependencies

const styles = {
  grid: {
    width: '30%',
  },
};

class MaterialUIPickers extends React.Component {
  state = {
    selectedDate: new Date('2014-08-18T21:11:54'),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
<<<<<<< HEAD
        <Grid container justify="center" 
                        alignItems="center" 
                        direction="row" 
                        className={classes.grid}>
          
          <Grid item>
            <DatePicker
              margin="normal"
              label="Date picker"
              value={selectedDate}
              direction="row"
              onChange={this.handleDateChange}
            />
          </Grid>
          <Grid item>
            <TimePicker
              margin="normal"
              label="Time picker"
              direction="row"
              value={selectedDate}
              onChange={this.handleDateChange}
            />
          </Grid>
=======
        <Grid container justify="flex-start" 
                        alignItems="center" 
                        direction="row" 
                        className={classes.grid}>
          <DatePicker
            margin="normal"
            label="Date picker"
            value={selectedDate}
            direction="row"
            onChange={this.handleDateChange}
          />
          <TimePicker
            margin="normal"
            label="Time picker"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
>>>>>>> f45367a... dont break dependencies
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

MaterialUIPickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialUIPickers);
