import React from "react";

const Frontend = () => {
  return (
    <div className='about-skills'>
      <h3 className="skills__title">Technical Skills</h3>
      <div className='about-skill'>
        <p>HTML& CSS</p>
        <hr style={{width: "51%"}} /> {/* Skill level 4 */} 
      </div>
      <div className='about-skill'>
        <p>Java Spring Boot</p>
        <hr style={{width: "70%"}} />
      </div>
      <div className='about-skill'>
        <p>PostgreSQL</p>
        <hr style={{width: "70%"}} />
      </div>
      <div className='about-skill'>
        <p>Angular</p>
        <hr style={{width: "51%"}} />
        <div className='skill-level'>
     
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};
export default Frontend;
