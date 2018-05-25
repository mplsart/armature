import React from 'react';
import PageBase from '../../../docs/src/layout/PageBase';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../src/withRoot';
import withRedux from '../../../src/withRedux';
import {initStore} from '../../../src/store';
import {Col, Row} from '../../../src/grid';
import {ContentTitle, Lead} from '../../../src/typography';

class Page extends React.Component {
  render() {
    return (
      <PageBase>
        <ContentTitle>Super Cool Event</ContentTitle>
        <Lead>This event is dope as fuck</Lead>
      </PageBase>
    );
  }
}

export default withRedux(initStore, null, {})(withRoot(withStyles({})(Page)));