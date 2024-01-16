import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{}}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "#007FFF",
                color: "white",
                border: "1px solid white",
                "&:hover": {
                  boxShadow: "-1px -1px 2px white",
                },
              }}
              onClick={() => navigate("/table")}
            >
              Table
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "#007FFF",
                color: "white",
                border: "1px solid white",
                "&:hover": {
                  boxShadow: "-1px -1px 2px white",
                },
              }}
              onClick={() => navigate("/pie")}
            >
              Pie Chart
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "#007FFF",
                color: "white",
                border: "1px solid white",
                "&:hover": {
                  boxShadow: "-1px -1px 2px white",
                },
              }}
              onClick={() => navigate("/graph")}
            >
              Bar Chart
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
