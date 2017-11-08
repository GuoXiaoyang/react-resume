import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import SocialMedia from '../SocialMedia';

const Footer = ({ content, intl }) => {
  const authors = [{
    link:'https://suddi.github.io/',
    name:'Sudharshan Ravindran'
  },
  {
    link:'http://www.styleshout.com/',
    name:'Styleshout'
  }];
  const authorLink = (author) => (
    <a href={author.link} title={author.name}
      target="_blank" rel="noopener noreferrer">
      {author.name}
    </a>);
  const authorName = intl.formatMessage({id:'footer.authorName'});
  const author = (  
    <a href="https://github.com/GuoXiaoyang/" title={authorName}
    target="_blank" rel="noopener noreferrer">
    {authorName}
    </a>);
  return(
    <footer>
      <div className="row">
        <div className="twelve columns">
          <SocialMedia className="social-links" profiles={content.profiles}/>
          <ul className="copyright">
            {/* <li>
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
            </li> */}
            <FormattedMessage id="footer.description"  
            values={{
              author1: authorLink(authors[0]),
              author2: authorLink(authors[1]),
              author3: author
            }}/>
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
}

export default injectIntl(Footer);