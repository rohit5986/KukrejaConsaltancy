import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import LoansDetail from './pages/LoansDetail';
import InsuranceDetail from './pages/InsuranceDetail';
import AIAutomationDetail from './pages/AIAutomationDetail';
import RealEstate from './pages/RealEstate';
import About from './pages/About';
import Contact from './pages/Contact';
import LoanInquiry from './pages/LoanInquiry';
import HomeLoan from './pages/HomeLoan';
import LoanAgainstProperty from './pages/LoanAgainstProperty';
import BusinessLoan from './pages/BusinessLoan';
import PersonalLoan from './pages/PersonalLoan';
import VehicleLoan from './pages/VehicleLoan';
import UsedCarLoan from './pages/UsedCarLoan';
import EducationLoan from './pages/EducationLoan';
import WorkingCapitalFinance from './pages/WorkingCapitalFinance';
import LoanAgainstShares from './pages/LoanAgainstShares';
import InsuranceServices from './pages/InsuranceServices';
import AllPartners from './pages/AllPartners';
import ResidentialProperties from './pages/ResidentialProperties';
import CommercialProperties from './pages/CommercialProperties';
import AgriculturalLand from './pages/AgriculturalLand';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/home-loan" element={<HomeLoan />} />
          <Route path="/loan-against-property" element={<LoanAgainstProperty />} />
          <Route path="/business-loan" element={<BusinessLoan />} />
          <Route path="/personal-loan" element={<PersonalLoan />} />
          <Route path="/vehicle-loan" element={<VehicleLoan />} />
          <Route path="/used-car-loan" element={<UsedCarLoan />} />
          <Route path="/education-loan" element={<EducationLoan />} />
          <Route path="/working-capital-finance" element={<WorkingCapitalFinance />} />
          <Route path="/loan-against-shares" element={<LoanAgainstShares />} />
          <Route path="/insurance-services" element={<InsuranceServices />} />
          <Route path="/all-partners" element={<AllPartners />} />
          <Route path="/loans-detail" element={<LoansDetail />} />
          <Route path="/insurance-detail" element={<InsuranceDetail />} />
          <Route path="/ai-automation-detail" element={<AIAutomationDetail />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/residential-properties" element={<ResidentialProperties />} />
          <Route path="/commercial-properties" element={<CommercialProperties />} />
          <Route path="/agricultural-land" element={<AgriculturalLand />} />
          <Route path="/about" element={<About />} />
          <Route path="/loan-inquiry" element={<LoanInquiry />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;