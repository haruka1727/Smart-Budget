import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Dashboard from './Dashboard';
import Transactions from './Transactions';
import Budgets from './Budgets';
import PlannedExpenses from './PlannedExpenses';

function App() {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/planned-expenses" element={<PlannedExpenses />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;