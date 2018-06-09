import React from 'react';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../../../src/withRoot';
import withRedux from '../../../src/withRedux';
import {initStore} from '../../../src/store';

import {Col, Row} from '../../../src/grid';
import MegaHeader from '../../../src/typography/MegaHeader';
import MarqueeCardBase from '../../../src/ui/cards/marquee/MarqueeCardBase';
import MarqueeCardEvent from '../../../src/ui/cards/marquee/MarqueeCardEvent';
import PageBase from '../../../docs/src/layout/PageBase';
import MegaBannerAd from '../../../src/ui/cards/ads/MegaBannerAd';
import compose from 'recompose/compose';

import withWidth from '@material-ui/core/withWidth';

class _Marquee extends React.Component {
  render() {
    const {width} = this.props;

    // TODO: This needs to come from the reducer, etc

    var adResource = {
      resource_type: 'Advert',
      advert_type_label: 'Local Sponsor',
      advert_label: 'WPT002_6mnthads_APRIL132018',
      image_url: 'https://storage.googleapis.com/cdn.mplsart.com/adverts/temp/WPT002_6mnthads_2018_04_13.jpg',
      goto_url: 'http://www.wetpaintart.com/?from=mplsart',
      advert_description: 'Wet Paint Artist\'s Materials & Framing',
      image_width: 700,
      image_height: 968,
      advert_client: 'wetpaint',
      advert_campaign: '6month',
      weight: 15
    };

    var adspotId = 'homepage_mock';
    const adProps = {adspotId: adspotId, resource: adResource};


    return (
      <Row>
        <Col xs={12} lg={9}>
          <MarqueeCardBase />
        </Col>
        {(width == 'xs' || width == 'sm' || width == 'md') && <Col xs={12}><MegaBannerAd width={width} {...adProps} /></Col>}
        <Col xs={12} lg={3}>
          <Row>
            <Col xs={12} sm={6} lg={12}>
              <MarqueeCardEvent />
            </Col>
            <Col xs={12} sm={6} lg={12}>
              <MarqueeCardEvent />
            </Col>
          </Row>
        </Col>
        {(width == 'lg' || width == 'xl') && <Col xs={12}><MegaBannerAd width={width} {...adProps} /></Col>}
      </Row>
    );
  }
}

const Marquee = compose(
  withStyles({}),
  withWidth(),
)(_Marquee)

class Page extends React.Component {
  render() {
    return (
      <PageBase>
        <MegaHeader>The best local art.</MegaHeader>
        <Marquee />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        [Events]

      </PageBase>
    );
  }
}
//export default withRoot(withStyles({})(Index));
export default withRedux(initStore, null, {})(withRoot(withStyles({})(Page)));