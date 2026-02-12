import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import OrderTable from "./components/OrderTable";
import StatsCard from "./components/StatsCard";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            index
            element={
              <>
                <StatsCard />
                <OrderTable />

              </>
            }
          />

          <Route path="orders" element={<OrderTable />} />
          <Route path="settings" element={<OrderTable />} />

        </Route>
      </Route>

    </Routes>

  );
}

export default App;
