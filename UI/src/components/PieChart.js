import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

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
        background: "silver",
        height: "100vh",
      }}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h1 style={{ textDecoration: "underline", color: "#474747" }}>
              Pie Chart
            </h1>
          </Typography>
          <PieChart
            series={[
              {
                data: pieChartData,
              },
            ]}
            width={400}
            height={200}
          />
        </CardContent>
        <CardActions>
          <Button size="small">More details..</Button>
        </CardActions>
      </Card>
    </div>
  );
}
