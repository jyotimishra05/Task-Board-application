import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Control from "../assets/control.png"
import BoardPage from "./BoardPage";
const HomePage = () => {
    const [open , setOpen]=useState(true);
  return (
    <div className="flex">
      <div className={`${open? "w-96":"w-20"} duration-300 h-screen  relative`}>
        <img
          src={Control}
          alt="control"
          className={`absolute cursor-pointer -right-3  w-7 border-dark-purple 
           border-2 rounded-full ${!open && "rotate-180"} `}
           onClick={()=>setOpen(!open)}
        />
      <Sidebar open={open}/>
      </div>
      <div><BoardPage open={open}/></div>
    </div>
  );
};

export default HomePage;
