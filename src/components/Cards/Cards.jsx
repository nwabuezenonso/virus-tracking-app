//importing react 
import React from 'react'
//importing card and other component from material UI
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
//import countup to start a count up animation
import CountUp from 'react-countup';

//import classname to allow load in multiple styles in a component
import cx from 'classnames'

//importing styles for the cards component
import styles from './Cards.module.css'


//functional component passing the data
const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
  //conditional statement for the confirmation
  if (!confirmed){
    return 'loading...'
  }

  //data runs twice because of the componentdidmount
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        {/* type of grid is item */}
        {/* create a card component inside the grid followed by the content and passing the data value */}
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={confirmed.value} duration={2.5} separator= ","/>
            </Typography>
            <Typography color='textSecondary' >{ new Date(lastUpdate).toDateString() }</Typography>
            <Typography variant='body2'>Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={recovered.value} duration={2.5} separator= ","/>
            </Typography>
            <Typography color='textSecondary' >{ new Date(lastUpdate).toDateString() }</Typography>
            <Typography variant='body2'>Number of recovery from COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={deaths.value} duration={2.5} separator= ","/>
            </Typography>
            <Typography color='textSecondary' >{ new Date(lastUpdate).toDateString() }</Typography>
            <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>

      </Grid>
    </div>
  )
}

//exporting cards
export default Cards
