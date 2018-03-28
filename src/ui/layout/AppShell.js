import React from 'react';
import PropTypes from 'prop-types';
import AppMenu from './AppMenu';


class AppShell extends React.Component {
  state = { menuActive: false }; // TODO: Eventually, drive this off the redux store

  handleSiteMenuToggle = () => {
    this.setState({ menuActive: !this.state.menuActive });
  }

  render() {
    let { children, appBarComponent, menuContentComponent } = this.props;

    let appBar, mainMenu;

    if (appBarComponent) {
      appBar = (<this.props.appBarComponent menuActive={ this.state.menuActive } handleMenuToggle={ this.handleSiteMenuToggle.bind(this) } />);
    }

    if (menuContentComponent) {
      mainMenu = (<AppMenu contentComponent={ menuContentComponent } menuActive={ this.state.menuActive } handleMenuToggle={ this.handleSiteMenuToggle.bind(this) }/>);
    }

    return (
      <div>
        { appBar }
        { mainMenu }
        { children }
      </div>
    );
  }
}

export default AppShell;