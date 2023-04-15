import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Covid from './pages/Covid';
import Services from './pages/Services';
import CovidContact from './pages/CovidContact';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ForthComingReports from './pages/ForthComingReports';
import NotFound from './pages/NotFound';

// Sub pages imports
import IndustriesAutomotive from './pages/IndustriesSubPages/IndustriesAutomotive';
import IndustriesChemical from './pages/IndustriesSubPages/IndustriesChemical';
import IndustriesConsumer from './pages/IndustriesSubPages/IndustriesConsumer';
import IndustriesDefence from './pages/IndustriesSubPages/IndustriesDefence';
import IndustriesElectronics from './pages/IndustriesSubPages/IndustriesElectronics';
import IndustriesEnergy from './pages/IndustriesSubPages/IndustriesEnergy';
import IndustriesFactory from './pages/IndustriesSubPages/IndustriesFactory';
import IndustriesFood from './pages/IndustriesSubPages/IndustriesFood';
import IndustriesPackaging from './pages/IndustriesSubPages/IndustriesPackaging';
import IndustriesHeavy from './pages/IndustriesSubPages/IndustriesHeavy';

// Pay and que pages import
import BuyNow from './pages/PayAndQuePages/BuyNow';
import RequestSample from './pages/PayAndQuePages/RequestSample';
import AskReferences from './pages/PayAndQuePages/AskReferences';
import RequestCustom from './pages/PayAndQuePages/RequestCustom';
import RequestDiscount from './pages/PayAndQuePages/RequestDiscount';
import RequestReports from './pages/PayAndQuePages/RequestReports';
import EnquiryBeforeBuy from './pages/PayAndQuePages/EnquiryBeforeBuy';


// Insights sub pages import

import IndustriesDropdown from '../src/components/IndustriesDropdown'
import ReportSummary from './pages/PayAndQuePages/ReportSummary';


function App() {
  return (
    <>
      <Topbar />

      <Router>
        <Navbar/>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/covid' element={<Covid />} />
          <Route path='/covid/talk' element={<CovidContact />} />
          <Route path='/services' element={<Services />} />

          <Route path='/industries' element={<Industries />} />
          <Route path='/automotive/:id' element={<IndustriesAutomotive />} />
          <Route path='/chemicals/:id' element={<IndustriesChemical />} />
          <Route path='/consumer/:id' element={<IndustriesConsumer />} />
          <Route path='/defence/:id' element={<IndustriesDefence />} />
          <Route path='/electronics/:id' element={<IndustriesElectronics />} />
          <Route path='/energy/:id' element={<IndustriesEnergy />} />
          <Route path='/factory/:id' element={<IndustriesFactory />} />
          <Route path='/food/:id' element={<IndustriesFood />} />
          <Route path='/packaging/:id' element={<IndustriesPackaging />} />
          <Route path='/heavyequipment/:id' element={<IndustriesHeavy />} />

          {/* Pay and  que pages import */}
          <Route path='/buynow' element={<BuyNow />} />
          <Route path='/requestsample' element={<RequestSample />} />
          <Route path='/requestdiscount' element={<RequestDiscount />} />
          <Route path='/requestcustom' element={<RequestCustom />} />
          <Route path='/requestreports' element={<RequestReports/>} />
          <Route path='/askforreference' element={<AskReferences />} />
          <Route path='/enquirybeforebuy' element={<EnquiryBeforeBuy />} />


          <Route path='/forthcomings-reports' element={<ForthComingReports />} />

          <Route path='/reports' element={<ReportSummary />} />

          <Route path='/insights' element={<Insights />} />
         
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/industries_dropdown' element={<IndustriesDropdown/>}/>



        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
