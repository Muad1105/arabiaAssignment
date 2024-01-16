import * as React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarGraphView() {
  const [xAxis, setXAxis] = React.useState([]);
  const [yAxis, setYAxis] = React.useState([]);

  React.useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    const response = await fetch("http://localhost:3001/api/graph");
    const data = await response.json();
    // set x axis data
    const xAxisData = data.map((e, i) => e.x);
    setXAxis(xAxisData);
    // set y axis data
    const yAxisData = data.map((e, i) => e.y);
    setYAxis(yAxisData);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const labels = xAxis;

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data: yAxis,
        backgroundColor: "rgba(240, 34, 78, 0.5)",
      },
    ],
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",

        background: "silver",
      }}
    >
      <h1 style={{ textDecoration: "underline", color: "#474747" }}>
        Bar Chart
      </h1>
      <Bar options={options} data={data} />;
    </div>
  );
}
