import React from 'react';
import { FormattedMessage } from 'react-intl';
const About = ({ content }) => (
  <section id="about">
    <div className="row">
      <div className="two columns">
        <img className="profile-pic" src={content.picture} alt={content.name}/>
      </div>
      <div className="ten columns main-col">
        <h2><FormattedMessage id="about.title" defaultMessage="About Me"/></h2>
        {content.summary.map((content, index) => (
              <p key={index}>{content}</p>
          ))}
        <div className="row">
          <div className="columns contact-details">
            <h2><FormattedMessage id="about.subtitle" defaultMessage="Contact Details"/></h2>
            <p className="address">
              <span>{content.location.city}</span>
              <br/>
              <span>{content.location.countryCode}</span>
              <br/>
              <a href={`skype:${content.phone}`}>
                <span>{content.phone}</span>
              </a>
              <br/>
              <a href={`mailto:${content.email}`}>
                <span>{content.email}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;