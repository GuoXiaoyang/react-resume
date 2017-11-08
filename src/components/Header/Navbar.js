import React from 'react';

const Navbar = ({ navigation }) => (
  <nav id="nav-wrap" className="opaque">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
    <ul id="nav" className="nav">
      {Object.keys(navigation).map((navigationLink, index) => (
        <li key={index}>
          <a href={`#${navigationLink}`} className="smoothscroll">
          {navigation[navigationLink]}
          </a>
        </li>
      ))
      }
    </ul>
  </nav>
);

export default Navbar;