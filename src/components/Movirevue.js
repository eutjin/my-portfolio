import React, { useEffect, useState, useRef } from "react";
import styles from "./Content.module.css";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineCrown,
  AiOutlineStar,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineAim,
  AiOutlineEnvironment,
  AiOutlineUser,
  AiOutlineArrowDown,
  AiOutlineEye,
  AiOutlineGithub,
  AiOutlineBranches,
  AiOutlineGlobal,
  AiOutlineTool,
  AiOutlineMenu,
  AiOutlineFilePdf,
  AiFillCaretRight,AiOutlinePlayCircle, AiFillPlayCircle, AiOutlineClose
} from "react-icons/ai";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiGithub,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiSlack,
  SiVisualstudiocode,
} from "react-icons/si";
import p1 from "../assets/proj1.png";
import p2 from "../assets/proj2.png";
import p3 from "../assets/proj3.png";
import qr1 from "../assets/qr1.png";
import qr2 from "../assets/qr2.png";
import qr3 from "../assets/qr3.png";

function Movirevue() {

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);


  const handleClickModalOverlay = (e) => {
    if (e.target.id == "overlay1") {
      setModal1(false);
    } else if (e.target.id == "overlay2") {
      setModal2(false);
    } else if (e.target.id == "overlay3") {
      setModal3(false);
    } 
  };


  return (
    <div className={styles.individualContainerMain}>
  <div className={styles.individualProjectContainer}>
  <div className={styles.projectBox}>
            <div
              
              className={styles.projectBoxImg}
            >
              <img src={p2} className={styles.projectImg} />
            </div>
            <div
             
              className={styles.projectBoxContent}
            >
              <div className={styles.projectBoxHeader}>
                <span>Featured Project</span>
                <span>MoviReVue<a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/13EifeGxaiZ9EcGmf_bFtuZUZ8mp5z9v0/view?usp=share_link"
                          >
                  <div className={styles.demoPlay}><AiFillCaretRight size={20}/>Demo</div></a></span>
              </div>
              <div className={styles.projectBoxText1}>
                <span>
                  An all-in-one web app for searching various movies and
                  creating customized movie lists. Watchlists can be shared with
                  other users and they are able to write reviews of watched
                  movies.
                </span>
                <span>
                  The project utilizes the YTS.MX Open API. A backend Express
                  server handles user authentication and authorization via JSON
                  Web Tokens (JWT). All user data is stored on backend via
                  MongoDB.
                </span>
              </div>
              <div className={styles.projectBoxTags}>
                <span>ReactJS</span>

                <span>Mantine UI</span>
                <span>CSS Modules</span>
                <span>NodeJS</span>
                <span>Express</span>
                <span>JWT</span>
                <span>User Authentication + Authorization</span>
                <span>YTS.MX Open API</span>
                <span>MongoDB</span>
                <span>Mongoose</span>
                <span>Cloudinary</span>
                <span>Digital Ocean</span>
                <span>Full-Stack</span>
              </div>
              <div className={styles.projectBoxButtonGroup}>
                <button onClick={() => setModal3(true)}>
                  <AiOutlineGlobal size={22} />
                  Live site
                </button>
                <button
                  onClick={() =>
                    window.open("https://github.com/eutjin/React-Movie-App2")
                  }
                >
                  <AiOutlineGithub size={22} />
                  Github
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://eutjin.notion.site/MoviReVue-55f9295af1c147e7ad53141d457f49e3"
                    )
                  }
                >
                  Documentation
                </button>
              </div>
            </div>
          </div>
          
          </div>
          {modal3 && (
        <div
          className="modalOverlay"
          id="overlay3"
          onClick={(e) => handleClickModalOverlay(e)}
        >
          <div className="modalContainer">
            <div className="modalText1">
              <span>MoviReVue</span>
              <span onClick={() => setModal3(false)}>
                <AiOutlineClose size={20} />
              </span>
            </div>
            <div className="modalContent">
              <div className="modalContent1">
                <div className="modalContent1Text1">
                  To view live project in mobile, scan the QR code below:
                </div>
                <div className="modalContent1Img">
                  <img src={qr2} className="qrImage" />
                </div>
              </div>
              <div className="modalContent2">
                <div className="modalContent2Text1">
                  To proceed and view the live project in the current device,
                  click the button below:
                </div>
                <button
                  className="liveSiteBtn"
                  onClick={() => window.open("https://movirevue.com")}
                >
                  Go to live project
                </button>
                <div className="accountPwContainer">
                  <span>Test Account</span>
                  <span>
                    The following is a test account for testing purposes. You
                    may create a new account or login using the following credentials:
                  </span>
                  <span>
                    {" "}
                    <strong>ID: test@movirevue.com</strong>
                  </span>
                  <span>
                    {" "}
                    <strong>Password: movirevue8888</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
          </div>
  )
}

export default Movirevue