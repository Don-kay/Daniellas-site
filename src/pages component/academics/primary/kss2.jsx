import React, { useSyncExternalStore } from "react";
import Submenu from "../../../component/sumenu/Submenu";
import HeroImg from "../../../assets/pexels-pixabay-256417.jpg";
import { ks2pictures } from "../../../data component/data";
import SwiperCore from "swiper";
import AbtFooter from "../../../component/footer about/Abtfooter";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useState } from "react";
import "./kss2.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Kss2 = () => {
  const [img, setImg] = useState(0);
  // textelement.classList.remove("textelemets");
  // void textelement.offsetHeight;

  // textelement.classList.add("textelemets");
  return (
    <main>
      <section>
        <Submenu />
        <h1
          style={{
            color: "indigo",
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
          DANIELLAS MONTESSORI PRIMARY - KSS-2
        </h1>
        <div className="kss2cont">
          <img src={HeroImg} alt="hero" className="images"></img>
        </div>
      </section>

      <section className="kls2_cont">
        <article className="policy-main">
          <h1 style={{ position: "relative", top: "0vh", left: "0vw" }}>
            KEYLEARNINGSTAGE 2
          </h1>
          <div className="kgText">
            <h2 className="kghead">What is KlS-2 (Key Learning Stage 2)?</h2>
            <p>
              Key Stage 2 (KS2) is the key stage taught in Years 3 to 6, when
              children are between 7 and 11 years-old. The English National
              Curriculum informs schools what subjects to teach and it tells
              teachers which topics to cover and at what level. As well as
              subjects and topics, the National Curriculum also sets out how KS2
              pupils should be tested or assessed and the level they should
              achieve.
            </p>
            <h1 className="kss1head1">
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
                <li className="kss1li">English</li>
                <li className="kss1li">Mathematics</li>
                <li className="kss1li">Science</li>
                <li className="kss1li"> History</li>
                <li className="kss1li">Geography</li>
                <li className="kss1li">Art and Design</li>
                <li className="kss1li">Music</li>
                <li className="kss1li">Physical and Health Education</li>
                <li className="kss1li">Computer Technology</li>
                <li className="kss1li">Enterpreneurship</li>
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
            </h2>
          </div>
          <div className="subject">
            <h2
              style={{
                position: "relative",
                left: "2.7vw",
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
        <div className="picturesCont">
          {ks2pictures.map((item, id) => {
            let position = "";
            if (img === id) {
              position = "pixheader";
            }
            if (id === img + 1) {
              position = "pixheader1";
            }
            return (
              <div className="pictures">
                <img
                  key={id}
                  src={item.img}
                  alt="pix"
                  className={`pix ${position}`}
                />
              </div>
            );
          })}
        </div>
      </section>

      <div
        style={{
          position: "relative",
          top: "132vh",
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

export default Kss2;
