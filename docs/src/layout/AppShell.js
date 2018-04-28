import React from 'react';
import PropTypes from 'prop-types';
import FrameworkAppShell from '../../../src/ui/layout/AppShell';
import MainMenuContent from './MainMenuContent';
//import {Grid, Row, Col} from 'armature/dist/grid';
import AppBar from './AppBar';


class PageBase extends React.Component {
  state = { menuActive: false }; // TODO: Eventually, drive this off the redux store appShellState

  handleSiteMenuToggle = (force) => {
    let isMenuActive;
    if (force != undefined) {
      isMenuActive = force;
    } else {
      isMenuActive = !this.state.menuActive;
    }
    this.setState({ menuActive: isMenuActive });
  }

  render() {
    let {activeMenuItem, children, ...rest} = this.props;

    return (
      <div>
        <FrameworkAppShell
          handleSiteMenuToggle={this.handleSiteMenuToggle.bind(this)}
          appBarComponent = { AppBar }
          menuContentComponent = { MainMenuContent }
        >
          {children}
        </FrameworkAppShell>
      </div>
    );
  }
}

PageBase.propTypes = {
  children: PropTypes.node,
  activeMenuItem: PropTypes.string, // id of menu item to highlight (might not be in use?)
};

export default PageBase;