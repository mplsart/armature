import React from 'react';
import moment from 'moment';

import PageBase from '../../docs/src/layout/PageBase';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../src/withRoot';
import withRedux from '../../src/withRedux';
import {initStore} from '../../src/store';
import {Row, Col} from '../../src/grid';
import LegacyEventCard from '../../src/ui/cards/legacy/LegacyEventCard';
import CompactGalleryCard from '../../src/ui/cards/CompactGalleryCard';
import MarqueeCardArticle from '../../src/ui/cards/marquee/MarqueeCardArticle';
import MarqueeCardEvent from '../../src/ui/cards/marquee/MarqueeCardEvent';
import MarqueeCardSmallArticle from '../../src/ui/cards/marquee/MarqueeCardSmallArticle';
import MarqueeCardSmallEvent from '../../src/ui/cards/marquee/MarqueeCardSmallEvent';

const article_resource = {"_meta": {"is_verbose": true, "resource_type": "BlogPost"}, "author_resource": {"_meta": {"is_verbose": true, "resource_type": "User"}, "firstname": "Kathleen", "lastname": "Sapien", "resource_id": "VXNlch4fNTczMjczNTM4MTQwNTY5Ng", "resource_url": "/api/users/VXNlch4fNTczMjczNTM4MTQwNTY5Ng", "website": "https://katsandoval213.journoportfolio.com/"}, "author_resource_id": "VXNlch4fNTczMjczNTM4MTQwNTY5Ng", "category_resource": {"_meta": {"is_verbose": true, "resource_type": "BlogCategory"}, "resource_id": "QmxvZ0NhdGVnb3J5Hh81NzYzMjYzNjA2MjkyNDgw", "resource_url": "/api/post_categories/QmxvZ0NhdGVnb3J5Hh81NzYzMjYzNjA2MjkyNDgw", "slug": "scene", "title": "The Scene"}, "category_resource_id": "QmxvZ0NhdGVnb3J5Hh81NzYzMjYzNjA2MjkyNDgw", "content": "<p>When Morgan Pease sits down and starts to create something, his end goal is to be a guide, to walk viewers through certain chapters of human life. One unique aspect of his artistic practice is his method of creating first and finding meaning for his work later. This in tandem with his mechanical finishing processes help others explore and question how day-to-day life events and memories shape the lives we currently lead.<br />\n&nbsp;</p>\n\n<p><img class=\"img-responsive\" src=\"https://storage.googleapis.com/cdn.mplsart.com/written/temp/morgan1.jpg\" /> <small><em>I Search the Place for Your Lost Face</em>, Mixed Media, 48 x 96&rdquo;, 2017</small></p>\n\n<p><br />\nPease has been interested in drawing and painting for as long as he can remember, but he decided to pursue it seriously during college and get his BFA from the University of Minnesota Duluth. He graduated in 2009&nbsp;and soon thereafter began showing his work.</p>\n\n<p>That same year, he had his first solo show in Duluth. He wanted to get his work out to the public, so he submitted his work to galleries, design spaces, and more. This propelled him to participate in more than 40 shows from 2011 to 2013. During that time, Pease also decided to move from Duluth to be closer to the Twin Cities art scene. And in 2014, this helped him land a showing at Covet Consign and Design in the Twin Cities (now called Frank Modern).</p>\n\n<p>When Pease found some free time in 2015, that&rsquo;s when he began developing the first piece in the series he calls <em>Mask</em>. He went on to complete the series in 2017, culminating in his first solo show in Minneapolis, at <a href=\"https://www.mplsart.com/galleries/gamut\" target=\"_blank\">Gamut Gallery</a>.<br />\n&nbsp;</p>\n\n<p><img class=\"img-responsive\" src=\"https://storage.googleapis.com/cdn.mplsart.com/written/temp/morgan2.jpg\" /> <small><em>We were all Dangerous Characters</em>, acrylic, pastel, ink, &amp; plaster; 12 x 16&rdquo;; 2018</small></p>\n\n<p><br />\n<em>Mask</em>, the artist explains, was a way for him to release some pent-up frustration. With this series, he began to experiment with different colors and materials.</p>\n\n<p>&ldquo;These paintings were continually changing, something that was a little different from my previous work and process,&rdquo; Pease said.</p>\n\n<p>Looking back, this series stood out because it didn&#39;t feel like his other work at the time, which was more design-based and methodical. He reflected on what these new pieces really meant; to him, they were his raw artistic vision. &ldquo;I feel like my original work was simple and dialed in, but with this series I saw something new,&rdquo; Pease said, &ldquo;The [earlier] work was based on my ideas of the freedom of my childhood. <em>Mask</em> is my visual embodiment of personal insecurities in today&rsquo;s political and social landscape.&rdquo; He would build up layers of vibrant paint splatters and seal them with gloss, resin, or polyurethane. The final touch and injection of personality to the collection was a masking technique, covering up everything except little triangles of color with matte white paint.</p>\n\n<p><img class=\"img-responsive\" src=\"https://storage.googleapis.com/cdn.mplsart.com/written/temp/morgan3.jpg\" /> <small><em>In the dark, rank, mysterious nighttime grass</em>, acrylic, oil, pastels, &amp; ink; 20&rdquo; x 24&rdquo;; 2018</small></p>\n\n<p><br />\nWhat he is working on now is the next stage, the evolution of that series. He has more than 30 paintings in process at his warm weather studio. Just as the seasons change, Pease switches up where he works as well. His cold weather studio is smaller; thus the winter months are when he works on smaller pieces. His warm weather studio is much bigger, almost like a woodshop.</p>\n\n<p>&ldquo;This whole winter I&rsquo;ve been using pastels, pencils, ink, and I started drawing more,&rdquo; Pease said. With his newer paintings, he is working on incorporating more color and mixing in new materials such as plaster, latex, and vinyl.</p>\n\n<p>Pease is currently showing work at The Hive Salon in Minneapolis through September. He also has a solo show planned for August at Gallery 360. He notes that the work he will be showing in August will differ from <em>Mask. </em></p>\n\n<p>&ldquo;My work, for me, is as much about learning and experimenting during the creation process as it is about the thoughts and themes I am trying to suggest.&rdquo;<br />\n&nbsp;</p>\n\n<p><img class=\"img-responsive\" src=\"https://storage.googleapis.com/cdn.mplsart.com/written/temp/morgan4.jpg\" /> <small><em>Nothing&rsquo;s, like, unhealthy at Chipotle (detail)</em>, acrylic, ink, pastels, plaster, oil, &amp; latex; 24 x 24&rdquo;; 2018</small></p>\n\n<p><br />\n<em>You can see Morgan Pease&rsquo;s work currently at <a href=\"https://www.mplsart.com/events/art-at-the-hive-morgan-pease\" target=\"_blank\">The Hive Salon</a> through September 30th. For more about the artist&rsquo;s work, visit </em><a href=\"http://morganpease.com\"><em>morganpease.com</em></a><em>. </em></p>\n", "created_date": "2018-06-06T13:41:59Z", "is_published": true, "modified_date": "2018-06-06T15:07:38Z", "permalink": "/written/2018/06/morgan-pease-a-study-of-life/", "primary_image_resource": {"_meta": {"is_verbose": true, "resource_type": "FileContainer"}, "caption": null, "created_date": "2018-06-06T13:42:22Z", "modified_date": "2018-06-06T13:42:22Z", "resource_id": "RmlsZUNvbnRhaW5lch4fMTg0NDAwMDE", "resource_url": "/api/files/RmlsZUNvbnRhaW5lch4fMTg0NDAwMDE", "versions": {"CARD_LARGE": {"height": 472, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTg0NDAwMDE/card_large.png", "width": 900}, "CARD_PROGRESSIVE": {"height": 21, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTg0NDAwMDE/card_progressive.png", "width": 40}, "CARD_SMALL": {"height": 184, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTg0NDAwMDE/card_small.png", "width": 350}, "FULL": "", "SIZED": "", "THUMB": {"height": 160, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTg0NDAwMDE/thumb.png", "width": 160}}}, "primary_image_resource_id": "RmlsZUNvbnRhaW5lch4fMTg0NDAwMDE", "published_date": "2018-06-06T05:00:00Z", "resource_id": "QmxvZ1Bvc3QeHzU3NjIwNzc3MjU1NTY3MzY", "resource_url": "/api/posts/QmxvZ1Bvc3QeHzU3NjIwNzc3MjU1NTY3MzY", "slug": "morgan-pease-a-study-of-life", "summary": "Painter Morgan Pease uses abstraction, humor, process, and play to consider everyday moments, both large and small", "title": "Morgan Pease: A Study of Life"};
const resource = {"_meta": {"is_verbose": true, "resource_type": "EventDateModel"}, "category": "ongoing", "end": "2018-04-03T05:00:00Z",
    "event_resource": {"_meta": {"is_verbose": true, "resource_type": "EventModel"},
        "featured": false, "name": "Art Opening: Cassandra Buck",
        "primary_image_resource": {"_meta": {"is_verbose": true, "resource_type": "FileContainer"}, "caption": null, "created_date": "2018-02-13T16:24:10Z", "modified_date": "2018-02-13T16:24:10Z", "resource_id": "RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI", "resource_url": "/api/files/RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI", "versions": {"CARD_LARGE": {"height": 472, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI/card_large.png", "width": 900}, "CARD_PROGRESSIVE": {"height": 21, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI/card_progressive.png", "width": 40}, "CARD_SMALL": {"height": 184, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI/card_small.png", "width": 350}, "FULL": "", "SIZED": "", "THUMB": {"height": 160, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI/thumb.png", "width": 160}}}, "primary_image_resource_id": "RmlsZUNvbnRhaW5lch4fMTU0MDAwMDI", "resource_id": "RXZlbnQeHzU2NjkzNzcyOTg5MjM1MjA", "slug": "art-opening-cassandra-buck", "summary": "Local artist reclaims her feminine voice working in large scale", "url": "http://showroommpls.com/event/art-opening-cassandra-buck/"}, "label": "Showing", "resource_id": "1886377db68f4871bfca7d22709002da", "start": "2018-03-17T05:00:00Z", "type": "reoccurring",
        "venue_resource": {"_meta": {"is_verbose": false, "resource_type": "Venue"}, "address": "615 W Lake St", "address2": "", "category": "business", "city": "Minneapolis", "country": "USA", "geo": [{"lat": 44.948357899999998, "lon": -93.287694299999998}], "is_premium_profile": false, "multiple_locations_label": "", "name": "Showroom", "primary_image_resource": null, "primary_image_resource_id": null, "resource_id": "VmVudWUec2hvd3Jvb20", "resource_url": "/api/venues/VmVudWUec2hvd3Jvb20", "slug": "showroom", "state": "MN", "summary": ""}, "venue_slug": "showroom"};

const event_resource2 = {"_meta": {"is_verbose": true, "resource_type": "Event"}, "content": "<p>Spotlighting work by a selection of Cuba&rsquo;s contemporary artists and collectives including The Merger, KCHO, Sandra Borges, Tom&aacute;s S&aacute;nchez, Los Carpinteros and Carmen Herrera.</p>\n\n<p>&nbsp;</p>\n\n<p>With bold and exciting compositions, varying mediums and visionary narratives, these artists showcase the breadth of what the Contemporary Cuban art scene has to offer.</p>\n\n<p>&nbsp;</p>\n\n<p><strong>The </strong><strong>Merger</strong><strong>\u200b</strong>&nbsp;is a collaboration group formed by the Cuban artists Alain Pino, Niels Moleiro, and Mario Miguel Gonzalez (Mayito). Working in a variety of mediums including painting, watercolor and sculpture, The Merger highlights issues in the current economic, political and social state of Cuba.</p>\n\n<p>&nbsp;</p>\n\n<p><strong>KCHO</strong> (b. 1970 as Alexis Leiva Machado)&nbsp;is a contemporary Cuban artist working in sculpture and mixed-media. Featuring boats and boat-like forms referencing his childhood passions and traditional Cuban folk icons honoring the dead, KCHO&rsquo;s work feels nostalgic and sometimes mournful.</p>\n\n<p>&nbsp;</p>\n\n<p><strong>Sandra Borges</strong>, a native of Havana,&nbsp;creates innovative jewelry designs by combining Cuban indigenous and traditional materials with modern style.</p>\n\n<p>&nbsp;</p>\n\n<p><strong>Tom&aacute;s S&aacute;nchez</strong> (b. 1948) depicts rich and dream-like portraits of nature untainted and otherworldly. Hyper detailed and surreal, his landscapes conjure a lush and timeless Cuban landscape.</p>\n\n<p>&nbsp;</p>\n\n<p><strong>Los Carpinteros</strong> (The Carpenters) is a Havana-based collective bent on merging architecture, design and sculpture in playful and unexpected ways. Their work often calls attention to the intersection between art and society.</p>\n\n<p>&nbsp;</p>\n\n<p><strong>Carmen Herrera</strong> (b. 1915)&nbsp;originally studied architecture in Havana, Cuba, then trained at the Art Students League in New York in the early 40s. Herrera perfects her works with crisp lines and contrasting color blocks. She integrates all principles of design while still presenting a minimalist composition.</p>\n\n<p>&nbsp;</p>\n\n<p><em>Gallery hours are 11 a.m. to 5 p.m. Tues-Sat and by appointment</em></p>\n", "event_dates": [{"category": "reception", "end": "2018-04-20T01:30:00Z", "label": "Opening Reception", "start": "2018-04-19T22:30:00Z", "type": "timed", "venue": {"_meta": {"is_verbose": false, "resource_type": "Venue"}, "address": "775 Lake St E", "address2": "", "category": "gallery", "city": "Wayzata", "country": "USA", "geo": [{"lat": 44.96916179999999, "lon": -93.50998549999997}], "is_premium_profile": true, "multiple_locations_label": "", "name": "Burnet Fine Art & Advisory", "primary_image_resource": {"_meta": {"is_verbose": true, "resource_type": "FileContainer"}, "caption": null, "created_date": "2018-01-29T15:24:30Z", "modified_date": "2018-01-29T15:24:30Z", "resource_id": "RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE", "resource_url": "/api/files/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE", "versions": {"CARD_LARGE": {"height": 472, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE/card_large.png", "width": 900}, "CARD_PROGRESSIVE": {"height": 21, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE/card_progressive.png", "width": 40}, "CARD_SMALL": {"height": 184, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE/card_small.png", "width": 350}, "FULL": "", "SIZED": "", "THUMB": {"height": 160, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE/thumb.png", "width": 160}}}, "primary_image_resource_id": "RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE", "resource_id": "VmVudWUeYnVybmV0LWZpbmUtYXJ0LWFkdmlzb3J5", "resource_url": "/api/venues/VmVudWUeYnVybmV0LWZpbmUtYXJ0LWFkdmlzb3J5", "slug": "burnet-fine-art-advisory", "state": "MN", "summary": "Contemporary art gallery and art advisory"}, "venue_slug": "burnet-fine-art-advisory"}, {"category": "ongoing", "end": "2018-06-16T05:00:00Z", "label": "Showing", "start": "2018-04-19T05:00:00Z", "type": "reoccurring", "venue": {"_meta": {"is_verbose": false, "resource_type": "Venue"}, "address": "775 Lake St E", "address2": "", "category": "gallery", "city": "Wayzata", "country": "USA", "geo": [{"lat": 44.96916179999999, "lon": -93.50998549999997}], "is_premium_profile": true, "multiple_locations_label": "", "name": "Burnet Fine Art & Advisory", "primary_image_resource": {"_meta": {"is_verbose": true, "resource_type": "FileContainer"}, "caption": null, "created_date": "2018-01-29T15:24:30Z", "modified_date": "2018-01-29T15:24:30Z", "resource_id": "RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE", "resource_url": "/api/files/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE", "versions": {"CARD_LARGE": {"height": 472, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE/card_large.png", "width": 900}, "CARD_PROGRESSIVE": {"height": 21, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE/card_progressive.png", "width": 40}, "CARD_SMALL": {"height": 184, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE/card_small.png", "width": 350}, "FULL": "", "SIZED": "", "THUMB": {"height": 160, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE/thumb.png", "width": 160}}}, "primary_image_resource_id": "RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE", "resource_id": "VmVudWUeYnVybmV0LWZpbmUtYXJ0LWFkdmlzb3J5", "resource_url": "/api/venues/VmVudWUeYnVybmV0LWZpbmUtYXJ0LWFkdmlzb3J5", "slug": "burnet-fine-art-advisory", "state": "MN", "summary": "Contemporary art gallery and art advisory"}, "venue_slug": "burnet-fine-art-advisory"}, {"category": "performance", "end": "2018-05-11T01:00:00Z", "label": "Artist Talk", "start": "2018-05-10T23:30:00Z", "type": "timed", "venue": {"_meta": {"is_verbose": false, "resource_type": "Venue"}, "address": "775 Lake St E", "address2": "", "category": "gallery", "city": "Wayzata", "country": "USA", "geo": [{"lat": 44.96916179999999, "lon": -93.50998549999997}], "is_premium_profile": true, "multiple_locations_label": "", "name": "Burnet Fine Art & Advisory", "primary_image_resource": {"_meta": {"is_verbose": true, "resource_type": "FileContainer"}, "caption": null, "created_date": "2018-01-29T15:24:30Z", "modified_date": "2018-01-29T15:24:30Z", "resource_id": "RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE", "resource_url": "/api/files/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE", "versions": {"CARD_LARGE": {"height": 472, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE/card_large.png", "width": 900}, "CARD_PROGRESSIVE": {"height": 21, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE/card_progressive.png", "width": 40}, "CARD_SMALL": {"height": 184, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE/card_small.png", "width": 350}, "FULL": "", "SIZED": "", "THUMB": {"height": 160, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE/thumb.png", "width": 160}}}, "primary_image_resource_id": "RmlsZUNvbnRhaW5lch4fMTI0ODAwMDE", "resource_id": "VmVudWUeYnVybmV0LWZpbmUtYXJ0LWFkdmlzb3J5", "resource_url": "/api/venues/VmVudWUeYnVybmV0LWZpbmUtYXJ0LWFkdmlzb3J5", "slug": "burnet-fine-art-advisory", "state": "MN", "summary": "Contemporary art gallery and art advisory"}, "venue_slug": "burnet-fine-art-advisory"}], "featured": false, "name": "Contemporary Cuba", "primary_image_resource": {"_meta": {"is_verbose": true, "resource_type": "FileContainer"}, "caption": null, "created_date": "2018-04-04T16:25:40Z", "modified_date": "2018-04-04T16:25:40Z", "resource_id": "RmlsZUNvbnRhaW5lch4fMTU1ODAwMDE", "resource_url": "/api/files/RmlsZUNvbnRhaW5lch4fMTU1ODAwMDE", "versions": {"CARD_LARGE": {"height": 472, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTU1ODAwMDE/card_large.png", "width": 900}, "CARD_PROGRESSIVE": {"height": 21, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTU1ODAwMDE/card_progressive.png", "width": 40}, "CARD_SMALL": {"height": 184, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTU1ODAwMDE/card_small.png", "width": 350}, "FULL": "", "SIZED": "", "THUMB": {"height": 160, "url": "https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTU1ODAwMDE/thumb.png", "width": 160}}}, "primary_image_resource_id": "RmlsZUNvbnRhaW5lch4fMTU1ODAwMDE", "resource_id": "RXZlbnQeHzU2NjUwMjYyOTU3MjYwODA", "resource_url": "/api/events/RXZlbnQeHzU2NjUwMjYyOTU3MjYwODA", "slug": "contemporary-cuba", "summary": "Paintings, drawing and sculptural designs by a selection of contemporary Cuban artists", "url": "http://www.burnetart.com/events"};


// TODO: This should come from a setting or context
let startingDateFilter = moment(new Date('2018-01-01T00:00:00Z'));

class Index extends React.Component {
  render() {
    return (
      <PageBase>

      <h1>Cards</h1>
      <p>Cards are great.</p>

      <h2>Marquee Cards</h2>
      <pre>import MarqueeCardArticle from 'armature/dist/ui/cards/marquee/MarqueeCardArticle';</pre>
      <Row>
        <Col xs={9}>
          <MarqueeCardArticle
            resource={article_resource}
            linkClassProps={
                {'data-ga-category': 'event-pod-click',
                  to:'/events/' + resource.event_resource.slug
                }}
            linkClass={'a'}
          />
          <br />
        </Col>
      </Row>
      <pre>import MarqueeCardEvent from 'armature/dist/ui/cards/marquee/MarqueeCardEvent';</pre>
      <Row>
        <Col xs={9}>
          <MarqueeCardEvent
            resource={event_resource2}
            startingDateFilter={startingDateFilter}
            linkClassProps={
                {'data-ga-category': 'event-pod-click',
                  to:'/events/' + resource.event_resource.slug
                }}
            linkClass={'a'}
          />
          <br />
        </Col>
      </Row>
      <h2>Small Marquee Cards</h2>
      <pre>import MarqueeCardSmallArticle from 'armature/dist/ui/cards/marquee/MarqueeCardSmallArticle';</pre>
      <Row>
        <Col xs={3}>
          <MarqueeCardSmallArticle
            resource={article_resource}
            linkClassProps={
                {'data-ga-category': 'event-pod-click',
                  to:'/events/' + resource.event_resource.slug
                }}
            linkClass={'a'}
          />
          <br />
        </Col>
        <Col xs={3}>
          <MarqueeCardSmallArticle
            resource={article_resource}
            linkClassProps={
                {'data-ga-category': 'event-pod-click',
                  to:'/events/' + resource.event_resource.slug
                }}
            linkClass={'a'}
          />
          <br />
        </Col>
        <Col xs={3}>
          <MarqueeCardSmallArticle
            resource={article_resource}
            linkClassProps={
                {'data-ga-category': 'event-pod-click',
                  to:'/events/' + resource.event_resource.slug
                }}
            linkClass={'a'}
          />
          <br />
        </Col>
        <Col xs={3}>
          <MarqueeCardSmallArticle
            resource={article_resource}
            linkClassProps={
                {'data-ga-category': 'event-pod-click',
                  to:'/events/' + resource.event_resource.slug
                }}
            linkClass={'a'}
          />
          <br />
        </Col>

        <Col xs={3}>
          <MarqueeCardSmallEvent
            resource={event_resource2}
            linkClassProps={{'data-ga-category': "event-pod-click", to:'/events/' + resource.event_resource.slug}}
            linkClass={'a'}
            startingDateFilter={startingDateFilter}
          />
        </Col>
      </Row>


      <h2>Legacy Cards</h2>
      <pre>import LegacyEventCard from 'armature/dist/ui/cards/legacy/LegacyEventCard';</pre>
      <Row>
        <Col xs={3}>
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
        <Col xs={3}>
          <CompactGalleryCard resource={resource.venue_resource} />
        </Col>
      </Row>

      </PageBase>
    );
  }
}
//export default withRoot(withStyles({})(Index));
export default withRedux(initStore, null, {})(withRoot(withStyles({})(Index)));