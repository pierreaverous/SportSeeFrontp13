import React from "react";
import './LeftNavBarStyle.scss'
import logoYoga from "../../Assets/Images/yoga-sportsee.png"
const LeftNavBar = () =>{
    return(
        <div className='leftnavbarcontainer'>
            <div className="logoContainer">
                <div className='background-logo-left'>
                    <img  className="logo-img" src={logoYoga} alt={logoYoga}/>
                </div>
                <div className='background-logo-left'>
                    <img  className="logo-img" src={logoYoga} alt={logoYoga}/>
                </div>
                <div className='background-logo-left'>
                    <img  className="logo-img" src={logoYoga} alt={logoYoga}/>
                </div>
                <div className='background-logo-left'>
                    <img  className="logo-img" src={logoYoga} alt={logoYoga}/>
                </div>
                <div className='background-logo-left'>
                    <img  className="logo-img" src={logoYoga} alt={logoYoga}/>
                </div>
            </div>

        </div>
    )
}

export default LeftNavBar