import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Recipients from './pages/Recipients';
import AddFunds from './pages/AddFunds';
import Transfer from './pages/Transfer';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';
import TransfersPage from './pages/TransfersPage';
import SmartSplitPage from './pages/SmartSplitPage';
import ProfilePage from './pages/ProfilePage';
import TransferDetailsPage from './pages/TransferDetailsPage';
import ReviewTransferPage from './pages/ReviewTransferPage';
import ProcessingTransferPage from './pages/ProcessingTransferPage';
import TransferSuccessPage from './pages/TransferSuccessPage';
import TransactionDetailsPage from './pages/TransactionDetailsPage';
import TransferReceiptPage from './pages/TransferReceiptPage';
import ShareTransactionPage from './pages/ShareTransactionPage';
import BottomNav from './components/BottomNav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="page-content">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/transfers" element={<TransfersPage />} />
            <Route path="/transfers/new" element={<Transfer />} />
            <Route path="/transfers/new/:recipientId" element={<TransferDetailsPage />} />
            <Route path="/transfers/new/:recipientId/review" element={<ReviewTransferPage />} />
            <Route path="/transfers/new/:recipientId/processing" element={<ProcessingTransferPage />} />
            <Route path="/transfers/new/:recipientId/success" element={<TransferSuccessPage />} />
            <Route path="/transfers/recipients" element={<Recipients />} />
            <Route path="/transfers/:transactionId/receipt" element={<TransferReceiptPage />} />
            <Route path="/transfers/:transactionId/share" element={<ShareTransactionPage />} />
            <Route path="/transfers/:transactionId" element={<TransactionDetailsPage />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/wallet/add-funds" element={<AddFunds />} />
            <Route path="/smart-split" element={<SmartSplitPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Backward Compatibility Redirects */}
            <Route path="/transfer" element={<Navigate to="/transfers/new" replace />} />
            <Route path="/recipients" element={<Navigate to="/transfers/recipients" replace />} />
            <Route path="/add-funds" element={<Navigate to="/wallet/add-funds" replace />} />
          </Routes>
        </div>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
