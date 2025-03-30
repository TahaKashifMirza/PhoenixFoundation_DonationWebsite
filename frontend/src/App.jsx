import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { FAQ } from "./pages/Faq";
import { Contact } from "./pages/Contact";
import { Donation } from "./pages/Donation";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Logout } from "./pages/Logout";
import { Error } from "./pages/Error";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/donation" element={<Donation />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
};

export default App;