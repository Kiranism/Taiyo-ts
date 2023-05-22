import React, { FC } from "react";
import { useGetCountries } from "../queries/CountryQueries";
import Map from "../components/Map";

type LeafletProps = {};

const Leaflet: FC<LeafletProps> = ({}) => {
  const { isLoading, data } = useGetCountries();
  if (isLoading) return <h2>loading...</h2>;
  return (
    <div>
      <Map data={data} />
    </div>
  );
};

export default Leaflet;
