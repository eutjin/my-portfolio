import React, { useEffect, useState, useRef } from "react";
import './App.css';
import Content from './components/Content';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
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
  AiOutlineArrowDown,AiOutlineMenu, AiOutlineClose
} from "react-icons/ai";

function App() {
  const [menu, setMenu]= useState(false)

  const handleClickOverlay=(e)=>{
    if (e.target.id=="menuOverlay"){
      setMenu(false)
    }
  }
  return (
    <div className="App">

     
      <div id="menuOverlay"className={menu? "menuOverlay":"hidden"} onClick={(e)=>handleClickOverlay(e)}>
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
      
      <Navbar setMenu={setMenu}/>
      <Content/>

      
     
    </div>
  );
}

export default App;
