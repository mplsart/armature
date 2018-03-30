import React from 'react';
import PropTypes from 'prop-types';
import AppMenu from './AppMenu';

class AppShell extends React.Component {
  state = { menuActive: false }; // TODO: Eventually, drive this off the redux store

  handleSiteMenuToggle = ({force, ...rest}) => {
    let menuActiveNext;
    if (force !== undefined) {
      menuActiveNext = force;
    } else {
      menuActiveNext = !this.state.menuActive;
    }
    this.setState({ menuActive: menuActiveNext });

    // Callback?
    this.props.handleSiteMenuToggle();
  }

  render() {
    let { children, appBarComponent, menuContentComponent, menuActive } = this.props;

    // TODO: Create a constructor to house the initial state of this.props.menuActive
    let appBar, mainMenu;

    if (appBarComponent) {
      appBar = (<this.props.appBarComponent menuActive={ this.state.menuActive } handleMenuToggle={ this.handleSiteMenuToggle.bind(this) } />);
    }

    if (menuContentComponent) {
      let menuContent = (<this.props.menuContentComponent menuActive={ this.state.menuActive } handleMenuToggle={ this.handleSiteMenuToggle.bind(this) } />);
      mainMenu = (<AppMenu contentComponent={ menuContent } menuActive={ this.state.menuActive } handleMenuToggle={ this.handleSiteMenuToggle.bind(this) } />);
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
AppShell.propTypes = {
  children: PropTypes.node,
  appBarComponent: PropTypes.any, // This is technically a class? hmm...
  menuContentComponent: PropTypes.any, // This is technically a class? hmm...
  menuActive: PropTypes.bool,
  handleSiteMenuToggle: PropTypes.func
};
export default AppShell;