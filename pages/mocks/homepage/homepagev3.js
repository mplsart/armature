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

// TODO: This should come from a setting or context
let starting_date_filter = moment(new Date('2018-08-01T00:00:00Z'));

class _Marquee extends React.Component {
  render() {
    const {width, resources, adResource} = this.props;

    // TODO: This needs to come from the reducer, etc

    var adspotId = 'homepage_mock';
    const adProps = {adspotId: adspotId, resource: adResource};

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
        {(width == 'xs' || width == 'sm') && <Col xs={12}><MegaBannerAd width={width} {...adProps} /></Col>}
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