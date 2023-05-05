import {API_KEY} from "./API_KEY.js";
import axios from "axios";

async function getData() {
    const {data} = await axios.get(API_KEY)
    return data
}

export default getData;