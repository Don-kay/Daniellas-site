import React from "react";
import { useState } from "react";
import Submenu from "../../../component/sumenu/Submenu";
import AboutHeroImg from "../../../assets/IMG-20220723-WA0026.jpg";
import SwiperCore from "swiper";
import image from "../../../assets/TEE_6966.jpg";
import AbtFooter from "../../../component/footer about/Abtfooter";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGlobalContext } from "../../../component/context/context";
import "../aboutus/about.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const About = () => {
  const {
    displayMission,
    displayVision,
    displayValues,
    openDisplaymission,
    openDisplayvision,
    openDisplayvalues,
  } = useGlobalContext();
  let textelement = document.getElementById("texters");

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
            top: "55vh",
            left: "20vw",
            zIndex: 10,
            fontSize: "8ch",

            color: "white",
          }}
        >
          About Us
        </h1>
        <article className="abtslidecont">
          <img src={AboutHeroImg} alt="hero" className="image"></img>
        </article>
      </section>

      <section className="coreCont">
        <article className="coreart">
          <div onMouseOver={openDisplayvision} className="coreEL">
            <h2 style={{ cursor: "default" }}>Our Vision</h2>
          </div>
          <div onMouseOver={openDisplaymission} className="coreEL1">
            <h2 style={{ cursor: "default" }}>Our Mission</h2>
          </div>
          <div onMouseOver={openDisplayvalues} className="coreEL2">
            <h2 style={{ cursor: "default" }}>Our Core Values</h2>
          </div>
        </article>
      </section>
      <div className="visionText">
        <p className="vision">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          placeat quod. Dolore voluptates nostrum sunt consequatur quam iusto
          libero soluta illo ma Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minus, placeat quod. Dolore voluptates nostrum sunt
          consequatur quam iusto libero soluta illo ma
        </p>
      </div>
      <div className={displayMission ? "visionText1-new" : position}>
        <p className="vision">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          placeat quod. Dolore voluptates nostrum sunt consequatur quam iusto
          libero soluta illo ma Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minus, placeat quod. Dolore voluptates nostrum sunt
          consequatur quam iusto libero soluta illo ma
        </p>
      </div>
      <div className={displayValues ? "visionText2-new" : "visionText2"}>
        <p className="vision">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          placeat quod. Dolore voluptates nostrum sunt consequatur quam iusto
          libero soluta illo ma Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minus, placeat quod. Dolore voluptates nostrum sunt
          consequatur quam iusto libero soluta illo ma
        </p>
      </div>

      <section className="article_cont">
        <article className="article-main">
          <h1 style={{ position: "relative", top: "18vh" }}>
            MEET THE PROPRIETOR
          </h1>
          <div className="articleText">
            <h2 className="headers">
              CEO AND FOUNDER <br /> DANIELLAS MONTESORRI SCHOOL
            </h2>
            <p className="a-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptatibus accusamus adipisci officia saepe veritatis corrupti
              omnis aliquid consequatur <br />
              aspernatur error sit delectus, labore totam ut, maiores nesciunt
              consequuntur voluptates. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vel voluptatibus accusamus adipisci officia
              saepe veritatis corrupti omnis aliquid consequatur <br />
              aspernatur error sit delectus, labore totam ut, maiores nesciunt
              consequuntur voluptates. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vel voluptatibus accusamus adipisci officia
              saepe veritatis corrupti omnis aliquid consequatur <br />
              aspernatur error sit delectus, labore totam ut, maiores nesciunt
              consequuntur voluptates. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vel voluptatibus accusamus adipisci officia
              saepe veritatis corrupti omnis aliquid consequatur <br />
              <div className="abtimgCont">
                <img src={image} alt="imager" className="article-img" />
              </div>
            </p>
          </div>
        </article>
      </section>

      <div
        style={{
          position: "relative",
          top: "72vh",
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

export default About;
