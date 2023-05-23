import { FC } from "react";
import { useGetCountries } from "../queries/CountryQueries";
import Map from "../components/Map";
import { useNavigate } from "react-router-dom";

type LeafletProps = {};

const Leaflet: FC<LeafletProps> = ({}) => {
  const { isLoading, data, isError } = useGetCountries();
  const navigate = useNavigate();
  if (isLoading) return <h2>loading...</h2>;
  if (isError) {
    navigate("/error");
  }
  return (
    <div>
      <Map data={data} />
    </div>
  );
};

export default Leaflet;
