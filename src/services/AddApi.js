/* eslint-disable no-unused-vars */
import axios from "axios";

export async function addItemApi(data) {
  try {
    const url = `http://localhost:4000/api/food/add`;
    const res = await axios.post(url, data);

    return res; 
  } catch (error) {
    console.log(error)
  }
}
