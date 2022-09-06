import axios from "axios";

export const apiAutoServ = axios.create({
  baseURL: "http://localhost:3006",

  headers: {
    "Content-Type": "application/json",
  },
});
