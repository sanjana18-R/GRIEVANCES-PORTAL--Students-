import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ReportGrievance from "./pages/ReportGrievance";
import MyGrievances from "./pages/MyGrievances";
import GrievanceDetails from "./pages/GrievanceDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />

        <Route
          path="/report"
          element={<ReportGrievance />}
        />

        <Route
          path="/grievances"
          element={<MyGrievances />}
        />

        <Route
          path="/grievances/:id"
          element={<GrievanceDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;