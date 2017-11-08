import React from 'react';
import SocialMedia from '../SocialMedia';


const Banner = ({ basics }) => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">
        {basics.name}
      </h1>
      <br/>
      <hr/>
      <SocialMedia profiles={basics.profiles} />
    </div>
  </div>
);

export default Banner;