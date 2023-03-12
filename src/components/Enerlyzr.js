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

function Enerlyzr() {

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
              <img src={p1} className={styles.projectImg} />
            </div>
            <div
             
              className={styles.projectBoxContent}
            >
              <div className={styles.projectBoxHeader}>
                <span>Featured Project</span>
                <span>Enerlyzr.kr<a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1ljnMH5eryTLm2ifKQNiBwezGhbjXJXti/view?usp=share_link"
                          >
                  <div className={styles.demoPlay}><AiFillCaretRight size={20}/>Demo</div></a></span>
              </div>
              <div className={styles.projectBoxText1}>
                <span>
                  A web app for visualizing various energy generation and
                  consumption patterns in South Korea.{" "}
                </span>
                <span>
                  Built using public API data obatained from KEPCO and Korea
                  Power Exchange (KPX). An Express backend server is used as a
                  proxy server in order to bypass CORS policy restrictions that
                  both of these APIs have in place.
                </span>
                <span>
                  ChartJS library is used to visualize data in an easy and
                  effective manner. Chart types include Pie Chart, Line Chart,
                  Bar Chart.
                </span>
              </div>
              <div className={styles.projectBoxTags}>
                <span>ReactJS</span>

                <span>ChartJS</span>
                <span>Mantine UI</span>
                <span>CSS Modules</span>
                <span>NodeJS</span>
                <span>Express</span>
                <span>CORS</span>
                <span>Proxy server</span>
                <span>KEPCO Open API</span>
                <span>KPX Open API</span>
                <span>Digital Ocean</span>
              </div>
              <div className={styles.projectBoxButtonGroup}>
                <button onClick={() => setModal2(true)}>
                  <AiOutlineGlobal size={22} />
                  Live site
                </button>
                <button
                  onClick={() =>
                    window.open("https://github.com/eutjin/Power-Generator-App")
                  }
                >
                  <AiOutlineGithub size={22} />
                  Github
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://eutjin.notion.site/Enerlyzr-project-0affb238546440fdb4610fd31bf2fd48"
                    )
                  }
                >
                  Documentation
                </button>
              </div>
            </div>
          </div>
          
          </div>
          {modal2 && (
        <div
          className="modalOverlay"
          id="overlay2"
          onClick={(e) => handleClickModalOverlay(e)}
        >
          <div className="modalContainer">
            <div className="modalText1">
              <span>Enerlyzr</span>
              <span onClick={() => setModal2(false)}>
                <AiOutlineClose size={20} />
              </span>
            </div>
            <div className="modalContent">
              <div className="modalContent1">
                <div className="modalContent1Text1">
                  To view live project in mobile, scan the QR code below:
                </div>
                <div className="modalContent1Img">
                  <img src={qr3} className="qrImage" />
                </div>
              </div>
              <div className="modalContent2">
                <div className="modalContent2Text1">
                  To proceed and view the live project in the current device,
                  click the button below:
                </div>
                <button
                  className="liveSiteBtn"
                  onClick={() => window.open("https://enerlyzr.com")}
                >
                  Go to live project
                </button>
                {/* <div className="accountPwContainer">
                  <span>Test Account</span>
                  <span>
                    The following is a test account for testing purposes. You
                    may login using the following credentials:
                  </span>
                  <span>Username: hassan@hassan.com</span>
                  <span>Password: hassan</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
          </div>
  )
}

export default Enerlyzr