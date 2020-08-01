"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

var Distribution = _styledComponents["default"].div.withConfig({
  displayName: "Distribution"
})(["display:flex;justify-content:space-between;align-items:center;margin-top:10px;"]);

var Button = _styledComponents["default"].button.withConfig({
  displayName: "Button"
})(["text-transform:uppercase;font-size:13px;font-family:AdihausDIN,Helvetica,Arial,sans-serif;font-weight:700;letter-spacing:2px;background-color:transparent;color:#000;line-height:17px;min-height:0;padding:2px 2px 3px;text-align:left;text-decoration:underline;white-space:unset;align-items:center;border-radius:0;cursor:pointer;display:inline-flex;justify-content:flex-start;position:relative;transition:transform .1s cubic-bezier(.3,0,.45,1),color .1s cubic-bezier(.3,0,.45,1),border .1s cubic-bezier(.3,0,.45,1),background .1s cubic-bezier(.3,0,.45,1);width:auto;margin:0;background:none;border:none;box-shadow:none;outline:none;&:hover{background-color:#000;color:#fff;text-decoration:underline;}&:active{transform:scale(.97);}&:focus{outline:none;}"]);

var Bar = _styledComponents["default"].div.withConfig({
  displayName: "Bar"
})(["box-sizing:border-box;flex-grow:1;margin:0 10px;background-color:#767677;border-radius:2px;font-size:16px;height:4px;-webkit-font-smoothing:antialiased;"]);

var Fill = (0, _styledComponents["default"])(Bar).withConfig({
  displayName: "Fill"
})(["margin:0;width:", ";background-color:#2ada71"], function (props) {
  return "".concat(props.width, "%");
});

var Amount = _styledComponents["default"].div.withConfig({
  displayName: "Amount"
})(["text-transform:uppercase;font-family:AdihausDIN,Helvetica,Arial,sans-serif;font-weight:400;letter-spacing:2px;font-size:11px;line-height:15px;"]);

var ReviewListEntry = /*#__PURE__*/function (_React$Component) {
  _inherits(ReviewListEntry, _React$Component);

  var _super = _createSuper(ReviewListEntry);

  function ReviewListEntry(props) {
    var _this;

    _classCallCheck(this, ReviewListEntry);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(ReviewListEntry, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          star = _this$props.star,
          percent = _this$props.percent,
          count = _this$props.count;
      return /*#__PURE__*/_react["default"].createElement(Distribution, null, /*#__PURE__*/_react["default"].createElement(Button, null, star, " Stars"), /*#__PURE__*/_react["default"].createElement(Bar, null, /*#__PURE__*/_react["default"].createElement(Fill, {
        width: percent
      })), /*#__PURE__*/_react["default"].createElement(Amount, null, count));
    }
  }]);

  return ReviewListEntry;
}(_react["default"].Component);

var _default = ReviewListEntry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdUYWxseUVudHJ5LmpzeCJdLCJuYW1lcyI6WyJEaXN0cmlidXRpb24iLCJzdHlsZWQiLCJkaXYiLCJCdXR0b24iLCJidXR0b24iLCJCYXIiLCJGaWxsIiwicHJvcHMiLCJ3aWR0aCIsIkFtb3VudCIsIlJldmlld0xpc3RFbnRyeSIsInN0YXRlIiwic3RhciIsInBlcmNlbnQiLCJjb3VudCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBR0MsNkJBQU9DLEdBQVY7QUFBQTtBQUFBLHNGQUFsQjs7QUFNQSxJQUFNQyxNQUFNLEdBQUdGLDZCQUFPRyxNQUFWO0FBQUE7QUFBQSxxdkJBQVo7O0FBdUNBLElBQU1DLEdBQUcsR0FBR0osNkJBQU9DLEdBQVY7QUFBQTtBQUFBLGdLQUFUOztBQVVBLElBQU1JLElBQUksR0FBRyxrQ0FBT0QsR0FBUCxDQUFIO0FBQUE7QUFBQSxxREFFRCxVQUFBRSxLQUFLO0FBQUEsbUJBQU9BLEtBQUssQ0FBQ0MsS0FBYjtBQUFBLENBRkosQ0FBVjs7QUFNQSxJQUFNQyxNQUFNLEdBQUdSLDZCQUFPQyxHQUFWO0FBQUE7QUFBQSxzSkFBWjs7SUFTTVEsZTs7Ozs7QUFDSiwyQkFBWUgsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtJLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVRO0FBQUEsd0JBQ3NCLEtBQUtKLEtBRDNCO0FBQUEsVUFDRkssSUFERSxlQUNGQSxJQURFO0FBQUEsVUFDSUMsT0FESixlQUNJQSxPQURKO0FBQUEsVUFDYUMsS0FEYixlQUNhQSxLQURiO0FBRVAsMEJBQ0UsZ0NBQUMsWUFBRCxxQkFDRSxnQ0FBQyxNQUFELFFBQVNGLElBQVQsV0FERixlQUVFLGdDQUFDLEdBQUQscUJBQUssZ0NBQUMsSUFBRDtBQUFNLFFBQUEsS0FBSyxFQUFFQztBQUFiLFFBQUwsQ0FGRixlQUdFLGdDQUFDLE1BQUQsUUFBU0MsS0FBVCxDQUhGLENBREY7QUFPRDs7OztFQWpCMkJDLGtCQUFNQyxTOztlQW9CckJOLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgRGlzdHJpYnV0aW9uID0gc3R5bGVkLmRpdmBcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5hbGlnbi1pdGVtczogY2VudGVyO1xubWFyZ2luLXRvcDogMTBweDtcbmA7XG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmZvbnQtc2l6ZTogMTNweDtcbmZvbnQtZmFtaWx5OiBBZGloYXVzRElOLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuZm9udC13ZWlnaHQ6IDcwMDtcbmxldHRlci1zcGFjaW5nOiAycHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbmNvbG9yOiAjMDAwO1xubGluZS1oZWlnaHQ6IDE3cHg7XG5taW4taGVpZ2h0OiAwO1xucGFkZGluZzogMnB4IDJweCAzcHg7XG50ZXh0LWFsaWduOiBsZWZ0O1xudGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG53aGl0ZS1zcGFjZTogdW5zZXQ7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuYm9yZGVyLXJhZGl1czogMDtcbmN1cnNvcjogcG9pbnRlcjtcbmRpc3BsYXk6IGlubGluZS1mbGV4O1xuanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xucG9zaXRpb246IHJlbGF0aXZlO1xudHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBjdWJpYy1iZXppZXIoLjMsMCwuNDUsMSksY29sb3IgLjFzIGN1YmljLWJlemllciguMywwLC40NSwxKSxib3JkZXIgLjFzIGN1YmljLWJlemllciguMywwLC40NSwxKSxiYWNrZ3JvdW5kIC4xcyBjdWJpYy1iZXppZXIoLjMsMCwuNDUsMSk7XG53aWR0aDogYXV0bztcbm1hcmdpbjogMDtcbmJhY2tncm91bmQ6IG5vbmU7XG5ib3JkZXI6IG5vbmU7XG5ib3gtc2hhZG93OiBub25lO1xub3V0bGluZTogbm9uZTtcbiY6aG92ZXIge1xuYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbmNvbG9yOiAjZmZmO1xudGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4mOmFjdGl2ZSB7XG50cmFuc2Zvcm06IHNjYWxlKC45Nyk7XG59XG4mOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmA7XG5jb25zdCBCYXIgPSBzdHlsZWQuZGl2YFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcbmZsZXgtZ3JvdzogMTtcbm1hcmdpbjogMCAxMHB4O1xuYmFja2dyb3VuZC1jb2xvcjogIzc2NzY3NztcbmJvcmRlci1yYWRpdXM6IDJweDtcbmZvbnQtc2l6ZTogMTZweDtcbmhlaWdodDogNHB4O1xuLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5gO1xuY29uc3QgRmlsbCA9IHN0eWxlZChCYXIpYFxubWFyZ2luOiAwO1xud2lkdGg6ICR7cHJvcHMgPT4gYCR7cHJvcHMud2lkdGh9JWB9O1xuYmFja2dyb3VuZC1jb2xvcjogIzJhZGE3MVxuYDtcblxuY29uc3QgQW1vdW50ID0gc3R5bGVkLmRpdmBcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IEFkaWhhdXNESU4sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbmA7XG5cbmNsYXNzIFJldmlld0xpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7c3RhciwgcGVyY2VudCwgY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPERpc3RyaWJ1dGlvbj5cbiAgICAgICAgPEJ1dHRvbj57c3Rhcn0gU3RhcnM8L0J1dHRvbj5cbiAgICAgICAgPEJhcj48RmlsbCB3aWR0aD17cGVyY2VudH0+PC9GaWxsPjwvQmFyPlxuICAgICAgICA8QW1vdW50Pntjb3VudH08L0Ftb3VudD5cbiAgICAgIDwvRGlzdHJpYnV0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3TGlzdEVudHJ5O1xuIl19