import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
const Navbar = ({ navigation, intl }) => {
  const showNav = intl.formatMessage({id:'navMenu.showNav', defaultMessage: 'Show navigation'});
  const hideNav = intl.formatMessage({id:'navMenu.hideNav', defaultMessage: 'Hide navigation'});
  return (
    <nav id="nav-wrap" className="opaque">
      <a className="mobile-btn" href="#nav-wrap" title={showNav}>{showNav}</a>
      <a className="mobile-btn" href="#" title={hideNav}>{hideNav}</a>
      <ul id="nav" className="nav">
        {Object.keys(navigation).map((navigationLink, index) => (
          <li key={index}>
            <a href={`#${navigationLink}`} className="smoothscroll">
            <FormattedMessage id={`navigation.${navigationLink}`} defaultMessage="home"/>
            </a>
          </li>
        ))
        }
      </ul>
    </nav>
)};

export default injectIntl(Navbar);