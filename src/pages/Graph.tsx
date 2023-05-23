import { FC } from "react";
import LineGraph from "../components/LineGraph";
import { useGetCasesWithDate } from "../queries/CountryQueries";
import { useNavigate } from "react-router-dom";

type GraphProps = {};

const Graph: FC<GraphProps> = ({}) => {
  const navigate = useNavigate();
  const { isLoading, data, isError } = useGetCasesWithDate();
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) {
    navigate("/error");
  }
  return (
    <div className="w-full h-96 sm:h-[100%] p-2 sm:p-10">
      <h2 className="text-xl font-semibold text-center my-10 sm:my-1">
        A line graph showing the cases fluctuations
      </h2>
      <LineGraph data={data.cases} />
    </div>
  );
};

export default Graph;
