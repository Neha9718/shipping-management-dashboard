import axios from "axios";
import { orderData } from "../utils/orderData";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchOrderData = async (page = 1, limit = 10) => {

  try {
    const response = await axios.get(API_URL, {
      params: {
        _page: page,
        _limit: limit,
      },
    });

    const newOrderData = response.data.map(orderData);

    return {
      data: newOrderData,
      total: response.headers["x-total-count"],
    };
  } catch (error) {
    console.log("Service Error:", error);
    throw error;
  }
}
