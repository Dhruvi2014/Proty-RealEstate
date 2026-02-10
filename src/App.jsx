import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home4 from "./components/Home4";
import Home5 from "./components/Home5";
import Home6 from "./components/Home6";
import Home7 from "./components/Home7";
import Home8 from "./components/Home8";
import Home9 from "./components/Home9";
import Home10 from "./components/Home10";

import Agents from "./components/Agents";
import AgentDetails from "./components/AgentDetails";
import AgenciesGrid from "./components/AgenciesGrid";
import AgenciesList from "./components/AgenciesList";
import AgenciesDetails from "./components/AgenciesDetails";
import HomeLoanProcess from "./components/HomeLoanProcess";
import Career from "./components/Career";
import Faq from "./components/Faq";

import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/home4" element={<Home4 />} />
        <Route path="/home5" element={<Home5 />} />
        <Route path="/home6" element={<Home6 />} />
        <Route path="/home7" element={<Home7 />} />
        <Route path="/home8" element={<Home8 />} />
        <Route path="/home9" element={<Home9 />} />
        <Route path="/home10" element={<Home10 />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agentdetails" element={<AgentDetails />} />
        <Route path="/agenciesgrid" element={<AgenciesGrid />} />
        <Route path="/agencieslist" element={<AgenciesList />} />
        <Route path="/agenciesdetails" element={<AgenciesDetails />} />
        <Route path="/homeloanprocess" element={<HomeLoanProcess />} />
        <Route path="/career" element={<Career />} />
        <Route path="/faq" element={<Faq />} />


        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
