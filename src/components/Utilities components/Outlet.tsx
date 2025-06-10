import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Budgets from "../../views/Budgets";
import Dashboard from "../../views/Dashboard";
import PlannedExpenses from "../../views/PlannedExpenses";
import Transactions from "../../views/Transactions";

export function Outlet() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/planned-expenses" element={<PlannedExpenses />} />
      </Routes>
    </Router>
  );
}
