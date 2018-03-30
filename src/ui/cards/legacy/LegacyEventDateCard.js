import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import LegacyCardBase from './LegacyCardBase';


const styles = (theme) => ({

});

class LegacyEventDateCard extends React.Component {
  render() {
    let {classes, resource, ...rest} = this.props; // resource is left out for the moment
    let content = (
      <div>Two Stupid Dogs</div>
    );

    return (
      <LegacyCardBase
        title={resource.name}
        content={content}
        {...rest}
      />
    );
  }
}

LegacyEventDateCard.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string, // TODO: one of 'big'
  resource: PropTypes.object
};

export default withStyles(styles)(LegacyEventDateCard);