import React from "react";
import Navar from "../../component/nav bar/Navar";
import Submenu from "../../component/sumenu/Submenu";
import contactHero from "../../assets/pexels-olya-kobruseva-5428830.jpg";
import SwiperCore from "swiper";
import AbtFooter from "../../component/footer about/Abtfooter";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "./contact.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Contact = () => {
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
            backgroungColor: "black",
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
          CONTACT US
        </h1>
        <div className="contactcont">
          <img src={contactHero} alt="hero" className="cont-images"></img>
        </div>
      </section>

      <section className="kls2_cont">
        <article className="cntpolicy-main">
          <div className="contactText">
            <h1 className="cnthead1">Daniellas Montessori School, Lagos</h1>
            <p>Reggie Close, Abulegba, Lagos, Nigeria</p>
            <h2 className="cntcurriculum">
              Number
              <p>Mon to Fri 8am to 4pm</p>
            </h2>
            <h2 className="cntcurriculum  secnd">
              number
              <p>Reach out to us for any enquiry or query</p>
            </h2>
          </div>
          <form action="" className="cnctform">
            <input
              type="text"
              name="text"
              placeholder="your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="abc@email.com"
              required
            />
            <textarea
              className="textcnct"
              name=" message"
              rows="10"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" className="formbtn">
              Send Message
            </button>
          </form>
        </article>
      </section>

      <div
        style={{
          position: "relative",
          top: "0vh",
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

export default Contact;
