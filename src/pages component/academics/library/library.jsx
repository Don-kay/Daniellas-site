import React from "react";
import Submenu from "../../../component/sumenu/Submenu";
import LibHero from "../../../assets/pexels-tiana-2898170.jpg";
import { libpictures } from "../../../data component/data";
import SwiperCore from "swiper";
import AbtFooter from "../../../component/footer about/Abtfooter";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useState } from "react";
import "./library.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Library = () => {
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
          LIBRARY
        </h1>
        <div className="kss2cont1">
          <img src={LibHero} alt="hero" className="libimages"></img>
        </div>
      </section>

      <section className="kls2_cont1">
        <h1 style={{ position: "relative", top: "0vh", left: "0vw" }}>
          THE KNOWLEDGE SPACE
        </h1>
        <div className="libpicturesCont">
          {libpictures.map((item, id) => {
            return (
              <img key={id} src={item.img} alt="pix" className="librarypix" />
            );
          })}
        </div>
        <div className="libraryText">
          <h2 className="kghead">Daniellas Library</h2>
          <p>
            In our library, we provide resources and services in a variety of
            media to meet the needs of individuals and groups for education,
            information and personal development including research and leisure.
            Use our library software to stay connected with library news and
            access our digital resources all the time.
          </p>
          <h1 className="kghead1">Hours Open</h1>
          <p>Monday – Friday: 8.00am – 3.30pm (School Days only)</p>
          <h2 className="curriculum">
            General Information
            <p>
              Borrow digital content (like ebooks and audiobooks) anytime,
              anywhere on:
            </p>
          </h2>
        </div>
      </section>

      <div
        style={{
          position: "relative",
          top: "30vh",
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

export default Library;
