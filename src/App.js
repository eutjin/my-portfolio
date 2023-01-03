import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
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
  AiOutlineClose,
} from "react-icons/ai";
import qr1 from "./assets/qr1.png";
import qr2 from "./assets/qr2.png";
import qr3 from "./assets/qr3.png";

function App() {
  const [menu, setMenu] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const handleClickOverlay = (e) => {
    if (e.target.id == "menuOverlay") {
      setMenu(false);
    }
  };

  const handleClickModalOverlay = (e) => {
    if (e.target.id == "overlay1") {
      setModal1(false);
    }else if (e.target.id == "overlay2") {
      setModal2(false);
    }else if (e.target.id == "overlay3") {
      setModal3(false);
    }
  };
  return (
    <div className="App">
      <div
        id="menuOverlay"
        className={menu ? "menuOverlay" : "hidden"}
        onClick={(e) => handleClickOverlay(e)}
      >
        <div className={menu ? "menuContainer" : "menuContainerOff"}>
          <div className="menuContainerTop">
            <AiOutlineClose size={28} onClick={() => setMenu(false)} />
          </div>
          <div className="menuContainerContent">
            <div
              className="menuContainerItem"
              onClick={() => {
                window.location = "#hero";
                setMenu(false);
              }}
            >
              About
            </div>
            <div
              className="menuContainerItem"
              onClick={() => {
                window.location = "#skills";
                setMenu(false);
              }}
            >
              Skills
            </div>
            <div
              className="menuContainerItem"
              onClick={() => {
                window.location = "#projects";
                setMenu(false);
              }}
            >
              Projects
            </div>
            <div
              className="menuContainerItem"
              onClick={() => {
                window.location = "#career";
                setMenu(false);
              }}
            >
              Career
            </div>
            <div
              className="menuContainerItem"
              onClick={() => {
                window.location = "#education";
                setMenu(false);
              }}
            >
              Education
            </div>
          </div>
        </div>
      </div>

      {/* {menu &&
      <div id="menuOverlay"className="menuOverlay" onClick={(e)=>handleClickOverlay(e)}>
      <div className={menu? "menuContainer": "menuContainerOff"}>
      <div className="menuContainerTop">
        <AiOutlineClose size={28} onClick={()=>setMenu(false)}/>
      </div>
      <div className="menuContainerContent">
      <div className="menuContainerItem">
        About
        </div>
        <div className="menuContainerItem">
        Skills
        </div>
        <div className="menuContainerItem">
        Career
        </div>
        <div className="menuContainerItem">
        Projects
        </div>
      </div>
      </div>
      </div>
      } */}

      <Navbar setMenu={setMenu} />
      <Content
        setModal1={setModal1}
        setModal2={setModal2}
        setModal3={setModal3}
      />
      
      {modal1 && (
        <div
          className="modalOverlay"
          id="overlay1"
          onClick={(e) => handleClickModalOverlay(e)}
        >
          <div className="modalContainer">
            <div className="modalText1">
              <span>GunaeSik</span>
              <span onClick={() => setModal1(false)}>
                <AiOutlineClose size={20} />
              </span>
            </div>
            <div className="modalContent">
              <div className="modalContent1">
                <div className="modalContent1Text1">
                  To view live project in mobile, scan the QR code below:
                </div>
                <div className="modalContent1Img">
                  <img src={qr1} className="qrImage" />
                </div>
              </div>
              <div className="modalContent2">
                <div className="modalContent2Text1">
                  To proceed and view the live project in the current device,
                  click the button below:
                </div>
                <button className="liveSiteBtn"  onClick={() =>
                    window.open("https://gunaesik.com")
                  }>Go to live project</button>
                <div className="accountPwContainer">
                  <span>Test Account</span>
                  <span>
                    The following is a test account for testing purposes. You
                    may login using the following credentials:
                  </span>
                  <span>Username: hassan@hassan.com</span>
                  <span>Password: hassan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
                <button className="liveSiteBtn"  onClick={() =>
                    window.open("https://enerlyzr.com")
                  }>Go to live project</button>
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
                <button className="liveSiteBtn"  onClick={() =>
                    window.open("https://movirevue.com")
                  }>Go to live project</button>
                <div className="accountPwContainer">
                  <span>Test Account</span>
                  <span>
                    The following is a test account for testing purposes. You
                    may login using the following credentials:
                  </span>
                  <span>Username: hassan@hassan.com</span>
                  <span>Password: hassan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
