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
  AiOutlineArrowDown,
  AiOutlineMenu,
} from "react-icons/ai";
import { SiHtml5 } from "react-icons/si";

import photo from "../assets/peep1.png";
import p1 from "../assets/proj1.png";
import p2 from "../assets/proj2.png";

function Content() {
  const myRef = useRef();
  const myRef2 = useRef();
  const height = 300;

  const reportScroll = () => {
    console.log(window.scrollY);
    if (!myRef.current || !myRef2.current) return;

    const elem = myRef.current;
    const elem2 = myRef2.current;
    console.log("ELEM", elem.getBoundingClientRect());
    console.log("ELEM2", elem2.getBoundingClientRect());

    const diff = window.scrollY - height;
    if (diff > 0) {
      console.log("HEY");
      const calcOpacity = diff / 150;
      elem.style.opacity = calcOpacity;
    }

    // elem.style.color= "red";
  };

  window.addEventListener("scroll", reportScroll);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log("ENTRY", entry);
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <div className={styles.contentContainer}>
      {/* <Hero/> */}

      <div className={styles.heroContainer} ref={myRef2}>
        <div className={styles.heroContents}>
          <div className={styles.heroLeft}>
            <div className={styles.heroImg}>
              <img src={photo} className={styles.image} />
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroText1}>Hello, I am Eu-Tjin</div>
            <div className={styles.heroText2}>A WEB DEVELOPER</div>
            <div className={styles.heroText3}>
              I enjoy solving problems and building things. Programming is my
              passion.
            </div>
          </div>
          <div className={styles.heroDownBtn}>
            <div className={styles.heroDownBtnText}>
              More <AiOutlineArrowDown size={28} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.techContainer}>
        <div className={styles.techContents}>
          <div className={styles.techText1}>Technologies I use and enjoy</div>
          <div className={styles.techList} ref={myRef}>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>HTML</div>
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>CSS</div>
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>Javascript</div>
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>ReactJS</div>
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>Node</div>
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>Express</div>
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>MongoDB</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.techContents}>
          <div className={styles.techText1}>Tools</div>
          <div className={styles.techList} ref={myRef}>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>HTML</div>
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>CSS</div>
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>Javascript</div>
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>ReactJS</div>
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>Node</div>
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>Express</div>
              </div>
            </div>
            <div className={styles.techItem}>
              <div className={styles.techItemContent}>
                <div className={styles.techItemLine1}>Front-End</div>
                <div className={styles.techItemLine2}>
                  <SiHtml5 size={60} />
                </div>
                <div className={styles.techItemLine3}>MongoDB</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.eduContainer}>
        <div className={styles.eduContents}>
          <div className={styles.eduBox}>
            <div className={styles.eduBoxContent}>
              <div className={styles.eduBoxHeader}>Education</div>
              <div className={styles.eduBoxInfo}>
                <div className={styles.timelineContainer}>
                  <div className={styles.timeline1}>
                    <div className={styles.timelineHeader}>
                      June, 2014 - June, 2017
                    </div>
                    <div className={styles.timelineText1}>
                      Master of Engineering Science
                    </div>
                    <div className={styles.timelineText2}>
                      Universiti Tunku Abdul Rahman (UTAR), Malaysia
                    </div>
                    <div className={styles.timelineText3}>
                      <span>Research topic: </span>
                      <span>
                        {" "}
                        A Novel Algorithm for Optimal Operation and Sizing of
                        Generator-Photovoltaic-Energy Storage System for
                        Minimizing Cost of Energy
                      </span>
                      <div className={styles.timelineButtonGroup}>
                        <button>Link</button>
                        <button>PDF</button>
                      </div>
                    </div>
                    <div className={styles.timelineBall}></div>
                  </div>
                  <div className={styles.timeline1}>
                    <div className={styles.timelineHeader}>
                      June, 2010 - June, 2014
                    </div>
                    <div className={styles.timelineText1}>
                      Bachelor of Electrical and Electronics Engineering
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
                    <div className={styles.timelineText1}>GOQUAL Inc.</div>
                    <div className={styles.timelineText2}>
                      Team Leader, Product Quality team
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
                      Bachelor of Electrical and Electronics Engineering
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

      <div className={styles.projectContainer}>
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
                  consumption in South Korea.{" "}
                </span>
                <span>
                  Built using KEPCO API and Data.gov API. An Express backend
                  server is used as a proxy server in order to bypass CORS
                  policy restrictions that both of these APIs have{" "}
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
                <button>Live site</button>
                <button>Github</button>
                <button>More details</button>
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
                  A web app for visualizing various energy generation and
                  consumption in South Korea.{" "}
                </span>
                <span>
                  Built using KEPCO API and Data.gov API. An Express backend
                  server is used as a proxy server in order to bypass CORS
                  policy restrictions that both of these APIs have{" "}
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
