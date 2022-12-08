import React, { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";

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
import samplePDF from '../assets/file1.pdf';

function Navbar({setMenu}) {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContents}>
        <div className={styles.navbarLeft}>Navbar</div>
        <div className={styles.navbarRight}>
          <div className={styles.navbarItem} onClick={()=>window.location="#skills"}>Skills</div>
          <div className={styles.navbarItem} onClick={()=>window.location="#career"}>Education</div>
          <div className={styles.navbarItem} onClick={()=>window.location="#hero"}>About</div>
          <div className={styles.navbarItem} onClick={()=>window.location="#projects"}>Projects</div>
          <div className={styles.navbarResume}><a href={samplePDF} target="_blank" 
                    >
                   Resume
                </a></div>
        </div>
        <div className={styles.navbarHamburger} onClick={()=>setMenu(true)}><AiOutlineMenu size={28}/></div>
      </div>
    </div>
  );
}

export default Navbar;
