import React from 'react';
import PageBase from '../../docs/src/layout/PageBase';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../src/withRoot';
import withRedux from '../../src/withRedux';
import {initStore} from '../../src/store';
import GiantActionButton from '../../src/ui/buttons/GiantActionButton';
import SocialButton from '../../src/ui/buttons/SocialButton';
import ListItemActionButton from '../../src/ui/buttons/ListItemActionButton';
import Button from '@material-ui/core/Button';

class ExternalLink extends React.Component {
  render() {
    let props = this.props;
    return (<a {...props} />);
  }
}

class Index extends React.Component {
  render() {
    return (
      <PageBase>
        <h1>Buttons</h1>
        <p>Buttons are great.</p>

        <h2>Action Buttons</h2>
        <pre>tbd</pre>

        <p><Button variant="raised" color="primary">Default Button</Button></p>
        <p><GiantActionButton>Giant Action Button</GiantActionButton></p>
        <p><ListItemActionButton>List Item Action Button</ListItemActionButton></p>


        <h2>Social Buttons</h2>
        <p><SocialButton href="http://www.twitter.com/mplsart" service="twitter" target="_blank"/></p>
        <p><SocialButton href="http://www.facebook.com/mplsart" service="facebook" target="_blank"/></p>
        <p><SocialButton href="http://www.youtube.com/u/mplsart" service="youtube" target="_blank"/></p>
        <br />
        <br />
        <br />
        <br />
      </PageBase>
    );
  }
}
//export default withRoot(withStyles({})(Index));
export default withRedux(initStore, null, {})(withRoot(withStyles({})(Index)));