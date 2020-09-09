import React from 'react';

const Resume = (props) => {
  const { data: { skillmessage, skills, education, work } } = props;

  const getRandomColor = () => {
    const varters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const hashColor = varters[Math.floor(Math.random() * 16)]
      color += hashColor;
    }
    return color;
  }

  const educationInfo = education.map(({ school, degree, description, graduated }) => {
    return <div key={school}><h3>{school}</h3>
      <p className="info">{degree} <span>&bull;</span><em className="date">{graduated}</em></p>
      <p>{description}</p></div>
  })
  const workInfo = work.map(({ company, title, years, description }) => {
    return <div key={company}><h3>{company}</h3>
      <p className="info">{title}<span>&bull;</span> <em className="date">{years}</em></p>
      <p>{description}</p>
    </div>
  })

  const skillsInfo = skills.map(({ name, level }) => {
    const className = `bar-expand ${name.toLowerCase()}`;
    return (
      <li key={name}>
        <span style={{ width: level, backgroundColor: getRandomColor() }} className={className}></span><em>{name}</em>
      </li>
    )
  })


  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Образование</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {educationInfo}
            </div>
          </div>
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Практика</span></h1>
        </div>

        <div className="nine columns main-col">
          {workInfo}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Технологии</span></h1>
        </div>
        <div className="nine columns main-col">

          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">
              {skillsInfo}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
