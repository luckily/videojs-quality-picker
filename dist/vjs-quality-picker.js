/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _qualityPickerButton = __webpack_require__(1);

var _qualityPickerButton2 = _interopRequireDefault(_qualityPickerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function qualityPickerPlugin() {
    var player = this;

    var SUPPORTED_TRACKS = ["video", "audio", "subtitle"];

    // On later versions `player.tech` is undefined before this...
    if (player.tech_) {
        player.tech_.on('loadedqualitydata', onQualityData);
    } else {
        player.ready(function () {
            player.tech_.on('loadedqualitydata', onQualityData);
        }, true);
    }

    function onQualityData(event, _ref) {
        var qualityData = _ref.qualityData,
            qualitySwitchCallback = _ref.qualitySwitchCallback;

        var fullscreenToggle = player.controlBar.getChild('fullscreenToggle');
        player.controlBar.removeChild(fullscreenToggle);

        for (var i = 0; i < SUPPORTED_TRACKS.length; i++) {
            var track = SUPPORTED_TRACKS[i];
            var name = track + "PickerButton";
            // videojs.utils.toTitleCase
            name = name.charAt(0).toUpperCase() + name.slice(1);

            var qualityPickerButton = player.controlBar.getChild(name);
            if (qualityPickerButton) {
                qualityPickerButton.dispose();
                player.controlBar.removeChild(qualityPickerButton);
            }

            if (qualityData[track] && qualityData[track].length > 1) {
                qualityPickerButton = new _qualityPickerButton2.default(player, { name: name, qualityList: qualityData[track], qualitySwitchCallback: qualitySwitchCallback, trackType: track });

                player.controlBar.addChild(qualityPickerButton);
            }
        }

        if (fullscreenToggle) {
            player.controlBar.addChild(fullscreenToggle);
        }
    }
}

var registerPlugin = videojs.registerPlugin || videojs.plugin;

registerPlugin('qualityPickerPlugin', qualityPickerPlugin);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _qualityMenu = __webpack_require__(2);

var _qualityMenu2 = _interopRequireDefault(_qualityMenu);

var _qualityMenuItem = __webpack_require__(3);

var _qualityMenuItem2 = _interopRequireDefault(_qualityMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VjsButton = videojs.getComponent('MenuButton');

var TRACK_CLASS = {
  video: 'vjs-icon-hd',
  audio: 'vjs-icon-cog',
  subtitle: 'vjs-icon-subtitles'
};

var QualityPickerButton = function (_VjsButton) {
  _inherits(QualityPickerButton, _VjsButton);

  function QualityPickerButton() {
    _classCallCheck(this, QualityPickerButton);

    return _possibleConstructorReturn(this, (QualityPickerButton.__proto__ || Object.getPrototypeOf(QualityPickerButton)).apply(this, arguments));
  }

  _createClass(QualityPickerButton, [{
    key: 'createMenu',
    value: function createMenu() {
      var menu = new _qualityMenu2.default(this.player, this.options_);
      var menuItem;
      var options;
      for (var i = 0; i < this.options_.qualityList.length; i++) {
        var quality = this.options_.qualityList[i];
        var _options_ = this.options_,
            qualitySwitchCallback = _options_.qualitySwitchCallback,
            trackType = _options_.trackType;

        options = _extends({ qualitySwitchCallback: qualitySwitchCallback, trackType: trackType }, quality, { selectable: true });

        menuItem = new _qualityMenuItem2.default(this.player, options);
        menu.addItem(menuItem);
      }

      return menu;
    }
  }, {
    key: 'buildCSSClass',
    value: function buildCSSClass() {
      return TRACK_CLASS[this.options_.trackType] + ' vjs-icon-placeholder ' + _get(QualityPickerButton.prototype.__proto__ || Object.getPrototypeOf(QualityPickerButton.prototype), 'buildCSSClass', this).call(this);
    }
  }]);

  return QualityPickerButton;
}(VjsButton);

exports.default = QualityPickerButton;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VjsMenu = videojs.getComponent('Menu');

var QualityMenu = function (_VjsMenu) {
  _inherits(QualityMenu, _VjsMenu);

  function QualityMenu() {
    _classCallCheck(this, QualityMenu);

    return _possibleConstructorReturn(this, (QualityMenu.__proto__ || Object.getPrototypeOf(QualityMenu)).apply(this, arguments));
  }

  _createClass(QualityMenu, [{
    key: 'addItem',
    value: function addItem(component) {
      var _this2 = this;

      _get(QualityMenu.prototype.__proto__ || Object.getPrototypeOf(QualityMenu.prototype), 'addItem', this).call(this, component);

      var switchHandler = function switchHandler() {
        var children = _this2.children();

        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          if (component !== child) {
            child.selected(false);
          }
        }
      };

      component.on('click', switchHandler);
      component.on('tap', switchHandler);
    }
  }]);

  return QualityMenu;
}(VjsMenu);

exports.default = QualityMenu;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VjsMenuItem = videojs.getComponent('MenuItem');

var QualityMenuItem = function (_VjsMenuItem) {
    _inherits(QualityMenuItem, _VjsMenuItem);

    function QualityMenuItem() {
        _classCallCheck(this, QualityMenuItem);

        return _possibleConstructorReturn(this, (QualityMenuItem.__proto__ || Object.getPrototypeOf(QualityMenuItem)).apply(this, arguments));
    }

    _createClass(QualityMenuItem, [{
        key: 'handleClick',
        value: function handleClick(event) {
            _get(QualityMenuItem.prototype.__proto__ || Object.getPrototypeOf(QualityMenuItem.prototype), 'handleClick', this).call(this, event);

            this.options_.qualitySwitchCallback(this.options_.id, this.options_.trackType);
        }
    }]);

    return QualityMenuItem;
}(VjsMenuItem);

exports.default = QualityMenuItem;

/***/ })
/******/ ]);