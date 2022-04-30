//importing axios
import axios from 'axios';

//storing url in a variable
const url  = 'https://covid19.mathdro.id/api';

//exporting a function to fetch data
export const fetchData = async () => {

    //try and catch block for error handling
    try {
        //destructring data and its value from the url
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url)
        
        //returning the value gotten from data
       return { confirmed, recovered, deaths, lastUpdate, }

    }catch (error){

    }
}

//exporting function to get daily data
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)

        //map the array into an object of three method
        //there are several object for date, confirmed and deaths
        //they already have their index
        const modifiedData = data.map((dailyData) => ({
            //mapping out all the data in confirmed, deaths and date
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;
    } catch (error) {

    }
}

//asynchronous function to fetch countries 
export const fetchCountries = async () => {
    //try and catch block to fetch data when data is available
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`)

        //return the countries and mapping out the name of the each individual country
        return countries.map((country) => country.name)
    }catch ( error ){
        console.log(error)
    }
}