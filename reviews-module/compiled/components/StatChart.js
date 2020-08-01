"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StatSlider = _interopRequireDefault(require("./StatSlider.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Header = _styledComponents["default"].div.withConfig({
  displayName: "Header"
})(["margin:20px 0 0 0;"]);

var Percent = _styledComponents["default"].header.withConfig({
  displayName: "Percent"
})(["margin:0;padding:0;font-size:56px;line-height:48px;font-family:AdineuePRO,Helvetica,Arial,sans-serif;font-style:normal;font-weight:600;"]);

var StatChart = /*#__PURE__*/function (_React$Component) {
  _inherits(StatChart, _React$Component);

  var _super = _createSuper(StatChart);

  function StatChart(props) {
    var _this;

    _classCallCheck(this, StatChart);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(StatChart, [{
    key: "render",
    value: function render() {
      var percentRecommended;
      var reviews = this.props.reviews[0].review;
      var totalRecommended = 0;
      var size = 0;
      var width = 0;
      var comfort = 0;
      var quality = 0;

      if (reviews.length === 0) {
        percentRecommended = 0 + '%';
        var sizePercent = 0;
        var widthPercent = 0;
        var comfortPercent = 0;
        var qualityPercent = 0;
      } else {
        for (var i = 0; i < reviews.length; i++) {
          if (reviews[i].doesRecommended === true) totalRecommended += 1;

          if (reviews[i].rating_size === 'a size too small') {
            size += 0;
          } else if (reviews[i].rating_size === '1/2 a size too small') {
            size += 25;
          } else if (reviews[i].rating_size === 'Perfect') {
            size += 50;
          } else if (reviews[i].rating_size === '1/2 a size too big') {
            size += 75;
          } else {
            size += 100;
          }

          if (reviews[i].rating_width === 'Too narrow') {
            width += 0;
          } else if (reviews[i].rating_width === 'Slightly narrow') {
            width += 25;
          } else if (reviews[i].rating_width === 'Perfect') {
            width += 50;
          } else if (reviews[i].rating_width === 'Slightly wide') {
            width += 75;
          } else {
            width += 100;
          }

          if (reviews[i].rating_comfort === 'Uncomfortable') {
            comfort += 0;
          } else if (reviews[i].rating_comfort === 'Slightly uncomfortable') {
            comfort += 25;
          } else if (reviews[i].rating_comfort === 'Ok') {
            comfort += 50;
          } else if (reviews[i].rating_comfort === 'Comfortable') {
            comfort += 75;
          } else {
            comfort += 100;
          }

          if (reviews[i].rating_quality === 'Poor') {
            quality += 0;
          } else if (reviews[i].rating_quality === 'Below average') {
            quality += 25;
          } else if (reviews[i].rating_quality === 'What I expected') {
            quality += 50;
          } else if (reviews[i].rating_quality === 'Pretty great') {
            quality += 75;
          } else {
            quality += 100;
          }
        }

        percentRecommended = Math.round(totalRecommended / reviews.length * 100) + '%';
        var sizePercent = size / reviews.length;
        var widthPercent = width / reviews.length;
        var comfortPercent = comfort / reviews.length;
        var qualityPercent = comfort / reviews.length;
      } // console.log(qualityPercent)


      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(Header, null, /*#__PURE__*/_react["default"].createElement(Percent, null, percentRecommended), /*#__PURE__*/_react["default"].createElement("span", null, "of customers recommend this product")), /*#__PURE__*/_react["default"].createElement(_StatSlider["default"], {
        title: 'size',
        labels: ['small', 'perfect', 'large'],
        prct: sizePercent
      }), /*#__PURE__*/_react["default"].createElement(_StatSlider["default"], {
        title: 'width',
        labels: ['narrow', 'perfect', 'wide'],
        prct: widthPercent
      }), /*#__PURE__*/_react["default"].createElement(_StatSlider["default"], {
        title: 'comfort',
        labels: ['poor', '', 'perfect'],
        prct: comfortPercent
      }), /*#__PURE__*/_react["default"].createElement(_StatSlider["default"], {
        title: 'quality',
        labels: ['poor', '', 'perfect'],
        prct: qualityPercent
      }));
    }
  }]);

  return StatChart;
}(_react["default"].Component);

var _default = StatChart;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TdGF0Q2hhcnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlZCIsImRpdiIsIlBlcmNlbnQiLCJoZWFkZXIiLCJTdGF0Q2hhcnQiLCJwcm9wcyIsInN0YXRlIiwicGVyY2VudFJlY29tbWVuZGVkIiwicmV2aWV3cyIsInJldmlldyIsInRvdGFsUmVjb21tZW5kZWQiLCJzaXplIiwid2lkdGgiLCJjb21mb3J0IiwicXVhbGl0eSIsImxlbmd0aCIsInNpemVQZXJjZW50Iiwid2lkdGhQZXJjZW50IiwiY29tZm9ydFBlcmNlbnQiLCJxdWFsaXR5UGVyY2VudCIsImkiLCJkb2VzUmVjb21tZW5kZWQiLCJyYXRpbmdfc2l6ZSIsInJhdGluZ193aWR0aCIsInJhdGluZ19jb21mb3J0IiwicmF0aW5nX3F1YWxpdHkiLCJNYXRoIiwicm91bmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLDZCQUFPQyxHQUFWO0FBQUE7QUFBQSwwQkFBWjs7QUFHQSxJQUFNQyxPQUFPLEdBQUdGLDZCQUFPRyxNQUFWO0FBQUE7QUFBQSwrSUFBYjs7SUFXTUMsUzs7Ozs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCOzs7OzZCQUVRO0FBQ1AsVUFBSUMsa0JBQUo7QUFDQSxVQUFJQyxPQUFPLEdBQUcsS0FBS0gsS0FBTCxDQUFXRyxPQUFYLENBQW1CLENBQW5CLEVBQXNCQyxNQUFwQztBQUNBLFVBQUlDLGdCQUFnQixHQUFHLENBQXZCO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLENBQVg7QUFDQSxVQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFVBQUlDLE9BQU8sR0FB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QUxGLGVBTUUsZ0NBQUMsc0JBQUQ7QUFBWSxRQUFBLEtBQUssRUFBRSxPQUFuQjtBQUE0QixRQUFBLE1BQU0sRUFBRSxDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLE1BQXRCLENBQXBDO0FBQW1FLFFBQUEsSUFBSSxFQUFFQztBQUF6RSxRQU5GLGVBT0UsZ0NBQUMsc0JBQUQ7QUFBWSxRQUFBLEtBQUssRUFBRSxTQUFuQjtBQUE4QixRQUFBLE1BQU0sRUFBRSxDQUFDLE1BQUQsRUFBUyxFQUFULEVBQWEsU0FBYixDQUF0QztBQUErRCxRQUFBLElBQUksRUFBRUM7QUFBckUsUUFQRixlQVFFLGdDQUFDLHNCQUFEO0FBQVksUUFBQSxLQUFLLEVBQUUsU0FBbkI7QUFBOEIsUUFBQSxNQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsRUFBVCxFQUFhLFNBQWIsQ0FBdEM7QUFBK0QsUUFBQSxJQUFJLEVBQUVDO0FBQXJFLFFBUkYsQ0FERjtBQVlEOzs7O0VBeEZxQlMsa0JBQU1DLFM7O2VBMkZmekIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFN0YXRTbGlkZXIgZnJvbSAnLi9TdGF0U2xpZGVyLmpzeCc7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG5tYXJnaW46IDIwcHggMCAwIDA7XG5gO1xuY29uc3QgUGVyY2VudCA9IHN0eWxlZC5oZWFkZXJgXG5tYXJnaW46MDtcbnBhZGRpbmc6MDtcbmZvbnQtc2l6ZTogNTZweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICBmb250LWZhbWlseTogQWRpbmV1ZVBSTyxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbmA7XG5cblxuY2xhc3MgU3RhdENoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBwZXJjZW50UmVjb21tZW5kZWQ7XG4gICAgdmFyIHJldmlld3MgPSB0aGlzLnByb3BzLnJldmlld3NbMF0ucmV2aWV3O1xuICAgIHZhciB0b3RhbFJlY29tbWVuZGVkID0gMDtcbiAgICB2YXIgc2l6ZSA9IDA7XG4gICAgdmFyIHdpZHRoID0gMDtcbiAgICB2YXIgY29tZm9ydCA9IDA7XG4gICAgdmFyIHF1YWxpdHkgPSAwO1xuICAgIGlmIChyZXZpZXdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcGVyY2VudFJlY29tbWVuZGVkID0gMCArICclJztcbiAgICAgIHZhciBzaXplUGVyY2VudCA9IDA7XG4gICAgICB2YXIgd2lkdGhQZXJjZW50ID0gMDtcbiAgICAgIHZhciBjb21mb3J0UGVyY2VudCA9IDA7XG4gICAgICB2YXIgcXVhbGl0eVBlcmNlbnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJldmlld3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJldmlld3NbaV0uZG9lc1JlY29tbWVuZGVkID09PSB0cnVlKSB0b3RhbFJlY29tbWVuZGVkICs9IDE7XG4gICAgICAgIGlmIChyZXZpZXdzW2ldLnJhdGluZ19zaXplID09PSAnYSBzaXplIHRvbyBzbWFsbCcpIHtcbiAgICAgICAgICBzaXplICs9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAocmV2aWV3c1tpXS5yYXRpbmdfc2l6ZSA9PT0gJzEvMiBhIHNpemUgdG9vIHNtYWxsJykge1xuICAgICAgICAgIHNpemUgKz0gMjU7XG4gICAgICAgIH0gZWxzZSBpZiAocmV2aWV3c1tpXS5yYXRpbmdfc2l6ZSA9PT0gJ1BlcmZlY3QnKSB7XG4gICAgICAgICAgc2l6ZSArPSA1MDtcbiAgICAgICAgfSBlbHNlIGlmIChyZXZpZXdzW2ldLnJhdGluZ19zaXplID09PSAnMS8yIGEgc2l6ZSB0b28gYmlnJykge1xuICAgICAgICAgIHNpemUgKz0gNzU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2l6ZSArPSAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldmlld3NbaV0ucmF0aW5nX3dpZHRoID09PSAnVG9vIG5hcnJvdycpIHtcbiAgICAgICAgICB3aWR0aCArPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHJldmlld3NbaV0ucmF0aW5nX3dpZHRoID09PSAnU2xpZ2h0bHkgbmFycm93Jykge1xuICAgICAgICAgIHdpZHRoICs9IDI1O1xuICAgICAgICB9IGVsc2UgaWYgKHJldmlld3NbaV0ucmF0aW5nX3dpZHRoID09PSAnUGVyZmVjdCcpIHtcbiAgICAgICAgICB3aWR0aCArPSA1MDtcbiAgICAgICAgfSBlbHNlIGlmIChyZXZpZXdzW2ldLnJhdGluZ193aWR0aCA9PT0gJ1NsaWdodGx5IHdpZGUnKSB7XG4gICAgICAgICAgd2lkdGggKz0gNzU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2lkdGggKz0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXZpZXdzW2ldLnJhdGluZ19jb21mb3J0ID09PSAnVW5jb21mb3J0YWJsZScpIHtcbiAgICAgICAgICBjb21mb3J0ICs9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAocmV2aWV3c1tpXS5yYXRpbmdfY29tZm9ydCA9PT0gJ1NsaWdodGx5IHVuY29tZm9ydGFibGUnKSB7XG4gICAgICAgICAgY29tZm9ydCArPSAyNTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXZpZXdzW2ldLnJhdGluZ19jb21mb3J0ID09PSAnT2snKSB7XG4gICAgICAgICAgY29tZm9ydCArPSA1MDtcbiAgICAgICAgfSBlbHNlIGlmIChyZXZpZXdzW2ldLnJhdGluZ19jb21mb3J0ID09PSAnQ29tZm9ydGFibGUnKSB7XG4gICAgICAgICAgY29tZm9ydCArPSA3NTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21mb3J0ICs9IDEwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmV2aWV3c1tpXS5yYXRpbmdfcXVhbGl0eSA9PT0gJ1Bvb3InKSB7XG4gICAgICAgICAgcXVhbGl0eSArPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHJldmlld3NbaV0ucmF0aW5nX3F1YWxpdHkgPT09ICdCZWxvdyBhdmVyYWdlJykge1xuICAgICAgICAgIHF1YWxpdHkgKz0gMjU7XG4gICAgICAgIH0gZWxzZSBpZiAocmV2aWV3c1tpXS5yYXRpbmdfcXVhbGl0eSA9PT0gJ1doYXQgSSBleHBlY3RlZCcpIHtcbiAgICAgICAgICBxdWFsaXR5ICs9IDUwO1xuICAgICAgICB9IGVsc2UgaWYgKHJldmlld3NbaV0ucmF0aW5nX3F1YWxpdHkgPT09ICdQcmV0dHkgZ3JlYXQnKSB7XG4gICAgICAgICAgcXVhbGl0eSArPSA3NTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWFsaXR5ICs9IDEwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcGVyY2VudFJlY29tbWVuZGVkID0gTWF0aC5yb3VuZCh0b3RhbFJlY29tbWVuZGVkIC8gcmV2aWV3cy5sZW5ndGggKiAxMDApICsgJyUnO1xuICAgICAgdmFyIHNpemVQZXJjZW50ID0gc2l6ZSAvIHJldmlld3MubGVuZ3RoO1xuICAgICAgdmFyIHdpZHRoUGVyY2VudCA9IHdpZHRoIC8gcmV2aWV3cy5sZW5ndGg7XG4gICAgICB2YXIgY29tZm9ydFBlcmNlbnQgPSBjb21mb3J0IC8gcmV2aWV3cy5sZW5ndGg7XG4gICAgICB2YXIgcXVhbGl0eVBlcmNlbnQgPSBjb21mb3J0IC8gcmV2aWV3cy5sZW5ndGg7XG4gICAgfVxuICBcbiAgICAvLyBjb25zb2xlLmxvZyhxdWFsaXR5UGVyY2VudClcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIDxQZXJjZW50PntwZXJjZW50UmVjb21tZW5kZWR9PC9QZXJjZW50PlxuICAgICAgICAgIDxzcGFuPm9mIGN1c3RvbWVycyByZWNvbW1lbmQgdGhpcyBwcm9kdWN0PC9zcGFuPlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPFN0YXRTbGlkZXIgdGl0bGU9eydzaXplJ30gbGFiZWxzPXtbJ3NtYWxsJywgJ3BlcmZlY3QnLCAnbGFyZ2UnXX0gcHJjdD17c2l6ZVBlcmNlbnR9Lz5cbiAgICAgICAgPFN0YXRTbGlkZXIgdGl0bGU9eyd3aWR0aCd9IGxhYmVscz17WyduYXJyb3cnLCAncGVyZmVjdCcsICd3aWRlJ119IHByY3Q9e3dpZHRoUGVyY2VudH0vPlxuICAgICAgICA8U3RhdFNsaWRlciB0aXRsZT17J2NvbWZvcnQnfSBsYWJlbHM9e1sncG9vcicsICcnLCAncGVyZmVjdCddfSBwcmN0PXtjb21mb3J0UGVyY2VudH0vPlxuICAgICAgICA8U3RhdFNsaWRlciB0aXRsZT17J3F1YWxpdHknfSBsYWJlbHM9e1sncG9vcicsICcnLCAncGVyZmVjdCddfSBwcmN0PXtxdWFsaXR5UGVyY2VudH0vPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRDaGFydDsiXX0=