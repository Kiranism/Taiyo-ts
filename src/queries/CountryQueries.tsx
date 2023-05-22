import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const allCountries = "https://disease.sh/v3/covid-19/countries";

const getAllCountries = async () => {
  const response = await axios.get(allCountries);
  return response.data;
};

export const useGetCountries = () => {
  const { data, isLoading } = useQuery(["allCountries"], getAllCountries);
  return { data, isLoading };
};
