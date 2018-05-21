import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import AppMenuItem from '../../../src/ui/layout/AppMenuItem';

const styles = theme => ({
  menuText: {
    color: '#595959',
    fontSize:14,
    padding:12,
    lineHeight: '1.5em',
    fontSmoothing:'none'
  }
});

// https://github.com/zeit/next.js/blob/master/examples/with-redux/pages/index.js
const MenuLink = ({href, as, ...rest}) => {
  return (<Link href={href} as={as}><AppMenuItem href={as} {...rest} component='a' /></Link>);
};


class AdminMenuNodes extends React.Component {
  render() {
    let {classes} = this.props;
    return (
      <div>
        <List className={classes.list}>
          <MenuLink as="/about" href="/about">YOLO</MenuLink>
          <MenuLink as="/" href="/">about</MenuLink>
          <MenuLink as="/squirrel" href="squirrel">fubar</MenuLink>
        </List>
        <Typography variant="body1" className={classes.menuText} noWrap>
          Est. 2005
          <br />
          We love art. We love you.
          <br />
          &copy; 2018 MPLSART.COM
        </Typography>
      </div>
    );
  }
}

AdminMenuNodes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AdminMenuNodes);