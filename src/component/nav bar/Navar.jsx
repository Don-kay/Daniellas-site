import React from "react";
import { useEffect } from "react";
import { navigate } from "../../data component/data";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/daniellasLogo.png";
import "./Navar.css";
import {
  Nav_Cont,
  Detail_Kerry,
  Contact,
  Ctncont,
  Socials,
  Faceboook,
  Messenger,
  Instagram,
  Whatsapp,
  Info_cont,
  Info,
  Logo_icon,
  NavG,
  Portal_Btn,
  Page,
  Page_sub,
  Portal_Btn_link,
  Mobile,
  Hamburger,
  Closburger,
  Main_Map,
  SubCont,
  Navel,
  NavG1,
  Infos,
  FaMobiles,
  NewHamburger,
} from "../../Responsive/Responsive_Style";
import { useGlobalContext } from "../context/context";

const Navar = () => {
  const {
    closeSubMenu,
    openSidebar,
    closeSidebar,
    isSidebarOpen,
    DisplayDropDown,
    subitems,
    setSubitems,
  } = useGlobalContext();

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

  const closeBar = () => {
    setSubitems(null);
  };
  const Close = (e) => {
    if (!e.target.classList.contains("subCont")) {
      setSubitems(null);
    }
  };

  return (
    <Nav_Cont>
      <Detail_Kerry className="detailskerry">
        <Contact>
          <FaMobiles />
          <Ctncont>
            <Mobile className="mobile">08023438285</Mobile>
            <Mobile className="mobile">08137375628</Mobile>
          </Ctncont>
        </Contact>
        <Socials>
          <a
            href="https://www.facebook.com/Daniellasmontessorischool/"
            target={"_blank"}
            rel="noreferrer"
            className="href"
          >
            <Faceboook className="socio" />
          </a>
          <a
            href="https://m.me/daniellasmontessorischool"
            rel="noreferrer"
            target={"_blank"}
            className="href"
          >
            <Messenger className="socio" />
          </a>
          <a href="i.me" className="href">
            <Instagram className="socio" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+2348023438285"
            className="href"
            target={"_blank"}
            rel="noreferrer"
          >
            <Whatsapp className="socio" />
          </a>
        </Socials>
        <Info_cont>
          <Info>
            <span className="enquire">for enquiries:</span>
            <Infos href="mailto:daniellasmontessorischool@gmail.com">
              daniellasmontessorischool@gmail.com
            </Infos>
          </Info>
        </Info_cont>
      </Detail_Kerry>
      <section className="navsec  nav-sticky">
        <Link to={"/"}>
          <Logo_icon src={Logo} alt="logo1" />
        </Link>

        {/* <NewHamburger></NewHamburger> */}
        {isSidebarOpen ? (
          <Closburger className="hamburger" onClick={closeSidebar} />
        ) : (
          <Hamburger className="hamburger" onClick={openSidebar} />
        )}

        <NavG1>
          {navigate.map((navs) => {
            const { id, pages, address, link } = navs;
            return (
              <Main_Map>
                <NavG>
                  <Navel>
                    <BsFillCaretDownFill className="menu-icon" />
                    <Page onMouseOver={() => DisplayDropDown(id)}>
                      {pages}
                    </Page>{" "}
                    <Page_sub>{address}</Page_sub>
                  </Navel>
                  <SubCont onMouseLeave={closeBar}>
                    {link.map((links) => {
                      const { idx, label, url } = links;
                      return (
                        <section
                          className={
                            subitems === id ? "subMenu" : "subMenuAnimate"
                          }
                          onClick={closeBar}
                          key={idx}
                        >
                          <Link style={{ textDecoration: "none" }} to={url}>
                            <h3
                              key={id}
                              className={
                                subitems === id ? "dropdown" : "closeDisplay"
                              }
                            >
                              {label}
                            </h3>
                          </Link>
                        </section>
                      );
                    })}
                  </SubCont>
                </NavG>
              </Main_Map>
            );
          })}
        </NavG1>
        <Portal_Btn onMouseOver={closeSubMenu}>
          <Portal_Btn_link href="https://studentdashboard.daniellasmontessorischool.com.ng/student">
            Portal
          </Portal_Btn_link>
        </Portal_Btn>
        {/* <div className="shadowcont"></div>
        <div className="shadowcontfix"></div> */}
        {/* <div onMouseOver={closeSubMenu} className="shadowcontfix1"></div> */}
      </section>
    </Nav_Cont>
  );
};

export default Navar;
