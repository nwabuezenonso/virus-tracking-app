import React, { useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
// react chartjs is  a react wrapper for chartjs (creating chatrts with react)
//to make it work we need chartjs
import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Bar } from 'react-chartjs-2';

//importing styles
import styles from './Chart.module.css'

//chart functional component
const Chart = ({data: { confirmed, deaths, recovered},country}) => {
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
    //it make the data run once
  }, []);

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
    
  );
  
  //loading bar chart
  const barChart = (
    //if confirmed exist then load bar else null
    confirmed 
    ? (
      <Bar
      // data has double braces, first is for making it dynamic and second is for making it and object
          data={{
            labels: ['Infected', ' Recovered', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
              ],
              //data in value
              data: [ confirmed.value, recovered.value, deaths.value]
            }]
          }}

          //options is object
          options = {{
            //legend is used for creating maps
            legend: {display: false},
            //title for displaing text
            title: { display: true, text: `Current state in ${country}`}
          }}
      />
    ): null
  );
  
  return (
    <div className={styles.container}>
      { country ? barChart : lineChart}
    </div>
  )
}

export default Chart
