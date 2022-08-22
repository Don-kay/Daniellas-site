import React, { useState } from "react";
import "./footer.css";
import { navigate } from "../../data component/data";
import { quickLinks } from "../../data component/data";
import ceo from "../../assets/img5.jpg";

const Footer = () => {
  const [footer, setFooter] = useState(navigate.slice(1));
  return (
    <>
      <section className="footer">
        <div className="newsletrr"></div>
        <div className="footer-nav">
          <h4 className="footertxt">
            <img src={ceo} alt="img" className="school-logo" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            culpa non ipsam magnam perferendis natus pariatur. Facere placeat
            commodi non assumenda. Nulla accusantium asperiores fugit <br />
            totam sed excepturi atque saepe?
          </h4>
          <div className="links">
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
                  <li>
                    <a>Monday to Friday (8:00am - 5:00 pm)</a>
                  </li>
                  <li>
                    <a>Saturday - Sunday (CLOSED)</a>
                  </li>
                </ul>
              </nav>
            </div>
            <h1 className="newsletter-header">
              Subscribe to our weekly NEWSLETTER
            </h1>
            <p className="sub-text">to recieve information</p>
            <form action="">
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

export default Footer;
