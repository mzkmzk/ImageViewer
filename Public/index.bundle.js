/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _ImageViewer = __webpack_require__(1);

	var _ImageViewer2 = _interopRequireDefault(_ImageViewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (typeof module != 'undefined' && module.exports) {
	    module.exports = _ImageViewer2.default;
	} else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	        return _ImageViewer2.default;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	    window.ImageViewer = _ImageViewer2.default;
	}
	window.ImageViewer = _ImageViewer2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//import defaultOptions from './DefaultOptions'
	var defaultOptions = [];

	var ImageViewer = function () {
	    function ImageViewer(element) {
	        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;

	        _classCallCheck(this, ImageViewer);

	        this.element = element;
	        this.options = options;
	        this.fullArticle = this.createFullArticle();

	        this.init();
	    }

	    _createClass(ImageViewer, [{
	        key: 'init',
	        value: function init() {
	            var element = this.element,
	                elementLength = element.length,
	                fullArticle = this.fullArticle,
	                fullArticleUl = this.fullArticle.firstElementChild;

	            this.resetSize();
	            for (var i = 0; i < elementLength; i++) {

	                element[i].onclick = function (event) {
	                    var id = event.target.getAttribute('data-imageviewer-id');

	                    fullArticle.style.display = 'flex'; //显示图片显示器
	                    fullArticleUl.style.marginLeft = '-' + id * window.innerWidth + 'px'; //定位到点击的图片
	                };
	                element[i].setAttribute('data-imageviewer-id', i);
	                fullArticleUl.innerHTML += '<li style="display: flex; justify-content: center; align-items: center; width: ' + window.innerWidth + 'px"><img src="' + element[i].src + '"/></li>';
	            }
	        }
	    }, {
	        key: 'createFullArticle',
	        value: function createFullArticle() {
	            var fullArticle = document.createElement('article'),
	                fullArticleUl = document.createElement('ul'),
	                fullArticleHeight = window.innerHeight;

	            //全屏显示
	            fullArticle.style.cssText = 'position: fixed; top: 0; left: 0;  width: 100%; height: ' + fullArticleHeight + 'px;  background: #000; display: none;';
	            fullArticleUl.style.cssText = 'list-style: none; -webkit-padding-start: 0; margin: 0; display: flex;';

	            fullArticle.appendChild(fullArticleUl);
	            document.body.appendChild(fullArticle);

	            fullArticle.onclick = function (event) {
	                fullArticle.style.display = 'none';
	            };
	            return fullArticle;
	        }
	    }, {
	        key: 'resetSize',
	        value: function resetSize() {

	            this.fullArticle.firstElementChild.addEventListener('load', function (event) {
	                event = event || window.event;
	                var target = event.target;
	                console.log(target);
	                console.log(target.width);
	                console.log(target.height);

	                if (target.width > target.height && target.width > window.innerWidth) {
	                    target.style.width = '100%';
	                    //target.style.width = window.innerWidth+"px"
	                    //return `width:  ${windiw.innerWidth}`
	                } else if (target.height > target.width && target.height > window.innerHeight) {}
	                //target.style.height = window.innerHeight+"px"
	                //return `height:  ${windiw.innerHeight}`
	                //else {
	                //   return ''
	                //}
	            }, true);
	            /*let size = this.getNaturalSize(img)
	            if (size.width > size.height && size.width > windiw.innerWidth ) {
	                return `width:  ${windiw.innerWidth}`
	            }else if (size.height > size.width && size.height > windiw.innerHeight ){
	                 return `height:  ${windiw.innerHeight}`
	            }else {
	                return ''
	            }*/
	        }
	    }, {
	        key: 'getNaturalSize',
	        value: function getNaturalSize(img) {
	            var image = new Image();
	            image.src = img.src;
	            var size = {
	                width: image.width,
	                height: image.height
	            };
	            return size;
	        }
	    }]);

	    return ImageViewer;
	}();

		exports.default = ImageViewer;

/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map