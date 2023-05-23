import { FC } from "react";
import LineGraph from "../components/LineGraph";
import { useGetCasesWithDate } from "../queries/CountryQueries";

type GraphProps = {};

const Graph: FC<GraphProps> = ({}) => {
  const { isLoading, data } = useGetCasesWithDate();
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="w-full h-[100%] p-10">
      <LineGraph data={data.cases} />
    </div>
  );
};

export default Graph;
