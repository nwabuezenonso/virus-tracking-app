import React, { useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
// react chartjs is  a react wrapper for chartjs (creating chatrts with react)
//to make it work we need chartjs
import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Bar } from 'react-chartjs-2';

//importing styles
import styles from './Chart.module.css'

//chart functional component
const Chart = () => {
  // creating state
  //with several dailydata
  const [ dailyData, setDailyData] = useState([])
  
  //setting useEffect
  useEffect(()=>{
    //function to add the daily data to the daily data state
    const fetchAPI = async () =>{
      setDailyData( await fetchDailyData());
    }
    //calling the function
    fetchAPI();
  });

  //implementing line chart
  const lineChart = (
    //if there are content in the daily data array then result else null
    //with the data below, a linechart is created
    dailyData.length
    ? (
      <Line 
        data={{
          //using map to store our date object in a new form called date
          // return a new date and mapping it to line chart
          labels: dailyData.map(({ date}) => date),
          datasets: [{
            //return the data confirmed and mapping it to the bar line
            data: dailyData.map(({ confirmed }) => confirmed),
            label:  'Infected',
            borderColor: '#3333ff',
            fill: true
          }, {
            //returns deaths
            data: dailyData.map(({ deaths }) => deaths),
            label:  'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true
          }],
        }}
    />) : null
    
  )
  
  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart
