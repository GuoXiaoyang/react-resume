
import React from 'react';
import Carousel from 'nuka-carousel';
import { FormattedMessage } from 'react-intl';

const Entry = ({ entry }) => (
  <div>
    <blockquote>
      <p>{entry.reference}</p>
      <cite>
        {entry.name}
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`${entry.position}, ${entry.company}`}
      </cite>
    </blockquote>
  </div>
);

const References = ({ content }) => {
  const carouselConfig = {
    autoplay: true,
    decorators: [],
    framePadding: '10px',
    cellSpacing: 30,
    wrapAround: true
  };
  return (
    <section id='testimonials'>
      <div className='text-container'>
        <div className='row'>
          <div className='two columns header-col'>
            <h1>
              <FormattedMessage id="references.title" defaultMessage="References"/>
            </h1>
          </div>
            <div className='columns flex-container'>
              <div className='flexslider'>
                <Carousel
                  autoplay={carouselConfig.autoplay}
                  decorators={carouselConfig.decorators}
                  wrapAround={carouselConfig.wrapAround}>
                    {content.map((entry, index) => (
                      <Entry key={index} entry={entry}/>
                    ))}
                </Carousel>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default References;