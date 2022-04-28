import axios from 'axios';

const url  = 'https://covid19.mathdro.id/api';

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