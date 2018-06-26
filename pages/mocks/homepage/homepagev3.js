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
import CardAd from '../../../src/ui/cards/ads/CardAd';
import featuredResources from './featuredResources';
import upcomingEventResources from './upcomingEventResources';
import StandardCardEventDate from '../../../src/ui/cards/standard/StandardCardEventDate';

import PromoCardVenue from '../../../src/ui/cards/utility/PromoCardVenue';
import PromoCardGalleryGuide from '../../../src/ui/cards/utility/PromoCardGalleryGuide';
import PromoCardInstagram from '../../../src/ui/cards/utility/PromoCardInstagram';
import {ContentSubTitle} from '../../../src/typography';

import Paper from '@material-ui/core/Paper';

// Mock Resources
const gamutResource = {
  '_meta': {'is_verbose': false, 'resource_type': 'VenueTEMP'},
  'is_premium_profile': true,
  'name': 'Gamut Gallery',
  'promo_image_resource': {'versions':
    {'CARD_LARGE': {'height': 450, 'width': 900, 'url': 'https://storage.googleapis.com/cdn.mplsart.com/mocks/homepagev3/hmpg_locfav_gamut_900x540.jpg'}}
  },
  'slug': 'gamut',
};


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
  advert_client: 'wetpaint',
  advert_campaign: '6month',
  weight: 15
};

var ad2 = {
  resource_type: 'Advert',
  advert_type_label: 'Sponsor',
  advert_label: 'WPT002_6mnthads_APRIL132018',

  image_resource: {
    versions: {
      MOBILE: {
        height: 300,
        width: 500,
        url: 'https://dummyimage.com/427x540/eeeeee/333333.png&text=500x300'
      },
      DEFAULT: {
        height: 540,
        width: 427,
        url: 'https://dummyimage.com/427x540/eeeeee/333333.png&text=427x540',
      }
    }
  },
  goto_url: 'http://www.wetpaintart.com/?from=mplsart',
  advert_description: 'Wet Paint Artist\'s Materials & Framing',
  advert_client: 'wetpaint',
  advert_campaign: '6month',
  weight: 15
};


class UpcomingEventsSlice extends React.Component {
  render() {
    let batch1 = upcomingEventResources.slice(0,4);
    let batch2 = upcomingEventResources.slice(5,9);
    //let batch3 = upcomingEventResources.slice(10,14);
    let batches = [batch1, batch2];

    return (
      <div>
        <Row>
          <Col xs={12}>
            <ContentSubTitle
              icon={(<i className="fa fa-calendar-o" />)}
              >Upcoming Events
              <span style={{ paddingLeft:'16px', fontSize:'16px'}}><a href="/">View All &raquo;</a></span>
              </ContentSubTitle>
          </Col>
        </Row>
        <Row>

          <Col xs={12}>
            {batches.map(function(batch, i) {
              return (
                <Row key={'upcoming-row-' + i}>
                  {batch.map(function(ed, j) {
                  return (
                    <Col xs={12} md={3} key={'upcomging-col-' + i + '-' + j}>
                      <StandardCardEventDate event_resource={ed.event_resource}  event_date_resource={ed} linkClass={'a'} linkClassProps={{href: '/google'}}/>
                    </Col>
                  );
                })}
            </Row>
          )
        })}
        </Col>
      </Row>
    </div>
    );
  }
}

class Slice2 extends React.Component {
  render() {
    const adProps2 = {
      //adspotId: adspotId,
      resource: ad2,
      linkClass:'a',
      linkClassProps: {
        href: ad2.goto_url
      }
    };

    return (
      <Row style={{marginTop: '16px'}}>
        <Col xs={12} sm={12} md={6}><PromoCardVenue linkClass={'a'} linkClassProps={{'href': '/galleries/gamut'}} resource={gamutResource}/></Col>
        <Col xs={12} sm={6} md={3}><CardAd width={this.props.width} {...adProps2}/></Col>
        <Col xs={12} sm={6} md={3}><PromoCardGalleryGuide linkClass={'a'} linkClassProps={{'href': '/galleries/guide' + this.props.width}} /></Col>
      </Row>
    );
  }
}

class Slice4 extends React.Component {
  render() {
    return (
      <Row style={{marginTop: '16px'}}>
        <Col xs={12} md={6}><PromoCardInstagram /></Col>
        <Col xs={12} md={3}>
          <Row>
            <Col xs={12}><Paper style={{padding:'32px'}}>Event</Paper></Col>
            <Col xs={12}><Paper style={{padding:'32px'}}>Event</Paper></Col>
            <Col xs={12}><Paper style={{padding:'32px'}}>Event</Paper></Col>
          </Row>
        </Col>
        <Col xs={12} md={3}>
          <Row>
            <Col xs={12}><Paper style={{padding:'32px'}}>Article</Paper></Col>
            <Col xs={12}><Paper style={{padding:'32px'}}>Article</Paper></Col>
            <Col xs={12}><Paper style={{padding:'32px'}}>Article</Paper></Col>
          </Row>
        </Col>
      </Row>
    );
  }
}


class Slice5 extends React.Component {
  render() {
    return (
      <Row style={{marginTop: '16px'}}>
        <Col xs={12}><Paper style={{height:'350px', padding:'32px'}}>Email Signup</Paper></Col>
      </Row>
    );
  }
}

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

    let width = this.props.width;
    return (
      <PageBase>
        <MegaHeader>The best local art.</MegaHeader>
        <Marquee width={width} resources={featuredResources} adResource={ad} />

        <Slice2 width={width} />
        <UpcomingEventsSlice />
        <Slice4 />
        <Slice5 />

        <br /><br />
        <br /><br />
      </PageBase>
    );
  }
}

export default withRedux(initStore, null, {})(withRoot(withWidth()(Page)));