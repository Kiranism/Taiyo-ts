import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const allCountries = "https://disease.sh/v3/covid-19/countries";
const casesDate = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";

const getAllCountries = async () => {
  const response = await axios.get(allCountries);
  return response.data;
};

const getCasesWithDates = async () => {
  const response = await axios.get(casesDate);
  return response.data;
};

export const useGetCountries = () => {
  return useQuery(["allCountries"], getAllCountries);
};

export const useGetCasesWithDate = () => {
  return useQuery(["casesDates"], getCasesWithDates);
};
