"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.async-iterator.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.symbol.to-string-tag.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.json.to-string-tag.js");
require("core-js/modules/es.math.to-string-tag.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
var _user = _interopRequireDefault(require("../models/user.js"));
var _tank = _interopRequireDefault(require("../models/tank.js"));
var _fish = _interopRequireDefault(require("../models/fish.js"));
var _fishFamily = _interopRequireDefault(require("../models/fishFamily.js"));
var _compatibilityChart = _interopRequireDefault(require("../models/compatibilityChart.js"));
var _apolloServerErrors = require("apollo-server-errors");
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
require("dotenv/config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var resolvers = exports.resolvers = {
  Query: {
    getUsers: function getUsers(_) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _user["default"].find();
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getUser: function getUser(_, _ref) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var ID;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              ID = _ref.ID;
              _context2.next = 3;
              return _user["default"].findById(ID);
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getTanks: function getTanks(_) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _tank["default"].find();
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getTank: function getTank(_, _ref2) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var ID;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              ID = _ref2.ID;
              _context4.next = 3;
              return _tank["default"].findById(ID);
            case 3:
              return _context4.abrupt("return", _context4.sent);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    getFishes: function getFishes(_) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _fish["default"].find();
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    getFish: function getFish(_, _ref3) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var ID;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              ID = _ref3.ID;
              _context6.next = 3;
              return _fish["default"].findById(ID);
            case 3:
              return _context6.abrupt("return", _context6.sent);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    getFishFamilies: function getFishFamilies(_) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _fishFamily["default"].find();
            case 2:
              return _context7.abrupt("return", _context7.sent);
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    getFishFamily: function getFishFamily(_, _ref4) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var ID;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              ID = _ref4.ID;
              _context8.next = 3;
              return _fishFamily["default"].findById(ID);
            case 3:
              return _context8.abrupt("return", _context8.sent);
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    getCompatibility: function getCompatibility(_, _ref5) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var ID;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              ID = _ref5.ID;
              _context9.next = 3;
              return _compatibilityChart["default"].findById(ID);
            case 3:
              return _context9.abrupt("return", _context9.sent);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    }
  },
  User: {
    tanks: function tanks(parent) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var owner;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _tank["default"].find({
                owner: parent._id
              });
            case 2:
              owner = _context10.sent;
              return _context10.abrupt("return", owner);
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    }
  },
  Fish: {
    family: function family(parent) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var familyName;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return _fishFamily["default"].findOne({
                fish: parent._id
              });
            case 2:
              familyName = _context11.sent;
              return _context11.abrupt("return", familyName);
            case 4:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }))();
    }
  },
  Tank: {
    stocking: function stocking(parent) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var fish;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return _fish["default"].find({
                _id: {
                  $in: parent.stocking
                }
              });
            case 2:
              fish = _context12.sent;
              return _context12.abrupt("return", fish);
            case 4:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }))();
    }
  },
  Mutation: {
    registerUser: function registerUser(_, _ref6) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var _ref6$registerInput, username, email, password, oldUser, encryptedPassword, newUser, token, res;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _ref6$registerInput = _ref6.registerInput, username = _ref6$registerInput.username, email = _ref6$registerInput.email, password = _ref6$registerInput.password;
              _context13.next = 3;
              return _user["default"].findOne({
                email: email
              });
            case 3:
              oldUser = _context13.sent;
              if (!oldUser) {
                _context13.next = 6;
                break;
              }
              throw new _apolloServerErrors.ApolloError("A user is already registered with the email " + email, "USER_ALREADY_EXISTS");
            case 6:
              _context13.next = 8;
              return _bcryptjs["default"].hash(password, 10);
            case 8:
              encryptedPassword = _context13.sent;
              // Build out mongoose model (User)
              newUser = new _user["default"]({
                username: username,
                email: email.toLowerCase(),
                password: encryptedPassword
              }); // Create our JWT (attach to out User model)
              token = _jsonwebtoken["default"].sign({
                user_id: newUser._id,
                email: email
              }, process.env.JWT_STRING, {
                expiresIn: "2h"
              });
              newUser.token = token;

              // Save out user in MongoDB
              _context13.next = 14;
              return newUser.save();
            case 14:
              res = _context13.sent;
              return _context13.abrupt("return", _objectSpread({
                id: res.id
              }, res._doc));
            case 16:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }))();
    },
    loginUser: function loginUser(_, _ref7) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var _ref7$loginInput, email, password, user, token;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _ref7$loginInput = _ref7.loginInput, email = _ref7$loginInput.email, password = _ref7$loginInput.password;
              _context14.next = 3;
              return _user["default"].findOne({
                email: email
              });
            case 3:
              user = _context14.sent;
              _context14.t0 = user;
              if (!_context14.t0) {
                _context14.next = 9;
                break;
              }
              _context14.next = 8;
              return _bcryptjs["default"].compare(password, user.password);
            case 8:
              _context14.t0 = _context14.sent;
            case 9:
              if (!_context14.t0) {
                _context14.next = 15;
                break;
              }
              // Create a NEW token
              token = _jsonwebtoken["default"].sign({
                user_id: newUser._id,
                email: email
              }, process.env.JWT_STRING, {
                expiresIn: "2h"
              }); // Attach token to user model that we found above
              user.token = token;
              return _context14.abrupt("return", _objectSpread({
                id: res.id
              }, res._doc));
            case 15:
              throw new _apolloServerErrors.ApolloError("Incorrect password", "INCORRECT_PASSWORD");
            case 16:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }))();
    },
    deleteUser: function deleteUser(_, _ref8) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        var ID, wasDeleted;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              ID = _ref8.ID;
              _context15.next = 3;
              return _user["default"].deleteOne({
                _id: ID
              });
            case 3:
              wasDeleted = _context15.sent.deletedCount;
              return _context15.abrupt("return", wasDeleted);
            case 5:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }))();
    },
    editUser: function editUser(_, _ref9) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
        var ID, _ref9$editUserInput, name, password, tanks, wasEdited;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              ID = _ref9.ID, _ref9$editUserInput = _ref9.editUserInput, name = _ref9$editUserInput.name, password = _ref9$editUserInput.password, tanks = _ref9$editUserInput.tanks;
              _context16.next = 3;
              return _user["default"].updateOne({
                _id: ID
              }, {
                name: name,
                password: password,
                tanks: tanks
              });
            case 3:
              wasEdited = _context16.sent.modifiedCount;
              return _context16.abrupt("return", wasEdited);
            case 5:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }))();
    },
    createTank: function createTank(_, _ref10) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        var _ref10$tankInput, name, size, owner, stocking, createTank, res;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _ref10$tankInput = _ref10.tankInput, name = _ref10$tankInput.name, size = _ref10$tankInput.size, owner = _ref10$tankInput.owner, stocking = _ref10$tankInput.stocking;
              createTank = new _tank["default"]({
                name: name,
                size: size,
                owner: owner,
                stocking: stocking
              });
              _context17.next = 4;
              return createTank.save();
            case 4:
              res = _context17.sent;
              return _context17.abrupt("return", _objectSpread({
                id: res.id
              }, res._doc));
            case 6:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }))();
    },
    createFish: function createFish(_, _ref11) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
        var _ref11$fishInput, name, family, careLevel, temperament, diet, reefCompatibility, maxSize, minTankSize, imageUrl, createFish, res;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              _ref11$fishInput = _ref11.fishInput, name = _ref11$fishInput.name, family = _ref11$fishInput.family, careLevel = _ref11$fishInput.careLevel, temperament = _ref11$fishInput.temperament, diet = _ref11$fishInput.diet, reefCompatibility = _ref11$fishInput.reefCompatibility, maxSize = _ref11$fishInput.maxSize, minTankSize = _ref11$fishInput.minTankSize, imageUrl = _ref11$fishInput.imageUrl;
              createFish = new _fish["default"]({
                name: name,
                family: family,
                careLevel: careLevel,
                temperament: temperament,
                diet: diet,
                reefCompatibility: reefCompatibility,
                maxSize: maxSize,
                minTankSize: minTankSize,
                imageUrl: imageUrl
              });
              _context18.next = 4;
              return createFish.save();
            case 4:
              res = _context18.sent;
              return _context18.abrupt("return", _objectSpread({
                id: res.id
              }, res._doc));
            case 6:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }))();
    },
    editFish: function editFish(_, _ref12) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
        var ID, _ref12$editFishInput, name, family, careLevel, temperament, diet, reefCompatibility, maxSize, minTankSize, imageUrl, wasEdited;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              ID = _ref12.ID, _ref12$editFishInput = _ref12.editFishInput, name = _ref12$editFishInput.name, family = _ref12$editFishInput.family, careLevel = _ref12$editFishInput.careLevel, temperament = _ref12$editFishInput.temperament, diet = _ref12$editFishInput.diet, reefCompatibility = _ref12$editFishInput.reefCompatibility, maxSize = _ref12$editFishInput.maxSize, minTankSize = _ref12$editFishInput.minTankSize, imageUrl = _ref12$editFishInput.imageUrl;
              _context19.next = 3;
              return _fish["default"].updateOne({
                _id: ID
              }, {
                name: name,
                family: family,
                careLevel: careLevel,
                temperament: temperament,
                diet: diet,
                reefCompatibility: reefCompatibility,
                maxSize: maxSize,
                minTankSize: minTankSize,
                imageUrl: imageUrl
              });
            case 3:
              wasEdited = _context19.sent.modifiedCount;
              return _context19.abrupt("return", wasEdited);
            case 5:
            case "end":
              return _context19.stop();
          }
        }, _callee19);
      }))();
    },
    createCompatibilityChart: function createCompatibilityChart(_, _ref13) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
        var _ref13$compatibilityC, family, compatible, notCompatible, cautionRequired, createCompatibilityChart, res;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              _ref13$compatibilityC = _ref13.compatibilityChartInput, family = _ref13$compatibilityC.family, compatible = _ref13$compatibilityC.compatible, notCompatible = _ref13$compatibilityC.notCompatible, cautionRequired = _ref13$compatibilityC.cautionRequired;
              createCompatibilityChart = new _compatibilityChart["default"]({
                family: family,
                compatible: compatible,
                notCompatible: notCompatible,
                cautionRequired: cautionRequired
              });
              _context20.next = 4;
              return createCompatibilityChart.save();
            case 4:
              res = _context20.sent;
              return _context20.abrupt("return", _objectSpread({
                id: res.id
              }, res._doc));
            case 6:
            case "end":
              return _context20.stop();
          }
        }, _callee20);
      }))();
    },
    createFishFamily: function createFishFamily(_, _ref14) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
        var name, createFishFamily, res;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              name = _ref14.fishFamilyInput.name;
              createFishFamily = new _fishFamily["default"]({
                name: name
              });
              _context21.next = 4;
              return createFishFamily.save();
            case 4:
              res = _context21.sent;
              return _context21.abrupt("return", _objectSpread({
                id: res.id
              }, res._doc));
            case 6:
            case "end":
              return _context21.stop();
          }
        }, _callee21);
      }))();
    },
    editFishFamily: function editFishFamily(_, _ref15) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
        var ID, _ref15$editFishFamily, name, fish, fishFamilyWasEdited;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              ID = _ref15.ID, _ref15$editFishFamily = _ref15.editFishFamilyInput, name = _ref15$editFishFamily.name, fish = _ref15$editFishFamily.fish;
              _context22.next = 3;
              return _fishFamily["default"].updateOne({
                _id: ID
              }, {
                name: name,
                fish: fish
              });
            case 3:
              fishFamilyWasEdited = _context22.sent.modifiedCount;
              return _context22.abrupt("return", fishFamilyWasEdited);
            case 5:
            case "end":
              return _context22.stop();
          }
        }, _callee22);
      }))();
    }
  }
};