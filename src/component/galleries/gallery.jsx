import React from "react";
import { useState, useEffect } from "react";
import "./gallery.css";
import { utils } from "../../data component/data";
import { gallerySlides } from "../../data component/data";
import SwiperCore from "swiper";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from "swiper";
import assureImg from "../../assets/illusr 1 .jpeg";
// , Scrollbar, A11y, Navigation,
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import 'swiper/css/scrollbar';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Gallery = () => {
  const [imgidx, setImgidx] = useState(0);
  const [imgHover, setImgHover] = useState(0);
  const [imgHover1, setImgHover1] = useState(0);
  const [imgHover2, setImgHover2] = useState(0);
  const [utility, setUtility] = useState({
    firstcard: utils[0],
    secondcard: utils[1],
    thirdcard: utils[2],
  });
  const {
    firstcard: { id, img, header, text },
    secondcard: { id1, img1, header1, text1 },
    thirdcard: { id2, img2, header2, text2 },
  } = utility;

  const imageChange = () => {
    setImgHover(1);
  };
  const original = () => {
    setImgHover(0);
  };
  const imageChange1 = () => {
    setImgHover1(1);
  };
  const original1 = () => {
    setImgHover1(0);
  };
  const imageChange2 = () => {
    setImgHover2(1);
  };
  const original2 = () => {
    setImgHover2(0);
  };

  return (
    //tour section
    <main className="utils-main">
      <section className="utilscont">
        <h1
          style={{
            position: "relative",
          }}
        >
          A Tour into our Verse
        </h1>
        <div className="utils">
          <div
            key={id}
            onMouseOver={() => imageChange()}
            onMouseLeave={() => original()}
            className="cardcont"
          >
            {img.map((items, idx) => {
              let position = "";
              if (idx === imgHover) {
                position = "actvhov";
              }
              return (
                <img
                  key={idx}
                  onMouseOver={() => imageChange()}
                  onMouseLeave={() => original()}
                  // className={`utilsimg ${position}`}
                  className={`utilsimg ${position}`}
                  src={items.img1}
                  alt="img"
                />
              );
            })}
            <aside className="textcont">
              <h2 className="utilsheader">{header}</h2>
              <p className="utilstext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Est eaque, nesciunt deleniti voluptatum, atque <br />{" "}
                perspiciatis laudantium architecto
              </p>
              <Link to={"/facilities"}>
                <button className="utilsbtn">view Gallery</button>
              </Link>
            </aside>
          </div>
          <div
            key={id1}
            onMouseOver={() => imageChange1()}
            onMouseLeave={() => original1()}
            className="cardcont"
          >
            {img1.map((items, idx) => {
              let position = "";
              if (idx === imgHover1) {
                position = "actvhov";
              }
              return (
                <img
                  key={idx}
                  onMouseOver={() => imageChange1()}
                  onMouseLeave={() => original1()}
                  // className={`utilsimg ${position}`}
                  className={`utilsimg1 ${position}`}
                  src={items.img1}
                  alt="img"
                />
              );
            })}
            <aside className="textcont">
              <h2 className="utilsheader">{header1}</h2>
              <p className="utilstext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Est eaque, nesciunt deleniti voluptatum, atque <br />{" "}
                perspiciatis laudantium architecto
              </p>
              <Link to={"events"}>
                <button className="utilsbtn">view Gallery</button>
              </Link>
            </aside>
          </div>

          <div
            key={id2}
            onMouseOver={() => imageChange2()}
            onMouseLeave={() => original2()}
            className="cardcont"
          >
            {img2.map((items, idx) => {
              let position = "";
              if (idx === imgHover2) {
                position = "actvhov";
              }
              if (idx === 0) {
                position = "act1";
              }
              return (
                <img
                  key={idx}
                  onMouseOver={() => imageChange2()}
                  onMouseLeave={() => original2()}
                  // className={`utilsimg ${position}`}
                  className={`utilsimg2 ${position}`}
                  src={items.img1}
                  alt="img"
                />
              );
            })}
            <aside className="textcont">
              <h2 className="utilsheader">{header2}</h2>
              <p className="utilstext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Est eaque, nesciunt deleniti voluptatum, atque <br />{" "}
                perspiciatis laudantium architecto
              </p>
              <Link to={"skills"}>
                <button className="utilsbtn">view Gallery</button>
              </Link>
            </aside>
          </div>
        </div>
        <div className="assuranceCont">
          <img src={assureImg} alt="img" className="assurance" />
          <h2 className="assuranceText">
            Our various categories of events and programs, <br /> facilitates
            the productivity of our student.
          </h2>
        </div>

        {/* <div className="cardcont">
          <img
            key={id1}
            onMouseOver={() => imageChange()}
            onMouseLeave={() => original()}
            // className={`utilsimg ${position}`}
            className="utilsimg"
            src={img1[0]}
            alt="img"
          />
          <aside className="textcont">
            <h2 className="">{header1}</h2>
            <p>{text1}</p>
          </aside>
        </div> */}
      </section>

      <section className="gallerySlides">
        <h1 className="slide-head">Skills Development and Events</h1>
        <Swiper
          className="slidercont"
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {gallerySlides.map((item, id) => {
            let position = "";
            return (
              <SwiperSlide key={id} className={`galleries ${position}`}>
                <div className="gallerycontent">
                  <div className="imagsCont">
                    <img src={item.img} alt="img" className="imags" />
                  </div>

                  <h2 className="galleries-head">{item.header}</h2>
                  <h4 className="galleries-text">{item.text}</h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
};

export default Gallery;
