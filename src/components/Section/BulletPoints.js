import React from 'react';

const BulletPoints = ({ points }) => (
  <div>
    {points.map((point, index) => (
      <p key={index} className='point'>
        <span className='bullet-point'>&bull; </span>
        {point}
      </p>
    ))}
  </div>
);

export default BulletPoints;