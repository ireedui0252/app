import React from "react";
import "./sidebar.css";
import { FaRegNewspaper, FaDiscord, FaInstagram } from "react-icons/fa";
import {
  MdOutlineLibraryAddCheck,
  MdCastForEducation,
  MdOutlineLibraryMusic,
  MdOutlineSportsSoccer,
  MdOutlineSportsEsports,
  MdOutlineSettings,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineHome,
  MdOutlineContactMail,
  MdOutlineHistoryToggleOff,
} from "react-icons/md";
import { BiCube } from "react-icons/bi";
import { RxDiscordLogo } from "react-icons/rx";
import { AiOutlineFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="main-sidebar">
      <div className="sidebar-main">
        <div className="box-1">
          <MdOutlineHome className="sidebar-icon" />
          <a href="" className="a1">
            Home
          </a>
        </div>
        <div className="box-1">
          <BiCube className="sidebar-icon" />
          <Link className="a1" to="/about">
            About
          </Link>
        </div>
        <div className="box-1">
          <MdOutlineContactMail className="sidebar-icon" />
          <Link className="a1" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="tool">
        <h1>Explore</h1>
        <div className="box-1">
          <MdOutlineLibraryAddCheck className="sidebar-icon" />
          <Link className="a1" to="/library">
            Library
          </Link>
        </div>
        <div className="box-1">
          <MdOutlineHistoryToggleOff className="sidebar-icon" />
          <a href="" className="a1">
            History
          </a>
        </div>
        <div className="box-1">
          <MdCastForEducation className="sidebar-icon" />
          <a href="" className="a1">
            Education
          </a>
        </div>
        <div className="box-1">
          <MdOutlineLibraryMusic className="sidebar-icon" />
          <a href="" className="a1">
            Music
          </a>
        </div>
        <div className="box-1">
          <MdOutlineSportsSoccer className="sidebar-icon" />
          <a href="" className="a1">
            Sports
          </a>
        </div>
        <div className="box-1">
          <MdOutlineSportsEsports className="sidebar-icon" />
          <a href="" className="a1">
            Esports
          </a>
        </div>
        <div className="box-1">
          <FaRegNewspaper className="sidebar-icon" />
          <a href="" className="a1">
            News
          </a>
        </div>
      </div>
      <div className="settings">
        <div className="box-1">
          <MdOutlineSettings className="sidebar-icon" />
          <a href="" className="a1">
            Settings
          </a>
        </div>
        <div className="box-1">
          <MdOutlineHelpOutline className="sidebar-icon" />
          <a href="" className="a1">
            Help
          </a>
        </div>
        <div className="box-1">
          <MdOutlineFeedback className="sidebar-icon" />
          <a href="" className="a1">
            Send feedback
          </a>
        </div>
      </div>
      <div className="contact">
        <div className="box-1">
          <FaInstagram className="sidebar-icon" />
          <a href="" className="a1">
            Instagram
          </a>
        </div>
        <div className="box-1">
          <AiOutlineFacebook className="sidebar-icon" />
          <a href="" className="a1">
            Facebook
          </a>
        </div>
        <div className="box-1">
          <RxDiscordLogo className="sidebar-icon" />
          <a href="" className="a1">
            Discord
          </a>
        </div>
      </div>
      <div className="footer">
        <h3>Copyright, All rights reserved</h3>
      </div>
    </div>
  );
}

export default Sidebar;
