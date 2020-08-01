"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ReviewListEntry = _interopRequireDefault(require("./ReviewListEntry.jsx"));

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

var ToggleMenu = _styledComponents["default"].ul.withConfig({
  displayName: "ToggleMenu"
})(["display:flex;width:100%;padding:0;margin:0 0 14px 0;list-style:none;"]);

var MenuItem = _styledComponents["default"].li.withConfig({
  displayName: "MenuItem"
})(["flex-basis:0;flex-grow:1;margin-bottom:14px;&:first-child{margin-left:0;}border:1px solid #767677;"]);

var Button = _styledComponents["default"].button.withConfig({
  displayName: "Button"
})(["font-size:14px;font-family:AdihausDIN,Helvetica,Arial,sans-serif;text-transform:uppercase;font-weight:700;letter-spacing:2px;cursor:pointer;padding:16px 10px;transition:color .1s cubic-bezier(.3,0,.45,1);width:100%;margin:0;background:none;border:none;&:focus{outline:none;}&:hover{border-color:#767677;color:#767677;}"]);

var FooterControls = _styledComponents["default"].div.withConfig({
  displayName: "FooterControls"
})(["display:flex;flex-direction:row;justify-content:space-between;margin:40px 0 2px 0;"]);

var LoadButton = _styledComponents["default"].button.withConfig({
  displayName: "LoadButton"
})(["font-size:13px;font-family:AdihausDIN,Helvetica,Arial,sans-serif;text-transform:uppercase;font-weight:700;letter-spacing:2px;margin-top:0;width:50%;margin-right:10px;height:50px;padding:0 21px;background-color:#fff;border:1px solid #000;color:#000;align-items:center;border-radius:0;cursor:pointer;display:inline-flex;justify-content:space-between;line-height:50px;min-height:50px;padding:0 21px;position:relative;text-align:left;text-decoration:none;transition:transform .1s cubic-bezier(.3,0,.45,1),color .1s cubic-bezier(.3,0,.45,1),border .1s cubic-bezier(.3,0,.45,1),background .1s cubic-bezier(.3,0,.45,1);white-space:nowrap;cursor:pointer;&:hover{border-color:#000;color:#767677;}&:active{transform:scale(.97);}&:focus{outline:none;}"]);

var WriteButton = _styledComponents["default"].button.withConfig({
  displayName: "WriteButton"
})(["box-sizing:border-box;display:flex;font-size:13px;font-family:AdihausDIN,Helvetica,Arial,sans-serif;text-transform:uppercase;font-weight:700;letter-spacing:2px;margin-top:0;width:50%;margin-right:10px;height:50px;padding:0 21px;background-color:black;border:none;color:white;box-shadow:3px 3px 0 0px white,3px 3px 0 1px black;vertical-align:middle;align-items:center;justify-content:space-between;position:relative;top:-2px;cursor:pointer;&:hover{color:gray;}&:active{transform:translateY(3px) translateX(3px);box-shadow:none;}&:focus{outline:none;}"]);

var StyledPathArrow = _styledComponents["default"].path.withConfig({
  displayName: "StyledPathArrow"
})(["padding:0px;margin-top:0px;stroke-linecap:square;stroke-width:2px;vertical-align:text-top;d:path(", ");"], function (props) {
  return props.d;
});

var ReviewList = /*#__PURE__*/function (_React$Component) {
  _inherits(ReviewList, _React$Component);

  var _super = _createSuper(ReviewList);

  function ReviewList(props) {
    var _this;

    _classCallCheck(this, ReviewList);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  /********  MongoDB  ********/


  _createClass(ReviewList, [{
    key: "render",
    value: function render() {
      var reviews = this.props.reviews[0].review;
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "sort"
      }, /*#__PURE__*/_react["default"].createElement(ToggleMenu, null, /*#__PURE__*/_react["default"].createElement(MenuItem, null, /*#__PURE__*/_react["default"].createElement(Button, null, "newest")), /*#__PURE__*/_react["default"].createElement(MenuItem, null, /*#__PURE__*/_react["default"].createElement(Button, null, "helpful")), /*#__PURE__*/_react["default"].createElement(MenuItem, null, /*#__PURE__*/_react["default"].createElement(Button, null, "relevant")))), reviews.map(function (review, i) {
        return /*#__PURE__*/_react["default"].createElement(_ReviewListEntry["default"], {
          key: i,
          review: review
        });
      }), /*#__PURE__*/_react["default"].createElement(FooterControls, null, /*#__PURE__*/_react["default"].createElement(LoadButton, null, /*#__PURE__*/_react["default"].createElement("span", null, "load more"), /*#__PURE__*/_react["default"].createElement("svg", {
        height: "25px",
        width: "25px"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        fill: "none",
        stroke: "currentColor",
        strokeMiterlimit: "10"
      }, /*#__PURE__*/_react["default"].createElement(StyledPathArrow, {
        d: "M17.59 7l5 5-5 5M0 12h22"
      })))), /*#__PURE__*/_react["default"].createElement(WriteButton, null, /*#__PURE__*/_react["default"].createElement("span", null, "write a review"), /*#__PURE__*/_react["default"].createElement("svg", {
        height: "25px",
        width: "25px"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        fill: "none",
        stroke: "currentColor",
        strokeMiterlimit: "10"
      }, /*#__PURE__*/_react["default"].createElement(StyledPathArrow, {
        d: "M17.59 7l5 5-5 5M0 12h22"
      }))))));
    }
    /********  PostageSQL  ********/
    // render() {
    //   console.log(this.props.reviews);
    //   return (
    //     <Fragment>
    //       <div className="sort">
    //         <ToggleMenu>
    //           <MenuItem><Button>newest</Button></MenuItem>
    //           <MenuItem><Button>helpful</Button></MenuItem>
    //           <MenuItem><Button>relevant</Button></MenuItem>
    //         </ToggleMenu>
    //       </div>
    //       {this.props.reviews.map((review, i) =>
    //         <ReviewListEntry key={i} review={review} />
    //       )}
    //       <FooterControls>
    //         <LoadButton>
    //           <span>load more</span>
    //           <svg height="25px" width="25px">
    //             <g fill="none" stroke="currentColor" strokeMiterlimit="10">
    //               <StyledPathArrow d="M17.59 7l5 5-5 5M0 12h22"></StyledPathArrow>
    //             </g>
    //           </svg>
    //         </LoadButton>
    //         <WriteButton>
    //           <span>write a review</span>
    //           <svg height="25px" width="25px">
    //             <g fill="none" stroke="currentColor" strokeMiterlimit="10">
    //               <StyledPathArrow d="M17.59 7l5 5-5 5M0 12h22"></StyledPathArrow>
    //             </g>
    //           </svg>
    //         </WriteButton>
    //       </FooterControls>
    //     </Fragment>
    //   );
    // }

  }]);

  return ReviewList;
}(_react["default"].Component);

var _default = ReviewList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzeCJdLCJuYW1lcyI6WyJUb2dnbGVNZW51Iiwic3R5bGVkIiwidWwiLCJNZW51SXRlbSIsImxpIiwiQnV0dG9uIiwiYnV0dG9uIiwiRm9vdGVyQ29udHJvbHMiLCJkaXYiLCJMb2FkQnV0dG9uIiwiV3JpdGVCdXR0b24iLCJTdHlsZWRQYXRoQXJyb3ciLCJwYXRoIiwicHJvcHMiLCJkIiwiUmV2aWV3TGlzdCIsInN0YXRlIiwicmV2aWV3cyIsInJldmlldyIsIm1hcCIsImkiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLDZCQUFPQyxFQUFWO0FBQUE7QUFBQSw0RUFBaEI7O0FBUUEsSUFBTUMsUUFBUSxHQUFHRiw2QkFBT0csRUFBVjtBQUFBO0FBQUEsMEdBQWQ7O0FBVUEsSUFBTUMsTUFBTSxHQUFHSiw2QkFBT0ssTUFBVjtBQUFBO0FBQUEsc1VBQVo7O0FBeUJBLElBQU1DLGNBQWMsR0FBR04sNkJBQU9PLEdBQVY7QUFBQTtBQUFBLDBGQUFwQjs7QUFPQSxJQUFNQyxVQUFVLEdBQUdSLDZCQUFPSyxNQUFWO0FBQUE7QUFBQSw0dUJBQWhCOztBQTJDQSxJQUFNSSxXQUFXLEdBQUdULDZCQUFPSyxNQUFWO0FBQUE7QUFBQSw2aUJBQWpCOztBQXNDQSxJQUFNSyxlQUFlLEdBQUdWLDZCQUFPVyxJQUFWO0FBQUE7QUFBQSxnSEFNVCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxDQUFWO0FBQUEsQ0FOSSxDQUFyQjs7SUFVTUMsVTs7Ozs7QUFDSixzQkFBWUYsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtHLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBS2xCO0FBRUQ7Ozs7OzZCQUNTO0FBQ1AsVUFBSUMsT0FBTyxHQUFHLEtBQUtKLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQixDQUFuQixFQUFzQkMsTUFBcEM7QUFDQSwwQkFDRSxnQ0FBQyxlQUFELHFCQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixzQkFDRSxnQ0FBQyxVQUFELHFCQUNFLGdDQUFDLFFBQUQscUJBQVUsZ0NBQUMsTUFBRCxpQkFBVixDQURGLGVBRUUsZ0NBQUMsUUFBRCxxQkFBVSxnQ0FBQyxNQUFELGtCQUFWLENBRkYsZUFHRSxnQ0FBQyxRQUFELHFCQUFVLGdDQUFDLE1BQUQsbUJBQVYsQ0FIRixDQURGLENBREYsRUFRR0QsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ0QsTUFBRCxFQUFTRSxDQUFUO0FBQUEsNEJBQ1gsZ0NBQUMsMkJBQUQ7QUFBaUIsVUFBQSxHQUFHLEVBQUVBLENBQXRCO0FBQXlCLFVBQUEsTUFBTSxFQUFFRjtBQUFqQyxVQURXO0FBQUEsT0FBWixDQVJILGVBV0UsZ0NBQUMsY0FBRCxxQkFDRSxnQ0FBQyxVQUFELHFCQUNFLDBEQURGLGVBRUU7QUFBSyxRQUFBLE1BQU0sRUFBQyxNQUFaO0FBQW1CLFFBQUEsS0FBSyxFQUFDO0FBQXpCLHNCQUNFO0FBQUcsUUFBQSxJQUFJLEVBQUMsTUFBUjtBQUFlLFFBQUEsTUFBTSxFQUFDLGNBQXRCO0FBQXFDLFFBQUEsZ0JBQWdCLEVBQUM7QUFBdEQsc0JBQ0UsZ0NBQUMsZUFBRDtBQUFpQixRQUFBLENBQUMsRUFBQztBQUFuQixRQURGLENBREYsQ0FGRixDQURGLGVBU0UsZ0NBQUMsV0FBRCxxQkFDRSwrREFERixlQUVFO0FBQUssUUFBQSxNQUFNLEVBQUMsTUFBWjtBQUFtQixRQUFBLEtBQUssRUFBQztBQUF6QixzQkFDRTtBQUFHLFFBQUEsSUFBSSxFQUFDLE1BQVI7QUFBZSxRQUFBLE1BQU0sRUFBQyxjQUF0QjtBQUFxQyxRQUFBLGdCQUFnQixFQUFDO0FBQXRELHNCQUNFLGdDQUFDLGVBQUQ7QUFBaUIsUUFBQSxDQUFDLEVBQUM7QUFBbkIsUUFERixDQURGLENBRkYsQ0FURixDQVhGLENBREY7QUFnQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0VBaEZ1Qkcsa0JBQU1DLFM7O2VBbUZoQlAsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJldmlld0xpc3RFbnRyeSBmcm9tICcuL1Jldmlld0xpc3RFbnRyeS5qc3gnO1xuXG5jb25zdCBUb2dnbGVNZW51ID0gc3R5bGVkLnVsYFxuZGlzcGxheTogZmxleDtcbndpZHRoOiAxMDAlO1xucGFkZGluZzogMDtcbm1hcmdpbjogMCAwIDE0cHggMDtcbmxpc3Qtc3R5bGU6IG5vbmU7XG5gO1xuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZC5saWBcbmZsZXgtYmFzaXM6MDtcbmZsZXgtZ3JvdzogMTtcbm1hcmdpbi1ib3R0b206IDE0cHg7XG4mOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5ib3JkZXI6IDFweCBzb2xpZCAjNzY3Njc3O1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcblxuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBZGloYXVzRElOLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTZweCAxMHB4O1xuXG4gIHRyYW5zaXRpb246IGNvbG9yIC4xcyBjdWJpYy1iZXppZXIoLjMsMCwuNDUsMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICM3Njc2Nzc7XG4gICAgY29sb3I6ICM3Njc2Nzc7XG4gIH1cbmA7XG5cbmNvbnN0IEZvb3RlckNvbnRyb2xzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDQwcHggMCAycHggMDtcbmA7XG5cbmNvbnN0IExvYWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuZm9udC1zaXplOiAxM3B4O1xuZm9udC1mYW1pbHk6IEFkaWhhdXNESU4sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuZm9udC13ZWlnaHQ6IDcwMDtcbmxldHRlci1zcGFjaW5nOiAycHg7XG4gIFxubWFyZ2luLXRvcDogMDtcbndpZHRoOiA1MCU7XG5tYXJnaW4tcmlnaHQ6IDEwcHg7XG5oZWlnaHQ6IDUwcHg7XG5wYWRkaW5nOiAwIDIxcHg7XG5cbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5ib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuY29sb3I6ICMwMDA7XG5cbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5ib3JkZXItcmFkaXVzOiAwO1xuY3Vyc29yOiBwb2ludGVyO1xuZGlzcGxheTogaW5saW5lLWZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5saW5lLWhlaWdodDogNTBweDtcbm1pbi1oZWlnaHQ6IDUwcHg7XG5wYWRkaW5nOiAwIDIxcHg7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG50ZXh0LWFsaWduOiBsZWZ0O1xudGV4dC1kZWNvcmF0aW9uOiBub25lO1xudHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBjdWJpYy1iZXppZXIoLjMsMCwuNDUsMSksY29sb3IgLjFzIGN1YmljLWJlemllciguMywwLC40NSwxKSxib3JkZXIgLjFzIGN1YmljLWJlemllciguMywwLC40NSwxKSxiYWNrZ3JvdW5kIC4xcyBjdWJpYy1iZXppZXIoLjMsMCwuNDUsMSk7XG53aGl0ZS1zcGFjZTogbm93cmFwO1xuY3Vyc29yOiBwb2ludGVyO1xuJjpob3ZlciB7XG5ib3JkZXItY29sb3I6ICMwMDA7XG5jb2xvcjogIzc2NzY3Nztcbn1cbiY6YWN0aXZlIHtcbnRyYW5zZm9ybTogc2NhbGUoLjk3KTtcbn1cbiY6Zm9jdXMge1xub3V0bGluZTogbm9uZTtcbn1cbmA7XG5cbmNvbnN0IFdyaXRlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5kaXNwbGF5OiBmbGV4O1xuZm9udC1zaXplOiAxM3B4O1xuZm9udC1mYW1pbHk6IEFkaWhhdXNESU4sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuZm9udC13ZWlnaHQ6IDcwMDtcbmxldHRlci1zcGFjaW5nOiAycHg7XG5cbm1hcmdpbi10b3A6IDA7XG53aWR0aDogNTAlO1xubWFyZ2luLXJpZ2h0OiAxMHB4O1xuaGVpZ2h0OiA1MHB4O1xucGFkZGluZzogMCAyMXB4O1xuXG5iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbmJvcmRlcjogbm9uZTtcbmNvbG9yOiB3aGl0ZTtcbmJveC1zaGFkb3c6IDNweCAzcHggMCAwcHggd2hpdGUsIDNweCAzcHggMCAxcHggYmxhY2s7XG5cbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xucG9zaXRpb246IHJlbGF0aXZlO1xudG9wOiAtMnB4O1xuY3Vyc29yOiBwb2ludGVyO1xuJjpob3ZlciB7XG4gIGNvbG9yOiBncmF5O1xufVxuJjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KSB0cmFuc2xhdGVYKDNweCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4mOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmA7XG5cbmNvbnN0IFN0eWxlZFBhdGhBcnJvdyA9IHN0eWxlZC5wYXRoYFxuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgc3Ryb2tlLWxpbmVjYXA6IHNxdWFyZTtcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgZDogcGF0aCgke3Byb3BzID0+IHByb3BzLmR9KTtcbmA7XG5cblxuY2xhc3MgUmV2aWV3TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBcbiAgICB9O1xuICB9XG5cbiAgLyoqKioqKioqICBNb25nb0RCICAqKioqKioqKi9cbiAgcmVuZGVyKCkge1xuICAgIHZhciByZXZpZXdzID0gdGhpcy5wcm9wcy5yZXZpZXdzWzBdLnJldmlldztcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRcIj5cbiAgICAgICAgICA8VG9nZ2xlTWVudT5cbiAgICAgICAgICAgIDxNZW51SXRlbT48QnV0dG9uPm5ld2VzdDwvQnV0dG9uPjwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0+PEJ1dHRvbj5oZWxwZnVsPC9CdXR0b24+PC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbT48QnV0dG9uPnJlbGV2YW50PC9CdXR0b24+PC9NZW51SXRlbT5cbiAgICAgICAgICA8L1RvZ2dsZU1lbnU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cmV2aWV3cy5tYXAoKHJldmlldywgaSkgPT4gXG4gICAgICAgICAgPFJldmlld0xpc3RFbnRyeSBrZXk9e2l9IHJldmlldz17cmV2aWV3fS8+XG4gICAgICAgICl9XG4gICAgICAgIDxGb290ZXJDb250cm9scz5cbiAgICAgICAgICA8TG9hZEJ1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuPmxvYWQgbW9yZTwvc3Bhbj5cbiAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMjVweFwiIHdpZHRoPVwiMjVweFwiPlxuICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRQYXRoQXJyb3cgZD1cIk0xNy41OSA3bDUgNS01IDVNMCAxMmgyMlwiPjwvU3R5bGVkUGF0aEFycm93PlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0xvYWRCdXR0b24+XG4gICAgICAgICAgPFdyaXRlQnV0dG9uPlxuICAgICAgICAgICAgPHNwYW4+d3JpdGUgYSByZXZpZXc8L3NwYW4+XG4gICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjI1cHhcIiB3aWR0aD1cIjI1cHhcIj5cbiAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIj5cbiAgICAgICAgICAgICAgICA8U3R5bGVkUGF0aEFycm93IGQ9XCJNMTcuNTkgN2w1IDUtNSA1TTAgMTJoMjJcIj48L1N0eWxlZFBhdGhBcnJvdz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9Xcml0ZUJ1dHRvbj5cbiAgICAgICAgPC9Gb290ZXJDb250cm9scz5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIC8qKioqKioqKiAgUG9zdGFnZVNRTCAgKioqKioqKiovXG4gIC8vIHJlbmRlcigpIHtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnJldmlld3MpO1xuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICA8RnJhZ21lbnQ+XG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydFwiPlxuICAvLyAgICAgICAgIDxUb2dnbGVNZW51PlxuICAvLyAgICAgICAgICAgPE1lbnVJdGVtPjxCdXR0b24+bmV3ZXN0PC9CdXR0b24+PC9NZW51SXRlbT5cbiAgLy8gICAgICAgICAgIDxNZW51SXRlbT48QnV0dG9uPmhlbHBmdWw8L0J1dHRvbj48L01lbnVJdGVtPlxuICAvLyAgICAgICAgICAgPE1lbnVJdGVtPjxCdXR0b24+cmVsZXZhbnQ8L0J1dHRvbj48L01lbnVJdGVtPlxuICAvLyAgICAgICAgIDwvVG9nZ2xlTWVudT5cbiAgLy8gICAgICAgPC9kaXY+XG4gIC8vICAgICAgIHt0aGlzLnByb3BzLnJldmlld3MubWFwKChyZXZpZXcsIGkpID0+XG4gIC8vICAgICAgICAgPFJldmlld0xpc3RFbnRyeSBrZXk9e2l9IHJldmlldz17cmV2aWV3fSAvPlxuICAvLyAgICAgICApfVxuICAvLyAgICAgICA8Rm9vdGVyQ29udHJvbHM+XG4gIC8vICAgICAgICAgPExvYWRCdXR0b24+XG4gIC8vICAgICAgICAgICA8c3Bhbj5sb2FkIG1vcmU8L3NwYW4+XG4gIC8vICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjI1cHhcIiB3aWR0aD1cIjI1cHhcIj5cbiAgLy8gICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIj5cbiAgLy8gICAgICAgICAgICAgICA8U3R5bGVkUGF0aEFycm93IGQ9XCJNMTcuNTkgN2w1IDUtNSA1TTAgMTJoMjJcIj48L1N0eWxlZFBhdGhBcnJvdz5cbiAgLy8gICAgICAgICAgICAgPC9nPlxuICAvLyAgICAgICAgICAgPC9zdmc+XG4gIC8vICAgICAgICAgPC9Mb2FkQnV0dG9uPlxuICAvLyAgICAgICAgIDxXcml0ZUJ1dHRvbj5cbiAgLy8gICAgICAgICAgIDxzcGFuPndyaXRlIGEgcmV2aWV3PC9zcGFuPlxuICAvLyAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIyNXB4XCIgd2lkdGg9XCIyNXB4XCI+XG4gIC8vICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCI+XG4gIC8vICAgICAgICAgICAgICAgPFN0eWxlZFBhdGhBcnJvdyBkPVwiTTE3LjU5IDdsNSA1LTUgNU0wIDEyaDIyXCI+PC9TdHlsZWRQYXRoQXJyb3c+XG4gIC8vICAgICAgICAgICAgIDwvZz5cbiAgLy8gICAgICAgICAgIDwvc3ZnPlxuICAvLyAgICAgICAgIDwvV3JpdGVCdXR0b24+XG4gIC8vICAgICAgIDwvRm9vdGVyQ29udHJvbHM+XG4gIC8vICAgICA8L0ZyYWdtZW50PlxuICAvLyAgICk7XG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3TGlzdDsiXX0=