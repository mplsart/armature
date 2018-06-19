import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';

import withRoot from '../../../src/withRoot';
import withRedux from '../../../src/withRedux';
import {initStore} from '../../../src/store';

import {Col, Row} from '../../../src/grid';
import MegaHeader from '../../../src/typography/MegaHeader';
import MarqueeCardArticle from '../../../src/ui/cards/marquee/MarqueeCardArticle';
import MarqueeCardSmallEvent from '../../../src/ui/cards/marquee/MarqueeCardSmallEvent';
import MarqueeCardSmallArticle from '../../../src/ui/cards/marquee/MarqueeCardSmallArticle';
import PageBase from '../../../docs/src/layout/PageBase';
import MegaBannerAd from '../../../src/ui/cards/ads/MegaBannerAd';
import featuredResources from './featuredResources';

var ad = {
  resource_type: 'Advert',
  advert_type_label: 'Sponsor',
  advert_label: 'WPT002_6mnthads_APRIL132018',

  image_resource: {
    versions: {
      MOBILE: {
        height: 800,
        width: 1000,
        url: 'https://storage.googleapis.com/cdn.mplsart.com/adverts/mocks/mobile_XL_ad_1000x800px.jpg'
      },
      DEFAULT: {
        height: 138,
        width: 1220,
        url: 'https://storage.googleapis.com/cdn.mplsart.com/adverts/mocks/ad-1220px_wide.jpg'
      }
    }
  },

  goto_url: 'http://www.wetpaintart.com/?from=mplsart',
  advert_description: 'Wet Paint Artist\'s Materials & Framing',
  image_width: 700,
  image_height: 968,
  advert_client: 'wetpaint',
  advert_campaign: '6month',
  weight: 15
};

// TODO: This should come from a setting or context
let starting_date_filter = moment(new Date('2018-08-01T00:00:00Z'));

class _Marquee extends React.Component {
  render() {
    const {width, resources, adResource} = this.props;

    // TODO: This needs to come from the reducer, etc

    //var adspotId = 'homepage_mock';
    const adProps = {
      //adspotId: adspotId,
      resource: adResource,
      linkClass:'a',
      linkClassProps: {
        href: adResource.goto_url
      }
    };

    return (
      <Row>
        <Col xs={12} md={9}>
          <MarqueeCardArticle
            resource={resources[0]}
            linkClassProps={{'data-ga-category': 'event-pod-click', to:'/written/' + resources[0].slug}}
            linkClass={'a'}
            starting_date_filter={starting_date_filter}
          />
        </Col>
        {(width == 'xs' || width == 'sm') && <Col xs={12} style={{padding: '0 16px 0 16px'}}><MegaBannerAd width={width} {...adProps} /></Col>}
        <Col xs={12} md={3}>
          <Row>
            <Col xs={12} sm={6} md={12}>
              <MarqueeCardSmallEvent
                resource={resources[3]}
                linkClassProps={{'data-ga-category': 'event-pod-click', to:'/written/' + resources[0].slug}}
                linkClass={'a'}
                startingDateFilter={starting_date_filter}
              />
            </Col>
            <Col xs={12} sm={6} md={12}>
              <MarqueeCardSmallArticle
                resource={resources[0]}
                linkClassProps={{'data-ga-category': 'event-pod-click', to:'/written/' + resources[0].slug}}
                linkClass={'a'}
                startingDateFilter={starting_date_filter}
              />
            </Col>
          </Row>
        </Col>
        {(width == 'lg' || width == 'xl' || width == 'md') && <Col xs={12}><MegaBannerAd width={width} {...adProps} /></Col>}
      </Row>
    );
  }
}

_Marquee.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  resources:PropTypes.array,
  adResource:PropTypes.object,
};


const Marquee = compose(
  withStyles({}),
  withWidth(),
)(_Marquee);

class Page extends React.Component {
  render() {
    return (
      <PageBase>
        <MegaHeader>The best local art.</MegaHeader>
        <Marquee resources={featuredResources} adResource={ad} />

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