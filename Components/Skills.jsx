import { skills } from '../skills-data.js';

function SkillCard({ icon, name }) {
  return (
    <div className='skill-card neumorphic-container'>
      <div className='skill-icon'>
        <i className={icon}></i>
      </div>
      <div className='skill-name'>{name}</div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className='skills-container'>
      {skills.map((skill, index) => (
        <SkillCard key={index} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  );
}
