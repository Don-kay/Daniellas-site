import React from "react";
import Navar from "../../../component/nav bar/Navar";
import Submenu from "../../../component/sumenu/Submenu";
import { WhyUsImg } from "../../../data component/data";
import Why from "../../../assets/pexels-olya-kobruseva-5428830.jpg";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useState } from "react";

import "../why us/why.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import FaqFooter from "../../../component/faqFooter/FaqFooter";
// import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const WhyUs = () => {
  const [image, setIamge] = useState(0);
  // textelement.classList.remove("textelemets");
  // void textelement.offsetHeight;

  // textelement.classList.add("textelemets");
  return (
    <main>
      <section>
        <Submenu />
        <h1
          style={{
            color: "black",
            width: "60vw",
            height: "3vh",
            position: "absolute",
            top: "40vh",
            left: "20vw",
            zIndex: 1020,
            fontSize: "8ch",
            fontFamily: "oswald",
          }}
        >
          Why Choose Us
        </h1>
        <div className="whyhero"></div>
        <div className="slidecontwhy">
          <img src={Why} alt="hero" className="imageswhy"></img>
        </div>
      </section>

      <section className="policy_cont">
        <article className="policy-main">
          <h1 style={{ position: "relative", top: "0vh", left: "0vw" }}>
            Our Code and Conducts
          </h1>
          <div className="whyText"></div>
          <h2 style={{ position: "relative", top: "2vh", height: "0vh" }}>
            We educate pupils on several <br /> curricular activities and games
            in order to bring out their talents
          </h2>

          <div className="whyevent">
            {WhyUsImg.map((img, ids) => {
              let position = "";
              if (ids === image + 3) {
                position = "style";
              }
              return (
                <div className="whycontents">
                  <div className="whyimgcont">
                    <img
                      key={ids}
                      src={img.img}
                      alt="why"
                      className={`whyimG ${position}`}
                    />
                  </div>

                  <h2 className="whyHead">{img.header}</h2>
                </div>
              );
            })}
          </div>
        </article>
      </section>

      <div
        style={{
          position: "relative",
          top: "122vh",
          backgroundColor: "#01030e",
          height: "60vh",
          zIndex: "-2",
          overflow: "hidden",
        }}
      >
        <FaqFooter />
      </div>
    </main>
  );
};

export default WhyUs;
