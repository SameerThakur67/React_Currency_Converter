import axios from "axios";

const api = axios.create({
  baseURL:"https://v6.exchangerate-api.com/v6/3146abb8b6859f88e66444f2",
    
});

// we need to crate a  get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};