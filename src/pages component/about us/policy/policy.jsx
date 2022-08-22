import React from "react";
import Navar from "../../../component/nav bar/Navar";
import Submenu from "../../../component/sumenu/Submenu";
import policyImg from "../../../assets/pexels-mikhail-nilov-7734569.jpg";
import SwiperCore from "swiper";
import AbtFooter from "../../../component/footer about/Abtfooter";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./policy.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Policy = () => {
  let position = "visionText1";
  // textelement.classList.remove("textelemets");
  // void textelement.offsetHeight;

  // textelement.classList.add("textelemets");
  return (
    <main>
      <section>
        <Submenu />
        <h1
          style={{
            backgroungColor: "black",
            width: "60vw",
            height: "3vh",
            position: "absolute",
            top: "30vh",
            left: "20vw",
            zIndex: 10,
            fontSize: "13ch",
            fontFamily: "oswald",
          }}
        >
          Policy
        </h1>
        <div className="policyslidecont">
          <img src={policyImg} alt="hero" className="images"></img>
        </div>
      </section>

      <section className="policy_cont">
        <article className="policy-main">
          <h1 style={{ position: "relative", top: "0vh", left: "0vw" }}>
            Our Code and Conducts
          </h1>
          <div className="policyText"></div>
        </article>
      </section>

      <div
        style={{
          position: "relative",
          top: "16vh",
          backgroundColor: "#01030e",
          height: "60vh",
          zIndex: "-2",
          overflow: "hidden",
        }}
      >
        <AbtFooter />
      </div>
    </main>
  );
};

export default Policy;
