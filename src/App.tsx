/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NewShipment from './pages/NewShipment';
import ModeFeasibility from './pages/ModeFeasibility';
import ModeComparison from './pages/ModeComparison';
import RecommendationEngine from './pages/RecommendationEngine';
import Header from './components/Header';
import Footer from './components/Footer';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';

import FutureForecast from './pages/FutureForecast';
import RiskSimulation from './pages/RiskSimulation';
import RealTimeMonitoring from './pages/RealTimeMonitoring';

import MultiModalJourney from './pages/MultiModalJourney';
import CostLossAnalysis from './pages/CostLossAnalysis';
import ShipmentIntelligence from './pages/ShipmentIntelligence';

import ModeSwitchEngine from './pages/ModeSwitchEngine';
import ReliabilityPage from './pages/ReliabilityPage';
import LearningHistory from './pages/LearningHistory';
import ConstraintSolver from './pages/ConstraintSolver';

import TradeOffExplorer from './pages/TradeOffExplorer';
import AlertStrategy from './pages/AlertStrategy';
import FinalSummary from './pages/FinalSummary';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow"><Landing /></main>
            <Footer />
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
        <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
        <Route path="/new-shipment" element={<DashboardLayout><NewShipment /></DashboardLayout>} />
        <Route path="/mode-feasibility" element={<DashboardLayout><ModeFeasibility /></DashboardLayout>} />
        <Route path="/comparison" element={<DashboardLayout><ModeComparison /></DashboardLayout>} />
        <Route path="/recommendation" element={<DashboardLayout><RecommendationEngine /></DashboardLayout>} />
        <Route path="/forecast" element={<DashboardLayout><FutureForecast /></DashboardLayout>} />
        <Route path="/simulation" element={<DashboardLayout><RiskSimulation /></DashboardLayout>} />
        <Route path="/monitoring" element={<DashboardLayout><RealTimeMonitoring /></DashboardLayout>} />
        <Route path="/intelligence" element={<DashboardLayout><ShipmentIntelligence /></DashboardLayout>} />
        <Route path="/cost-loss" element={<DashboardLayout><CostLossAnalysis /></DashboardLayout>} />
        <Route path="/multimodal" element={<DashboardLayout><MultiModalJourney /></DashboardLayout>} />
        <Route path="/switch-engine" element={<DashboardLayout><ModeSwitchEngine /></DashboardLayout>} />
        <Route path="/reliability" element={<DashboardLayout><ReliabilityPage /></DashboardLayout>} />
        <Route path="/history" element={<DashboardLayout><LearningHistory /></DashboardLayout>} />
        <Route path="/constraints" element={<DashboardLayout><ConstraintSolver /></DashboardLayout>} />
        <Route path="/trade-off" element={<DashboardLayout><TradeOffExplorer /></DashboardLayout>} />
        <Route path="/alerts" element={<DashboardLayout><AlertStrategy /></DashboardLayout>} />
        <Route path="/summary" element={<DashboardLayout><FinalSummary /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
