import React from 'react';

import CoreLayout from 'components/layouts/CoreLayout';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <CoreLayout>
        <div id="home-page">
          <h1>Home</h1>
        </div>
      </CoreLayout>
    );
  }
}

export default Home;
