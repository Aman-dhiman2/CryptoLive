/* import express */

import("dotenv")
import("express") 

const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const api = axios.create({
  method: "GET",
  baseURL: "https://pro-api.coinmarketcap.com",
  headers: {
    "X-CMC_PRO_API_KEY": "9cbdb624-b8c8-4879-8690-9416196074f6",
    Accept: "application/json",
    "Accept-Encoding": "deflate, gzip",
  },
});
app.get("/api", (req, res) => {
  api("/v1/cryptocurrency/listings/latest?limit=20")
    .then((response) => response.data)
    .then((value) => res.json(value.data))
    .catch((err) => console.log(err));
});
app.listen(4000, () => {
  console.log(`Server is running on port 4000`+ ' ' + `http://localhost:4000/api`);
  
  console.log("epress server");
});