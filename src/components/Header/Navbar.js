import React from 'react';
import { FormattedMessage } from 'react-intl';
const Navbar = ({ navigation }) => {

  return (
    <nav id="nav-wrap" className="opaque">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
      <ul id="nav" className="nav">
        {Object.keys(navigation).map((navigationLink, index) => (
          <li key={index}>
            <a href={`#${navigationLink}`} className="smoothscroll">
            <FormattedMessage id={`navigation.${navigationLink}`} defaultMessage="aa"/>
            </a>
          </li>
        ))
        }
      </ul>
    </nav>
)};

export default Navbar;