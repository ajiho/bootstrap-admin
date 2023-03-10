/*!
 * bootstrap-quicktab v1.0.0 (https://gitee.com/ajiho/bootstrap-quicktab)
 * Copyright 2021-2023 ajiho
 * license MIT (https://gitee.com/ajiho/bootstrap-quicktab/blob/master/LICENSE)
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Quicktab = factory());
})(this, (function () { 'use strict';

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var md5Exports = {};
  var md5 = {
    get exports(){ return md5Exports; },
    set exports(v){ md5Exports = v; },
  };

  var cryptExports = {};
  var crypt = {
    get exports(){ return cryptExports; },
    set exports(v){ cryptExports = v; },
  };

  (function() {
    var base64map
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

    crypt$1 = {
      // Bit-wise rotation left
      rotl: function(n, b) {
        return (n << b) | (n >>> (32 - b));
      },

      // Bit-wise rotation right
      rotr: function(n, b) {
        return (n << (32 - b)) | (n >>> b);
      },

      // Swap big-endian to little-endian and vice versa
      endian: function(n) {
        // If number given, swap endian
        if (n.constructor == Number) {
          return crypt$1.rotl(n, 8) & 0x00FF00FF | crypt$1.rotl(n, 24) & 0xFF00FF00;
        }

        // Else, assume array and swap all items
        for (var i = 0; i < n.length; i++)
          n[i] = crypt$1.endian(n[i]);
        return n;
      },

      // Generate an array of any length of random bytes
      randomBytes: function(n) {
        for (var bytes = []; n > 0; n--)
          bytes.push(Math.floor(Math.random() * 256));
        return bytes;
      },

      // Convert a byte array to big-endian 32-bit words
      bytesToWords: function(bytes) {
        for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
          words[b >>> 5] |= bytes[i] << (24 - b % 32);
        return words;
      },

      // Convert big-endian 32-bit words to a byte array
      wordsToBytes: function(words) {
        for (var bytes = [], b = 0; b < words.length * 32; b += 8)
          bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
        return bytes;
      },

      // Convert a byte array to a hex string
      bytesToHex: function(bytes) {
        for (var hex = [], i = 0; i < bytes.length; i++) {
          hex.push((bytes[i] >>> 4).toString(16));
          hex.push((bytes[i] & 0xF).toString(16));
        }
        return hex.join('');
      },

      // Convert a hex string to a byte array
      hexToBytes: function(hex) {
        for (var bytes = [], c = 0; c < hex.length; c += 2)
          bytes.push(parseInt(hex.substr(c, 2), 16));
        return bytes;
      },

      // Convert a byte array to a base-64 string
      bytesToBase64: function(bytes) {
        for (var base64 = [], i = 0; i < bytes.length; i += 3) {
          var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
          for (var j = 0; j < 4; j++)
            if (i * 8 + j * 6 <= bytes.length * 8)
              base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
            else
              base64.push('=');
        }
        return base64.join('');
      },

      // Convert a base-64 string to a byte array
      base64ToBytes: function(base64) {
        // Remove non-base-64 characters
        base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

        for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
            imod4 = ++i % 4) {
          if (imod4 == 0) continue;
          bytes.push(((base64map.indexOf(base64.charAt(i - 1))
              & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
              | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
        }
        return bytes;
      }
    };

    crypt.exports = crypt$1;
  })();

  var charenc = {
    // UTF-8 encoding
    utf8: {
      // Convert a string to a byte array
      stringToBytes: function(str) {
        return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
      },

      // Convert a byte array to a string
      bytesToString: function(bytes) {
        return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
      }
    },

    // Binary encoding
    bin: {
      // Convert a string to a byte array
      stringToBytes: function(str) {
        for (var bytes = [], i = 0; i < str.length; i++)
          bytes.push(str.charCodeAt(i) & 0xFF);
        return bytes;
      },

      // Convert a byte array to a string
      bytesToString: function(bytes) {
        for (var str = [], i = 0; i < bytes.length; i++)
          str.push(String.fromCharCode(bytes[i]));
        return str.join('');
      }
    }
  };

  var charenc_1 = charenc;

  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */

  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  var isBuffer_1 = function (obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
  };

  function isBuffer (obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  }

  // For Node v0.10 support. Remove this eventually.
  function isSlowBuffer (obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
  }

  (function(){
    var crypt = cryptExports,
        utf8 = charenc_1.utf8,
        isBuffer = isBuffer_1,
        bin = charenc_1.bin,

    // The core
    md5$1 = function (message, options) {
      // Convert to byte array
      if (message.constructor == String)
        if (options && options.encoding === 'binary')
          message = bin.stringToBytes(message);
        else
          message = utf8.stringToBytes(message);
      else if (isBuffer(message))
        message = Array.prototype.slice.call(message, 0);
      else if (!Array.isArray(message) && message.constructor !== Uint8Array)
        message = message.toString();
      // else, assume byte array already

      var m = crypt.bytesToWords(message),
          l = message.length * 8,
          a =  1732584193,
          b = -271733879,
          c = -1732584194,
          d =  271733878;

      // Swap endian
      for (var i = 0; i < m.length; i++) {
        m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
               ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
      }

      // Padding
      m[l >>> 5] |= 0x80 << (l % 32);
      m[(((l + 64) >>> 9) << 4) + 14] = l;

      // Method shortcuts
      var FF = md5$1._ff,
          GG = md5$1._gg,
          HH = md5$1._hh,
          II = md5$1._ii;

      for (var i = 0; i < m.length; i += 16) {

        var aa = a,
            bb = b,
            cc = c,
            dd = d;

        a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
        d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
        c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
        b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
        a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
        d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
        c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
        b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
        a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
        d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
        c = FF(c, d, a, b, m[i+10], 17, -42063);
        b = FF(b, c, d, a, m[i+11], 22, -1990404162);
        a = FF(a, b, c, d, m[i+12],  7,  1804603682);
        d = FF(d, a, b, c, m[i+13], 12, -40341101);
        c = FF(c, d, a, b, m[i+14], 17, -1502002290);
        b = FF(b, c, d, a, m[i+15], 22,  1236535329);

        a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
        d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
        c = GG(c, d, a, b, m[i+11], 14,  643717713);
        b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
        a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
        d = GG(d, a, b, c, m[i+10],  9,  38016083);
        c = GG(c, d, a, b, m[i+15], 14, -660478335);
        b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
        a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
        d = GG(d, a, b, c, m[i+14],  9, -1019803690);
        c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
        b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
        a = GG(a, b, c, d, m[i+13],  5, -1444681467);
        d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
        c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
        b = GG(b, c, d, a, m[i+12], 20, -1926607734);

        a = HH(a, b, c, d, m[i+ 5],  4, -378558);
        d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
        c = HH(c, d, a, b, m[i+11], 16,  1839030562);
        b = HH(b, c, d, a, m[i+14], 23, -35309556);
        a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
        d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
        c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
        b = HH(b, c, d, a, m[i+10], 23, -1094730640);
        a = HH(a, b, c, d, m[i+13],  4,  681279174);
        d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
        c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
        b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
        a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
        d = HH(d, a, b, c, m[i+12], 11, -421815835);
        c = HH(c, d, a, b, m[i+15], 16,  530742520);
        b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

        a = II(a, b, c, d, m[i+ 0],  6, -198630844);
        d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
        c = II(c, d, a, b, m[i+14], 15, -1416354905);
        b = II(b, c, d, a, m[i+ 5], 21, -57434055);
        a = II(a, b, c, d, m[i+12],  6,  1700485571);
        d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
        c = II(c, d, a, b, m[i+10], 15, -1051523);
        b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
        a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
        d = II(d, a, b, c, m[i+15], 10, -30611744);
        c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
        b = II(b, c, d, a, m[i+13], 21,  1309151649);
        a = II(a, b, c, d, m[i+ 4],  6, -145523070);
        d = II(d, a, b, c, m[i+11], 10, -1120210379);
        c = II(c, d, a, b, m[i+ 2], 15,  718787259);
        b = II(b, c, d, a, m[i+ 9], 21, -343485551);

        a = (a + aa) >>> 0;
        b = (b + bb) >>> 0;
        c = (c + cc) >>> 0;
        d = (d + dd) >>> 0;
      }

      return crypt.endian([a, b, c, d]);
    };

    // Auxiliary functions
    md5$1._ff  = function (a, b, c, d, x, s, t) {
      var n = a + (b & c | ~b & d) + (x >>> 0) + t;
      return ((n << s) | (n >>> (32 - s))) + b;
    };
    md5$1._gg  = function (a, b, c, d, x, s, t) {
      var n = a + (b & d | c & ~d) + (x >>> 0) + t;
      return ((n << s) | (n >>> (32 - s))) + b;
    };
    md5$1._hh  = function (a, b, c, d, x, s, t) {
      var n = a + (b ^ c ^ d) + (x >>> 0) + t;
      return ((n << s) | (n >>> (32 - s))) + b;
    };
    md5$1._ii  = function (a, b, c, d, x, s, t) {
      var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
      return ((n << s) | (n >>> (32 - s))) + b;
    };

    // Package private blocksize
    md5$1._blocksize = 16;
    md5$1._digestsize = 16;

    md5.exports = function (message, options) {
      if (message === undefined || message === null)
        throw new Error('Illegal argument ' + message);

      var digestbytes = crypt.wordsToBytes(md5$1(message, options));
      return options && options.asBytes ? digestbytes :
          options && options.asString ? bin.bytesToString(digestbytes) :
          crypt.bytesToHex(digestbytes);
    };

  })();

  /**
   * --------------------------------------------
   * BSA Storage.js
   * License MIT
   * --------------------------------------------
   */
  var Storage = /*#__PURE__*/function () {
    function Storage(type) {
      if (type === void 0) {
        type = 1;
      }
      //type:1 ??????sessionStorage type:2
      this.type = type;
    }

    /**
     * ????????????
     * @param name ?????????key
     * @param data ????????????
     */
    var _proto = Storage.prototype;
    _proto.set = function set(name, data) {
      this.remove(name);
      if (this.type === 1) {
        sessionStorage.setItem(name, JSON.stringify(data));
      } else if (this.type === 2) {
        localStorage.setItem(name, JSON.stringify(data));
      }
    }

    /**
     * ????????????
     * @param name ?????????key
     * @returns {any}
     */;
    _proto.get = function get(name) {
      if (this.type === 1) {
        return JSON.parse(sessionStorage.getItem(name));
      } else if (this.type === 2) {
        return JSON.parse(localStorage.getItem(name));
      }
    }

    /**
     * ????????????
     * @param name
     */;
    _proto.remove = function remove(name) {
      if (this.type === 1) {
        sessionStorage.removeItem(name);
      } else if (this.type === 2) {
        localStorage.removeItem(name);
      }
    }

    /**
     * ???????????? sessionStorage???localStorage??????
     * @param name
     */;
    Storage.removeBoth = function removeBoth(name) {
      sessionStorage.removeItem(name);
      localStorage.removeItem(name);
    };
    return Storage;
  }();

  var Util = {
    //????????????
    delegate: function delegate(element, type, selector, fn, exceptSelector) {
      element.addEventListener(type, function (e) {
        var target = e.target;
        var currTarget = e.currentTarget;
        while (target !== currTarget && target instanceof HTMLElement) {
          if (target.matches(selector)) {
            fn.call(target, e);
            break;
          } else if (target.matches(exceptSelector)) {
            break;
          }
          target = target.parentNode;
        }
      }, false);
    },
    /**
     * ??????js??????jq???siblings()??????
     * @param element
     * @param selector
     * @returns {*[]}
     */
    siblings: function siblings(element, selector) {
      selector = selector || false;
      //????????????????????????????????????????????????????????????
      var pChildren = element.parentNode.children;
      var eleMatch = [];
      //?????????????????????
      for (var _iterator = _createForOfIteratorHelperLoose(pChildren), _step; !(_step = _iterator()).done;) {
        var children = _step.value;
        if (children instanceof HTMLElement) {
          if (selector) {
            //????????????????????????????????????
            if (children !== element && children.matches(selector)) {
              eleMatch.push(children);
            }
          } else {
            //????????????
            if (children !== element) {
              eleMatch.push(children);
            }
          }
        }
      }
      return eleMatch;
    },
    /**
     * ???????????????????????????
     * @param htmlStr
     * @returns {Element}
     */
    createNode: function createNode(htmlStr) {
      var div = document.createElement('div');
      div.innerHTML = htmlStr;
      return div.children[0];
    },
    /**
     * ????????????
     * @param func
     * @param wait
     * @returns {(function(...[*]): void)|*}
     */
    debounce: function debounce(func, wait) {
      if (wait === void 0) {
        wait = 500;
      }
      var timeID;
      return function () {
        var _this = this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (timeID) clearTimeout(timeID);
        timeID = setTimeout(function () {
          func.apply(_this, args);
        }, wait);
      };
    },
    fadeIn: function fadeIn(el, display) {
      el.style.opacity = 0;
      el.style.display = display || 'flex';
      (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .01) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
        }
      })();
    },
    fadeOut: function fadeOut(el) {
      el.style.opacity = 1;
      (function fade() {
        if ((el.style.opacity -= .1) < 0) {
          el.style.display = 'none';
        } else {
          requestAnimationFrame(fade);
        }
      })();
    },
    // ??????iframe????????????
    canAccessIFrame: function canAccessIFrame(iframe) {
      var html = null;
      try {
        // ???????????????
        var doc = iframe.contentDocument || iframe.contentWindow.document;
        html = doc.body.innerHTML;
      } catch (err) {
        // do nothing
      }
      return html !== null;
    },
    //????????????????????????
    isString: function isString(str) {
      return typeof str == 'string' && str.constructor === String;
    }
  };

  var TAB_ID_KEY = 'data-tab-id';
  var TAB_URL_KEY = 'data-tab-url';

  //????????????
  var TAB_NAMESPACE = 'quicktab';

  // tab???????????????
  var TAB_ACTIVE_CLASS_NAME = 'active';

  // tab?????????????????????
  var TAB_SCROLL_AREA_CLASS_NAME = 'scroll_area';

  // tab?????????
  var TAB_FULLSCREEN_CLASS_NAME = 'qt-fullscreen';

  // tab?????????
  var TAB_PANE_HIDE_CLASS_NAME = 'outing';

  // tab????????????????????????
  var TAB_CLOSE_BTN_ICON_CLASS_NAME = 'qt-close';

  // ??????tab?????????????????????????????????????????????????????????
  var TAB_CONTEXTMENU_POINTER_EVENTS_CLASS_NAME = 'pen';

  // ???????????????????????????????????????????????????????????????????????????
  var TAB_MORE_ACTION_DROPDOWNS_POINTER_EVENTS_CLASS_NAME = 'more-menu-pen';

  // ????????????class
  var TAB_FULLSCREEN_TRIGGER_CLASS_NAME = 'fullscreen';

  // ????????????nav-link
  var TAB_FIXED_WIDTH_NAV_LINK_CLASS_NAME = 'iconbtn';

  // ????????????
  var TAB_FULLSCREEN_TPL = "\n        <!-- \u5168\u5C4F\u5B9E\u73B0 -->\n        <li class=\"nav-item  border-start\">\n            <button class=\"nav-link " + TAB_FIXED_WIDTH_NAV_LINK_CLASS_NAME + " " + TAB_FULLSCREEN_TRIGGER_CLASS_NAME + "\" >\n                <i class=\"bi bi-arrows-fullscreen\"></i>\n            </button>\n        </li>\n";

  // tab???????????????
  var TAB_MAIN_TPL = "\n            <ul class=\"nav nav-pills border flex-nowrap\">\n                <!--                \u5DE6\u8FB9\u7684\u7BAD\u5934-->\n                <li class=\"nav-item border-end\" >\n                    <button class=\"nav-link " + TAB_FIXED_WIDTH_NAV_LINK_CLASS_NAME + " move-left-btn\" ><i class=\"bi bi-caret-left\"></i></button>\n                </li>\n                <!--                \u4E2D\u95F4\u6EDA\u52A8\u7684\u533A\u57DF-->\n                <li class=\"nav-item flex-grow-1\">\n                    <div class=\"" + TAB_SCROLL_AREA_CLASS_NAME + "\"></div>\n                </li>\n                <!--                \u53F3\u8FB9\u7684\u7BAD\u5934-->\n                <li class=\"nav-item  border-start\" >\n                    <button class=\"nav-link " + TAB_FIXED_WIDTH_NAV_LINK_CLASS_NAME + " move-right-btn\" >\n                        <i class=\"bi bi-caret-right\"></i>\n                    </button>\n                </li>\n                <!--                \u64CD\u4F5C\u533A\u57DF-->\n                <li class=\"nav-item  border-start dropdown\" >\n                    <button class=\"nav-link " + TAB_FIXED_WIDTH_NAV_LINK_CLASS_NAME + "\" data-bs-toggle=\"dropdown\" >\n                        <i class=\"bi bi-caret-down\"></i>\n                    </button>\n                    <ul class=\"dropdown-menu dropdown-menu-end\">\n                        <li>\n                            <button class=\"dropdown-item rollback-current\" type=\"button\">\u56DE\u5230\u5F53\u524D</button>\n                        </li>\n                        <li>\n                            <button class=\"dropdown-item refresh-current\" type=\"button\">\u5237\u65B0\u5F53\u524D</button>\n                        </li>\n                        <li>\n                            <button class=\"dropdown-item close-current\" type=\"button\">\u5173\u95ED\u5F53\u524D</button>\n                        </li>\n                        <li>\n                            <button class=\"dropdown-item close-other\" type=\"button\">\u5173\u95ED\u5176\u4ED6</button>\n                        </li>\n                        <li>\n                            <button class=\"dropdown-item close-all\" type=\"button\">\u5173\u95ED\u5168\u90E8</button>\n                        </li>\n                    </ul>\n                </li>\n                {{tab_fullscreen}}\n            </ul>\n                \n            <!-- \u9762\u677F\u5BB9\u5668 -->\n            <div class=\"flex-grow-1 border-top-0 border\">\n            </div>\n";

  // ??????tab
  var TAB_TPL = "<button class=\"nav-link flex-shrink-0 border-end position-relative\" type=\"button\" " + TAB_URL_KEY + "=\"{{url}}\"  " + TAB_ID_KEY + "=\"{{id}}\">{{title}}</button>";
  // ?????????????????????tab
  var TAB_WITH_CLOSE_TPL = "<button class=\"nav-link flex-shrink-0  border-end position-relative\" type=\"button\" " + TAB_URL_KEY + "=\"{{url}}\"  " + TAB_ID_KEY + "=\"{{id}}\">{{title}}<i class=\"bi bi-x " + TAB_CLOSE_BTN_ICON_CLASS_NAME + "\"></i></button>";

  // tab????????????
  var TAB_LOADING_TPL = "\n     <!--loading-->\n     <div class=\"position-absolute start-0 end-0 top-0 bottom-0 bg-body-tertiary show d-flex align-items-center justify-content-center\">\n         <div class=\"spinner-border text-body-tertiary\" role=\"status\">\n         <span class=\"visually-hidden\">Loading...</span>\n         </div>\n    </div>\n";

  //tab????????????
  var TAB_PANE_TPL = "\n<!--\u6BCF\u4E2A\u9762\u677F-->\n<div class=\"h-100 w-100 position-relative\" " + TAB_ID_KEY + "=\"{{id}}\">\n    " + TAB_LOADING_TPL + "    \n    <iframe src=\"{{url}}\" class=\"d-block w-100 h-100\"></iframe>\n</div>\n";

  //???????????????????????????
  var TBA_CONTEXTMENU_TPL = "\n            <div class=\"list-group " + TAB_NAMESPACE + "-contextmenu " + TAB_NAMESPACE + "-contextmenu-{{id}} shadow-sm\">\n                <button type=\"button\" class=\"list-group-item list-group-item-action refresh\">\u5237\u65B0</button>\n                <button type=\"button\" class=\"list-group-item list-group-item-action close\">\u5173\u95ED</button>\n                <button type=\"button\" class=\"list-group-item list-group-item-action close-other\">\u5173\u95ED\u5176\u5B83</button>\n            </div>";

  // ????????????
  var DEFAULT = {
    //dom?????????
    selector: null,
    //???????????????????????????222px
    minHeight: '',
    //?????? ????????????????????????100%
    height: '',
    //?????? ????????????????????????100%
    width: '',
    //?????? null:?????????  sessionStorage  localStorage
    cache: null,
    //??????tab
    tabs: [],
    //??????????????????
    fullscreen: {
      //??????????????????, true:???????????? false:???????????????
      enable: false,
      //?????????????????????
      fullscreen: null,
      //???????????????????????????
      exitFullscreen: null
    },
    //??????tab????????????
    enableContextmenu: false,
    //????????????????????????tab
    enableMouseWheelToggleTab: false
  };

  //??????tab???????????????
  var TABDEFAULT = {
    //??????
    title: '',
    //??????
    url: '',
    //tab????????????
    id: null,
    //??????????????????
    close: true
  };
  var Quicktab = /*#__PURE__*/function () {
    //????????????

    function Quicktab(option) {
      this._option = Object.assign({}, DEFAULT, option);

      //??????tab???id???????????????
      this._tab_id = md5Exports(this._option.selector);
      this._tab_cache_key = TAB_NAMESPACE + "-" + this._tab_id;

      //????????????
      this._buildStyle();
      //???????????????
      this.storage = this._initCache();
      // tab?????????
      this._init();

      //???????????????????????????,????????????????????????????????????????????????????????????tab???..
      Quicktab.instances[this._tab_id] = this;
    }
    var _proto = Quicktab.prototype;
    _proto._initCache = function _initCache() {
      if (this._option.cache === 'localStorage') {
        return new Storage(2);
      } else if (this._option.cache === 'sessionStorage') {
        return new Storage(1);
      } else {
        return null;
      }
    }

    //????????????
    ;
    Quicktab.getTabId = function getTabId(tabEl) {
      return tabEl.getAttribute(TAB_ID_KEY);
    };
    Quicktab.getTabUrl = function getTabUrl(tabEl) {
      return tabEl.getAttribute(TAB_URL_KEY);
    };
    Quicktab.canAccessIFrame = function canAccessIFrame(iframe) {
      return Util.canAccessIFrame(iframe);
    };
    Quicktab.getTabIdByUrl = function getTabIdByUrl(url) {
      return md5Exports(url);
    }

    // ??????tinymce???????????????????????????tinymce.get('editor').setContent('<h1>?????????????????????</h1>')
    ;
    Quicktab.get = function get(selector) {
      return Quicktab.instances[md5Exports(selector)];
    };
    _proto._buildStyle = function _buildStyle() {
      var styleEl = document.querySelector("style[namespace=\"" + TAB_NAMESPACE + "\"]");
      if (!(styleEl instanceof HTMLStyleElement)) {
        var style = document.createElement('style');
        style.setAttribute('namespace', TAB_NAMESPACE);
        style.textContent = "\n                ." + TAB_NAMESPACE + "{\n                    height:222px;\n                    background-color: var(--bs-body-bg);\n                    display: flex;\n                    flex-direction: column;\n                }\n            \n                /*  \u9762\u677F\u79FB\u9664\u6837\u5F0F */\n                ." + TAB_NAMESPACE + " ." + TAB_PANE_HIDE_CLASS_NAME + " {\n                    position: absolute !important;\n                    transform: translateX(-200%);\n                }\n            \n                /*\u53BB\u9664\u6240\u6709\u7684\u5706\u89D2*/\n                ." + TAB_NAMESPACE + " .nav-pills .nav-link {\n                    border-radius: 0;\n                }\n            \n                ." + TAB_NAMESPACE + " .nav-pills .nav-link ." + TAB_CLOSE_BTN_ICON_CLASS_NAME + " {\n                    position: absolute;\n                    top: 0;\n                    right: 0;\n                    display: none;\n                    cursor: pointer;\n                }\n            \n                ." + TAB_NAMESPACE + " .nav-pills .nav-link ." + TAB_CLOSE_BTN_ICON_CLASS_NAME + ":hover {\n                    color: #f00;\n                }\n            \n                ." + TAB_NAMESPACE + " .nav-pills .nav-link:hover ." + TAB_CLOSE_BTN_ICON_CLASS_NAME + " {\n                    display: inline;\n                }\n                \n                \n                ." + TAB_NAMESPACE + " li.flex-grow-1 {\n                    width:0;\n                }\n                /*\u5FC5\u987B\u6DFB\u52A0\u8BE5\u6837\u5F0F\u5426\u5219\u6EDA\u52A8\u6761\u4F1A\u8D85\u51FA*/\n                ." + TAB_NAMESPACE + " div.flex-grow-1 {\n                    overflow: hidden;\n                }\n                \n         \n                ." + TAB_NAMESPACE + " li.flex-grow-1 ." + TAB_SCROLL_AREA_CLASS_NAME + "{\n                    position: relative;\n                    display:flex;\n                    flex-wrap: nowrap;\n                    align-items: center;\n                    scroll-behavior:smooth;\n                    overflow: scroll;\n                    scrollbar-width: none;\n                    -ms-overflow-style: none;\n                }\n                \n                  /* \u8C37\u6B4C\u6D4F\u89C8\u5668 */\n                ." + TAB_NAMESPACE + " li.flex-grow-1 ." + TAB_SCROLL_AREA_CLASS_NAME + "::-webkit-scrollbar {\n                     display: none;\n                }\n                \n                /*\u4E2D\u95F4\u7684tab\u8BBE\u7F6E\u4E00\u4E2A\u6700\u5927\u7684\u5BBD\u5EA6\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7*/\n                ." + TAB_NAMESPACE + " li.flex-grow-1 .nav-link {\n                    min-width: 0;\n                    max-width: 160px;\n                    white-space: nowrap;\n                    text-overflow: ellipsis;\n                    overflow: hidden;\n                }\n            \n                /*\u7ED9\u56FE\u6807\u6309\u94AE\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u5BBD\u5EA6\uFF0C\u5426\u5219\u6EDA\u52A8\u5230\u6307\u5B9Atab\u4F4D\u7F6E\u65F6\u4E0D\u7CBE\u786E*/\n                ." + TAB_NAMESPACE + " ." + TAB_FIXED_WIDTH_NAV_LINK_CLASS_NAME + "{\n                    width: 48px;\n                }\n            \n                ." + TAB_NAMESPACE + " .show {\n                    opacity: 1;\n                }\n            \n                ." + TAB_NAMESPACE + " .hide {\n                    opacity: 0;\n                    transition: opacity 800ms;\n                }\n            \n                ." + TAB_NAMESPACE + "." + TAB_FULLSCREEN_CLASS_NAME + " {\n                    height: 100% !important;\n                    width: 100% !important;\n                    position: fixed !important;\n                    z-index: 99999 !important;\n                    top: 0 !important;\n                    bottom: 0 !important;\n                    left: 0 !important;\n                    right: 0 !important;\n                }\n                \n                ." + TAB_NAMESPACE + "-contextmenu {\n                  display: none;\n                  position: fixed;\n                  width: 100px;\n                  background: #fff;\n                  z-index: 999999 !important;\n                }\n                \n                \n                ." + TAB_NAMESPACE + "." + TAB_CONTEXTMENU_POINTER_EVENTS_CLASS_NAME + " iframe {\n                  pointer-events: none;\n                }\n                \n                ." + TAB_NAMESPACE + "." + TAB_MORE_ACTION_DROPDOWNS_POINTER_EVENTS_CLASS_NAME + " iframe {\n                  pointer-events: none;\n                }\n            ";
        document.head.appendChild(style);
      }
    };
    _proto._init = function _init() {
      //??????
      this.listeners = [];
      this.handlers = {};

      //??????
      this._tab_container = document.querySelector(this._option.selector);

      //???????????????????????????????????????dom??????
      if (!(this._tab_container instanceof HTMLElement)) {
        throw new Error("selector '" + this._option.selector + "' invalid");
      }

      //?????????,??????????????????????????????????????????dom??????
      if (this._tab_container.classList.contains(TAB_NAMESPACE)) {
        throw new Error("The provided selector '" + this._option.selector + "' has been initialized");
      }

      // ???????????????data????????????
      this._dataAttrAssign();

      //?????????????????????(??????????????????)
      this._setContainerWH();

      //????????????????????????????????????
      this._tab_container.classList.add(TAB_NAMESPACE);

      //??????????????????
      this._tab_container.insertAdjacentHTML('beforeEnd', this._formatMainHtmlStr());

      //tab?????????
      this._tab_wraper = this._tab_container.querySelector("li.flex-grow-1 > ." + TAB_SCROLL_AREA_CLASS_NAME);
      //tab???????????????
      this._tab_pane_wraper = this._tab_container.querySelector('div.flex-grow-1');
      if (this._option.enableContextmenu === true) {
        //??????????????????dom
        this._buildContextmenu();
      }

      //????????????
      this._addEventListener();

      //??????tab(?????????????????????????????????option???????????????)
      this._restoreTabs();
    };
    _proto.addTab = function addTab(option) {
      //???????????????id??????
      option.id = md5Exports(option.url);
      //????????????
      option = Object.assign({}, TABDEFAULT, option);
      if (this.getTabById(option.id) === null) {
        //???????????????tab???????????????tab

        //??????tab
        var tabHtmlStr = this._getFormatTabStr(option);
        this._tab_wraper.insertAdjacentHTML('beforeEnd', tabHtmlStr);

        //??????iframe
        var iframeHtmlStr = this._formatString(TAB_PANE_TPL, option);
        this._tab_pane_wraper.insertAdjacentHTML('beforeEnd', iframeHtmlStr);

        //????????????????????????
        this._addTabToCache(option);
      }

      //??????tab
      this.activeTabById(option.id);
    };
    _proto.activeTabById = function activeTabById(id) {
      var _this = this;

      //??????????????????tab
      _this._activeCacheTabById(id);

      //???????????????tab???????????????
      var preActiveTab = this.getActiveTab();
      if (preActiveTab instanceof HTMLElement) {
        preActiveTab.classList.remove(TAB_ACTIVE_CLASS_NAME);
      }

      //?????????tab??????????????????
      this.getTabById(id).classList.add('active');

      //???????????????(??????????????????????????????.outing?????????????????????????????????????????????)
      for (var _iterator = _createForOfIteratorHelperLoose(this._tab_pane_wraper.children), _step; !(_step = _iterator()).done;) {
        var tab_pane = _step.value;
        tab_pane.classList.add(TAB_PANE_HIDE_CLASS_NAME);
      }

      //??????????????????????????????(?????????????????????tab)
      var tabPane = this.getTabPaneById(id);
      if (!(tabPane instanceof HTMLElement)) {
        //???????????????????????????iframe
        this._addTabPaneById(id);
      }

      //???iframe????????????
      _this._addIframeLoadEventById(id);

      //??????????????????????????????
      this.getTabPaneById(id).classList.remove(TAB_PANE_HIDE_CLASS_NAME);

      //??????????????????tab??????
      this.scrollToTabById(id);
    }

    /**
     * ???????????????id???tab??????
     * @param id
     */;
    _proto.scrollToTabById = function scrollToTabById(id) {
      var tab = this.getTabById(id);
      // ?????????????????????????????? offsetLeft  - ???????????? offsetWidth ????????? + ?????????????????? offsetWidth ?????????
      this._tab_wraper.scrollLeft = tab.offsetLeft - this._tab_wraper.offsetWidth / 2 + tab.offsetWidth / 2;
    };
    _proto.getTabById = function getTabById(id) {
      return this._tab_wraper.querySelector("[data-tab-id=\"" + id + "\"]");
    };
    _proto.getTabs = function getTabs() {
      return this._tab_wraper.querySelectorAll('button.nav-link');
    };
    _proto.getActiveTab = function getActiveTab() {
      return this._tab_wraper.querySelector('button.nav-link.active');
    };
    _proto.getIFrameById = function getIFrameById(id) {
      return this.getTabPaneById(id).querySelector('iframe');
    };
    _proto.getTabPaneById = function getTabPaneById(id) {
      return this._tab_pane_wraper.querySelector("[data-tab-id=\"" + id + "\"]");
    };
    _proto.on = function on(type, handler) {
      if (typeof this.handlers[type] === 'undefined') {
        this.handlers[type] = [];
      }
      this.listeners.push(type);
      this.handlers[type].push(handler);
      return this;
    };
    _proto.off = function off(type, handler) {
      if (this.handlers[type] instanceof Array) {
        var handlers = this.handlers[type];
        for (var i = 0; i < handlers.length; i++) {
          if (handlers[i] === handler) {
            this.listeners.splice(i, 1);
            handlers.splice(i, 1);
            break;
          }
        }
        return this;
      }
    };
    _proto._emit = function _emit(event) {
      if (!event.target) {
        event.target = this;
      }
      if (this.handlers[event.type] instanceof Array) {
        return this.handlers[event.type][0](event);
      }
      return false;
    }

    /**
     * ?????????????????????
     * @param str
     * @param data
     * @returns {*}
     * @private
     */;
    _proto._formatString = function _formatString(str, data) {
      return str.replace(/{{(\w+)}}/g, function (matchingStr, group1) {
        return data[group1];
      });
    }

    // ???????????????????????????
    ;
    _proto._buildContextmenu = function _buildContextmenu() {
      //?????????????????????????????????id,??????????????????????????????
      var contextmenu_str = this._formatString(TBA_CONTEXTMENU_TPL, {
        id: this._tab_id
      });
      //?????????body
      document.body.insertAdjacentHTML('beforeEnd', contextmenu_str);
      //quicktab-contextmenu-f2e0e5e1dee1f176ee92e5952515255c
      this._tab_contextmenu_wraper = document.querySelector("." + TAB_NAMESPACE + "-contextmenu-" + this._tab_id);
    }

    //????????????
    ;
    _proto._addEventListener = function _addEventListener() {
      var _this = this;

      //?????????????????????????????????????????????
      window.addEventListener('resize', Util.debounce(function () {
        if (_this._option.enableContextmenu === true) {
          //??????tab???????????????
          _this._closeTabsContextmenu();
        }
        //??????????????????
        _this.scrollToActiveTab();
        _this._moreMenuDropdownHide();
      }, 150));

      //tab????????????
      Util.delegate(_this._tab_wraper, 'click', 'button.nav-link', function () {
        _this.activeTabById(Quicktab.getTabId(this));
      }, "." + TAB_CLOSE_BTN_ICON_CLASS_NAME);

      //tab??????
      Util.delegate(_this._tab_wraper, 'click', "." + TAB_CLOSE_BTN_ICON_CLASS_NAME, function () {
        _this.closeTabById(Quicktab.getTabId(this.parentNode));
      });

      //??????
      Util.delegate(_this._tab_container, 'click', "." + TAB_FULLSCREEN_TRIGGER_CLASS_NAME, function () {
        if (this.querySelector('.bi-arrows-fullscreen') instanceof HTMLElement) {
          _this.fullscreen();
        } else {
          _this.exitFullscreen();
        }
      });

      //????????????????????????
      Util.delegate(_this._tab_container, 'click', '.move-left-btn', function () {
        _this.leftScroll();
      });

      //????????????????????????
      Util.delegate(_this._tab_container, 'click', '.move-right-btn', function () {
        _this.rightScroll();
      });

      //????????????
      Util.delegate(_this._tab_container, 'click', '.rollback-current', function () {
        _this.scrollToActiveTab();
      });

      //????????????
      Util.delegate(_this._tab_container, 'click', '.refresh-current', function () {
        _this.refreshActiveTab();
      });

      //?????????????????????????????????
      _this._moreMenuEvent();

      // ??????data??????????????????????????????tab
      Util.delegate(document.body, 'click', '[data-qt-tab][data-qt-target]', function (e) {
        e.preventDefault();
        if (this.getAttribute('data-qt-target') === _this._option.selector) {
          // console.log('3333');

          var tab = Object.assign({}, TABDEFAULT, JSON.parse(this.getAttribute('data-qt-tab')));
          _this.addTab(tab);
        }
      });

      //??????????????????tab
      Util.delegate(_this._tab_container, 'click', '.close-current', function () {
        //?????????????????????id
        _this.closeActiveTab();
      });

      //??????????????????tab?????????tab
      Util.delegate(_this._tab_container, 'click', '.close-other', function () {
        _this.closeAlLTabsExceptActiveTab();
      });

      //????????????
      Util.delegate(_this._tab_container, 'click', '.close-all', function () {
        _this.closeAllTabs();
      });
      if (_this._option.enableContextmenu === true) {
        //??????tab???????????????????????????
        _this._addContextmenuEventListener();
      }
      if (_this._option.enableMouseWheelToggleTab === true) {
        _this._registerMouseWheelToggleTabEvent();
      }
    };
    _proto._addContextmenuEventListener = function _addContextmenuEventListener() {
      var _this = this;

      //tab??????
      Util.delegate(_this._tab_wraper, 'contextmenu', 'button.nav-link', function (e) {
        e.preventDefault();
        var id = Quicktab.getTabId(this);

        //??????????????????????????????????????????
        if (_this._canRemoveTabById(id)) {
          _this._tab_contextmenu_wraper.querySelector('.close').style.display = 'block';
        } else {
          _this._tab_contextmenu_wraper.querySelector('.close').style.display = 'none';
        }
        _this._tab_contextmenu_wraper.style.top = e.clientY + "px";
        _this._tab_contextmenu_wraper.style.left = e.clientX + "px";
        _this._tab_contextmenu_wraper.style.display = 'block';

        //?????????iframe?????????????????????????????????
        _this._tab_container.classList.add(TAB_CONTEXTMENU_POINTER_EVENTS_CLASS_NAME);

        //???????????????????????????????????????????????????????????????
        var tabActionsDropdown = bootstrap.Dropdown.getOrCreateInstance(_this._tab_container.querySelector('ul>li.dropdown>button'));
        tabActionsDropdown.hide();

        //????????????id???????????????????????????????????????
        _this._tab_contextmenu_wraper.querySelectorAll('button.list-group-item').forEach(function (item) {
          item.setAttribute(TAB_ID_KEY, id);
        });
      });

      //???????????????????????????????????????
      document.addEventListener('click', function () {
        _this._closeTabsContextmenu();
      });

      //??????????????????????????????????????????tab????????????
      Util.delegate(_this._tab_container, 'contextmenu', 'div.flex-grow-1', function (e) {
        e.preventDefault();
        _this._closeTabsContextmenu();
        _this._moreMenuDropdownHide();
      });

      //tab????????????????????????
      Util.delegate(_this._tab_contextmenu_wraper, 'click', '.refresh', function (e) {
        e.preventDefault();
        _this.refreshTabById(this.getAttribute(TAB_ID_KEY));
        _this._closeTabsContextmenu();
      });

      //tab????????????????????????
      Util.delegate(_this._tab_contextmenu_wraper, 'contextmenu', '.refresh', function (e) {
        e.preventDefault();
        _this.refreshTabById(this.getAttribute(TAB_ID_KEY));
        _this._closeTabsContextmenu();
      });

      //????????????-??????????????????
      Util.delegate(_this._tab_contextmenu_wraper, 'click', '.close', function (e) {
        e.preventDefault();
        _this.closeTabById(this.getAttribute(TAB_ID_KEY));
        _this._closeTabsContextmenu();
      });

      //????????????-??????????????????
      Util.delegate(_this._tab_contextmenu_wraper, 'contextmenu', '.close', function (e) {
        e.preventDefault();
        _this.closeTabById(this.getAttribute(TAB_ID_KEY));
        _this._closeTabsContextmenu();
      });

      //????????????-????????????????????????
      Util.delegate(_this._tab_contextmenu_wraper, 'click', '.close-other', function (e) {
        e.preventDefault();
        _this.closeAlLTabsExceptById(Quicktab.getTabId(this));
        _this._closeTabsContextmenu();
      });

      //????????????-????????????????????????
      Util.delegate(_this._tab_contextmenu_wraper, 'contextmenu', '.close-other', function (e) {
        e.preventDefault();
        _this.closeAlLTabsExceptById(Quicktab.getTabId(this));
        _this._closeTabsContextmenu();
      });
    };
    _proto._restoreTabs = function _restoreTabs() {
      //??????????????????????????????
      if (this._isCache()) {
        var cacheTabs = this._getCacheTabs();
        if (cacheTabs.length !== 0) {
          this._restoreTabsHandle(cacheTabs, this._getActiveTabFromCache().id);
        } else {
          //?????????
          this._restoreTabsHandle(this._option.tabs, null, true);
        }
      } else {
        //????????????
        Storage.removeBoth(this._tab_cache_key);

        //??????????????????
        this._restoreTabsHandle(this._option.tabs);
      }
    };
    _proto.closeTabById = function closeTabById(id) {
      var tab = this.getTabById(id);
      if (tab.classList.contains('active')) {
        //????????????????????????tab
        //???active??????????????????tab
        var willActiveId = null;
        if (tab.nextElementSibling instanceof HTMLElement) {
          //?????????tab
          //????????????tab???pageid?????????????????????tab id

          willActiveId = Quicktab.getTabId(tab.nextElementSibling);
        } else if (tab.previousElementSibling instanceof HTMLElement) {
          //?????????????????????tab

          willActiveId = Quicktab.getTabId(tab.previousElementSibling);
        }

        //??????????????????
        this._removeTabById(id);
        if (willActiveId) {
          //?????????id???????????????
          //??????
          this.activeTabById(willActiveId);
        }
      } else {
        //???????????????tab????????????

        this._removeTabById(id);
      }
    };
    _proto._removeTabById = function _removeTabById(id) {
      //??????tab
      this.getTabById(id).remove();

      //??????tab??????
      var tabPane = this.getTabPaneById(id);
      if (tabPane instanceof HTMLElement) {
        tabPane.remove();
      }

      // ?????????????????????tab
      this._removeCacheTabById(id);
    }

    /**
     * ??????tab?????????
     * @param option
     * @private
     */;
    _proto._addTabToCache = function _addTabToCache(option) {
      if (this._isCache()) {
        //??????
        var tabs = this._getCacheTabs();
        //???????????? active
        option.active = false;
        tabs.push(option);
        //??????????????????
        this.storage.set(this._tab_cache_key, tabs);
      }
    };
    _proto._getCacheTabs = function _getCacheTabs() {
      if (this._isCache()) {
        var tabs = this.storage.get(this._tab_cache_key);
        return tabs === null ? [] : tabs;
      }
    };
    _proto._isCache = function _isCache() {
      return this._option.cache !== null;
    }

    /**
     *
     * @param tabs tab??????
     * @param activeId   ????????????id,??????????????????tabs???????????????
     * @param cache   ????????????????????? ?????????false  true??????????????????????????????
     * @private
     */;
    _proto._restoreTabsHandle = function _restoreTabsHandle(tabs, activeId, cache) {
      if (activeId === void 0) {
        activeId = null;
      }
      if (cache === void 0) {
        cache = false;
      }
      var _this = this;

      //??????tab??????
      var opTabs = tabs;
      if (!(Array.isArray(opTabs) && opTabs.length !== 0)) {
        return;
      }
      for (var _iterator2 = _createForOfIteratorHelperLoose(opTabs), _step2; !(_step2 = _iterator2()).done;) {
        var tab = _step2.value;
        //??????????????????id??????
        if (!Object.prototype.hasOwnProperty.call(tab, 'id')) {
          tab.id = md5Exports(tab.url);
        }
      }

      //????????????????????????
      var tabFrag = document.createDocumentFragment();
      //????????????????????????tab????????????iframe,??????????????????iframe????????????(????????????)
      opTabs.forEach(function (option) {
        if (cache === true) {
          _this._addTabToCache(option);
        }
        var tabHTML = _this._getFormatTabStr(option);
        tabFrag.appendChild(Util.createNode(tabHTML));
      });
      //?????????tab???????????????
      _this._tab_wraper.appendChild(tabFrag);

      //?????????????????????????????????????????????????????????????????????tab
      // if(_this._isCache() && _this._getCacheTabs().length !== 0){
      //     opTabs.forEach((option) => {
      //         _this._addTabToCache(option);
      //     });
      // }

      if (activeId !== null) {
        _this.activeTabById(activeId);
      } else {
        //???????????????????????????tab
        _this.activeTabById(opTabs.at(-1).id);
      }
    };
    _proto._getFormatTabStr = function _getFormatTabStr(option) {
      return option.close === true ? this._formatString(TAB_WITH_CLOSE_TPL, option) : this._formatString(TAB_TPL, option);
    };
    _proto._getActiveTabFromCache = function _getActiveTabFromCache() {
      if (this._isCache()) {
        var tab = null;
        this._getCacheTabs().forEach(function (option) {
          if (Object.prototype.hasOwnProperty.call(option, 'active') && option.active === true) {
            tab = option;
          }
        });
        return tab;
      }
    };
    _proto._activeCacheTabById = function _activeCacheTabById(id) {
      if (this._isCache()) {
        var cacheTabs = this._getCacheTabs();
        cacheTabs.forEach(function (option) {
          option.active = option.id === id;
        });
        this.storage.set(this._tab_cache_key, cacheTabs);
      }
    };
    _proto._addTabPaneById = function _addTabPaneById(id, active) {
      if (active === void 0) {
        active = true;
      }
      var tab = this.getTabById(id);
      var option = {
        id: Quicktab.getTabId(tab),
        url: Quicktab.getTabUrl(tab)
      };
      var tabPaneNode = Util.createNode(this._formatString(TAB_PANE_TPL, option));

      //??????????????????????????????????????????hide???
      if (active === false) {
        tabPaneNode.classList.add(TAB_PANE_HIDE_CLASS_NAME);
      }
      this._tab_pane_wraper.appendChild(tabPaneNode);
    };
    _proto._removeCacheTabById = function _removeCacheTabById(id) {
      if (this._isCache()) {
        var cacheTabs = this._getCacheTabs();
        cacheTabs.forEach(function (tab, index) {
          if (tab.id === id) {
            cacheTabs.splice(index, 1);
          }
        });
        //??????????????????
        this.storage.set(this._tab_cache_key, cacheTabs);
      }
    };
    _proto.refreshTabById = function refreshTabById(id) {
      var tabPane = this.getTabPaneById(id);
      if (!(tabPane instanceof HTMLElement)) {
        //????????????????????????tab??????????????????iframe?????????
        this._addTabPaneById(id, false);
        this._addIframeLoadEventById(id);
      } else {
        //??????????????????????????????

        //??????????????????????????????,??????????????????

        this._addTabMask(this.getTabPaneById(id));

        //?????????????????????????????????????????????????????????????????????????????????
        var iframe = this.getIFrameById(id);
        var url = iframe.getAttribute('src');
        if (Quicktab.canAccessIFrame(iframe)) {
          iframe.contentWindow.location.reload();
        } else {
          iframe.setAttribute('src', url); // ??????????????????????????????url
        }
      }
    };
    _proto._canRemoveTabById = function _canRemoveTabById(id) {
      return this.getTabById(id).querySelector("." + TAB_CLOSE_BTN_ICON_CLASS_NAME) instanceof HTMLElement;
    };
    _proto._closeTabsContextmenu = function _closeTabsContextmenu() {
      this._tab_contextmenu_wraper.style.display = 'none';
      this._tab_container.classList.remove(TAB_CONTEXTMENU_POINTER_EVENTS_CLASS_NAME);
    }

    //??????????????????????????????????????????????????????tab????????????????????????
    ;
    _proto._moreMenuEvent = function _moreMenuEvent() {
      var _this = this;
      //???????????????????????????
      var tabActionsDropdown = _this._tab_container.querySelector('ul>li.dropdown>button');
      tabActionsDropdown.addEventListener('show.bs.dropdown', function () {
        _this._tab_container.classList.add(TAB_MORE_ACTION_DROPDOWNS_POINTER_EVENTS_CLASS_NAME);
      });
      //????????????????????????????????????
      tabActionsDropdown.addEventListener('hide.bs.dropdown', function () {
        _this._tab_container.classList.remove(TAB_MORE_ACTION_DROPDOWNS_POINTER_EVENTS_CLASS_NAME);
      });
    };
    _proto._moreMenuDropdownHide = function _moreMenuDropdownHide() {
      bootstrap.Dropdown.getOrCreateInstance(this._tab_container.querySelector('ul>li.dropdown>button')).hide();
    };
    _proto.scrollToActiveTab = function scrollToActiveTab() {
      var activeTab = this.getActiveTab();
      if (activeTab instanceof HTMLElement) {
        this.scrollToTabById(Quicktab.getTabId(activeTab));
      }
    };
    _proto.refreshActiveTab = function refreshActiveTab() {
      this.refreshTabById(Quicktab.getTabId(this.getActiveTab()));
    };
    _proto.setTabPaneIFrame = function setTabPaneIFrame(callBack) {
      var tabsArr = [];
      var iframes = this._getIFrames();
      iframes.forEach(function (iframe) {
        var iframeAttr = {};
        iframeAttr.iframe = iframe;
        if (Quicktab.canAccessIFrame(iframe)) {
          iframeAttr.canAccessIFrame = true;
          iframeAttr.iframeWindow = iframe.contentWindow;
        } else {
          iframeAttr.canAccessIFrame = false;
          iframeAttr.iframeWindow = null;
        }
        tabsArr.push(iframeAttr);
      });
      callBack(tabsArr);
    };
    _proto._getIFrames = function _getIFrames() {
      return this._tab_pane_wraper.querySelectorAll('iframe');
    };
    _proto.fullscreen = function fullscreen() {
      if (this._option.fullscreen.enable === true) {
        //???????????????????????????????????????????????????
        this._tab_container.querySelector("." + TAB_FULLSCREEN_TRIGGER_CLASS_NAME).innerHTML = '<i class="bi bi-fullscreen-exit"></i>';
        if (this._option.fullscreen.fullscreen) {
          this._option.fullscreen.fullscreen(this);
        } else {
          document.documentElement.style.overflow = 'hidden';
          this._tab_container.classList.add(TAB_FULLSCREEN_CLASS_NAME);
        }
      }
    };
    _proto.exitFullscreen = function exitFullscreen() {
      if (this._option.fullscreen.enable === true) {
        this._tab_container.querySelector("." + TAB_FULLSCREEN_TRIGGER_CLASS_NAME).innerHTML = '<i class="bi bi-arrows-fullscreen"></i>';
        if (this._option.fullscreen.exitFullscreen) {
          this._option.fullscreen.exitFullscreen(this);
        } else {
          document.documentElement.style.overflow = 'auto';
          this._tab_container.classList.remove(TAB_FULLSCREEN_CLASS_NAME);
        }

        //????????????
        this.scrollToActiveTab();
      }
    };
    _proto.leftScroll = function leftScroll() {
      this._tab_wraper.scrollLeft = this._tab_wraper.scrollLeft - this._tab_wraper.offsetWidth;
    };
    _proto.rightScroll = function rightScroll() {
      this._tab_wraper.scrollLeft = this._tab_wraper.scrollLeft + this._tab_wraper.offsetWidth;
    };
    _proto._dataAttrAssign = function _dataAttrAssign() {
      //????????????????????????data??????
      var op_tabs = this._tab_container.getAttribute('data-qt-tabs');
      if (op_tabs !== null) {
        this._option = Object.assign({}, this._option, {
          tabs: JSON.parse(op_tabs)
        });
      }
    };
    _proto._addIframeLoadEventById = function _addIframeLoadEventById(id) {
      var _this = this;
      var iframe = _this.getIFrameById(id);

      //????????????onload????????????????????????????????????????????????????????????????????????
      iframe.onload = function () {
        if (Quicktab.canAccessIFrame(iframe)) {
          //?????????
          iframe.contentWindow.onunload = function () {
            _this._addTabMask(iframe.parentNode);
          };
        }

        //??????
        if (_this.listeners.indexOf('iframeLoaded') > -1) {
          _this._emit({
            type: 'iframeLoaded',
            target: iframe,
            ifContentWindow: iframe.contentWindow
          });
        }
        var loading = _this.getTabPaneById(id).querySelector('div');
        if (loading instanceof HTMLElement) {
          //fade out
          loading.classList.replace('show', 'hide');
          //??????loadding????????????????????????????????????
          loading.addEventListener('transitionend', function () {
            //?????????????????????????????????
            if (_this.listeners.indexOf('loadingTransitionend') > -1) {
              _this._emit({
                type: 'loadingTransitionend',
                target: loading
              });
            }
            this.remove();
          });
        }
      };
    };
    _proto._formatMainHtmlStr = function _formatMainHtmlStr() {
      var tab_main_html_str = '';
      if (this._option.fullscreen.enable === true) {
        //?????????????????????????????????
        tab_main_html_str = this._formatString(TAB_MAIN_TPL, {
          tab_fullscreen: TAB_FULLSCREEN_TPL
        });
      } else {
        tab_main_html_str = this._formatString(TAB_MAIN_TPL, {
          tab_fullscreen: ''
        });
      }
      return tab_main_html_str;
    };
    _proto._setContainerWH = function _setContainerWH() {
      if (Util.isString(this._option.height) && this._option.height.trim().length !== 0) {
        this._tab_container.style.setProperty('height', this._option.height, 'important');
      }
      if (Util.isString(this._option.width) && this._option.width.trim().length !== 0) {
        this._tab_container.style.setProperty('width', this._option.width, 'important');
      }
      if (Util.isString(this._option.minHeight) && this._option.minHeight.trim().length !== 0) {
        this._tab_container.style.setProperty('min-height', this._option.minHeight, 'important');
      }
    };
    _proto._registerMouseWheelToggleTabEvent = function _registerMouseWheelToggleTabEvent() {
      var _this = this;
      this._tab_wraper.addEventListener('wheel', Util.debounce(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var activeTab = _this.getActiveTab();

        //???????????????????????????tab???????????????
        _this._closeTabsContextmenu();
        var deltaY = e.deltaY;
        if (deltaY < 0) {
          //????????????

          //??????????????????tab
          var preTab = activeTab.previousElementSibling;
          if (preTab instanceof HTMLElement) {
            _this.activeTabById(Quicktab.getTabId(preTab));
          }
        } else if (deltaY > 0) {
          //????????????
          var nextTab = activeTab.nextElementSibling;
          if (nextTab instanceof HTMLElement) {
            _this.activeTabById(Quicktab.getTabId(nextTab));
          }
        }
      }, 100));
    };
    _proto.closeActiveTab = function closeActiveTab() {
      var id = Quicktab.getTabId(this.getActiveTab());
      if (this._canRemoveTabById(id)) {
        //?????????????????????
        this.closeTabById(id);
      }
    };
    _proto.closeAlLTabsExceptById = function closeAlLTabsExceptById(id) {
      var _this = this;
      this._tab_wraper.querySelectorAll('button.nav-link').forEach(function (tab) {
        var forEachId = Quicktab.getTabId(tab);
        if (forEachId !== id && _this._canRemoveTabById(forEachId)) {
          //?????????????????????tab???????????????????????????
          _this.closeTabById(forEachId);
        }
      });
    };
    _proto.closeAlLTabsExceptActiveTab = function closeAlLTabsExceptActiveTab() {
      var activeTab = this.getActiveTab();
      if (activeTab instanceof HTMLElement) {
        this.closeAlLTabsExceptById(Quicktab.getTabId(activeTab));
      }
    };
    _proto.closeAllTabs = function closeAllTabs() {
      var _this = this;
      this._tab_wraper.querySelectorAll('button.nav-link').forEach(function (tab) {
        var id = Quicktab.getTabId(tab);
        if (_this._canRemoveTabById(id)) {
          _this._removeTabById(id);
        }
      });

      //???????????????????????????????????????,????????????
      var lastTab = this._tab_wraper.lastChild;
      if (lastTab instanceof HTMLElement) {
        _this.activeTabById(Quicktab.getTabId(lastTab));
      }
    };
    _proto._addTabMask = function _addTabMask(tab) {
      var loading = tab.querySelector('div');
      if (loading instanceof HTMLElement) {
        loading.remove();
      }
      tab.insertAdjacentHTML('beforeEnd', TAB_LOADING_TPL);
    };
    return Quicktab;
  }();
  Quicktab.instances = [];

  return Quicktab;

}));
//# sourceMappingURL=bootstrap-quicktab.js.map
