import React from 'react';


const Backend = () => {
  const skills = [
    { name: "Problem Solving", rating: "3/5" },
    { name: "Interpersonal Skills", rating: "4/5" },
    { name: "Leadership Skills", rating: "3/5" },
    { name: "Team Player Skills", rating: "4/5" },
    { name: "Communication Skills", rating: "3/5" }
  ];

  return (
    <div className="">
      <h3 className="skills__title1">Soft Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          {skills.map((skill, index) => (
            <div key={index} className="skills__data">
              <div className="skills__rating">
                <div className="skills__rating-circle">
                  {skill.rating} {/* Display number in X/5 format */}
                </div>
              </div>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Backend;
