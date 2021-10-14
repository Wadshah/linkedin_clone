import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

function Header() {
    return (
        <div className="header">
           <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/1383/1383262.png" alt="" 
                />

                <div className="header__search">
                    <SearchIcon />
                    <input type = "text"/>
                </div>
            </div>
            <div className="header__right">
              <HeaderOption Icon={HomeIcon} title="Home" />
              <HeaderOption Icon={SupervisorAccountIcon}title="My Network" />
              <HeaderOption Icon={ChatIcon}title="Messaging" />
              <HeaderOption Icon={NotificationsIcon}title="Notification" />
              <HeaderOption avatar="https://i.pinimg.com/564x/4f/38/a9/4f38a963ca3ad3792373e0450a82d1a1.jpg" 
              title='me' />

            </div>
        </div>
    );
}

export default Header;
