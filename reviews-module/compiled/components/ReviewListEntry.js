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

var CollectionItem = _styledComponents["default"].div.withConfig({
  displayName: "CollectionItem"
})(["border-bottom:1px solid #000;position:relative;padding-bottom:40px;margin-top:40px;"]);

var Stars = _styledComponents["default"].div.withConfig({
  displayName: "Stars"
})(["color:#767677;display:inline-flex;"]);

var Time = _styledComponents["default"].div.withConfig({
  displayName: "Time"
})(["position:absolute;right:0;top:0;color:#767677;font-size:14px;line-height:20px;margin:0 0 14px 0;"]);

var Title = _styledComponents["default"].header.withConfig({
  displayName: "Title"
})(["margin:20px 0 0 0;padding:0;font-size:18px;line-height:16px;font-family:AdineuePRO,Helvetica,Arial,sans-serif;font-style:normal;font-weight:600;text-transform:uppercase;"]);

var Text = _styledComponents["default"].div.withConfig({
  displayName: "Text"
})(["margin-top:10px 0 0 0;"]);

var Recommend = _styledComponents["default"].span.withConfig({
  displayName: "Recommend"
})(["margin-top:20px 0 0 0;"]);

var DontRecommend = _styledComponents["default"].span.withConfig({
  displayName: "DontRecommend"
})(["", " margin:20px 0 0 0;"], ''
/* display: none; */
);

var User = _styledComponents["default"].div.withConfig({
  displayName: "User"
})(["text-transform:uppercase;font-family:AdihausDIN,Helvetica,Arial,sans-serif;font-weight:700;font-size:14px;line-height:20px;margin:10px 0 14px 0;"]);

var ReviewListEntry = /*#__PURE__*/function (_React$Component) {
  _inherits(ReviewListEntry, _React$Component);

  var _super = _createSuper(ReviewListEntry);

  function ReviewListEntry(props) {
    _classCallCheck(this, ReviewListEntry);

    return _super.call(this, props);
  }
  /********  MongoDB  ********/


  _createClass(ReviewListEntry, [{
    key: "render",
    value: function render() {
      var review = this.props.review;
      var date_placeholder = review.created_at.split('-');
      var created_date = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][Number(date_placeholder[1])] + ' ' + Number(date_placeholder[2].slice(0, 2)).toString() + ', ' + date_placeholder[0]; // console.log('review', review);
      // console.log('nickname', review.user_nickname);

      if (review.rating_overall === 1) {
        var star = '★☆☆☆☆';
      } else if (review.rating_overall === 2) {
        var star = '★★☆☆☆';
      } else if (review.rating_overall === 3) {
        var star = '★★★☆☆';
      } else if (review.rating_overall === 4) {
        var star = '★★★★☆';
      } else {
        var star = '★★★★★';
      }

      ;
      return /*#__PURE__*/_react["default"].createElement(CollectionItem, null, /*#__PURE__*/_react["default"].createElement(Stars, null, star), /*#__PURE__*/_react["default"].createElement(Time, null, created_date), /*#__PURE__*/_react["default"].createElement(Title, null, review.title), /*#__PURE__*/_react["default"].createElement(Text, null, review.text), review.doesRecommended ? /*#__PURE__*/_react["default"].createElement(Recommend, null, "\u2713 I recommend this product") : /*#__PURE__*/_react["default"].createElement(DontRecommend, null, "x I do not recommend this product"), /*#__PURE__*/_react["default"].createElement(User, null, review.user.nickname), /*#__PURE__*/_react["default"].createElement("div", null, "Was this review helpful? Yes (", review.isHelpful, ") No (", review.isNotHelpful, ")"));
    }
    /********  PostageSQL  ********/
    // render() {
    //   // console.log(this.props.review);
    //   var review = this.props.review;
    //   var date_placeholder = review.created_at.split(' ').slice(1, 4);
    //   var created_date = date_placeholder.slice(0, 2).join(' ').concat(', ', date_placeholder[2]);
    //   // console.log('review', review);
    //   // console.log('nickname', review.user_nickname);
    //   if (review.rating_overall === '1') {
    //     var star = '★';
    //   } else if (review.rating_overall === '2') {
    //     var star = '★★';
    //   } else if (review.rating_overall === '3') {
    //     var star = '★★★'
    //   } else if (review.rating_overall === '4') {
    //     var star = '★★★★';
    //   } else {
    //     var star = '★★★★★';
    //   };
    //   return (
    //     <CollectionItem>
    //       <Stars>{star}</Stars>
    //       <Time>{created_date}</Time>
    //       <Title>{review.title}</Title>
    //       <Text>{review.text}</Text>
    //       {
    //         review.doesrecommended
    //           ?
    //           <Recommend>✓ I recommend this product</Recommend>
    //           :
    //           <DontRecommend>x I do not recommend this product</DontRecommend>
    //       }
    //       <User>{review.nickname}</User>
    //       <div>Was this review helpful? Yes ({review.ishelpful}) No ({review.isnothelpful})</div>
    //     </CollectionItem>
    //   )
    // }

  }]);

  return ReviewListEntry;
}(_react["default"].Component); // const ReviewListEntry = (props) => (
// );


var _default = ReviewListEntry;
/*
<Fragment>
  <div>★★★★☆ April 30, 2020</div>
  <div>Title: Awesome shoe!</div>
  <div>Text: Comfortable, it has great style</div>
  <div>✓I recommend this product</div>
  <div>user: vanesa4</div>
  <div>Was this review helpful? Yes (0) No (0)</div>
  <div>---------------------------------------</div>
</Fragment>
*/

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXdMaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbIkNvbGxlY3Rpb25JdGVtIiwic3R5bGVkIiwiZGl2IiwiU3RhcnMiLCJUaW1lIiwiVGl0bGUiLCJoZWFkZXIiLCJUZXh0IiwiUmVjb21tZW5kIiwic3BhbiIsIkRvbnRSZWNvbW1lbmQiLCJVc2VyIiwiUmV2aWV3TGlzdEVudHJ5IiwicHJvcHMiLCJyZXZpZXciLCJkYXRlX3BsYWNlaG9sZGVyIiwiY3JlYXRlZF9hdCIsInNwbGl0IiwiY3JlYXRlZF9kYXRlIiwiTnVtYmVyIiwic2xpY2UiLCJ0b1N0cmluZyIsInJhdGluZ19vdmVyYWxsIiwic3RhciIsInRpdGxlIiwidGV4dCIsImRvZXNSZWNvbW1lbmRlZCIsInVzZXIiLCJuaWNrbmFtZSIsImlzSGVscGZ1bCIsImlzTm90SGVscGZ1bCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsNkJBQU9DLEdBQVY7QUFBQTtBQUFBLDJGQUFwQjs7QUFLQSxJQUFNQyxLQUFLLEdBQUdGLDZCQUFPQyxHQUFWO0FBQUE7QUFBQSwwQ0FBWDs7QUFJQSxJQUFNRSxJQUFJLEdBQUdILDZCQUFPQyxHQUFWO0FBQUE7QUFBQSx3R0FBVjs7QUFTQSxJQUFNRyxLQUFLLEdBQUdKLDZCQUFPSyxNQUFWO0FBQUE7QUFBQSxpTEFBWDs7QUFVQSxJQUFNQyxJQUFJLEdBQUdOLDZCQUFPQyxHQUFWO0FBQUE7QUFBQSw4QkFBVjs7QUFHQSxJQUFNTSxTQUFTLEdBQUdQLDZCQUFPUSxJQUFWO0FBQUE7QUFBQSw4QkFBZjs7QUFFQSxJQUFNQyxhQUFhLEdBQUdULDZCQUFPUSxJQUFWO0FBQUE7QUFBQSxnQ0FDakI7QUFBRztBQURjLENBQW5COztBQUlBLElBQU1FLElBQUksR0FBR1YsNkJBQU9DLEdBQVY7QUFBQTtBQUFBLHdKQUFWOztJQVNNVSxlOzs7OztBQUNKLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1hBLEtBRFc7QUFFbEI7QUFFRDs7Ozs7NkJBQ1M7QUFDUCxVQUFJQyxNQUFNLEdBQUcsS0FBS0QsS0FBTCxDQUFXQyxNQUF4QjtBQUNBLFVBQUlDLGdCQUFnQixHQUFHRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0JDLEtBQWxCLENBQXdCLEdBQXhCLENBQXZCO0FBQ0EsVUFBSUMsWUFBWSxHQUFHLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsT0FBeEIsRUFBaUMsT0FBakMsRUFBMEMsS0FBMUMsRUFBaUQsTUFBakQsRUFBeUQsTUFBekQsRUFBaUUsUUFBakUsRUFBMkUsV0FBM0UsRUFBd0YsU0FBeEYsRUFBbUcsVUFBbkcsRUFBK0csVUFBL0csRUFBMkhDLE1BQU0sQ0FBQ0osZ0JBQWdCLENBQUMsQ0FBRCxDQUFqQixDQUFqSSxJQUEwSixHQUExSixHQUFpS0ksTUFBTSxDQUFDSixnQkFBZ0IsQ0FBQyxDQUFELENBQWhCLENBQW9CSyxLQUFwQixDQUEwQixDQUExQixFQUE2QixDQUE3QixDQUFELENBQVAsQ0FBMENDLFFBQTFDLEVBQWhLLEdBQXVOLElBQXZOLEdBQThOTixnQkFBZ0IsQ0FBQyxDQUFELENBQWpRLENBSE8sQ0FJUDtBQUNBOztBQUNBLFVBQUlELE1BQU0sQ0FBQ1EsY0FBUCxLQUEwQixDQUE5QixFQUFpQztBQUMvQixZQUFJQyxJQUFJLEdBQUcsT0FBWDtBQUNELE9BRkQsTUFFTyxJQUFJVCxNQUFNLENBQUNRLGNBQVAsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDdEMsWUFBSUMsSUFBSSxHQUFHLE9BQVg7QUFDRCxPQUZNLE1BRUEsSUFBSVQsTUFBTSxDQUFDUSxjQUFQLEtBQTBCLENBQTlCLEVBQWlDO0FBQ3RDLFlBQUlDLElBQUksR0FBRyxPQUFYO0FBQ0QsT0FGTSxNQUVBLElBQUlULE1BQU0sQ0FBQ1EsY0FBUCxLQUEwQixDQUE5QixFQUFpQztBQUN0QyxZQUFJQyxJQUFJLEdBQUcsT0FBWDtBQUNELE9BRk0sTUFFQTtBQUNMLFlBQUlBLElBQUksR0FBRyxPQUFYO0FBQ0Q7O0FBQUE7QUFDRCwwQkFDRSxnQ0FBQyxjQUFELHFCQUNFLGdDQUFDLEtBQUQsUUFBUUEsSUFBUixDQURGLGVBRUUsZ0NBQUMsSUFBRCxRQUFPTCxZQUFQLENBRkYsZUFHRSxnQ0FBQyxLQUFELFFBQVFKLE1BQU0sQ0FBQ1UsS0FBZixDQUhGLGVBSUUsZ0NBQUMsSUFBRCxRQUFPVixNQUFNLENBQUNXLElBQWQsQ0FKRixFQU1JWCxNQUFNLENBQUNZLGVBQVAsZ0JBRUUsZ0NBQUMsU0FBRCwwQ0FGRixnQkFJRSxnQ0FBQyxhQUFELDRDQVZOLGVBWUUsZ0NBQUMsSUFBRCxRQUFPWixNQUFNLENBQUNhLElBQVAsQ0FBWUMsUUFBbkIsQ0FaRixlQWFFLCtFQUFvQ2QsTUFBTSxDQUFDZSxTQUEzQyxZQUE0RGYsTUFBTSxDQUFDZ0IsWUFBbkUsTUFiRixDQURGO0FBaUJEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0VBOUU0QkMsa0JBQU1DLFMsR0FpRnBDO0FBRUE7OztlQUVlcEIsZTtBQUVmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvbGxlY3Rpb25JdGVtID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtgO1xuY29uc3QgU3RhcnMgPSBzdHlsZWQuZGl2YFxuY29sb3I6ICM3Njc2Nzc7XG5kaXNwbGF5OiBpbmxpbmUtZmxleDtcbmA7XG5jb25zdCBUaW1lID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGNvbG9yOiAjNzY3Njc3O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDAgMCAxNHB4IDA7XG4gICAgYDtcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmhlYWRlcmBcbm1hcmdpbjogMjBweCAwIDAgMDtcbnBhZGRpbmc6IDA7XG5mb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IEFkaW5ldWVQUk8sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBgO1xuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG5tYXJnaW4tdG9wOiAxMHB4IDAgMCAwO1xuYDtcbmNvbnN0IFJlY29tbWVuZCA9IHN0eWxlZC5zcGFuYFxubWFyZ2luLXRvcDogMjBweCAwIDAgMDtgO1xuY29uc3QgRG9udFJlY29tbWVuZCA9IHN0eWxlZC5zcGFuYFxuJHsnJyAvKiBkaXNwbGF5OiBub25lOyAqL31cbm1hcmdpbjogMjBweCAwIDAgMDtcbmA7XG5jb25zdCBVc2VyID0gc3R5bGVkLmRpdmBcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtZmFtaWx5OiBBZGloYXVzRElOLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogMTBweCAwIDE0cHggMDtcbmA7XG5cbmNsYXNzIFJldmlld0xpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgLyoqKioqKioqICBNb25nb0RCICAqKioqKioqKi9cbiAgcmVuZGVyKCkge1xuICAgIHZhciByZXZpZXcgPSB0aGlzLnByb3BzLnJldmlldztcbiAgICB2YXIgZGF0ZV9wbGFjZWhvbGRlciA9IHJldmlldy5jcmVhdGVkX2F0LnNwbGl0KCctJyk7XG4gICAgdmFyIGNyZWF0ZWRfZGF0ZSA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddW051bWJlcihkYXRlX3BsYWNlaG9sZGVyWzFdKV0gKyAnICcgKyAoTnVtYmVyKGRhdGVfcGxhY2Vob2xkZXJbMl0uc2xpY2UoMCwgMikpKS50b1N0cmluZygpICsgJywgJyArIGRhdGVfcGxhY2Vob2xkZXJbMF07XG4gICAgLy8gY29uc29sZS5sb2coJ3JldmlldycsIHJldmlldyk7XG4gICAgLy8gY29uc29sZS5sb2coJ25pY2tuYW1lJywgcmV2aWV3LnVzZXJfbmlja25hbWUpO1xuICAgIGlmIChyZXZpZXcucmF0aW5nX292ZXJhbGwgPT09IDEpIHtcbiAgICAgIHZhciBzdGFyID0gJ+KYheKYhuKYhuKYhuKYhic7XG4gICAgfSBlbHNlIGlmIChyZXZpZXcucmF0aW5nX292ZXJhbGwgPT09IDIpIHtcbiAgICAgIHZhciBzdGFyID0gJ+KYheKYheKYhuKYhuKYhic7XG4gICAgfSBlbHNlIGlmIChyZXZpZXcucmF0aW5nX292ZXJhbGwgPT09IDMpIHtcbiAgICAgIHZhciBzdGFyID0gJ+KYheKYheKYheKYhuKYhic7XG4gICAgfSBlbHNlIGlmIChyZXZpZXcucmF0aW5nX292ZXJhbGwgPT09IDQpIHtcbiAgICAgIHZhciBzdGFyID0gJ+KYheKYheKYheKYheKYhic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFyID0gJ+KYheKYheKYheKYheKYhSc7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbGxlY3Rpb25JdGVtPlxuICAgICAgICA8U3RhcnM+e3N0YXJ9PC9TdGFycz5cbiAgICAgICAgPFRpbWU+e2NyZWF0ZWRfZGF0ZX08L1RpbWU+XG4gICAgICAgIDxUaXRsZT57cmV2aWV3LnRpdGxlfTwvVGl0bGU+XG4gICAgICAgIDxUZXh0PntyZXZpZXcudGV4dH08L1RleHQ+XG4gICAgICAgIHtcbiAgICAgICAgICByZXZpZXcuZG9lc1JlY29tbWVuZGVkXG4gICAgICAgICAgICA/XG4gICAgICAgICAgICA8UmVjb21tZW5kPuKckyBJIHJlY29tbWVuZCB0aGlzIHByb2R1Y3Q8L1JlY29tbWVuZD5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIDxEb250UmVjb21tZW5kPnggSSBkbyBub3QgcmVjb21tZW5kIHRoaXMgcHJvZHVjdDwvRG9udFJlY29tbWVuZD5cbiAgICAgICAgfVxuICAgICAgICA8VXNlcj57cmV2aWV3LnVzZXIubmlja25hbWV9PC9Vc2VyPlxuICAgICAgICA8ZGl2PldhcyB0aGlzIHJldmlldyBoZWxwZnVsPyBZZXMgKHtyZXZpZXcuaXNIZWxwZnVsfSkgTm8gKHtyZXZpZXcuaXNOb3RIZWxwZnVsfSk8L2Rpdj5cbiAgICAgIDwvQ29sbGVjdGlvbkl0ZW0+XG4gICAgKVxuICB9XG5cbiAgLyoqKioqKioqICBQb3N0YWdlU1FMICAqKioqKioqKi9cbiAgLy8gcmVuZGVyKCkge1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMucmV2aWV3KTtcbiAgLy8gICB2YXIgcmV2aWV3ID0gdGhpcy5wcm9wcy5yZXZpZXc7XG4gIC8vICAgdmFyIGRhdGVfcGxhY2Vob2xkZXIgPSByZXZpZXcuY3JlYXRlZF9hdC5zcGxpdCgnICcpLnNsaWNlKDEsIDQpO1xuICAvLyAgIHZhciBjcmVhdGVkX2RhdGUgPSBkYXRlX3BsYWNlaG9sZGVyLnNsaWNlKDAsIDIpLmpvaW4oJyAnKS5jb25jYXQoJywgJywgZGF0ZV9wbGFjZWhvbGRlclsyXSk7XG4gIC8vICAgLy8gY29uc29sZS5sb2coJ3JldmlldycsIHJldmlldyk7XG4gIC8vICAgLy8gY29uc29sZS5sb2coJ25pY2tuYW1lJywgcmV2aWV3LnVzZXJfbmlja25hbWUpO1xuICAvLyAgIGlmIChyZXZpZXcucmF0aW5nX292ZXJhbGwgPT09ICcxJykge1xuICAvLyAgICAgdmFyIHN0YXIgPSAn4piFJztcbiAgLy8gICB9IGVsc2UgaWYgKHJldmlldy5yYXRpbmdfb3ZlcmFsbCA9PT0gJzInKSB7XG4gIC8vICAgICB2YXIgc3RhciA9ICfimIXimIUnO1xuICAvLyAgIH0gZWxzZSBpZiAocmV2aWV3LnJhdGluZ19vdmVyYWxsID09PSAnMycpIHtcbiAgLy8gICAgIHZhciBzdGFyID0gJ+KYheKYheKYhSdcbiAgLy8gICB9IGVsc2UgaWYgKHJldmlldy5yYXRpbmdfb3ZlcmFsbCA9PT0gJzQnKSB7XG4gIC8vICAgICB2YXIgc3RhciA9ICfimIXimIXimIXimIUnO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB2YXIgc3RhciA9ICfimIXimIXimIXimIXimIUnO1xuICAvLyAgIH07XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxDb2xsZWN0aW9uSXRlbT5cbiAgLy8gICAgICAgPFN0YXJzPntzdGFyfTwvU3RhcnM+XG4gIC8vICAgICAgIDxUaW1lPntjcmVhdGVkX2RhdGV9PC9UaW1lPlxuICAvLyAgICAgICA8VGl0bGU+e3Jldmlldy50aXRsZX08L1RpdGxlPlxuICAvLyAgICAgICA8VGV4dD57cmV2aWV3LnRleHR9PC9UZXh0PlxuICAvLyAgICAgICB7XG4gIC8vICAgICAgICAgcmV2aWV3LmRvZXNyZWNvbW1lbmRlZFxuICAvLyAgICAgICAgICAgP1xuICAvLyAgICAgICAgICAgPFJlY29tbWVuZD7inJMgSSByZWNvbW1lbmQgdGhpcyBwcm9kdWN0PC9SZWNvbW1lbmQ+XG4gIC8vICAgICAgICAgICA6XG4gIC8vICAgICAgICAgICA8RG9udFJlY29tbWVuZD54IEkgZG8gbm90IHJlY29tbWVuZCB0aGlzIHByb2R1Y3Q8L0RvbnRSZWNvbW1lbmQ+XG4gIC8vICAgICAgIH1cbiAgLy8gICAgICAgPFVzZXI+e3Jldmlldy5uaWNrbmFtZX08L1VzZXI+XG4gIC8vICAgICAgIDxkaXY+V2FzIHRoaXMgcmV2aWV3IGhlbHBmdWw/IFllcyAoe3Jldmlldy5pc2hlbHBmdWx9KSBObyAoe3Jldmlldy5pc25vdGhlbHBmdWx9KTwvZGl2PlxuICAvLyAgICAgPC9Db2xsZWN0aW9uSXRlbT5cbiAgLy8gICApXG4gIC8vIH1cblxufVxuLy8gY29uc3QgUmV2aWV3TGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXG5cbi8vICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld0xpc3RFbnRyeTtcblxuLypcbjxGcmFnbWVudD5cbiAgPGRpdj7imIXimIXimIXimIXimIYgQXByaWwgMzAsIDIwMjA8L2Rpdj5cbiAgPGRpdj5UaXRsZTogQXdlc29tZSBzaG9lITwvZGl2PlxuICA8ZGl2PlRleHQ6IENvbWZvcnRhYmxlLCBpdCBoYXMgZ3JlYXQgc3R5bGU8L2Rpdj5cbiAgPGRpdj7inJNJIHJlY29tbWVuZCB0aGlzIHByb2R1Y3Q8L2Rpdj5cbiAgPGRpdj51c2VyOiB2YW5lc2E0PC9kaXY+XG4gIDxkaXY+V2FzIHRoaXMgcmV2aWV3IGhlbHBmdWw/IFllcyAoMCkgTm8gKDApPC9kaXY+XG4gIDxkaXY+LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPC9kaXY+XG48L0ZyYWdtZW50PlxuKi8iXX0=