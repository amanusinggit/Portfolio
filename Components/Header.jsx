import { useState } from "react";
import {tabs} from '../tab-data';
import { Link, NavLink, useParams } from "react-router-dom";

const NavItems = ({to, icon, label}) => {
    console.log(to, icon , label);
    return (
        <NavLink to={to} className={({isActive}) => `nav-items ${isActive ? 'active' : ''}`}>
            {({isActive}) => {
                console.log(isActive);
                return (
                    <>
                        <i className={icon}></i>
                        {isActive ? <span>{label}</span>  : null }
                    </>
                );
            }}
        </NavLink>
    );
}
const Header = () => {

    return (
        <div className="header">
            <div className="logo neumorphic-container header-element">Aman.dev</div>
            <div className="tabs neumorphic-container header-element">
                {tabs.map((tab, index) => (
                    <NavItems 
                        key={index}
                        icon={tab.icon}
                        label={tab.label}
                        to={tab.to}
                    />
                ))}
            </div>
            <div className="cta neumorphic-container header-element">
                <div className="icon-holder">
                    <i className="fa-regular fa-comment"></i>
                </div>
                <div>Reach Out</div>
            </div>
        </div>
    );
}

export default Header;