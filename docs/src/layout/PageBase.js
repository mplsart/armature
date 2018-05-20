import React from 'react';
import PropTypes from 'prop-types';
import FrameworkPageBase from '../../../src/PageBase/PageBase';
import AppShell from './AppShell';
import Link from 'next/link';
import {Grid, Row, Col} from '../../../src/grid';

const styles = theme => {};

class PageBase extends React.Component {
  render() {
    let {classes, activeMenuItem, theme, children, ...rest} = this.props;

    return (
      <AppShell>
        <FrameworkPageBase {...rest}>

          <Grid>
            <Row>
              <Col xs={12}>
                {children}
                <Link href="/" as={process.env.BACKEND_URL + '/'}><a>home</a></Link> | <Link href="/ui/inputs/datetime" as={process.env.BACKEND_URL + '/ui/inputs/datetime'}><a>datetime</a></Link> | <Link href="/ui/popovers" as={process.env.BACKEND_URL + '/ui/popovers'}><a>popovers</a></Link> | <Link href="/ui/buttons" as={process.env.BACKEND_URL + '/ui/buttons'}><a>buttons</a></Link> | <Link href="/styles/typography" as={process.env.BACKEND_URL + '/styles/typography'}><a>typography</a></Link> | <Link href="/styles/colors" as={process.env.BACKEND_URL + '/styles/colors'}><a>colors</a></Link> | <Link href="/ui/lightbox" as={process.env.BACKEND_URL + '/ui/lightbox'}><a>lightbox</a></Link> | <Link href="/ui/inputs/autocomplete" as={process.env.BACKEND_URL + '/ui/inputs/autocomplete'}><a>autocomplete</a></Link>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Col>
            </Row>
          </Grid>
        </FrameworkPageBase>
      </AppShell>
    );
  }
}

PageBase.propTypes = {
  children: PropTypes.node,
};

export default PageBase;