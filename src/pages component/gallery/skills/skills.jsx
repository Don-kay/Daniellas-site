import React from "react";
import Submenu from "../../../component/sumenu/Submenu";
import { SkillImg } from "../../../data component/data";
import AbtFooter from "../../../component/footer about/Abtfooter";
import { useState } from "react";
import skillHero from "../../../assets/TEE_6955.jpg";
import { useGlobalContext } from "../../../component/context/context";
import { AiOutlineRollback } from "react-icons/ai";
import "./skills.css";

const Skills = () => {
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
      <section key={img.id} className={modal ? "skillimg" : "null"}>
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
        <div className="skillimageCont">
          <img src={img.images} alt="" className="skillimages" />
        </div>

        {/* <h2 className="skillheader">{img.header}</h2> */}

        <AiOutlineRollback onClick={closeImages} className="aicon" />
      </section>
      {modal ? null : (
        <article className="abc">
          <section>
            <Submenu />
            <h1
              style={{
                color: "white",
                width: "60vw",
                height: "3vh",
                position: "absolute",
                top: "25vh",
                left: "20vw",
                zIndex: 800,
                fontSize: "8ch",
                fontFamily: "oswald",
              }}
            >
              SKILL ACQUISITION
            </h1>
            <div className="skillscont">
              <img src={skillHero} alt="skills" className="skilhero" />
            </div>
          </section>

          <section className="skill_cont">
            <article className="skill-main">
              <h1 style={{ position: "relative", top: "0vh", left: "0vw" }}>
                EMPOWERED KIDS
              </h1>
              <div className="skillText">
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
              <div className="skillpicturesCont">
                {SkillImg.map((item, id) => {
                  let positions = "";
                  if (id === 0 + 1) {
                    positions = "style2";
                  }

                  return (
                    <div key={id} className="skillElcont">
                      <img
                        onClick={() =>
                          newImages(item.id, item.img, item.header)
                        }
                        key={id}
                        src={item.img}
                        alt="pix"
                        className={`skillpix  ${positions}`}
                      ></img>

                      {/* <h2 className="skillcurriculum">{item.header}</h2> */}
                    </div>
                  );
                })}
              </div>
            </article>
          </section>
          <div
            style={{
              position: "relative",
              top: "72vh",
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

export default Skills;
