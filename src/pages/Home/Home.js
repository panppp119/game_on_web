import React from 'react';

import SideNav from 'components/navs/SideNav';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <SideNav />
      </div>
    );
  }
}

export default Home;
