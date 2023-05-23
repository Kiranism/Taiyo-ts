import { FC } from "react";
import {
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
} from "recharts";
import millify from "millify";

type LineGraphProps = {
  data: Array<{
    cases: number;
    date: number;
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

const LineGraph: FC<LineGraphProps> = ({ data }) => {
  const graphData = Object.entries(data).map(([key, value]) => {
    return {
      name: key,
      cases: value,
    };
  });

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={200}
          height={200}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => millify(value)} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="dates"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="cases" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineGraph;
