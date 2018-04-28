import React from 'react';
import PageBase from '../../docs/src/layout/PageBase';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../src/withRoot';
import withRedux from '../../src/withRedux'
import {initStore} from '../../src/store';
import GalleryFlyout from '../../src/ui/flyouts/GalleryFlyout';

class Index extends React.Component {
  render() {
    return (
      <PageBase>

        <h2>Gallery Popover</h2>
        <pre>import SlideshowLightbox from 'armature/dist/ui/popovers/GalleryPopover';</pre>

        <p>Lorem ipsum dolor sit amet, <GalleryFlyout>consectetur</GalleryFlyout> adipiscing elit. Pellentesque varius sollicitudin turpis et porta. Sed eu diam varius, aliquet orci in, congue mauris. Maecenas molestie eros sit amet diam lacinia.</p>
        <p>Maecenas aliquam lorem id purus pharetra elementum. Vestibulum eget massa sed nisl laoreet placerat vel vitae dolor. Integer gravida imperdiet ex. Sed porttitor enim in dolor blandit aliquet sed et metus. Phasellus porta ligula ac lorem tempus faucibus. In bibendum justo neque. Vestibulum nibh nisi, elementum quis risus in, vehicula iaculis magna. Suspendisse ut nisl placerat, tincidunt justo quis, aliquam massa. Aenean sed mi risus. Etiam odio ante, viverra vel auctor a, ultrices vel ligula. Pellentesque tempor sapien eu mattis cursus. Vestibulum pharetra tincidunt varius. Etiam dui augue, bibendum eget neque id, gravida consequat est. Curabitur porttitor nibh vel felis lacinia, nec dignissim tellus blandit. Mauris commodo odio at finibus ultrices. Donec rutrum lacus eget porta pulvinar.</p>
        <p>Vestibulum a quam sollicitudin, porta leo sit amet, semper elit. Maecenas aliquam neque quis feugiat iaculis. Donec vitae gravida lectus. Vivamus ac nunc egestas libero pellentesque tristique vitae sit amet libero. Donec venenatis elementum porttitor. Etiam et tortor eget nunc porttitor accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Curabitur eget suscipit leo. Mauris consectetur arcu enim, hendrerit pellentesque massa venenatis a. Nunc laoreet, leo quis porttitor porttitor, mi nisi laoreet turpis, nec accumsan leo sapien id orci. Pellentesque cursus, velit ac dapibus molestie, velit velit malesuada sem, ac dictum ex mauris a ante. Maecenas eleifend venenatis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis purus scelerisque, feugiat metus nec, malesuada nisi.</p>
        <p>Donec id aliquam metus. Nulla vel lacus ut ligula convallis iaculis eu viverra ante. Phasellus urna erat, molestie a tincidunt a, accumsan tempor nisi. Praesent quis sollicitudin purus, rhoncus auctor velit. Nulla auctor bibendum odio, et commodo enim egestas ultricies. Pellentesque ullamcorper rutrum mauris, bibendum imperdiet odio porttitor et. Curabitur ultricies, ipsum efficitur venenatis tempus, lectus lorem porttitor dui, sit amet elementum leo tortor eu diam. Phasellus lacinia enim mauris, quis sagittis dui ultrices a. Vivamus scelerisque quis nibh in pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin viverra vel quam vitae lacinia. Vestibulum blandit eleifend ante at cursus. Nunc tortor eros, tempus nec feugiat non, sodales in nulla. Suspendisse ac mattis nibh.</p>
        <p>Lorem ipsum dolor sit amet, <GalleryFlyout>consectetur</GalleryFlyout> adipiscing elit. Pellentesque varius sollicitudin turpis et porta. Sed eu diam varius, aliquet orci in, congue mauris. Maecenas molestie eros sit amet diam lacinia.</p>
      </PageBase>
    );
  }
}
//export default withRoot(withStyles({})(Index));
export default withRedux(initStore, null, {})(withRoot(withStyles({})(Index)));