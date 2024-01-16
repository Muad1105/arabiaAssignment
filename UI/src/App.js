import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import TableView from "./components/table/Table";
import PieChartView from "./components/PieChart";
import BarGraphView from "./components/BarChart";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TableView />} />
        <Route path="/pie" element={<PieChartView />} />{" "}
        <Route path="/graph" element={<BarGraphView />} />
      </Routes>
    </div>
  );
}

export default App;
