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

export const fetchDailyDate = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)

        console.log(data)
    } catch (error) {

    }
}