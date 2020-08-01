"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _RatingTally = _interopRequireDefault(require("./RatingTally.jsx"));

var _ReviewList = _interopRequireDefault(require("./ReviewList.jsx"));

var _StatChart = _interopRequireDefault(require("./StatChart.jsx"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _axios = _interopRequireDefault(require("axios"));

var _sampledata = _interopRequireDefault(require("../sampledata"));

var _Footer = _interopRequireDefault(require("./Footer.jsx"));

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

var Body = _styledComponents["default"].div.withConfig({
  displayName: "Body"
})(["box-sizing:border-box;font-family:AdihausDIN,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;background-color:#fff;color:#000;margin:0;padding:0;text-rendering:optimizeLegibility;text-transform:none;"]);

var Header = _styledComponents["default"].header.withConfig({
  displayName: "Header"
})(["font-family:AdineuePRO,Helvetica,Arial,sans-serif;font-style:normal;font-weight:600;margin-bottom:20px;text-transform:uppercase;"]);

var ReviewModule = _styledComponents["default"].div.withConfig({
  displayName: "ReviewModule"
})(["flex-flow:column wrap;padding-left:20px;padding-right:20px;width:100%;max-width:970px;margin:auto;overflow:hidden;will-change:opacity,transform;transition:transform 1s cubic-bezier(.2,.8,.4,1),opacity 1s cubic-bezier(.2,.8,.4,1);margin-top:60px;margin-bottom:60px;"]);

var Heading = (0, _styledComponents["default"])(Header).withConfig({
  displayName: "Heading"
})(["font-size:26px;line-height:24px;"]);

var ContentWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ContentWrapper"
})(["display:flex;flex-direction:", ";background-color:white;justify-content:space-between;align-items:center;@media only screen and (max-width:600px){flex-direction:column;}"], function (props) {
  return props.width >= 600 ? 'row' : 'column';
});

var StatsSideDiv = _styledComponents["default"].div.withConfig({
  displayName: "StatsSideDiv"
})(["box-sizing:border-box;width:calc(33.33333% - 10px);@media only screen and (max-width:600px){width:100%;}"]);

var ReviewDiv = _styledComponents["default"].div.withConfig({
  displayName: "ReviewDiv"
})(["display:flex;flex-direction:column;justify-content:space-between;width:calc(66.66667% - 10px);position:relative;@media only screen and (max-width:600px){width:100%;}"]);

var Image = _styledComponents["default"].div.withConfig({
  displayName: "Image"
})(["background-image:url(", ");width:80%;height:35rem;background-size:100%;background-repeat:no-repeat;background-position:center;left:auto;margin:auto;padding:10px;border:3px solid black;"], function (props) {
  return props.url;
});

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      reviews: [],
      productcode: '1'
    };
    _this.changeReviews = _this.changeReviews.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchReviews();
    } // HTTP Request Handlers

  }, {
    key: "fetchReviews",
    value: function fetchReviews() {
      var _this2 = this;

      // fetch(url)
      // .then(response => response.json())
      var url = "/product/2"; // let url = `/product/21011/user`
      // let url = `/api/models/${this.state.productcode}/reviews`;

      (0, _axios["default"])(url).then(function (response) {
        return response.data;
      }).then(function (reviewsData) {
        return _this2.changeReviews(reviewsData);
      })["catch"](function (err) {
        return console.error(err);
      });
    } // Set State

  }, {
    key: "changeReviews",
    value: function changeReviews(reviews) {
      var _this3 = this;

      this.setState({
        reviews: reviews
      }, function () {
        return console.log('set state:', _this3.state.reviews);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var reviews = this.state.reviews; // console.log(reviews);

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, reviews.length ? /*#__PURE__*/_react["default"].createElement(Body, null, /*#__PURE__*/_react["default"].createElement(ReviewModule, null, /*#__PURE__*/_react["default"].createElement(Heading, null, "Ratings & Reviews"), /*#__PURE__*/_react["default"].createElement(ContentWrapper, {
        width: window.innerWidth
      }, /*#__PURE__*/_react["default"].createElement(StatsSideDiv, null, /*#__PURE__*/_react["default"].createElement(_RatingTally["default"], {
        reviews: reviews
      }), /*#__PURE__*/_react["default"].createElement(_StatChart["default"], {
        reviews: reviews
      })), /*#__PURE__*/_react["default"].createElement(ReviewDiv, null, /*#__PURE__*/_react["default"].createElement(_ReviewList["default"], {
        reviews: reviews
      })))), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null)) : /*#__PURE__*/_react["default"].createElement("p", null, "loading"));
    }
  }]);

  return App;
}(_react["default"].Component);

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkJvZHkiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJSZXZpZXdNb2R1bGUiLCJIZWFkaW5nIiwiQ29udGVudFdyYXBwZXIiLCJwcm9wcyIsIndpZHRoIiwiU3RhdHNTaWRlRGl2IiwiUmV2aWV3RGl2IiwiSW1hZ2UiLCJ1cmwiLCJBcHAiLCJzdGF0ZSIsInJldmlld3MiLCJwcm9kdWN0Y29kZSIsImNoYW5nZVJldmlld3MiLCJiaW5kIiwiZmV0Y2hSZXZpZXdzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJldmlld3NEYXRhIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic2V0U3RhdGUiLCJsb2ciLCJsZW5ndGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyw2QkFBT0MsR0FBVjtBQUFBO0FBQUEsNE5BQVY7O0FBY0EsSUFBTUMsTUFBTSxHQUFHRiw2QkFBT0csTUFBVjtBQUFBO0FBQUEsd0lBQVo7O0FBUUEsSUFBTUMsWUFBWSxHQUFHSiw2QkFBT0MsR0FBVjtBQUFBO0FBQUEsZ1JBQWxCOztBQWNBLElBQU1JLE9BQU8sR0FBRyxrQ0FBT0gsTUFBUCxDQUFIO0FBQUE7QUFBQSx3Q0FBYjs7QUFLQSxJQUFNSSxjQUFjLEdBQUdOLDZCQUFPQyxHQUFWO0FBQUE7QUFBQSxrTEFFRixVQUFDTSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLElBQWUsR0FBZixHQUFxQixLQUFyQixHQUE2QixRQUF4QztBQUFBLENBRkUsQ0FBcEI7O0FBWUEsSUFBTUMsWUFBWSxHQUFHVCw2QkFBT0MsR0FBVjtBQUFBO0FBQUEsZ0hBQWxCOztBQVFBLElBQU1TLFNBQVMsR0FBR1YsNkJBQU9DLEdBQVY7QUFBQTtBQUFBLDZLQUFmOztBQVdBLElBQU1VLEtBQUssR0FBR1gsNkJBQU9DLEdBQVY7QUFBQTtBQUFBLGlNQUNhLFVBQUNNLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEdBQWpCO0FBQUEsQ0FEYixDQUFYOztJQWFNQyxHOzs7OztBQUNKLGVBQVlOLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLTyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLEVBREU7QUFFWEMsTUFBQUEsV0FBVyxFQUFFO0FBRkYsS0FBYjtBQUlBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsK0JBQXJCO0FBTmlCO0FBT2xCOzs7O3dDQUVtQjtBQUNsQixXQUFLQyxZQUFMO0FBQ0QsSyxDQUVEOzs7O21DQUNlO0FBQUE7O0FBQ2I7QUFDQTtBQUNBLFVBQUlQLEdBQUcsZUFBUCxDQUhhLENBSWI7QUFDQTs7QUFDQSw2QkFBTUEsR0FBTixFQUNHUSxJQURILENBQ1EsVUFBQUMsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ0MsSUFBYjtBQUFBLE9BRGhCLEVBRUdGLElBRkgsQ0FFUSxVQUFBRyxXQUFXO0FBQUEsZUFBSSxNQUFJLENBQUNOLGFBQUwsQ0FBbUJNLFdBQW5CLENBQUo7QUFBQSxPQUZuQixXQUdTLFVBQUFDLEdBQUc7QUFBQSxlQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZCxDQUFKO0FBQUEsT0FIWjtBQUlELEssQ0FFRDs7OztrQ0FDY1QsTyxFQUFTO0FBQUE7O0FBQ3JCLFdBQUtZLFFBQUwsQ0FBYztBQUFFWixRQUFBQSxPQUFPLEVBQVBBO0FBQUYsT0FBZCxFQUEyQjtBQUFBLGVBQUlVLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFlBQVosRUFBMEIsTUFBSSxDQUFDZCxLQUFMLENBQVdDLE9BQXJDLENBQUo7QUFBQSxPQUEzQjtBQUNEOzs7NkJBRVE7QUFBQSxVQUNGQSxPQURFLEdBQ1MsS0FBS0QsS0FEZCxDQUNGQyxPQURFLEVBRVA7O0FBQ0EsMEJBQ0Usa0VBQ0dBLE9BQU8sQ0FBQ2MsTUFBUixnQkFDSCxnQ0FBQyxJQUFELHFCQUNFLGdDQUFDLFlBQUQscUJBQ0UsZ0NBQUMsT0FBRCw0QkFERixlQUVFLGdDQUFDLGNBQUQ7QUFBZ0IsUUFBQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0M7QUFBOUIsc0JBQ0UsZ0NBQUMsWUFBRCxxQkFDRSxnQ0FBQyx1QkFBRDtBQUFhLFFBQUEsT0FBTyxFQUFFaEI7QUFBdEIsUUFERixlQUVFLGdDQUFDLHFCQUFEO0FBQVcsUUFBQSxPQUFPLEVBQUVBO0FBQXBCLFFBRkYsQ0FERixlQUtFLGdDQUFDLFNBQUQscUJBQ0UsZ0NBQUMsc0JBQUQ7QUFBWSxRQUFBLE9BQU8sRUFBRUE7QUFBckIsUUFERixDQUxGLENBRkYsQ0FERixlQWFFLGdDQUFDLGtCQUFELE9BYkYsQ0FERyxnQkFpQkMscURBbEJKLENBREY7QUFzQkQ7Ozs7RUF6RGVpQixrQkFBTUMsUzs7ZUE0RFRwQixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmF0aW5nVGFsbHkgZnJvbSAnLi9SYXRpbmdUYWxseS5qc3gnO1xuaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi9SZXZpZXdMaXN0LmpzeCc7XG5pbXBvcnQgU3RhdENoYXJ0IGZyb20gJy4vU3RhdENoYXJ0LmpzeCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNhbXBsZWRhdGEgZnJvbSAnLi4vc2FtcGxlZGF0YSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzeCc7XG5cbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcbmZvbnQtZmFtaWx5OiBBZGloYXVzRElOLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDQwMDtcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5jb2xvcjogIzAwMDtcbm1hcmdpbjogMDtcbi8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cbnBhZGRpbmc6IDA7XG50ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xudGV4dC10cmFuc2Zvcm06IG5vbmU7XG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuZm9udC1mYW1pbHk6IEFkaW5ldWVQUk8sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNjAwO1xubWFyZ2luLWJvdHRvbTogMjBweDtcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5gO1xuXG5jb25zdCBSZXZpZXdNb2R1bGUgPSBzdHlsZWQuZGl2YFxuZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbnBhZGRpbmctbGVmdDogMjBweDtcbnBhZGRpbmctcmlnaHQ6IDIwcHg7XG53aWR0aDogMTAwJTtcbm1heC13aWR0aDogOTcwcHg7XG5tYXJnaW46IGF1dG87XG5vdmVyZmxvdzogaGlkZGVuO1xud2lsbC1jaGFuZ2U6IG9wYWNpdHksdHJhbnNmb3JtO1xudHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGN1YmljLWJlemllciguMiwuOCwuNCwxKSxvcGFjaXR5IDFzIGN1YmljLWJlemllciguMiwuOCwuNCwxKTtcbm1hcmdpbi10b3A6IDYwcHg7XG5tYXJnaW4tYm90dG9tOiA2MHB4O1xuYDtcblxuY29uc3QgSGVhZGluZyA9IHN0eWxlZChIZWFkZXIpYFxuZm9udC1zaXplOiAyNnB4O1xubGluZS1oZWlnaHQ6IDI0cHg7XG5gO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCA+PSA2MDAgPyAncm93JyA6ICdjb2x1bW4nfTtcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYDtcblxuY29uc3QgU3RhdHNTaWRlRGl2ID0gc3R5bGVkLmRpdmBcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG53aWR0aDogY2FsYygzMy4zMzMzMyUgLSAxMHB4KTtcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5gO1xuXG5jb25zdCBSZXZpZXdEaXYgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG53aWR0aDogY2FsYyg2Ni42NjY2NyUgLSAxMHB4KTtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5kaXZgXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IHByb3BzLnVybH0pO1xud2lkdGg6IDgwJTtcbmhlaWdodDogMzVyZW07XG5iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xubGVmdDogYXV0bztcbm1hcmdpbjogYXV0bztcbnBhZGRpbmc6IDEwcHg7XG5ib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbmA7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXZpZXdzOiBbXSxcbiAgICAgIHByb2R1Y3Rjb2RlOiAnMSdcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlUmV2aWV3cyA9IHRoaXMuY2hhbmdlUmV2aWV3cy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFJldmlld3MoKTtcbiAgfVxuXG4gIC8vIEhUVFAgUmVxdWVzdCBIYW5kbGVyc1xuICBmZXRjaFJldmlld3MoKSB7XG4gICAgLy8gZmV0Y2godXJsKVxuICAgIC8vIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICBsZXQgdXJsID0gYC9wcm9kdWN0LzJgXG4gICAgLy8gbGV0IHVybCA9IGAvcHJvZHVjdC8yMTAxMS91c2VyYFxuICAgIC8vIGxldCB1cmwgPSBgL2FwaS9tb2RlbHMvJHt0aGlzLnN0YXRlLnByb2R1Y3Rjb2RlfS9yZXZpZXdzYDtcbiAgICBheGlvcyh1cmwpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLnRoZW4ocmV2aWV3c0RhdGEgPT4gdGhpcy5jaGFuZ2VSZXZpZXdzKHJldmlld3NEYXRhKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfVxuXG4gIC8vIFNldCBTdGF0ZVxuICBjaGFuZ2VSZXZpZXdzKHJldmlld3MpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmV2aWV3cyB9LCAoKT0+Y29uc29sZS5sb2coJ3NldCBzdGF0ZTonLCB0aGlzLnN0YXRlLnJldmlld3MpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge3Jldmlld3N9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXZpZXdzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3Jldmlld3MubGVuZ3RoID8gKFxuICAgICAgPEJvZHk+XG4gICAgICAgIDxSZXZpZXdNb2R1bGU+XG4gICAgICAgICAgPEhlYWRpbmc+UmF0aW5ncyAmIFJldmlld3M8L0hlYWRpbmc+XG4gICAgICAgICAgPENvbnRlbnRXcmFwcGVyIHdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aH0+XG4gICAgICAgICAgICA8U3RhdHNTaWRlRGl2PlxuICAgICAgICAgICAgICA8UmF0aW5nVGFsbHkgcmV2aWV3cz17cmV2aWV3c30vPlxuICAgICAgICAgICAgICA8U3RhdENoYXJ0IHJldmlld3M9e3Jldmlld3N9IC8+XG4gICAgICAgICAgICA8L1N0YXRzU2lkZURpdj5cbiAgICAgICAgICAgIDxSZXZpZXdEaXY+XG4gICAgICAgICAgICAgIDxSZXZpZXdMaXN0IHJldmlld3M9e3Jldmlld3N9Lz5cbiAgICAgICAgICAgIDwvUmV2aWV3RGl2PlxuICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgIDwvUmV2aWV3TW9kdWxlPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L0JvZHk+IClcbiAgICAgICAgICA6XG4gICAgICAgICAgPHA+bG9hZGluZzwvcD59XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=