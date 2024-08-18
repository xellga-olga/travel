import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Gallery from "./component/Gallery";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
