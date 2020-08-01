"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FooterContent = _styledComponents["default"].div.withConfig({
  displayName: "FooterContent"
})(["color:hsla(0,0%,100%,.6);background-color:#363738;margin:100px 0px 0 0px;"]);

var Inner = _styledComponents["default"].div.withConfig({
  displayName: "Inner"
})(["display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;margin:0 49px;"]);

var CountrySelector = _styledComponents["default"].div.withConfig({
  displayName: "CountrySelector"
})(["float:left;width:210px;padding:21px 0 12px 10px;line-height:12px;display:flex;justify-content:center;"]);

var Anchor = _styledComponents["default"].a.withConfig({
  displayName: "Anchor"
})(["display:flex;color:#c8cbcc;font-size:12px;padding-left:20px;cursor:pointer;text-decoration:none;border-radius:0;box-shadow:none;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);"]);

var CountryImage = _styledComponents["default"].img.withConfig({
  displayName: "CountryImage"
})(["width:15px;height:11px;margin-right:8px;"]);

var Links = _styledComponents["default"].div.withConfig({
  displayName: "Links"
})(["display:flex;justify-content:flex-end;flex-direction:row;flex-wrap:nowrap;"]);

var List = _styledComponents["default"].ol.withConfig({
  displayName: "List"
})(["padding:13px 0 12px;margin:0;text-align:right;list-style:none;margin-block-start:0.5em;margin-block-end:0.5em;margin-inline-start:0px;margin-inline-end:0px;padding-inline-start:40px;display:flex;justify-content:flex-end;flex-direction:row;flex-wrap:nowrap;"]);

var ListItem = _styledComponents["default"].li.withConfig({
  displayName: "ListItem"
})(["margin:0;display:inline;padding:0;color:#c8cbcc;"]);

var Span = _styledComponents["default"].span.withConfig({
  displayName: "Span"
})(["padding-right:21px;position:relative;margin:0 8px;padding:0;display:inline;"]);

var Footer = function Footer(props) {
  return /*#__PURE__*/_react["default"].createElement(FooterContent, null, /*#__PURE__*/_react["default"].createElement(Inner, null, /*#__PURE__*/_react["default"].createElement(CountrySelector, null, /*#__PURE__*/_react["default"].createElement(Anchor, null, /*#__PURE__*/_react["default"].createElement(CountryImage, {
    src: "https://adl-foundation.adidas.com/prod/v31.0.0/assets/flags/us.svg",
    alt: "us flag",
    title: "us flag",
    "aria-label": "us flag"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "USA"))), /*#__PURE__*/_react["default"].createElement(Links, null, /*#__PURE__*/_react["default"].createElement(List, null, /*#__PURE__*/_react["default"].createElement(ListItem, null, /*#__PURE__*/_react["default"].createElement(Anchor, null, "Privacy Policy")), /*#__PURE__*/_react["default"].createElement(ListItem, null, /*#__PURE__*/_react["default"].createElement(Span, null, "|")), /*#__PURE__*/_react["default"].createElement(ListItem, null, /*#__PURE__*/_react["default"].createElement(Anchor, null, "Terms and Conditions")), /*#__PURE__*/_react["default"].createElement(ListItem, null, /*#__PURE__*/_react["default"].createElement(Span, null, "|")), /*#__PURE__*/_react["default"].createElement(ListItem, null, /*#__PURE__*/_react["default"].createElement(Anchor, null, "\xA9 2020 Shoe Webstore Inc."))))));
};

var _default = Footer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Gb290ZXIuanN4Il0sIm5hbWVzIjpbIkZvb3RlckNvbnRlbnQiLCJzdHlsZWQiLCJkaXYiLCJJbm5lciIsIkNvdW50cnlTZWxlY3RvciIsIkFuY2hvciIsImEiLCJDb3VudHJ5SW1hZ2UiLCJpbWciLCJMaW5rcyIsIkxpc3QiLCJvbCIsIkxpc3RJdGVtIiwibGkiLCJTcGFuIiwic3BhbiIsIkZvb3RlciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWO0FBQUE7QUFBQSxpRkFBbkI7O0FBUUEsSUFBTUMsS0FBSyxHQUFHRiw2QkFBT0MsR0FBVjtBQUFBO0FBQUEsdUdBQVg7O0FBU0EsSUFBTUUsZUFBZSxHQUFHSCw2QkFBT0MsR0FBVjtBQUFBO0FBQUEsNkdBQXJCOztBQVNBLElBQU1HLE1BQU0sR0FBR0osNkJBQU9LLENBQVY7QUFBQTtBQUFBLCtMQUFaOztBQWFBLElBQU1DLFlBQVksR0FBR04sNkJBQU9PLEdBQVY7QUFBQTtBQUFBLGdEQUFsQjs7QUFNQSxJQUFNQyxLQUFLLEdBQUdSLDZCQUFPQyxHQUFWO0FBQUE7QUFBQSxrRkFBWDs7QUFPQSxJQUFNUSxJQUFJLEdBQUdULDZCQUFPVSxFQUFWO0FBQUE7QUFBQSx3UUFBVjs7QUFnQkEsSUFBTUMsUUFBUSxHQUFHWCw2QkFBT1ksRUFBVjtBQUFBO0FBQUEsd0RBQWQ7O0FBT0EsSUFBTUMsSUFBSSxHQUFHYiw2QkFBT2MsSUFBVjtBQUFBO0FBQUEsbUZBQVY7O0FBV0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLHNCQUNiLGdDQUFDLGFBQUQscUJBQ0UsZ0NBQUMsS0FBRCxxQkFDRSxnQ0FBQyxlQUFELHFCQUNFLGdDQUFDLE1BQUQscUJBQ0UsZ0NBQUMsWUFBRDtBQUFjLElBQUEsR0FBRyxFQUFDLG9FQUFsQjtBQUF1RixJQUFBLEdBQUcsRUFBQyxTQUEzRjtBQUFxRyxJQUFBLEtBQUssRUFBQyxTQUEzRztBQUFxSCxrQkFBVztBQUFoSSxJQURGLGVBRUUsb0RBRkYsQ0FERixDQURGLGVBT0UsZ0NBQUMsS0FBRCxxQkFDRSxnQ0FBQyxJQUFELHFCQUNFLGdDQUFDLFFBQUQscUJBQ0UsZ0NBQUMsTUFBRCx5QkFERixDQURGLGVBTUUsZ0NBQUMsUUFBRCxxQkFDRSxnQ0FBQyxJQUFELFlBREYsQ0FORixlQVNFLGdDQUFDLFFBQUQscUJBQ0UsZ0NBQUMsTUFBRCwrQkFERixDQVRGLGVBY0UsZ0NBQUMsUUFBRCxxQkFDRSxnQ0FBQyxJQUFELFlBREYsQ0FkRixlQWlCRSxnQ0FBQyxRQUFELHFCQUNFLGdDQUFDLE1BQUQsdUNBREYsQ0FqQkYsQ0FERixDQVBGLENBREYsQ0FEYTtBQUFBLENBQWY7O2VBb0NlRCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBGb290ZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICBjb2xvcjogaHNsYSgwLDAlLDEwMCUsLjYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM3Mzg7XG4gICAgbWFyZ2luOiAxMDBweCAwcHggMCAwcHg7XG4gICAgLyogd2lkdGg6IDEwMTBweDsgKi9cblxuYDtcblxuY29uc3QgSW5uZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIDQ5cHg7XG5gO1xuXG5cbmNvbnN0IENvdW50cnlTZWxlY3RvciA9IHN0eWxlZC5kaXZgXG5mbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjEwcHg7XG4gICAgcGFkZGluZzogMjFweCAwIDEycHggMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgQW5jaG9yID0gc3R5bGVkLmFgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogI2M4Y2JjYztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuYDtcblxuY29uc3QgQ291bnRyeUltYWdlID0gc3R5bGVkLmltZ2BcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG5gO1xuXG5jb25zdCBMaW5rcyA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmZsZXgtZGlyZWN0aW9uOiByb3c7XG5mbGV4LXdyYXA6IG5vd3JhcDtcbmA7XG5cbmNvbnN0IExpc3QgPSBzdHlsZWQub2xgXG4gICAgcGFkZGluZzogMTNweCAwIDEycHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xubGlzdC1zdHlsZTogbm9uZTtcbm1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC41ZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5mbGV4LWRpcmVjdGlvbjogcm93O1xuZmxleC13cmFwOiBub3dyYXA7XG5gO1xuXG5jb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICNjOGNiY2M7XG5gO1xuXG5jb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXG5wYWRkaW5nLXJpZ2h0OiAyMXB4O1xucG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCA4cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG5gO1xuXG5cblxuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IChcbiAgPEZvb3RlckNvbnRlbnQ+XG4gICAgPElubmVyPlxuICAgICAgPENvdW50cnlTZWxlY3Rvcj5cbiAgICAgICAgPEFuY2hvcj5cbiAgICAgICAgICA8Q291bnRyeUltYWdlIHNyYz1cImh0dHBzOi8vYWRsLWZvdW5kYXRpb24uYWRpZGFzLmNvbS9wcm9kL3YzMS4wLjAvYXNzZXRzL2ZsYWdzL3VzLnN2Z1wiIGFsdD1cInVzIGZsYWdcIiB0aXRsZT1cInVzIGZsYWdcIiBhcmlhLWxhYmVsPVwidXMgZmxhZ1wiIC8+XG4gICAgICAgICAgPHNwYW4+VVNBPC9zcGFuPlxuICAgICAgICA8L0FuY2hvcj5cbiAgICAgIDwvQ291bnRyeVNlbGVjdG9yPlxuICAgICAgPExpbmtzPlxuICAgICAgICA8TGlzdD5cbiAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICA8QW5jaG9yPlxuICAgICAgICAgICAgICBQcml2YWN5IFBvbGljeVxuICAgICAgICAgICAgPC9BbmNob3I+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICA8U3BhbiA+fDwvU3Bhbj5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgIDxBbmNob3I+XG4gICAgICAgICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zXG4gICAgICAgICAgICA8L0FuY2hvcj5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgIDxTcGFuID58PC9TcGFuPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgPEFuY2hvcj7CqSAyMDIwIFNob2UgV2Vic3RvcmUgSW5jLjwvQW5jaG9yPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDwvTGlzdD5cbiAgICAgIDwvTGlua3M+XG4gICAgPC9Jbm5lcj5cbiAgPC9Gb290ZXJDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ==