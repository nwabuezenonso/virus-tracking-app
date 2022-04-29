import React, { useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
// react chartjs is  a react wrapper for chartjs (creating chatrts with react)
//to make it work we need react
import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css'

const Chart = () => {
  const [ dailyData, setDailyData] = useState([])
  
  useEffect(()=>{
    const fetchAPI = async () =>{
      setDailyData( await fetchDailyData());
    }


    fetchAPI();
  });

  //implementing line chart
  const lineChart = (
    dailyData.length
    ? (
      <Line 
        data={{
          labels: dailyData.map(({ date}) => date),
          datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label:  'Infected',
            borderColor: '#3333ff',
            fill: true
          }, {
            data: dailyData.map(({ deaths }) => deaths),
            label:  'Infected',
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
