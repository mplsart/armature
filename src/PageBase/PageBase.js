// Base Wrapper for Pages
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionFactory } from '../redux';


class PageBase extends React.Component{
  componentWillMount() {
    this.props.loadPage();
  }

  render() {
    let {children} = this.props;
    return (<div>{children}</div>);
  }
}


PageBase.propTypes = {
  children: PropTypes.node,
  pageAction: PropTypes.any,
  loadPage: PropTypes.func,
};

function mapStateToProps(/* state */) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadPage: bindActionCreators(() => {
      if (!ownProps.pageAction) {
        return {type: 'UNDEFINED_PAGE_LOAD'};
      }

      // Duck Type - action with args
      if (Array.isArray(ownProps.pageAction) && ownProps.pageAction.length === 2) {
        return actionFactory(ownProps.pageAction[0].REQUEST, {...ownProps.pageAction[1]});
      }

      // Duck Type - Async Request
      if (ownProps.pageAction.REQUEST) { // If Page Actio is a asyncRequest Type
        return actionFactory(ownProps.pageAction.REQUEST, {});
      }

      console.error('Unknown pageAction:');
      console.error(ownProps.pageAction.REQUEST);
    }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PageBase);