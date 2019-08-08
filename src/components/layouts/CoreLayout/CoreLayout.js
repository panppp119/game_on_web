import React from 'react';

import SideNav from 'components/navs/SideNav';

import './CoreLayout.scss';

class CoreLayout extends React.Component {
  render() {
    return (
      <div id="corelayout">
        <SideNav />

        <div className="layout-content">{this.props.children}</div>
      </div>
    );
  }
}

export default CoreLayout;
