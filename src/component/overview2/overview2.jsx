import React from "react";
import { useState } from "react";
import { mooDetails } from "../../data component/data";
import { btnOption } from "../../data component/data";
import { ListDetails } from "../../data component/data";
import { FcPlanner, FcCollaboration } from "react-icons/fc";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaDiceD20 } from "react-icons/fa";
import { Link } from "react-router-dom";
import Scape from "../../assets/IMG_20220601_125650_773.jpg";
import ReactPaginate from "react-paginate";
// import ceoImage from "../../assets/img5.jpg";
import "./overview2.css";

const Overview2 = () => {
  const [list, SetList] = useState(ListDetails.slice(0, 5));
  const [pagenumber, setPagenumber] = useState(0);
  const listPerpage = 5;
  const pagesVisited = pagenumber * listPerpage;

  const displayList = list
    .slice(pagesVisited, pagesVisited + listPerpage)
    .map((list) => {
      return (
        <section className="event-cont">
          <div className="e-post">{list.icon}</div>
          <h4 className="e-map">{list.header}</h4>
        </section>
      );
    });

  const pageCount = Math.ceil(list.length / listPerpage);
  const changePage = ({ selected }) => {
    setPagenumber(selected);
  };
  // const { id, header, icon, children } = { mooDetails };
  return (
    <main className="dmsdetail">
      <section className="notice-board">
        <h1 className="notice-head">Get All Information About Our school</h1>
        <div className="line1"></div>
        <article className="notice-sec">
          <div className="notice-el">
            <h2 className="event-header">Current information in DMS</h2>
          </div>
          <div className="notice-event">
            {/* <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagin-btn"}
              previousLinkClassName={"prev-btn"}
              nextLinkClassName={"next-btn"}
              disabledClassName={"pagin-desbaled"}
              activeClassName={"pagin-active"}
            /> */}
            <h2 className="event-header">Latest Events</h2>
            <div className="event-main">{displayList} </div>
          </div>
        </article>
      </section>
      <section style={{ position: "relative", top: "20vh", zIndex: "20" }}>
        <div className="moo">
          <h2 className="moheader">
            Give your child the best Learning platform with <br />
            <span>Daniellas </span>Montessori School
          </h2>
          <sec className="moo-childcont">
            {mooDetails.map((item, id) => {
              return (
                <div key={id} className="moo-child">
                  <h2 className="moo-head">{item.header}</h2>
                  <div className="subchild">
                    {/* <div className="icon">{item.icon}</div> */}
                    <p id="children">{item.children}</p>
                  </div>
                </div>
              );
            })}
            <div className="icon-moo">
              <FaDiceD20 className="icon1" />
              <FcCollaboration className="icon2" />
              <FcPlanner className="icon3" />
              <BsFillMenuButtonWideFill className="icon4" />
            </div>
          </sec>
        </div>
        <div className="btn-sec">
          {btnOption.map((item, idx) => {
            const { icon, url, text } = item;
            return (
              <div className="btn-cont">
                {/* <div className="icon">{icon}</div> */}
                <Link to={url}>
                  <button key={idx} className="admission">
                    {text}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <div className="moo-overlay">
        <img src={Scape} alt="skul" className="scape" />
      </div>
    </main>
  );
};

export default Overview2;
