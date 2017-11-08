import React from 'react';
import Header from './Header/Header';
import Navbar from './Header/Navbar';
import Banner from './Header/Banner';
import ScrollDown from './Header/ScrollDown';
import Section from './Section'; 

const Home = ({ resume, navigation }) => (

  <div>
    <Header>
      <Navbar navigation={navigation}/>
      <Banner basics={resume.basics}/>
      <ScrollDown/>
    </Header>
    <Section
      basics={resume.basics}
      work={resume.work}
      education={resume.education}
      skills={resume.skills}
      languages={resume.languages}
      portfolio={resume.projects}
      references={resume.references}/>
  </div>
);

export default Home;