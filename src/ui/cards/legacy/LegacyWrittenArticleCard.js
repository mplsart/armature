import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import LegacyCardBase from './LegacyCardBase';

class LegacyWrittenArticleCard extends React.Component {
  render() {
    let {classes, resource, ...rest} = this.props;

    let href = resource.permalink;
    return (
      <LegacyCardBase
        {...rest}
        title={resource.title}
        href={href}
        content={<div>{ resource.summary} <b><this.props.linkClass to={href}>Read More</this.props.linkClass></b></div>}
      />
    );
  }
}
LegacyWrittenArticleCard.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string, // TODO: one of 'big'
  resource: PropTypes.object
};

export default LegacyWrittenArticleCard;