import React from 'react';
import PropTypes from 'prop-types';

class AppShell extends React.Component {
  state = { menuActive: false }; // TODO: Eventually, drive this off the redux store

  handleSiteMenuToggle = () => {
    this.setState({ menuActive: !this.state.menuActive });
  }

  render() {
    let { children, appBarComponent, adminMenu } = this.props;

    return (
      <div>
        { <this.props.appBarComponent menuActive={ this.state.menuActive } handleMenuToggle={ this.handleSiteMenuToggle.bind(this) } /> }
        { <this.props.adminMenuComponent menuActive={ this.state.menuActive } handleMenuToggle={ this.handleSiteMenuToggle.bind(this) }/> }
        { children }
      </div>
    );
  }
}

export default AppShell;