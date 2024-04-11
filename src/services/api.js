import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.theeventera.live/api", // Replace with your backend server URL
});

export default instance;
