import React from 'react';
import About from './About';
import Work from './Work';
import Education from './Education';
import Skills from './Skills';
import Portfolio from './Portfolio';
import References from './References'; 
import Footer from './Footer';

const Section = (props) => {
  const skillsContent = {
    skills: props.skills,
    languages: props.languages
  };
  return (
    <div>
      <About content={props.basics}/>
      <Work content={props.work}/>
      <Education content={props.education}/>
      <Skills content={skillsContent}/>
      <Portfolio content={props.portfolio}/>
      <References content={props.references}/>
      <Footer content={props.basics}/>
    </div>
  );
};

export default Section;