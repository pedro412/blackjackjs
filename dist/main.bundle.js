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
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Oswald', sans-serif;\n  background-color: #202442;\n  color: #fff;\n}\n\n.title {\n  text-align: center;\n  font-size: 50px;\n  padding-top: 15px;\n}\n\n.deck-container {\n  margin: 20px 0;\n}\n\n.deck-set {\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\n\n.deck-card {\n  background-color: #202442;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5px;\n  width: 50px;\n  border: solid 1px #4e7cff;\n  color: #f7f7f7;\n  font-size: 18px;\n  border-radius: 12px;\n}\n\n.used {\n  background-color: #4e7cff;\n  color: #fff;\n  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),\n    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);\n}\n\n.player-board {\n  display: grid;\n  grid-template-columns: 25% 75%;\n  margin: auto;\n  width: 80%;\n  max-width: 800px;\n  min-height: 160px;\n  margin-top: 20px;\n  background-color: #2d325a;\n  border-radius: 40px;\n  padding: 10px;\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\n    0 2px 4px -1px rgba(0, 0, 0, 0.3);\n}\n\n.player-info {\n  position: relative;\n  text-align: center;\n}\n\n.player-info h2 {\n  font-size: 30px;\n  margin-top: 10px;\n}\n.player-info h3 {\n  font-size: 55px;\n}\n\n.player-cards {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.player-card {\n  background-color: #202442;\n  height: 95%;\n  width: 90px;\n  box-sizing: border-box;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5px;\n  border: solid 1px #4e7cff;\n  color: #f7f7f7;\n  font-size: 18px;\n  border-radius: 12px;\n  font-size: 25px;\n  opacity: 1;\n  transition: 0.2s ease-in;\n}\n\n.player-card span {\n  transition: 0.2s ease-in;\n}\n\nbutton {\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  padding: 10px 20px;\n  font-size: 20px;\n  color: #fff;\n  font-family: 'Oswald', sans-serif;\n  font-weight: bold;\n  border-radius: 60px;\n  transition: 0.1s ease-out;\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\n    0 2px 4px -1px rgba(0, 0, 0, 0.3);\n}\n\nbutton:disabled {\n  background-color: #848484;\n  color: #666666;\n}\n\nbutton:active {\n  transform: scale(0.9);\n  box-shadow: none;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.mr-2 {\n  margin-right: 10px;\n}\n\n.btn-primary {\n  background-color: #4e7cff;\n}\n\n.btn-secondary {\n  background-color: #7033ff;\n}\n\n.btn-danger {\n  background-color: #e94558;\n}\n\n.action-bar {\n  padding: 10px;\n  /* width: 100%; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* border: solid 2px #4e7cff; */\n  /* background-color: #2d325a; */\n  /* color: black; */\n  bottom: 0px;\n}\n\n.player-info span {\n  position: absolute;\n  top: 40px;\n  font-size: 50px;\n  left: 150px;\n}\n", ""]);
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

var isNewGame = true;

var newGame = function newGame() {
  isNewGame = true;
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

  var _loop = function _loop(i) {
    setTimeout(function () {
      if (i > 3) {
        isNewGame = false;
      }

      if (isPlayer) {
        drawPlayerCard('player1');
        isPlayer = false;
      } else {
        drawPlayerCard('dealer');
        isPlayer = true;
      }
    }, counter += 500);
  };

  for (var i = 1; i < 5; i++) {
    _loop(i);
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

  if (dealerTotal === player1Total && !isNewGame) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/ZGRkMyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJwbGF5ZXJOYW1lIiwiYXZhaWxhYmxlQ2FyZHMiLCJtb3ZlcyIsImNhcmQiLCJkcmF3Q2FyZCIsImNhcmRzIiwicHVzaCIsIl9hZGRUb1RvdGFsIiwiY291bnRlciIsImZvckVhY2giLCJjIiwibnVtYmVyIiwiaW5uZXJIVE1MIiwic2xpY2UiLCJ0cmltIiwiaW5jbHVkZXMiLCJwYXJzZUludCIsInRvdGFsIiwiZ2V0QXZhaWxhYmxlQ2FyZHMiLCJhdmFpYmxlQ2FyZHMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImFkZCIsInJlc2V0Q2FyZHMiLCJyZW1vdmUiLCJzeW1ib2xzIiwiY3JlYXRlRGVjayIsImRlY2tOb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3ltYm9sIiwibm9kZSIsImkiLCJjYXJkTm9kZSIsImFwcGVuZENoaWxkIiwiYXBwIiwiZ2V0RWxlbWVudEJ5SWQiLCJkZWNrIiwicGxheWVyMSIsImRlYWxlciIsImhpdEJ1dHRvbiIsIm5ld0dhbWVCdXR0b24iLCJzdGFuZEJ1dHRvbiIsInBsYXllclNjb3JlIiwiZGVhbGVyU2NvcmUiLCJkcmF3UGxheWVyQ2FyZCIsInBsYXllciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkcmF3IiwiaW5uZXJUZXh0IiwicGxheWVyQ2FyZHMiLCJsYXN0Q2FyZCIsInNwYW4iLCJkaXYiLCJjaGlsZHJlbiIsImhhbmRsZVdpbiIsImRlYWxlckNhcmRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2V0Qm9hcmQiLCJBcnJheSIsImZyb20iLCJlbGVtZW50IiwiaXNOZXdHYW1lIiwibmV3R2FtZSIsImlzUGxheWVyIiwicmVzZXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzdHlsZSIsImNvbG9yIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInBsYXllcldpbiIsImRpc2FibGVCdXR0b25zIiwic2V0QXR0cmlidXRlIiwic3RhbmQiLCJwbGF5ZXIxVG90YWwiLCJkZWFsZXJUb3RhbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7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IG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDI0NDI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG5cXG4uZGVjay1jb250YWluZXIge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5kZWNrLXNldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5kZWNrLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjQ0MjtcXG4gIGhlaWdodDogNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzRlN2NmZjtcXG4gIGNvbG9yOiAjZjdmN2Y3O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLnVzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlN2NmZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAxM3B4IDI3cHggLTVweCByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpLFxcbiAgICAwIDhweCAxNnB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIC02cHggMTZweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA3NSU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDE2MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDMyNWE7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxcbiAgICAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5wbGF5ZXItaW5mbyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItaW5mbyBoMiB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ucGxheWVyLWluZm8gaDMge1xcbiAgZm9udC1zaXplOiA1NXB4O1xcbn1cXG5cXG4ucGxheWVyLWNhcmRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyNDQyO1xcbiAgaGVpZ2h0OiA5NSU7XFxuICB3aWR0aDogOTBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzRlN2NmZjtcXG4gIGNvbG9yOiAjZjdmN2Y3O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XFxufVxcblxcbi5wbGF5ZXItY2FyZCBzcGFuIHtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XFxuICBib3gtc2hhZG93OiAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcXG4gICAgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0ODQ4NDtcXG4gIGNvbG9yOiAjNjY2NjY2O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubXItMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU3Y2ZmO1xcbn1cXG5cXG4uYnRuLXNlY29uZGFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzAzM2ZmO1xcbn1cXG5cXG4uYnRuLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk0NTU4O1xcbn1cXG5cXG4uYWN0aW9uLWJhciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiBzb2xpZCAycHggIzRlN2NmZjsgKi9cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMyZDMyNWE7ICovXFxuICAvKiBjb2xvcjogYmxhY2s7ICovXFxuICBib3R0b206IDBweDtcXG59XFxuXFxuLnBsYXllci1pbmZvIHNwYW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MHB4O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgbGVmdDogMTUwcHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBkcmF3Q2FyZCB9IGZyb20gJy4vY2FyZHMnO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBtb3ZlcyA9IDU7XG4gIGNhcmRzID0gW107XG4gIHRvdGFsID0gMDtcblxuICBjb25zdHJ1Y3RvcihwbGF5ZXJOYW1lKSB7XG4gICAgdGhpcy5wbGF5ZXJOYW1lID0gcGxheWVyTmFtZTtcbiAgfVxuXG4gIGRyYXcoYXZhaWxhYmxlQ2FyZHMpIHtcbiAgICBpZiAodGhpcy5tb3ZlcyA+IDApIHtcbiAgICAgIGNvbnN0IGNhcmQgPSBkcmF3Q2FyZChhdmFpbGFibGVDYXJkcyk7XG4gICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgICB0aGlzLl9hZGRUb1RvdGFsKCk7XG4gICAgICB0aGlzLm1vdmVzID0gdGhpcy5tb3ZlcyAtIDE7XG4gICAgfVxuICB9XG5cbiAgX2FkZFRvVG90YWwoKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIHRoaXMuY2FyZHMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgY29uc3QgbnVtYmVyID0gYy5pbm5lckhUTUwuc2xpY2UoMikudHJpbSgpO1xuXG4gICAgICBpZiAoWydKJywgJ0snLCAnUSddLmluY2x1ZGVzKG51bWJlcikpIHtcbiAgICAgICAgY291bnRlciA9IGNvdW50ZXIgKyAxMDtcbiAgICAgIH0gZWxzZSBpZiAoWydBJ10uaW5jbHVkZXMobnVtYmVyKSkge1xuICAgICAgICBpZiAoY291bnRlciArIDExID4gMjEpIHtcbiAgICAgICAgICBjb3VudGVyID0gY291bnRlciArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRlciA9IGNvdW50ZXIgKyAxMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRlciA9IGNvdW50ZXIgKyBwYXJzZUludChudW1iZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudG90YWwgPSBjb3VudGVyO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5tb3ZlcyA9IDU7XG4gICAgdGhpcy50b3RhbCA9IDA7XG4gICAgdGhpcy5jYXJkcyA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImV4cG9ydCBjb25zdCBnZXRBdmFpbGFibGVDYXJkcyA9IChjYXJkcykgPT4ge1xuICBjb25zdCBhdmFpYmxlQ2FyZHMgPSBbXTtcbiAgY2FyZHM/LmZvckVhY2goKGMpID0+IHtcbiAgICBpZiAoIWMuY2xhc3NMaXN0LmNvbnRhaW5zKCd1c2VkJykpIHtcbiAgICAgIGF2YWlibGVDYXJkcy5wdXNoKGMpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhdmFpYmxlQ2FyZHM7XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd0NhcmQgPSAoYXZhaWJsZUNhcmRzKSA9PiB7XG4gIGNvbnN0IHJhbmRvbU51bWJlciA9XG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGF2YWlibGVDYXJkcy5sZW5ndGggLSAxKSkgKyAxO1xuICBjb25zdCBjYXJkID0gYXZhaWJsZUNhcmRzW3JhbmRvbU51bWJlcl07XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgndXNlZCcpO1xuICBhdmFpYmxlQ2FyZHMgPSBnZXRBdmFpbGFibGVDYXJkcygpO1xuICByZXR1cm4gY2FyZDtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNldENhcmRzID0gKGNhcmRzKSA9PiB7XG4gIGNhcmRzPy5mb3JFYWNoKChjKSA9PiB7XG4gICAgaWYgKGMuY2xhc3NMaXN0LmNvbnRhaW5zKCd1c2VkJykpIHtcbiAgICAgIGMuY2xhc3NMaXN0LnJlbW92ZSgndXNlZCcpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiY29uc3Qgc3ltYm9scyA9IFsn4pqh77iPJywgJ/CfmoAnLCAn4pyoJywgJ/CfjIgnXTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGRlY2tOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlY2tOb2RlLmNsYXNzTGlzdC5hZGQoJ2RlY2stY29udGFpbmVyJyk7XG4gIHN5bWJvbHMuZm9yRWFjaCgoc3ltYm9sKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnZGVjay1zZXQnKTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IDE1OyBpKyspIHtcbiAgICAgIGNvbnN0IGNhcmROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjYXJkTm9kZS5jbGFzc0xpc3QuYWRkKCdkZWNrLWNhcmQnKTtcbiAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIGNhcmROb2RlLmlubmVySFRNTCA9IGAke3N5bWJvbH0gSmA7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBjYXJkTm9kZS5pbm5lckhUTUwgPSBgJHtzeW1ib2x9IFFgO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgY2FyZE5vZGUuaW5uZXJIVE1MID0gYCR7c3ltYm9sfSBLYDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIGNhcmROb2RlLmlubmVySFRNTCA9IGAke3N5bWJvbH0gQWA7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjYXJkTm9kZS5pbm5lckhUTUwgPSBgJHtzeW1ib2x9ICR7aX1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBub2RlLmFwcGVuZENoaWxkKGNhcmROb2RlKTtcbiAgICB9XG4gICAgZGVja05vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH0pO1xuICByZXR1cm4gZGVja05vZGU7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRGVjayB9IGZyb20gJy4vZGVjayc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbmltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgeyBnZXRBdmFpbGFibGVDYXJkcywgcmVzZXRDYXJkcyB9IGZyb20gJy4vY2FyZHMnO1xuXG5leHBvcnQgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuY29uc3QgZGVjayA9IGNyZWF0ZURlY2soKTtcblxuY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXIoJ3BsYXllcjEnKTtcbmNvbnN0IGRlYWxlciA9IG5ldyBQbGF5ZXIoJ2RlYWxlcicpO1xuXG5jb25zdCBoaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGl0Jyk7XG5jb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0dhbWUnKTtcbmNvbnN0IHN0YW5kQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YW5kQnV0dG9uJyk7XG5cbmNvbnN0IHBsYXllclNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNjb3JlJyk7XG5jb25zdCBkZWFsZXJTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWFsZXJTY29yZScpO1xuXG5jb25zdCBkcmF3UGxheWVyQ2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVjay1jYXJkJyk7XG4gIGNvbnN0IGF2YWlsYWJsZUNhcmRzID0gZ2V0QXZhaWxhYmxlQ2FyZHMoY2FyZHMpO1xuXG4gIGlmIChwbGF5ZXIgPT09ICdwbGF5ZXIxJykge1xuICAgIHBsYXllcjEuZHJhdyhhdmFpbGFibGVDYXJkcyk7XG4gICAgcGxheWVyU2NvcmUuaW5uZXJUZXh0ID0gYCR7cGxheWVyMS50b3RhbH1gO1xuICAgIGNvbnN0IHBsYXllckNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckNhcmRzJyk7XG4gICAgY29uc3QgbGFzdENhcmQgPSBwbGF5ZXIxLmNhcmRzW3BsYXllcjEuY2FyZHMubGVuZ3RoIC0gMV07XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IGxhc3RDYXJkLmlubmVySFRNTDtcbiAgICBjb25zdCBkaXYgPSBwbGF5ZXJDYXJkcy5jaGlsZHJlbltwbGF5ZXIxLmNhcmRzLmxlbmd0aCAtIDFdO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBoYW5kbGVXaW4oKTtcbiAgfSBlbHNlIHtcbiAgICBkZWFsZXIuZHJhdyhhdmFpbGFibGVDYXJkcyk7XG4gICAgZGVhbGVyU2NvcmUuaW5uZXJUZXh0ID0gYCR7ZGVhbGVyLnRvdGFsfWA7XG5cbiAgICBjb25zdCBkZWFsZXJDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWFsZXJDYXJkcycpO1xuICAgIGNvbnN0IGxhc3RDYXJkID0gZGVhbGVyLmNhcmRzW2RlYWxlci5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gbGFzdENhcmQuaW5uZXJIVE1MO1xuICAgIGNvbnN0IGRpdiA9IGRlYWxlckNhcmRzLmNoaWxkcmVuW2RlYWxlci5jYXJkcy5sZW5ndGggLSAxXTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgaGFuZGxlV2luKCk7XG4gIH1cbn07XG5cbmhpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRyYXdQbGF5ZXJDYXJkKCdwbGF5ZXIxJykpO1xuXG5hcHAuYXBwZW5kQ2hpbGQoZGVjayk7XG5cbmNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckNhcmRzJyk7XG4gIEFycmF5LmZyb20ocGxheWVyQ2FyZHMuY2hpbGRyZW4pLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB9KTtcbiAgY29uc3QgZGVhbGVyQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVhbGVyQ2FyZHMnKTtcbiAgQXJyYXkuZnJvbShkZWFsZXJDYXJkcy5jaGlsZHJlbikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xufTtcblxubGV0IGlzTmV3R2FtZSA9IHRydWU7XG5cbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gIGlzTmV3R2FtZSA9IHRydWU7XG4gIGxldCBpc1BsYXllciA9IGZhbHNlO1xuICBsZXQgY291bnRlciA9IDA7XG4gIHBsYXllcjEucmVzZXQoKTtcbiAgZGVhbGVyLnJlc2V0KCk7XG4gIGhpdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIHN0YW5kQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYWxlckluZm8nKS5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckluZm8nKS5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgcmVzZXRDYXJkcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVjay1jYXJkJykpO1xuICByZXNldEJvYXJkKCk7XG4gIGRlYWxlclNjb3JlLmlubmVyVGV4dCA9ICcwJztcbiAgcGxheWVyU2NvcmUuaW5uZXJUZXh0ID0gJzAnO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGkgPiAzKSB7XG4gICAgICAgIGlzTmV3R2FtZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGlzUGxheWVyKSB7XG4gICAgICAgIGRyYXdQbGF5ZXJDYXJkKCdwbGF5ZXIxJyk7XG4gICAgICAgIGlzUGxheWVyID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmF3UGxheWVyQ2FyZCgnZGVhbGVyJyk7XG4gICAgICAgIGlzUGxheWVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCAoY291bnRlciArPSA1MDApKTtcbiAgfVxuICBjbGVhclRpbWVvdXQoKTtcblxufTtcblxuY29uc3QgcGxheWVyV2luID0gKHBsYXllcikgPT4ge1xuICBkaXNhYmxlQnV0dG9ucygpO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmlubmVySFRNTCA9ICfwn46JJztcbiAgaWYgKHBsYXllciA9PT0gJ3BsYXllcjEnKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckluZm8nKS5zdHlsZS5jb2xvciA9ICcjMzlkMDM5JztcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVhbGVySW5mbycpLnN0eWxlLmNvbG9yID0gJyMzOWQwMzknO1xuICB9XG59O1xuXG5jb25zdCBkaXNhYmxlQnV0dG9ucyA9ICgpID0+IHtcbiAgaGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgc3RhbmRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xufTtcblxuY29uc3Qgc3RhbmQgPSAoKSA9PiB7XG4gIGlmIChkZWFsZXIudG90YWwgPiBwbGF5ZXIxLnRvdGFsICYmIGRlYWxlci50b3RhbCA8IDIxKSB7XG4gICAgcGxheWVyV2luKCdkZWFsZXInKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGxheWVyMS50b3RhbCA+IGRlYWxlci50b3RhbCkge1xuICAgIGRyYXdQbGF5ZXJDYXJkKCdkZWFsZXInKTtcbiAgICBzdGFuZCgpO1xuICB9XG5cbiAgaGFuZGxlV2luKCk7XG59O1xuXG5jb25zdCBoYW5kbGVXaW4gPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllcjFUb3RhbCA9IHBsYXllcjEudG90YWw7XG4gIGNvbnN0IGRlYWxlclRvdGFsID0gZGVhbGVyLnRvdGFsO1xuXG4gIGlmIChwbGF5ZXIxLmNhcmRzLmxlbmd0aCA9PT0gNSkge1xuICAgIHBsYXllcldpbigncGxheWVyMScpO1xuICB9XG5cbiAgaWYgKGRlYWxlclRvdGFsID09PSAyMSkge1xuICAgIHBsYXllcldpbignZGVhbGVyJyk7XG4gIH1cblxuICBpZiAocGxheWVyMVRvdGFsID09PSAyMSkge1xuICAgIHBsYXllcldpbigncGxheWVyMScpO1xuICB9XG5cbiAgaWYgKHBsYXllcjFUb3RhbCA+IDIxKSB7XG4gICAgcGxheWVyV2luKCdkZWFsZXInKTtcbiAgfVxuXG4gIGlmIChkZWFsZXJUb3RhbCA+IDIxKSB7XG4gICAgcGxheWVyV2luKCdwbGF5ZXIxJyk7XG4gIH1cblxuICBpZiAoZGVhbGVyVG90YWwgPT09IHBsYXllcjFUb3RhbCAmJiAhaXNOZXdHYW1lKSB7XG4gICAgZGlzYWJsZUJ1dHRvbnMoKTtcbiAgfVxufTtcblxuc3RhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFuZCk7XG5uZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3R2FtZSk7XG5cbm5ld0dhbWUoKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==