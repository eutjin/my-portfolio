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

function Navbar({setMenu}) {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContents}>
        <div className={styles.navbarLeft}>Navbar</div>
        <div className={styles.navbarRight}>
          <div className={styles.navbarItem}>Skills</div>
          <div className={styles.navbarItem}>Education</div>
          <div className={styles.navbarItem}>About</div>
          <div className={styles.navbarItem}>Projects</div>
          <div className={styles.navbarResume}>Resume</div>
        </div>
        <div className={styles.navbarHamburger} onClick={()=>setMenu(true)}><AiOutlineMenu size={28}/></div>
      </div>
    </div>
  );
}

export default Navbar;
