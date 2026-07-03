import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Recipients from './pages/Recipients';
import AddFunds from './pages/AddFunds';
import Transfer from './pages/Transfer';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';
import BottomNav from './components/BottomNav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/recipients" element={<Recipients />} />
            <Route path="/add-funds" element={<AddFunds />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
