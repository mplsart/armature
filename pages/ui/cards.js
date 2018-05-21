import React from 'react';
import PageBase from '../../docs/src/layout/PageBase';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../src/withRoot';
import withRedux from '../../src/withRedux'
import {initStore} from '../../src/store';
import {Row, Col} from '../../src/grid';
import LegacyEventCard from '../../src/ui/cards/legacy/LegacyEventCard';
import CompactGalleryCard from '../../src/ui/cards/CompactGalleryCard';

const resource = {"_meta": {"is_verbose": true, "resource_type": "EventDateModel"}, "category": "ongoing", "end": "2018-04-03T05:00:00Z",
    "event_resource": {"_meta": {"is_verbose": true, "resource_type": "EventModel"},
        "featured": false, "name": "Art Opening: Cassandra Buck",
        "primary_image_resource": {"_meta": {"is_verbose": true, "resource_type": "FileContainer"}, "caption": null, "created_date": "2018-02-13T16:24:10Z", "modified_date": "2018-02-13T16:24:10Z", "resource_id": "RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI", "resource_url": "/api/files/RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI", "versions": {"CARD_LARGE": {"height": 472, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI/card_large.png", "width": 900}, "CARD_PROGRESSIVE": {"height": 21, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI/card_progressive.png", "width": 40}, "CARD_SMALL": {"height": 184, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI/card_small.png", "width": 350}, "FULL": "", "SIZED": "", "THUMB": {"height": 160, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI/thumb.png", "width": 160}}}, "primary_image_resource_id": "RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI", "resource_id": "RXZlbnQeHzU2NjkzNzcyOTg5MjM1MjA", "slug": "art-opening-cassandra-buck", "summary": "Local artist reclaims her feminine voice working in large scale", "url": "http://showroommpls.com/event/art-opening-cassandra-buck/"}, "label": "Showing", "resource_id": "1886377db68f4871bfca7d22709002da", "start": "2018-03-17T05:00:00Z", "type": "reoccurring",
        "venue_resource": {"_meta": {"is_verbose": false, "resource_type": "Venue"}, "address": "615 W Lake St", "address2": "", "category": "business", "city": "Minneapolis", "country": "USA", "geo": [{"lat": 44.948357899999998, "lon": -93.287694299999998}], "is_premium_profile": false, "multiple_locations_label": "", "name": "Showroom", "primary_image_resource": null, "primary_image_resource_id": null, "resource_id": "VmVudWUec2hvd3Jvb20", "resource_url": "/api/venues/VmVudWUec2hvd3Jvb20", "slug": "showroom", "state": "MN", "summary": ""}, "venue_slug": "showroom"};

class Index extends React.Component {
  render() {
    return (
      <PageBase>

      <h1>Cards</h1>
      <p>Cards are great.</p>

      <h2>Legacy Cards</h2>
      <pre>import LegacyEventCard from 'armature/dist/ui/cards/legacy/LegacyEventCard';</pre>
      <Row>
        <Col xs="3">
          <LegacyEventCard
            event_resource={resource.event_resource}
            event_date_resource={resource}
            imageResource={resource.event_resource.primary_image_resource}
            linkClassProps={{'data-ga-category': "event-pod-click", to:'/events/' + resource.event_resource.slug}}
            linkClass={'a'}
            />
          </Col>
        </Row>

      <h2>Compact List Cards</h2>
      <pre>import CompactGalleryCard from 'armature/dist/ui/cards/legacy/CompactGalleryCard';</pre>
      <Row>
        <Col xs="3">
          <CompactGalleryCard resource={resource.venue_resource} />
          </Col>
        </Row>

      </PageBase>
    );
  }
}
//export default withRoot(withStyles({})(Index));
export default withRedux(initStore, null, {})(withRoot(withStyles({})(Index)));