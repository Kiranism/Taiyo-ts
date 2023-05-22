import React, { FC } from "react";
import LineGraph from "../components/LineGraph";
import { useGetCountries } from "../queries/CountryQueries";

type GraphProps = {};

const Graph: FC<GraphProps> = ({}) => {
  const { isLoading, data } = useGetCountries();
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="w-full h-96">
      <LineGraph data={data} />
    </div>
  );
};

export default Graph;
