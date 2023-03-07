import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
//  import { AiOutlineUser } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";
import { IoStatsChartOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav == "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav == "#about" ? "active" : ""}
      >
        <SiAboutdotme />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav == "#skills" ? "active" : ""}
      >
        <IoStatsChartOutline />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav == "#experience" ? "active" : ""}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav == "#portfolio" ? "active" : ""}
      >
        <VscFolderLibrary />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav == "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
