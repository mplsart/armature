'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ui/cards/CompactGalleryCard.js'; // TODO: This is a info window emulating ListItem...
// TODO: Make this a base component

// import { Link } from 'react-router';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _ListItemActionButton = require('../../ui/buttons/ListItemActionButton');

var _ListItemActionButton2 = _interopRequireDefault(_ListItemActionButton);

var _CardMedia = require('@material-ui/core/CardMedia');

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _ListItemIcon = require('@material-ui/core/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _location = require('../../utils/location');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      margin: theme.spacing.unit
    },
    iconStyle: {
      fontSize: '16px',
      verticalAlign: 'sub' // hacky...
    },
    image: {
      width: '5rem',
      height: '5rem',
      marginLeft: theme.spacing.unit * 2,
      marginRight: '0px'
    },
    text: {
      color: 'rgba(0, 0, 0, 0.54)',
      '& h3': {
        color: '#111111' //theme.palette.primary['500'] //'#039be5',
      }
    },
    mapLink: {
      color: theme.typography.caption.color,
      textDecoration: 'underline',
      textDecorationStyle: 'dotted',

      '&:hover': {
        textDecoration: 'underline',
        textDecorationStyle: 'solid',
        color: theme.palette.primary['500']
      }
    }
  };
};

function CompactGalleryCard(_ref) {
  var classes = _ref.classes,
      resource = _ref.resource;

  if (!(resource && resource.resource_id)) {
    return null;
  }

  // Image
  //let imageUrl = 'https://storage.googleapis.com/cdn.mplsart.com/file_container/RmlsZUNvbnRhaW5lch4fMTUwNDAwMDE/thumb.png';
  var imageUrl = void 0;
  var imageAltText = resource.name;
  if (resource.primary_image_resource) {
    imageUrl = resource.primary_image_resource.versions.THUMB.url;
  }

  var imageNode = void 0;
  if (imageUrl) {
    imageNode = _react2.default.createElement(
      _ListItemIcon2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      },
      _react2.default.createElement(_CardMedia2.default, {
        className: classes.image,
        image: imageUrl,
        title: imageAltText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })
    );
  }

  // Text Content
  var primary_text = void 0,
      secondary_text = void 0;
  primary_text = resource.name;

  secondary_text = _react2.default.createElement(
    'span',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      }
    },
    resource.summary && _react2.default.createElement(
      'span',
      { style: { display: 'block' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      },
      _react2.default.createElement(
        'em',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        },
        resource.summary
      )
    ),
    _react2.default.createElement(
      _Icon2.default,
      { className: classes.iconStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      },
      'place'
    ),
    _react2.default.createElement(
      'span',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      },
      _react2.default.createElement(
        'a',
        { href: (0, _location.build_google_map_url_for_venue)(resource), target: '_new', className: classes.mapLink, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        },
        (0, _location.formatted_address)(resource)
      )
    ),
    _react2.default.createElement('br', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      }
    }),
    resource.is_premium_profile && _react2.default.createElement(
      _ListItemActionButton2.default,
      {
        variant: 'raised',
        color: 'primary'
        /*
        // Figure out how to bind click handlers in google maps...
        component={({...props}) => {
        return (<Link to={{
        pathname: `/galleries/${resource.slug}`,
        state: { modal: true, returnTo: '/gallery/guide?' }
        }} {...props} />);
        }}
        */
        , href: '/galleries/' + resource.slug,
        target: '_new', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      },
      'Profile'
    )
  );

  return _react2.default.createElement(
    'div',
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      }
    },
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(classes.text), __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      },
      _react2.default.createElement(
        _Typography2.default,
        { variant: 'subheading', __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        },
        primary_text
      ),
      _react2.default.createElement(
        _Typography2.default,
        { variant: 'caption', className: (0, _classnames2.default)(classes.text), __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        },
        secondary_text
      )
    ),
    resource.is_premium_profile && imageNode
  );
}

CompactGalleryCard.propTypes = {
  classes: _propTypes2.default.object,
  theme: _propTypes2.default.object,
  resource: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(CompactGalleryCard);