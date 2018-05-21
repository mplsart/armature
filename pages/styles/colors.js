import React from 'react';
import PageBase from '../../docs/src/layout/PageBase';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../src/withRoot';
import withRedux from '../../src/withRedux';
import {initStore} from '../../src/store';
import Typography from '@material-ui/core/Typography';
import {Col, Row} from '../../src/grid';


const styles = (theme) => {
  return {
    grid: {
      background:
        'transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAIAAAC3eAIWAAAAEklEQVR4AWP4fvkRw69fv3BhAG+IFy/ne6sFAAAAAElFTkSuQmCC)', // eslint-disable-line max-len
    }
  };
};

class Index extends React.Component {
  render() {

    let {classes} = this.props;

    return (
      <PageBase>
        <h1>Colors</h1>

        <p>In order to keep a sane amount of type styles, we use the default set of typography defined by the <a href="https://material.io/design/typography/the-type-system.html" target="_new">Material Design spec</a> with slight customizations. Customizations include using the Bryant font face for accent text, color customizations, etc. Specific instances of typography may be further customized using <em>withStyles</em> or style attributes but this should be rare.</p>

        <Row>
          <Col md={12}><h2>Headings</h2></Col>
          <Col md={6}>
            <p><b>Material Design Typography</b> (<a href="https://material.io/design/typography/the-type-system.html" target="_new">MD spec</a> - <a href="https://material-ui.com/style/typography/" target="_new">MUI doc</a>)</p>
            <div className={classes.grid}>
              {/* <Typography variant="display4" gutterBottom>Display 4 - Uber Heading</Typography> */}
              <Typography variant="display3" gutterBottom component='h1'>Display 3</Typography>
              <Typography variant="display2" gutterBottom component='h2'>Display 2</Typography>
              <Typography variant="display1" gutterBottom component='h3'>Display 1</Typography>
              <Typography variant="headline" gutterBottom>Headline</Typography>
              <Typography variant="title" gutterBottom>Title</Typography>
              <Typography variant="subheading" gutterBottom>Subheading</Typography>
              <Typography variant="body2" gutterBottom>Body 2</Typography>
              <Typography variant="body1" gutterBottom>Body 1</Typography>
              <Typography variant="caption" gutterBottom>Caption with <a href="#">link</a></Typography>
              <Typography variant="button" gutterBottom>Button</Typography>
            </div>
          </Col>
          <Col md={6}>
            <p><b>Semantic HTML Tags</b></p>
            <div className={classes.grid}>
              <h1>Heading 1 &lt;h1&gt;</h1>
              <h2>Heading 2 &lt;h2&gt;</h2>
              <h3>Heading 3 &lt;h3&gt; </h3>
              <h4>Heading 4 &lt;h4&gt; </h4>
              <h5>Heading 5 &lt;h5&gt; </h5>
              <small>Small &lt;small&gt; </small>
              <p>
                  {`
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Default Paragraph Styles.
                  `}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}><h2>Additional Typography</h2></Col>
          <Col md={6}>
            <p><b>Bullet Lists</b></p>
            <div className={classes.grid}>
              <ul>
                <li>List Item 1</li>
                <li>List Item 2
                <ul>
                  <li>List Item 2.1</li>
                  <li>List Item 2.2</li>
                </ul>
                </li>
                <li>List Item 3</li>
              </ul>

              <ol>
                <li>List Item 1</li>
                <li>List Item 2
                  <ol>
                  <li>List Item 2.1</li>
                  <li>List Item 2.2</li>
                  </ol>
                </li>
                <li>List Item 3</li>
              </ol>
            </div>
          </Col>

          <Col md={6}>
            <p><b>Inline Styles</b></p>
            <div className={classes.grid}>
              <p>Lorem ipsum <b>dolor sit amet</b>, consectetur <em>adipiscing elit</em>. Aenean congue <a href="#">nulla id</a> arcu molestie, vitae dapibus neque scelerisque. <b><em>Mauris et eleifend ligula</em></b>, in faucibus purus. Duis vel tempus felis, non consequat ligula. Ut dolor tellus, dapibus at turpis rutrum, viverra placerat est. Vivamus eget pellentesque enim. Sed lacinia arcu dolor, vitae semper magna molestie vitae. Proin vitae ipsum sodales, dictum quam eu, posuere risus.</p>
            </div>
          </Col>
        </Row>

      </PageBase>
    );
  }
}

export default withRedux(initStore, null, {})(withRoot(withStyles(styles)(Index)));