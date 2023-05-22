import React, { FC } from "react";
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

type LineGraphProps = {
  data: Array<{
    country: string;
    cases: number;
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
  const graphData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
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
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineGraph;
