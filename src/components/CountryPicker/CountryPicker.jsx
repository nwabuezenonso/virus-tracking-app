//importing react and useState and useEffect from react
import React, { useState, useEffect } from 'react';

//importing Nativeselect and formcontrol from material ui
import { NativeSelect, FormControl } from '@material-ui/core';

//importing style
import  Styles from './CountryPicker.module.css';

//importing API
import { fetchCountries } from '../../api';

//funtional component
const CountryPicker = () => {
  // initializing state
  const [fetchedCountries, setFetchedCountries] =  useState([]);

  //applying the useEffect hook
  useEffect(() => {
    const fetchAPI = async () =>{
      // function to set the fetchedcountries
      setFetchedCountries(await fetchCountries())
    } 

    //calling the function
    fetchAPI()
    //set the state to reload when the fetch country data changed
  }, [setFetchedCountries]);

  //form control component from material UI
  return (
    <FormControl className='{styles.formControl}'>
      <NativeSelect>
        <option value="global">Global</option>
        {/* fetching all the countries and applying it to the option tag*/}
        {fetchedCountries.map((country, i) => <option key={i} value={country}> {country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

//exporting CountryPicker
export default CountryPicker
