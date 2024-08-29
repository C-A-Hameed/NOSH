import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const Navbar = () => {

  const [menu, setMenu] = useState('home');

  return (
    <div className="navbar">
      <strong><h1 className="logo">DAWAT.</h1></strong>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>Menu</a>
        <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile-App</a>
        <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <SearchOutlinedIcon />{" "}
        <div className="navbar-search-icon">
          <ShoppingBagOutlinedIcon /> <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
