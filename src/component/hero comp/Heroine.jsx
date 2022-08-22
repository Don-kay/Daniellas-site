import React from "react";
import { useState, useEffect } from "react";
import { HeroImg } from "../../data component/data";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useGlobalContext } from "../context/context";

// import "animate.css";
// import Hero1 from "../../assets/hero1.jpg";
// import Hero2 from "../../assets/hero2.jpg";
import "./Hero.css";

const Heroine = () => {
  const { closeSubMenu } = useGlobalContext;
  let eL = document.getElementById("textanimate");

  const [img, setImg] = useState(HeroImg);
  const [index, setIndex] = useState(0);
  const [style, sestStyle] = useState(0);
  // const [showbtnL, setShowbtnL] = useState(true);
  // const [showbtnR, setShowbtnR] = useState(true);
  const lastIdx = img.length - 1;

  useEffect(() => {
    if (index <= 0) {
      setIndex(0);
      //   // setShowbtnL(false);
      // } else {
      //   setShowbtnL(true);
    }

    if (index > lastIdx) {
      setIndex(0);
      //   setShowbtnR(false);
      // } else {
      //   setShowbtnR(true);
    }
    return () => {};
  }, [index, lastIdx]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 6000);
    // setText(true);
    return () => clearInterval(slider);
  }, [index]);

  const restart = () => {
    setTimeout(() => {
      eL.classList.remove("textanim");
      void eL.offsetHeight;
      eL.classList.add("textanim");
    }, 1000);
  };

  const prev = () => {
    let newId = index - 1;
    setIndex(newId);
  };

  const next = () => {
    let newId = index + 1;
    setIndex(newId);
  };

  return (
    <main>
      <section className="container">
        <div onClick={() => prev()} className="arrowL">
          <BsChevronLeft className="arrowLitem" />
        </div>
        <div onClick={() => next()} className="arrowR">
          <BsChevronRight className="arrowRitem" />
        </div>
        <div className="hero-slide">
          {img.map((hero, heroIdx) => {
            // const { image, id } = hero;
            let styles = "";
            let position = "";
            if (heroIdx === index) {
              position = "activeSlide";
            }
            // if (heroIdx === index + 1) {
            // }
            // if (
            //   heroIdx === index - 1 ||
            //   (heroIdx === 0 && heroIdx === HeroImg.length - 1)
            // ) {
            //   position = "prevSlide";
            // }

            if (heroIdx === HeroImg.length - 1) {
              styles = "heroLast";
            }
            if (heroIdx === 0) {
              styles = "firstHero";
            }
            // if (heroIdx < index) {
            //   position = "prevSlide";
            // }
            return (
              <div key={heroIdx} className={`heroes ${position}`}>
                <img
                  onMouseOver={closeSubMenu}
                  className={`hero ${styles}`}
                  src={hero.Image}
                  alt="her"
                ></img>
                <div className="heroLay"></div>
              </div>
            );
          })}
        </div>
        <div>
          {img.map((text, idx) => {
            let animation = "animatePrev";
            if (idx === index) {
              animation = "animateActive";
            }
            return (
              <div key={idx} className={`textanim ${animation}`}>
                <h1 className="text">{text.text}</h1>
                <p className="smallparam">{text.brief}</p>
                <button className="hero-text">{text.actionbtn}</button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Heroine;
