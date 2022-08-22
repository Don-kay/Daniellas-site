import React from "react";
import { useState, useEffect, useRef } from "react";
import { navigate } from "../../data component/data";
import { BsFillCaretDownFill } from "react-icons/bs";
import Logo from "../../assets/daniellasLogo.png";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./Navar.css";
import { useGlobalContext } from "../context/context";

const Navar = () => {
  const { openSubMenu, closeSubMenu } = useGlobalContext();
  useEffect(() => {
    const navbar = document.querySelector(".navsec");
    const page = document.querySelector(".page");
    const menu = document.querySelector(".detailskerry");
    const sectionOneOptions = {
      // root: document.body,
      rootmargin: "0px 0px 200px 0px",
      // threshhold: 0,
    };
    //  const container = useRef.

    const sectionOneObserver = new IntersectionObserver(function (
      entries,
      Observer
    ) {
      entries.forEach((entry) => {
        // console.log(entry.target);
        if (!entry.isIntersecting) {
          navbar.classList.add("nav-sticky");
        } else {
          navbar.classList.remove("nav-sticky");
        }
      });
    },
    sectionOneOptions);
    sectionOneObserver.observe(menu);
  }, []);

  // window.onscroll = function () {
  //   if (window.pageYOffset >= navbar.offsetTop) {
  //     navbar.classList.add("nav-sticky");
  //   } else {
  //     navbar.classList.remove("nav-sticky");
  //   }
  // };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("page")) {
      closeSubMenu();
    }
  };
  const DisplayMenu = (e) => {
    const page = e.target.textContent;
    const object = e.target.getBoundingClientRect();
    // console.log(object);
    const center = (object.right + object.x) / 2;
    const bottom = object.bottom - 3;
    openSubMenu(page, { center, bottom });
  };
  return (
    <main className="navcont">
      <div className="detailskerry">
        <div className="socials">
          <a href="" className="href">
            <FaFacebookF className="socio" />
          </a>
          <a href="https://m.me/david.kerry.370" className="href">
            <FaFacebookMessenger className="socio" />
          </a>
          <a href="" className="href">
            <FaInstagram className="socio" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+23408052729364"
            className="href"
          >
            <FaWhatsapp className="socio" />
          </a>
        </div>
        <div className="infoCont">
          <h1 className="info">
            <span className="enquire">
              <h3>for enquiries:</h3>
            </span>
            <a href="mailto:dkrizlive@gmail.com" id="info">
              dkrizlive@gmail.com
            </a>
          </h1>
        </div>
      </div>
      <section onMouseOver={handleSubmenu} className="navsec  nav-sticky">
        <img src={Logo} alt="logo1" className="logo" />
        <button onMouseOver={closeSubMenu} className="portal">
          Portal
        </button>
        {navigate.map((navs, id) => {
          return (
            <nav className="navg">
              <ul className="shadowUl">
                <li key={id} className="navbar">
                  <div className="navel">
                    <BsFillCaretDownFill className="menu-icon" />
                    <h1 onMouseOver={DisplayMenu} key={id} className="page">
                      {navs.pages}
                    </h1>
                  </div>
                  <h5 className="page-sub">{navs.address}</h5>
                </li>
              </ul>
            </nav>
          );
        })}
        {/* <div className="shadowcont"></div>
        <div className="shadowcontfix"></div> */}
        {/* <div onMouseOver={closeSubMenu} className="shadowcontfix1"></div> */}
      </section>
    </main>
  );
};

export default Navar;
