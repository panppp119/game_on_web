import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGamepad, FaUser } from 'react-icons/fa';

import './SideNav.scss';

class SideNav extends React.Component {
  render() {
    const items = [
      {
        label: 'Home',
        icon: <FaHome />,
        link: '/'
      },
      {
        label: 'Admin',
        icon: <FaUser />,
        link: '/admin'
      },
      {
        label: 'Game 1',
        icon: (
          <span>
            <FaGamepad /> 1
          </span>
        ),
        link: '/game_1'
      },
      {
        label: 'Game 2',
        icon: (
          <span>
            <FaGamepad /> 2
          </span>
        ),
        link: '/game_2'
      },
      {
        label: 'Game 3',
        icon: (
          <span>
            <FaGamepad /> 3
          </span>
        ),
        link: '/game_3'
      },
      {
        label: 'Game 4',
        icon: (
          <span>
            <FaGamepad /> 4
          </span>
        ),
        link: '/game_4'
      }
    ];

    return (
      <div id="side-nav">
        <ul className="desktop">
          <li className="main">Teacher Ple</li>

          {items.map((item, i) => {
            return (
              <li key={i}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            );
          })}
        </ul>

        <ul className="mobile">
          {items.map((item, i) => {
            return (
              <li key={i}>
                <Link to={item.link}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SideNav;
