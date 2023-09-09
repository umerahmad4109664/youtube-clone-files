import React,{useState} from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";


function Header() {
  const [inputSearch,setInputSearch]=useState('');
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />
        <Link to={`/`}>
        <img
          className="header-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
        </Link>
      </div>
      <div className="header-input">
      <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
      <Link to={`/search/${inputSearch}`}>
      <SearchIcon className="input-button"/>
      </Link>
      </div>
      <div className="header-icons">
      <VideoCallIcon className="icon"/>
      <AppsIcon className="icon"/>
      <NotificationsIcon className="icon" />
      <Avatar
        alt="U"
        src="https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_640.jpg"
      />
      </div>
    </div>
  );
}

export default Header;
