'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIEVersion = getIEVersion;
exports.translate = translate;
exports.getWindowWidth = getWindowWidth;
exports.getWindowHeight = getWindowHeight;
/**
 * Get the version of Internet Explorer in use, or undefined
 *
 * @return {?number} ieVersion - IE version as an integer, or undefined if not IE
 */
function getIEVersion() {
  if (typeof global.window === 'undefined' || typeof global.window.navigator === 'undefined') {
    return undefined;
  }

  var match = global.window.navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
  return match ? parseInt(match[1], 10) : undefined;
}

/**
 * Placeholder for future translate functionality
 */
function translate(str) {
  var replaceStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!str) {
    return '';
  }

  var translated = str;
  if (replaceStrings) {
    Object.keys(replaceStrings).forEach(function (placeholder) {
      translated = translated.replace(placeholder, replaceStrings[placeholder]);
    });
  }

  return translated;
}

function getWindowWidth() {
  return typeof global.window !== 'undefined' ? global.window.innerWidth : 0;
}

function getWindowHeight() {
  return typeof global.window !== 'undefined' ? global.window.innerHeight : 0;
}