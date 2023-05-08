import {API_KEY} from "./API_KEY.js";
import axios from "axios";

async function getData() {
    try {
        const {data} = await axios.get(API_KEY)
        
        return data
    } catch (e) {
        console.error(e)
    }
}

export default getData;