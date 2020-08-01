"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _RatingTallyEntry = _interopRequireDefault(require("./RatingTallyEntry.jsx"));

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

var StarRating = _styledComponents["default"].div.withConfig({
  displayName: "StarRating"
})(["width:100%;height:100px;display:flex;justify-content:center;align-items:center;background-color:#2ada71;"]);

var OutofFive = _styledComponents["default"].div.withConfig({
  displayName: "OutofFive"
})(["font-size:56px;font-weight:700;text-align:right;padding-right:8px;"]);

var Stars = _styledComponents["default"].div.withConfig({
  displayName: "Stars"
})(["flex-flow:column wrap;justify-content:space-between;padding:8px 0 8px 8px;"]);

var RatingBreakdown = _styledComponents["default"].div.withConfig({
  displayName: "RatingBreakdown"
})(["border-bottom:1px solid #ebedee;padding-bottom:20px;margin-top:20px;"]);

var Header = _styledComponents["default"].header.withConfig({
  displayName: "Header"
})(["font-size:18px;line-height:16px;font-family:AdineuePRO,Helvetica,Arial,sans-serif;font-style:normal;font-weight:600;margin-bottom:20px;text-transform:uppercase;"]);

var RatingTally = /*#__PURE__*/function (_React$Component) {
  _inherits(RatingTally, _React$Component);

  var _super = _createSuper(RatingTally);

  function RatingTally(props) {
    _classCallCheck(this, RatingTally);

    return _super.call(this, props);
  }
  /********  MongoDB  ********/


  _createClass(RatingTally, [{
    key: "render",
    value: function render() {
      var avgRating;
      var reviews = this.props.reviews[0].review;
      var totalRating_Overall = 0;
      var fiveStarRatingCount = 0;
      var fourStarRatingCount = 0;
      var threeStarRatingCount = 0;
      var twoStarRatingCount = 0;
      var oneStarRatingCount = 0;

      for (var i = 0; i < reviews.length; i++) {
        totalRating_Overall += reviews[i].rating_overall;

        if (reviews[i].rating_overall === 1) {
          oneStarRatingCount += 1;
        } else if (reviews[i].rating_overall === 2) {
          twoStarRatingCount += 1;
        } else if (reviews[i].rating_overall === 3) {
          threeStarRatingCount += 1;
        } else if (reviews[i].rating_overall === 4) {
          fourStarRatingCount += 1;
        } else {
          fiveStarRatingCount += 1;
        }
      }

      var fiveStarRatingCountPercentage = fiveStarRatingCount / reviews.length * 100;
      var fourStarRatingCountPercentage = fourStarRatingCount / reviews.length * 100;
      var threeStarRatingCountPercentage = threeStarRatingCount / reviews.length * 100;
      var twoStarRatingCountPercentage = twoStarRatingCount / reviews.length * 100;
      var oneStarRatingCountPercentage = oneStarRatingCount / reviews.length * 100;
      reviews.length === 0 ? avgRating = 0 : avgRating = Math.round(totalRating_Overall / reviews.length * 100) / 100; // console.log(reviews);

      if (avgRating > 4.4) {
        var avgStar = '★★★★★';
      } else if (avgRating > 3.4 && avgRating <= 4.4) {
        var avgStar = '★★★★☆';
      } else if (avgRating > 2.4 && avgRating <= 3.4) {
        var avgStar = '★★★☆☆';
      } else if (avgRating > 1.4 && avgRating <= 2.4) {
        var avgStar = '★★☆☆☆';
      } else if (avgRating <= 1.4) {
        var avgStar = '★☆☆☆☆';
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StarRating, null, /*#__PURE__*/_react["default"].createElement(OutofFive, null, avgRating), /*#__PURE__*/_react["default"].createElement(Stars, null, /*#__PURE__*/_react["default"].createElement("div", null, avgStar), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("strong", null, reviews.length), " Reviews"))), /*#__PURE__*/_react["default"].createElement(RatingBreakdown, null, /*#__PURE__*/_react["default"].createElement(Header, null, "rating breakdown"), /*#__PURE__*/_react["default"].createElement(_RatingTallyEntry["default"], {
        star: 5,
        percent: fiveStarRatingCountPercentage,
        count: fiveStarRatingCount
      }), /*#__PURE__*/_react["default"].createElement(_RatingTallyEntry["default"], {
        star: 4,
        percent: fourStarRatingCountPercentage,
        count: fourStarRatingCount
      }), /*#__PURE__*/_react["default"].createElement(_RatingTallyEntry["default"], {
        star: 3,
        percent: threeStarRatingCountPercentage,
        count: threeStarRatingCount
      }), /*#__PURE__*/_react["default"].createElement(_RatingTallyEntry["default"], {
        star: 2,
        percent: twoStarRatingCountPercentage,
        count: twoStarRatingCount
      }), /*#__PURE__*/_react["default"].createElement(_RatingTallyEntry["default"], {
        star: 1,
        percent: oneStarRatingCountPercentage,
        count: oneStarRatingCount
      })));
    }
    /********  PostageSQL  ********/
    // render() {
    //   return (
    //     <>
    //       <StarRating>
    //         <OutofFive>4.7</OutofFive>
    //         <Stars>
    //           <div>★★★★★</div>
    //           <div><strong>6860</strong> Reviews</div>
    //         </Stars>
    //       </StarRating>
    //       <RatingBreakdown>
    //         <Header>rating breakdown</Header>
    //         <RatingTallyEntry star={5} percent={76.65} count={5253} />
    //         <RatingTallyEntry star={4} percent={17} count={1192} />
    //         <RatingTallyEntry star={3} percent={3} count={244} />
    //         <RatingTallyEntry star={2} percent={1} count={75} />
    //         <RatingTallyEntry star={1} percent={2} count={101} />
    //       </RatingBreakdown>
    //     </>
    //   );
    // }

  }]);

  return RatingTally;
}(_react["default"].Component);

var _default = RatingTally;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdUYWxseS5qc3giXSwibmFtZXMiOlsiU3RhclJhdGluZyIsInN0eWxlZCIsImRpdiIsIk91dG9mRml2ZSIsIlN0YXJzIiwiUmF0aW5nQnJlYWtkb3duIiwiSGVhZGVyIiwiaGVhZGVyIiwiUmF0aW5nVGFsbHkiLCJwcm9wcyIsImF2Z1JhdGluZyIsInJldmlld3MiLCJyZXZpZXciLCJ0b3RhbFJhdGluZ19PdmVyYWxsIiwiZml2ZVN0YXJSYXRpbmdDb3VudCIsImZvdXJTdGFyUmF0aW5nQ291bnQiLCJ0aHJlZVN0YXJSYXRpbmdDb3VudCIsInR3b1N0YXJSYXRpbmdDb3VudCIsIm9uZVN0YXJSYXRpbmdDb3VudCIsImkiLCJsZW5ndGgiLCJyYXRpbmdfb3ZlcmFsbCIsImZpdmVTdGFyUmF0aW5nQ291bnRQZXJjZW50YWdlIiwiZm91clN0YXJSYXRpbmdDb3VudFBlcmNlbnRhZ2UiLCJ0aHJlZVN0YXJSYXRpbmdDb3VudFBlcmNlbnRhZ2UiLCJ0d29TdGFyUmF0aW5nQ291bnRQZXJjZW50YWdlIiwib25lU3RhclJhdGluZ0NvdW50UGVyY2VudGFnZSIsIk1hdGgiLCJyb3VuZCIsImF2Z1N0YXIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLDZCQUFPQyxHQUFWO0FBQUE7QUFBQSxnSEFBaEI7O0FBUUEsSUFBTUMsU0FBUyxHQUFHRiw2QkFBT0MsR0FBVjtBQUFBO0FBQUEsMEVBQWY7O0FBTUEsSUFBTUUsS0FBSyxHQUFHSCw2QkFBT0MsR0FBVjtBQUFBO0FBQUEsa0ZBQVg7O0FBS0EsSUFBTUcsZUFBZSxHQUFHSiw2QkFBT0MsR0FBVjtBQUFBO0FBQUEsNEVBQXJCOztBQUtBLElBQU1JLE1BQU0sR0FBR0wsNkJBQU9NLE1BQVY7QUFBQTtBQUFBLHdL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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0VBekZ3Qlksa0JBQU1DLFM7O2VBNEZqQnZCLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSYXRpbmdUYWxseUVudHJ5IGZyb20gJy4vUmF0aW5nVGFsbHlFbnRyeS5qc3gnO1xuXG5jb25zdCBTdGFyUmF0aW5nID0gc3R5bGVkLmRpdmBcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDBweDtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMmFkYTcxO1xuYDtcbmNvbnN0IE91dG9mRml2ZSA9IHN0eWxlZC5kaXZgXG5mb250LXNpemU6IDU2cHg7XG5mb250LXdlaWdodDogNzAwO1xudGV4dC1hbGlnbjogcmlnaHQ7XG5wYWRkaW5nLXJpZ2h0OiA4cHg7XG5gO1xuY29uc3QgU3RhcnMgPSBzdHlsZWQuZGl2YFxuZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbnBhZGRpbmc6IDhweCAwIDhweCA4cHg7XG5gO1xuY29uc3QgUmF0aW5nQnJlYWtkb3duID0gc3R5bGVkLmRpdmBcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlZGVlO1xucGFkZGluZy1ib3R0b206IDIwcHg7XG5tYXJnaW4tdG9wOiAyMHB4O1xuYDtcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG5mb250LXNpemU6IDE4cHg7XG5saW5lLWhlaWdodDogMTZweDtcbmZvbnQtZmFtaWx5OiBBZGluZXVlUFJPLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDYwMDtcbm1hcmdpbi1ib3R0b206IDIwcHg7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuYDtcblxuY2xhc3MgUmF0aW5nVGFsbHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIC8qKioqKioqKiAgTW9uZ29EQiAgKioqKioqKiovXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgYXZnUmF0aW5nO1xuICAgIHZhciByZXZpZXdzID0gdGhpcy5wcm9wcy5yZXZpZXdzWzBdLnJldmlldztcbiAgICB2YXIgdG90YWxSYXRpbmdfT3ZlcmFsbCA9IDA7XG4gICAgdmFyIGZpdmVTdGFyUmF0aW5nQ291bnQgPSAwO1xuICAgIHZhciBmb3VyU3RhclJhdGluZ0NvdW50ID0gMDtcbiAgICB2YXIgdGhyZWVTdGFyUmF0aW5nQ291bnQgPSAwO1xuICAgIHZhciB0d29TdGFyUmF0aW5nQ291bnQgPSAwO1xuICAgIHZhciBvbmVTdGFyUmF0aW5nQ291bnQgPSAwO1xuICAgIGZvciAodmFyIGk9MDsgaTxyZXZpZXdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbFJhdGluZ19PdmVyYWxsICs9IHJldmlld3NbaV0ucmF0aW5nX292ZXJhbGw7XG4gICAgICBpZiAocmV2aWV3c1tpXS5yYXRpbmdfb3ZlcmFsbCA9PT0gMSkge1xuICAgICAgICBvbmVTdGFyUmF0aW5nQ291bnQgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAocmV2aWV3c1tpXS5yYXRpbmdfb3ZlcmFsbCA9PT0gMikge1xuICAgICAgICB0d29TdGFyUmF0aW5nQ291bnQgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAocmV2aWV3c1tpXS5yYXRpbmdfb3ZlcmFsbCA9PT0gMykge1xuICAgICAgICB0aHJlZVN0YXJSYXRpbmdDb3VudCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChyZXZpZXdzW2ldLnJhdGluZ19vdmVyYWxsID09PSA0KSB7XG4gICAgICAgIGZvdXJTdGFyUmF0aW5nQ291bnQgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpdmVTdGFyUmF0aW5nQ291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGZpdmVTdGFyUmF0aW5nQ291bnRQZXJjZW50YWdlID0gZml2ZVN0YXJSYXRpbmdDb3VudCAvIHJldmlld3MubGVuZ3RoICogMTAwO1xuICAgIHZhciBmb3VyU3RhclJhdGluZ0NvdW50UGVyY2VudGFnZSA9IGZvdXJTdGFyUmF0aW5nQ291bnQgLyByZXZpZXdzLmxlbmd0aCAqIDEwMDtcbiAgICB2YXIgdGhyZWVTdGFyUmF0aW5nQ291bnRQZXJjZW50YWdlID0gdGhyZWVTdGFyUmF0aW5nQ291bnQgLyByZXZpZXdzLmxlbmd0aCAqIDEwMDtcbiAgICB2YXIgdHdvU3RhclJhdGluZ0NvdW50UGVyY2VudGFnZSA9IHR3b1N0YXJSYXRpbmdDb3VudCAvIHJldmlld3MubGVuZ3RoICogMTAwO1xuICAgIHZhciBvbmVTdGFyUmF0aW5nQ291bnRQZXJjZW50YWdlID0gb25lU3RhclJhdGluZ0NvdW50IC8gcmV2aWV3cy5sZW5ndGggKiAxMDA7XG4gICAgcmV2aWV3cy5sZW5ndGggPT09IDAgPyBhdmdSYXRpbmcgPSAwIDogYXZnUmF0aW5nID0gTWF0aC5yb3VuZCh0b3RhbFJhdGluZ19PdmVyYWxsIC8gcmV2aWV3cy5sZW5ndGggKiAxMDApIC8gMTAwO1xuICAgIC8vIGNvbnNvbGUubG9nKHJldmlld3MpO1xuICAgIGlmIChhdmdSYXRpbmcgPiA0LjQpIHtcbiAgICAgIHZhciBhdmdTdGFyID0gJ+KYheKYheKYheKYheKYhSc7XG4gICAgfSBlbHNlIGlmIChhdmdSYXRpbmcgPiAzLjQgJiYgYXZnUmF0aW5nIDw9IDQuNCkge1xuICAgICAgdmFyIGF2Z1N0YXIgPSAn4piF4piF4piF4piF4piGJztcbiAgICB9IGVsc2UgaWYgKGF2Z1JhdGluZyA+IDIuNCAmJiBhdmdSYXRpbmcgPD0gMy40KSB7XG4gICAgICB2YXIgYXZnU3RhciA9ICfimIXimIXimIXimIbimIYnO1xuICAgIH0gZWxzZSBpZiAoYXZnUmF0aW5nID4gMS40ICYmIGF2Z1JhdGluZyA8PSAyLjQpIHtcbiAgICAgIHZhciBhdmdTdGFyID0gJ+KYheKYheKYhuKYhuKYhic7XG4gICAgfSBlbHNlIGlmIChhdmdSYXRpbmcgPD0gMS40KSB7XG4gICAgICB2YXIgYXZnU3RhciA9ICfimIXimIbimIbimIbimIYnO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFN0YXJSYXRpbmc+XG4gICAgICAgICAgPE91dG9mRml2ZT57YXZnUmF0aW5nfTwvT3V0b2ZGaXZlPlxuICAgICAgICAgIDxTdGFycz5cbiAgICAgICAgICAgIDxkaXY+e2F2Z1N0YXJ9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxzdHJvbmc+e3Jldmlld3MubGVuZ3RofTwvc3Ryb25nPiBSZXZpZXdzPC9kaXY+XG4gICAgICAgICAgPC9TdGFycz5cbiAgICAgICAgPC9TdGFyUmF0aW5nPlxuICAgICAgICA8UmF0aW5nQnJlYWtkb3duPlxuICAgICAgICAgIDxIZWFkZXI+cmF0aW5nIGJyZWFrZG93bjwvSGVhZGVyPlxuICAgICAgICAgIDxSYXRpbmdUYWxseUVudHJ5IHN0YXI9ezV9IHBlcmNlbnQ9e2ZpdmVTdGFyUmF0aW5nQ291bnRQZXJjZW50YWdlfSBjb3VudD17Zml2ZVN0YXJSYXRpbmdDb3VudH0vPlxuICAgICAgICAgIDxSYXRpbmdUYWxseUVudHJ5IHN0YXI9ezR9IHBlcmNlbnQ9e2ZvdXJTdGFyUmF0aW5nQ291bnRQZXJjZW50YWdlfSBjb3VudD17Zm91clN0YXJSYXRpbmdDb3VudH0vPlxuICAgICAgICAgIDxSYXRpbmdUYWxseUVudHJ5IHN0YXI9ezN9IHBlcmNlbnQ9e3RocmVlU3RhclJhdGluZ0NvdW50UGVyY2VudGFnZX0gY291bnQ9e3RocmVlU3RhclJhdGluZ0NvdW50fS8+XG4gICAgICAgICAgPFJhdGluZ1RhbGx5RW50cnkgc3Rhcj17Mn0gcGVyY2VudD17dHdvU3RhclJhdGluZ0NvdW50UGVyY2VudGFnZX0gY291bnQ9e3R3b1N0YXJSYXRpbmdDb3VudH0vPlxuICAgICAgICAgIDxSYXRpbmdUYWxseUVudHJ5IHN0YXI9ezF9IHBlcmNlbnQ9e29uZVN0YXJSYXRpbmdDb3VudFBlcmNlbnRhZ2V9IGNvdW50PXtvbmVTdGFyUmF0aW5nQ291bnR9Lz5cbiAgICAgICAgPC9SYXRpbmdCcmVha2Rvd24+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgLyoqKioqKioqICBQb3N0YWdlU1FMICAqKioqKioqKi9cbiAgLy8gcmVuZGVyKCkge1xuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICA8PlxuICAvLyAgICAgICA8U3RhclJhdGluZz5cbiAgLy8gICAgICAgICA8T3V0b2ZGaXZlPjQuNzwvT3V0b2ZGaXZlPlxuICAvLyAgICAgICAgIDxTdGFycz5cbiAgLy8gICAgICAgICAgIDxkaXY+4piF4piF4piF4piF4piFPC9kaXY+XG4gIC8vICAgICAgICAgICA8ZGl2PjxzdHJvbmc+Njg2MDwvc3Ryb25nPiBSZXZpZXdzPC9kaXY+XG4gIC8vICAgICAgICAgPC9TdGFycz5cbiAgLy8gICAgICAgPC9TdGFyUmF0aW5nPlxuICAvLyAgICAgICA8UmF0aW5nQnJlYWtkb3duPlxuICAvLyAgICAgICAgIDxIZWFkZXI+cmF0aW5nIGJyZWFrZG93bjwvSGVhZGVyPlxuICAvLyAgICAgICAgIDxSYXRpbmdUYWxseUVudHJ5IHN0YXI9ezV9IHBlcmNlbnQ9ezc2LjY1fSBjb3VudD17NTI1M30gLz5cbiAgLy8gICAgICAgICA8UmF0aW5nVGFsbHlFbnRyeSBzdGFyPXs0fSBwZXJjZW50PXsxN30gY291bnQ9ezExOTJ9IC8+XG4gIC8vICAgICAgICAgPFJhdGluZ1RhbGx5RW50cnkgc3Rhcj17M30gcGVyY2VudD17M30gY291bnQ9ezI0NH0gLz5cbiAgLy8gICAgICAgICA8UmF0aW5nVGFsbHlFbnRyeSBzdGFyPXsyfSBwZXJjZW50PXsxfSBjb3VudD17NzV9IC8+XG4gIC8vICAgICAgICAgPFJhdGluZ1RhbGx5RW50cnkgc3Rhcj17MX0gcGVyY2VudD17Mn0gY291bnQ9ezEwMX0gLz5cbiAgLy8gICAgICAgPC9SYXRpbmdCcmVha2Rvd24+XG4gIC8vICAgICA8Lz5cbiAgLy8gICApO1xuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ1RhbGx5OyJdfQ==