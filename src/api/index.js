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

        //implement array into object and taking there 3 values out from it
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;
    } catch (error) {

    }
}