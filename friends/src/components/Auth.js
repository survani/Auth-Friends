import axios from "axios";

export const axiosWithAuth = () => {
  //auth works
  const token = localStorage.getItem("token");
  //do not uncomment below === Security Issue Testing Only
  // console.log("gg: Auth.js: localStorage returns: ", localStorage);
  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: token
    }
  });
};
