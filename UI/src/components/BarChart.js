import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarGraphView() {
  const [pieChartData, setPieChartData] = React.useState([]);

  React.useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    const response = await fetch("http://localhost:3001/api/graph");
    const data = await response.json();
    console.log(data);
    setPieChartData(data);
  };
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
  );
}
