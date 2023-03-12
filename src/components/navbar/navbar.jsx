import React, { Component } from "react";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-main">
        <div className="logo-img">
          {/* <img src={image} alt="" /> */}
          <h1>AHP</h1>
        </div>
        <div className="search-btn">
          <button>Search</button>
          <div className="icon-search">
            <FaSearch />
          </div>
        </div>
        <div className="menus">
          <div className="box">
            <Link to="/signin">Sing up</Link>
          </div>
          <div className="box">
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    );
  }
}
