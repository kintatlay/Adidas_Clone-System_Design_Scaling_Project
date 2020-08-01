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

var Bar = _styledComponents["default"].div.withConfig({
  displayName: "Bar"
})(["margin-top:20px;"]);

var Triangle = _styledComponents["default"].div.withConfig({
  displayName: "Triangle"
})(["position:relative;"]);

var Title = _styledComponents["default"].div.withConfig({
  displayName: "Title"
})(["text-transform:uppercase;font-size:13px;letter-spacing:2px;margin-bottom:7px;text-align:left;font-family:AdihausDIN,Helvetica,Arial,sans-serif;font-weight:400;"]);

var Background = _styledComponents["default"].div.withConfig({
  displayName: "Background"
})(["overflow:visible;background-color:#767677;height:4px;position:relative;"]);

var Arrow = _styledComponents["default"].div.withConfig({
  displayName: "Arrow"
})(["left:", ";border-top-color:#2ada71;background-color:transparent;height:auto;top:-8px;width:0;border-color:#2ada71 transparent transparent;border-style:solid;border-width:20px 10px;position:absolute;z-index:3;"], function (props) {
  return "".concat(props.pct, "%");
});

var Steps = _styledComponents["default"].div.withConfig({
  displayName: "Steps"
})(["display:flex;height:100%;justify-content:space-between;width:100%;"]);

var Step = _styledComponents["default"].div.withConfig({
  displayName: "Step"
})(["left:", ";margin-left:-2px;background-color:#fff;height:4px;position:absolute;top:0;width:4px;z-index:2;"], function (props) {
  return "".concat(props.pct, "%");
});

var Labels = _styledComponents["default"].div.withConfig({
  displayName: "Labels"
})(["margin-top:10px;color:#000;display:flex;font-size:12px;justify-content:space-between;letter-spacing:2px;text-transform:uppercase;"]);

var Label = _styledComponents["default"].span.withConfig({
  displayName: "Label"
})(["text-transform:uppercase;font-family:AdihausDIN,Helvetica,Arial,sans-serif;font-weight:400;letter-spacing:2px;text-align:left;font-size:11px;line-height:15px;"]);

var StatSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(StatSlider, _React$Component);

  var _super = _createSuper(StatSlider);

  function StatSlider(props) {
    _classCallCheck(this, StatSlider);

    return _super.call(this, props);
  }

  _createClass(StatSlider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          labels = _this$props.labels,
          prct = _this$props.prct;
      return /*#__PURE__*/_react["default"].createElement(Bar, null, /*#__PURE__*/_react["default"].createElement(Triangle, null, /*#__PURE__*/_react["default"].createElement(Title, null, title), /*#__PURE__*/_react["default"].createElement(Background, null, /*#__PURE__*/_react["default"].createElement(Arrow, {
        pct: prct
      }), /*#__PURE__*/_react["default"].createElement(Steps, null, /*#__PURE__*/_react["default"].createElement(Step, {
        pct: 25
      }), /*#__PURE__*/_react["default"].createElement(Step, {
        pct: 50
      }), /*#__PURE__*/_react["default"].createElement(Step, {
        pct: 75
      }))), /*#__PURE__*/_react["default"].createElement(Labels, null, /*#__PURE__*/_react["default"].createElement(Label, null, labels[0]), /*#__PURE__*/_react["default"].createElement(Label, null, labels[1]), /*#__PURE__*/_react["default"].createElement(Label, null, labels[2]))));
    }
  }]);

  return StatSlider;
}(_react["default"].Component);

var _default = StatSlider;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TdGF0U2xpZGVyLmpzeCJdLCJuYW1lcyI6WyJCYXIiLCJzdHlsZWQiLCJkaXYiLCJUcmlhbmdsZSIsIlRpdGxlIiwiQmFja2dyb3VuZCIsIkFycm93IiwicHJvcHMiLCJwY3QiLCJTdGVwcyIsIlN0ZXAiLCJMYWJlbHMiLCJMYWJlbCIsInNwYW4iLCJTdGF0U2xpZGVyIiwidGl0bGUiLCJsYWJlbHMiLCJwcmN0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQyw2QkFBT0MsR0FBVjtBQUFBO0FBQUEsd0JBQVQ7O0FBR0EsSUFBTUMsUUFBUSxHQUFHRiw2QkFBT0MsR0FBVjtBQUFBO0FBQUEsMEJBQWQ7O0FBR0EsSUFBTUUsS0FBSyxHQUFHSCw2QkFBT0MsR0FBVjtBQUFBO0FBQUEsdUtBQVg7O0FBU0EsSUFBTUcsVUFBVSxHQUFHSiw2QkFBT0MsR0FBVjtBQUFBO0FBQUEsK0VBQWhCOztBQU1BLElBQU1JLEtBQUssR0FBR0wsNkJBQU9DLEdBQVY7QUFBQTtBQUFBLHlOQUNDLFVBQUFLLEtBQUs7QUFBQSxtQkFBT0EsS0FBSyxDQUFDQyxHQUFiO0FBQUEsQ0FETixDQUFYOztBQWFBLElBQU1DLEtBQUssR0FBR1IsNkJBQU9DLEdBQVY7QUFBQTtBQUFBLDBFQUFYOztBQU1BLElBQU1RLElBQUksR0FBR1QsNkJBQU9DLEdBQVY7QUFBQTtBQUFBLGlIQUNFLFVBQUFLLEtBQUs7QUFBQSxtQkFBT0EsS0FBSyxDQUFDQyxHQUFiO0FBQUEsQ0FEUCxDQUFWOztBQVdBLElBQU1HLE1BQU0sR0FBR1YsNkJBQU9DLEdBQVY7QUFBQTtBQUFBLHlJQUFaOztBQVNBLElBQU1VLEtBQUssR0FBR1gsNkJBQU9ZLElBQVY7QUFBQTtBQUFBLHNLQUFYOztJQVlNQyxVOzs7OztBQUNKLHNCQUFZUCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFBQSx3QkFDcUIsS0FBS0EsS0FEMUI7QUFBQSxVQUNGUSxLQURFLGVBQ0ZBLEtBREU7QUFBQSxVQUNLQyxNQURMLGVBQ0tBLE1BREw7QUFBQSxVQUNhQyxJQURiLGVBQ2FBLElBRGI7QUFFUCwwQkFDRSxnQ0FBQyxHQUFELHFCQUNFLGdDQUFDLFFBQUQscUJBQ0UsZ0NBQUMsS0FBRCxRQUFRRixLQUFSLENBREYsZUFFRSxnQ0FBQyxVQUFELHFCQUNFLGdDQUFDLEtBQUQ7QUFBTyxRQUFBLEdBQUcsRUFBRUU7QUFBWixRQURGLGVBRUUsZ0NBQUMsS0FBRCxxQkFDRSxnQ0FBQyxJQUFEO0FBQU0sUUFBQSxHQUFHLEVBQUU7QUFBWCxRQURGLGVBRUUsZ0NBQUMsSUFBRDtBQUFNLFFBQUEsR0FBRyxFQUFFO0FBQVgsUUFGRixlQUdFLGdDQUFDLElBQUQ7QUFBTSxRQUFBLEdBQUcsRUFBRTtBQUFYLFFBSEYsQ0FGRixDQUZGLGVBVUUsZ0NBQUMsTUFBRCxxQkFDRSxnQ0FBQyxLQUFELFFBQVFELE1BQU0sQ0FBQyxDQUFELENBQWQsQ0FERixlQUVFLGdDQUFDLEtBQUQsUUFBUUEsTUFBTSxDQUFDLENBQUQsQ0FBZCxDQUZGLGVBR0UsZ0NBQUMsS0FBRCxRQUFRQSxNQUFNLENBQUMsQ0FBRCxDQUFkLENBSEYsQ0FWRixDQURGLENBREY7QUFvQkQ7Ozs7RUEzQnNCRSxrQkFBTUMsUzs7ZUE4QmhCTCxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJhciA9IHN0eWxlZC5kaXZgXG5tYXJnaW4tdG9wOiAyMHB4O1xuYDtcbmNvbnN0IFRyaWFuZ2xlID0gc3R5bGVkLmRpdmBcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogQWRpaGF1c0RJTixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuYDtcbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Njc2Nzc7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcbmNvbnN0IEFycm93ID0gc3R5bGVkLmRpdmBcbiAgICBsZWZ0OiAke3Byb3BzID0+IGAke3Byb3BzLnBjdH0lYH07XG5ib3JkZXItdG9wLWNvbG9yOiAjMmFkYTcxO1xuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRvcDogLThweDtcbiAgICB3aWR0aDogMDtcbiAgICBib3JkZXItY29sb3I6ICMyYWRhNzEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDIwcHggMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMztcbmA7XG5jb25zdCBTdGVwcyA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuYDtcbmNvbnN0IFN0ZXAgPSBzdHlsZWQuZGl2YFxuICAgIGxlZnQ6ICR7cHJvcHMgPT4gYCR7cHJvcHMucGN0fSVgfTtcbiAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDRweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGA7XG5cbmNvbnN0IExhYmVscyA9IHN0eWxlZC5kaXZgXG5tYXJnaW4tdG9wOiAxMHB4O1xuY29sb3I6ICMwMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmA7XG5jb25zdCBMYWJlbCA9IHN0eWxlZC5zcGFuYFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IEFkaWhhdXNESU4sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuYDtcblxuXG5cbmNsYXNzIFN0YXRTbGlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge3RpdGxlLCBsYWJlbHMsIHByY3R9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEJhcj5cbiAgICAgICAgPFRyaWFuZ2xlPlxuICAgICAgICAgIDxUaXRsZT57dGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICA8QmFja2dyb3VuZD5cbiAgICAgICAgICAgIDxBcnJvdyBwY3Q9e3ByY3R9PjwvQXJyb3c+XG4gICAgICAgICAgICA8U3RlcHM+XG4gICAgICAgICAgICAgIDxTdGVwIHBjdD17MjV9PjwvU3RlcD5cbiAgICAgICAgICAgICAgPFN0ZXAgcGN0PXs1MH0+PC9TdGVwPlxuICAgICAgICAgICAgICA8U3RlcCBwY3Q9ezc1fT48L1N0ZXA+XG4gICAgICAgICAgICA8L1N0ZXBzPlxuICAgICAgICAgIDwvQmFja2dyb3VuZD5cbiAgICAgICAgICA8TGFiZWxzPlxuICAgICAgICAgICAgPExhYmVsPntsYWJlbHNbMF19PC9MYWJlbD5cbiAgICAgICAgICAgIDxMYWJlbD57bGFiZWxzWzFdfTwvTGFiZWw+XG4gICAgICAgICAgICA8TGFiZWw+e2xhYmVsc1syXX08L0xhYmVsPlxuICAgICAgICAgIDwvTGFiZWxzPiBcbiAgICAgICAgPC9UcmlhbmdsZT5cbiAgICAgIDwvQmFyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdFNsaWRlcjsiXX0=