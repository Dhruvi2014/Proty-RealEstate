import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";

import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
