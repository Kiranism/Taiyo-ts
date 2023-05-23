import { FC } from "react";
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
