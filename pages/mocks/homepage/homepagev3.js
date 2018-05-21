import React from 'react';
import PageBase from '../../../docs/src/layout/PageBase';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../src/withRoot';
import withRedux from '../../../src/withRedux';
import {initStore} from '../../../src/store';
import {Col, Row} from '../../../src/grid';
import MarqueeCardBase from '../../../src/ui/cards/marquee/MarqueeCardBase';
import Paper from '@material-ui/core/Paper';

class Marquee extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={9}>
          <MarqueeCardBase />
        </Col>
        <Col xs={3}>
          <Row>
            <Col xs={12}><img src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTA2MDAwMDE/card_large.png" style={{width:'100%'}}/></Col>
            <Col xs={12}><img src="https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTA2MDAwMDE/card_large.png" style={{width:'100%'}}/></Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <PageBase>
        <h2>The best local art.</h2>
        <Marquee />
        [AdSpot]
        [Events]

      </PageBase>
    );
  }
}
//export default withRoot(withStyles({})(Index));
export default withRedux(initStore, null, {})(withRoot(withStyles({})(Page)));