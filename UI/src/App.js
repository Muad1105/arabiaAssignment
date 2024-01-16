import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TableView from "./components/Table";
import PieChartView from "./components/PieChart";
import BarGraphView from "./components/BarChart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/table" element={<TableView />} />
        <Route path="/pie" element={<PieChartView />} />{" "}
        <Route path="/graph" element={<BarGraphView />} />
      </Routes>
    </div>
  );
}

export default App;
