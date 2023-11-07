import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a51015e8a5124aefa2262631c535febb",
  },
});
