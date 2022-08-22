import React from "react";
import { useEffect } from "react";
import "./App.css";
// import Daniellas from "./Daniellas";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Daniellas from "./Daniellas";
import About from "./pages component/about us/aboutus/about";
import Policy from "./pages component/about us/policy/policy";
import Curricular from "./pages component/academics/co-curricular/curricular";
import Kg from "./pages component/academics/kg/Kg";
import Library from "./pages component/academics/library/library";
import Contact from "./pages component/contact us/contact";
import Kss1 from "./pages component/academics/primary/kss1";
import Kss2 from "./pages component/academics/primary/kss2";
import WhyUs from "./pages component/admission/why us/why_us";
import Faq from "./pages component/admission/faqs/Faqs";
import Navar from "./component/nav bar/Navar";
import Events from "./pages component/gallery/event/events";
import Facilities from "./pages component/gallery/facilities/facilities";
import Skills from "./pages component/gallery/skills/skills";
import { useGlobalContext } from "./component/context/context";
import ScrollToTop from "./ScrollToTop";
import WebFont from "webfontloader";

function App() {
  const { displayNav } = useGlobalContext();
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Oswald"],
      },
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        {displayNav ? <Navar /> : null}

        <Routes>
          <Route path="/" element={<Daniellas />} />
          <Route path="/about" element={<About />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/Curricular" element={<Curricular />} />
          <Route path="/playgroup" element={<Kg />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Kss1" element={<Kss1 />} />
          <Route path="/Kss2" element={<Kss2 />} />
          <Route path="/whyUs" element={<WhyUs />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/events" element={<Events />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>

      {/* <Contact /> */}
    </div>
  );
}

export default App;
