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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Oswald', sans-serif;\r\n  background-color: #202442;\r\n  color: #fff;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  font-size: 50px;\r\n  padding-top: 15px;\r\n}\r\n\r\n.deck-container {\r\n  margin: 20px 0;\r\n}\r\n\r\n.deck-set {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: auto;\r\n}\r\n\r\n.deck-card {\r\n  background-color: #202442;\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 5px;\r\n  width: 50px;\r\n  border: solid 1px #4e7cff;\r\n  color: #f7f7f7;\r\n  font-size: 18px;\r\n  border-radius: 12px;\r\n}\r\n\r\n.used {\r\n  background-color: #4e7cff;\r\n  color: #fff;\r\n  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),\r\n    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);\r\n}\r\n\r\n.player-board {\r\n  display: grid;\r\n  grid-template-columns: 25% 75%;\r\n  margin: auto;\r\n  width: 80%;\r\n  max-width: 800px;\r\n  min-height: 160px;\r\n  margin-top: 20px;\r\n  background-color: #2d325a;\r\n  border-radius: 40px;\r\n  padding: 10px;\r\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\r\n    0 2px 4px -1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.player-info {\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n\r\n.player-info h2 {\r\n  font-size: 30px;\r\n  margin-top: 10px;\r\n}\r\n.player-info h3 {\r\n  font-size: 55px;\r\n}\r\n\r\n.player-cards {\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.player-card {\r\n  background-color: #202442;\r\n  height: 95%;\r\n  width: 90px;\r\n  box-sizing: border-box;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 5px;\r\n  border: solid 1px #4e7cff;\r\n  color: #f7f7f7;\r\n  font-size: 18px;\r\n  border-radius: 12px;\r\n  font-size: 25px;\r\n  opacity: 1;\r\n  transition: 0.2s ease-in;\r\n}\r\n\r\n.player-card span {\r\n  transition: 0.2s ease-in;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  padding: 10px 20px;\r\n  font-size: 20px;\r\n  color: #fff;\r\n  font-family: 'Oswald', sans-serif;\r\n  font-weight: bold;\r\n  border-radius: 60px;\r\n  transition: 0.1s ease-out;\r\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\r\n    0 2px 4px -1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\nbutton:disabled {\r\n  background-color: #848484;\r\n  color: #666666;\r\n}\r\n\r\nbutton:active {\r\n  transform: scale(0.9);\r\n  box-shadow: none;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:focus {\r\n  outline: none;\r\n}\r\n\r\n.mr-2 {\r\n  margin-right: 10px;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #4e7cff;\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: #7033ff;\r\n}\r\n\r\n.btn-danger {\r\n  background-color: #e94558;\r\n}\r\n\r\n.action-bar {\r\n  padding: 10px;\r\n  /* width: 100%; */\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  /* border: solid 2px #4e7cff; */\r\n  /* background-color: #2d325a; */\r\n  /* color: black; */\r\n  bottom: 0px;\r\n}\r\n\r\n.player-info span {\r\n  position: absolute;\r\n  top: 40px;\r\n  font-size: 50px;\r\n  left: 150px;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./src/cards.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Player = /*#__PURE__*/function () {
  function Player(playerName) {
    _classCallCheck(this, Player);

    _defineProperty(this, "moves", 5);

    _defineProperty(this, "cards", []);

    _defineProperty(this, "total", 0);

    this.playerName = playerName;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(availableCards) {
      if (this.moves > 0) {
        var card = Object(_cards__WEBPACK_IMPORTED_MODULE_0__["drawCard"])(availableCards);
        this.cards.push(card);

        this._addToTotal();

        this.moves = this.moves - 1;
      }
    }
  }, {
    key: "_addToTotal",
    value: function _addToTotal() {
      var counter = 0;
      this.cards.forEach(function (c) {
        var number = c.innerHTML.slice(2).trim();

        if (['J', 'K', 'Q'].includes(number)) {
          counter = counter + 10;
        } else if (['A'].includes(number)) {
          if (counter + 11 > 21) {
            counter = counter + 1;
          } else {
            counter = counter + 11;
          }
        } else {
          counter = counter + parseInt(number);
        }
      });
      this.total = counter;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.moves = 5;
      this.total = 0;
      this.cards = [];
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/*! exports provided: getAvailableCards, drawCard, resetCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableCards", function() { return getAvailableCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCard", function() { return drawCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCards", function() { return resetCards; });
var getAvailableCards = function getAvailableCards(cards) {
  var avaibleCards = [];
  cards === null || cards === void 0 ? void 0 : cards.forEach(function (c) {
    if (!c.classList.contains('used')) {
      avaibleCards.push(c);
    }
  });
  return avaibleCards;
};
var drawCard = function drawCard(avaibleCards) {
  var randomNumber = Math.floor(Math.random() * (avaibleCards.length - 1)) + 1;
  var card = avaibleCards[randomNumber];
  card.classList.add('used');
  avaibleCards = getAvailableCards();
  return card;
};
var resetCards = function resetCards(cards) {
  cards === null || cards === void 0 ? void 0 : cards.forEach(function (c) {
    if (c.classList.contains('used')) {
      c.classList.remove('used');
    }
  });
};

/***/ }),

/***/ "./src/deck.js":
/*!*********************!*\
  !*** ./src/deck.js ***!
  \*********************/
/*! exports provided: createDeck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeck", function() { return createDeck; });
var symbols = ['⚡️', '🚀', '✨', '🌈'];
var createDeck = function createDeck() {
  var deckNode = document.createElement('div');
  deckNode.classList.add('deck-container');
  symbols.forEach(function (symbol) {
    var node = document.createElement('div');
    node.classList.add('deck-set');

    for (var i = 2; i < 15; i++) {
      var cardNode = document.createElement('div');
      cardNode.classList.add('deck-card');

      switch (i) {
        case 11:
          cardNode.innerHTML = "".concat(symbol, " J");
          break;

        case 12:
          cardNode.innerHTML = "".concat(symbol, " Q");
          break;

        case 13:
          cardNode.innerHTML = "".concat(symbol, " K");
          break;

        case 14:
          cardNode.innerHTML = "".concat(symbol, " A");
          break;

        default:
          cardNode.innerHTML = "".concat(symbol, " ").concat(i);
          break;
      }

      node.appendChild(cardNode);
    }

    deckNode.appendChild(node);
  });
  return deckNode;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck */ "./src/deck.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards */ "./src/cards.js");




var app = document.getElementById('app');
var deck = Object(_deck__WEBPACK_IMPORTED_MODULE_0__["createDeck"])();
var player1 = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"]('player1');
var dealer = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"]('dealer');
var hitButton = document.getElementById('hit');
var newGameButton = document.getElementById('newGame');
var standButton = document.getElementById('standButton');
var playerScore = document.getElementById('playerScore');
var dealerScore = document.getElementById('dealerScore');

var drawPlayerCard = function drawPlayerCard(player) {
  var cards = document.querySelectorAll('.deck-card');
  var availableCards = Object(_cards__WEBPACK_IMPORTED_MODULE_3__["getAvailableCards"])(cards);

  if (player === 'player1') {
    player1.draw(availableCards);
    playerScore.innerText = "".concat(player1.total);
    var playerCards = document.getElementById('playerCards');
    var lastCard = player1.cards[player1.cards.length - 1];
    var span = document.createElement('span');
    span.innerHTML = lastCard.innerHTML;
    var div = playerCards.children[player1.cards.length - 1];
    div.appendChild(span);
    handleWin();
  } else {
    dealer.draw(availableCards);
    dealerScore.innerText = "".concat(dealer.total);
    var dealerCards = document.getElementById('dealerCards');
    var _lastCard = dealer.cards[dealer.cards.length - 1];

    var _span = document.createElement('span');

    _span.innerHTML = _lastCard.innerHTML;
    var _div = dealerCards.children[dealer.cards.length - 1];

    _div.appendChild(_span);

    handleWin();
  }
};

hitButton.addEventListener('click', function () {
  return drawPlayerCard('player1');
});
app.appendChild(deck);

var resetBoard = function resetBoard() {
  var playerCards = document.getElementById('playerCards');
  Array.from(playerCards.children).forEach(function (element) {
    element.innerHTML = '';
  });
  var dealerCards = document.getElementById('dealerCards');
  Array.from(dealerCards.children).forEach(function (element) {
    element.innerHTML = '';
  });
};

var newGame = function newGame() {
  var isPlayer = false;
  var counter = 0;
  player1.reset();
  dealer.reset();
  hitButton.removeAttribute('disabled');
  standButton.removeAttribute('disabled');
  document.getElementById('dealerInfo').style.color = '#fff';
  document.getElementById('playerInfo').style.color = '#fff';
  Object(_cards__WEBPACK_IMPORTED_MODULE_3__["resetCards"])(document.querySelectorAll('.deck-card'));
  resetBoard();
  dealerScore.innerText = '0';
  playerScore.innerText = '0';

  for (var i = 1; i < 5; i++) {
    setTimeout(function () {
      if (isPlayer) {
        drawPlayerCard('player1');
        isPlayer = false;
      } else {
        drawPlayerCard('dealer');
        isPlayer = true;
      }
    }, counter += 500);
  }

  clearTimeout();
};

var playerWin = function playerWin(player) {
  disableButtons();
  var span = document.createElement('span');
  span.innerHTML = '🎉';

  if (player === 'player1') {
    document.getElementById('playerInfo').style.color = '#39d039';
  } else {
    document.getElementById('dealerInfo').style.color = '#39d039';
  }
};

var disableButtons = function disableButtons() {
  hitButton.setAttribute('disabled', true);
  standButton.setAttribute('disabled', true);
};

var stand = function stand() {
  if (dealer.total > player1.total && dealer.total < 21) {
    playerWin('dealer');
    return;
  }

  if (player1.total > dealer.total) {
    drawPlayerCard('dealer');
    stand();
  }

  handleWin();
};

var handleWin = function handleWin() {
  var player1Total = player1.total;
  var dealerTotal = dealer.total;

  if (player1.cards.length === 5) {
    playerWin('player1');
  }

  if (dealerTotal === 21) {
    playerWin('dealer');
  }

  if (player1Total === 21) {
    playerWin('player1');
  }

  if (player1Total > 21) {
    playerWin('dealer');
  }

  if (dealerTotal > 21) {
    playerWin('player1');
  }

  if (dealerTotal === player1Total) {
    disableButtons();
  }
};

standButton.addEventListener('click', stand);
newGameButton.addEventListener('click', newGame);
newGame();

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/ZGRkMyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJwbGF5ZXJOYW1lIiwiYXZhaWxhYmxlQ2FyZHMiLCJtb3ZlcyIsImNhcmQiLCJkcmF3Q2FyZCIsImNhcmRzIiwicHVzaCIsIl9hZGRUb1RvdGFsIiwiY291bnRlciIsImZvckVhY2giLCJjIiwibnVtYmVyIiwiaW5uZXJIVE1MIiwic2xpY2UiLCJ0cmltIiwiaW5jbHVkZXMiLCJwYXJzZUludCIsInRvdGFsIiwiZ2V0QXZhaWxhYmxlQ2FyZHMiLCJhdmFpYmxlQ2FyZHMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImFkZCIsInJlc2V0Q2FyZHMiLCJyZW1vdmUiLCJzeW1ib2xzIiwiY3JlYXRlRGVjayIsImRlY2tOb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3ltYm9sIiwibm9kZSIsImkiLCJjYXJkTm9kZSIsImFwcGVuZENoaWxkIiwiYXBwIiwiZ2V0RWxlbWVudEJ5SWQiLCJkZWNrIiwicGxheWVyMSIsImRlYWxlciIsImhpdEJ1dHRvbiIsIm5ld0dhbWVCdXR0b24iLCJzdGFuZEJ1dHRvbiIsInBsYXllclNjb3JlIiwiZGVhbGVyU2NvcmUiLCJkcmF3UGxheWVyQ2FyZCIsInBsYXllciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkcmF3IiwiaW5uZXJUZXh0IiwicGxheWVyQ2FyZHMiLCJsYXN0Q2FyZCIsInNwYW4iLCJkaXYiLCJjaGlsZHJlbiIsImhhbmRsZVdpbiIsImRlYWxlckNhcmRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2V0Qm9hcmQiLCJBcnJheSIsImZyb20iLCJlbGVtZW50IiwibmV3R2FtZSIsImlzUGxheWVyIiwicmVzZXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzdHlsZSIsImNvbG9yIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInBsYXllcldpbiIsImRpc2FibGVCdXR0b25zIiwic2V0QXR0cmlidXRlIiwic3RhbmQiLCJwbGF5ZXIxVG90YWwiLCJkZWFsZXJUb3RhbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsTUFBTSxnQkFBZ0IsaUJBQWlCLEtBQUssY0FBYyx3Q0FBd0MsZ0NBQWdDLGtCQUFrQixLQUFLLGdCQUFnQix5QkFBeUIsc0JBQXNCLHdCQUF3QixLQUFLLHlCQUF5QixxQkFBcUIsS0FBSyxtQkFBbUIseUJBQXlCLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQixtQkFBbUIsS0FBSyxvQkFBb0IsZ0NBQWdDLG1CQUFtQixvQkFBb0IsOEJBQThCLDBCQUEwQixrQkFBa0Isa0JBQWtCLGdDQUFnQyxxQkFBcUIsc0JBQXNCLDBCQUEwQixLQUFLLGVBQWUsZ0NBQWdDLGtCQUFrQiw0SUFBNEksS0FBSyx1QkFBdUIsb0JBQW9CLHFDQUFxQyxtQkFBbUIsaUJBQWlCLHVCQUF1Qix3QkFBd0IsdUJBQXVCLGdDQUFnQywwQkFBMEIsb0JBQW9CLDhIQUE4SCxLQUFLLHNCQUFzQix5QkFBeUIseUJBQXlCLEtBQUsseUJBQXlCLHNCQUFzQix1QkFBdUIsS0FBSyxxQkFBcUIsc0JBQXNCLEtBQUssdUJBQXVCLHlCQUF5QixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLHNCQUFzQixnQ0FBZ0Msa0JBQWtCLGtCQUFrQiw2QkFBNkIsMkJBQTJCLDhCQUE4QiwwQkFBMEIsa0JBQWtCLGdDQUFnQyxxQkFBcUIsc0JBQXNCLDBCQUEwQixzQkFBc0IsaUJBQWlCLCtCQUErQixLQUFLLDJCQUEyQiwrQkFBK0IsS0FBSyxnQkFBZ0IsbUJBQW1CLHlDQUF5Qyx5QkFBeUIsc0JBQXNCLGtCQUFrQix3Q0FBd0Msd0JBQXdCLDBCQUEwQixnQ0FBZ0MsOEhBQThILEtBQUsseUJBQXlCLGdDQUFnQyxxQkFBcUIsS0FBSyx1QkFBdUIsNEJBQTRCLHVCQUF1QixLQUFLLHNCQUFzQixzQkFBc0IsS0FBSyxzQkFBc0Isb0JBQW9CLEtBQUssZUFBZSx5QkFBeUIsS0FBSyxzQkFBc0IsZ0NBQWdDLEtBQUssd0JBQXdCLGdDQUFnQyxLQUFLLHFCQUFxQixnQ0FBZ0MsS0FBSyxxQkFBcUIsb0JBQW9CLHFCQUFxQix1QkFBdUIsOEJBQThCLDBCQUEwQixtQ0FBbUMsc0NBQXNDLHlCQUF5QixxQkFBcUIsS0FBSywyQkFBMkIseUJBQXlCLGdCQUFnQixzQkFBc0Isa0JBQWtCLEtBQUs7QUFDeDFHO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVFBOztJQUVNQSxNO0FBS0osa0JBQVlDLFVBQVosRUFBd0I7QUFBQTs7QUFBQSxtQ0FKaEIsQ0FJZ0I7O0FBQUEsbUNBSGhCLEVBR2dCOztBQUFBLG1DQUZoQixDQUVnQjs7QUFDdEIsU0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7Ozt5QkFFSUMsYyxFQUFnQjtBQUNuQixVQUFJLEtBQUtDLEtBQUwsR0FBYSxDQUFqQixFQUFvQjtBQUNsQixZQUFNQyxJQUFJLEdBQUdDLHVEQUFRLENBQUNILGNBQUQsQ0FBckI7QUFDQSxhQUFLSSxLQUFMLENBQVdDLElBQVgsQ0FBZ0JILElBQWhCOztBQUNBLGFBQUtJLFdBQUw7O0FBQ0EsYUFBS0wsS0FBTCxHQUFhLEtBQUtBLEtBQUwsR0FBYSxDQUExQjtBQUNEO0FBQ0Y7OztrQ0FFYTtBQUNaLFVBQUlNLE9BQU8sR0FBRyxDQUFkO0FBQ0EsV0FBS0gsS0FBTCxDQUFXSSxPQUFYLENBQW1CLFVBQUNDLENBQUQsRUFBTztBQUN4QixZQUFNQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0UsU0FBRixDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCQyxJQUFyQixFQUFmOztBQUVBLFlBQUksQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0JDLFFBQWhCLENBQXlCSixNQUF6QixDQUFKLEVBQXNDO0FBQ3BDSCxpQkFBTyxHQUFHQSxPQUFPLEdBQUcsRUFBcEI7QUFDRCxTQUZELE1BRU8sSUFBSSxDQUFDLEdBQUQsRUFBTU8sUUFBTixDQUFlSixNQUFmLENBQUosRUFBNEI7QUFDakMsY0FBSUgsT0FBTyxHQUFHLEVBQVYsR0FBZSxFQUFuQixFQUF1QjtBQUNyQkEsbUJBQU8sR0FBR0EsT0FBTyxHQUFHLENBQXBCO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLG1CQUFPLEdBQUdBLE9BQU8sR0FBRyxFQUFwQjtBQUNEO0FBQ0YsU0FOTSxNQU1BO0FBQ0xBLGlCQUFPLEdBQUdBLE9BQU8sR0FBR1EsUUFBUSxDQUFDTCxNQUFELENBQTVCO0FBQ0Q7QUFDRixPQWREO0FBZUEsV0FBS00sS0FBTCxHQUFhVCxPQUFiO0FBQ0Q7Ozs0QkFFTztBQUNOLFdBQUtOLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS2UsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLWixLQUFMLEdBQWEsRUFBYjtBQUNEOzs7Ozs7QUFHWU4scUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTW1CLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ2IsS0FBRCxFQUFXO0FBQzFDLE1BQU1jLFlBQVksR0FBRyxFQUFyQjtBQUNBZCxPQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLFlBQUFBLEtBQUssQ0FBRUksT0FBUCxDQUFlLFVBQUNDLENBQUQsRUFBTztBQUNwQixRQUFJLENBQUNBLENBQUMsQ0FBQ1UsU0FBRixDQUFZQyxRQUFaLENBQXFCLE1BQXJCLENBQUwsRUFBbUM7QUFDakNGLGtCQUFZLENBQUNiLElBQWIsQ0FBa0JJLENBQWxCO0FBQ0Q7QUFDRixHQUpEO0FBS0EsU0FBT1MsWUFBUDtBQUNELENBUk07QUFVQSxJQUFNZixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDZSxZQUFELEVBQWtCO0FBQ3hDLE1BQU1HLFlBQVksR0FDaEJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJOLFlBQVksQ0FBQ08sTUFBYixHQUFzQixDQUF2QyxDQUFYLElBQXdELENBRDFEO0FBRUEsTUFBTXZCLElBQUksR0FBR2dCLFlBQVksQ0FBQ0csWUFBRCxDQUF6QjtBQUNBbkIsTUFBSSxDQUFDaUIsU0FBTCxDQUFlTyxHQUFmLENBQW1CLE1BQW5CO0FBQ0FSLGNBQVksR0FBR0QsaUJBQWlCLEVBQWhDO0FBQ0EsU0FBT2YsSUFBUDtBQUNELENBUE07QUFTQSxJQUFNeUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ3ZCLEtBQUQsRUFBVztBQUNuQ0EsT0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUVJLE9BQVAsQ0FBZSxVQUFDQyxDQUFELEVBQU87QUFDcEIsUUFBSUEsQ0FBQyxDQUFDVSxTQUFGLENBQVlDLFFBQVosQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztBQUNoQ1gsT0FBQyxDQUFDVSxTQUFGLENBQVlTLE1BQVosQ0FBbUIsTUFBbkI7QUFDRDtBQUNGLEdBSkQ7QUFLRCxDQU5NLEM7Ozs7Ozs7Ozs7OztBQ25CUDtBQUFBO0FBQUEsSUFBTUMsT0FBTyxHQUFHLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxHQUFiLEVBQWtCLElBQWxCLENBQWhCO0FBRU8sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUM5QixNQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBRixVQUFRLENBQUNaLFNBQVQsQ0FBbUJPLEdBQW5CLENBQXVCLGdCQUF2QjtBQUNBRyxTQUFPLENBQUNyQixPQUFSLENBQWdCLFVBQUMwQixNQUFELEVBQVk7QUFDMUIsUUFBTUMsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBRSxRQUFJLENBQUNoQixTQUFMLENBQWVPLEdBQWYsQ0FBbUIsVUFBbkI7O0FBQ0EsU0FBSyxJQUFJVSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCLFVBQU1DLFFBQVEsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWpCO0FBQ0FJLGNBQVEsQ0FBQ2xCLFNBQVQsQ0FBbUJPLEdBQW5CLENBQXVCLFdBQXZCOztBQUNBLGNBQVFVLENBQVI7QUFDRSxhQUFLLEVBQUw7QUFDRUMsa0JBQVEsQ0FBQzFCLFNBQVQsYUFBd0J1QixNQUF4QjtBQUNBOztBQUVGLGFBQUssRUFBTDtBQUNFRyxrQkFBUSxDQUFDMUIsU0FBVCxhQUF3QnVCLE1BQXhCO0FBQ0E7O0FBRUYsYUFBSyxFQUFMO0FBQ0VHLGtCQUFRLENBQUMxQixTQUFULGFBQXdCdUIsTUFBeEI7QUFDQTs7QUFFRixhQUFLLEVBQUw7QUFDRUcsa0JBQVEsQ0FBQzFCLFNBQVQsYUFBd0J1QixNQUF4QjtBQUNBOztBQUVGO0FBQ0VHLGtCQUFRLENBQUMxQixTQUFULGFBQXdCdUIsTUFBeEIsY0FBa0NFLENBQWxDO0FBQ0E7QUFuQko7O0FBc0JBRCxVQUFJLENBQUNHLFdBQUwsQ0FBaUJELFFBQWpCO0FBQ0Q7O0FBQ0ROLFlBQVEsQ0FBQ08sV0FBVCxDQUFxQkgsSUFBckI7QUFDRCxHQS9CRDtBQWdDQSxTQUFPSixRQUFQO0FBQ0QsQ0FwQ00sQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1RLEdBQUcsR0FBR1AsUUFBUSxDQUFDUSxjQUFULENBQXdCLEtBQXhCLENBQVo7QUFDUCxJQUFNQyxJQUFJLEdBQUdYLHdEQUFVLEVBQXZCO0FBRUEsSUFBTVksT0FBTyxHQUFHLElBQUk1QywrQ0FBSixDQUFXLFNBQVgsQ0FBaEI7QUFDQSxJQUFNNkMsTUFBTSxHQUFHLElBQUk3QywrQ0FBSixDQUFXLFFBQVgsQ0FBZjtBQUVBLElBQU04QyxTQUFTLEdBQUdaLFFBQVEsQ0FBQ1EsY0FBVCxDQUF3QixLQUF4QixDQUFsQjtBQUNBLElBQU1LLGFBQWEsR0FBR2IsUUFBUSxDQUFDUSxjQUFULENBQXdCLFNBQXhCLENBQXRCO0FBQ0EsSUFBTU0sV0FBVyxHQUFHZCxRQUFRLENBQUNRLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7QUFFQSxJQUFNTyxXQUFXLEdBQUdmLFFBQVEsQ0FBQ1EsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBLElBQU1RLFdBQVcsR0FBR2hCLFFBQVEsQ0FBQ1EsY0FBVCxDQUF3QixhQUF4QixDQUFwQjs7QUFFQSxJQUFNUyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLE1BQUQsRUFBWTtBQUNqQyxNQUFNOUMsS0FBSyxHQUFHNEIsUUFBUSxDQUFDbUIsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBZDtBQUNBLE1BQU1uRCxjQUFjLEdBQUdpQixnRUFBaUIsQ0FBQ2IsS0FBRCxDQUF4Qzs7QUFFQSxNQUFJOEMsTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDeEJSLFdBQU8sQ0FBQ1UsSUFBUixDQUFhcEQsY0FBYjtBQUNBK0MsZUFBVyxDQUFDTSxTQUFaLGFBQTJCWCxPQUFPLENBQUMxQixLQUFuQztBQUNBLFFBQU1zQyxXQUFXLEdBQUd0QixRQUFRLENBQUNRLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7QUFDQSxRQUFNZSxRQUFRLEdBQUdiLE9BQU8sQ0FBQ3RDLEtBQVIsQ0FBY3NDLE9BQU8sQ0FBQ3RDLEtBQVIsQ0FBY3FCLE1BQWQsR0FBdUIsQ0FBckMsQ0FBakI7QUFDQSxRQUFNK0IsSUFBSSxHQUFHeEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQXVCLFFBQUksQ0FBQzdDLFNBQUwsR0FBaUI0QyxRQUFRLENBQUM1QyxTQUExQjtBQUNBLFFBQU04QyxHQUFHLEdBQUdILFdBQVcsQ0FBQ0ksUUFBWixDQUFxQmhCLE9BQU8sQ0FBQ3RDLEtBQVIsQ0FBY3FCLE1BQWQsR0FBdUIsQ0FBNUMsQ0FBWjtBQUNBZ0MsT0FBRyxDQUFDbkIsV0FBSixDQUFnQmtCLElBQWhCO0FBQ0FHLGFBQVM7QUFDVixHQVZELE1BVU87QUFDTGhCLFVBQU0sQ0FBQ1MsSUFBUCxDQUFZcEQsY0FBWjtBQUNBZ0QsZUFBVyxDQUFDSyxTQUFaLGFBQTJCVixNQUFNLENBQUMzQixLQUFsQztBQUVBLFFBQU00QyxXQUFXLEdBQUc1QixRQUFRLENBQUNRLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7QUFDQSxRQUFNZSxTQUFRLEdBQUdaLE1BQU0sQ0FBQ3ZDLEtBQVAsQ0FBYXVDLE1BQU0sQ0FBQ3ZDLEtBQVAsQ0FBYXFCLE1BQWIsR0FBc0IsQ0FBbkMsQ0FBakI7O0FBQ0EsUUFBTStCLEtBQUksR0FBR3hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztBQUNBdUIsU0FBSSxDQUFDN0MsU0FBTCxHQUFpQjRDLFNBQVEsQ0FBQzVDLFNBQTFCO0FBQ0EsUUFBTThDLElBQUcsR0FBR0csV0FBVyxDQUFDRixRQUFaLENBQXFCZixNQUFNLENBQUN2QyxLQUFQLENBQWFxQixNQUFiLEdBQXNCLENBQTNDLENBQVo7O0FBQ0FnQyxRQUFHLENBQUNuQixXQUFKLENBQWdCa0IsS0FBaEI7O0FBQ0FHLGFBQVM7QUFDVjtBQUNGLENBMUJEOztBQTRCQWYsU0FBUyxDQUFDaUIsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0M7QUFBQSxTQUFNWixjQUFjLENBQUMsU0FBRCxDQUFwQjtBQUFBLENBQXBDO0FBRUFWLEdBQUcsQ0FBQ0QsV0FBSixDQUFnQkcsSUFBaEI7O0FBRUEsSUFBTXFCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsTUFBTVIsV0FBVyxHQUFHdEIsUUFBUSxDQUFDUSxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0F1QixPQUFLLENBQUNDLElBQU4sQ0FBV1YsV0FBVyxDQUFDSSxRQUF2QixFQUFpQ2xELE9BQWpDLENBQXlDLFVBQUN5RCxPQUFELEVBQWE7QUFDcERBLFdBQU8sQ0FBQ3RELFNBQVIsR0FBb0IsRUFBcEI7QUFDRCxHQUZEO0FBR0EsTUFBTWlELFdBQVcsR0FBRzVCLFFBQVEsQ0FBQ1EsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBdUIsT0FBSyxDQUFDQyxJQUFOLENBQVdKLFdBQVcsQ0FBQ0YsUUFBdkIsRUFBaUNsRCxPQUFqQyxDQUF5QyxVQUFDeUQsT0FBRCxFQUFhO0FBQ3BEQSxXQUFPLENBQUN0RCxTQUFSLEdBQW9CLEVBQXBCO0FBQ0QsR0FGRDtBQUdELENBVEQ7O0FBV0EsSUFBTXVELE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsTUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFDQSxNQUFJNUQsT0FBTyxHQUFHLENBQWQ7QUFDQW1DLFNBQU8sQ0FBQzBCLEtBQVI7QUFDQXpCLFFBQU0sQ0FBQ3lCLEtBQVA7QUFDQXhCLFdBQVMsQ0FBQ3lCLGVBQVYsQ0FBMEIsVUFBMUI7QUFDQXZCLGFBQVcsQ0FBQ3VCLGVBQVosQ0FBNEIsVUFBNUI7QUFDQXJDLFVBQVEsQ0FBQ1EsY0FBVCxDQUF3QixZQUF4QixFQUFzQzhCLEtBQXRDLENBQTRDQyxLQUE1QyxHQUFvRCxNQUFwRDtBQUNBdkMsVUFBUSxDQUFDUSxjQUFULENBQXdCLFlBQXhCLEVBQXNDOEIsS0FBdEMsQ0FBNENDLEtBQTVDLEdBQW9ELE1BQXBEO0FBQ0E1QywyREFBVSxDQUFDSyxRQUFRLENBQUNtQixnQkFBVCxDQUEwQixZQUExQixDQUFELENBQVY7QUFDQVcsWUFBVTtBQUNWZCxhQUFXLENBQUNLLFNBQVosR0FBd0IsR0FBeEI7QUFDQU4sYUFBVyxDQUFDTSxTQUFaLEdBQXdCLEdBQXhCOztBQUNBLE9BQUssSUFBSWpCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJvQyxjQUFVLENBQUMsWUFBTTtBQUNmLFVBQUlMLFFBQUosRUFBYztBQUNabEIsc0JBQWMsQ0FBQyxTQUFELENBQWQ7QUFDQWtCLGdCQUFRLEdBQUcsS0FBWDtBQUNELE9BSEQsTUFHTztBQUNMbEIsc0JBQWMsQ0FBQyxRQUFELENBQWQ7QUFDQWtCLGdCQUFRLEdBQUcsSUFBWDtBQUNEO0FBQ0YsS0FSUyxFQVFONUQsT0FBTyxJQUFJLEdBUkwsQ0FBVjtBQVNEOztBQUNEa0UsY0FBWTtBQUNiLENBekJEOztBQTJCQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDeEIsTUFBRCxFQUFZO0FBQzVCeUIsZ0JBQWM7QUFDZCxNQUFNbkIsSUFBSSxHQUFHeEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQXVCLE1BQUksQ0FBQzdDLFNBQUwsR0FBaUIsSUFBakI7O0FBQ0EsTUFBSXVDLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ3hCbEIsWUFBUSxDQUFDUSxjQUFULENBQXdCLFlBQXhCLEVBQXNDOEIsS0FBdEMsQ0FBNENDLEtBQTVDLEdBQW9ELFNBQXBEO0FBQ0QsR0FGRCxNQUVPO0FBQ0x2QyxZQUFRLENBQUNRLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0M4QixLQUF0QyxDQUE0Q0MsS0FBNUMsR0FBb0QsU0FBcEQ7QUFDRDtBQUNGLENBVEQ7O0FBV0EsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCL0IsV0FBUyxDQUFDZ0MsWUFBVixDQUF1QixVQUF2QixFQUFtQyxJQUFuQztBQUNBOUIsYUFBVyxDQUFDOEIsWUFBWixDQUF5QixVQUF6QixFQUFxQyxJQUFyQztBQUNELENBSEQ7O0FBS0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixNQUFJbEMsTUFBTSxDQUFDM0IsS0FBUCxHQUFlMEIsT0FBTyxDQUFDMUIsS0FBdkIsSUFBZ0MyQixNQUFNLENBQUMzQixLQUFQLEdBQWUsRUFBbkQsRUFBdUQ7QUFDckQwRCxhQUFTLENBQUMsUUFBRCxDQUFUO0FBQ0E7QUFDRDs7QUFFRCxNQUFJaEMsT0FBTyxDQUFDMUIsS0FBUixHQUFnQjJCLE1BQU0sQ0FBQzNCLEtBQTNCLEVBQWtDO0FBQ2hDaUMsa0JBQWMsQ0FBQyxRQUFELENBQWQ7QUFDQTRCLFNBQUs7QUFDTjs7QUFFRGxCLFdBQVM7QUFDVixDQVpEOztBQWNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsTUFBTW1CLFlBQVksR0FBR3BDLE9BQU8sQ0FBQzFCLEtBQTdCO0FBQ0EsTUFBTStELFdBQVcsR0FBR3BDLE1BQU0sQ0FBQzNCLEtBQTNCOztBQUVBLE1BQUkwQixPQUFPLENBQUN0QyxLQUFSLENBQWNxQixNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQzlCaUQsYUFBUyxDQUFDLFNBQUQsQ0FBVDtBQUNEOztBQUVELE1BQUlLLFdBQVcsS0FBSyxFQUFwQixFQUF3QjtBQUN0QkwsYUFBUyxDQUFDLFFBQUQsQ0FBVDtBQUNEOztBQUVELE1BQUlJLFlBQVksS0FBSyxFQUFyQixFQUF5QjtBQUN2QkosYUFBUyxDQUFDLFNBQUQsQ0FBVDtBQUNEOztBQUVELE1BQUlJLFlBQVksR0FBRyxFQUFuQixFQUF1QjtBQUNyQkosYUFBUyxDQUFDLFFBQUQsQ0FBVDtBQUNEOztBQUVELE1BQUlLLFdBQVcsR0FBRyxFQUFsQixFQUFzQjtBQUNwQkwsYUFBUyxDQUFDLFNBQUQsQ0FBVDtBQUNEOztBQUVELE1BQUlLLFdBQVcsS0FBS0QsWUFBcEIsRUFBa0M7QUFDaENILGtCQUFjO0FBQ2Y7QUFDRixDQTNCRDs7QUE2QkE3QixXQUFXLENBQUNlLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDZ0IsS0FBdEM7QUFDQWhDLGFBQWEsQ0FBQ2dCLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDSyxPQUF4QztBQUVBQSxPQUFPLEc7Ozs7Ozs7Ozs7O0FDdEpQLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsZ0hBQXFEOztBQUV2Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyNDQyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlY2stY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVjay1zZXQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVjay1jYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDI0NDI7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICM0ZTdjZmY7XFxyXFxuICBjb2xvcjogI2Y3ZjdmNztcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi51c2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTdjZmY7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTNweCAyN3B4IC01cHggcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSxcXHJcXG4gICAgMCA4cHggMTZweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAtNnB4IDE2cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1heC13aWR0aDogODAwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiAxNjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMjVhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcXHJcXG4gICAgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLWluZm8ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLWluZm8gaDIge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuLnBsYXllci1pbmZvIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogNTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1jYXJkcyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLWNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjQ0MjtcXHJcXG4gIGhlaWdodDogOTUlO1xcclxcbiAgd2lkdGg6IDkwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICM0ZTdjZmY7XFxyXFxuICBjb2xvcjogI2Y3ZjdmNztcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLWNhcmQgc3BhbiB7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksXFxyXFxuICAgIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmRpc2FibGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDg0ODQ7XFxyXFxuICBjb2xvcjogIzY2NjY2NjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1yLTIge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByaW1hcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlN2NmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1zZWNvbmRhcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwMzNmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1kYW5nZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5NDU1ODtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1iYXIge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC8qIGJvcmRlcjogc29saWQgMnB4ICM0ZTdjZmY7ICovXFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMjVhOyAqL1xcclxcbiAgLyogY29sb3I6IGJsYWNrOyAqL1xcclxcbiAgYm90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItaW5mbyBzcGFuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIGxlZnQ6IDE1MHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgZHJhd0NhcmQgfSBmcm9tICcuL2NhcmRzJztcclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgbW92ZXMgPSA1O1xyXG4gIGNhcmRzID0gW107XHJcbiAgdG90YWwgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwbGF5ZXJOYW1lKSB7XHJcbiAgICB0aGlzLnBsYXllck5hbWUgPSBwbGF5ZXJOYW1lO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhhdmFpbGFibGVDYXJkcykge1xyXG4gICAgaWYgKHRoaXMubW92ZXMgPiAwKSB7XHJcbiAgICAgIGNvbnN0IGNhcmQgPSBkcmF3Q2FyZChhdmFpbGFibGVDYXJkcyk7XHJcbiAgICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcclxuICAgICAgdGhpcy5fYWRkVG9Ub3RhbCgpO1xyXG4gICAgICB0aGlzLm1vdmVzID0gdGhpcy5tb3ZlcyAtIDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYWRkVG9Ub3RhbCgpIHtcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgIHRoaXMuY2FyZHMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICBjb25zdCBudW1iZXIgPSBjLmlubmVySFRNTC5zbGljZSgyKS50cmltKCk7XHJcblxyXG4gICAgICBpZiAoWydKJywgJ0snLCAnUSddLmluY2x1ZGVzKG51bWJlcikpIHtcclxuICAgICAgICBjb3VudGVyID0gY291bnRlciArIDEwO1xyXG4gICAgICB9IGVsc2UgaWYgKFsnQSddLmluY2x1ZGVzKG51bWJlcikpIHtcclxuICAgICAgICBpZiAoY291bnRlciArIDExID4gMjEpIHtcclxuICAgICAgICAgIGNvdW50ZXIgPSBjb3VudGVyICsgMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY291bnRlciA9IGNvdW50ZXIgKyAxMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY291bnRlciA9IGNvdW50ZXIgKyBwYXJzZUludChudW1iZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudG90YWwgPSBjb3VudGVyO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLm1vdmVzID0gNTtcclxuICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgdGhpcy5jYXJkcyA9IFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0QXZhaWxhYmxlQ2FyZHMgPSAoY2FyZHMpID0+IHtcclxuICBjb25zdCBhdmFpYmxlQ2FyZHMgPSBbXTtcclxuICBjYXJkcz8uZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgaWYgKCFjLmNsYXNzTGlzdC5jb250YWlucygndXNlZCcpKSB7XHJcbiAgICAgIGF2YWlibGVDYXJkcy5wdXNoKGMpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBhdmFpYmxlQ2FyZHM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0NhcmQgPSAoYXZhaWJsZUNhcmRzKSA9PiB7XHJcbiAgY29uc3QgcmFuZG9tTnVtYmVyID1cclxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhdmFpYmxlQ2FyZHMubGVuZ3RoIC0gMSkpICsgMTtcclxuICBjb25zdCBjYXJkID0gYXZhaWJsZUNhcmRzW3JhbmRvbU51bWJlcl07XHJcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCd1c2VkJyk7XHJcbiAgYXZhaWJsZUNhcmRzID0gZ2V0QXZhaWxhYmxlQ2FyZHMoKTtcclxuICByZXR1cm4gY2FyZDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldENhcmRzID0gKGNhcmRzKSA9PiB7XHJcbiAgY2FyZHM/LmZvckVhY2goKGMpID0+IHtcclxuICAgIGlmIChjLmNsYXNzTGlzdC5jb250YWlucygndXNlZCcpKSB7XHJcbiAgICAgIGMuY2xhc3NMaXN0LnJlbW92ZSgndXNlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iLCJjb25zdCBzeW1ib2xzID0gWyfimqHvuI8nLCAn8J+agCcsICfinKgnLCAn8J+MiCddO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlY2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGVja05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkZWNrTm9kZS5jbGFzc0xpc3QuYWRkKCdkZWNrLWNvbnRhaW5lcicpO1xyXG4gIHN5bWJvbHMuZm9yRWFjaCgoc3ltYm9sKSA9PiB7XHJcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2RlY2stc2V0Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IDE1OyBpKyspIHtcclxuICAgICAgY29uc3QgY2FyZE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY2FyZE5vZGUuY2xhc3NMaXN0LmFkZCgnZGVjay1jYXJkJyk7XHJcbiAgICAgIHN3aXRjaCAoaSkge1xyXG4gICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICBjYXJkTm9kZS5pbm5lckhUTUwgPSBgJHtzeW1ib2x9IEpgO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICBjYXJkTm9kZS5pbm5lckhUTUwgPSBgJHtzeW1ib2x9IFFgO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICBjYXJkTm9kZS5pbm5lckhUTUwgPSBgJHtzeW1ib2x9IEtgO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICBjYXJkTm9kZS5pbm5lckhUTUwgPSBgJHtzeW1ib2x9IEFgO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjYXJkTm9kZS5pbm5lckhUTUwgPSBgJHtzeW1ib2x9ICR7aX1gO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2FyZE5vZGUpO1xyXG4gICAgfVxyXG4gICAgZGVja05vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGRlY2tOb2RlO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVEZWNrIH0gZnJvbSAnLi9kZWNrJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCAnLi9tYWluLmNzcyc7XHJcbmltcG9ydCB7IGdldEF2YWlsYWJsZUNhcmRzLCByZXNldENhcmRzIH0gZnJvbSAnLi9jYXJkcyc7XHJcblxyXG5leHBvcnQgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG5jb25zdCBkZWNrID0gY3JlYXRlRGVjaygpO1xyXG5cclxuY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXIoJ3BsYXllcjEnKTtcclxuY29uc3QgZGVhbGVyID0gbmV3IFBsYXllcignZGVhbGVyJyk7XHJcblxyXG5jb25zdCBoaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGl0Jyk7XHJcbmNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3R2FtZScpO1xyXG5jb25zdCBzdGFuZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFuZEJ1dHRvbicpO1xyXG5cclxuY29uc3QgcGxheWVyU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2NvcmUnKTtcclxuY29uc3QgZGVhbGVyU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVhbGVyU2NvcmUnKTtcclxuXHJcbmNvbnN0IGRyYXdQbGF5ZXJDYXJkID0gKHBsYXllcikgPT4ge1xyXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlY2stY2FyZCcpO1xyXG4gIGNvbnN0IGF2YWlsYWJsZUNhcmRzID0gZ2V0QXZhaWxhYmxlQ2FyZHMoY2FyZHMpO1xyXG5cclxuICBpZiAocGxheWVyID09PSAncGxheWVyMScpIHtcclxuICAgIHBsYXllcjEuZHJhdyhhdmFpbGFibGVDYXJkcyk7XHJcbiAgICBwbGF5ZXJTY29yZS5pbm5lclRleHQgPSBgJHtwbGF5ZXIxLnRvdGFsfWA7XHJcbiAgICBjb25zdCBwbGF5ZXJDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJDYXJkcycpO1xyXG4gICAgY29uc3QgbGFzdENhcmQgPSBwbGF5ZXIxLmNhcmRzW3BsYXllcjEuY2FyZHMubGVuZ3RoIC0gMV07XHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3Bhbi5pbm5lckhUTUwgPSBsYXN0Q2FyZC5pbm5lckhUTUw7XHJcbiAgICBjb25zdCBkaXYgPSBwbGF5ZXJDYXJkcy5jaGlsZHJlbltwbGF5ZXIxLmNhcmRzLmxlbmd0aCAtIDFdO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgaGFuZGxlV2luKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlYWxlci5kcmF3KGF2YWlsYWJsZUNhcmRzKTtcclxuICAgIGRlYWxlclNjb3JlLmlubmVyVGV4dCA9IGAke2RlYWxlci50b3RhbH1gO1xyXG5cclxuICAgIGNvbnN0IGRlYWxlckNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYWxlckNhcmRzJyk7XHJcbiAgICBjb25zdCBsYXN0Q2FyZCA9IGRlYWxlci5jYXJkc1tkZWFsZXIuY2FyZHMubGVuZ3RoIC0gMV07XHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3Bhbi5pbm5lckhUTUwgPSBsYXN0Q2FyZC5pbm5lckhUTUw7XHJcbiAgICBjb25zdCBkaXYgPSBkZWFsZXJDYXJkcy5jaGlsZHJlbltkZWFsZXIuY2FyZHMubGVuZ3RoIC0gMV07XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICBoYW5kbGVXaW4oKTtcclxuICB9XHJcbn07XHJcblxyXG5oaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkcmF3UGxheWVyQ2FyZCgncGxheWVyMScpKTtcclxuXHJcbmFwcC5hcHBlbmRDaGlsZChkZWNrKTtcclxuXHJcbmNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxheWVyQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQ2FyZHMnKTtcclxuICBBcnJheS5mcm9tKHBsYXllckNhcmRzLmNoaWxkcmVuKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGRlYWxlckNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYWxlckNhcmRzJyk7XHJcbiAgQXJyYXkuZnJvbShkZWFsZXJDYXJkcy5jaGlsZHJlbikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XHJcbiAgbGV0IGlzUGxheWVyID0gZmFsc2U7XHJcbiAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gIHBsYXllcjEucmVzZXQoKTtcclxuICBkZWFsZXIucmVzZXQoKTtcclxuICBoaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gIHN0YW5kQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVhbGVySW5mbycpLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJJbmZvJykuc3R5bGUuY29sb3IgPSAnI2ZmZic7XHJcbiAgcmVzZXRDYXJkcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVjay1jYXJkJykpO1xyXG4gIHJlc2V0Qm9hcmQoKTtcclxuICBkZWFsZXJTY29yZS5pbm5lclRleHQgPSAnMCc7XHJcbiAgcGxheWVyU2NvcmUuaW5uZXJUZXh0ID0gJzAnO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGlzUGxheWVyKSB7XHJcbiAgICAgICAgZHJhd1BsYXllckNhcmQoJ3BsYXllcjEnKTtcclxuICAgICAgICBpc1BsYXllciA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRyYXdQbGF5ZXJDYXJkKCdkZWFsZXInKTtcclxuICAgICAgICBpc1BsYXllciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sIChjb3VudGVyICs9IDUwMCkpO1xyXG4gIH1cclxuICBjbGVhclRpbWVvdXQoKTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXllcldpbiA9IChwbGF5ZXIpID0+IHtcclxuICBkaXNhYmxlQnV0dG9ucygpO1xyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgc3Bhbi5pbm5lckhUTUwgPSAn8J+OiSc7XHJcbiAgaWYgKHBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVySW5mbycpLnN0eWxlLmNvbG9yID0gJyMzOWQwMzknO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVhbGVySW5mbycpLnN0eWxlLmNvbG9yID0gJyMzOWQwMzknO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGRpc2FibGVCdXR0b25zID0gKCkgPT4ge1xyXG4gIGhpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgc3RhbmRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG59O1xyXG5cclxuY29uc3Qgc3RhbmQgPSAoKSA9PiB7XHJcbiAgaWYgKGRlYWxlci50b3RhbCA+IHBsYXllcjEudG90YWwgJiYgZGVhbGVyLnRvdGFsIDwgMjEpIHtcclxuICAgIHBsYXllcldpbignZGVhbGVyJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAocGxheWVyMS50b3RhbCA+IGRlYWxlci50b3RhbCkge1xyXG4gICAgZHJhd1BsYXllckNhcmQoJ2RlYWxlcicpO1xyXG4gICAgc3RhbmQoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVdpbigpO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlV2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXllcjFUb3RhbCA9IHBsYXllcjEudG90YWw7XHJcbiAgY29uc3QgZGVhbGVyVG90YWwgPSBkZWFsZXIudG90YWw7XHJcblxyXG4gIGlmIChwbGF5ZXIxLmNhcmRzLmxlbmd0aCA9PT0gNSkge1xyXG4gICAgcGxheWVyV2luKCdwbGF5ZXIxJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoZGVhbGVyVG90YWwgPT09IDIxKSB7XHJcbiAgICBwbGF5ZXJXaW4oJ2RlYWxlcicpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBsYXllcjFUb3RhbCA9PT0gMjEpIHtcclxuICAgIHBsYXllcldpbigncGxheWVyMScpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBsYXllcjFUb3RhbCA+IDIxKSB7XHJcbiAgICBwbGF5ZXJXaW4oJ2RlYWxlcicpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRlYWxlclRvdGFsID4gMjEpIHtcclxuICAgIHBsYXllcldpbigncGxheWVyMScpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRlYWxlclRvdGFsID09PSBwbGF5ZXIxVG90YWwpIHtcclxuICAgIGRpc2FibGVCdXR0b25zKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuc3RhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFuZCk7XHJcbm5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdHYW1lKTtcclxuXHJcbm5ld0dhbWUoKTtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9