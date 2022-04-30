import React from 'react'
//importing several component file
//folder automatically loads index file
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
//folder automatically loads index file fomr the api folder
import { fetchData } from './api'

import coronaImage from './images/image.png'


//class component
class App extends React.Component {
  //state is used for storing data
  //state with data and country properties
  state = {
    data: {},
    country: '',
  }

  //loads the method when the component is mounted
  //async operation in a component did mount comes right in front of it
  async componentDidMount(){
    const fetchedData = await fetchData()
    
    //setting the state
    this.setState({ data: fetchedData })

  }

  //function to handle country change
  handleCountryChange = async( country ) => {
    //calling the fetch data with country as an arguement
    const fetchedData = await fetchData( country )
    // fetch the data and load it in the country
    console.log(fetchedData)

    //set the state
    this.setState({ data: fetchedData, country: country})

  }

  render(){
    //taking the data from the state and share it using props
    const { data, country } = this.state

    //nesting components in the root app component
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19"/>
        {/* passing data as props from the state */}
        <Cards data={data}/>
        <CountryPicker  handleCountryChange={this.handleCountryChange}/>
        <Chart  data={data} country={country}/>
      </div>
    );
  }
}

export default App;
