import { LatLngExpression } from "leaflet";
import React, { FC } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type MapProps = {
  data: Array<{
    country: string;
    active: number;
    deaths: number;
    recovered: number;
    countryInfo: {
      lat: number;
      long: number;
    };
  }>;
};

// {
//   "updated": 1684781881912,
//   "country": "Afghanistan",
//   "countryInfo": {
//       "_id": 4,
//       "iso2": "AF",
//       "iso3": "AFG",
//       "lat": 33,
//       "long": 65,
//       "flag": "https://disease.sh/assets/img/flags/af.png"
//   },
//   "cases": 220453,
//   "todayCases": 230,
//   "deaths": 7912,
//   "todayDeaths": 0,
//   "recovered": 196256,
//   "todayRecovered": 130,
//   "active": 16285,
//   "critical": 45,
//   "casesPerOneMillion": 5409,
//   "deathsPerOneMillion": 194,
//   "tests": 1255504,
//   "testsPerOneMillion": 30807,
//   "population": 40754388,
//   "continent": "Asia",
//   "oneCasePerPeople": 185,
//   "oneDeathPerPeople": 5151,
//   "oneTestPerPeople": 32,
//   "activePerOneMillion": 399.59,
//   "recoveredPerOneMillion": 4815.58,
//   "criticalPerOneMillion": 1.1
// }

const Map: FC<MapProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((item) => (
          <Marker position={[item.countryInfo.lat, item.countryInfo.long]}>
            <Popup>
              <p className="mx-2 font-bold">Country Name : {item.country}</p>
              <p className="mx-2 font-bold">Total Active : {item.active}</p>
              <p className="mx-2 font-bold">
                Recovered Cases : {item.recovered}
              </p>
              <p className="mx-2 font-bold">Total Death : {item.deaths}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
