import React from 'react';
import Datetime from '../../utils/datetime';
import { FormattedMessage, FormattedDate } from 'react-intl';
const Entry = ({ entry }) => {
  const startDate = Datetime.getDisplayFromDate(entry.startDate);
  const endDate = Datetime.getDisplayFromDate(entry.endDate);
  return (
    <div className="row item">
      <div className="twelve columns">
          <h3>{entry.institution}</h3>
          <p className="info">
            {entry.area}
            <span> &bull; </span>
            <span className="info-summary">{entry.summary}</span>
            <span> &bull; </span>
            <em className="date">
            <FormattedDate value={startDate} year='numeric' month='short'/>
             - 
            <FormattedDate value={endDate==='Present'?Date.now():endDate} year='numeric' month='short'/>
            </em>
          </p>
      </div>
    </div>
)};

const Education = ({ content }) => (
  <section id='education'>
    <div className='row education'>
      <div className='two columns header-col'>
        <h1>
        <FormattedMessage id="education.title" defaultMessage="Education"/>
        </h1>
      </div>
      <div className='ten columns main-col'>
        {content.map((entry, index) => (
          <Entry key={index} entry={entry}/>
        ))}
      </div>
    </div>
  </section>
);

export default Education;