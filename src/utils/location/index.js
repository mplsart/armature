//build_google_map_url_for_venue
//formatted_address
export function formatted_address(venue) {
  let output = venue.address;

  if (venue.address2) {
    output += ' ' + venue.address2;
  }

  if (venue.city == 'Minneapolis') {
    output += ', Mpls';
  }
  else {
    output += ', ' + venue.city;
  }

  return output;
}

export function build_google_map_url_for_venue(venue) {
  // Construct A url to link this venue to google maps.
  // TODO: It'd be great to take in some sort of Address Object

  //let lat = venue.geo[0].lat;
  //let lon = venue.geo[0].lon;
  let address = '+' + encodeURIComponent(venue.address).replace(/%20/g, '+') + ',+' + encodeURIComponent(venue.city).replace(/%20/g, '+') + ',+MN';
  let venue_name = encodeURIComponent(venue.name).replace(/%20/g, '+');

  //let map_url = 'https://www.google.com/maps/place/' + venue_name + ',' + address + '/@' + lat + ',' + lon + ',17z/';
  let map_url = 'https://www.google.com/maps/?q=' + venue_name + ',' + address; // + '/@' + lat + ',' + lon + ',17z/';
  return map_url;
}

