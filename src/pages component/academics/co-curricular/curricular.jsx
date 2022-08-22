import React, { useSyncExternalStore } from "react";
import Navar from "../../../component/nav bar/Navar";
import Submenu from "../../../component/sumenu/Submenu";
import curricularHero from "../../../assets/pexels-oleksandr-pidvalnyi-2781814.jpg";
import { pictures } from "../../../data component/data";
import SwiperCore from "swiper";
import AbtFooter from "../../../component/footer about/Abtfooter";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "./curricular.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Curricular = () => {
  // useEffect(() => {
  //   if (img < 0) {
  //     setImg(lastidx);
  //   }
  //   if (img > lastidx) {
  //     setImg(0);
  //   }
  //   let animater = setInterval(() => {
  //     setImg(img + 1);
  //   }, 5000);
  //   return () => clearInterval(animater);
  // }, [img, lastidx]);

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
            top: "25vh",
            left: "20vw",
            zIndex: 800,
            fontSize: "8ch",
            fontFamily: "oswald",
          }}
        >
          OUR CO-CURRICULAR ACTIVITIES
        </h1>
        <div className="kss2cont">
          <img src={curricularHero} alt="hero" className="curimages"></img>
        </div>
      </section>
      <div className="curImgheader">
        <img src="" alt="pix" className="curpix" />
      </div>

      <section className="kls2_contr">
        <article className="policy-main">
          <h1 style={{ position: "relative", top: "4vh", left: "0vw" }}>
            SKILL ACQUISITION
          </h1>
          <div className="curricularText">
            <h2 className="kghead">
              Every Child Deserves Access to Knowledge (ECDAK)
            </h2>
            <p>
              We run a variety of extra – curricular clubs during school hours
              and after school for children in Reception – Year 6. The choices
              of club changes termly and children have opportunity to sign up to
              a new club at the start of each term. We provide a range of clubs
              that will appeal to different children so that every child can
              find a club of interest. Our clubs include: Swimming, Taekwondo,
              Soccer, Chess, Scrabble, Dance, Basketball, Design Technology,
              Athletics, Table tennis, Cub scouts, Cheerleading, Drama, Lawn
              tennis, Gymnastics, Volleyball and Ballet. In order to provide the
              children with opportunities to attend inter – school competitions,
              we run clubs in cooperation with the AISEN calender.
              <ul>
                <li className="subjects">Math Club</li>
                <li className="subjects">Poetry Club</li>
                <li className="subjects">Engineering Club</li>
                <li className="subjects">Arts Club </li>
                <li className="subjects">Music Club</li>
                <li className="subjects">Art and Design</li>
                <li className="subjects">Music</li>
                <li className="subjects">Sports Club</li>
                <li className="subjects">Computer Technology</li>
              </ul>
            </p>

            {/* <h1 className="kghead1">
              Which subjects are taught in KS2 at Grange School? <br />
            </h1>
            <p>
              At Grange School, PSHE is also taught as a subject. Our PSHE
              (personal, social, health education) curriculum in KS2 is designed
              to teach children about staying safe, looking after themselves and
              living a healthy lifestyle. Grange School is a happy and healthy
              place to learn. We strive to promote, through topics and in lots
              of other ways, children’s personal, social, spiritual and
              emotional development. Although this is not a statutory subject,
              it is one included in the National Curriculum and our school makes
              provision for PSHE and E-Safety.{" "}
              <ul>
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li> History</li>
                <li>Geography</li>
                <li>Art and Design</li>
                <li>Music</li>
                <li>Physical and Health Education</li>
                <li>Computer Technology</li>
                <li>Enterpreneurship</li>
              </ul>
            </p>
            <h2 className="curriculum">
              How are children assessed in KS2?
              <p>
                At the end of every term, children’s abilities are formally
                assessed. The Rising Stars optional tests are also written at
                the end of the year to benchmark our children against National
                Standards. How well they do in these assessments is measured
                against the level/skills expected by the end of each year. At
                the end of Year 6 (when KS2 finishes) children take the
                Cambridge Primary Checkpoints exams
              </p>
            </h2>
            <h2 className="curriculum">
              Which tests are taken in KS2?
              <ul>
                <li> English grammar, punctuation and spelling</li>
                <li>English reading (reading and understanding text)</li>
                <li>Mathematics</li>
                <li>Science (Biology, Chemistry and Physics)</li>
              </ul>
            </h2> */}
          </div>
          <div className="subject">
            <h2
              style={{
                position: "relative",
                left: "2.8vw",
                top: "5vh",
                backgroundColor: "black",
                width: "12vw",
                height: "5vh",
                color: "white",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
              }}
            >
              Our Curriculum
            </h2>
            <ul className="subjectsCont">
              <li className="subjects">Introduction</li>
              <li className="subjects">SEN</li>
              <li className="subjects">Numeracy</li>
              <li className="subjects">Science</li>
              <li className="subjects"> History</li>
              <li className="subjects">Geography</li>
              <li className="subjects">Art</li>
              <li className="subjects">Music</li>
              <li className="subjects">Linguistics</li>
              <li className="subjects">Counselling</li>
              <li className="subjects">Physical and Health Education</li>
              <li className="subjects">Computing</li>
              <li className="subjects">Enterpreneurship</li>
            </ul>
          </div>
        </article>
      </section>

      <div
        style={{
          position: "relative",
          top: "90vh",
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

export default Curricular;
