import React from 'react';
import PageBase from '../../../docs/src/layout/PageBase';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../../src/withRoot';
import withRedux from '../../../src/withRedux';
import {initStore} from '../../../src/store';
import VenueAutocomplete from '../../../src/ui/inputs/VenueAutocomplete';

class Index extends React.Component {
  handleDefaultVenueChangeValue(resource) {
    console.log(resource);
  }

  render() {
    let default_venue_resource = {"_meta": {"is_verbose": true, "resource_type": "Venue"}, "address": "717 S 10th St", "address2": "", "category": "gallery", "city": "Minneapolis", "content": "", "country": "USA", "elsewhere": [{"link_label": "", "link_type": "facebook", "link_type_id": "", "link_url": "https://www.facebook.com/GamutGallery/"}, {"link_label": "", "link_type": "twitter", "link_type_id": "", "link_url": "https://twitter.com/gamutgallery"}, {"link_label": "", "link_type": "instagram", "link_type_id": "", "link_url": "https://www.instagram.com/gamutgallerympls/"}, {"link_label": "", "link_type": "youtube", "link_type_id": "", "link_url": "https://www.youtube.com/user/GamutGallery"}], "email": "art@gamutgallerympls.com", "geo": [{"lat": 44.969827799999997, "lon": -93.26492810000002}], "hours": {"0": null, "1": null, "2": null, "3": null, "4": ["13:00", "19:00"], "5": ["13:00", "19:00"], "6": ["13:00", "19:00"], "description": ""}, "is_closed": false, "is_premium_profile": true, "multiple_locations_label": "", "name": "Gamut Gallery", "neighborhood_resource_id": null, "phone": "612-367-4327", "primary_image_resource": {"_meta": {"is_verbose": true, "resource_type": "FileContainer"}, "caption": null, "created_date": "2018-01-10T22:24:32Z", "modified_date": "2018-01-10T22:24:32Z", "resource_id": "RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE", "resource_url": "/api/files/RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE", "versions": {"CARD_LARGE": {"height": 472, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE/card_large.png", "width": 900}, "CARD_PROGRESSIVE": {"height": 21, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE/card_progressive.png", "width": 40}, "CARD_SMALL": {"height": 184, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE/card_small.png", "width": 350}, "FULL": "", "SIZED": "", "THUMB": {"height": 160, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE/thumb.png", "width": 160}}}, "primary_image_resource_id": "RmlsZUNvbnRhaW5lch4fMTMzMDAwMDE", "resource_id": "VmVudWUeZ2FtdXQ", "resource_url": "/api/venues/VmVudWUeZ2FtdXQ", "slug": "gamut", "state": "MN", "summary": "Art gallery, gift shop, and performance space", "website": "http://www.gamutgallerympls.com/"};

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
        </div>
        <div>
          <h3>Prepopulated</h3>
          <VenueAutocomplete label="Gallery/Venue" value={default_venue_resource}
                             onChange={(resource) => this.handleDefaultVenueChangeValue(resource)}
                             apiHost = "https://www.mplsart.com" />
        </div>

      </PageBase>
    );
  }
}
//export default withRoot(withStyles({})(Index));
export default withRedux(initStore, null, {})(withRoot(withStyles({})(Index)));