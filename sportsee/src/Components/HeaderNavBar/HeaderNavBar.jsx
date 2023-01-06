import React from "react";
import "./HeaderNavBarStyle.scss"
import logo from "../../Assets/Images/sportsee.png"

const HeaderNavBar = () =>{
    return(
        <div className='NavBarContainer'>
            <div className='title-list'>
                <div className="sportseeLogo">
                    <img  className="logo" src={logo} alt={logo}/>
                    <p className='title-navbar'>SportSee</p>
                </div>
                <p className='title-navbar'>Acceuil</p>
                <p className='title-navbar'>profile</p>
                <p className='title-navbar'>Reglage</p>
                <p className='title-navbar'>Communauté</p>
            </div>
        </div>
    )
}

export default HeaderNavBar