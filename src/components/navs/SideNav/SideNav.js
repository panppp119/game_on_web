import React from 'react';
import { Link } from 'react-router-dom';

import './SideNav.scss';

class SideNav extends React.Component {
  render() {
    const items = [
      {
        label: 'Game 1',
        icon: 1,
        link: 'game_1'
      },
      {
        label: 'Game 2',
        icon: 2,
        link: 'game_2'
      },
      {
        label: 'Game 3',
        icon: 3,
        link: 'game_3'
      },
      {
        label: 'Game 4',
        icon: 4,
        link: 'game_4'
      }
    ];

    return (
      <div id="side-nav">
        <ul className="desktop">
          <li className="main">Teacher Ple</li>
          <li>
            <Link to="/">Home</Link>
          </li>

          {items.map((item, i) => {
            return (
              <li key={i}>
                <Link to="#">{item.label}</Link>
              </li>
            );
          })}

          <li className="authen">User</li>
        </ul>

        <ul className="mobile">
          <li>
            <Link to="/">Home</Link>
          </li>

          {items.map((item, i) => {
            return (
              <li key={i}>
                <Link to={item.link}>{item.icon}</Link>
              </li>
            );
          })}

          <li className="authen">User</li>
        </ul>
      </div>
    );
  }
}

export default SideNav;
