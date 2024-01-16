import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function TableChar() {
  const [tableData, setTableData] = React.useState([]);

  React.useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    const response = await fetch("http://localhost:3001/api/table");
    const data = await response.json();
    console.log(data);
    setTableData(data);
  };

  return (
    <TableContainer component={Paper} style={{background:"silver", height:"100vh"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ borderBottom: "2px solid #838383" }}>
          <TableRow style={{ background: "rgb(253, 253, 113)" }}>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              className={index % 2 == 0 ? "bg-gray" : "bg-blue"}
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
