import React from "react";
import { useState, useEffect } from "react";
import { watchTour, tourimage } from "../../data component/data";
import BookImg from "../../assets/book.png";
import {
  Rectangle,
  Circle,
  Ellipse,
  Line,
  Polyline,
  CornerBox,
  Triangle,
} from "react-shapes";
import ceoImage from "../../assets/IMG-20220723-WA0001.jpg";
import "./overview.css";

const Overview = () => {
  const [item, setItem] = useState(watchTour);
  const [tour, setTour] = useState(tourimage);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(0);

  const lastidx = tour.length - 1;
  useEffect(() => {
    if (animate < 0) {
      setAnimate(lastidx);
    }
    if (animate > lastidx) {
      setAnimate(0);
    }
    let animater = setInterval(() => {
      setAnimate(animate + 1);
    }, 5000);
    return () => clearInterval(animater);
  }, [animate, lastidx]);

  return (
    <>
      <section className="motto">
        <h1 style={{ position: "relative", top: "0vh", left: "0vw" }}>
          Our Watch Tower{" "}
        </h1>
        <div className="line"></div>
        <div className="book-img">
          <img src={BookImg} alt="book" className="book" />
        </div>
        <div className="shapessphere">
          <Ellipse
            rx={240}
            ry={240}
            fill={{ color: "#aa0909" }}
            stroke={{ color: "#E65243" }}
            strokeWidth={0}
          />
        </div>
        <div className="shapesspheresmall">
          <Ellipse
            rx={180}
            ry={180}
            fill={{ color: "#2409ba" }}
            stroke={{ color: "#E65243" }}
            strokeWidth={0}
          />
        </div>
        <div className="shapesspheresmall1">
          <Ellipse
            rx={45}
            ry={45}
            fill={{ color: "#eccd19" }}
            stroke={{ color: "#E65243" }}
            strokeWidth={0}
          />
        </div>
        <div className="shapeTrianglesmall">
          <Triangle
            width={150}
            height={150}
            fill={{ color: "#2409ba" }}
            stroke={{ color: "#E65243" }}
            strokeWidth={0}
          />
        </div>
        <div className="elitem">
          {item.map((items, id) => {
            const { logo, prgh, text } = items;
            let position = "diagLeft";
            if (id === index) {
              position = "upLeft";
            }
            if (id === index + 1) {
              position = "upRight";
            }
            if (id === index + 2) {
              // use array - 1 to target last item of a list, but + for a single list
              position = "bottomMid";
            }
            return (
              <section>
                <div key={id} className={`wtour ${position}`}>
                  <img className="tourLogo" src={logo} alt="img"></img>
                  <div>
                    <h4 className="header">{prgh}</h4>
                    {/* <p className="text">{text}</p> */}
                  </div>
                </div>
              </section>
            );
          })}
          <article className="tourimgcont">
            {tour.map((item, idx) => {
              let imageplace = "";

              if (idx === animate) {
                imageplace = "active";
              } //note,do not use thesame state to increment two or more elements

              return (
                <div>
                  <img
                    key={idx}
                    className={`tourimg ${imageplace}`}
                    src={item.img}
                    alt="logo"
                  ></img>
                </div>
              );
            })}
          </article>
        </div>
        <section className="sec2">
          <section id="wclmtext">
            <article className="textcontainer">
              <h1
                style={{
                  position: "relative",
                  top: "-40vh",
                  left: "13vw",
                  width: "120vw",
                  zIndex: "7",
                }}
              >
                {" "}
                Welcome to <span>Daniellas</span> Montessori school{" "}
              </h1>
              <p className="welcmtext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat delectus consectetur,
                <br /> quod ab doloribus minus, sint nesciunt sit rem itaque ut
                nulla, molestiae perferendis facilis necessitatibus facere
                doloremque inventore sapiente? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Repellat delectus consectetur,
                <br /> quod ab doloribus minus, sint nesciunt sit rem itaque ut
                nulla, molestiae perferendis facilis necessitatibus facere
                doloremque inventore sapiente? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Repellat delectus consectetur,
                <br /> quod ab doloribus minus, sint nesciunt sit rem itaque ut
                nulla, molestiae perferendis facilis necessitatibus facere
                doloremque inventore sapiente? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Repellat delectus consectetur,
                <br /> quod ab doloribus minus, sint nesciunt sit rem itaque ut
                nulla, molestiae perferendis facilis necessitatibus facere
                doloremque inventore sapiente? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Repellat delectus consectetur,
                <br /> quod ab doloribus minus, sint nesciunt sit rem itaque ut
                nulla, molestiae perferendis facilis necessitatibus facere
                doloremque inventore sapiente?
              </p>
              <div className="ceospeech">
                <div className="ceoCover">
                  <img src={ceoImage} alt="img" className="ceoimg" />
                </div>
              </div>
            </article>

            <img
              style={{
                width: "100vw",
                height: "150vh",
                position: "relative",
                top: "-140vh",
                filter: "opacity(0.3)",
                backgroundColor: "black",
                zIndex: "2",
              }}
              src="./IMG_20210712_103541_940.jpg"
              alt="img"
            ></img>
            <div className="overlay"></div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Overview;
