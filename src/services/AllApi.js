/* eslint-disable no-unused-vars */
import axios from "axios";

export async function addItemApi(data) {
  try {
    const url = `http://localhost:4000/api/food/add`;
    const res = await axios.post(url, data);

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function listItemApi() {
  try {
    const url = `http://localhost:4000/api/food/list`;
    const res = await axios.get(url);

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function removeItemApi(foodId) {
  try {
    const url = `http://localhost:4000/api/food/remove`;
    const res = await axios.post(url, { _id: foodId });

    return res;
  } catch (error) {
    console.log(error);
  }
}
