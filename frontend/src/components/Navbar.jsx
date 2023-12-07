import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Mon Site</span>
        </Link>
        <Link to="/">
          <HomeOutlinedIcon />
        </Link>
        <DarkModeOutlinedIcon />
        <WbSunnyOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search ..." />
        </div>
      </div>
      <div className="right">
        <Link to="/login">
          <PersonOutlineOutlinedIcon />
        </Link>
        <EmailIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src="https://media.istockphoto.com/id/1174472274/fr/photo/connexion-avec-la-nature.jpg?s=1024x1024&w=is&k=20&c=by9dOp8ZqT4z4DauI94ybMjocbnNiWTwJu6GKt3WqTw="
            alt="Description"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span>Fatma Itchir</span>
        </div>
      </div>
    </div>
  );
}
