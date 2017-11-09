import React from 'react';
import BulletPoints from './BulletPoints';
import Datetime from '../../utils/datetime';
import { FormattedMessage } from 'react-intl';

const Entry = ({ index, total, entry }) => {

  const startDate = Datetime.getDisplayFromDate(entry.startDate);
  const endDate = Datetime.getDisplayFromDate(entry.endDate);
  const divider = (index + 1) === total ? (<br/>) : (<hr/>);
  return (
    <div className="row item">
      <div className="twelve columns">
        <h3>
          <a href={entry.website}>{entry.company}</a>
        </h3>
        <p className="info">
          {entry.position}
          <span> &bull; </span>
          <span className="info-summary">{entry.summary}</span>
          <span> &bull; </span>
          <em className="date">{startDate} - {endDate}</em>
        </p>
        <BulletPoints points={entry.highlights} />
      </div>
      {divider}
    </div>
  );
}

const Work = ({ content }) => {
  const numEntries = content.length;
  return (
    <section id='work'>
      <div className='row work'>
        <div className='two columns header-col'>
          <h1>
          <FormattedMessage id="work.title" defaultMessage="Work"/>
          </h1>
        </div>
        <div className='ten columns main-col'>
          {content.map((entry, index) => (
            <Entry key={index} index={index} total={numEntries} entry={entry}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
