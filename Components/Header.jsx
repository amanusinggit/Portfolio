import { useState } from "react";
import {tabs} from '../tab-data';
import { Link } from "react-router-dom";

const NavItems = ({to, icon, label, active, onClick}) => {
    return (
        <Link to={to} className={`nav-items ${active ? 'active' : ''}`} onClick={onClick}>
            <i className={icon}></i>
            {active ? <span>{label}</span>  : null} 
        </Link>
    );
}
const Header = () => {
    const [activeTab, setActiveTab] = useState(0);

    const activateTab = (index) => {
        console.log("clicked");
        setActiveTab(index);
    }

    return (
        <div className="header">
            <div className="logo neumorphic-container header-element">Aman.dev</div>
            <div className="tabs neumorphic-container header-element">
                {tabs.map((tab, index) => (
                    <NavItems 
                        key={index}
                        icon={tab.icon}
                        label={tab.label}
                        active={index === activeTab}
                        to={tab.to}
                        onClick={() => {console.log("clicked");activateTab(index)}}
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