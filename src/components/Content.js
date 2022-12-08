import React, { useEffect, useState, useRef } from "react";
import styles from "./Content.module.css";
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
  AiOutlineArrowDown, AiOutlineEye, AiOutlineGithub,AiOutlineBranches,AiOutlineGlobal, AiOutlineTool,
  AiOutlineMenu,AiOutlineFilePdf
} from "react-icons/ai";
import { SiHtml5,SiCss3,SiJavascript,SiReact, SiNodedotjs,SiExpress, SiMongodb, SiPostgresql, SiFigma, SiGit,SiGithub, SiAdobephotoshop, SiAdobelightroom,SiSlack, SiVisualstudiocode  } from "react-icons/si";

import photo from "../assets/peep1.png";
import photo2 from "../assets/peep2.png";
import p1 from "../assets/proj1.png";
import p2 from "../assets/proj2.png";

function Content() {
  const myRef = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();
  const height = 300;
  const [cardOn, setCardOn]= useState(false)
  const [cardOn2, setCardOn2]= useState(false)
const [flipCard, setFlipCard]= useState(false)

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log("ENTRY", entry);
      if(entry.isIntersecting){
        setCardOn(true)
      }else{
        setCardOn(false)
      }
    });
    
    observer.observe(myRef.current)
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log("ENTRY", entry);
      if(entry.isIntersecting){
        setCardOn2(true)
      }else{
        setCardOn2(false)
      }
    });
    observer.observe(myRef3.current);
    
  }, []);


  return (
    <div className={styles.contentContainer}>
      {/* <Hero/> */}

      <div className={styles.heroContainer} ref={myRef2} id="hero">
        <div className={styles.heroContents}>
          <div className={styles.heroLeft} onClick={()=>setFlipCard((prev)=>!prev)}>
            <div className={flipCard?styles.cardInnerFlipped:styles.cardInner}>
            <div className={styles.heroImg1}>
              <img src={photo} className={styles.image} />
            </div>
            <div  className={styles.heroImg2}>
            <img src={photo2} className={styles.image} />
            </div>
            </div>
            {/* <div className={flipCard ?styles.heroImgFlip :styles.heroImg}>
              <img src={photo} className={styles.image} />
            </div> */}
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroText1}><span style={{color: "white"}}>Hello.</span>  I am Eu-Tjin.</div>
            {/* <div className={styles.heroText1}><span style={{color: "white"}}>Hello.</span><span style={{fontWeight:300}}> I am Eu-Tjin.</span></div> */}
            <div className={styles.heroText2}>an enthusiastic & motivated Web Developer.</div>
            {/* <div className={styles.heroText2}> <span style={{fontSize: "3rem"}}>an <span style={{fontSize: "3rem", color:"white",fontWeight:600}}>enthusiastic</span></span><br/><strong> Web Developer</strong></div> */}
            <div className={styles.heroText3}>
              I enjoy solving problems and building things. Programming is my
              passion and my weapon to solve real world challenges. I believe in moving things forward through teamwork and collaboration.
            </div>
            {/* <div className={styles.heroText3}>
              I believe in moving things forward through teamwork and collaboration.
            </div> */}
          </div>
          <div className={styles.heroDownBtn}>
            <div className={styles.heroDownBtnText}>
              More <AiOutlineArrowDown size={28} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.techContainer} id="skills">
        <div className={styles.techContents}>
          <div className={styles.techText1}>Technologies I use and enjoy</div>
          <div className={styles.techList2} ref={myRef}>
            <div className={cardOn? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>HTML</div>
              </div>
            </div>
            <div className={cardOn? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiJavascript size={60} />
                </div>
                <div className={styles.techItemLine3}>Javascript</div>
              </div>
            </div>
            <div className={cardOn? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiCss3 size={60} />
                </div>
                <div className={styles.techItemLine3}>CSS</div>
              </div>
            </div>
         
            <div className={cardOn? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiReact size={60} />
                </div>
                <div className={styles.techItemLine3}>ReactJS</div>
              </div>
            </div>
            <div className={cardOn? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Back-End</div>
                <div className={styles.techItemLine2}>
                  <SiNodedotjs size={60} />
                </div>
                <div className={styles.techItemLine3}>Node</div>
              </div>
            </div>
            <div className={cardOn? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Back-End</div>
                <div className={styles.techItemLine2}>
                  <SiExpress size={60} />
                </div>
                <div className={styles.techItemLine3}>Express</div>
              </div>
            </div>
            <div className={cardOn? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Database</div>
                <div className={styles.techItemLine2}>
                  <SiMongodb size={60} />
                </div>
                <div className={styles.techItemLine3}>MongoDB</div>
              </div>
            </div>
            <div className={cardOn? styles.techItem: styles.techItemOff}>
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

        <div className={styles.techContents2} >
          <div className={styles.techText2}>Tools</div>
          <div className={styles.techList2} ref={myRef3} >
          <div className={cardOn2? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiFigma size={60} />
                </div>
                <div className={styles.techItemLine3}>Figma</div>
              </div>
            </div>
            <div className={cardOn2? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiGit size={60} />
                </div>
                <div className={styles.techItemLine3}>Git</div>
              </div>
            </div>
            <div className={cardOn2? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiGithub size={60} />
                </div>
                <div className={styles.techItemLine3}>Github</div>
              </div>
            </div>
            <div className={cardOn2? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Photoshop</div>
                <div className={styles.techItemLine2}>
                  <SiAdobephotoshop size={60} />
                </div>
                <div className={styles.techItemLine3}>Photoshop</div>
              </div>
            </div>
            <div className={cardOn2? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiAdobelightroom size={60} />
                </div>
                <div className={styles.techItemLine3}>Lightroom</div>
              </div>
            </div>
            <div className={cardOn2? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiSlack size={60} />
                </div>
                <div className={styles.techItemLine3}>Slack</div>
              </div>
            </div>
            <div className={cardOn2? styles.techItem: styles.techItemOff}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiVisualstudiocode size={60} />
                </div>
                <div className={styles.techItemLine3}>VS Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.eduContainer} id="career">
        <div className={styles.eduContents}>
          <div className={styles.eduBox}>
            <div className={styles.eduBoxContent}>
              <div className={styles.eduBoxHeader}>Education</div>
              <div className={styles.eduBoxInfo}>
                <div className={styles.timelineContainer}>
                  <div className={styles.timeline1}>
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
                      <span><strong>Research topic: </strong></span>
                      <span>
                        {" "}
                        A Novel Algorithm for Optimal Operation and Sizing of
                        Generator-Photovoltaic-Energy Storage System for
                        Minimizing Cost of Energy
                      </span>
                      <div className={styles.timelineButtonGroup}>
                      <button><AiOutlineGlobal size={18}/>Link</button>
                        <button><AiOutlineFilePdf size={18}/>PDF</button>
                      </div>
                    </div>
                    <div className={styles.horizontalDivider}></div>
                    <div className={styles.timelineText3}>
                      <span><strong>Research publications:</strong> </span>
                      <span>
                        {" "}
                       1. A Novel Algorithm for Optimal Operation and Sizing of
                        Generator-Photovoltaic-Energy Storage System for
                        Minimizing Cost of Energy
                      </span>
                      <div className={styles.timelineButtonGroup}>
                      <button><AiOutlineGlobal size={18}/>Link</button>
                        <button><AiOutlineFilePdf size={18}/>PDF</button>
                      </div>
                    </div>
                    <div className={styles.timelineText3}>
                    
                      <span>
                        {" "}
                       2. A Novel Algorithm for Optimal Operation and Sizing of
                        Generator-Photovoltaic-Energy Storage System for
                        Minimizing Cost of Energy
                      </span>
                      <div className={styles.timelineButtonGroup}>
                        <button><AiOutlineGlobal size={18}/>Link</button>
                        <button><AiOutlineFilePdf size={18}/>PDF</button>
                      </div>
                    </div>
                    <div className={styles.timelineBall}></div>
                  </div>
                  <div className={styles.timeline1}>
                    <div className={styles.timelineHeader}>
                      June <strong>2010</strong> - June <strong>2014</strong>
                    </div>
                    <div className={styles.timelineText1}>
                      Bachelor of Electrical and Electronics Engineering
                    </div>
                    <div className={styles.timelineText2}>
                      Universiti Tunku Abdul Rahman (UTAR), Malaysia
                    </div>
                    <div className={styles.timelineText3}>
                      <span>Awards: </span>
                      <span>
                        {" "}
                        Innovate Malaysia Design Competiton 2014 (National Instruments track) <span  className={styles.timelineTag}>Grand Prize</span>
                      </span>
                      <div className={styles.timelineButtonGroup}>
                        <button>Link</button>
                        <button>PDF</button>
                      </div>
                    </div>
                    <div className={styles.timelineBall}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* career */}
          <div className={styles.eduBox}>
            <div className={styles.eduBoxContent}>
              <div className={styles.eduBoxHeader}>Career</div>
              <div className={styles.eduBoxInfo}>
                <div className={styles.timelineContainer}>
                  <div className={styles.timeline1}>
                    <div className={styles.timelineHeader}>
                      May, 2018 - Present
                    </div>
                    <div className={styles.timelineText1}>Team Leader, Product Quality team</div>
                    <div className={styles.timelineText2}>
                      GOQUAL Inc, South Korea
                    </div>
                    <div className={styles.timelineText3}>
                      <span>Research topic: </span>
                      <span>
                        {" "}
                        A Novel Algorithm for Optimal Operation and Sizing of
                        Generator-Photovoltaic-Energy Storage System for
                        Minimizing Cost of Energy
                      </span>
                    </div>
                    <div className={styles.timelineBall}></div>
                  </div>
                  <div className={styles.timeline1}>
                    <div className={styles.timelineHeader}>
                      June, 2010 - June, 2014
                    </div>
                    <div className={styles.timelineText1}>
                     Research Assistant
                    </div>
                    <div className={styles.timelineText2}>
                      Universiti Tunku Abdul Rahman (UTAR), Malaysia
                    </div>
                    <div className={styles.timelineBall}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className={styles.projectContainer} id="projects">
        <div className={styles.projectContents}>
          <div className={styles.projectText1}>Things I have built</div>
          {/* proj1 */}
          <div className={styles.projectBox}>
            <div className={styles.projectBoxImg}>
              <img src={p1} className={styles.projectImg} />
            </div>
            <div className={styles.projectBoxContent}>
              <div className={styles.projectBoxHeader}>
                <span>Featured Project</span>
                <span>Enerlyzr.kr</span>
              </div>
              <div className={styles.projectBoxText1}>
                <span>
                  A web app for visualizing various energy generation and
                  consumption patterns in South Korea.{" "}
                </span>
                <span>
                  Built using public date obatained from KEPCO API and Data.gov API. An Express backend
                  server is used as a proxy server in order to bypass CORS
                  policy restrictions that both of these APIs have{" "}
                </span>
                <span>
                 ChartJS library is used to visualize data in an easy and effective manner. Chart types include Pie Chart, Line Chart, Bar Chart.
                </span>
              </div>
              <div className={styles.projectBoxTags}>
                <span>ReactJS</span>
                <span>NodeJS</span>
                <span>ChartJS</span>
                <span>Mantine UI</span>
                <span>CSS Modules</span>
                <span>Express</span>
                <span>CORS</span>
                <span>Proxy server</span>
                <span>KEPCO API</span>
                <span>Data.gov API</span>
                <span>Digital Ocean</span>
              </div>
              <div className={styles.projectBoxButtonGroup}>
                <button><AiOutlineGlobal size={22}/>Live site</button>
                <button><AiOutlineGithub size={22}/>Github</button>
                <button ><AiOutlineTool size={22}/>More details</button>
              </div>
            </div>
          </div>
       
{/* proj2 */}
<div className={styles.projectBox}>
            <div className={styles.projectBoxImg}>
              <img src={p2} className={styles.projectImg} />
            </div>
            <div className={styles.projectBoxContent}>
              <div className={styles.projectBoxHeader}>
                <span>Featured Project</span>
                <span>MoviReVue</span>
              </div>
              <div className={styles.projectBoxText1}>
                <span>
                  A web app for finding movies and building customized watchlists or movie lists. Watchlists can be shared with other users on the app. Users are able to leave movie reviews. 
                </span>
                <span>
                  A backend Express server handles user authentication and authorization via JSON Web Tokens (JWT). User
                </span>
              </div>
              <div className={styles.projectBoxTags}>
                <span>ReactJS</span>
                <span>NodeJS</span>
                
                <span>Mantine UI</span>
                <span>CSS Modules</span>
                <span>Express</span>
                <span>JWT</span>
                <span>Proxy server</span>
                <span>KEPCO API</span>
                <span>Data.gov API</span>
                <span>Digital Ocean</span>
              </div>
              <div className={styles.projectBoxButtonGroup}>
                <button>Live site</button>
                <button>Github</button>
                <button>More details</button>
              </div>
            </div>
          </div>
          

        
        </div>
      </div>
    </div>
  );
}

export default Content;
