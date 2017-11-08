
import React from 'react';
class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { background: '#313131' }   
    };
  }
  handleMouseEnter() {
    this.setState({
      style: { background: '#11ABB0' }
    });
  }

  handleMouseLeave() {
    this.setState({
      style: { background: '#313131' }
    });
  }

  render() {
    return (
      <li>
        <span
        className={`bar-expand percentage${this.props.entry.level}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={this.state.style}/>
          <em>{this.props.entry.name}</em>
      </li>
    );
  }
}

const Skill = ({ title, content, summary }) => {

  const summaries = summary.map((point, index) => (
    <p key={index} className='skill-summary'>{point}</p>
  ));

  return (
    <div className="row inside">
      <h3>{title}</h3>
      {summaries}
      <div className="bars">
        <ul className="skills">
          {content.map((entry, index) =>(
          <Entry key={index} entry={entry}/>
        ))}
        </ul>
      </div>
    </div>
  );
};

const Skills = ({ content }) => (

  <section id="skill">
    <div className="row skill">
      <div className="two columns header-col">
        <h1>
          <span>Skills</span>
        </h1>
      </div>
      <div className="ten columns main-col">
        {content.skills.map((skill, index) => (
          <Skill key={index} title={skill.title} content={skill.skillDetails} 
          summary={skill.description}/>
        ))}

      </div>
    </div>
  </section>
);

export default Skills;
