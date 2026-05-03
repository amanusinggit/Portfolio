import { Navigate } from 'react-router-dom';
import {socialsData} from '../socials-data';

function SocialButton({ social, icon, onClick }) {
      return (
        <button className={`social-button ${social}`} onClick={onClick}>
          <i className={icon}></i>
          <span>{social.charAt(0).toUpperCase() + social.slice(1)}</span>
        </button>
      );
}

export default function Socials() {
  return (
    <div className="socials-container">
        <SocialButton
          social="github"
          icon={"fa-brands fa-github"}
          onClick={() => window.open("https://github.com/amanusinggit", '_blank')}
        />
        <SocialButton
          social="linkedin"
          icon={"fa-brands fa-linkedin"}
          onClick={() => window.open("https://www.linkedin.com/in/aman-singh-7126ba385/", '_blank')}
        />
    </div>
  );
}
