import React from 'react';
import SocialMedia from '../SocialMedia';

const Footer = ({ content }) => (
  <footer>
    <div className="row">
      <div className="twelve columns">
        <SocialMedia className="social-links" profiles={content.profiles}/>
        <ul className="copyright">
          <li>
            This site is developed in React.js by&nbsp;
            <a
              href="https://suddi.github.io"
              title="Sudharshan Ravindran"
              target="_blank"
              rel="noopener noreferrer">
              Sudharshan Ravindran
            </a>
            from the original design of Ceevee from&nbsp;
            <a
              href="http://www.styleshout.com/"
              title="Styleshout"
              target="_blank"
              rel="noopener noreferrer">
              Styleshout
            </a>
            And it is reconstructed with ES6 by 
            <a href="https://" title="GuoXiaoyang" target="_blank" rel="noopener noreferrer">
            GuoXiaoyang
            </a>
          </li>
        </ul>
      </div>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;