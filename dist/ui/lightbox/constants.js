"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Min image zoom level
var MIN_ZOOM_LEVEL = exports.MIN_ZOOM_LEVEL = 0;

// Max image zoom level
var MAX_ZOOM_LEVEL = exports.MAX_ZOOM_LEVEL = 300;

// Size ratio between previous and next zoom levels
var ZOOM_RATIO = exports.ZOOM_RATIO = 1.007;

// How much to increase/decrease the zoom level when the zoom buttons are clicked
var ZOOM_BUTTON_INCREMENT_SIZE = exports.ZOOM_BUTTON_INCREMENT_SIZE = 100;

// Used to judge the amount of horizontal scroll needed to initiate a image move
var WHEEL_MOVE_X_THRESHOLD = exports.WHEEL_MOVE_X_THRESHOLD = 200;

// Used to judge the amount of vertical scroll needed to initiate a zoom action
var WHEEL_MOVE_Y_THRESHOLD = exports.WHEEL_MOVE_Y_THRESHOLD = 1;

var KEYS = exports.KEYS = {
  ESC: 27,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

// Actions
var ACTION_NONE = exports.ACTION_NONE = 0;
var ACTION_MOVE = exports.ACTION_MOVE = 1;
var ACTION_SWIPE = exports.ACTION_SWIPE = 2;
var ACTION_PINCH = exports.ACTION_PINCH = 3;
var ACTION_ROTATE = exports.ACTION_ROTATE = 4;

// Events source
var SOURCE_ANY = exports.SOURCE_ANY = 0;
var SOURCE_MOUSE = exports.SOURCE_MOUSE = 1;
var SOURCE_TOUCH = exports.SOURCE_TOUCH = 2;
var SOURCE_POINTER = exports.SOURCE_POINTER = 3;

// Minimal swipe distance
var MIN_SWIPE_DISTANCE = exports.MIN_SWIPE_DISTANCE = 200;