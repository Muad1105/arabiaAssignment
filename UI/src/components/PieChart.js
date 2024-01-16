import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieChartView() {
  const [pieChartData, setPieChartData] = React.useState([]);

  React.useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    const response = await fetch("http://localhost:3001/api/pie-chart");
    const data = await response.json();
    console.log(data);
    setPieChartData(data);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <h1 style={{ textDecoration: "underline", color: "#474747" }}>
        Pie Chart
      </h1>
      <PieChart
        series={[
          {
            data: pieChartData,
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
}
