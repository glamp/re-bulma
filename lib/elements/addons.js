'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../build/styles');

var _styles2 = _interopRequireDefault(_styles);

var _helper = require('../helper/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Addons = function (_Component) {
  _inherits(Addons, _Component);

  function Addons() {
    _classCallCheck(this, Addons);

    return _possibleConstructorReturn(this, (Addons.__proto__ || Object.getPrototypeOf(Addons)).apply(this, arguments));
  }

  _createClass(Addons, [{
    key: 'createControlClassName',
    value: function createControlClassName() {
      return [_styles2.default.control, _styles2.default.hasAddons, this.props.className, this.props.hasAddonsCentered ? _styles2.default.hasAddonsCentered : '', this.props.hasAddonsRight ? _styles2.default.hasAddonsRight : ''].join(' ').trim();
    }
  }, {
    key: 'cloneWithProps',
    value: function cloneWithProps() {
      var _this2 = this;

      if (_react2.default.Children.count(this.props.children) === 1) {
        return this.props.children && _react2.default.cloneElement(this.props.children, {
          color: this.props.color,
          hasAddons: true
        });
      }
      return this.props.children.map(function (child, i) {
        return _react2.default.cloneElement(child, {
          color: _this2.props.color,
          key: i,
          hasAddons: true
        });
      });
    }
  }, {
    key: 'renderHelp',
    value: function renderHelp() {
      if (!this.props.help) return null;
      return _react2.default.createElement(
        'span',
        { className: [_styles2.default.help, _styles2.default[this.props.help.color]].join(' ') },
        this.props.help.text
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'p',
          _extends({
            className: this.createControlClassName(),
            style: this.props.style
          }, (0, _helper.getCallbacks)(this.props)),
          this.props.children && this.cloneWithProps()
        ),
        this.renderHelp()
      );
    }
  }]);

  return Addons;
}(_react.Component);

Addons.propTypes = {
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  children: _react.PropTypes.any,
  color: _react.PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger', 'isLink', 'isWhite', 'isLight', 'isDark', 'isBlack', 'isLink']),
  help: _react.PropTypes.shape({
    text: _react.PropTypes.string,
    color: _react.PropTypes.oneOf(['isPrimary', 'isInfo', 'isSuccess', 'isWarning', 'isDanger'])
  }),
  hasAddonsCentered: _react.PropTypes.bool,
  hasAddonsRight: _react.PropTypes.bool
};
Addons.defaultProps = {
  style: {},
  className: ''
};
exports.default = Addons;