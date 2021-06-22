module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/home/hero/_hero.scss":
/*!****************************************!*\
  !*** ./component/home/hero/_hero.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudC9ob21lL2hlcm8vX2hlcm8uc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/home/hero/_hero.scss\n");

/***/ }),

/***/ "./component/home/hero/index.js":
/*!**************************************!*\
  !*** ./component/home/hero/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hero; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hero.scss */ \"./component/home/hero/_hero.scss\");\n/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hero_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ \"react-reveal/Fade\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst config = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig;\nclass Hero extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible: false\n    };\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      className: \"start-fundraiser-banner\"\n    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      bottom: true,\n      duration: 1000,\n      delay: 600,\n      distance: \"30px\"\n    }, __jsx(\"div\", {\n      className: \"sfb-container container\"\n    }, __jsx(\"div\", {\n      className: \"sfb-container-left\"\n    }, __jsx(\"div\", {\n      className: \"sfb-content\"\n    }, __jsx(\"strong\", null, \"Raise for You\"), __jsx(\"br\", null), __jsx(\"i\", null, \"to become You\"), __jsx(\"br\", null), __jsx(\"p\", null, \"Help us\", __jsx(\"br\", null), \"to Help You\")), __jsx(\"a\", {\n      href: \"\"\n    }, __jsx(\"button\", {\n      className: \"btn btn-primary\"\n    }, \"Help you \"))), __jsx(\"div\", {\n      className: \"sfb-container-right\"\n    }))));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvaG9tZS9oZXJvL2luZGV4LmpzPzBmNTgiXSwibmFtZXMiOlsiY29uZmlnIiwiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIkhlcm8iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ2aXNpYmxlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHQyxrREFBUyxHQUFHQyxtQkFBM0I7QUFHZSxNQUFNQyxJQUFOLFNBQW1CQywrQ0FBbkIsQ0FBNkI7QUFDM0NDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2xCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBYjtBQUNBOztBQUlGQyxRQUFNLEdBQUc7QUFDUixXQUNBO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRyxNQUFDLHdEQUFEO0FBQU0sWUFBTSxNQUFaO0FBQWEsY0FBUSxFQUFFLElBQXZCO0FBQTZCLFdBQUssRUFBRSxHQUFwQztBQUF5QyxjQUFRLEVBQUM7QUFBbEQsT0FDRjtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDQSxzQ0FEQSxFQUM4QixpQkFEOUIsRUFFQSxpQ0FGQSxFQUVvQixpQkFGcEIsRUFHQyw0QkFBVSxpQkFBVixnQkFIRCxDQURELEVBTUM7QUFBRyxVQUFJLEVBQUM7QUFBUixPQUFXO0FBQVEsZUFBUyxFQUFDO0FBQWxCLG1CQUFYLENBTkQsQ0FERCxFQVNDO0FBQUssZUFBUyxFQUFDO0FBQWYsTUFURCxDQURFLENBREgsQ0FEQTtBQXdCQTs7QUFqQzJDIiwiZmlsZSI6Ii4vY29tcG9uZW50L2hvbWUvaGVyby9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcbmltcG9ydCAnLi9faGVyby5zY3NzJztcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcbmNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpLnB1YmxpY1J1bnRpbWVDb25maWc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7IHZpc2libGU6IGZhbHNlIH07XG5cdH1cblxuXHRcblxucmVuZGVyKCkge1xuXHRyZXR1cm4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0LWZ1bmRyYWlzZXItYmFubmVyXCI+XG4gICAgPEZhZGUgYm90dG9tIGR1cmF0aW9uPXsxMDAwfSBkZWxheT17NjAwfSBkaXN0YW5jZT1cIjMwcHhcIj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNmYi1jb250YWluZXIgY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNmYi1jb250YWluZXItbGVmdFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNmYi1jb250ZW50XCI+XG5cdFx0XHRcdDxzdHJvbmc+UmFpc2UgZm9yIFlvdTwvc3Ryb25nPjxiciAvPlxuXHRcdFx0XHQ8aT50byBiZWNvbWUgWW91PC9pPjxiciAvPlxuXHRcdFx0XHRcdDxwPkhlbHAgdXM8YnIgLz50byBIZWxwIFlvdTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxhIGhyZWY9XCJcIj48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiID5IZWxwIHlvdSA8L2J1dHRvbj48L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2ZiLWNvbnRhaW5lci1yaWdodFwiPlxuXHRcdFx0XHR7LyogPGltZyBcbiAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoYC4uLy4uLy4uL2Fzc2V0cy9ob21lL2JhY2tncm91bmQxLmpwZ2ApfVxuICAgICAgICAgICAgICAgIC8vIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9ob21lL2JhY2tncm91bmQxLmpwZ1wiXG4gICAgICAgICAgICAgICAgLy8gc3JjPXtcIi4uLy4uLy4uL2hvbWUvYmFja2dyb3VuZDEuanBnXCJ9IFxuICAgICAgICAgICAgICAgIC8vIHNyYz1cIi9ob21lL2JhY2tncm91bmQxLmpwZ1wiIFxuICAgICAgICAgICAgICAgIGFsdD1cImhlcm8gaW1hZ2VcIiAvPiAqL31cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG5cdDwvZGl2PlxuXHQpO1xufVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/home/hero/index.js\n");

/***/ }),

/***/ "./component/home/index.js":
/*!*********************************!*\
  !*** ./component/home/index.js ***!
  \*********************************/
/*! exports provided: Hero, Testimonial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./component/home/hero/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Hero\", function() { return _hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonial */ \"./component/home/testimonial/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Testimonial\", function() { return _testimonial__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvaG9tZS9pbmRleC5qcz9kYzQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9jb21wb25lbnQvaG9tZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgSGVybyB9IGZyb20gJy4vaGVybyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlc3RpbW9uaWFsIH0gZnJvbSAnLi90ZXN0aW1vbmlhbCc7XG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/home/index.js\n");

/***/ }),

/***/ "./component/home/testimonial/_testimonial.scss":
/*!******************************************************!*\
  !*** ./component/home/testimonial/_testimonial.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudC9ob21lL3Rlc3RpbW9uaWFsL190ZXN0aW1vbmlhbC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/home/testimonial/_testimonial.scss\n");

/***/ }),

/***/ "./component/home/testimonial/index.js":
/*!*********************************************!*\
  !*** ./component/home/testimonial/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ \"react-slick\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _testimonial_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_testimonial.scss */ \"./component/home/testimonial/_testimonial.scss\");\n/* harmony import */ var _testimonial_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_testimonial_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst DonorTestimonialsettings = {\n  dots: true,\n  infinite: true,\n  speed: 1000,\n  slidesToShow: 1,\n  slidesToScroll: 1,\n  autoplay: true,\n  autoplaySpeed: 10000,\n  arrows: true,\n  nextArrow: __jsx(DtNextArrow, null),\n  prevArrow: __jsx(DtPrevArrow, null),\n  appendDots: dots => __jsx(\"div\", null, __jsx(\"ul\", null, \" \", dots, \" \")),\n  customPaging: i => __jsx(\"div\", {\n    className: \"dot-item\"\n  })\n};\n\nfunction DtPrevArrow(props) {\n  const {\n    onClick\n  } = props;\n  return __jsx(\"div\", {\n    className: \"dtm-arrow arrow-prev\",\n    onClick: onClick\n  }, __jsx(\"svg\", {\n    className: \"dtm-arrow-svg\",\n    viewBox: \"0 0 20 20\"\n  }, __jsx(\"path\", {\n    d: \"M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0 L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109 c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483 c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788 S18.707,9.212,18.271,9.212z\"\n  })));\n}\n\nfunction DtNextArrow(props) {\n  const {\n    onClick\n  } = props;\n  return __jsx(\"div\", {\n    className: \"dtm-arrow arrow-next\",\n    onClick: onClick\n  }, __jsx(\"svg\", {\n    className: \"dtm-arrow-svg\",\n    viewBox: \"0 0 20 20\"\n  }, __jsx(\"path\", {\n    d: \"M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0 l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109 c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483 c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788 S1.293,9.212,1.729,9.212z\"\n  })));\n}\n\nconst items = [{\n  imageUrl: 'https://give-marketplace.s3.ap-south-1.amazonaws.com/static/images/home/homeTemp/vinod-khosla.jpg',\n  imageAlt: 'Vinod Khosla',\n  heading: 'Send children to school',\n  description: 'People often wonder where the money would go. I can tell you, I started working with GiveIndia when the pandemic first broke a year ago. We validate them, it’s a very good, reliable organization. People should have confidence in giving to GiveIndia and know that the money will be used immediately to help somebody.',\n  profileName: 'Vinod Khosla',\n  profileImageUrl: '/static/images/home/home-testimonial/suman.jpg',\n  profileImageAlt: 'Vinod Khosla',\n  profileDescription: 'Venture Capitalist',\n  ctatext: 'Donate Now ',\n  ctalink: 'https://fundraisers.giveindia.org/projects/fight-against-covid'\n}, {\n  imageUrl: 'https://give-marketplace.s3.ap-south-1.amazonaws.com/static/images/home/homeTemp/devi-shetty.jpg',\n  imageAlt: 'Dr. Devi Shetty',\n  heading: 'Send children to school',\n  description: 'There is a healthcare crisis looming and we must act fast to protect our frontline workers. Doctors, nurses and paramedics’ safety is crucial to providing healthcare to patients and we are prioritising that through the India COVID Response fund.',\n  profileName: 'Dr. Devi Shetty',\n  profileImageUrl: '/static/images/home/home-testimonial/suman.jpg',\n  profileImageAlt: 'Dr. Devi Shetty',\n  profileDescription: 'Chairman, Narayana Health',\n  ctatext: 'Donate Now ',\n  ctalink: ''\n}, {\n  imageUrl: 'https://give-marketplace.s3.ap-south-1.amazonaws.com/static/images/home/homeTemp/robert-rrosen.jpg',\n  imageAlt: 'Robert Rosen',\n  heading: '',\n  description: 'GiveIndia’s pursuit of bringing trust, convenience and choice for donors, is aligned with our goal\tto enable more informed and intentional generosity by everyday givers. We are happy to be a\tpart of this respected group of funders who have come forward to support this effort.',\n  profileName: 'Robert Rosen',\n  profileImageUrl: '',\n  profileImageAlt: 'Robert Rosen',\n  profileDescription: 'Director of Philanthropic Partnerships, Bill & Melinda Gates Foundation',\n  ctatext: 'Donate Now ',\n  ctalink: ''\n}, {\n  imageUrl: 'https://give-marketplace.s3.ap-south-1.amazonaws.com/static/images/home/homeTemp/sanjay-gupta.jpg',\n  imageAlt: 'Sanjay Gupta',\n  heading: '',\n  description: 'GiveIndia was one of the first to understand the challenges that we as a society faced and mobilised enormous resources to support the people in need - a commendable job, thank you.',\n  profileName: 'Sanjay Gupta',\n  profileImageUrl: '',\n  profileImageAlt: 'Sanjay Gupta',\n  profileDescription: 'Country Manager and VP, Google India',\n  ctatext: 'Donate Now ',\n  ctalink: ''\n} // {\n// \timageUrl: 'https://give-marketplace.s3.ap-south-1.amazonaws.com/static/images/home/homeTemp/ankit-Gaur.jpg',\n// \timageAlt: 'Ankit Gaur',\n// \theading: '',\n// \tdescription:\n// \t\t'We would like to thank our customers for donating generously and encouraging us to continuously innovate and enable safe, secure and trusted giving options. The idea of galvanizing the country has always resonated with our philosophy of giving back to society — thank you, GiveIndia for giving us the opportunity.',\n// \tprofileName: 'Ankit Gaur',\n// \tprofileImageUrl: '',\n// \tprofileImageAlt: 'Ankit Gaur',\n// \tprofileDescription: 'Director, Business Development, PhonePe',\n// \tctatext: 'Donate Now ',\n// \tctalink: ''\n// }\n];\nclass index extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    // const { items } = this.props;\n    const donortestimonial = items.map((item, index) => __jsx(\"div\", {\n      key: index\n    }, __jsx(\"div\", {\n      className: \"dtm-items\"\n    }, __jsx(\"div\", {\n      className: \"dtm-items-img\"\n    }, __jsx(\"img\", {\n      src: item.imageUrl,\n      alt: item.imageAlt\n    })), __jsx(\"div\", {\n      className: \"dtm-items-content\"\n    }, __jsx(\"div\", {\n      className: \"dtm-beneficiary\"\n    }, __jsx(\"div\", {\n      className: \"dtm-beneficiary-bio\"\n    }, __jsx(\"h3\", null, item.profileName), __jsx(\"h4\", null, item.profileDescription))), __jsx(\"p\", null, \"\\u201C \", item.description, \" \\u201D\")))));\n    return __jsx(\"div\", {\n      className: \"donor-testimonials-wrapper\"\n    }, __jsx(\"div\", {\n      className: \"donor-testimonials container\"\n    }, __jsx(\"div\", {\n      className: \"dtm-header\"\n    }, __jsx(\"h2\", null, \"Testimonials\"), __jsx(\"div\", {\n      className: \"dtm-header-bar\"\n    })), __jsx(\"div\", {\n      className: \"dtm-items-container\"\n    }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, DonorTestimonialsettings, donortestimonial))));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvaG9tZS90ZXN0aW1vbmlhbC9pbmRleC5qcz9jOTg2Il0sIm5hbWVzIjpbIkRvbm9yVGVzdGltb25pYWxzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJhcnJvd3MiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJhcHBlbmREb3RzIiwiY3VzdG9tUGFnaW5nIiwiaSIsIkR0UHJldkFycm93IiwicHJvcHMiLCJvbkNsaWNrIiwiRHROZXh0QXJyb3ciLCJpdGVtcyIsImltYWdlVXJsIiwiaW1hZ2VBbHQiLCJoZWFkaW5nIiwiZGVzY3JpcHRpb24iLCJwcm9maWxlTmFtZSIsInByb2ZpbGVJbWFnZVVybCIsInByb2ZpbGVJbWFnZUFsdCIsInByb2ZpbGVEZXNjcmlwdGlvbiIsImN0YXRleHQiLCJjdGFsaW5rIiwiaW5kZXgiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInJlbmRlciIsImRvbm9ydGVzdGltb25pYWwiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQSxNQUFNQSx3QkFBd0IsR0FBRztBQUNoQ0MsTUFBSSxFQUFFLElBRDBCO0FBRWhDQyxVQUFRLEVBQUUsSUFGc0I7QUFHaENDLE9BQUssRUFBRSxJQUh5QjtBQUloQ0MsY0FBWSxFQUFFLENBSmtCO0FBS2hDQyxnQkFBYyxFQUFFLENBTGdCO0FBTWhDQyxVQUFRLEVBQUUsSUFOc0I7QUFPaENDLGVBQWEsRUFBRSxLQVBpQjtBQVFoQ0MsUUFBTSxFQUFFLElBUndCO0FBU2hDQyxXQUFTLEVBQUUsTUFBQyxXQUFELE9BVHFCO0FBVWhDQyxXQUFTLEVBQUUsTUFBQyxXQUFELE9BVnFCO0FBV2hDQyxZQUFVLEVBQUVWLElBQUksSUFDZixtQkFDQyx1QkFBTUEsSUFBTixNQURELENBWitCO0FBZ0JoQ1csY0FBWSxFQUFFQyxDQUFDLElBQ2Q7QUFBSyxhQUFTLEVBQUM7QUFBZjtBQWpCK0IsQ0FBakM7O0FBcUJBLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzNCLFFBQU07QUFBRUM7QUFBRixNQUFjRCxLQUFwQjtBQUNBLFNBQ0M7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsV0FBTyxFQUFFQztBQUEvQyxLQUNDO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBK0IsV0FBTyxFQUFDO0FBQXZDLEtBQ0M7QUFDQyxLQUFDLEVBQUM7QUFESCxJQURELENBREQsQ0FERDtBQWFBOztBQUVELFNBQVNDLFdBQVQsQ0FBcUJGLEtBQXJCLEVBQTRCO0FBQzNCLFFBQU07QUFBRUM7QUFBRixNQUFjRCxLQUFwQjtBQUNBLFNBQ0M7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsV0FBTyxFQUFFQztBQUEvQyxLQUNDO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBK0IsV0FBTyxFQUFDO0FBQXZDLEtBQ0M7QUFDQyxLQUFDLEVBQUM7QUFESCxJQURELENBREQsQ0FERDtBQWFBOztBQUVELE1BQU1FLEtBQUssR0FBRyxDQUNiO0FBQ0NDLFVBQVEsRUFDUCxtR0FGRjtBQUdDQyxVQUFRLEVBQUUsY0FIWDtBQUlDQyxTQUFPLEVBQUUseUJBSlY7QUFLQ0MsYUFBVyxFQUNWLDZUQU5GO0FBT0NDLGFBQVcsRUFBRSxjQVBkO0FBUUNDLGlCQUFlLEVBQUUsZ0RBUmxCO0FBU0NDLGlCQUFlLEVBQUUsY0FUbEI7QUFVQ0Msb0JBQWtCLEVBQUUsb0JBVnJCO0FBV0NDLFNBQU8sRUFBRSxhQVhWO0FBWUNDLFNBQU8sRUFBRTtBQVpWLENBRGEsRUFlYjtBQUNDVCxVQUFRLEVBQ1Asa0dBRkY7QUFHQ0MsVUFBUSxFQUFFLGlCQUhYO0FBSUNDLFNBQU8sRUFBRSx5QkFKVjtBQUtDQyxhQUFXLEVBQ1YsdVBBTkY7QUFPQ0MsYUFBVyxFQUFFLGlCQVBkO0FBUUNDLGlCQUFlLEVBQUUsZ0RBUmxCO0FBU0NDLGlCQUFlLEVBQUUsaUJBVGxCO0FBVUNDLG9CQUFrQixFQUFFLDJCQVZyQjtBQVdDQyxTQUFPLEVBQUUsYUFYVjtBQVlDQyxTQUFPLEVBQUU7QUFaVixDQWZhLEVBNkJiO0FBQ0NULFVBQVEsRUFDUCxvR0FGRjtBQUdDQyxVQUFRLEVBQUUsY0FIWDtBQUlDQyxTQUFPLEVBQUUsRUFKVjtBQUtDQyxhQUFXLEVBQ1Ysc1JBTkY7QUFPQ0MsYUFBVyxFQUFFLGNBUGQ7QUFRQ0MsaUJBQWUsRUFBRSxFQVJsQjtBQVNDQyxpQkFBZSxFQUFFLGNBVGxCO0FBVUNDLG9CQUFrQixFQUNqQix5RUFYRjtBQVlDQyxTQUFPLEVBQUUsYUFaVjtBQWFDQyxTQUFPLEVBQUU7QUFiVixDQTdCYSxFQTRDYjtBQUNDVCxVQUFRLEVBQ1AsbUdBRkY7QUFHQ0MsVUFBUSxFQUFFLGNBSFg7QUFJQ0MsU0FBTyxFQUFFLEVBSlY7QUFLQ0MsYUFBVyxFQUNWLHVMQU5GO0FBT0NDLGFBQVcsRUFBRSxjQVBkO0FBUUNDLGlCQUFlLEVBQUUsRUFSbEI7QUFTQ0MsaUJBQWUsRUFBRSxjQVRsQjtBQVVDQyxvQkFBa0IsRUFBRSxzQ0FWckI7QUFXQ0MsU0FBTyxFQUFFLGFBWFY7QUFZQ0MsU0FBTyxFQUFFO0FBWlYsQ0E1Q2EsQ0EwRGI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0RWEsQ0FBZDtBQXlFZSxNQUFNQyxLQUFOLFNBQW9CQywrQ0FBcEIsQ0FBOEI7QUFDNUNDLGFBQVcsQ0FBQ2hCLEtBQUQsRUFBUTtBQUNsQixVQUFNQSxLQUFOO0FBQ0E7O0FBQ0RpQixRQUFNLEdBQUc7QUFDUjtBQUVBLFVBQU1DLGdCQUFnQixHQUFHZixLQUFLLENBQUNnQixHQUFOLENBQVUsQ0FBQ0MsSUFBRCxFQUFPTixLQUFQLEtBQ2xDO0FBQUssU0FBRyxFQUFFQTtBQUFWLE9BQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDQztBQUFLLFNBQUcsRUFBRU0sSUFBSSxDQUFDaEIsUUFBZjtBQUF5QixTQUFHLEVBQUVnQixJQUFJLENBQUNmO0FBQW5DLE1BREQsQ0FERCxFQUlDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDQztBQUFLLGVBQVMsRUFBQztBQUFmLE9BT0M7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNDLGtCQUFLZSxJQUFJLENBQUNaLFdBQVYsQ0FERCxFQUVDLGtCQUFLWSxJQUFJLENBQUNULGtCQUFWLENBRkQsQ0FQRCxDQURELEVBYUMsNEJBQ1VTLElBQUksQ0FBQ2IsV0FEZixZQWJELENBSkQsQ0FERCxDQUR3QixDQUF6QjtBQTJDQSxXQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDQztBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNDLGlDQURELEVBRUM7QUFBSyxlQUFTLEVBQUM7QUFBZixNQUZELENBREQsRUFLQztBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0MsTUFBQyxrREFBRCxFQUFZdEIsd0JBQVosRUFBdUNpQyxnQkFBdkMsQ0FERCxDQUxELENBREQsQ0FERDtBQWFBOztBQS9EMkMiLCJmaWxlIjoiLi9jb21wb25lbnQvaG9tZS90ZXN0aW1vbmlhbC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCAnLi9fdGVzdGltb25pYWwuc2Nzcyc7XG5cblxuXG5jb25zdCBEb25vclRlc3RpbW9uaWFsc2V0dGluZ3MgPSB7XG5cdGRvdHM6IHRydWUsXG5cdGluZmluaXRlOiB0cnVlLFxuXHRzcGVlZDogMTAwMCxcblx0c2xpZGVzVG9TaG93OiAxLFxuXHRzbGlkZXNUb1Njcm9sbDogMSxcblx0YXV0b3BsYXk6IHRydWUsXG5cdGF1dG9wbGF5U3BlZWQ6IDEwMDAwLFxuXHRhcnJvd3M6IHRydWUsXG5cdG5leHRBcnJvdzogPER0TmV4dEFycm93IC8+LFxuXHRwcmV2QXJyb3c6IDxEdFByZXZBcnJvdyAvPixcblx0YXBwZW5kRG90czogZG90cyA9PiAoXG5cdFx0PGRpdj5cblx0XHRcdDx1bD4ge2RvdHN9IDwvdWw+XG5cdFx0PC9kaXY+XG5cdCksXG5cdGN1c3RvbVBhZ2luZzogaSA9PiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkb3QtaXRlbVwiPjwvZGl2PlxuXHQgIClcbn07XG5cbmZ1bmN0aW9uIER0UHJldkFycm93KHByb3BzKSB7XG5cdGNvbnN0IHsgb25DbGljayB9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkdG0tYXJyb3cgYXJyb3ctcHJldlwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdFx0PHN2ZyBjbGFzc05hbWU9XCJkdG0tYXJyb3ctc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxuXHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdGQ9XCJNMTguMjcxLDkuMjEySDMuNjE1bDQuMTg0LTQuMTg0YzAuMzA2LTAuMzA2LDAuMzA2LTAuODAxLDAtMS4xMDdjLTAuMzA2LTAuMzA2LTAuODAxLTAuMzA2LTEuMTA3LDBcblx0XHRcdFx0XHRcdFx0XHRcdEwxLjIxLDkuNDAzQzEuMTk0LDkuNDE3LDEuMTc0LDkuNDIxLDEuMTU4LDkuNDM3Yy0wLjE4MSwwLjE4MS0wLjI0MiwwLjQyNS0wLjIwOSwwLjY2YzAuMDA1LDAuMDM4LDAuMDEyLDAuMDcxLDAuMDIyLDAuMTA5XG5cdFx0XHRcdFx0XHRcdFx0XHRjMC4wMjgsMC4wOTgsMC4wNzUsMC4xODgsMC4xNDIsMC4yNzFjMC4wMjEsMC4wMjYsMC4wMjEsMC4wNjEsMC4wNDUsMC4wODVjMC4wMTUsMC4wMTYsMC4wMzQsMC4wMiwwLjA1LDAuMDMzbDUuNDg0LDUuNDgzXG5cdFx0XHRcdFx0XHRcdFx0XHRjMC4zMDYsMC4zMDcsMC44MDEsMC4zMDcsMS4xMDcsMGMwLjMwNi0wLjMwNSwwLjMwNi0wLjgwMSwwLTEuMTA1bC00LjE4NC00LjE4NWgxNC42NTZjMC40MzYsMCwwLjc4OC0wLjM1MywwLjc4OC0wLjc4OFxuXHRcdFx0XHRcdFx0XHRcdFx0UzE4LjcwNyw5LjIxMiwxOC4yNzEsOS4yMTJ6XCJcblx0XHRcdFx0PjwvcGF0aD5cblx0XHRcdDwvc3ZnPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBEdE5leHRBcnJvdyhwcm9wcykge1xuXHRjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BzO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRtLWFycm93IGFycm93LW5leHRcIiBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHRcdDxzdmcgY2xhc3NOYW1lPVwiZHRtLWFycm93LXN2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cblx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRkPVwiTTEuNzI5LDkuMjEyaDE0LjY1NmwtNC4xODQtNC4xODRjLTAuMzA3LTAuMzA2LTAuMzA3LTAuODAxLDAtMS4xMDdjMC4zMDUtMC4zMDYsMC44MDEtMC4zMDYsMS4xMDYsMFxuXHRcdFx0XHRcdFx0XHRcdFx0bDUuNDgxLDUuNDgyYzAuMDE4LDAuMDE0LDAuMDM3LDAuMDE5LDAuMDUzLDAuMDM0YzAuMTgxLDAuMTgxLDAuMjQyLDAuNDI1LDAuMjA5LDAuNjZjLTAuMDA0LDAuMDM4LTAuMDEyLDAuMDcxLTAuMDIxLDAuMTA5XG5cdFx0XHRcdFx0XHRcdFx0XHRjLTAuMDI4LDAuMDk4LTAuMDc1LDAuMTg4LTAuMTQzLDAuMjcxYy0wLjAyMSwwLjAyNi0wLjAyMSwwLjA2MS0wLjA0NSwwLjA4NWMtMC4wMTUsMC4wMTYtMC4wMzQsMC4wMi0wLjA1MSwwLjAzM2wtNS40ODMsNS40ODNcblx0XHRcdFx0XHRcdFx0XHRcdGMtMC4zMDYsMC4zMDctMC44MDIsMC4zMDctMS4xMDYsMGMtMC4zMDctMC4zMDUtMC4zMDctMC44MDEsMC0xLjEwNWw0LjE4NC00LjE4NUgxLjcyOWMtMC40MzYsMC0wLjc4OC0wLjM1My0wLjc4OC0wLjc4OFxuXHRcdFx0XHRcdFx0XHRcdFx0UzEuMjkzLDkuMjEyLDEuNzI5LDkuMjEyelwiXG5cdFx0XHRcdD48L3BhdGg+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuY29uc3QgaXRlbXMgPSBbXG5cdHtcblx0XHRpbWFnZVVybDpcblx0XHRcdCdodHRwczovL2dpdmUtbWFya2V0cGxhY2UuczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL3N0YXRpYy9pbWFnZXMvaG9tZS9ob21lVGVtcC92aW5vZC1raG9zbGEuanBnJyxcblx0XHRpbWFnZUFsdDogJ1Zpbm9kIEtob3NsYScsXG5cdFx0aGVhZGluZzogJ1NlbmQgY2hpbGRyZW4gdG8gc2Nob29sJyxcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdCdQZW9wbGUgb2Z0ZW4gd29uZGVyIHdoZXJlIHRoZSBtb25leSB3b3VsZCBnby4gSSBjYW4gdGVsbCB5b3UsIEkgc3RhcnRlZCB3b3JraW5nIHdpdGggR2l2ZUluZGlhIHdoZW4gdGhlIHBhbmRlbWljIGZpcnN0IGJyb2tlIGEgeWVhciBhZ28uIFdlIHZhbGlkYXRlIHRoZW0sIGl04oCZcyBhIHZlcnkgZ29vZCwgcmVsaWFibGUgb3JnYW5pemF0aW9uLiBQZW9wbGUgc2hvdWxkIGhhdmUgY29uZmlkZW5jZSBpbiBnaXZpbmcgdG8gR2l2ZUluZGlhIGFuZCBrbm93IHRoYXQgdGhlIG1vbmV5IHdpbGwgYmUgdXNlZCBpbW1lZGlhdGVseSB0byBoZWxwIHNvbWVib2R5LicsXG5cdFx0cHJvZmlsZU5hbWU6ICdWaW5vZCBLaG9zbGEnLFxuXHRcdHByb2ZpbGVJbWFnZVVybDogJy9zdGF0aWMvaW1hZ2VzL2hvbWUvaG9tZS10ZXN0aW1vbmlhbC9zdW1hbi5qcGcnLFxuXHRcdHByb2ZpbGVJbWFnZUFsdDogJ1Zpbm9kIEtob3NsYScsXG5cdFx0cHJvZmlsZURlc2NyaXB0aW9uOiAnVmVudHVyZSBDYXBpdGFsaXN0Jyxcblx0XHRjdGF0ZXh0OiAnRG9uYXRlIE5vdyAnLFxuXHRcdGN0YWxpbms6ICdodHRwczovL2Z1bmRyYWlzZXJzLmdpdmVpbmRpYS5vcmcvcHJvamVjdHMvZmlnaHQtYWdhaW5zdC1jb3ZpZCdcblx0fSxcblx0e1xuXHRcdGltYWdlVXJsOlxuXHRcdFx0J2h0dHBzOi8vZ2l2ZS1tYXJrZXRwbGFjZS5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vc3RhdGljL2ltYWdlcy9ob21lL2hvbWVUZW1wL2Rldmktc2hldHR5LmpwZycsXG5cdFx0aW1hZ2VBbHQ6ICdEci4gRGV2aSBTaGV0dHknLFxuXHRcdGhlYWRpbmc6ICdTZW5kIGNoaWxkcmVuIHRvIHNjaG9vbCcsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHQnVGhlcmUgaXMgYSBoZWFsdGhjYXJlIGNyaXNpcyBsb29taW5nIGFuZCB3ZSBtdXN0IGFjdCBmYXN0IHRvIHByb3RlY3Qgb3VyIGZyb250bGluZSB3b3JrZXJzLiBEb2N0b3JzLCBudXJzZXMgYW5kIHBhcmFtZWRpY3PigJkgc2FmZXR5IGlzIGNydWNpYWwgdG8gcHJvdmlkaW5nIGhlYWx0aGNhcmUgdG8gcGF0aWVudHMgYW5kIHdlIGFyZSBwcmlvcml0aXNpbmcgdGhhdCB0aHJvdWdoIHRoZSBJbmRpYSBDT1ZJRCBSZXNwb25zZSBmdW5kLicsXG5cdFx0cHJvZmlsZU5hbWU6ICdEci4gRGV2aSBTaGV0dHknLFxuXHRcdHByb2ZpbGVJbWFnZVVybDogJy9zdGF0aWMvaW1hZ2VzL2hvbWUvaG9tZS10ZXN0aW1vbmlhbC9zdW1hbi5qcGcnLFxuXHRcdHByb2ZpbGVJbWFnZUFsdDogJ0RyLiBEZXZpIFNoZXR0eScsXG5cdFx0cHJvZmlsZURlc2NyaXB0aW9uOiAnQ2hhaXJtYW4sIE5hcmF5YW5hIEhlYWx0aCcsXG5cdFx0Y3RhdGV4dDogJ0RvbmF0ZSBOb3cgJyxcblx0XHRjdGFsaW5rOiAnJ1xuXHR9LFxuXHR7XG5cdFx0aW1hZ2VVcmw6XG5cdFx0XHQnaHR0cHM6Ly9naXZlLW1hcmtldHBsYWNlLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9zdGF0aWMvaW1hZ2VzL2hvbWUvaG9tZVRlbXAvcm9iZXJ0LXJyb3Nlbi5qcGcnLFxuXHRcdGltYWdlQWx0OiAnUm9iZXJ0IFJvc2VuJyxcblx0XHRoZWFkaW5nOiAnJyxcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdCdHaXZlSW5kaWHigJlzIHB1cnN1aXQgb2YgYnJpbmdpbmcgdHJ1c3QsIGNvbnZlbmllbmNlIGFuZCBjaG9pY2UgZm9yIGRvbm9ycywgaXMgYWxpZ25lZCB3aXRoIG91ciBnb2FsXHR0byBlbmFibGUgbW9yZSBpbmZvcm1lZCBhbmQgaW50ZW50aW9uYWwgZ2VuZXJvc2l0eSBieSBldmVyeWRheSBnaXZlcnMuIFdlIGFyZSBoYXBweSB0byBiZSBhXHRwYXJ0IG9mIHRoaXMgcmVzcGVjdGVkIGdyb3VwIG9mIGZ1bmRlcnMgd2hvIGhhdmUgY29tZSBmb3J3YXJkIHRvIHN1cHBvcnQgdGhpcyBlZmZvcnQuJyxcblx0XHRwcm9maWxlTmFtZTogJ1JvYmVydCBSb3NlbicsXG5cdFx0cHJvZmlsZUltYWdlVXJsOiAnJyxcblx0XHRwcm9maWxlSW1hZ2VBbHQ6ICdSb2JlcnQgUm9zZW4nLFxuXHRcdHByb2ZpbGVEZXNjcmlwdGlvbjpcblx0XHRcdCdEaXJlY3RvciBvZiBQaGlsYW50aHJvcGljIFBhcnRuZXJzaGlwcywgQmlsbCAmIE1lbGluZGEgR2F0ZXMgRm91bmRhdGlvbicsXG5cdFx0Y3RhdGV4dDogJ0RvbmF0ZSBOb3cgJyxcblx0XHRjdGFsaW5rOiAnJ1xuXHR9LFxuXHR7XG5cdFx0aW1hZ2VVcmw6XG5cdFx0XHQnaHR0cHM6Ly9naXZlLW1hcmtldHBsYWNlLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9zdGF0aWMvaW1hZ2VzL2hvbWUvaG9tZVRlbXAvc2FuamF5LWd1cHRhLmpwZycsXG5cdFx0aW1hZ2VBbHQ6ICdTYW5qYXkgR3VwdGEnLFxuXHRcdGhlYWRpbmc6ICcnLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0J0dpdmVJbmRpYSB3YXMgb25lIG9mIHRoZSBmaXJzdCB0byB1bmRlcnN0YW5kIHRoZSBjaGFsbGVuZ2VzIHRoYXQgd2UgYXMgYSBzb2NpZXR5IGZhY2VkIGFuZCBtb2JpbGlzZWQgZW5vcm1vdXMgcmVzb3VyY2VzIHRvIHN1cHBvcnQgdGhlIHBlb3BsZSBpbiBuZWVkIC0gYSBjb21tZW5kYWJsZSBqb2IsIHRoYW5rIHlvdS4nLFxuXHRcdHByb2ZpbGVOYW1lOiAnU2FuamF5IEd1cHRhJyxcblx0XHRwcm9maWxlSW1hZ2VVcmw6ICcnLFxuXHRcdHByb2ZpbGVJbWFnZUFsdDogJ1NhbmpheSBHdXB0YScsXG5cdFx0cHJvZmlsZURlc2NyaXB0aW9uOiAnQ291bnRyeSBNYW5hZ2VyIGFuZCBWUCwgR29vZ2xlIEluZGlhJyxcblx0XHRjdGF0ZXh0OiAnRG9uYXRlIE5vdyAnLFxuXHRcdGN0YWxpbms6ICcnXG5cdH1cblx0Ly8ge1xuXHQvLyBcdGltYWdlVXJsOiAnaHR0cHM6Ly9naXZlLW1hcmtldHBsYWNlLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9zdGF0aWMvaW1hZ2VzL2hvbWUvaG9tZVRlbXAvYW5raXQtR2F1ci5qcGcnLFxuXHQvLyBcdGltYWdlQWx0OiAnQW5raXQgR2F1cicsXG5cdC8vIFx0aGVhZGluZzogJycsXG5cdC8vIFx0ZGVzY3JpcHRpb246XG5cdC8vIFx0XHQnV2Ugd291bGQgbGlrZSB0byB0aGFuayBvdXIgY3VzdG9tZXJzIGZvciBkb25hdGluZyBnZW5lcm91c2x5IGFuZCBlbmNvdXJhZ2luZyB1cyB0byBjb250aW51b3VzbHkgaW5ub3ZhdGUgYW5kIGVuYWJsZSBzYWZlLCBzZWN1cmUgYW5kIHRydXN0ZWQgZ2l2aW5nIG9wdGlvbnMuIFRoZSBpZGVhIG9mIGdhbHZhbml6aW5nIHRoZSBjb3VudHJ5IGhhcyBhbHdheXMgcmVzb25hdGVkIHdpdGggb3VyIHBoaWxvc29waHkgb2YgZ2l2aW5nIGJhY2sgdG8gc29jaWV0eSDigJQgdGhhbmsgeW91LCBHaXZlSW5kaWEgZm9yIGdpdmluZyB1cyB0aGUgb3Bwb3J0dW5pdHkuJyxcblx0Ly8gXHRwcm9maWxlTmFtZTogJ0Fua2l0IEdhdXInLFxuXHQvLyBcdHByb2ZpbGVJbWFnZVVybDogJycsXG5cdC8vIFx0cHJvZmlsZUltYWdlQWx0OiAnQW5raXQgR2F1cicsXG5cdC8vIFx0cHJvZmlsZURlc2NyaXB0aW9uOiAnRGlyZWN0b3IsIEJ1c2luZXNzIERldmVsb3BtZW50LCBQaG9uZVBlJyxcblx0Ly8gXHRjdGF0ZXh0OiAnRG9uYXRlIE5vdyAnLFxuXHQvLyBcdGN0YWxpbms6ICcnXG5cdC8vIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdC8vIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBkb25vcnRlc3RpbW9uaWFsID0gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuXHRcdFx0PGRpdiBrZXk9e2luZGV4fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdG0taXRlbXNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bS1pdGVtcy1pbWdcIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtpdGVtLmltYWdlVXJsfSBhbHQ9e2l0ZW0uaW1hZ2VBbHR9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdG0taXRlbXMtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdG0tYmVuZWZpY2lhcnlcIj5cblx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2Ake2NvbmZpZy5jZG5Vcmx9JHtpdGVtLnByb2ZpbGVJbWFnZVVybH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtpdGVtLnByb2ZpbGVJbWFnZUFsdH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRtLWJlbmVmaWNpYXJ5LWJpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz57aXRlbS5wcm9maWxlTmFtZX08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDxoND57aXRlbS5wcm9maWxlRGVzY3JpcHRpb259PC9oND5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHQmbGRxdW87IHtpdGVtLmRlc2NyaXB0aW9ufSAmcmRxdW87XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHR7LyogPGFcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZHRtLWl0ZW1zLWN0YVwiXG5cdFx0XHRcdFx0XHRcdGhyZWY9e2l0ZW0uY3RhbGlua31cblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh3aW5kb3cuZXZlbnREaXNwYXRjaGVyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnRTeW5jKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQndGVzdGltb25pYWwtY3RhJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e30sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgYW1wbGl0dWRlOiB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7aXRlbS5jdGF0ZXh0fVxuXHRcdFx0XHRcdFx0PC9hPiAqL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvbm9yLXRlc3RpbW9uaWFscy13cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9ub3ItdGVzdGltb25pYWxzIGNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRtLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0PGgyPlRlc3RpbW9uaWFsczwvaDI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bS1oZWFkZXItYmFyXCI+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdG0taXRlbXMtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8U2xpZGVyIHsuLi5Eb25vclRlc3RpbW9uaWFsc2V0dGluZ3N9Pntkb25vcnRlc3RpbW9uaWFsfTwvU2xpZGVyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/home/testimonial/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/Fade */ \"react-reveal/Fade\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _component_home_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/home/index */ \"./component/home/index.js\");\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n // import NavTest from '../component/layout/testheader';\n\nfunction Home(props) {\n  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    fluid: true,\n    className: \"p-0\"\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(\"title\", {\n    className: \"jsx-1433035278\"\n  }, \"Home\"), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: \"My page title\",\n    key: \"title\",\n    className: \"jsx-1433035278\"\n  })), __jsx(\"main\", {\n    className: \"jsx-1433035278\"\n  }, __jsx(_component_home_index__WEBPACK_IMPORTED_MODULE_7__[\"Hero\"], null), __jsx(_component_home_index__WEBPACK_IMPORTED_MODULE_7__[\"Testimonial\"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1433035278\"\n  }, \".my.jsx-1433035278{color:blue;-webkit-animation-delay:2s;animation-delay:2s;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93b2xmL0Rlc2t0b3AvcmFqZWV2L3dvbGYvbWFya2V0cGxhY2UtYnVzaW5lc3MvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJrQixBQUdzQixXQUNRLDhDQUNyQiIsImZpbGUiOiIvVXNlcnMvd29sZi9EZXNrdG9wL3JhamVldi93b2xmL21hcmtldHBsYWNlLWJ1c2luZXNzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgbGF6eSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgeyBIZXJvLCBUZXN0aW1vbmlhbH0gZnJvbSAnLi4vY29tcG9uZW50L2hvbWUvaW5kZXgnO1xuXG4vLyBpbXBvcnQgTmF2VGVzdCBmcm9tICcuLi9jb21wb25lbnQvbGF5b3V0L3Rlc3RoZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG5cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicC0wXCIgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgICAgIHsvKiA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+ICovfVxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaW1hZ2VzL2hvbWVwYWdlL3NlcnZpZXMvc3RyYXRlZ3kucG5nXCIgLz4gKi99XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNeSBwYWdlIHRpdGxlXCIga2V5PVwidGl0bGVcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICA8SGVyby8+XG4gICAgICA8VGVzdGltb25pYWwvPlxuICAgICAgPC9tYWluPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubXl7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5cblxuXG4iXX0= */\\n/*@ sourceURL=/Users/wolf/Desktop/rajeev/wolf/marketplace-business/pages/index.js */\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFHbEMsU0FDRSxNQUFDLG9EQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFpQixhQUFTLEVBQUM7QUFBM0IsS0FDRSxNQUFDLGdEQUFELFFBQ0U7QUFBQTtBQUFBLFlBREYsRUFLRTtBQUFNLFlBQVEsRUFBQyxVQUFmO0FBQTBCLFdBQU8sRUFBQyxlQUFsQztBQUFrRCxPQUFHLEVBQUMsT0FBdEQ7QUFBQTtBQUFBLElBTEYsQ0FERixFQVFFO0FBQUE7QUFBQSxLQUNBLE1BQUMsMERBQUQsT0FEQSxFQUVBLE1BQUMsaUVBQUQsT0FGQSxDQVJGO0FBQUE7QUFBQSxpMERBREY7QUFzQkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGxhenkgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuaW1wb3J0IHsgSGVybywgVGVzdGltb25pYWx9IGZyb20gJy4uL2NvbXBvbmVudC9ob21lL2luZGV4JztcblxuLy8gaW1wb3J0IE5hdlRlc3QgZnJvbSAnLi4vY29tcG9uZW50L2xheW91dC90ZXN0aGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cInAtMFwiICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cbiAgICAgICAgey8qIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ltYWdlcy9ob21lcGFnZS9zZXJ2aWVzL3N0cmF0ZWd5LnBuZ1wiIC8+ICovfVxuXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTXkgcGFnZSB0aXRsZVwiIGtleT1cInRpdGxlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgPEhlcm8vPlxuICAgICAgPFRlc3RpbW9uaWFsLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm15e1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-reveal/Fade\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXZlYWwvRmFkZVwiP2E0ZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmV2ZWFsL0ZhZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXZlYWwvRmFkZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-reveal/Fade\n");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-slick\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiPzljODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3Qtc2xpY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-slick\n");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reactstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCI/MjQ5MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reactstrap\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });