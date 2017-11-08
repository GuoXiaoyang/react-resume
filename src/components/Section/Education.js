import React from 'react';
import Datetime from '../../utils/datetime';

const Eduction = ({ content }) => {
  const startDate = Datetime.getDisplayFromDate(content.startDate);
  const endDate = Datetime.getDisplayFromDate(content.endDate);
  return (
    <div className="row item">
      <div className="twelve columns">
          <h3>{content.institution}</h3>
          <p className="info">
            {content.area}
            <span> &bull; </span>
            <span className="info-summary">{content.summary}</span>
            <span> &bull; </span>
            <em className="date">{startDate} - {endDate}</em>
          </p>
      </div>
    </div>
)};

export default Eduction;