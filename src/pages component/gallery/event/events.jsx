import React from "react";
import Submenu from "../../../component/sumenu/Submenu";
import EventImg from "../../../assets/TEE_6689.jpg";
import { EventsImg } from "../../../data component/data";
import AbtFooter from "../../../component/footer about/Abtfooter";
import { useState } from "react";
import { useGlobalContext } from "../../../component/context/context";
import { AiOutlineRollback } from "react-icons/ai";
import "./events.css";

const Events = () => {
  const { closeNavbar, openNavbar } = useGlobalContext();
  const [img, setImg] = useState({ id: "", images: "", header: "" });
  const [modal, setModal] = useState(false);

  const newImages = (...items) => {
    setImg({
      id: items[0],
      images: items[1],
      header: items[2],
    });
    setModal(true);
    closeNavbar();
  };
  const closeImages = () => {
    setModal(false);
    openNavbar();
  };

  return (
    <main className="abcd">
      <section key={img.id} className={modal ? "eventimg" : "null"}>
        <p
          style={{
            color: "white",
            filter: "opacity(0.8)",
            position: "relative",
            right: "-90vw",
            top: "1vh",
          }}
        >
          back
        </p>
        <img src={img.images} alt="" className="eventimages" />
        <h2 className="eventheader">{img.header}</h2>

        <AiOutlineRollback onClick={closeImages} className="aicon" />
      </section>
      {modal ? null : (
        <article className="abc">
          <section>
            <Submenu />
            <h1
              style={{
                backgroungColor: "black",
                width: "60vw",
                height: "3vh",
                position: "absolute",
                top: "25vh",
                left: "20vw",
                zIndex: 800,
                fontSize: "6ch",
                // fontFamily: "oswald",
              }}
            >
              DMS EVENTS
            </h1>
            <div className="kss2cont">
              <img src={EventImg} alt="" className="eventImg" />
            </div>
          </section>

          <section className="event_cont">
            <article className="event-main">
              <h1 style={{ position: "relative", top: "-2vh", left: "0vw" }}>
                OUR EVENTS
              </h1>
              <div className="eventText">
                <p>
                  Key Stage 2 (KS2) is the key stage taught in Years 3 to 6,
                  when children are between 7 and 11 years-old. The English
                  National Curriculum informs schools what subjects to teach and
                  it tells teachers which topics to cover and at what level. As
                  well as subjects and topics, the National Curriculum also sets
                  out how KS2 pupils should be tested or assessed and the level
                  they should achieve.
                </p>
              </div>
              <div className="eventpicturesCont">
                {EventsImg.map((item, id) => {
                  let position = "";
                  if (id === 0 + 7 || id === 0 + 8) {
                    position = "evtreshape";
                  }
                  return (
                    <div key={id} className="eventElcont">
                      <div className="pixCont">
                        <img
                          onClick={() =>
                            newImages(item.id, item.img, item.header)
                          }
                          key={id}
                          src={item.img}
                          alt="pix"
                          className={`evtpix ${position}`}
                        ></img>
                      </div>

                      <h2 className="eventcurriculum">{item.header}</h2>
                    </div>
                  );
                })}
              </div>
            </article>
          </section>
          <div
            style={{
              position: "relative",
              top: "112vh",
              backgroundColor: "#01030e",
              height: "60vh",
              zIndex: "-2",
              overflow: "hidden",
            }}
          >
            <AbtFooter />
          </div>
        </article>
      )}
    </main>
  );
};

export default Events;
