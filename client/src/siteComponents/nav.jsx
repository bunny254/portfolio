import React,{useState} from "react";
import { MdLightMode, MdDarkMode,MdOutlineClose } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";

const NavBar = () => {
    const [darkMode,setDarkMode]=useState(false);
    const handleDarkMode=()=>{
        setDarkMode(!darkMode)
    }
    const [toggle,setToggle]=useState(false);
    const handleToggle=()=>{
        setToggle(!toggle)
    }
  return (
    <div>
      <div className="xl:hidden">
        <div className="grid grid-cols-8">
          <div className="col-span-6">
          <a href="/" className="grid justify-center mt-1 ml-18 text-4xl text-[#FE4A49]">
            Simon
          </a>
          </div>
          <div className="col-span-1">
            {(!darkMode? <MdLightMode size='19px' onClick={handleDarkMode} className='mt-5 ml-4'color="white"/> :
            <MdDarkMode size='20px' onClick={handleDarkMode} className='mt-5 ml-4'/> )}
          </div>
          <div className="col-span-1">
            {(!toggle? <RiMenu4Line size='30px' onClick={handleToggle} className='mt-3' color="#4AD7D1"/> : <MdOutlineClose size='30px' onClick={handleToggle} className='mt-3' color="#4AD7D1"/>)}
          </div>
        </div>
        {(toggle?<div className="grid justify-center mr-24 border-dashed border-[#FE4A49] text-xl">
            <a href="/" className="p-1 text-white">Home</a>
            <a href="/" className="p-1 text-white">About Me</a>
            <a href="/" className="p-1 text-white">Why Me</a>
            <a href="/" className="p-1 text-white">Projects</a>
            <a href="/" className="p-1 text-white">Contact Me</a>
        </div> : null )}
      </div>
    </div>
  );
};

export default NavBar;
