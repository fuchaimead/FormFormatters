"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  parse: function parse(date) {
    return _moment2.default.utc(date, [
    // dates
    "MMDDYYYY", "MMM YYYY", "MMM DD YYYY", "M-D-YYYY", "YYYY-M-D",
    // date times
    "YYYY-MM-DD h:mm a", "MMM DD YYYY h:mm a", "M-D-YYYY h:mm a", "YYYY-MM-DD h:mm a",
    // date times with seconds
    "YYYY-MM-DD h:mm:ss a", "MMM DD YYYY h:mm:ss a", "M-D-YYYY h:mm:ss a", "YYYY-MM-DD h:mm:ss a"]);
  }
};