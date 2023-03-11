import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
// import { useViewportScroll } from 'react-intersection-observer'
import { useInView } from "react-intersection-observer";
import styles from "./Content.module.css";
import samplePDF from "../assets/resume221220.pdf";

import Hero from "./Hero";
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
  AiFillCaretRight,AiOutlinePlayCircle, AiFillPlayCircle, 
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

import photo from "../assets/peep1.png";
import photo2 from "../assets/peep2.png";
import p1 from "../assets/proj1.png";
import p2 from "../assets/proj2.png";
import p3 from "../assets/proj3.png";
import ReactGA from "react-ga4";


function Content({ setModal1, setModal2, setModal3, setModalResume }) {
  const myRef = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();
  const height = 300;
  const [cardOn, setCardOn] = useState(true);
  const [cardOn2, setCardOn2] = useState(false);
  const [flipCard, setFlipCard] = useState(false);
  const { scrollYProgress } = useScroll();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [inview1Pass, setInview1Pass] = useState(false);
  const [inview2Pass, setInview2Pass] = useState(false);
  // const reportScroll = () => {
  //   console.log(window.scrollY);
  //   if (!myRef.current || !myRef2.current) return;

  //   const elem = myRef.current;
  //   const elem2 = myRef2.current;
  //   console.log("ELEM", elem.getBoundingClientRect());
  //   console.log("ELEM2", elem2.getBoundingClientRect());

  //   const diff = window.scrollY - height;
  //   if (diff > 0) {
  //     console.log("HEY");
  //     const calcOpacity = diff / 150;
  //     elem.style.opacity = calcOpacity;
  //   }

  //   // elem.style.color= "red";
  // };

  // window.addEventListener("scroll", reportScroll);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     // console.log("ENTRY", entry);
  //     if (entry.isIntersecting) {
  //       setCardOn(true);
  //     } else {
  //       setCardOn(false);

  //     }
  //   });

  //   observer.observe(myRef.current);
  // }, []);

  useEffect(() => {
    console.log("inview", inView1);
    if (!inview1Pass) {
      if (inView1) {
        setCardOn(true);
        setInview1Pass(true);
      } else {
        setCardOn(false);
      }
    }
  }, [inView1]);

  useEffect(() => {
    console.log("inview2", inView2);
    if (!inview2Pass) {
      if (inView2) {
        setCardOn2(true);
        setInview2Pass(true);
      } else {
        setCardOn2(false);
      }
    }
  }, [inView2]);

  // useEffect(() => {
  //   console.log("inview2", inView2);
  //   if (inView2) {
  //     setCardOn2(true);
  //   } else {
  //     setCardOn2(false);
  //   }
  // }, [inView2]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     // console.log("ENTRY", entry);
  //     if (entry.isIntersecting) {
  //       setCardOn2(true);
  //     } else {
  //       setCardOn2(false);
  //     }
  //   });
  //   observer.observe(myRef3.current);
  // }, []);

  const handleResumeButtonClick=()=>{
    setModalResume(true)
    ReactGA.event({
      category: "resume button category",
      action: "resume button action",
      label: "resume button label", // optional
      // value: 99, // optional, must be a number
      // nonInteraction: true, // optional, true/false
      // transport: "xhr", // optional, beacon/xhr/image
    });
  }

  return (
    <div className={styles.contentContainer}>
      {/* <Hero/> */}

      <div className={styles.heroContainer} ref={myRef2} id="hero">
        {/* <div className={styles.heroMain}> */}
        <div className={styles.heroContents}>
          <div
            className={styles.heroLeft}
            onClick={() => setFlipCard((prev) => !prev)}
          >
            <div
              className={flipCard ? styles.cardInnerFlipped : styles.cardInner}
            >
              <div className={styles.heroImg1}>
                <img src={photo} className={styles.image} />
              </div>
              <div className={styles.heroImg2}>
                <img src={photo2} className={styles.image} />
              </div>
            </div>
            {/* <div className={flipCard ?styles.heroImgFlip :styles.heroImg}>
              <img src={photo} className={styles.image} />
            </div> */}
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroText1}>
              <span style={{ color: "white" }}>Hello.</span> I am Eu-Tjin.
            </div>
            {/* <div className={styles.heroText1}><span style={{color: "white"}}>Hello.</span><span style={{fontWeight:300}}> I am Eu-Tjin.</span></div> */}
            <div className={styles.heroText2}>
              an enthusiastic & motivated Web Developer.
            </div>
            {/* <div className={styles.heroText2}> <span style={{fontSize: "3rem"}}>an <span style={{fontSize: "3rem", color:"white",fontWeight:600}}>enthusiastic</span></span><br/><strong> Web Developer</strong></div> */}
            <div className={styles.heroText3}>
              <div className={styles.heroText3border}></div>I enjoy solving
              problems and building things. Programming is my passion and my
              weapon to solve real world challenges. I believe in moving things
              forward through teamwork and collaboration.
            </div>

            <div className={styles.heroBtnGroup}>
              <button
                className={styles.heroMoreBtnTxt}
                onClick={() => handleResumeButtonClick()}
              >
                Resume
              </button>
              {/* <button
                className={styles.heroMoreBtnTxt}
                onClick={() => (window.location = "#skills")}
              >
                See More
              </button> */}
              <button
                className={`${styles.heroMoreBtnTxt} ${styles.heroBtnColor}`}
                onClick={() => (window.location = "#skills")}
              >
                See More
              </button>
            </div>
            {/* <div className={styles.heroText3}>
              I believe in moving things forward through teamwork and collaboration.
            </div> */}
          </div>
          {/* <div className={styles.heroDownBtn}>
            <div className={styles.heroDownBtnText}>
              More <AiOutlineArrowDown size={28} />
            </div>
          </div> */}
        </div>
      </div>

      <div className={styles.techContainer} id="skills">
        <div className={styles.techContents}>
          <div className={styles.techText1}>Technologies I use and enjoy</div>
          <div className={styles.techList2} ref={ref1}>
            <div className={cardOn ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>HTML</div>
              </div>
            </div>
            <div className={cardOn ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiJavascript size={60} />
                </div>
                <div className={styles.techItemLine3}>Javascript</div>
              </div>
            </div>
            <div className={cardOn ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiCss3 size={60} />
                </div>
                <div className={styles.techItemLine3}>CSS</div>
              </div>
            </div>

            <div className={cardOn ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiReact size={60} />
                </div>
                <div className={styles.techItemLine3}>ReactJS</div>
              </div>
            </div>
            <div className={cardOn ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Back-End</div>
                <div className={styles.techItemLine2}>
                  <SiNodedotjs size={60} />
                </div>
                <div className={styles.techItemLine3}>Node</div>
              </div>
            </div>
            <div className={cardOn ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Back-End</div>
                <div className={styles.techItemLine2}>
                  <SiExpress size={60} />
                </div>
                <div className={styles.techItemLine3}>Express</div>
              </div>
            </div>
            <div className={cardOn ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Database</div>
                <div className={styles.techItemLine2}>
                  <SiMongodb size={60} />
                </div>
                <div className={styles.techItemLine3}>MongoDB</div>
              </div>
            </div>
            <div className={cardOn ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Database</div>
                <div className={styles.techItemLine2}>
                  <SiPostgresql size={60} />
                </div>
                <div className={styles.techItemLine3}>PostgreSQL</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.techContents2} ref={ref2}>
          <div className={styles.techText2}>Tools</div>
          <div className={styles.techList2}>
            <div className={cardOn2 ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                {/* <div className={styles.techItemLine1}> </div> */}
                <div className={styles.techItemLine2}>
                  <SiFigma size={60} />
                </div>
                <div className={styles.techItemLine3}>Figma</div>
              </div>
            </div>
            <div className={cardOn2 ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                {/* <div className={styles.techItemLine1}>Front-End</div> */}
                <div className={styles.techItemLine2}>
                  <SiGit size={60} />
                </div>
                <div className={styles.techItemLine3}>Git</div>
              </div>
            </div>
            <div className={cardOn2 ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine2}>
                  <SiGithub size={60} />
                </div>
                <div className={styles.techItemLine3}>Github</div>
              </div>
            </div>
            <div className={cardOn2 ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine2}>
                  <SiAdobephotoshop size={60} />
                </div>
                <div className={styles.techItemLine3}>Photoshop</div>
              </div>
            </div>
            <div className={cardOn2 ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine2}>
                  <SiAdobelightroom size={60} />
                </div>
                <div className={styles.techItemLine3}>Lightroom</div>
              </div>
            </div>
            <div className={cardOn2 ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine2}>
                  <SiSlack size={60} />
                </div>
                <div className={styles.techItemLine3}>Slack</div>
              </div>
            </div>
            <div className={cardOn2 ? styles.techItem : styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine2}>
                  <SiVisualstudiocode size={60} />
                </div>
                <div className={styles.techItemLine3}>VS Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.projectContainer}>
        <div className={styles.projectContents} id="projects">
          <div className={styles.projectText1}>Things I have built</div>

          {/* proj1 */}
          <div className={styles.projectBox}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "250px" },
              }}
              className={styles.projectBoxImg}
            >
              <img src={p3} className={styles.projectImg} />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "250px" },
              }}
              className={styles.projectBoxContent}
            >
              <div className={styles.projectBoxHeader}>
                <span>Featured Project</span>
                <span>GunaeSik 
                <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1qMssawMgeJHPU6QeyRBu6gBYvdzfAGkR/view?usp=share_link"
                          >
                  <div className={styles.demoPlay}><AiFillCaretRight size={20}/>Demo</div></a></span>
              </div>
              <div className={styles.projectBoxText1}>
                <span>
                  A web app for users to find nearby cafeteria and check the
                  menu of the day. Users are able to leave reviews, add
                  cafeterias to favourites list, while Vendors are able to
                  update daily menus.
                </span>
                <span>
                  This full-stack project utlizes ReactJS on the front-end and
                  Express/NodeJS on the back-end. MongoDB is used to store data.
                  The app utilizes Kakao Map API in order to mark the locations
                  of all cafeteria.
                </span>
                <span>
                  Kakao and Google login is used for user authentication.
                </span>
              </div>
              <div className={styles.projectBoxTags}>
                <span>ReactJS</span>

                <span>Mantine UI</span>
                <span>CSS Modules</span>
                <span>NodeJS</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>JWT</span>
                <span>User Authentication + Authorization</span>
                <span>Kakao Map API</span>
                <span>Kakao Login</span>
                <span>Google Login</span>
                <span>Digital Ocean</span>

                <span>Mongoose</span>
                <span>Cloudinary</span>

                <span>Full-Stack</span>
              </div>
              <div className={styles.projectBoxButtonGroup}>
                <button onClick={() => setModal1(true)}>
                  <AiOutlineGlobal size={22} />
                  Live site
                </button>
                <button
                  onClick={() =>
                    window.open("https://github.com/eutjin/Eat-app")
                  }
                >
                  <AiOutlineGithub size={22} />
                  Github
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://eutjin.notion.site/GunaeSik-fc473e7319174e7eba4c0ef263d162cb"
                    )
                  }
                >
                  Documentation
                </button>
              </div>
            </motion.div>
          </div>

          {/* proj1 */}
          <div className={styles.projectBox}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "250px" },
              }}
              className={styles.projectBoxImg}
            >
              <img src={p1} className={styles.projectImg} />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "250px" },
              }}
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
            </motion.div>
          </div>

          {/* proj2 */}
          <div className={styles.projectBox}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "250px" },
              }}
              className={styles.projectBoxImg}
            >
              <img src={p2} className={styles.projectImg} />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "250px" },
              }}
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
            </motion.div>
          </div>
        </div>
      </div>

      <div className={styles.eduContainer} id="career">
        <div className={styles.eduContents}>
          {/* career */}
          <div className={styles.eduBox}>
            <div className={styles.eduBoxContent}>
              <div className={styles.eduBoxHeader}>Career</div>
              <div className={styles.eduBoxInfo}>
                <div className={styles.timelineContainer}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 80,
                    }}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: "-50px" },
                    }}
                    className={styles.timeline1}
                  >
                    <div className={styles.timelineHeader}>
                      May <strong>2018</strong> - <strong>Present</strong>
                    </div>
                    <div className={styles.timelineText1}>
                      Technical Support Specialist, Quality team
                    </div>
                    <div className={styles.timelineText2}>
                      GOQUAL Inc, South Korea
                    </div>
                    <div className={styles.timelineText3Custom}>
                      <span>
                        I have joined the IoT startup as the 6th member and have
                        held multiple roles ever since. My job roles require me
                        to constantly solve issues and communicate with teams
                        both internal and external to the company.{" "}
                      </span>
                      <span>
                        <AiFillCaretRight
                          className={styles.timelineText3Icon}
                          size={16}
                        />
                        <strong>Technical Support (Chief Specialist)</strong>
                      </span>
                      <span>
                        <AiFillCaretRight
                          className={styles.timelineText3Icon}
                          size={16}
                        />
                        <strong>Quality Control and Assurance (QC/QA)</strong>
                      </span>
                      <span>
                        <AiFillCaretRight
                          className={styles.timelineText3Icon}
                          size={16}
                        />
                        <strong>
                          Product Sourcing and Production Management
                        </strong>
                      </span>
                    </div>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      transition={{
                        delay: 0.5,
                        duration: 1,
                        type: "spring",
                        stiffness: 80,
                      }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "200px" },
                      }}
                      className={styles.timelineBall}
                    ></motion.div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 80,
                    }}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: "50px" },
                    }}
                    className={styles.timeline1}
                  >
                    <div className={styles.timelineHeader}>
                      June <strong>2010</strong> - June <strong>2014</strong>
                    </div>
                    <div className={styles.timelineText1}>Research Intern</div>
                    <div className={styles.timelineText2}>
                      Remotec Technology Ltd. (Hong Kong)
                    </div>
                    <div className={styles.timelineText3Custom}>
                      <span>
                        Research project on control algorithm to enable
                        intelligent operation of air conditioners with the aim
                        to reduce energy consumption while maintaining user
                        comfort levels.
                      </span>
                    </div>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      transition={{
                        delay: 0.5,
                        duration: 1,
                        type: "spring",
                        stiffness: 80,
                      }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "200px" },
                      }}
                      className={styles.timelineBall}
                    ></motion.div>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 80,
                    }}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: "50px" },
                    }}
                    className={styles.timeline1}
                  >
                    <div className={styles.timelineHeader}>
                      June <strong>2010</strong> - June <strong>2014</strong>
                    </div>
                    <div className={styles.timelineText1}>
                      Research Assistant
                    </div>
                    <div className={styles.timelineText2}>
                      Universiti Tunku Abdul Rahman (UTAR), Malaysia
                    </div>
                    <div className={styles.timelineText3Custom}>
                      <span>
                        Research project on EMS, which was successfully
                        installed in a university building and energy savings
                        were achieved.{" "}
                      </span>
                    </div>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      transition={{
                        delay: 0.5,
                        duration: 1,
                        type: "spring",
                        stiffness: 80,
                      }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "200px" },
                      }}
                      className={styles.timelineBall}
                    ></motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.eduBox} id="education">
            <div className={styles.eduBoxContent}>
              <div className={styles.eduBoxHeader}>Education</div>
              <div className={styles.eduBoxInfo}>
                <div className={styles.timelineContainer}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 80,
                    }}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: "-50px" },
                    }}
                    className={styles.timeline1}
                  >
                    <div className={styles.timelineHeader}>
                      June <strong>2014</strong> - June <strong>2017</strong>
                    </div>
                    <div className={styles.timelineText1}>
                      Master of Engineering Science
                    </div>
                    <div className={styles.timelineText2}>
                      Universiti Tunku Abdul Rahman (UTAR), Malaysia
                    </div>
                    <div className={styles.timelineText3}>
                      <span>
                        <strong>Research topic: </strong>
                      </span>
                      <span>
                        {" "}
                        A Novel Algorithm for Optimal Operation and Sizing of
                        Generator-Photovoltaic-Energy Storage System for
                        Minimizing Cost of Energy
                      </span>
                      <div className={styles.timelineButtonGroup}>
                        
                      <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://eprints.utar.edu.my/3156/"
                          >
                        <button>
                          <AiOutlineGlobal size={18} />
                          
                            Link
                          
                        </button></a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1OY-TcXUJulaFKB7EaemIgnZEhCy2ZoU2/view"
                          >
                        <button>
                          <AiOutlineFilePdf size={18} />
                          
                            PDF
                          
                        </button></a>
                      </div>
                    </div>
                    <div className={styles.horizontalDivider}></div>
                    <div className={styles.timelineText3}>
                      <span>
                        <strong>Research publications:</strong>{" "}
                      </span>
                      <span>
                        {" "}
                        1. Novel fuzzy-based control strategy for standalone
                        power systems for minimum cost of electricity in rural
                        areas
                      </span>
                      <div className={styles.timelineButtonGroup}>
                      <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.sciencedirect.com/science/article/abs/pii/S2213138817305568"
                          >
                        <button>
                          <AiOutlineGlobal size={18} />
                          
                            Link
                          
                        </button></a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1slEVjhPKpD_zM71OW4jjX5E_0Erv21cj/view?usp=share_link"
                          ><button>
                          <AiOutlineFilePdf size={18} />
                          
                            PDF
                          
                        </button></a>
                      </div>
                    </div>
                    <div className={styles.timelineText3}>
                      <span>
                        {" "}
                        2. Control Strategies in Energy Storage System for
                        Standalone Power Systems
                      </span>
                      <div className={styles.timelineButtonGroup}>
                      <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://ieeexplore.ieee.org/document/8278572"
                          >
                        <button>
                          <AiOutlineGlobal size={18} />
                          
                            Link
                          
                        </button></a>
                        
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1pX7AmdI3JcQ0Euvk-XVKBjpzcML-Am1K/view?usp=share_link"
                          >
                        <button>
                          <AiOutlineFilePdf size={18} />
                          
                            PDF
                        
                        </button>  </a>
                      </div>
                    </div>
                    <div className={styles.timelineText3}>
                      <span>
                        {" "}
                        3. Innovative Fuzzy Controller on Island Power Systems
                        with Energy Storage and Renewable for Minimum Fuel
                        Consumption
                      </span>
                      <div className={styles.timelineButtonGroup}>
                      <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.ijeetc.com/index.php?m=content&c=index&a=show&catid=180&id=1139"
                          >
                        <button>
                          <AiOutlineGlobal size={18} />
                          
                            Link
                          
                        </button></a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1Fyf3quS2cunvXmFT-Jvhh4jQjH-OurRr/view?usp=share_link"
                          >
                        <button>
                          <AiOutlineFilePdf size={18} />
                         
                            PDF
                          
                        </button></a>
                      </div>
                    </div>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      transition={{
                        delay: 0.5,
                        duration: 1,
                        type: "spring",
                        stiffness: 80,
                      }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "200px" },
                      }}
                      className={styles.timelineBall}
                    ></motion.div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 80,
                    }}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: "-50px" },
                    }}
                    className={styles.timeline1}
                  >
                    <div className={styles.timelineHeader}>
                      June <strong>2010</strong> - June <strong>2014</strong>
                    </div>
                    <div className={styles.timelineText1}>
                      Bachelor of Electrical and Electronics Engineering
                    </div>
                    <div className={styles.timelineText2}>
                      Universiti Tunku Abdul Rahman (UTAR), Malaysia
                    </div>
                    <div className={styles.horizontalDivider}></div>
                    <div className={styles.timelineText3}>
                      <span>
                        <strong>Awards: </strong>
                      </span>

                      <span> 1. Innovate Malaysia Design Competiton 2014</span>
                      <div className={styles.timelineTag}>
                        <AiFillCaretRight size={16} />
                        Grand Prize: National Instruments track
                      </div>
                      <span>
                        <strong>
                          <i>
                            Energy Link: An Interactive Energy Management
                            Platform
                          </i>
                        </strong>
                      </span>
                      <div className={styles.timelineButtonGroup}>
                      <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://news.utar.edu.my/awards/2014/35/35.html"
                          >
                        <button>
                          <AiOutlineGlobal size={18} />
                         
                            Link
                          
                        </button></a>
                      </div>
                    </div>
                    <div className={styles.timelineText3}>
                      <span>
                        2. Fifth Technopreneurship and Innovation Symposium and
                        Exhibition (TISE) 2013
                      </span>
                      <div className={styles.timelineTag}>
                        <AiFillCaretRight size={16} />
                        Winner: Young Intellectual category
                      </div>
                      <span>
                        <strong>
                          <i>
                            Dr Energy: a plug-and-play, multifunctional
                            electrical power diagnostic platform
                          </i>
                        </strong>
                      </span>
                      <div className={styles.timelineButtonGroup}>
                      <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://dcc.utar.edu.my/news/awards/2013-10-07/dr-energy-makes-utar-a-tise-2013-winner/"
                          ><button>
                          <AiOutlineGlobal size={18} />
                          
                            Link
                          
                        </button></a>
                      </div>
                    </div>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      transition={{
                        delay: 0.5,
                        duration: 1,
                        type: "spring",
                        stiffness: 80,
                      }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "200px" },
                      }}
                      className={styles.timelineBall}
                    ></motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerContainer} id="footer">
        <div className={styles.footerContents}>
          <div className={styles.footerLine1}>
            <div>
              <span>
                <strong>NAVIGATION</strong>
              </span>
            </div>
            <div>
              <span onClick={() => (window.location = "#hero")}>About</span>{" "}
              <span onClick={()=>setModalResume(true)}>
                
                  Resume/CV
                
              </span>
              <span onClick={() => (window.location = "#projects")}>
                Projects
              </span>
              <span onClick={() => (window.location = "#career")}>Career</span>
              <span onClick={() => (window.location = "#education")}>
                Education
              </span>
            </div>
          </div>
          {/* <div className={styles.footerLine1}>
            Let's talk about web development over coffee.
          </div> */}
          <div className={styles.footerLine2}>
            <span>
              <strong>CONTACT :</strong> 010 8028 6105
            </span>
            {/* <span>•</span> */}
            <span>
              <strong>EMAIL :</strong> eutjin_72@hotmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
