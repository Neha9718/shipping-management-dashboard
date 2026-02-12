import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
export const loginUser = async (credentials) => {
  const response = axios.post(API_URL , credentials);

  return response.data ;
}