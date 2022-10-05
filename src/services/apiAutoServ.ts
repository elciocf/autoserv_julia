import axios from "axios";

export const apiAutoServ = axios.create({
  baseURL: "http://sistemacicom.com.br/api_autoserv",

  headers: {
    "Content-Type": "application/json",
  },
});
