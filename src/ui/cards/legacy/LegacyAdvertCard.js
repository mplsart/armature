import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import LegacyCardBase from './LegacyCardBase';


const styles = (theme) => ({

});

class LegacyAdvertCard extends React.Component {
  render() {
    let {classes, ...rest} = this.props;
    return (
      <LegacyCardBase {...rest} />
    );
  }
}
LegacyAdvertCard.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string, // TODO: one of 'big'
};

export default withStyles(styles)(LegacyAdvertCard);