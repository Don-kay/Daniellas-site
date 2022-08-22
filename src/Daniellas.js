import React from "react";
import { useState } from "react";
import Heroine from "./component/hero comp/Heroine";
// import Navbar from "./component/nav bar/Navar";
import Overview from "./component/overview Section/Overview";
import Gallery from "./component/galleries/gallery";
import Overview2 from "./component/overview2/overview2";
import Map from "./component/Map_intg comp/Map";
import AbtFooter from "./component/footer about/Abtfooter";
import Submenu from "./component/sumenu/Submenu";
import "./Daniella.css";
import { utils } from "./data component/data";
import ScrollTop from "./ScrollTop";
import {
  Rectangle,
  Circle,
  Ellipse,
  Line,
  Polyline,
  CornerBox,
  Triangle,
} from "react-shapes";

const Daniellas = () => {
  const [util, setUtil] = useState(utils);

  return (
    <>
      <main>
        <div>
          {/* <Navbar /> */}
          <Submenu />
          <Heroine />
        </div>
        <div>
          <Overview />
          <Overview2 />
        </div>
        <div>
          <Gallery />
          <Map />
        </div>
        <ScrollTop />
        <div
          style={{
            position: "relative",
            top: "380vh",
            backgroundColor: "#01030e",
            height: "60vh",
            zIndex: "-2",
            overflow: "hidden",
            
          }}
        >
          <AbtFooter />
        </div>
      </main>
    </>
  );
};

export default Daniellas;
