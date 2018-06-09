import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import FrameworkPageBase from '../../../src/PageBase/PageBase';
import {Grid, Row, Col} from '../../../src/grid';
import AppShell from './AppShell';

const styles = theme => ({
  paddedContent: {
    paddingTop: theme.spacing.unit * 3
  }
});

class PageBase extends React.Component {
  render() {
    let {classes, /* activeMenuItem, theme, */ children, ...rest} = this.props;

    return (
      <AppShell>
        <FrameworkPageBase {...rest}>

          <Grid className={classes.paddedContent}>
            <Row>
              <Col xs={12}>
                {children}
                <Link href="/" as={process.env.BACKEND_URL + '/'}><a>home</a></Link> | <Link href="/ui/cards" as={process.env.BACKEND_URL + '/ui/cards'}><a>cards</a></Link> | <Link href="/ui/inputs/datetime" as={process.env.BACKEND_URL + '/ui/inputs/datetime'}><a>datetime</a></Link> | <Link href="/ui/popovers" as={process.env.BACKEND_URL + '/ui/popovers'}><a>popovers</a></Link> | <Link href="/ui/buttons" as={process.env.BACKEND_URL + '/ui/buttons'}><a>buttons</a></Link> | <Link href="/styles/typography" as={process.env.BACKEND_URL + '/styles/typography'}><a>typography</a></Link> | <Link href="/styles/colors" as={process.env.BACKEND_URL + '/styles/colors'}><a>colors</a></Link> | <Link href="/ui/lightbox" as={process.env.BACKEND_URL + '/ui/lightbox'}><a>lightbox</a></Link> | <Link href="/ui/inputs/autocomplete" as={process.env.BACKEND_URL + '/ui/inputs/autocomplete'}><a>autocomplete</a></Link> | <Link href="'/ui/alerts" as={process.env.BACKEND_URL + '/ui/alerts'}><a>alerts</a></Link> |
                <Link href="/mocks/homepage/homepagev3" as={process.env.BACKEND_URL + '/mocks/homepage/homepagev3'}><a>homepage v3</a></Link>

              </Col>
            </Row>
          </Grid>
        </FrameworkPageBase>
      </AppShell>
    );
  }
}

PageBase.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
};

export default withStyles(styles)(PageBase);