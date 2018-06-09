import React from 'react';
import PageBase from '../../docs/src/layout/PageBase';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../src/withRoot';
import withRedux from '../../src/withRedux';
import {initStore} from '../../src/store';
import NoticeBanner from '../../src/ui/alerts/NoticeBanner';

class AlertsPage extends React.Component {
  render() {
    return (
      <PageBase>
        <h1>Alerts and Notices</h1>
        <p>Use these for expired content, closed galleries, etc.</p>

        <h2>Inline Notice</h2>
        <pre>import NoticeBanner from 'armature/dist/ui/alerts/NoticeBanner';</pre>

        <p><NoticeBanner>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius sollicitudin turpis et porta. Sed eu diam varius, aliquet orci in, congue mauris. Maecenas molestie eros sit amet diam lacinia</NoticeBanner></p>
      </PageBase>
    );
  }
}

export default withRedux(initStore, null, {})(withRoot(withStyles({})(AlertsPage)));