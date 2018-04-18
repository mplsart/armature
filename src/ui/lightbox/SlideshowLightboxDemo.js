import React from 'react';
import SlideshowLightbox from './SlideshowLightbox';


const images = [
  //'https://loremflickr.com/1920/1080/art?random=1',
  //'https://loremflickr.com/1080/1920/art?random=2',
  //'https://loremflickr.com/1920/1080/art?random=3',
  //'https://loremflickr.com/1080/1920/art?random=4',
  //'https://loremflickr.com/1920/1080/art?random=5',
  //'https://loremflickr.com/1080/1920/art?random=6',
  'https://storage.googleapis.com/cdn.mplsart.com/written/temp/afro_1_theheavycrown.jpeg',
  'https://storage.googleapis.com/cdn.mplsart.com/written/temp/afro_4_drama.jpeg',
  'https://storage.googleapis.com/cdn.mplsart.com/written/temp/afro_3_DarthChCaptain.jpg',
  'https://storage.googleapis.com/cdn.mplsart.com/written/temp/afro_4_install.jpg',
  'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTcxOTAwMDE/card_large.png',
];


export default class SlideshowLightboxDemo extends React.Component {
  static onImageLoadError(imageSrc, _srcType, errorEvent) {
    console.error(`Could not load image at ${imageSrc}`, errorEvent); // eslint-disable-line no-console
  }

  constructor() {
    super();

    this.state = { index: 0, isOpen: true, };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.moveNext = this.moveNext.bind(this);
    this.movePrev = this.movePrev.bind(this);
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-underscore-dangle
      //styles._insertCss();
    }
  }

  openLightbox() {
    this.setState({ isOpen: true });
  }

  closeLightbox() {
    this.setState({ isOpen: false });
  }

  moveNext() {
    this.setState({ index: (this.state.index + 1) % images.length });
  }

  movePrev() {
    this.setState({
      index: (this.state.index + images.length - 1) % images.length,
    });
  }

  render() {

    if (this.state.isOpen) {
      return (
        <SlideshowLightbox
            mainSrc={images[this.state.index]}
            nextSrc={images[(this.state.index + 1) % images.length]}
            prevSrc={
              images[(this.state.index + images.length - 1) % images.length]
            }
            onCloseRequest={this.closeLightbox}
            onMovePrevRequest={this.movePrev}
            onMoveNextRequest={this.moveNext}
            onImageLoadError={SlideshowLightbox.onImageLoadError}
            animationOnKeyInput={true}
        />
      );
    }

    return (<button onClick={this.openLightbox}>open</button>);
  }
}