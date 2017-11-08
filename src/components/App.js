import React, { Component } from 'react';
import resumeConfig from '../template/resume.json';
// import Main from './Main';
import Home from './Home';

const navigation = {
  home: 'Home',
  about: 'About',
  work: 'Work',
  education: 'Education',
  skill: 'Skills',
  portfolio: 'Portfolio',
  testimonials: 'References'
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home resume={resumeConfig} navigation={navigation}/>
      </div>
    );
  }
}

export default App;
