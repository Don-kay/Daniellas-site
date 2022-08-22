import React from "react";
import Submenu from "../../../component/sumenu/Submenu";
import Hero from "../../../assets/IMG_1514.jpg";
import { pictures } from "../../../data component/data";
import SwiperCore from "swiper";
import AbtFooter from "../../../component/footer about/Abtfooter";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useState } from "react";

import "./kg.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Kg = () => {
  const [idx, setIdx] = useState(0);

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
            top: "65vh",
            left: "20vw",
            zIndex: 800,
            fontSize: "8ch",
            fontFamily: "oswald",
          }}
        >
          DANIELLAS MONTESSORI KG PLAYGROUP
        </h1>
        <div className="slidecont">
          <img src={Hero} alt="hero" className="imageskg"></img>
        </div>
      </section>

      <section className="kgs_cont">
        <article className="policys-main">
          <h1 style={{ position: "relative", top: "0vh", left: "0vw" }}>
            Foundational Stage
          </h1>
          <div
            style={{
              backgroundColor: "red",
              height: "3px",
              width: "7vw",
              position: "relative",
              top: "-2vh",
              left: "33vw",
            }}
          ></div>
          <div className="kg1sText">
            <h2 className="kghead">The Early Stage</h2>
            <p>
              At Grange School, the Early Years Foundation Stage (EYFS)
              framework is adopted, which supports an integrated approach to
              early learning and care. It gives all our teachers a set of common
              principles and commitments to deliver quality early education and
              childcare experiences to all children. As well as being the core
              document for our teachers working in the foundation years, the
              EYFS framework gives parents the confidence that the same
              statutory commitments and principles will underpin their child’s
              learning and development experience.
            </p>
            <h1 className="kghead1">
              OUR CURRICULUM <br />
              <span> Our curriculum is based on the four themes:</span>
            </h1>
            <h2 className="curriculumkg">
              {" "}
              A. UNIQUE CHILD <br />{" "}
              <p>
                Every child is a unique child, who is constantly learning and
                can be resilient, capable, confident and self-assured. Our Early
                Years foundation teachers understand and observe each child’s
                development and learning, assess individual progress and then
                use the information to plan for next steps or support the child
                to develop a positive sense of own identity and culture, while
                also identifying any need for additional support.
              </p>{" "}
            </h2>
            <h2 className="curriculumkg">
              B. POSITIVE RELATIONSHIPS <br />{" "}
              <p>
                Our children learn to be strong and independent through Positive
                relationships. These are relationships that are:
              </p>
              <ul>
                <li>warm and loving and foster a sense of belonging</li>
                <li>
                  sensitive and responsive to the child’s needs, feelings and
                  interests.
                </li>
                <li>supportive of the child’s own efforts and independence.</li>
                <li> consistent in setting clear boundaries</li>
                <li>
                  {" "}
                  stimulating, built on key person relationships in early years
                </li>
              </ul>
            </h2>
            <h2 className="curriculumkg">
              C. ENABLING ENVIRONMENT <br />
              <p>
                Grange school children learn and develop well in enabling
                environments, in which their experiences respond to their
                individual needs and there is a strong partnership between the
                teachers and parents.{" "}
              </p>
              <ul>
                <li>Enabling Environment </li>
                <li>value all people , value learning Offers</li>
                <li>
                  {" "}
                  We use stimulating resources, relevant to all the children’s
                  cultures and communities{" "}
                </li>
                <li>
                  rich learning opportunities through play and playful teaching
                </li>
                <li>support for children to take risks and explore</li>
              </ul>
            </h2>
            <h2 className="curriculumkg">
              D. LEARNING AND DEVELOPMENT
              <br />
              <p>
                {" "}
                Children develop and learn in different ways. Grange School
                adopted the EYFS framework, which covers the education and care
                of all children in Reception. As teachers, we teach children by
                ensuring challenging, playful opportunities across the Prime and
                Specific areas of learning and development. They foster the
                characteristics of effective early learning
              </p>
              <ul>
                <li> Playing and exploring</li>
                <li>Active learning</li>
                <li>
                  Creating and thinking critically Our process of effective
                  Learning connects the “Prime and Specific Areas” of Learning
                  and Development.
                </li>
                <li>
                  Prime Areas This begins to develop quickly in response to
                  relationships and experiences, and runs through, and supports,
                  learning in all other areas.
                </li>
              </ul>
            </h2>

            <h2 className="curriculumkg">
              Prime Areas <br />{" "}
              <p>
                This begins to develop quickly in response to relationships and
                experiences, and runs through, and supports, learning in all
                other areas.
              </p>{" "}
              <ul>
                <li>Personal, Social and Emotional Development</li>
                <li>Communication and Language</li>
                <li>Physical Development</li>
              </ul>
            </h2>

            <h2 className="curriculumkg">
              Specific Areas <br />{" "}
              <p>
                This includes essential skills and knowledge for our children to
                participate successfully in society.
              </p>{" "}
              <ul>
                <li>Literacy</li>
                <li> Mathematics</li>
                <li>Understanding the World</li>
                <li>Expressive Arts and Design</li>
                <li></li>
              </ul>
            </h2>

            <h2 className="curriculumkg">
              How we learn…
              <br />
              <p>
                Adult led activities-differentiated to support and challenge
                individual needs.
              </p>{" "}
              <ul>
                <li>
                  Opportunities for child initiated learning in all areas of
                  learning
                </li>
                <li> Group work</li>
                <li> Partner work</li>
                <li>Expressive Arts and Design</li>
                <li>Wow Days</li>
              </ul>
            </h2>

            <h2 className="curriculumkg">
              Specific Areas <br />{" "}
              <p>
                This includes essential skills and knowledge for our children to
                participate successfully in society.
              </p>{" "}
              <ul>
                <li>Literacy</li>
                <li> Mathematics</li>
                <li>Understanding the World</li>
                <li>Expressive Arts and Design</li>
                <li>School trips </li>
                <li>School visitors </li>
                <li>Outdoor learning area</li>
              </ul>
            </h2>
          </div>
        </article>
        <div className="kgpicturesCont">
          {pictures.map((item, id) => {
            let position = "";
            if (id === idx + 2) {
              position = "kidsImg";
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
          top: "255vh",
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

export default Kg;
