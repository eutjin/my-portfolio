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
  AiOutlineArrowDown,AiOutlineMenu
} from "react-icons/ai";
import { SiHtml5 } from "react-icons/si";

import photo from "../assets/peep1.png";

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
              passion.dd
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
            <div className={styles.techItem}>CSS</div>
            <div className={styles.techItem}>Javascript</div>
            <div className={styles.techItem}>ReactJS</div>
            <div className={styles.techItem}>Node</div>
            <div className={styles.techItem}>Express</div>
            <div className={styles.techItem}>MongoDB</div>
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
                <div className={styles.timelineBall}>
                
                </div>
                </div>
                <div className={styles.timeline1}>
                f
                <div className={styles.timelineBall}>
                
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.eduBox}>Career</div>
        </div>
      </div>

      <div className={styles.projectContainer}>
        <div className={styles.projectContents}>
          <div className={styles.projectText1}>Projects</div>
          <div className={styles.projectBox}>Education</div>
          <div className={styles.projectBox}>Career</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
