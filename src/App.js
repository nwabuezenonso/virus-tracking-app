import React, { Component } from 'react'

//importing several component file
//folder automatically loads index file
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
//folder automatically loads index file
import { fetchData } from './api'

class App extends React.Component {

  //loads the method when the component is mounted
  async componentDidMount(){
    const data = await fetchData()

    console.log(data)
  }

  render(){
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
