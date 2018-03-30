import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import LegacyCardBase from './LegacyCardBase';


const styles = (theme) => ({

});

class LegacyWrittenArticleCard extends React.Component {
  render() {
    let {classes, resource, ...rest} = this.props;
    return (
      <LegacyCardBase
        {...rest}
        title={resource.title}
        content={<div>{ resource.summary} <b><a href="#">Read More</a></b></div>}
      />
    );
  }
}
LegacyWrittenArticleCard.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string, // TODO: one of 'big'
  resource: PropTypes.object
};

export default withStyles(styles)(LegacyWrittenArticleCard);