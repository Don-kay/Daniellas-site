import React, { useState } from "react";
import "./FaqFooter.css";
import { navigate } from "../../data component/data";
import { quickLinks } from "../../data component/data";
import ceo from "../../assets/img5.jpg";

const FaqFooter = () => {
  const [footer, setFooter] = useState(navigate.slice(1));
  return (
    <>
      <section className="footers">
        <div className="footer-navs">
          <div className="newsletrr"></div>
          <div className="footertxts">
            <img src={ceo} alt="img" className="school-logo" />
            <h4 className="foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis culpa non ipsam magnam perferendis natus pariatur.
              Facere placeat commodi non assumenda. Nulla accusantium asperiores
              fugit <br />
              totam sed excepturi atque saepe?
            </h4>
          </div>
          <div className="link">
            <div className="quick-links">
              <h1 className="linkhead">More pages</h1>
              {footer.map((item, id) => {
                return (
                  <nav className="nav">
                    <ul>
                      <li>
                        <a href="#">{item.pages}</a>
                      </li>
                    </ul>
                  </nav>
                );
              })}
            </div>
            <div className="quick-links">
              <h1 className="linkhead">Quick links</h1>
              {quickLinks.map((item, id) => {
                return (
                  <nav className="nav">
                    <ul>
                      <li>
                        <a key={id} href="#">
                          {item.pages}
                        </a>
                      </li>
                    </ul>
                  </nav>
                );
              })}
            </div>
            <div className="quick-links">
              <h1 className="linkhead">Opening hours</h1>
              <nav className="nav">
                <ul>
                  <li>Monday to Friday (8:00am - 5:00 pm)</li>
                  <li>Saturday - Sunday (CLOSED)</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="newsletters">
            <h1 className="newsheader">
              Subscribe to our weekly NEWSLETTER{" "}
              <span id="last">to recieve information</span>
            </h1>
            <form className="contform" action="">
              <label htmlFor="">
                <input
                  type="email"
                  name="email"
                  placeholder="abc@email.com"
                  required
                />
                <button className="letter">Suscribe</button>
              </label>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqFooter;
