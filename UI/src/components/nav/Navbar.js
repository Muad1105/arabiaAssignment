import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import "./nav.css";

export default function Navbar() {
  const [navSelected, setNavSelected] = useState({
    home: false,
    table: false,
    pie: false,
    graph: false,
  });
  const navigate = useNavigate();
  const presentLocation = useLocation().pathname;
  useEffect(() => {
    setNavSelected((prev) => ({
      ...prev,
      home: presentLocation === "/",
      table: presentLocation === "/table",
      pie: presentLocation === "/pie",
      graph: presentLocation === "/graph",
    }));
  }, [presentLocation]);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar style={{ padding: "0" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              className={
                navSelected.home ? `nav-button selected` : `nav-button`
              }
            >
              <Button
                variant="contained"
                sx={{
                  background: "#007FFF",
                  color: navSelected.home ? "white" : "black",
                  border: navSelected.home
                    ? "1px solid white"
                    : "1px solid black",
                  "&:hover": {
                    boxShadow: "-1px -1px 2px white",
                  },
                }}
                onClick={() => navigate("/")}
              >
                Home
              </Button>
            </div>
            <div
              className={
                navSelected.table ? `nav-button selected` : `nav-button`
              }
            >
              <Button
                variant="contained"
                sx={{
                  background: "#007FFF",
                  color: navSelected.table ? "white" : "black",
                  border: navSelected.table
                    ? "1px solid white"
                    : "1px solid black",
                  "&:hover": {
                    boxShadow: "-1px -1px 2px white",
                  },
                }}
                onClick={() => navigate("/table")}
              >
                Table
              </Button>
            </div>
            <div
              className={navSelected.pie ? `nav-button selected` : `nav-button`}
            >
              <Button
                variant="contained"
                sx={{
                  background: "#007FFF",
                  color: navSelected.pie ? "white" : "black",
                  border: navSelected.pie
                    ? "1px solid white"
                    : "1px solid black",
                  "&:hover": {
                    boxShadow: "-1px -1px 2px white",
                  },
                }}
                onClick={() => navigate("/pie")}
              >
                Pie Chart
              </Button>
            </div>
            <div
              className={
                navSelected.graph ? `nav-button selected` : `nav-button`
              }
            >
              <Button
                variant="contained"
                sx={{
                  background: "#007FFF",
                  color: navSelected.graph ? "white" : "black",
                  border: navSelected.graph
                    ? "1px solid white"
                    : "1px solid black",
                  "&:hover": {
                    boxShadow: "-1px -1px 2px white",
                  },
                }}
                onClick={() => navigate("/graph")}
              >
                Bar Chart
              </Button>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
