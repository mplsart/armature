import React from 'react';
import PageBase from '../docs/src/layout/PageBase';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import withRedux from '../src/withRedux'
import {initStore} from '../src/store';

class Index extends React.Component {
  render() {
    return (
      <PageBase>
        <p style={{ color: 'blue' }}>
          hi there
        </p>
      </PageBase>
    );
  }
}
//export default withRoot(withStyles({})(Index));
export default withRedux(initStore, null, {})(withRoot(withStyles({})(Index)));