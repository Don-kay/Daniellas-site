import React from "react";
import Navar from "../../../component/nav bar/Navar";
import Submenu from "../../../component/sumenu/Submenu";
import { gallerySlides } from "../../../data component/data";
import { Faqs } from "../../../data component/data";
import faqHero from "../../../assets/pexels-olya-kobruseva-5428830.jpg";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import "../faqs/faqs.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useState } from "react";
import FaqFooter from "../../../component/faqFooter/FaqFooter";
// import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const Toggle = (idx) => {
    if (clicked === idx) {
      return setClicked(null);
    }
    setClicked(idx);
  };
  // textelement.classList.remove("textelemets");
  // void textelement.offsetHeight;

  // textelement.classList.add("textelemets");
  return (
    <main>
      <section>
        <Submenu />
        {/* <h1
          style={{
            backgroungColor: "black",
            width: "60vw",
            height: "3vh",
            position: "absolute",
            top: "65vh",
            left: "20vw",
            zIndex: 1020,
            fontSize: "8ch",
            fontFamily: "oswald",
          }}
        >
          Policy
        </h1> */}

        <div className="slidecontwhy">
          <img src={faqHero} alt="hero" className="images"></img>
        </div>
      </section>

      <section className="policy_cont">
        <div className="policy-main">
          <h1 style={{ position: "relative", top: "-10vh", left: "0vw" }}>
            Need to know more about <br />{" "}
            <span>Daniellas Montessori School </span>
          </h1>
        </div>
        <article className="accordion">
          <div className="faqText">
            {Faqs.map((faq, idx) => {
              const { text, brief } = faq;
              return (
                <main className="questions">
                  <div onClick={() => Toggle(idx)} className="question-main">
                    <p className="question">{text}</p>
                    {clicked === idx ? (
                      <BsArrowLeft
                        style={{
                          position: "relative",
                          left: "-15px",
                          height: "5vh",
                          width: "20px",
                          transition: "500ms ease all",
                        }}
                      />
                    ) : (
                      <BsArrowRight
                        style={{
                          position: "relative",
                          left: "-15px",
                          height: "5vh",
                          width: "20px",
                          transition: "500ms ease all",
                        }}
                      />
                    )}
                  </div>

                  {/* <h3 className="answer-main">{brief}</h3> */}
                  <div
                    className={
                      clicked === idx ? "answer-main" : "answer-main-close"
                    }
                  >
                    <h3 className="brief">{brief}</h3>
                  </div>
                </main>
              );
            })}
          </div>
        </article>
      </section>

      <div
        style={{
          position: "relative",
          top: "10vh",
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

export default Faq;
