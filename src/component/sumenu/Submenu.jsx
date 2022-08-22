import React from "react";
import { useGlobalContext } from "../context/context";
import "./submenu.css";
import { useRef, useEffect, useState } from "react";

const Submenu = () => {
  // const [newlinks, setNewlinks] = useState({});
  const {
    closeSubMenu,
    isSubmenuOpen,
    location,
    page: { pages, link },
  } = useGlobalContext();

  const Container = useRef(null);
  useEffect(() => {
    // const sublinks = navigate.filter((items) => items.link === links);
    // setNewlinks(sublinks);
    const submenu = Container.current;
    const { center, bottom } = location;
    const newposition = center + -192;
    const newBottom = bottom + 4.8;
    submenu.style.left = `${newposition}px`;
    submenu.style.top = `${newBottom}px`;
    // submenu.style.left = `${Xaxis}px`;
  }, [location, link]);

  // useEffect(() => {
  //   const subMenu = document.querySelector(".submenu");
  //   // const page = document.querySelector(".page");
  //   // const menu = document.querySelector(".detailskerry");
  //   const sectionOneOptions = {
  //     // root: document.body,
  //     // rootmargin: "0px 0px 200px 0px",
  //     // threshhold: 0,
  //   };
  //   //  const container = useRef.

  //   const sectionOneObserver = new IntersectionObserver(function (
  //     entries,
  //     Observer
  //   ) {
  //     entries.forEach((entry) => {
  //       // console.log(entry.target);
  //       if (!entry.isIntersecting) {
  //         subMenu.classList.add("submenu");
  //       } else {
  //         subMenu.classList.remove("submenufix");
  //       }
  //     });
  //   },
  //   sectionOneOptions);
  //   sectionOneObserver.observe(subMenu);
  // }, []);

  return (
    <aside
      className={isSubmenuOpen ? "submenu  subMenufix" : "close-submenu"}
      ref={Container}
      onMouseLeave={closeSubMenu}
    >
      <h4 className="menupage">{pages}</h4>
      <div className="submenucolumn col-2">
        {link?.map((item, id) => {
          const { label, url } = item;
          return (
            <a className="submenuref" href={url} key={id}>
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
