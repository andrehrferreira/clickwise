"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill/noConflict");

var _postaffiliatepro = _interopRequireDefault(require("@vigiadepreco/postaffiliatepro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ClickWise = /*#__PURE__*/function () {
  function ClickWise(username, password) {
    _classCallCheck(this, ClickWise);

    this.api = new _postaffiliatepro["default"]("https://my.pampanetwork.com/scripts/server.php", "https://my.pampanetwork.com/affiliates/login.php", username, password);
  }

  _createClass(ClickWise, [{
    key: "command",
    value: function () {
      var _command = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.api.command(data);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function command(_x) {
        return _command.apply(this, arguments);
      }

      return command;
    }()
  }, {
    key: "campaigns",
    value: function () {
      var _campaigns = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(offset, limit) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.api.campaigns(offset, limit);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function campaigns(_x2, _x3) {
        return _campaigns.apply(this, arguments);
      }

      return campaigns;
    }()
  }, {
    key: "coupons",
    value: function () {
      var _coupons = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(offset, limit) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.api.promo(20, offset, limit);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function coupons(_x4, _x5) {
        return _coupons.apply(this, arguments);
      }

      return coupons;
    }()
  }, {
    key: "banners",
    value: function () {
      var _banners = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(offset, limit) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.api.command({
                  "C": "Gpf_Rpc_Server",
                  "M": "run",
                  "requests": [{
                    "C": "Pap_Affiliates_Promo_BannersGrid",
                    "M": "getRows",
                    "offset": offset,
                    "limit": limit,
                    "filters": [["type", "IN", "I"]],
                    "columns": [["id"], ["destinationurl"], ["name"], ["campaignid"], ["campaignname"], ["bannercode"], ["bannerdirectlinkcode"], ["bannerpreview"], ["rtype"], ["displaystats"], ["channelcode"], ["campaigndetails"]]
                  }]
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function banners(_x6, _x7) {
        return _banners.apply(this, arguments);
      }

      return banners;
    }()
  }, {
    key: "report",
    value: function () {
      var _report = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(datestart, dateend, status) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.api.report(datestart, dateend, status);

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function report(_x8, _x9, _x10) {
        return _report.apply(this, arguments);
      }

      return report;
    }()
  }, {
    key: "deeplink",
    value: function () {
      var _deeplink = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(url, campaignid) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.api.deeplink(url, campaignid);

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function deeplink(_x11, _x12) {
        return _deeplink.apply(this, arguments);
      }

      return deeplink;
    }()
  }]);

  return ClickWise;
}();

exports["default"] = ClickWise;
//# sourceMappingURL=index.js.map