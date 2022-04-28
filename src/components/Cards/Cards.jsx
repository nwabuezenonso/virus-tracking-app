import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css'

const Cards = (props) => {
  //data runs twice because of the componentdidmount
  console.log(props);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        {/* type of grid is item */}
        {/* create a card component inside the grid followed by the content */}
        <Grid item component={Card} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant='h5'>Real data</Typography>
            <Typography color='textSecondary'>REAL DATA</Typography>
            <Typography variant='body2'>Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
