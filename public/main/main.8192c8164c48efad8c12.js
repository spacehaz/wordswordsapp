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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: .presets[0][1] must be an object, false, or undefined\\n    at assertPluginItem (/Users/hazobaykulov/www/wordswordsapp/node_modules/@babel/core/lib/config/validation/option-assertions.js:244:15)\\n    at arr.forEach (/Users/hazobaykulov/www/wordswordsapp/node_modules/@babel/core/lib/config/validation/option-assertions.js:222:30)\\n    at Array.forEach (<anonymous>)\\n    at assertPluginList (/Users/hazobaykulov/www/wordswordsapp/node_modules/@babel/core/lib/config/validation/option-assertions.js:222:9)\\n    at Object.keys.forEach.key (/Users/hazobaykulov/www/wordswordsapp/node_modules/@babel/core/lib/config/validation/options.js:108:5)\\n    at Array.forEach (<anonymous>)\\n    at validateNested (/Users/hazobaykulov/www/wordswordsapp/node_modules/@babel/core/lib/config/validation/options.js:84:21)\\n    at validate (/Users/hazobaykulov/www/wordswordsapp/node_modules/@babel/core/lib/config/validation/options.js:75:10)\\n    at file (/Users/hazobaykulov/www/wordswordsapp/node_modules/@babel/core/lib/config/config-chain.js:169:34)\\n    at cachedFunction (/Users/hazobaykulov/www/wordswordsapp/node_modules/@babel/core/lib/config/caching.js:62:27)\\n    at cachedFunction.next (<anonymous>)\\n    at evaluateSync (/Users/hazobaykulov/www/wordswordsapp/node_modules/gensync/index.js:244:28)\\n    at sync (/Users/hazobaykulov/www/wordswordsapp/node_modules/gensync/index.js:84:14)\\n    at buildRootChain (/Users/hazobaykulov/www/wordswordsapp/node_modules/@babel/core/lib/config/config-chain.js:89:27)\\n    at buildRootChain.next (<anonymous>)\\n    at loadPrivatePartialConfig (/Users/hazobaykulov/www/wordswordsapp/node_modules/@babel/core/lib/config/partial.js:95:62)\\n    at loadPrivatePartialConfig.next (<anonymous>)\\n    at Function.<anonymous> (/Users/hazobaykulov/www/wordswordsapp/node_modules/@babel/core/lib/config/partial.js:120:25)\\n    at Generator.next (<anonymous>)\\n    at evaluateSync (/Users/hazobaykulov/www/wordswordsapp/node_modules/gensync/index.js:244:28)\\n    at Function.sync (/Users/hazobaykulov/www/wordswordsapp/node_modules/gensync/index.js:84:14)\\n    at Object.<anonymous> (/Users/hazobaykulov/www/wordswordsapp/node_modules/@babel/core/lib/config/index.js:41:61)\\n    at Object.<anonymous> (/Users/hazobaykulov/www/wordswordsapp/node_modules/babel-loader/lib/index.js:144:26)\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (/Users/hazobaykulov/www/wordswordsapp/node_modules/babel-loader/lib/index.js:3:103)\\n    at _next (/Users/hazobaykulov/www/wordswordsapp/node_modules/babel-loader/lib/index.js:5:194)\\n    at /Users/hazobaykulov/www/wordswordsapp/node_modules/babel-loader/lib/index.js:5:364\\n    at new Promise (<anonymous>)\\n    at Object.<anonymous> (/Users/hazobaykulov/www/wordswordsapp/node_modules/babel-loader/lib/index.js:5:97)\\n    at Object._loader (/Users/hazobaykulov/www/wordswordsapp/node_modules/babel-loader/lib/index.js:224:18)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });