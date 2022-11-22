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

      {menu &&
      <div id="menuOverlay"className="menuOverlay" onClick={(e)=>handleClickOverlay(e)}>
      <div className="menuContainer">
      <div className="menuContainerTop">
        <AiOutlineClose size={28} onClick={()=>setMenu(false)}/>
      </div>
      </div>
      </div>
      }
      
      <Navbar setMenu={setMenu}/>
      <Content/>

      
     
    </div>
  );
}

export default App;
