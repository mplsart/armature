import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FlyoutBase from './FlyoutBase';
import CompactGalleryCard from '../../../src/ui/cards/CompactGalleryCard';

const styles = theme => {
  return {
    paper: {
      padding: theme.spacing.unit,
    },
    popover: {
      pointerEvents: 'none',
    },
    popperClose: {
      pointerEvents: 'none',
    },
    flyoutContent: {
      //width:'500px',
      //height:'300px',
    }
  }
};

class GalleryPopover extends React.Component {
  state = {
    anchorEl: null,
    popperOpen: false,
  };

  handlePopoverOpen(event) {
    this.setState({ anchorEl: event.target });
  }
  handlePopoverClose() {
    this.setState({ anchorEl: null });
  }
  render() {
    let {children, classes} = this.props;
    const { anchorEl, popperOpen } = this.state;
    const open = !!anchorEl;

    let resource = {"_meta": {"is_verbose": true, "resource_type": "Venue"}, "address": "210 N First St", "address2": "", "category": "gallery", "city": "Minneapolis", "content": "CIRCA Gallery seeks to provide awareness, inspiration, and appreciation for a variety of contemporary art styles and mediums. For nearly 30 years, we have assisted and advised corporations, architects, designers, and collectors, but our door is open to anyone who is curious about art, respectful of our artists, or just in the neighborhood (four-legged friends included). We present several annual exhibitions, with new shows opening every six weeks. In addition to our exhibition program, a rotating selection of new artwork can be viewed throughout the year.", "country": "USA", "elsewhere": [{"link_label": "", "link_type": "facebook", "link_type_id": "", "link_url": "https://www.facebook.com/circagallerympls"}, {"link_label": "", "link_type": "twitter", "link_type_id": "", "link_url": "https://twitter.com/circagallery"}, {"link_label": "", "link_type": "instagram", "link_type_id": "", "link_url": "https://www.instagram.com/circagallery_mn/"}], "email": "staff@circagallery.org", "geo": [{"lat": 44.984317699999998, "lon": -93.269294799999997}], "hours": {"0": [null, null], "1": [null, null], "2": ["13:00", "18:00"], "3": ["13:00", "18:00"], "4": ["13:00", "21:00"], "5": ["13:00", "21:00"], "6": ["11:00", "16:00"], "description": ""}, "is_closed": false, "is_premium_profile": true, "multiple_locations_label": "", "name": "CIRCA Gallery", "neighborhood_resource_id": null, "phone": "612-332-2386", "primary_image_resource": {"_meta": {"is_verbose": true, "resource_type": "FileContainer"}, "caption": null, "created_date": "2018-01-10T18:08:08Z", "modified_date": "2018-01-10T18:08:08Z", "resource_id": "RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE", "resource_url": "/api/files/RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE", "versions": {"CARD_LARGE": {"height": 472, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE/card_large.png", "width": 900}, "CARD_PROGRESSIVE": {"height": 21, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE/card_progressive.png", "width": 40}, "CARD_SMALL": {"height": 184, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE/card_small.png", "width": 350}, "FULL": "", "SIZED": "", "THUMB": {"height": 160, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE/thumb.png", "width": 160}}}, "primary_image_resource_id": "RmlsZUNvbnRhaW5lch4fMTQzNzAwMDE", "resource_id": "VmVudWUeY2lyY2EtZ2FsbGVyeQ", "resource_url": "/api/venues/VmVudWUeY2lyY2EtZ2FsbGVyeQ", "slug": "circa-gallery", "state": "MN", "summary": "Regional and national contemporary art", "website": "http://www.circagallery.org/"};
    return (
      <span onMouseOver={this.handlePopoverOpen.bind(this)}>
        <FlyoutBase
          open={open}
          anchorEl={anchorEl}
          onClose={this.handlePopoverClose.bind(this)}
          flyoutContent = {
            (<CompactGalleryCard resource={resource}/>)}><a href="#">{ children }</a></FlyoutBase>
      </span>
    );
  }
}

export default withStyles(styles)(GalleryPopover);