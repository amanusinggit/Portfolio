import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { skills } from '../skills-data.js';

function SkillCard({ icon, name }) {
  return (
    <Link to={`/skills/${name}`} className='skill-card neumorphic-container'>
      <div className='skill-icon'>
        <i className={icon}></i>
      </div>
      <div className='skill-name'>{name}</div>
    </Link>
  ); 
}

export default function Skills() {
  const {skillName} = useParams();
  console.log(skillName);
  return (
    <div className='skills-container'>
      <div className='skills-name-container'>
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
      {skillName && (
        <div className='skill-detail neumorphic-container'>
          <h2>{skillName}</h2>
          <p>{skills.find(s => s.name === skillName)?.description.proof}</p>
          <div className='proof-links'>
            {skills.find(s => s.name === skillName)?.description["proof-links"].map((link, index) => (
              <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
