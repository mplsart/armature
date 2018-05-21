'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/PageBase/PageBase.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _redux2 = require('../redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Base Wrapper for Pages


var PageBase = function (_React$Component) {
  _inherits(PageBase, _React$Component);

  function PageBase() {
    _classCallCheck(this, PageBase);

    return _possibleConstructorReturn(this, (PageBase.__proto__ || Object.getPrototypeOf(PageBase)).apply(this, arguments));
  }

  _createClass(PageBase, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.loadPage();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        children
      );
    }
  }]);

  return PageBase;
}(_react2.default.Component);

PageBase.propTypes = {
  children: _propTypes2.default.node,
  pageAction: _propTypes2.default.any,
  loadPage: _propTypes2.default.func
};

function mapStateToProps() /* state */{
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadPage: (0, _redux.bindActionCreators)(function () {
      if (!ownProps.pageAction) {
        return { type: 'UNDEFINED_PAGE_LOAD' };
      }

      // Duck Type - action with args
      if (Array.isArray(ownProps.pageAction) && ownProps.pageAction.length === 2) {
        return (0, _redux2.actionFactory)(ownProps.pageAction[0].REQUEST, _extends({}, ownProps.pageAction[1]));
      }

      // Duck Type - Async Request
      if (ownProps.pageAction.REQUEST) {
        // If Page Actio is a asyncRequest Type
        return (0, _redux2.actionFactory)(ownProps.pageAction.REQUEST, {});
      }

      console.error('Unknown pageAction:');
      console.error(ownProps.pageAction.REQUEST);
    }, dispatch)
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PageBase);