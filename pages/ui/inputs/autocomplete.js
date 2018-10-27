import React from 'react';
import PageBase from '../../../docs/src/layout/PageBase';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../src/withRoot';
import withRedux from '../../../src/withRedux';
import {initStore} from '../../../src/store';
import VenueAutocomplete from '../../../src/ui/inputs/VenueAutocomplete';

let default_venue_resource = {"_meta": {"is_verbose": true, "resource_type": "Venue"}, "address": "717 S 10th St", "address2": "", "category": "gallery", "city": "Minneapolis", "content": "", "country": "USA", "elsewhere": [{"link_label": "", "link_type": "facebook", "link_type_id": "", "link_url": "https://www.facebook.com/GamutGallery/"}, {"link_label": "", "link_type": "twitter", "link_type_id": "", "link_url": "https://twitter.com/gamutgallery"}, {"link_label": "", "link_type": "instagram", "link_type_id": "", "link_url": "https://www.instagram.com/gamutgallerympls/"}, {"link_label": "", "link_type": "youtube", "link_type_id": "", "link_url": "https://www.youtube.com/user/GamutGallery"}], "email": "art@gamutgallerympls.com", "geo": [{"lat": 44.969827799999997, "lon": -93.26492810000002}], "hours": {"0": null, "1": null, "2": null, "3": null, "4": ["13:00", "19:00"], "5": ["13:00", "19:00"], "6": ["13:00", "19:00"], "description": ""}, "is_closed": false, "is_premium_profile": true, "multiple_locations_label": "", "name": "Gamut Gallery", "neighborhood_resource_id": null, "phone": "612-367-4327", "primary_image_resource": {"_meta": {"is_verbose": true, "resource_type": "FileContainer"}, "caption": null, "created_date": "2018-01-10T22:24:32Z", "modified_date": "2018-01-10T22:24:32Z", "resource_id": "RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE", "resource_url": "/api/files/RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE", "versions": {"CARD_LARGE": {"height": 472, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE/card_large.png", "width": 900}, "CARD_PROGRESSIVE": {"height": 21, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE/card_progressive.png", "width": 40}, "CARD_SMALL": {"height": 184, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE/card_small.png", "width": 350}, "FULL": "", "SIZED": "", "THUMB": {"height": 160, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE/thumb.png", "width": 160}}}, "primary_image_resource_id": "RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE", "resource_id": "VmVudWUeZ2FtdXQ", "resource_url": "/api/venues/VmVudWUeZ2FtdXQ", "slug": "gamut", "state": "MN", "summary": "Art gallery, gift shop, and performance space", "website": "http://www.gamutgallerympls.com/"};
let other_venue_resource = {"_meta": {"is_verbose": true, "resource_type": "Venue"}, "address": "25 Groveland Terrace", "address2": "", "category": "gallery", "city": "Minneapolis", "content": "Groveland Gallery is located in a restored 1890s mansion on the edge of downtown Minneapolis, just south of the Walker Art Center. Established in 1973, the gallery specializes in exhibiting and selling contemporary, representational paintings, drawings, and original prints by Midwestern artists.\n\u00a0<br><br>\nWe feature new exhibitions every six weeks and maintain a large inventory of artwork for sale by over 40 artists. We also offer fine art consulting services for individuals and businesses.\n\u00a0<br><br>\nParking is available in the parking lot directly in front of the building or on the north side of Groveland Terrace.", "country": "USA", "elsewhere": [{"link_label": "", "link_type": "facebook", "link_type_id": "", "link_url": "https://www.facebook.com/grovelandgallery/"}, {"link_label": "", "link_type": "instagram", "link_type_id": "", "link_url": "https://www.instagram.com/grovelandgallery/"}], "email": "info@grovelandgallery.com", "geo": [{"lat": 44.967537, "lon": -93.290441}], "hours": {"0": [null, null], "1": [null, null], "2": ["12:00", "17:00"], "3": ["12:00", "17:00"], "4": ["12:00", "17:00"], "5": ["12:00", "17:00"], "6": ["12:00", "17:00"], "description": ""}, "is_closed": false, "is_premium_profile": true, "multiple_locations_label": "", "name": "Groveland Gallery", "neighborhood_resource_id": null, "nickname": null, "phone": "612-377-7800", "primary_image_resource": {"_meta": {"is_verbose": true, "resource_type": "FileContainer"}, "caption": null, "created_date": "2017-12-22T16:56:11Z", "modified_date": "2017-12-22T16:56:11Z", "resource_id": "RmlsZUNvbnRhaW5lch4fMTcxNDAwMDE", "resource_url": "/api/files/RmlsZUNvbnRhaW5lch4fMTcxNDAwMDE", "versions": {"CARD_LARGE": "", "CARD_SMALL": {"height": 367, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTcxNDAwMDE/card_small.png", "width": 700}, "FULL": "", "SIZED": "", "THUMB": {"height": 160, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTcxNDAwMDE/thumb.png", "width": 160}}}, "primary_image_resource_id": "RmlsZUNvbnRhaW5lch4fMTcxNDAwMDE", "resource_id": "VmVudWUeZ3JvdmVsYW5kLWdhbGxlcnk", "resource_url": "/api/venues/VmVudWUeZ3JvdmVsYW5kLWdhbGxlcnk", "slug": "groveland-gallery", "state": "MN", "summary": "Contemporary representational art by regional artists", "website": "http://grovelandgallery.com/"};

class Index extends React.Component {
  constructor(props){
    super(props);

    // Initial State
    this.state = {
      controlled_venue_resource: default_venue_resource
    };
  }

  handleDefaultVenueChangeValue(resource) {
    console.log('Handle Input Change:');
    console.log(resource);
  }


  handleControlledVenueToggle(resource) {
    this.setState({controlled_venue_resource: resource});
  }

  render() {

    return (
      <PageBase>
        <h1>Autocompletes and Search</h1>
        <p>These are handy replacements for select inputs, etc</p>

        <h2>Venue Search</h2>
        <pre>...</pre>

        <div>
          <h3>Basic</h3>
          <VenueAutocomplete label="Gallery/Venue"
                             onChange={(resource) => this.handleDefaultVenueChangeValue(resource)}
                             apiHost = "https://www.mplsart.com" />

          <br />
          <br />
        </div>
        <div>
          <h3>Prepopulated</h3>
          <VenueAutocomplete label="Gallery/Venue" value={default_venue_resource}
                             onChange={(resource) => this.handleDefaultVenueChangeValue(resource)}
                             apiHost = "https://www.mplsart.com" />

          <br />
          <br />
        </div>


        <div>
          <h3>Controlled</h3>
          ({this.state.controlled_venue_resource.slug})
          <VenueAutocomplete label="Gallery/Venue" value={this.state.controlled_venue_resource}
                             onChange={(resource) => this.handleDefaultVenueChangeValue(resource)}
                             apiHost = "https://www.mplsart.com" />

                             <span onClick={this.handleControlledVenueToggle.bind(this, default_venue_resource)}>Gamut</span>
                             <span onClick={this.handleControlledVenueToggle.bind(this, other_venue_resource)}>Groveland</span>

          <br />
          <br />
        </div>

      </PageBase>
    );
  }
}
//export default withRoot(withStyles({})(Index));
export default withRedux(initStore, null, {})(withRoot(withStyles({})(Index)));