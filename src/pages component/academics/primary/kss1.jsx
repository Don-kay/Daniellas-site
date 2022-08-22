import React, { useSyncExternalStore } from "react";
import ks1Hero from "../../../assets/pexels-pixabay-256417.jpg";
import Submenu from "../../../component/sumenu/Submenu";
import { AboutHeroImg } from "../../../data component/data";
import { ks1pictures } from "../../../data component/data";
import SwiperCore from "swiper";
import AbtFooter from "../../../component/footer about/Abtfooter";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "./kss1.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Kss1 = () => {
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
          <img src={ks1Hero} alt="hero" className="images"></img>
        </div>
      </section>

      <section className="kls2_cont">
        <article className="policy-main">
          <h1 style={{ position: "relative", top: "0vh", left: "0vw" }}>
            KEYLEARNINGSTAGE 1
          </h1>
          <div className="kss1Text">
            <h2 className="kghead">What is KlS-1 (Key Learning Stage 1)?</h2>
            <p>
              Key Stage 1 is the legal term for the two years of schooling and
              it is normally known as Year 1 and Year 2, when pupils are aged
              between 5 and 7. At this stage, the teaching gradually becomes
              more formal than in Nursery. At Grange School, we believe
              education is about the development of the whole person. We know
              that KS1 is a crucial stage in a child’s school life. It is a time
              when good learning habits are developed, a love (or not!) of
              education is established and children begin to recognise their own
              strengths and weaknesses. We aim to provide a fun environment
              where children learn through first-hand experience and play, and
              start to take responsibility for their own learning. Children are
              still provided with plenty of opportunities for practical,
              hands-on learning. The curriculum is broad and enriched and there
              is a strong focus on teaching in ways that promote and account for
              the stage of development of each individual child. Each class has
              a highly-qualified teacher and a teaching assistant, supported by
              a team of specialists for Music, Nigerian Studies, Physical
              Education and Computing. The classrooms are cheerful, stimulating
              and welcome – an international school environment where children
              feel safe and secure to learn.
            </p>
            <h1 className="kghead1">KEY CHARACTERISTICS</h1>
            <p>
              <ul>
                <li className="kss1Li">
                  Year 1 and 2 pupils explore all the core subjects: Literacy,
                  Numeracy, Science, Geography, History, Art and Design, Music,
                  Physical Education, Computing, Design Technology, Library
                  Skills and Personal, Social Health Education.{" "}
                </li>
                <li className="kss1Li">
                  To help our children develop their language skills there is a
                  strong focus on speaking and interaction, with an emphasis on
                  role play to support topic and literacy lessons.
                </li>
                <li className="kss1Li">
                  All pupils receive Music and Drama lessons as part of the
                  curriculum. The Year 1 and 2 pupils stage a full theatre
                  production each year in our end of year Christmas Concert, and
                  all children are encouraged and supported to sing, dance and
                  act in regular assemblies and concerts.
                </li>
                <li className="kss1Li">
                  Children have high-quality Physical Education (PE) lessons
                  every week and co-curricular activities that rotate around
                  swimming, soccer, ballet, chess, dance and taekwondo over the
                  course of every term.
                </li>
                <li className="kss1Li">
                  {" "}
                  What students learn in the classroom is enhanced by trips
                  which are linked to the topics they are studying.
                </li>
                <li className="kss1Li">
                  Formal and informal assessment of each pupil’s level of
                  attainment takes place throughout the year to measure progress
                  and help identify the next steps in learning.
                </li>
              </ul>
            </p>
            <h2 className="kss1curriculum">
              BENEFITS TO OUR STUDENTS
              <p>
                <ul>
                  <li>
                    {" "}
                    The curriculum in Years 1 and 2 is designed to support each
                    pupil’s academic progress, encouraging every child to become
                    resourceful, creative and responsive learners
                  </li>
                  <li>
                    It also encourages pupils’ social and emotional development:
                    children find or build on their confidence and self-esteem
                  </li>
                  <li>
                    With the PSHE curriculum, pupils develop a greater awareness
                    and understanding of cultural, social and environmental
                    issues and how they can learn from each other’s similarities
                    and differences
                  </li>
                  <li>
                    The fact that teachers assess and monitor each pupil’s
                    progress over the course of the two years means that
                    learning experiences can be structured to ensure that each
                    child is being challenged, motivated and supported.
                  </li>
                </ul>
              </p>
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
          {ks1pictures.map((item, id) => {
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
          top: "149vh",
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

export default Kss1;
