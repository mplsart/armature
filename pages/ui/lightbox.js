import React from 'react';
import PageBase from '../../docs/src/layout/PageBase';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../src/withRoot';
import withRedux from '../../src/withRedux';
import {initStore} from '../../src/store';
import SlideshowLightboxDemo from '../../src/ui/lightbox/SlideshowLightboxDemo';

class Index extends React.Component {
  render() {
    return (
      <PageBase>

        <h2>Lightbox</h2>
        <pre>import SlideshowLightbox from 'armature/dist/ui/lightbox/SlideshowLightbox';</pre>

        <h3><SlideshowLightboxDemo /></h3>

      </PageBase>
    );
  }
}
//export default withRoot(withStyles({})(Index));
export default withRedux(initStore, null, {})(withRoot(withStyles({})(Index)));