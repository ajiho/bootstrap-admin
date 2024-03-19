/*!
 * quicktab v0.0.2 (https://gitee.com/ajiho/quicktab)
 * Copyright 2023-2024 ajiho
 * license MIT (https://gitee.com/ajiho/quicktab/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Quicktab = factory());
})(this, (function () { 'use strict';

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }
  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);
    _classCheckPrivateStaticFieldDescriptor(descriptor, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }
  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
  function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }
  function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }
  function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
  function _classPrivateMethodInitSpec(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var fails$m = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$l = fails$m;

  var functionBindNative = !fails$l(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$2 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$b = FunctionPrototype$2.call;
  var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$b, call$b);

  var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$b.apply(fn, arguments);
    };
  };

  var uncurryThis$l = functionUncurryThis;

  var toString$9 = uncurryThis$l({}.toString);
  var stringSlice$6 = uncurryThis$l(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$6(toString$9(it), 8, -1);
  };

  var uncurryThis$k = functionUncurryThis;
  var fails$k = fails$m;
  var classof$8 = classofRaw$2;

  var $Object$4 = Object;
  var split = uncurryThis$k(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$k(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$4('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$8(it) === 'String' ? split(it, '') : $Object$4(it);
  } : $Object$4;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$3 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$2 = isNullOrUndefined$3;

  var $TypeError$c = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$5 = function (it) {
    if (isNullOrUndefined$2(it)) throw new $TypeError$c("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$1 = indexedObject;
  var requireObjectCoercible$4 = requireObjectCoercible$5;

  var toIndexedObject$5 = function (it) {
    return IndexedObject$1(requireObjectCoercible$4(it));
  };

  var check = function (it) {
    return it && it.Math === Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$h =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var shared$4 = {exports: {}};

  var global$g = global$h;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$6 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$6(global$g, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$g[key] = value;
    } return value;
  };

  var global$f = global$h;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$f[SHARED] || defineGlobalProperty$2(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$4.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.35.0',
    mode: 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var sharedExports = shared$4.exports;

  var requireObjectCoercible$3 = requireObjectCoercible$5;

  var $Object$3 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$7 = function (argument) {
    return $Object$3(requireObjectCoercible$3(argument));
  };

  var uncurryThis$j = functionUncurryThis;
  var toObject$6 = toObject$7;

  var hasOwnProperty$1 = uncurryThis$j({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty$1(toObject$6(it), key);
  };

  var uncurryThis$i = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$8 = uncurryThis$i(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id + postfix, 36);
  };

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$e = global$h;
  var userAgent$2 = engineUserAgent;

  var process = global$e.process;
  var Deno = global$e.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent$2) {
    match = userAgent$2.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$2.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION = engineV8Version;
  var fails$j = fails$m;
  var global$d = global$h;

  var $String$6 = global$d.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$j(function () {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String$6(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL$2 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$2
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var global$c = global$h;
  var shared$3 = sharedExports;
  var hasOwn$a = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL$1 = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var Symbol$2 = global$c.Symbol;
  var WellKnownSymbolsStore = shared$3('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$2['for'] || Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

  var wellKnownSymbol$d = function (name) {
    if (!hasOwn$a(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL$1 && hasOwn$a(Symbol$2, name)
        ? Symbol$2[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var documentAll = typeof document == 'object' && document.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var isCallable$j = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
    return typeof argument == 'function' || argument === documentAll;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$i = isCallable$j;

  var isObject$b = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$i(it);
  };

  var isObject$a = isObject$b;

  var $String$5 = String;
  var $TypeError$b = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$8 = function (argument) {
    if (isObject$a(argument)) return argument;
    throw new $TypeError$b($String$5(argument) + ' is not an object');
  };

  var objectDefineProperties = {};

  var fails$i = fails$m;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$i(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
  });

  var DESCRIPTORS$c = descriptors;
  var fails$h = fails$m;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$c && fails$h(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });

  var objectDefineProperty = {};

  var global$b = global$h;
  var isObject$9 = isObject$b;

  var document$1 = global$b.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$9(document$1) && isObject$9(document$1.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$b = descriptors;
  var fails$g = fails$m;
  var createElement = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$b && !fails$g(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a !== 7;
  });

  var NATIVE_BIND$1 = functionBindNative;

  var call$a = Function.prototype.call;

  var functionCall = NATIVE_BIND$1 ? call$a.bind(call$a) : function () {
    return call$a.apply(call$a, arguments);
  };

  var global$a = global$h;
  var isCallable$h = isCallable$j;

  var aFunction = function (argument) {
    return isCallable$h(argument) ? argument : undefined;
  };

  var getBuiltIn$5 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$a[namespace]) : global$a[namespace] && global$a[namespace][method];
  };

  var uncurryThis$h = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$h({}.isPrototypeOf);

  var getBuiltIn$4 = getBuiltIn$5;
  var isCallable$g = isCallable$j;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var $Object$2 = Object;

  var isSymbol$4 = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$4('Symbol');
    return isCallable$g($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$2(it));
  };

  var $String$4 = String;

  var tryToString$2 = function (argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$f = isCallable$j;
  var tryToString$1 = tryToString$2;

  var $TypeError$a = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$4 = function (argument) {
    if (isCallable$f(argument)) return argument;
    throw new $TypeError$a(tryToString$1(argument) + ' is not a function');
  };

  var aCallable$3 = aCallable$4;
  var isNullOrUndefined$1 = isNullOrUndefined$3;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$2 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$1(func) ? undefined : aCallable$3(func);
  };

  var call$9 = functionCall;
  var isCallable$e = isCallable$j;
  var isObject$8 = isObject$b;

  var $TypeError$9 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$8(val = call$9(fn, input))) return val;
    if (isCallable$e(fn = input.valueOf) && !isObject$8(val = call$9(fn, input))) return val;
    if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$8(val = call$9(fn, input))) return val;
    throw new $TypeError$9("Can't convert object to primitive value");
  };

  var call$8 = functionCall;
  var isObject$7 = isObject$b;
  var isSymbol$3 = isSymbol$4;
  var getMethod$1 = getMethod$2;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$c = wellKnownSymbol$d;

  var $TypeError$8 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$c('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$7(input) || isSymbol$3(input)) return input;
    var exoticToPrim = getMethod$1(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$8(exoticToPrim, input, pref);
      if (!isObject$7(result) || isSymbol$3(result)) return result;
      throw new $TypeError$8("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol$2 = isSymbol$4;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$2 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol$2(key) ? key : key + '';
  };

  var DESCRIPTORS$a = descriptors;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$7 = anObject$8;
  var toPropertyKey$1 = toPropertyKey$2;

  var $TypeError$7 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$a ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$7(O);
    P = toPropertyKey$1(P);
    anObject$7(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$1(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$7(O);
    P = toPropertyKey$1(P);
    anObject$7(Attributes);
    if (IE8_DOM_DEFINE$1) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$7('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var ceil = Math.ceil;
  var floor$3 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$3 : ceil)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$4 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

  var max$2 = Math.max;
  var min$3 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$1 = function (index, length) {
    var integer = toIntegerOrInfinity$3(index);
    return integer < 0 ? max$2(integer + length, 0) : min$3(integer, length);
  };

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

  var min$2 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$2 = function (argument) {
    return argument > 0 ? min$2(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$1 = toLength$2;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$5 = function (obj) {
    return toLength$1(obj.length);
  };

  var toIndexedObject$4 = toIndexedObject$5;
  var toAbsoluteIndex = toAbsoluteIndex$1;
  var lengthOfArrayLike$4 = lengthOfArrayLike$5;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$4($this);
      var length = lengthOfArrayLike$4(O);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el !== el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value !== value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$3(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$3(false)
  };

  var hiddenKeys$4 = {};

  var uncurryThis$g = functionUncurryThis;
  var hasOwn$9 = hasOwnProperty_1;
  var toIndexedObject$3 = toIndexedObject$5;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$3 = hiddenKeys$4;

  var push$3 = uncurryThis$g([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$3(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$9(hiddenKeys$3, key) && hasOwn$9(O, key) && push$3(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$9(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$3(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$1 = Object.keys || function keys(O) {
    return internalObjectKeys$1(O, enumBugKeys$2);
  };

  var DESCRIPTORS$9 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$3 = objectDefineProperty;
  var anObject$6 = anObject$8;
  var toIndexedObject$2 = toIndexedObject$5;
  var objectKeys = objectKeys$1;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$9 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$6(O);
    var props = toIndexedObject$2(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$3 = getBuiltIn$5;

  var html$1 = getBuiltIn$3('document', 'documentElement');

  var shared$2 = sharedExports;
  var uid = uid$2;

  var keys$1 = shared$2('keys');

  var sharedKey$3 = function (key) {
    return keys$1[key] || (keys$1[key] = uid(key));
  };

  /* global ActiveXObject -- old IE, WSH */
  var anObject$5 = anObject$8;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys$1 = enumBugKeys$3;
  var hiddenKeys$2 = hiddenKeys$4;
  var html = html$1;
  var documentCreateElement$1 = documentCreateElement$2;
  var sharedKey$2 = sharedKey$3;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$2('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys$1.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys$1[length]];
    return NullProtoObject();
  };

  hiddenKeys$2[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$5(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var wellKnownSymbol$b = wellKnownSymbol$d;
  var create$4 = objectCreate;
  var defineProperty$5 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol$b('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] === undefined) {
    defineProperty$5(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create$4(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$2 = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var iterators = {};

  var global$9 = global$h;
  var isCallable$d = isCallable$j;

  var WeakMap$2 = global$9.WeakMap;

  var weakMapBasicDetection = isCallable$d(WeakMap$2) && /native code/.test(String(WeakMap$2));

  var createPropertyDescriptor$3 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS$8 = descriptors;
  var definePropertyModule$2 = objectDefineProperty;
  var createPropertyDescriptor$2 = createPropertyDescriptor$3;

  var createNonEnumerableProperty$6 = DESCRIPTORS$8 ? function (object, key, value) {
    return definePropertyModule$2.f(object, key, createPropertyDescriptor$2(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$8 = global$h;
  var isObject$6 = isObject$b;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
  var hasOwn$8 = hasOwnProperty_1;
  var shared$1 = sharedStore;
  var sharedKey$1 = sharedKey$3;
  var hiddenKeys$1 = hiddenKeys$4;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global$8.TypeError;
  var WeakMap$1 = global$8.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$6(it) || (state = get(it)).type !== TYPE) {
        throw new TypeError$1('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$1.state) {
    var store$1 = shared$1.state || (shared$1.state = new WeakMap$1());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store$1.get = store$1.get;
    store$1.has = store$1.has;
    store$1.set = store$1.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function (it, metadata) {
      if (store$1.has(it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store$1.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store$1.get(it) || {};
    };
    has = function (it) {
      return store$1.has(it);
    };
  } else {
    var STATE = sharedKey$1('state');
    hiddenKeys$1[STATE] = true;
    set = function (it, metadata) {
      if (hasOwn$8(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$5(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$8(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$8(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var objectGetOwnPropertyDescriptor = {};

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var DESCRIPTORS$7 = descriptors;
  var call$7 = functionCall;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$1 = createPropertyDescriptor$3;
  var toIndexedObject$1 = toIndexedObject$5;
  var toPropertyKey = toPropertyKey$2;
  var hasOwn$7 = hasOwnProperty_1;
  var IE8_DOM_DEFINE = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$1(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$7(O, P)) return createPropertyDescriptor$1(!call$7(propertyIsEnumerableModule.f, O, P), O[P]);
  };

  var makeBuiltIn$3 = {exports: {}};

  var DESCRIPTORS$6 = descriptors;
  var hasOwn$6 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$6 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$6(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$6 || (DESCRIPTORS$6 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$f = functionUncurryThis;
  var isCallable$c = isCallable$j;
  var store = sharedStore;

  var functionToString = uncurryThis$f(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$c(store.inspectSource)) {
    store.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$1 = store.inspectSource;

  var uncurryThis$e = functionUncurryThis;
  var fails$f = fails$m;
  var isCallable$b = isCallable$j;
  var hasOwn$5 = hasOwnProperty_1;
  var DESCRIPTORS$5 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
  var inspectSource = inspectSource$1;
  var InternalStateModule$1 = internalState;

  var enforceInternalState$1 = InternalStateModule$1.enforce;
  var getInternalState$3 = InternalStateModule$1.get;
  var $String$3 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$4 = Object.defineProperty;
  var stringSlice$5 = uncurryThis$e(''.slice);
  var replace$5 = uncurryThis$e(''.replace);
  var join = uncurryThis$e([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$5 && !fails$f(function () {
    return defineProperty$4(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
    if (stringSlice$5($String$3(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$5($String$3(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$5(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
      if (DESCRIPTORS$5) defineProperty$4(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$5(options, 'arity') && value.length !== options.arity) {
      defineProperty$4(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$5(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$5) defineProperty$4(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState$1(value);
    if (!hasOwn$5(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return isCallable$b(this) && getInternalState$3(this).source || inspectSource(this);
  }, 'toString');

  var makeBuiltInExports = makeBuiltIn$3.exports;

  var isCallable$a = isCallable$j;
  var definePropertyModule$1 = objectDefineProperty;
  var makeBuiltIn$1 = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$5 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$a(value)) makeBuiltIn$1(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty$1(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) { /* empty */ }
      if (simple) O[key] = value;
      else definePropertyModule$1.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var objectGetOwnPropertyNames = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys = enumBugKeys$3;

  var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$2 = getBuiltIn$5;
  var uncurryThis$d = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$4 = anObject$8;

  var concat$1 = uncurryThis$d([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$4(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$4 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$e = fails$m;
  var isCallable$9 = isCallable$j;

  var replacement = /#|\.prototype\./;

  var isForced$2 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true
      : value === NATIVE ? false
      : isCallable$9(detection) ? fails$e(detection)
      : !!detection;
  };

  var normalize = isForced$2.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$2.data = {};
  var NATIVE = isForced$2.NATIVE = 'N';
  var POLYFILL = isForced$2.POLYFILL = 'P';

  var isForced_1 = isForced$2;

  var global$7 = global$h;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
  var defineBuiltIn$4 = defineBuiltIn$5;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced$1 = isForced_1;

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$7;
    } else if (STATIC) {
      target = global$7[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global$7[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$4(sourceProperty, 'sham', true);
      }
      defineBuiltIn$4(target, key, sourceProperty, options);
    }
  };

  var fails$d = fails$m;

  var correctPrototypeGetter = !fails$d(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$3 = hasOwnProperty_1;
  var isCallable$8 = isCallable$j;
  var toObject$5 = toObject$7;
  var sharedKey = sharedKey$3;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object$1 = Object;
  var ObjectPrototype = $Object$1.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
    var object = toObject$5(O);
    if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$8(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object$1 ? ObjectPrototype : null;
  };

  var fails$c = fails$m;
  var isCallable$7 = isCallable$j;
  var isObject$5 = isObject$b;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var defineBuiltIn$3 = defineBuiltIn$5;
  var wellKnownSymbol$a = wellKnownSymbol$d;

  var ITERATOR$2 = wellKnownSymbol$a('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = !isObject$5(IteratorPrototype$2) || fails$c(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$7(IteratorPrototype$2[ITERATOR$2])) {
    defineBuiltIn$3(IteratorPrototype$2, ITERATOR$2, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var defineProperty$3 = objectDefineProperty.f;
  var hasOwn$2 = hasOwnProperty_1;
  var wellKnownSymbol$9 = wellKnownSymbol$d;

  var TO_STRING_TAG$2 = wellKnownSymbol$9('toStringTag');

  var setToStringTag$3 = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn$2(target, TO_STRING_TAG$2)) {
      defineProperty$3(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$3 = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$3;
  var setToStringTag$2 = setToStringTag$3;
  var Iterators$2 = iterators;

  var returnThis$1 = function () { return this; };

  var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$3(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
    setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$2[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var uncurryThis$c = functionUncurryThis;
  var aCallable$2 = aCallable$4;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$c(aCallable$2(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isObject$4 = isObject$b;

  var isPossiblePrototype$1 = function (argument) {
    return isObject$4(argument) || argument === null;
  };

  var isPossiblePrototype = isPossiblePrototype$1;

  var $String$2 = String;
  var $TypeError$6 = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError$6("Can't set " + $String$2(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */
  var uncurryThisAccessor = functionUncurryThisAccessor;
  var anObject$3 = anObject$8;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject$3(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$8 = _export;
  var call$6 = functionCall;
  var FunctionName = functionName;
  var isCallable$6 = isCallable$j;
  var createIteratorConstructor = iteratorCreateConstructor;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf$1 = objectSetPrototypeOf;
  var setToStringTag$1 = setToStringTag$3;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
  var defineBuiltIn$2 = defineBuiltIn$5;
  var wellKnownSymbol$8 = wellKnownSymbol$d;
  var Iterators$1 = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$1 = wellKnownSymbol$8('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      }

      return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$1]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$1) {
            setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$6(CurrentIteratorPrototype[ITERATOR$1])) {
            defineBuiltIn$2(CurrentIteratorPrototype, ITERATOR$1, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME$1 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty$3(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$6(nativeIterator, this); };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$2(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$8({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
      defineBuiltIn$2(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
    }
    Iterators$1[NAME] = defaultIterator;

    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject$1 = function (value, done) {
    return { value: value, done: done };
  };

  var toIndexedObject = toIndexedObject$5;
  var addToUnscopables$1 = addToUnscopables$2;
  var Iterators = iterators;
  var InternalStateModule = internalState;
  var defineProperty$2 = objectDefineProperty.f;
  var defineIterator = iteratorDefine;
  var createIterResultObject = createIterResultObject$1;
  var DESCRIPTORS$4 = descriptors;

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState = InternalStateModule.set;
  var getInternalState$2 = InternalStateModule.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$2(this);
    var target = state.target;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return createIterResultObject(undefined, true);
    }
    switch (state.kind) {
      case 'keys': return createIterResultObject(index, false);
      case 'values': return createIterResultObject(target[index], false);
    } return createIterResultObject([index, target[index]], false);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  var values = Iterators.Arguments = Iterators.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('keys');
  addToUnscopables$1('values');
  addToUnscopables$1('entries');

  // V8 ~ Chrome 45- bug
  if (DESCRIPTORS$4 && values.name !== 'values') try {
    defineProperty$2(values, 'name', { value: 'values' });
  } catch (error) { /* empty */ }

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  var documentCreateElement = documentCreateElement$2;

  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

  var global$6 = global$h;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
  var setToStringTag = setToStringTag$3;
  var wellKnownSymbol$7 = wellKnownSymbol$d;

  var ITERATOR = wellKnownSymbol$7('iterator');
  var ArrayValues = ArrayIteratorMethods.values;

  var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
        createNonEnumerableProperty$2(CollectionPrototype, ITERATOR, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR] = ArrayValues;
      }
      setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
      if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty$2(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    handlePrototype(global$6[COLLECTION_NAME] && global$6[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }

  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  var wellKnownSymbol$6 = wellKnownSymbol$d;

  var TO_STRING_TAG$1 = wellKnownSymbol$6('toStringTag');
  var test$1 = {};

  test$1[TO_STRING_TAG$1] = 'z';

  var toStringTagSupport = String(test$1) === '[object z]';

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var isCallable$5 = isCallable$j;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$5 = wellKnownSymbol$d;

  var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');
  var $Object = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$7 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw$1(O)
      // ES3 arguments fallback
      : (result = classofRaw$1(O)) === 'Object' && isCallable$5(O.callee) ? 'Arguments' : result;
  };

  var classof$6 = classof$7;

  var $String$1 = String;

  var toString$7 = function (argument) {
    if (classof$6(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String$1(argument);
  };

  // a string of all valid unicode whitespaces
  var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$b = functionUncurryThis;
  var requireObjectCoercible$2 = requireObjectCoercible$5;
  var toString$6 = toString$7;
  var whitespaces$1 = whitespaces$2;

  var replace$4 = uncurryThis$b(''.replace);
  var ltrim = RegExp('^[' + whitespaces$1 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$2 = function (TYPE) {
    return function ($this) {
      var string = toString$6(requireObjectCoercible$2($this));
      if (TYPE & 1) string = replace$4(string, ltrim, '');
      if (TYPE & 2) string = replace$4(string, rtrim, '$1');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$2(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$2(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$2(3)
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var fails$b = fails$m;
  var whitespaces = whitespaces$2;

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails$b(function () {
      return !!whitespaces[METHOD_NAME]()
        || non[METHOD_NAME]() !== non
        || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
    });
  };

  var $$7 = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$7({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var classof$5 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$2 = Array.isArray || function isArray(argument) {
    return classof$5(argument) === 'Array';
  };

  var DESCRIPTORS$3 = descriptors;
  var isArray$1 = isArray$2;

  var $TypeError$5 = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$3 && !function () {
    // makes no sense without proper strict mode support
    if (this !== undefined) return true;
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', { writable: false }).length = 1;
    } catch (error) {
      return error instanceof TypeError;
    }
  }();

  var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
    if (isArray$1(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
      throw new $TypeError$5('Cannot set read only .length');
    } return O.length = length;
  } : function (O, length) {
    return O.length = length;
  };

  var $TypeError$4 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$2 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$4('Maximum allowed index exceeded');
    return it;
  };

  var $$6 = _export;
  var toObject$4 = toObject$7;
  var lengthOfArrayLike$3 = lengthOfArrayLike$5;
  var setArrayLength$1 = arraySetLength;
  var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
  var fails$a = fails$m;

  var INCORRECT_TO_LENGTH = fails$a(function () {
    return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
  });

  // V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
  // https://bugs.chromium.org/p/v8/issues/detail?id=12681
  var properErrorOnNonWritableLength$1 = function () {
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', { writable: false }).push();
    } catch (error) {
      return error instanceof TypeError;
    }
  };

  var FORCED$3 = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength$1();

  // `Array.prototype.push` method
  // https://tc39.es/ecma262/#sec-array.prototype.push
  $$6({ target: 'Array', proto: true, arity: 1, forced: FORCED$3 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    push: function push(item) {
      var O = toObject$4(this);
      var len = lengthOfArrayLike$3(O);
      var argCount = arguments.length;
      doesNotExceedSafeInteger$1(len + argCount);
      for (var i = 0; i < argCount; i++) {
        O[len] = arguments[i];
        len++;
      }
      setArrayLength$1(O, len);
      return len;
    }
  });

  var anObject$2 = anObject$8;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$2(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  var fails$9 = fails$m;
  var global$5 = global$h;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global$5.RegExp;

  var UNSUPPORTED_Y$2 = fails$9(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') !== null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$9(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$9(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') !== null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY$1,
    UNSUPPORTED_Y: UNSUPPORTED_Y$2
  };

  var fails$8 = fails$m;
  var global$4 = global$h;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$4.RegExp;

  var regexpUnsupportedDotAll = fails$8(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.test('\n') && re.flags === 's');
  });

  var fails$7 = fails$m;
  var global$3 = global$h;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global$3.RegExp;

  var regexpUnsupportedNcg = fails$7(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$5 = functionCall;
  var uncurryThis$a = functionUncurryThis;
  var toString$5 = toString$7;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers$1 = regexpStickyHelpers;
  var shared = sharedExports;
  var create$2 = objectCreate;
  var getInternalState$1 = internalState.get;
  var UNSUPPORTED_DOT_ALL$2 = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$5 = uncurryThis$a(''.charAt);
  var indexOf = uncurryThis$a(''.indexOf);
  var replace$3 = uncurryThis$a(''.replace);
  var stringSlice$4 = uncurryThis$a(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$5(nativeExec, re1, 'a');
    call$5(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL$2 || UNSUPPORTED_NCG$1;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$1(re);
      var str = toString$5(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$5(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = call$5(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$3(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$4(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$5(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = call$5(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$4(match.input, charsAdded);
          match[0] = stringSlice$4(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$5(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create$2(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$2 = patchedExec;

  var $$5 = _export;
  var exec$2 = regexpExec$2;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$5({ target: 'RegExp', proto: true, forced: /./.exec !== exec$2 }, {
    exec: exec$2
  });

  var $$4 = _export;
  var $includes = arrayIncludes.includes;
  var fails$6 = fails$m;
  var addToUnscopables = addToUnscopables$2;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$6(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$4({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var isCallable$4 = isCallable$j;
  var isObject$3 = isObject$b;
  var setPrototypeOf = objectSetPrototypeOf;

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      setPrototypeOf &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      isCallable$4(NewTarget = dummy.constructor) &&
      NewTarget !== Wrapper &&
      isObject$3(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) setPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var isObject$2 = isObject$b;
  var classof$4 = classofRaw$2;
  var wellKnownSymbol$4 = wellKnownSymbol$d;

  var MATCH$1 = wellKnownSymbol$4('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$2(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$4(it) === 'RegExp');
  };

  var call$4 = functionCall;
  var hasOwn$1 = hasOwnProperty_1;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var regExpFlags = regexpFlags$1;

  var RegExpPrototype$3 = RegExp.prototype;

  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$3) && !hasOwn$1(R, 'flags') && isPrototypeOf$1(RegExpPrototype$3, R)
      ? call$4(regExpFlags, R) : flags;
  };

  var defineProperty$1 = objectDefineProperty.f;

  var proxyAccessor$1 = function (Target, Source, key) {
    key in Target || defineProperty$1(Target, key, {
      configurable: true,
      get: function () { return Source[key]; },
      set: function (it) { Source[key] = it; }
    });
  };

  var makeBuiltIn = makeBuiltInExports;
  var defineProperty = objectDefineProperty;

  var defineBuiltInAccessor$2 = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
    return defineProperty.f(target, name, descriptor);
  };

  var getBuiltIn$1 = getBuiltIn$5;
  var defineBuiltInAccessor$1 = defineBuiltInAccessor$2;
  var wellKnownSymbol$3 = wellKnownSymbol$d;
  var DESCRIPTORS$2 = descriptors;

  var SPECIES$1 = wellKnownSymbol$3('species');

  var setSpecies$1 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$1(CONSTRUCTOR_NAME);

    if (DESCRIPTORS$2 && Constructor && !Constructor[SPECIES$1]) {
      defineBuiltInAccessor$1(Constructor, SPECIES$1, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var DESCRIPTORS$1 = descriptors;
  var global$2 = global$h;
  var uncurryThis$9 = functionUncurryThis;
  var isForced = isForced_1;
  var inheritIfRequired = inheritIfRequired$1;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;
  var create$1 = objectCreate;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var isPrototypeOf = objectIsPrototypeOf;
  var isRegExp = isRegexp;
  var toString$4 = toString$7;
  var getRegExpFlags = regexpGetFlags;
  var stickyHelpers = regexpStickyHelpers;
  var proxyAccessor = proxyAccessor$1;
  var defineBuiltIn$1 = defineBuiltIn$5;
  var fails$5 = fails$m;
  var hasOwn = hasOwnProperty_1;
  var enforceInternalState = internalState.enforce;
  var setSpecies = setSpecies$1;
  var wellKnownSymbol$2 = wellKnownSymbol$d;
  var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;

  var MATCH = wellKnownSymbol$2('match');
  var NativeRegExp = global$2.RegExp;
  var RegExpPrototype$2 = NativeRegExp.prototype;
  var SyntaxError = global$2.SyntaxError;
  var exec$1 = uncurryThis$9(RegExpPrototype$2.exec);
  var charAt$4 = uncurryThis$9(''.charAt);
  var replace$2 = uncurryThis$9(''.replace);
  var stringIndexOf$1 = uncurryThis$9(''.indexOf);
  var stringSlice$3 = uncurryThis$9(''.slice);
  // TODO: Use only proper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;

  var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

  var BASE_FORCED = DESCRIPTORS$1 &&
    (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG || fails$5(function () {
      re2[MATCH] = false;
      // RegExp constructor can alter flags and IsRegExp works correct with @@match
      return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
    }));

  var handleDotAll = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;
    for (; index <= length; index++) {
      chr = charAt$4(string, index);
      if (chr === '\\') {
        result += chr + charAt$4(string, ++index);
        continue;
      }
      if (!brackets && chr === '.') {
        result += '[\\s\\S]';
      } else {
        if (chr === '[') {
          brackets = true;
        } else if (chr === ']') {
          brackets = false;
        } result += chr;
      }
    } return result;
  };

  var handleNCG = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = create$1(null);
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;
    for (; index <= length; index++) {
      chr = charAt$4(string, index);
      if (chr === '\\') {
        chr += charAt$4(string, ++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;
        case chr === '(':
          if (exec$1(IS_NCG, stringSlice$3(string, index + 1))) {
            index += 2;
            ncg = true;
          }
          result += chr;
          groupid++;
          continue;
        case chr === '>' && ncg:
          if (groupname === '' || hasOwn(names, groupname)) {
            throw new SyntaxError('Invalid capture group name');
          }
          names[groupname] = true;
          named[named.length] = [groupname, groupid];
          ncg = false;
          groupname = '';
          continue;
      }
      if (ncg) groupname += chr;
      else result += chr;
    } return [result, named];
  };

  // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (isForced('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = isPrototypeOf(RegExpPrototype$2, this);
      var patternIsRegExp = isRegExp(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;

      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }

      if (patternIsRegExp || isPrototypeOf(RegExpPrototype$2, pattern)) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
      }

      pattern = pattern === undefined ? '' : toString$4(pattern);
      flags = flags === undefined ? '' : toString$4(flags);
      rawPattern = pattern;

      if (UNSUPPORTED_DOT_ALL$1 && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf$1(flags, 's') > -1;
        if (dotAll) flags = replace$2(flags, /s/g, '');
      }

      rawFlags = flags;

      if (MISSED_STICKY && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf$1(flags, 'y') > -1;
        if (sticky && UNSUPPORTED_Y) flags = replace$2(flags, /y/g, '');
      }

      if (UNSUPPORTED_NCG) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }

      result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$2, RegExpWrapper);

      if (dotAll || sticky || groups.length) {
        state = enforceInternalState(result);
        if (dotAll) {
          state.dotAll = true;
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
        }
        if (sticky) state.sticky = true;
        if (groups.length) state.groups = groups;
      }

      if (pattern !== rawPattern) try {
        // fails in old engines, but we have no alternatives for unsupported regex syntax
        createNonEnumerableProperty$1(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) { /* empty */ }

      return result;
    };

    for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
      proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
    }

    RegExpPrototype$2.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$2;
    defineBuiltIn$1(global$2, 'RegExp', RegExpWrapper, { constructor: true });
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies('RegExp');

  var DESCRIPTORS = descriptors;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var classof$3 = classofRaw$2;
  var defineBuiltInAccessor = defineBuiltInAccessor$2;
  var getInternalState = internalState.get;

  var RegExpPrototype$1 = RegExp.prototype;
  var $TypeError$3 = TypeError;

  // `RegExp.prototype.dotAll` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
  if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
    defineBuiltInAccessor(RegExpPrototype$1, 'dotAll', {
      configurable: true,
      get: function dotAll() {
        if (this === RegExpPrototype$1) return;
        // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.
        if (classof$3(this) === 'RegExp') {
          return !!getInternalState(this).dotAll;
        }
        throw new $TypeError$3('Incompatible receiver, RegExp required');
      }
    });
  }

  var NATIVE_BIND = functionBindNative;

  var FunctionPrototype = Function.prototype;
  var apply$2 = FunctionPrototype.apply;
  var call$3 = FunctionPrototype.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$3.bind(apply$2) : function () {
    return call$3.apply(apply$2, arguments);
  });

  var classofRaw = classofRaw$2;
  var uncurryThis$8 = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$8(fn);
  };

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var uncurryThis$7 = functionUncurryThisClause;
  var defineBuiltIn = defineBuiltIn$5;
  var regexpExec$1 = regexpExec$2;
  var fails$4 = fails$m;
  var wellKnownSymbol$1 = wellKnownSymbol$d;
  var createNonEnumerableProperty = createNonEnumerableProperty$6;

  var SPECIES = wellKnownSymbol$1('species');
  var RegExpPrototype = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$1(KEY);

    var DELEGATES_TO_SYMBOL = !fails$4(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) !== 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$4(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () {
        execCalled = true;
        return null;
      };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      FORCED
    ) {
      var uncurriedNativeRegExpMethod = uncurryThis$7(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$7(nativeMethod);
        var $exec = regexp.exec;
        if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
          }
          return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
        }
        return { done: false };
      });

      defineBuiltIn(String.prototype, KEY, methods[0]);
      defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
  };

  var uncurryThis$6 = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
  var toString$3 = toString$7;
  var requireObjectCoercible$1 = requireObjectCoercible$5;

  var charAt$3 = uncurryThis$6(''.charAt);
  var charCodeAt$1 = uncurryThis$6(''.charCodeAt);
  var stringSlice$2 = uncurryThis$6(''.slice);

  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$3(requireObjectCoercible$1($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt$1(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$3(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$2(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$1(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$1(true)
  };

  var charAt$2 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$1 = function (S, index, unicode) {
    return index + (unicode ? charAt$2(S, index).length : 1);
  };

  var uncurryThis$5 = functionUncurryThis;
  var toObject$3 = toObject$7;

  var floor$2 = Math.floor;
  var charAt$1 = uncurryThis$5(''.charAt);
  var replace$1 = uncurryThis$5(''.replace);
  var stringSlice$1 = uncurryThis$5(''.slice);
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject$3(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace$1(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt$1(ch, 0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return stringSlice$1(str, 0, position);
        case "'": return stringSlice$1(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$1(ch, 1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$2(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt$1(ch, 1) : captures[f - 1] + charAt$1(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var call$2 = functionCall;
  var anObject$1 = anObject$8;
  var isCallable$3 = isCallable$j;
  var classof$2 = classofRaw$2;
  var regexpExec = regexpExec$2;

  var $TypeError$2 = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$3(exec)) {
      var result = call$2(exec, R, S);
      if (result !== null) anObject$1(result);
      return result;
    }
    if (classof$2(R) === 'RegExp') return call$2(regexpExec, R, S);
    throw new $TypeError$2('RegExp#exec called on incompatible receiver');
  };

  var apply$1 = functionApply;
  var call$1 = functionCall;
  var uncurryThis$4 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var fails$3 = fails$m;
  var anObject = anObject$8;
  var isCallable$2 = isCallable$j;
  var isNullOrUndefined = isNullOrUndefined$3;
  var toIntegerOrInfinity = toIntegerOrInfinity$4;
  var toLength = toLength$2;
  var toString$2 = toString$7;
  var requireObjectCoercible = requireObjectCoercible$5;
  var advanceStringIndex = advanceStringIndex$1;
  var getMethod = getMethod$2;
  var getSubstitution = getSubstitution$1;
  var regExpExec = regexpExecAbstract;
  var wellKnownSymbol = wellKnownSymbol$d;

  var REPLACE = wellKnownSymbol('replace');
  var max$1 = Math.max;
  var min$1 = Math.min;
  var concat = uncurryThis$4([].concat);
  var push$2 = uncurryThis$4([].push);
  var stringIndexOf = uncurryThis$4(''.indexOf);
  var stringSlice = uncurryThis$4(''.slice);

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$3(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
        return replacer
          ? call$1(replacer, searchValue, O, replaceValue)
          : call$1(nativeReplace, toString$2(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject(this);
        var S = toString$2(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable$2(replaceValue);
        if (!functionalReplace) replaceValue = toString$2(replaceValue);

        var global = rx.global;
        var fullUnicode;
        if (global) {
          fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }

        var results = [];
        var result;
        while (true) {
          result = regExpExec(rx, S);
          if (result === null) break;

          push$2(results, result);
          if (!global) break;

          var matchStr = toString$2(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString$2(result[0]);
          var position = max$1(min$1(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          var replacement;
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push$2(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push$2(replacerArgs, namedCaptures);
            replacement = toString$2(apply$1(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }

        return accumulatedResult + stringSlice(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var tryToString = tryToString$2;

  var $TypeError$1 = TypeError;

  var deletePropertyOrThrow$2 = function (O, P) {
    if (!delete O[P]) throw new $TypeError$1('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  };

  var uncurryThis$3 = functionUncurryThis;

  var arraySlice$2 = uncurryThis$3([].slice);

  var arraySlice$1 = arraySlice$2;

  var floor$1 = Math.floor;

  var sort = function (array, comparefn) {
    var length = array.length;

    if (length < 8) {
      // insertion sort
      var i = 1;
      var element, j;

      while (i < length) {
        j = i;
        element = array[i];
        while (j && comparefn(array[j - 1], element) > 0) {
          array[j] = array[--j];
        }
        if (j !== i++) array[j] = element;
      }
    } else {
      // merge sort
      var middle = floor$1(length / 2);
      var left = sort(arraySlice$1(array, 0, middle), comparefn);
      var right = sort(arraySlice$1(array, middle), comparefn);
      var llength = left.length;
      var rlength = right.length;
      var lindex = 0;
      var rindex = 0;

      while (lindex < llength || rindex < rlength) {
        array[lindex + rindex] = (lindex < llength && rindex < rlength)
          ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
          : lindex < llength ? left[lindex++] : right[rindex++];
      }
    }

    return array;
  };

  var arraySort = sort;

  var fails$2 = fails$m;

  var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$2(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var userAgent$1 = engineUserAgent;

  var firefox = userAgent$1.match(/firefox\/(\d+)/i);

  var engineFfVersion = !!firefox && +firefox[1];

  var UA = engineUserAgent;

  var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

  var userAgent = engineUserAgent;

  var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

  var engineWebkitVersion = !!webkit && +webkit[1];

  var $$3 = _export;
  var uncurryThis$2 = functionUncurryThis;
  var aCallable$1 = aCallable$4;
  var toObject$2 = toObject$7;
  var lengthOfArrayLike$2 = lengthOfArrayLike$5;
  var deletePropertyOrThrow$1 = deletePropertyOrThrow$2;
  var toString$1 = toString$7;
  var fails$1 = fails$m;
  var internalSort = arraySort;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;

  var test = [];
  var nativeSort = uncurryThis$2(test.sort);
  var push$1 = uncurryThis$2(test.push);

  // IE8-
  var FAILS_ON_UNDEFINED = fails$1(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$1(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD = arrayMethodIsStrict$1('sort');

  var STABLE_SORT = !fails$1(function () {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 70;
    if (FF && FF > 3) return;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 603;

    var result = '';
    var code, chr, value, index;

    // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
    for (code = 65; code < 76; code++) {
      chr = String.fromCharCode(code);

      switch (code) {
        case 66: case 69: case 70: case 72: value = 3; break;
        case 68: case 71: value = 4; break;
        default: value = 2;
      }

      for (index = 0; index < 47; index++) {
        test.push({ k: chr + index, v: value });
      }
    }

    test.sort(function (a, b) { return b.v - a.v; });

    for (index = 0; index < test.length; index++) {
      chr = test[index].k.charAt(0);
      if (result.charAt(result.length - 1) !== chr) result += chr;
    }

    return result !== 'DGBEFHACIJK';
  });

  var FORCED$2 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$1(x) > toString$1(y) ? 1 : -1;
    };
  };

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$3({ target: 'Array', proto: true, forced: FORCED$2 }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable$1(comparefn);

      var array = toObject$2(this);

      if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

      var items = [];
      var arrayLength = lengthOfArrayLike$2(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) push$1(items, array[index]);
      }

      internalSort(items, getSortCompare(comparefn));

      itemsLength = lengthOfArrayLike$2(items);
      index = 0;

      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) deletePropertyOrThrow$1(array, index++);

      return array;
    }
  });

  var $$2 = _export;
  var toObject$1 = toObject$7;
  var lengthOfArrayLike$1 = lengthOfArrayLike$5;
  var setArrayLength = arraySetLength;
  var deletePropertyOrThrow = deletePropertyOrThrow$2;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;

  // IE8-
  var INCORRECT_RESULT = [].unshift(0) !== 1;

  // V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
  var properErrorOnNonWritableLength = function () {
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', { writable: false }).unshift();
    } catch (error) {
      return error instanceof TypeError;
    }
  };

  var FORCED$1 = INCORRECT_RESULT || !properErrorOnNonWritableLength();

  // `Array.prototype.unshift` method
  // https://tc39.es/ecma262/#sec-array.prototype.unshift
  $$2({ target: 'Array', proto: true, arity: 1, forced: FORCED$1 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    unshift: function unshift(item) {
      var O = toObject$1(this);
      var len = lengthOfArrayLike$1(O);
      var argCount = arguments.length;
      if (argCount) {
        doesNotExceedSafeInteger(len + argCount);
        var k = len;
        while (k--) {
          var to = k + argCount;
          if (k in O) O[to] = O[k];
          else deletePropertyOrThrow(O, to);
        }
        for (var j = 0; j < argCount; j++) {
          O[j] = arguments[j];
        }
      } return setArrayLength(O, len + argCount);
    }
  });

  var uncurryThis$1 = functionUncurryThis;
  var isArray = isArray$2;
  var isCallable$1 = isCallable$j;
  var classof$1 = classofRaw$2;
  var toString = toString$7;

  var push = uncurryThis$1([].push);

  var getJsonReplacerFunction = function (replacer) {
    if (isCallable$1(replacer)) return replacer;
    if (!isArray(replacer)) return;
    var rawLength = replacer.length;
    var keys = [];
    for (var i = 0; i < rawLength; i++) {
      var element = replacer[i];
      if (typeof element == 'string') push(keys, element);
      else if (typeof element == 'number' || classof$1(element) === 'Number' || classof$1(element) === 'String') push(keys, toString(element));
    }
    var keysLength = keys.length;
    var root = true;
    return function (key, value) {
      if (root) {
        root = false;
        return value;
      }
      if (isArray(this)) return value;
      for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
    };
  };

  var $$1 = _export;
  var getBuiltIn = getBuiltIn$5;
  var apply = functionApply;
  var call = functionCall;
  var uncurryThis = functionUncurryThis;
  var fails = fails$m;
  var isCallable = isCallable$j;
  var isSymbol$1 = isSymbol$4;
  var arraySlice = arraySlice$2;
  var getReplacerFunction = getJsonReplacerFunction;
  var NATIVE_SYMBOL = symbolConstructorDetection;

  var $String = String;
  var $stringify = getBuiltIn('JSON', 'stringify');
  var exec = uncurryThis(/./.exec);
  var charAt = uncurryThis(''.charAt);
  var charCodeAt = uncurryThis(''.charCodeAt);
  var replace = uncurryThis(''.replace);
  var numberToString = uncurryThis(1.0.toString);

  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;

  var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
    var symbol = getBuiltIn('Symbol')('stringify detection');
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) !== '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) !== '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) !== '{}';
  });

  // https://github.com/tc39/proposal-well-formed-stringify
  var ILL_FORMED_UNICODE = fails(function () {
    return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
      || $stringify('\uDEAD') !== '"\\udead"';
  });

  var stringifyWithSymbolsFix = function (it, replacer) {
    var args = arraySlice(arguments);
    var $replacer = getReplacerFunction(replacer);
    if (!isCallable($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
    args[1] = function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
      if (!isSymbol$1(value)) return value;
    };
    return apply($stringify, null, args);
  };

  var fixIllFormed = function (match, offset, string) {
    var prev = charAt(string, offset - 1);
    var next = charAt(string, offset + 1);
    if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
      return '\\u' + numberToString(charCodeAt(match, 0), 16);
    } return match;
  };

  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    $$1({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = arraySlice(arguments);
        var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
        return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
      }
    });
  }

  var Icons = {
    prev: "<svg viewBox=\"0 0 24 24\"><path d=\"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z\" /></svg>",
    next: "<svg viewBox=\"0 0 24 24\"><path d=\"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z\" /></svg>",
    refresh: "<svg viewBox=\"0 0 24 24\"><path d=\"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z\" /></svg>",
    fullscreen: "<svg viewBox=\"0 0 24 24\"><path d=\"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z\" /></svg>",
    close: "<svg viewBox=\"0 0 24 24\"><path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\" /></svg>",
    search: "<svg viewBox=\"0 0 24 24\"><path d=\"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\" /></svg>",
    menutUp: "<svg viewBox=\"0 0 24 24\"><path d=\"M7,15L12,10L17,15H7Z\" /></svg>",
    menuDown: "<svg viewBox=\"0 0 24 24\"><path d=\"M7,10L12,15L17,10H7Z\" /></svg>"
  };

  // 该配置项目是全部启用的列表
  var Options = {
    //最小高度
    minHeight: undefined,
    //高度
    height: undefined,
    //宽
    width: undefined,
    //本土化
    lang: undefined,
    //缓存类型  可用值: "session"  "local"
    cacheType: 'local',
    // 响应式设置(是针对的父容器)
    responsive: {
      enable: true,
      // 断点视口
      breakpoint: 576,
      // 小设备时想要隐藏的工具栏上的按钮 值是prev、refresh、next、fullscreen、dropdown
      hide: ['prev', 'refresh', 'next', 'fullscreen']
    },
    //默认tab
    defaultTabs: [],
    //tab工具栏配置
    toolbar: {
      //是否隐藏工具栏
      hide: false,
      //位置 top:在顶部，bottom:在底部
      position: 'top',
      // 左滚动
      prev: {
        enable: true,
        icon: Icons.prev,
        order: 10
      },
      // 刷新
      refresh: {
        enable: false,
        icon: Icons.refresh,
        order: 20
      },
      // tab包裹区域
      tabWrapper: {
        order: 30
      },
      // 右滚动
      next: {
        enable: true,
        icon: Icons.next,
        order: 40
      },
      // 搜索tab、打开的标签、最近关闭的标签
      dropdown: {
        enable: false,
        icon: Icons.menuDown,
        order: 50,
        // 搜索框部分的配置
        searchInput: {
          placeholder: '',
          prefixIcon: Icons.search
        },
        //打开tab部分的配置
        openedTabs: {
          text: '',
          //每个tab条目右边的关闭按钮图标
          closeIcon: Icons.close
        },
        // 最近关闭的tab部分的配置
        recentlyClosedTabs: {
          text: '',
          showIcon: Icons.menuDown,
          hideIcon: Icons.menutUp
        },
        //每个tab条目时间格式化
        timeFormat: {
          year: '',
          months: '',
          days: '',
          hours: '',
          minutes: '',
          seconds: ''
        },
        //没有搜索结果时的提示文本
        emptyText: ''
      },
      // 全屏
      fullscreen: {
        enable: false,
        //图标
        icon: Icons.fullscreen,
        //排序
        order: 60
      }
    },
    //tab配置
    tab: {
      //记忆(刷新tab不丢失)
      remember: false,
      //右键菜单配置
      contextmenu: {
        enable: false,
        // 关闭当前
        close: {
          enable: true,
          text: '',
          order: 10,
          separator: false
        },
        // 关闭其它
        closeOthers: {
          enable: true,
          text: '',
          order: 20,
          separator: false
        },
        // 关闭左侧
        closePrev: {
          enable: true,
          text: '',
          order: 30,
          separator: false
        },
        // 关闭右侧
        closeNext: {
          enable: true,
          text: '',
          order: 40,
          separator: false
        },
        // 关闭全部
        closeAll: {
          enable: true,
          text: '',
          order: 50,
          separator: false
        },
        // 全屏显示
        fullscreen: {
          enable: true,
          text: '',
          order: 60,
          separator: true
        },
        // 重新加载
        refresh: {
          enable: true,
          text: '',
          order: 70,
          separator: false
        },
        // 激活居中
        centerActive: {
          enable: true,
          text: '',
          order: 80,
          separator: false
        },
        // 新选项卡打开
        newBlank: {
          enable: true,
          text: '',
          order: 90,
          separator: false
        }
      },
      //鼠标滚轮切换tab
      mouseWheelSwitch: {
        enable: false,
        // 只是滚动tab的包裹区域 true:启用 false:不启用
        onlyScroll: false
      },
      //最大数量  -1:表示无限制
      maxNum: -1,
      //关闭按钮
      closeBtn: {
        enable: true,
        //关闭按钮是否鼠标移入时才显示 true:启用 false:始终显示
        showOnHover: false,
        icon: Icons.close
      },
      //当插件宽高改变时,当前激活的tab是否居中 false:不启用 true:启用
      resizeCenterActive: false,
      //tab单击时自动居中 false:不启用 true:启用
      clickCenterActive: false,
      //双击功能
      doubleClick: {
        enable: false,
        //默认tab双击是刷新功能,您也可以关闭刷新,在onTabDoubleClick事件中执行自己的逻辑
        refresh: true
      },
      //tab是否可以拖动排序  false:不启用 true:启用
      dragSort: false,
      //超时设置
      timeout: {
        enable: true,
        //过滤器 func 可以对于一些特定的tab不启用超时
        filter(url) {
          return true;
        },
        //超时时的提示文本
        text: '',
        //超时时间
        second: 3000,
        //超时自定义模板
        template: ''
      },
      //tab加载层效果
      loading: {
        enable: true,
        //过滤器,可以对于一些特定的tab不启用loading
        filter(url) {
          return true;
        },
        //自定义加载模板
        template: ''
      }
    },
    //tab被激活的事件(这里是比如关闭tab时，会自动激活别的tab时的事件回调)
    onTabActivated(url) {
      return false;
    },
    //通过addTab方法添加时产生的tab激活事件(比如左侧菜单需要通过添加tab的方法产生的激活事件)
    onTabAddActivated(url) {
      return false;
    },
    //tab加载完毕事件
    onTabLoaded(url) {
      return false;
    },
    //tab加载超时事件
    onTabTimeout(url) {
      return false;
    },
    //tab加载完毕或超时都会触发的事件
    onTabFinally(url) {
      return false;
    },
    //页面上所有的tab都完成事件(假如此时网速较慢,当前面一个tab还没有到Finally阶段的时候又重新开了一个tab，它会等待所有的tab都加载完毕或者超时后触发)
    onTabAll() {
      return false;
    },
    //tab加载层过渡完毕的事件,该事件需要tab配置项loading被启用才会执行回调。
    onTabLoadingTransitionend(url) {
      return false;
    },
    //tab被点击回调事件
    onTabClick(url) {
      return false;
    },
    //tab被双击回调事件
    onTabDoubleClick(url) {
      return false;
    },
    //tab被关闭的事件
    onTabClose(url) {
      return false;
    },
    //实例化完毕回调
    onInit() {
      return false;
    }
  };

  /**
   * A `StructFailure` represents a single specific failure in validation.
   */
  /**
   * `StructError` objects are thrown (or returned) when validation fails.
   *
   * Validation logic is design to exit early for maximum performance. The error
   * represents the first error encountered during validation. For more detail,
   * the `error.failures` property is a generator function that can be run to
   * continue validation and receive all the failures in the data.
   */
  class StructError extends TypeError {
      constructor(failure, failures) {
          let cached;
          const { message, explanation, ...rest } = failure;
          const { path } = failure;
          const msg = path.length === 0 ? message : `At path: ${path.join('.')} -- ${message}`;
          super(explanation ?? msg);
          if (explanation != null)
              this.cause = msg;
          Object.assign(this, rest);
          this.name = this.constructor.name;
          this.failures = () => {
              return (cached ?? (cached = [failure, ...failures()]));
          };
      }
  }

  /**
   * Check if a value is an iterator.
   */
  function isIterable(x) {
      return isObject$1(x) && typeof x[Symbol.iterator] === 'function';
  }
  /**
   * Check if a value is a plain object.
   */
  function isObject$1(x) {
      return typeof x === 'object' && x != null;
  }
  /**
   * Return a value as a printable string.
   */
  function print(value) {
      if (typeof value === 'symbol') {
          return value.toString();
      }
      return typeof value === 'string' ? JSON.stringify(value) : `${value}`;
  }
  /**
   * Shifts (removes and returns) the first value from the `input` iterator.
   * Like `Array.prototype.shift()` but for an `Iterator`.
   */
  function shiftIterator(input) {
      const { done, value } = input.next();
      return done ? undefined : value;
  }
  /**
   * Convert a single validation result to a failure.
   */
  function toFailure(result, context, struct, value) {
      if (result === true) {
          return;
      }
      else if (result === false) {
          result = {};
      }
      else if (typeof result === 'string') {
          result = { message: result };
      }
      const { path, branch } = context;
      const { type } = struct;
      const { refinement, message = `Expected a value of type \`${type}\`${refinement ? ` with refinement \`${refinement}\`` : ''}, but received: \`${print(value)}\``, } = result;
      return {
          value,
          type,
          refinement,
          key: path[path.length - 1],
          path,
          branch,
          ...result,
          message,
      };
  }
  /**
   * Convert a validation result to an iterable of failures.
   */
  function* toFailures(result, context, struct, value) {
      if (!isIterable(result)) {
          result = [result];
      }
      for (const r of result) {
          const failure = toFailure(r, context, struct, value);
          if (failure) {
              yield failure;
          }
      }
  }
  /**
   * Check a value against a struct, traversing deeply into nested values, and
   * returning an iterator of failures or success.
   */
  function* run(value, struct, options = {}) {
      const { path = [], branch = [value], coerce = false, mask = false } = options;
      const ctx = { path, branch };
      if (coerce) {
          value = struct.coercer(value, ctx);
          if (mask &&
              struct.type !== 'type' &&
              isObject$1(struct.schema) &&
              isObject$1(value) &&
              !Array.isArray(value)) {
              for (const key in value) {
                  if (struct.schema[key] === undefined) {
                      delete value[key];
                  }
              }
          }
      }
      let status = 'valid';
      for (const failure of struct.validator(value, ctx)) {
          failure.explanation = options.message;
          status = 'not_valid';
          yield [failure, undefined];
      }
      for (let [k, v, s] of struct.entries(value, ctx)) {
          const ts = run(v, s, {
              path: k === undefined ? path : [...path, k],
              branch: k === undefined ? branch : [...branch, v],
              coerce,
              mask,
              message: options.message,
          });
          for (const t of ts) {
              if (t[0]) {
                  status = t[0].refinement != null ? 'not_refined' : 'not_valid';
                  yield [t[0], undefined];
              }
              else if (coerce) {
                  v = t[1];
                  if (k === undefined) {
                      value = v;
                  }
                  else if (value instanceof Map) {
                      value.set(k, v);
                  }
                  else if (value instanceof Set) {
                      value.add(v);
                  }
                  else if (isObject$1(value)) {
                      if (v !== undefined || k in value)
                          value[k] = v;
                  }
              }
          }
      }
      if (status !== 'not_valid') {
          for (const failure of struct.refiner(value, ctx)) {
              failure.explanation = options.message;
              status = 'not_refined';
              yield [failure, undefined];
          }
      }
      if (status === 'valid') {
          yield [undefined, value];
      }
  }

  /**
   * `Struct` objects encapsulate the validation logic for a specific type of
   * values. Once constructed, you use the `assert`, `is` or `validate` helpers to
   * validate unknown input data against the struct.
   */
  let Struct$1 = class Struct {
      constructor(props) {
          const { type, schema, validator, refiner, coercer = (value) => value, entries = function* () { }, } = props;
          this.type = type;
          this.schema = schema;
          this.entries = entries;
          this.coercer = coercer;
          if (validator) {
              this.validator = (value, context) => {
                  const result = validator(value, context);
                  return toFailures(result, context, this, value);
              };
          }
          else {
              this.validator = () => [];
          }
          if (refiner) {
              this.refiner = (value, context) => {
                  const result = refiner(value, context);
                  return toFailures(result, context, this, value);
              };
          }
          else {
              this.refiner = () => [];
          }
      }
      /**
       * Assert that a value passes the struct's validation, throwing if it doesn't.
       */
      assert(value, message) {
          return assert(value, this, message);
      }
      /**
       * Create a value with the struct's coercion logic, then validate it.
       */
      create(value, message) {
          return create(value, this, message);
      }
      /**
       * Check if a value passes the struct's validation.
       */
      is(value) {
          return is(value, this);
      }
      /**
       * Mask a value, coercing and validating it, but returning only the subset of
       * properties defined by the struct's schema.
       */
      mask(value, message) {
          return mask(value, this, message);
      }
      /**
       * Validate a value with the struct's validation logic, returning a tuple
       * representing the result.
       *
       * You may optionally pass `true` for the `withCoercion` argument to coerce
       * the value before attempting to validate it. If you do, the result will
       * contain the coerced result when successful.
       */
      validate(value, options = {}) {
          return validate(value, this, options);
      }
  };
  /**
   * Assert that a value passes a struct, throwing if it doesn't.
   */
  function assert(value, struct, message) {
      const result = validate(value, struct, { message });
      if (result[0]) {
          throw result[0];
      }
  }
  /**
   * Create a value with the coercion logic of struct and validate it.
   */
  function create(value, struct, message) {
      const result = validate(value, struct, { coerce: true, message });
      if (result[0]) {
          throw result[0];
      }
      else {
          return result[1];
      }
  }
  /**
   * Mask a value, returning only the subset of properties defined by a struct.
   */
  function mask(value, struct, message) {
      const result = validate(value, struct, { coerce: true, mask: true, message });
      if (result[0]) {
          throw result[0];
      }
      else {
          return result[1];
      }
  }
  /**
   * Check if a value passes a struct.
   */
  function is(value, struct) {
      const result = validate(value, struct);
      return !result[0];
  }
  /**
   * Validate a value against a struct, returning an error if invalid, or the
   * value (with potential coercion) if valid.
   */
  function validate(value, struct, options = {}) {
      const tuples = run(value, struct, options);
      const tuple = shiftIterator(tuples);
      if (tuple[0]) {
          const error = new StructError(tuple[0], function* () {
              for (const t of tuples) {
                  if (t[0]) {
                      yield t[0];
                  }
              }
          });
          return [error, undefined];
      }
      else {
          const v = tuple[1];
          return [undefined, v];
      }
  }
  /**
   * Define a new struct type with a custom validation function.
   */
  function define(name, validator) {
      return new Struct$1({ type: name, schema: null, validator });
  }
  function array(Element) {
      return new Struct$1({
          type: 'array',
          schema: Element,
          *entries(value) {
              if (Element && Array.isArray(value)) {
                  for (const [i, v] of value.entries()) {
                      yield [i, v, Element];
                  }
              }
          },
          coercer(value) {
              return Array.isArray(value) ? value.slice() : value;
          },
          validator(value) {
              return (Array.isArray(value) ||
                  `Expected an array value, but received: ${print(value)}`);
          },
      });
  }
  /**
   * Ensure that a value is a boolean.
   */
  function boolean() {
      return define('boolean', (value) => {
          return typeof value === 'boolean';
      });
  }
  /**
   * Ensure that a value is a function.
   */
  function func() {
      return define('func', (value) => {
          return (typeof value === 'function' ||
              `Expected a function, but received: ${print(value)}`);
      });
  }
  /**
   * Ensure that a value is a number.
   */
  function number() {
      return define('number', (value) => {
          return ((typeof value === 'number' && !isNaN(value)) ||
              `Expected a number, but received: ${print(value)}`);
      });
  }
  /**
   * Augment a struct to allow `undefined` values.
   */
  function optional(struct) {
      return new Struct$1({
          ...struct,
          validator: (value, ctx) => value === undefined || struct.validator(value, ctx),
          refiner: (value, ctx) => value === undefined || struct.refiner(value, ctx),
      });
  }
  /**
   * Ensure that a value is a string.
   */
  function string() {
      return define('string', (value) => {
          return (typeof value === 'string' ||
              `Expected a string, but received: ${print(value)}`);
      });
  }
  /**
   * Ensure that a value has a set of known properties of specific types.
   *
   * Note: Unrecognized properties are allowed and untouched. This is similar to
   * how TypeScript's structural typing works.
   */
  function type(schema) {
      const keys = Object.keys(schema);
      return new Struct$1({
          type: 'type',
          schema,
          *entries(value) {
              if (isObject$1(value)) {
                  for (const k of keys) {
                      yield [k, value[k], schema[k]];
                  }
              }
          },
          validator(value) {
              return (isObject$1(value) || `Expected an object, but received: ${print(value)}`);
          },
          coercer(value) {
              return isObject$1(value) ? { ...value } : value;
          },
      });
  }
  /**
   * Augment a `Struct` to add an additional refinement to the validation.
   *
   * The refiner function is guaranteed to receive a value of the struct's type,
   * because the struct's existing validation will already have passed. This
   * allows you to layer additional validation on top of existing structs.
   */
  function refine(struct, name, refiner) {
      return new Struct$1({
          ...struct,
          *refiner(value, ctx) {
              yield* struct.refiner(value, ctx);
              const result = refiner(value, ctx);
              const failures = toFailures(result, ctx, struct, value);
              for (const failure of failures) {
                  yield { ...failure, refinement: name };
              }
          },
      });
  }

  var aCallable = aCallable$4;
  var toObject = toObject$7;
  var IndexedObject = indexedObject;
  var lengthOfArrayLike = lengthOfArrayLike$5;

  var $TypeError = TypeError;

  // `Array.prototype.{ reduce, reduceRight }` methods implementation
  var createMethod = function (IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      var O = toObject(that);
      var self = IndexedObject(O);
      var length = lengthOfArrayLike(O);
      aCallable(callbackfn);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw new $TypeError('Reduce of empty array with no initial value');
        }
      }
      for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
  };

  var global$1 = global$h;
  var classof = classofRaw$2;

  var engineIsNode = classof(global$1.process) === 'process';

  var $ = _export;
  var $reduce = arrayReduce.left;
  var arrayMethodIsStrict = arrayMethodIsStrict$2;
  var CHROME_VERSION = engineV8Version;
  var IS_NODE = engineIsNode;

  // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
  var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
  var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  $({ target: 'Array', proto: true, forced: FORCED }, {
    reduce: function reduce(callbackfn /* , initialValue */) {
      var length = arguments.length;
      return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
  });

  var Utils = {
    /**
     * 通过字符串创建节点
     * @param htmlStr
     * @returns {Element}
     */
    createNode(htmlStr) {
      const node = document.createElement('div');
      node.innerHTML = htmlStr.trim(); // 去除字符串两端的空白
      return node.firstElementChild;
    },
    //防抖
    debounce(func) {
      let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      let timeout;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          func.apply(context, args);
        }, wait);
      };
    },
    /**
     * 判断是否是同源的、可以操作 contentWindow 对象的 iframe
     * @param {HTMLIFrameElement} iframe - 要检查的 iframe 元素
     * @returns {boolean} - 如果是同源且可以操作 contentWindow 返回 true，否则返回 false
     */
    isSameOriginIframe(iframe) {
      try {
        // 尝试获取 iframe 的 contentWindow
        const contentWindow = iframe.contentWindow;

        // 检查是否有跨域安全性限制
        const isSameOrigin = contentWindow.location.origin === window.location.origin;
        return isSameOrigin;
      } catch (error) {
        // 处理可能的异常，比如跨域安全性限制
        return false;
      }
    },
    /**
     * 给一个元素的某些特定后代元素设置属性
     * @param {Element|String} element  需要设置样式的元素,可以是dom对象也可以是dom字符串
     * @param {Array} selectorArr
     */
    setProperty(element, selectorArr, name, value) {
      if (!Array.isArray(selectorArr)) {
        console.error('Invalid arguments');
        return;
      }
      const type = !(element instanceof Element);
      if (type) {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = element;
        element = tempElement;
      }
      element.querySelectorAll(selectorArr).forEach(tabBarItem => {
        tabBarItem.style.setProperty(name, value);
      });
      return type ? element.innerHTML : element;
    },
    sprintf(_str) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      let flag = true;
      let i = 0;
      const str = _str.replace(/%s/g, () => {
        const arg = args[i++];
        if (typeof arg === 'undefined') {
          flag = false;
          return '';
        }
        return arg;
      });
      return flag ? str : '';
    },
    isStr(str) {
      return Object.prototype.toString.call(str) === '[object String]';
    },
    //数组对象去重
    arrUnique(arr, objKey) {
      //临时数组
      let temp = [];
      return arr.reduce(function (prev, curr) {
        if (temp.indexOf(curr[objKey]) === -1) {
          temp.push(curr[objKey]);
          prev.push(curr);
        }
        return prev;
      }, []);
    },
    // 类似jQuery的$(document).ready(function () {});
    ready(callback) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
      } else {
        callback();
      }
    },
    //可以让单击事件具备双击的能力
    handleSingleAndDoubleClick(callbacks) {
      let {
        enableDbClick = true,
        delay = 200
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let clicks = 0;
      let timer = null;
      const {
        click,
        dbclick
      } = callbacks;
      return function (event) {
        const preventAndstop = type => {
          const {
            preventDefault = true,
            stopPropagation = true
          } = type;
          if (preventDefault) event.preventDefault();
          if (stopPropagation) event.stopPropagation();
        };
        const callBack = type => {
          const {
            handle
          } = type;
          if (typeof handle === 'function') {
            handle.call(this, event);
          }
        };
        if (enableDbClick === true) {
          clicks++;
          if (clicks === 1) {
            //单击

            preventAndstop(click);
            timer = setTimeout(() => {
              callBack(click);
              clicks = 0;
            }, delay);
          } else {
            preventAndstop(dbclick);
            clearTimeout(timer);
            callBack(dbclick);
            clicks = 0;
          }
        } else {
          preventAndstop(click);
          callBack(click);
        }
      };
    },
    extend() {
      let options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        //第一个参数
        i = 1,
        length = arguments.length,
        deep = false;

      // 处理深度复制情况
      if (typeof target === 'boolean') {
        deep = target;

        // 跳过布尔值和目标
        target = arguments[i] || {};
        i++;
      }

      // 当目标是字符串或其他东西时处理大小写（可能在深度复制中）
      if (typeof target !== 'object' && typeof target !== 'function') {
        target = {};
      }

      // 如果只传递一个参数，则扩展jQuery本身
      if (i === length) {
        target = this;
        i--;
      }
      for (; i < length; i++) {
        // 仅处理非null/未定义的值
        if ((options = arguments[i]) != null) {
          // 延伸基础对象
          for (name in options) {
            copy = options[name];

            // 防止Object.prototype污染
            // 防止无休止的循环
            if (name === '__proto__' || target === copy) {
              continue;
            }

            // 如果我们正在合并普通对象或数组，则重复出现
            if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              src = target[name];

              // 确保源值的类型正确
              if (copyIsArray && !Array.isArray(src)) {
                clone = [];
              } else if (!copyIsArray && !this.isPlainObject(src)) {
                clone = {};
              } else {
                clone = src;
              }
              copyIsArray = false;

              // 从不移动原始对象，而是克隆它们
              target[name] = this.extend(deep, clone, copy);

              // 不要引入未定义的值
              // } else if (copy !== undefined) {
            } else {
              target[name] = copy;
            }
          }
        }
      }

      // 返回修改后的对象
      return target;
    },
    //用于判断一个对象是否是纯粹的 JavaScript 对象（即不是 DOM 对象、函数、数组等）。具体作用是检查对象是否通过对象字面量或 new Object() 创建，且其原型链上只包含标准的 Object 原型
    isPlainObject(obj) {
      if (typeof obj !== 'object' || obj === null || obj instanceof Array) {
        return false;
      }
      const prototype = Object.getPrototypeOf(obj);
      return prototype === Object.prototype || prototype === null;
    },
    isObject(value) {
      return Object.prototype.toString.call(value) === '[object Object]';
    },
    isJSON(str) {
      try {
        JSON.parse(str);
        return true;
      } catch (e) {
        return false;
      }
    },
    parseAttributeValue(value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        // 尝试获取全局函数
        const globalFunction = window[value];
        if (typeof globalFunction === 'function') {
          return globalFunction;
        }
        return value;
      }
    },
    updateObjDataByKey(obj, objKey, newValue) {
      const keyList = objKey.split('.');
      const lastKey = keyList[keyList.length - 1];
      keyList.reduce((pre, item) => {
        if (item === lastKey) pre[item] = newValue;
        return pre[item];
      }, obj);
      return obj;
    },
    getObjDataByKey(obj, objKey) {
      const keyList = objKey.split('.');
      return keyList.reduce((currentObj, key) => {
        if (currentObj && typeof currentObj === 'object' && key in currentObj) {
          return currentObj[key];
        } else {
          return undefined; // 返回 undefined 表示未找到相应的值
        }
      }, obj);
    },
    //对几个需要转换成字符串属性进行处理
    stringTypeOptions(obj) {
      const objKey = ['minHeight', 'height', 'width'];
      objKey.forEach(item => {
        this.updateObjDataByKey(obj, item, this.getObjDataByKey(obj, item).toString());
      });
      return obj;
    },
    //解析data上的选项
    parseDataOptions(element, defaultOption) {
      let prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      for (const key in defaultOption) {
        const attrKey = prefix + key;
        let attrVal = element.getAttribute(attrKey);
        let parseVal = this.parseAttributeValue(attrVal);
        if (!this.isObject(defaultOption[key])) {
          //如果选项原来的值是一个对象

          if (attrVal !== null) {
            //如果获取到值了
            options[key] = parseVal;
          }
        } else {
          this.parseDataOptions(element, defaultOption[key], attrKey + '-', options[key] = {});
          if (this.isEmptyObject(options[key])) {
            delete options[key];
          }
        }
      }
      return options;
    },
    isEmptyObject(obj) {
      for (let key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          return false;
        }
      }
      return true;
    },
    hasDuplicates(array) {
      for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== i) {
          return true;
        }
      }
      return false;
    },
    //判断数组的对象元素中的某个key是否具有唯一值
    hasDuplicateValues(arr, key) {
      const valueSet = new Set();
      for (const obj of arr) {
        const value = obj[key];
        if (valueSet.has(value)) {
          // 发现重复的值
          return true;
        }
        valueSet.add(value);
      }

      // 没有重复的值
      return false;
    },
    onResize(element, callback) {
      const resizeObserver = new ResizeObserver(entries => {
        // 处理大小变化的回调函数
        entries.forEach(entry => {
          // entry.target 是发生大小变化的元素 entry.contentRect 包含元素的新大小信息
          if (!entry.target.firstResize) {
            //优化:第一次不执行
            entry.target.firstResize = true;
            return;
          }
          callback.call(element, entry.contentRect);
        });
      });
      resizeObserver.observe(element);
    },
    // 获取开启和激活的选项
    getEnabledAndSortedOpsKey(options, keyClassMap) {
      return Object.keys(options).filter(key => {
        if (Object.keys(keyClassMap).includes(key) && options[key].enable !== false) {
          return true;
        }
        return false;
      }).sort((a, b) => options[a].order - options[b].order);
    },
    isDOMElement(obj) {
      return obj instanceof Element || obj instanceof Document;
    },
    //实现类似jquery的prevAll
    prevAll(element) {
      const result = [];
      let currentElement = element.previousElementSibling;
      while (currentElement) {
        result.push(currentElement);
        currentElement = currentElement.previousElementSibling;
      }
      return result;
    },
    //实现类似jquery的nextAll
    nextAll(element) {
      const result = [];
      let currentElement = element.nextElementSibling;
      while (currentElement) {
        result.push(currentElement);
        currentElement = currentElement.nextElementSibling;
      }
      return result;
    },
    // 获取元素在父元素中的index
    index(el) {
      let index = 0;
      if (!el || !el.parentNode) {
        return -1;
      }
      // previousElementSibling：上一个兄弟元素
      while (el && (el = el.previousElementSibling)) {
        index++;
      }
      return index;
    },
    // 触发动画
    animate(prevRect, target) {
      let ms = 300;
      {
        let currentRect = target.getBoundingClientRect();
        if (prevRect.nodeType === 1) {
          prevRect = prevRect.getBoundingClientRect();
        }
        target.style.setProperty('transition', 'none');
        target.style.setProperty('transform', "translate3d(".concat(prevRect.left - currentRect.left, "px,").concat(prevRect.top - currentRect.top, "px,0)"));
        target.offsetWidth; // 触发重绘

        target.style.setProperty('transition', "transform ".concat(ms, "ms"));
        target.style.setProperty('transform', 'translate3d(0,0,0)');

        // 时间到了之后把transition和transform清空
        clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          target.style.setProperty('transition', '');
          target.style.setProperty('transform', '');
          target.animated = false;
        }, ms);
      }
    },
    /**
     * 把时间戳转换成人类友好的时间
     * @param {Number} timestamp 微妙时间戳
     * @returns {String}
     */
    timeAgo(timestamp) {
      let customText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        second: '秒前',
        minutes: '分钟前',
        hours: '小时前',
        days: '天前',
        months: '月前',
        years: '年前'
      };
      const seconds = Math.floor((Date.now() - Math.floor(timestamp)) / 1000);
      const minute = 60;
      const hour = 60 * minute;
      const day = 24 * hour;
      const month = 30 * day;
      const year = 365 * day;
      if (seconds < minute) {
        return "".concat(seconds, " ").concat(customText.second);
      } else if (seconds < hour) {
        const minutes = Math.floor(seconds / minute);
        return "".concat(minutes, " ").concat(customText.minutes);
      } else if (seconds < day) {
        const hours = Math.floor(seconds / hour);
        return "".concat(hours, " ").concat(customText.hours);
      } else if (seconds < month) {
        const days = Math.floor(seconds / day);
        return "".concat(days, " ").concat(customText.days);
      } else if (seconds < year) {
        const months = Math.floor(seconds / month);
        return "".concat(months, " ").concat(customText.months);
      } else {
        const years = Math.floor(seconds / year);
        return "".concat(years, " ").concat(customText.years);
      }
    },
    //判断数字是否有小数点
    hasDecimal(number) {
      return !Number.isInteger(number);
    },
    // 通知程序
    notify(msg) {
      let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'error';
      console[type]("Quicktab:".concat(msg));
    }
  };

  var Struct = {
    validateOptions(struct, options) {
      const [error] = validate(options, struct);
      if (error) {
        let reason = "\u671F\u671B\u7C7B\u578B\u662F".concat(error.type);
        if (error.myMessage) {
          reason = error.myMessage;
        }
        return "options [".concat(error.path.join('-'), "] : ").concat(reason, ",\u4F46\u63A5\u6536\u7684\u662F").concat(JSON.stringify(error.value));
      }
      return true;
    },
    _validate(value, context, struct) {
      const [error] = validate(value, struct);
      if (error) {
        error.path = [...context.path, ...error.path];
        return error;
      }
      return true;
    },
    enums(param) {
      return define('enums', (value, context) => {
        if (!param.includes(value)) {
          return {
            myMessage: "\u503C\u5FC5\u987B\u662F".concat(JSON.stringify(param), "\u5176\u4E2D\u4E4B\u4E00")
          };
        }
        return true;
      });
    },
    uniqueArray(param) {
      return refine(array(param), 'uniqueArray', value => {
        if (Utils.hasDuplicates(value)) {
          return {
            myMessage: "\u6570\u7EC4\u7684\u503C\u4E0D\u80FD\u91CD\u590D"
          };
        }
        return true;
      });
    },
    arrayOfObjectsWithUniqueKey(param, uniqueKey) {
      return refine(array(param), 'uniqueArray', value => {
        if (Utils.hasDuplicateValues(value, uniqueKey)) return {
          myMessage: "".concat(uniqueKey, "\u4E0D\u80FD\u91CD\u590D")
        };
        return true;
      });
    },
    //正数
    positive() {
      return refine(number(), 'positive', value => {
        if (value <= 0) return {
          myMessage: "\u5FC5\u987B\u662F\u6B63\u6570"
        };
        return true;
      });
    },
    integer() {
      return refine(number(), 'integer', value => {
        if (!Number.isInteger(value)) return {
          myMessage: "\u5FC5\u987B\u662F\u6574\u6570"
        };
        return true;
      });
    },
    string() {
      return refine(string(), 'string', value => {
        if (value.trim() === '') return {
          myMessage: "\u4E0D\u80FD\u4E3A\u7A7A"
        };
        return true;
      });
    },
    //正整数
    positiveInteger() {
      return refine(number(), 'positiveInteger', value => {
        if (!(Number.isInteger(value) && value > 0)) return {
          myMessage: "\u5FC5\u987B\u662F\u6B63\u6574\u6570"
        };
        return true;
      });
    },
    validateObject(value, context, struct, errorMessage) {
      if (!Utils.isObject(value)) {
        return {
          myMessage: errorMessage
        };
      }
      return this._validate(value, context, type(struct));
    },
    object(struct) {
      return define('object', (value, context) => {
        return this.validateObject(value, context, struct, '必须是对象');
      });
    },
    falseOrObject(struct) {
      return define('false|Object', (value, context) => {
        if (value === false) {
          return true;
        }
        return this.validateObject(value, context, struct, '必须是false|对象');
      });
    }
  };

  var TabOptionStruct = Struct.object({
    title: optional(string()),
    url: Struct.string(),
    closable: optional(boolean())
  });

  const toolbarItemStruct = Struct.object({
    enable: boolean(),
    icon: string(),
    order: number()
  });
  const contextmenuItemStruct = Struct.object({
    enable: boolean(),
    text: optional(string()),
    order: optional(number()),
    separator: optional(boolean())
  });
  var OptionsStruct = Struct.object({
    minHeight: optional(string()),
    height: optional(string()),
    width: optional(string()),
    lang: optional(string()),
    cacheType: Struct.enums(['local', 'session']),
    responsive: Struct.object({
      enable: boolean(),
      breakpoint: Struct.positive(),
      hide: Struct.uniqueArray(Struct.enums(['prev', 'refresh', 'next', 'dropdown', 'fullscreen']))
    }),
    defaultTabs: Struct.arrayOfObjectsWithUniqueKey(TabOptionStruct, 'url'),
    toolbar: Struct.object({
      hide: boolean(),
      position: Struct.enums(['top', 'bottom']),
      prev: toolbarItemStruct,
      refresh: toolbarItemStruct,
      tabWrapper: Struct.object({
        order: number()
      }),
      next: toolbarItemStruct,
      dropdown: Struct.object({
        enable: boolean(),
        icon: string(),
        order: number(),
        searchInput: Struct.object({
          placeholder: string(),
          prefixIcon: string()
        }),
        openedTabs: Struct.object({
          text: string(),
          closeIcon: string()
        }),
        recentlyClosedTabs: Struct.object({
          text: string(),
          showIcon: string(),
          hideIcon: string()
        }),
        timeFormat: Struct.object({
          year: string(),
          months: string(),
          days: string(),
          hours: string(),
          minutes: string(),
          seconds: string()
        }),
        emptyText: string()
      }),
      fullscreen: toolbarItemStruct
    }),
    tab: Struct.object({
      remember: boolean(),
      contextmenu: Struct.object({
        enable: boolean(),
        close: contextmenuItemStruct,
        closeOthers: contextmenuItemStruct,
        closePrev: contextmenuItemStruct,
        closeNext: contextmenuItemStruct,
        closeAll: contextmenuItemStruct,
        fullscreen: contextmenuItemStruct,
        refresh: contextmenuItemStruct,
        centerActive: contextmenuItemStruct,
        newBlank: contextmenuItemStruct
      }),
      mouseWheelSwitch: Struct.object({
        enable: boolean(),
        onlyScroll: boolean()
      }),
      maxNum: Struct.integer(),
      closeBtn: Struct.object({
        enable: boolean(),
        showOnHover: boolean(),
        icon: string()
      }),
      resizeCenterActive: boolean(),
      clickCenterActive: boolean(),
      doubleClick: Struct.object({
        enable: boolean(),
        refresh: boolean()
      }),
      dragSort: boolean(),
      timeout: Struct.object({
        enable: boolean(),
        filter: func(),
        text: string(),
        second: Struct.positiveInteger(),
        template: string()
      }),
      loading: Struct.object({
        enable: boolean(),
        filter: func(),
        template: string()
      })
    }),
    onTabActivated: func(),
    onTabAddActivated: func(),
    onTabLoaded: func(),
    onTabTimeout: func(),
    onTabFinally: func(),
    onTabAll: func(),
    onTabLoadingTransitionend: func(),
    onTabClick: func(),
    onTabDoubleClick: func(),
    onTabClose: func(),
    onInit: func()
  });

  var TabOption = {
    //标题
    title: '新标签页',
    // 地址
    url: '',
    //可否关闭
    closable: true
  };

  var DataKeys = {
    tabUrl: 'data-tab-url',
    container: 'data-quicktab',
    contextmenu: 'data-qt-contextmenu',
    dropdown: 'data-qt-dropdown',
    //记录iframe的状态 true:表示已经加载完毕
    iframeLoaded: 'loaded',
    addTabTarget: 'data-qt-target',
    addTabParentTarget: 'data-qt-parent-target',
    addTabUrl: 'data-qt-tab-url',
    addTabTitle: 'data-qt-tab-title',
    addTabClosable: 'data-qt-tab-closable',
    //iframe的超时句柄
    iframeTimeoutTimer: 'timer',
    //每个tab的选项数据存储在dom上的key
    tabOptionDataKey: 'qtab'
  };

  var Classes = {
    toolbar: 'tab-bar',
    toolbarHide: 'hide',
    toolbarPrevItem: 'prev',
    toolbarRefreshItem: 'refresh',
    toolbarTabWrapperItem: 'scroll',
    toolbarNextItem: 'next',
    toolbarDropdownItem: 'dropdown',
    toolbarFullscreenItem: 'fullscreen',
    tabBody: 'tab-body',
    tabActive: 'active',
    tabDisabled: 'disabled',
    tabPaneActive: 'active',
    //关闭按钮鼠标移入时才显示时的辅助类名
    showCloseBtnOnHover: 'hover',
    listGroupCloseItem: 'close',
    listGroupActive: 'active',
    listGroupCloseOtherItem: 'other',
    listGroupClosePrevItem: 'prev',
    listGroupCloseNextItem: 'next',
    listGroupCloseAllItem: 'all',
    listGroupRefreshItem: 'refresh',
    listGroupCenterActiveItem: 'center-active',
    listGroupNewBlankItem: 'new-blank',
    listGroupFullscreenItem: 'fullscreen',
    //遮罩层
    overlays: 'mask',
    //下拉菜单粘性标题部分有图标时的类
    dropdownBodyStickyHasIcon: 'has-icon',
    //用于阻止事件被iframe无视的问题(增强用户体验)
    contextmenuPEN: 'pen-contextmenu',
    dropdownPEN: 'pen-dropdown',
    dropdownActive: 'active'
  };

  var Html = {
    // 容器
    container: ["<div ".concat(DataKeys.container, "=\"%s\" class=\"quicktab\">"), '</div>'],
    //工具栏容器
    toolbar: ["<ul class=\"".concat(Classes.toolbar, " %s\">"), '</ul>'],
    // 工具栏的项目
    toolbarItem: "<li class=\"%s\">%s</li>",
    //选项卡body部分
    tabBody: "<ul class=\"".concat(Classes.tabBody, "\"></ul>"),
    tabBodyItem: "<li ".concat(DataKeys.tabUrl, "=%s></li>"),
    //遮罩层包裹层
    maskWrapper: "<div ".concat(DataKeys.tabUrl, "=%s  class=\"").concat(Classes.overlays, "\"><div class=\"mask-inner\">%s</div></div>"),
    //加载器
    loading: "<div class=\"quicktab-loaders\"><div></div><div></div><div></div></div>",
    //默认超时界面
    timeout: "<div style=\"width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;background-color:#f8f9fa;\"><span style=\"color: rgba(33, 37, 41, 0.75);\">%s</span></div>",
    //单个tab结构
    tab: "<button %s class=\"%s\" ".concat(DataKeys.tabUrl, "=%s ><span>%s</span>%s</button>"),
    //列表组
    listGroup: ["<ul ".concat(DataKeys.contextmenu, "=\"%s\" class=\"quicktab-list-group\">"), '</ul>'],
    //列表关闭item
    listGroupItem: "<li class=\"%s\"><span>%s</span></li>",
    //分隔线
    listGroupSeparatorItem: '<li class="separator"></li>',
    //下拉菜单
    dropdown: ["<div ".concat(DataKeys.dropdown, "=\"%s\" class=\"quicktab-dropdown\">"), '</div>'],
    //头部
    dropdownHeader: "<div class=\"header\">%s<input type=\"text\" autocomplete=\"off\" placeholder=\"%s\"></div>",
    dropdownBody: ['<div class="body">', '</div>'],
    //粘性布局(第一个占位符表示是否是有图标的项目，最后一个是图标容器)
    dropdownBodySticky: "<div class=\"sticky %s\"><div class=\"subheader\"><div class=\"subheader-text\">%s</div>%s</div></div>",
    //列表容器单元
    dropdownBodySection: "<ul class=\"section\"></ul>",
    //图标容器(第一个占位是表示是否需要聚焦状态)
    iconWrapper: "<div class=\"icon-wrapper\" %s>%s</div>",
    dropdownEmpty: "<div class=\"empty\">%s</div>",
    //每个tab的条目(最后一个占位表示图标容器部分)
    sectionItem: "<li class=\"%s\">\n                    <div class=\"details\">\n                        <p class=\"title\">%s</p>\n                        <p><span class=\"url\">%s</span><span class=\"dot\">\xB7</span>%s </p>\n                    </div>\n                    %s\n                </li>"
  };

  var Lang = {
    formatTimeoutMessage() {
      return '请求超时';
    },
    formatContextmenuClose() {
      return "\u5173\u95ED\u5F53\u524D";
    },
    formatContextmenuCloseOthers() {
      return "\u5173\u95ED\u5176\u5B83";
    },
    formatContextmenuClosePrev() {
      return "\u5173\u95ED\u5DE6\u4FA7";
    },
    formatContextmenuCloseNext() {
      return "\u5173\u95ED\u53F3\u4FA7";
    },
    formatContextmenuCloseAll() {
      return "\u5173\u95ED\u6240\u6709";
    },
    formatContextmenuFullscreen() {
      return "\u5168\u5C4F\u663E\u793A";
    },
    formatContextmenuRefresh() {
      return "\u91CD\u65B0\u52A0\u8F7D";
    },
    formatContextmenuCenterActive() {
      return "\u56DE\u5230\u5F53\u524D";
    },
    formatContextmenuNewBlank() {
      return "\u65B0\u7A97\u53E3\u6253\u5F00";
    },
    formatSearchInputPlaceholder() {
      return "\u641C\u7D22\u6807\u7B7E\u9875";
    },
    formatOpenedTabs() {
      return "\u6253\u5F00\u7684\u6807\u7B7E\u9875";
    },
    formatRecentlyClosedTabs() {
      return "\u6700\u8FD1\u5173\u95ED\u7684\u6807\u7B7E\u9875";
    },
    formatSearchNoResults() {
      return "\u627E\u4E0D\u5230\u4EFB\u4F55\u7ED3\u679C";
    },
    formatTimeYear() {
      return "\u5E74\u524D";
    },
    formatTimeMonths() {
      return "\u4E2A\u6708\u524D";
    },
    formatTimeDays() {
      return "\u5929\u524D";
    },
    formatTimeHours() {
      return "\u5C0F\u65F6\u524D";
    },
    formatTimeMinutes() {
      return "\u5206\u949F\u524D";
    },
    formatTimeSeconds() {
      return "\u79D2\u524D";
    }
  };

  const NAMESPACE = 'Quicktab';
  const VERSION = '0.0.1';
  const SELECTOR_DATA_TOGGLE = '[data-qt-toggle="quicktab"]';

  // 默认选项
  const DEFAULTS = Utils.extend(true, {}, Options, Lang);
  const LANGS = {
    zh: Lang,
    'zh-CN': Lang
  };
  var Constants = {
    VERSION,
    DEFAULTS,
    OPTIONS: Options,
    OPTIONSSTRUCT: OptionsStruct,
    TABOPTIONSTRUCT: TabOptionStruct,
    DATAKEYS: DataKeys,
    TABDEFAULTS: TabOption,
    CLASSES: Classes,
    HTML: Html,
    SELECTOR_DATA_TOGGLE,
    LANGS,
    NAMESPACE
  };

  class TagSet {
    constructor(tag, cache) {
      //标签的缓存Key
      this.tag = Array.isArray(tag) ? tag : [tag];

      //缓存句柄
      this.handler = cache;
    }
    set(key, value) {
      let expire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.handler.set(key, value, expire);
      this.append(key);
    }
    append(key) {
      for (const tag of this.tag) {
        //读取标签
        const tagItems = this.handler.getTagItems(tag);

        //判断标签是否在数组里,不再就直接加入
        if (!tagItems.includes(key)) {
          //加入数组
          tagItems.push(key);

          //重新设置回去
          this.handler.set(tag, tagItems);
        }
      }
    }
    clear() {
      for (const tag of this.tag) {
        const tagItems = this.handler.getTagItems(tag);

        //分别遍历删除所有的缓存
        for (const cacheKey of tagItems) {
          this.handler.delete(cacheKey);
        }
        //再删除标签
        this.handler.delete(tag);
      }
    }
  }

  class QuickCache {
    constructor() {
      let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.type = options.type || 'local'; //默认驱动是 localStorage
      this.expire = options.expire || 0;
      this.prefix = options.prefix || '';
      this.serialize = options.serialize || JSON.stringify;
      this.deserialize = options.deserialize || JSON.parse;
      this.storage = window["".concat(this.type, "Storage")];
    }
    getKey(key) {
      return this.prefix + key;
    }
    set(key, value) {
      let expire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      const cacheValue = {
        value,
        expire: expire || this.expire !== 0 ? Date.now() + (expire || this.expire) * 1000 : 0
      };
      try {
        this.storage.setItem(this.getKey(key), this.serialize(cacheValue));
        return true;
      } catch (error) {
        return false;
      }
    }
    has(key) {
      return this.storage.getItem(this.getKey(key)) !== null;
    }
    get(key) {
      let defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      const cacheValue = this.storage.getItem(this.getKey(key));
      if (cacheValue) {
        const parsedValue = this.deserialize(cacheValue);
        if (parsedValue.expire === 0 || parsedValue.expire >= Date.now()) {
          return parsedValue.value;
        }
        this.delete(key);
      }
      return defaultValue;
    }
    delete(key) {
      this.storage.removeItem(this.getKey(key));
    }
    clear() {
      this.storage.clear();
    }
    remember(key, value) {
      let expire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      const cachedValue = this.get(key);
      if (cachedValue !== null) {
        return cachedValue;
      }
      if (typeof value === 'function') {
        //允许第二个参数是一个函数
        const computedValue = value();
        this.set(key, computedValue, expire);
        return computedValue;
      }
      this.set(key, value, expire);
      return value;
    }
    inc(key) {
      let step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      const cachedValue = this.get(key, 0);
      if (typeof cachedValue === 'number') {
        this.set(key, cachedValue + step);
      }
    }
    tag(tag) {
      return new TagSet(tag, this);
    }
    dec(key) {
      let step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.inc(key, -step);
    }

    //获取并删除缓存
    pull(key) {
      let value = this.get(key);
      this.delete(key);
      return value;
    }
    push(key, value) {
      const cachedValue = this.get(key, []);
      if (Array.isArray(cachedValue)) {
        cachedValue.push(value);
        this.set(key, cachedValue);
      }
    }
    store(type) {
      return new this.constructor({
        type,
        expire: this.expire,
        prefix: this.prefix,
        serialize: this.serialize,
        deserialize: this.deserialize
      });
    }
    getTagItems(tag) {
      return this.get(tag, []);
    }
  }

  // For ECMAScript module environments where a proper `window`
  // is present, execute the factory and get jQuery.
  function jQueryFactory( window, noGlobal ) {

  if ( typeof window === "undefined" || !window.document ) {
  	throw new Error( "jQuery requires a window with a document" );
  }

  var arr = [];

  var getProto = Object.getPrototypeOf;

  var slice = arr.slice;

  // Support: IE 11+
  // IE doesn't have Array#flat; provide a fallback.
  var flat = arr.flat ? function( array ) {
  	return arr.flat.call( array );
  } : function( array ) {
  	return arr.concat.apply( [], array );
  };

  var push = arr.push;

  var indexOf = arr.indexOf;

  // [[Class]] -> type pairs
  var class2type = {};

  var toString = class2type.toString;

  var hasOwn = class2type.hasOwnProperty;

  var fnToString = hasOwn.toString;

  var ObjectFunctionString = fnToString.call( Object );

  // All support tests are defined in their respective modules.
  var support = {};

  function toType( obj ) {
  	if ( obj == null ) {
  		return obj + "";
  	}

  	return typeof obj === "object" ?
  		class2type[ toString.call( obj ) ] || "object" :
  		typeof obj;
  }

  function isWindow( obj ) {
  	return obj != null && obj === obj.window;
  }

  function isArrayLike( obj ) {

  	var length = !!obj && obj.length,
  		type = toType( obj );

  	if ( typeof obj === "function" || isWindow( obj ) ) {
  		return false;
  	}

  	return type === "array" || length === 0 ||
  		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
  }

  var document = window.document;

  var preservedScriptAttributes = {
  	type: true,
  	src: true,
  	nonce: true,
  	noModule: true
  };

  function DOMEval( code, node, doc ) {
  	doc = doc || document;

  	var i,
  		script = doc.createElement( "script" );

  	script.text = code;
  	for ( i in preservedScriptAttributes ) {
  		if ( node && node[ i ] ) {
  			script[ i ] = node[ i ];
  		}
  	}

  	if ( doc.head.appendChild( script ).parentNode ) {
  		script.parentNode.removeChild( script );
  	}
  }

  var version = "4.0.0-pre+e06ff088 +event",

  	rhtmlSuffix = /HTML$/i,

  	// Define a local copy of jQuery
  	jQuery = function( selector, context ) {

  		// The jQuery object is actually just the init constructor 'enhanced'
  		// Need init if jQuery is called (just allow error to be thrown if not included)
  		return new jQuery.fn.init( selector, context );
  	};

  jQuery.fn = jQuery.prototype = {

  	// The current version of jQuery being used
  	jquery: version,

  	constructor: jQuery,

  	// The default length of a jQuery object is 0
  	length: 0,

  	toArray: function() {
  		return slice.call( this );
  	},

  	// Get the Nth element in the matched element set OR
  	// Get the whole matched element set as a clean array
  	get: function( num ) {

  		// Return all the elements in a clean array
  		if ( num == null ) {
  			return slice.call( this );
  		}

  		// Return just the one element from the set
  		return num < 0 ? this[ num + this.length ] : this[ num ];
  	},

  	// Take an array of elements and push it onto the stack
  	// (returning the new matched element set)
  	pushStack: function( elems ) {

  		// Build a new jQuery matched element set
  		var ret = jQuery.merge( this.constructor(), elems );

  		// Add the old object onto the stack (as a reference)
  		ret.prevObject = this;

  		// Return the newly-formed element set
  		return ret;
  	},

  	// Execute a callback for every element in the matched set.
  	each: function( callback ) {
  		return jQuery.each( this, callback );
  	},

  	map: function( callback ) {
  		return this.pushStack( jQuery.map( this, function( elem, i ) {
  			return callback.call( elem, i, elem );
  		} ) );
  	},

  	slice: function() {
  		return this.pushStack( slice.apply( this, arguments ) );
  	},

  	first: function() {
  		return this.eq( 0 );
  	},

  	last: function() {
  		return this.eq( -1 );
  	},

  	even: function() {
  		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
  			return ( i + 1 ) % 2;
  		} ) );
  	},

  	odd: function() {
  		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
  			return i % 2;
  		} ) );
  	},

  	eq: function( i ) {
  		var len = this.length,
  			j = +i + ( i < 0 ? len : 0 );
  		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
  	},

  	end: function() {
  		return this.prevObject || this.constructor();
  	}
  };

  jQuery.extend = jQuery.fn.extend = function() {
  	var options, name, src, copy, copyIsArray, clone,
  		target = arguments[ 0 ] || {},
  		i = 1,
  		length = arguments.length,
  		deep = false;

  	// Handle a deep copy situation
  	if ( typeof target === "boolean" ) {
  		deep = target;

  		// Skip the boolean and the target
  		target = arguments[ i ] || {};
  		i++;
  	}

  	// Handle case when target is a string or something (possible in deep copy)
  	if ( typeof target !== "object" && typeof target !== "function" ) {
  		target = {};
  	}

  	// Extend jQuery itself if only one argument is passed
  	if ( i === length ) {
  		target = this;
  		i--;
  	}

  	for ( ; i < length; i++ ) {

  		// Only deal with non-null/undefined values
  		if ( ( options = arguments[ i ] ) != null ) {

  			// Extend the base object
  			for ( name in options ) {
  				copy = options[ name ];

  				// Prevent Object.prototype pollution
  				// Prevent never-ending loop
  				if ( name === "__proto__" || target === copy ) {
  					continue;
  				}

  				// Recurse if we're merging plain objects or arrays
  				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
  					( copyIsArray = Array.isArray( copy ) ) ) ) {
  					src = target[ name ];

  					// Ensure proper type for the source value
  					if ( copyIsArray && !Array.isArray( src ) ) {
  						clone = [];
  					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
  						clone = {};
  					} else {
  						clone = src;
  					}
  					copyIsArray = false;

  					// Never move original objects, clone them
  					target[ name ] = jQuery.extend( deep, clone, copy );

  				// Don't bring in undefined values
  				} else if ( copy !== undefined ) {
  					target[ name ] = copy;
  				}
  			}
  		}
  	}

  	// Return the modified object
  	return target;
  };

  jQuery.extend( {

  	// Unique for each copy of jQuery on the page
  	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

  	// Assume jQuery is ready without the ready module
  	isReady: true,

  	error: function( msg ) {
  		throw new Error( msg );
  	},

  	noop: function() {},

  	isPlainObject: function( obj ) {
  		var proto, Ctor;

  		// Detect obvious negatives
  		// Use toString instead of jQuery.type to catch host objects
  		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
  			return false;
  		}

  		proto = getProto( obj );

  		// Objects with no prototype (e.g., `Object.create( null )`) are plain
  		if ( !proto ) {
  			return true;
  		}

  		// Objects with prototype are plain iff they were constructed by a global Object function
  		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
  		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
  	},

  	isEmptyObject: function( obj ) {
  		var name;

  		for ( name in obj ) {
  			return false;
  		}
  		return true;
  	},

  	// Evaluates a script in a provided context; falls back to the global one
  	// if not specified.
  	globalEval: function( code, options, doc ) {
  		DOMEval( code, { nonce: options && options.nonce }, doc );
  	},

  	each: function( obj, callback ) {
  		var length, i = 0;

  		if ( isArrayLike( obj ) ) {
  			length = obj.length;
  			for ( ; i < length; i++ ) {
  				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
  					break;
  				}
  			}
  		} else {
  			for ( i in obj ) {
  				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
  					break;
  				}
  			}
  		}

  		return obj;
  	},


  	// Retrieve the text value of an array of DOM nodes
  	text: function( elem ) {
  		var node,
  			ret = "",
  			i = 0,
  			nodeType = elem.nodeType;

  		if ( !nodeType ) {

  			// If no nodeType, this is expected to be an array
  			while ( ( node = elem[ i++ ] ) ) {

  				// Do not traverse comment nodes
  				ret += jQuery.text( node );
  			}
  		}
  		if ( nodeType === 1 || nodeType === 11 ) {
  			return elem.textContent;
  		}
  		if ( nodeType === 9 ) {
  			return elem.documentElement.textContent;
  		}
  		if ( nodeType === 3 || nodeType === 4 ) {
  			return elem.nodeValue;
  		}

  		// Do not include comment or processing instruction nodes

  		return ret;
  	},


  	// results is for internal usage only
  	makeArray: function( arr, results ) {
  		var ret = results || [];

  		if ( arr != null ) {
  			if ( isArrayLike( Object( arr ) ) ) {
  				jQuery.merge( ret,
  					typeof arr === "string" ?
  						[ arr ] : arr
  				);
  			} else {
  				push.call( ret, arr );
  			}
  		}

  		return ret;
  	},

  	inArray: function( elem, arr, i ) {
  		return arr == null ? -1 : indexOf.call( arr, elem, i );
  	},

  	isXMLDoc: function( elem ) {
  		var namespace = elem && elem.namespaceURI,
  			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

  		// Assume HTML when documentElement doesn't yet exist, such as inside
  		// document fragments.
  		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
  	},

  	// Note: an element does not contain itself
  	contains: function( a, b ) {
  		var bup = b && b.parentNode;

  		return a === bup || !!( bup && bup.nodeType === 1 && (

  			// Support: IE 9 - 11+
  			// IE doesn't have `contains` on SVG.
  			a.contains ?
  				a.contains( bup ) :
  				a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
  		) );
  	},

  	merge: function( first, second ) {
  		var len = +second.length,
  			j = 0,
  			i = first.length;

  		for ( ; j < len; j++ ) {
  			first[ i++ ] = second[ j ];
  		}

  		first.length = i;

  		return first;
  	},

  	grep: function( elems, callback, invert ) {
  		var callbackInverse,
  			matches = [],
  			i = 0,
  			length = elems.length,
  			callbackExpect = !invert;

  		// Go through the array, only saving the items
  		// that pass the validator function
  		for ( ; i < length; i++ ) {
  			callbackInverse = !callback( elems[ i ], i );
  			if ( callbackInverse !== callbackExpect ) {
  				matches.push( elems[ i ] );
  			}
  		}

  		return matches;
  	},

  	// arg is for internal usage only
  	map: function( elems, callback, arg ) {
  		var length, value,
  			i = 0,
  			ret = [];

  		// Go through the array, translating each of the items to their new values
  		if ( isArrayLike( elems ) ) {
  			length = elems.length;
  			for ( ; i < length; i++ ) {
  				value = callback( elems[ i ], i, arg );

  				if ( value != null ) {
  					ret.push( value );
  				}
  			}

  		// Go through every key on the object,
  		} else {
  			for ( i in elems ) {
  				value = callback( elems[ i ], i, arg );

  				if ( value != null ) {
  					ret.push( value );
  				}
  			}
  		}

  		// Flatten any nested arrays
  		return flat( ret );
  	},

  	// A global GUID counter for objects
  	guid: 1,

  	// jQuery.support is not used in Core but other projects attach their
  	// properties to it so it needs to exist.
  	support: support
  } );

  if ( typeof Symbol === "function" ) {
  	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
  }

  // Populate the class2type map
  jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
  	function( _i, name ) {
  		class2type[ "[object " + name + "]" ] = name.toLowerCase();
  	} );

  var documentElement = document.documentElement;

  // Only count HTML whitespace
  // Other whitespace should count in values
  // https://infra.spec.whatwg.org/#ascii-whitespace
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

  var rcheckableType = /^(?:checkbox|radio)$/i;

  var isIE = document.documentMode;

  /**
   * Determines whether an object can have data
   */
  function acceptData( owner ) {

  	// Accepts only:
  	//  - Node
  	//    - Node.ELEMENT_NODE
  	//    - Node.DOCUMENT_NODE
  	//  - Object
  	//    - Any
  	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
  }

  // Matches dashed string for camelizing
  var rdashAlpha = /-([a-z])/g;

  // Used by camelCase as callback to replace()
  function fcamelCase( _all, letter ) {
  	return letter.toUpperCase();
  }

  // Convert dashed to camelCase
  function camelCase( string ) {
  	return string.replace( rdashAlpha, fcamelCase );
  }

  function Data() {
  	this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;

  Data.prototype = {

  	cache: function( owner ) {

  		// Check if the owner object already has a cache
  		var value = owner[ this.expando ];

  		// If not, create one
  		if ( !value ) {
  			value = Object.create( null );

  			// We can accept data for non-element nodes in modern browsers,
  			// but we should not, see trac-8335.
  			// Always return an empty object.
  			if ( acceptData( owner ) ) {

  				// If it is a node unlikely to be stringify-ed or looped over
  				// use plain assignment
  				if ( owner.nodeType ) {
  					owner[ this.expando ] = value;

  				// Otherwise secure it in a non-enumerable property
  				// configurable must be true to allow the property to be
  				// deleted when data is removed
  				} else {
  					Object.defineProperty( owner, this.expando, {
  						value: value,
  						configurable: true
  					} );
  				}
  			}
  		}

  		return value;
  	},
  	set: function( owner, data, value ) {
  		var prop,
  			cache = this.cache( owner );

  		// Handle: [ owner, key, value ] args
  		// Always use camelCase key (gh-2257)
  		if ( typeof data === "string" ) {
  			cache[ camelCase( data ) ] = value;

  		// Handle: [ owner, { properties } ] args
  		} else {

  			// Copy the properties one-by-one to the cache object
  			for ( prop in data ) {
  				cache[ camelCase( prop ) ] = data[ prop ];
  			}
  		}
  		return cache;
  	},
  	get: function( owner, key ) {
  		return key === undefined ?
  			this.cache( owner ) :

  			// Always use camelCase key (gh-2257)
  			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
  	},
  	access: function( owner, key, value ) {

  		// In cases where either:
  		//
  		//   1. No key was specified
  		//   2. A string key was specified, but no value provided
  		//
  		// Take the "read" path and allow the get method to determine
  		// which value to return, respectively either:
  		//
  		//   1. The entire cache object
  		//   2. The data stored at the key
  		//
  		if ( key === undefined ||
  				( ( key && typeof key === "string" ) && value === undefined ) ) {

  			return this.get( owner, key );
  		}

  		// When the key is not a string, or both a key and value
  		// are specified, set or extend (existing objects) with either:
  		//
  		//   1. An object of properties
  		//   2. A key and value
  		//
  		this.set( owner, key, value );

  		// Since the "set" path can have two possible entry points
  		// return the expected data based on which path was taken[*]
  		return value !== undefined ? value : key;
  	},
  	remove: function( owner, key ) {
  		var i,
  			cache = owner[ this.expando ];

  		if ( cache === undefined ) {
  			return;
  		}

  		if ( key !== undefined ) {

  			// Support array or space separated string of keys
  			if ( Array.isArray( key ) ) {

  				// If key is an array of keys...
  				// We always set camelCase keys, so remove that.
  				key = key.map( camelCase );
  			} else {
  				key = camelCase( key );

  				// If a key with the spaces exists, use it.
  				// Otherwise, create an array by matching non-whitespace
  				key = key in cache ?
  					[ key ] :
  					( key.match( rnothtmlwhite ) || [] );
  			}

  			i = key.length;

  			while ( i-- ) {
  				delete cache[ key[ i ] ];
  			}
  		}

  		// Remove the expando if there's no more data
  		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

  			// Support: Chrome <=35 - 45+
  			// Webkit & Blink performance suffers when deleting properties
  			// from DOM nodes, so set to undefined instead
  			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
  			if ( owner.nodeType ) {
  				owner[ this.expando ] = undefined;
  			} else {
  				delete owner[ this.expando ];
  			}
  		}
  	},
  	hasData: function( owner ) {
  		var cache = owner[ this.expando ];
  		return cache !== undefined && !jQuery.isEmptyObject( cache );
  	}
  };

  var dataPriv = new Data();

  function nodeName( elem, name ) {
  	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  // rsingleTag matches a string consisting of a single HTML element with no attributes
  // and captures the element's name
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function isObviousHtml( input ) {
  	return input[ 0 ] === "<" &&
  		input[ input.length - 1 ] === ">" &&
  		input.length >= 3;
  }

  var pop = arr.pop;

  // https://www.w3.org/TR/css3-selectors/#whitespace
  var whitespace = "[\\x20\\t\\r\\n\\f]";

  // Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
  // Make sure the `:has()` argument is parsed unforgivingly.
  // We include `*` in the test to detect buggy implementations that are
  // _selectively_ forgiving (specifically when the list includes at least
  // one valid selector).
  // Note that we treat complete lack of support for `:has()` as if it were
  // spec-compliant support, which is fine because use of `:has()` in such
  // environments will fail in the qSA path and fall back to jQuery traversal
  // anyway.
  try {
  	document.querySelector( ":has(*,:jqfake)" );
  	support.cssHas = false;
  } catch ( e ) {
  	support.cssHas = true;
  }

  // Build QSA regex.
  // Regex strategy adopted from Diego Perini.
  var rbuggyQSA = [];

  if ( isIE ) {
  	rbuggyQSA.push(

  		// Support: IE 9 - 11+
  		// IE's :disabled selector does not pick up the children of disabled fieldsets
  		":enabled",
  		":disabled",

  		// Support: IE 11+
  		// IE 11 doesn't find elements on a `[name='']` query in some cases.
  		// Adding a temporary attribute to the document before the selection works
  		// around the issue.
  		"\\[" + whitespace + "*name" + whitespace + "*=" +
  			whitespace + "*(?:''|\"\")"
  	);
  }

  if ( !support.cssHas ) {

  	// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
  	// Our regular `try-catch` mechanism fails to detect natively-unsupported
  	// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
  	// in browsers that parse the `:has()` argument as a forgiving selector list.
  	// https://drafts.csswg.org/selectors/#relational now requires the argument
  	// to be parsed unforgivingly, but browsers have not yet fully adjusted.
  	rbuggyQSA.push( ":has" );
  }

  rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

  var rtrimCSS = new RegExp(
  	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
  	"g"
  );

  // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
  var identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
  	"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+";

  var rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" +
  	whitespace + ")" + whitespace + "*" );

  var rdescend = new RegExp( whitespace + "|>" );

  var rsibling = /[+~]/;

  // Support: IE 9 - 11+
  // IE requires a prefix.
  var matches = documentElement.matches || documentElement.msMatchesSelector;

  /**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
  function createCache() {
  	var keys = [];

  	function cache( key, value ) {

  		// Use (key + " ") to avoid collision with native prototype properties
  		// (see https://github.com/jquery/sizzle/issues/157)
  		if ( keys.push( key + " " ) > jQuery.expr.cacheLength ) {

  			// Only keep the most recent entries
  			delete cache[ keys.shift() ];
  		}
  		return ( cache[ key + " " ] = value );
  	}
  	return cache;
  }

  /**
   * Checks a node for validity as a jQuery selector context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
  function testContext( context ) {
  	return context && typeof context.getElementsByTagName !== "undefined" && context;
  }

  // Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
  var attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

  	// Operator (capture 2)
  	"*([*^$|!~]?=)" + whitespace +

  	// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
  	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
  	whitespace + "*\\]";

  var pseudos = ":(" + identifier + ")(?:\\((" +

  	// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
  	// 1. quoted (capture 3; capture 4 or capture 5)
  	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

  	// 2. simple (capture 6)
  	"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

  	// 3. anything else (capture 2)
  	".*" +
  	")\\)|)";

  var filterMatchExpr = {
  	ID: new RegExp( "^#(" + identifier + ")" ),
  	CLASS: new RegExp( "^\\.(" + identifier + ")" ),
  	TAG: new RegExp( "^(" + identifier + "|[*])" ),
  	ATTR: new RegExp( "^" + attributes ),
  	PSEUDO: new RegExp( "^" + pseudos ),
  	CHILD: new RegExp(
  		"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
  		whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
  		whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" )
  };

  var rpseudo = new RegExp( pseudos );

  // CSS escapes

  var runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
  	"?|\\\\([^\\r\\n\\f])", "g" ),
  	funescape = function( escape, nonHex ) {
  		var high = "0x" + escape.slice( 1 ) - 0x10000;

  		if ( nonHex ) {

  			// Strip the backslash prefix from a non-hex escape sequence
  			return nonHex;
  		}

  		// Replace a hexadecimal escape sequence with the encoded Unicode code point
  		// Support: IE <=11+
  		// For values outside the Basic Multilingual Plane (BMP), manually construct a
  		// surrogate pair
  		return high < 0 ?
  			String.fromCharCode( high + 0x10000 ) :
  			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
  	};

  function unescapeSelector( sel ) {
  	return sel.replace( runescape, funescape );
  }

  function selectorError( msg ) {
  	jQuery.error( "Syntax error, unrecognized expression: " + msg );
  }

  var rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" );

  var tokenCache = createCache();

  function tokenize( selector, parseOnly ) {
  	var matched, match, tokens, type,
  		soFar, groups, preFilters,
  		cached = tokenCache[ selector + " " ];

  	if ( cached ) {
  		return parseOnly ? 0 : cached.slice( 0 );
  	}

  	soFar = selector;
  	groups = [];
  	preFilters = jQuery.expr.preFilter;

  	while ( soFar ) {

  		// Comma and first run
  		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
  			if ( match ) {

  				// Don't consume trailing commas as valid
  				soFar = soFar.slice( match[ 0 ].length ) || soFar;
  			}
  			groups.push( ( tokens = [] ) );
  		}

  		matched = false;

  		// Combinators
  		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
  			matched = match.shift();
  			tokens.push( {
  				value: matched,

  				// Cast descendant combinators to space
  				type: match[ 0 ].replace( rtrimCSS, " " )
  			} );
  			soFar = soFar.slice( matched.length );
  		}

  		// Filters
  		for ( type in filterMatchExpr ) {
  			if ( ( match = jQuery.expr.match[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
  				( match = preFilters[ type ]( match ) ) ) ) {
  				matched = match.shift();
  				tokens.push( {
  					value: matched,
  					type: type,
  					matches: match
  				} );
  				soFar = soFar.slice( matched.length );
  			}
  		}

  		if ( !matched ) {
  			break;
  		}
  	}

  	// Return the length of the invalid excess
  	// if we're just parsing
  	// Otherwise, throw an error or return tokens
  	if ( parseOnly ) {
  		return soFar.length;
  	}

  	return soFar ?
  		selectorError( selector ) :

  		// Cache the tokens
  		tokenCache( selector, groups ).slice( 0 );
  }

  var preFilter = {
  	ATTR: function( match ) {
  		match[ 1 ] = unescapeSelector( match[ 1 ] );

  		// Move the given value to match[3] whether quoted or unquoted
  		match[ 3 ] = unescapeSelector( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" );

  		if ( match[ 2 ] === "~=" ) {
  			match[ 3 ] = " " + match[ 3 ] + " ";
  		}

  		return match.slice( 0, 4 );
  	},

  	CHILD: function( match ) {

  		/* matches from filterMatchExpr["CHILD"]
  			1 type (only|nth|...)
  			2 what (child|of-type)
  			3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
  			4 xn-component of xn+y argument ([+-]?\d*n|)
  			5 sign of xn-component
  			6 x of xn-component
  			7 sign of y-component
  			8 y of y-component
  		*/
  		match[ 1 ] = match[ 1 ].toLowerCase();

  		if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

  			// nth-* requires argument
  			if ( !match[ 3 ] ) {
  				selectorError( match[ 0 ] );
  			}

  			// numeric x and y parameters for jQuery.expr.filter.CHILD
  			// remember that false/true cast respectively to 0/1
  			match[ 4 ] = +( match[ 4 ] ?
  				match[ 5 ] + ( match[ 6 ] || 1 ) :
  				2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" )
  			);
  			match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

  		// other types prohibit arguments
  		} else if ( match[ 3 ] ) {
  			selectorError( match[ 0 ] );
  		}

  		return match;
  	},

  	PSEUDO: function( match ) {
  		var excess,
  			unquoted = !match[ 6 ] && match[ 2 ];

  		if ( filterMatchExpr.CHILD.test( match[ 0 ] ) ) {
  			return null;
  		}

  		// Accept quoted arguments as-is
  		if ( match[ 3 ] ) {
  			match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

  		// Strip excess characters from unquoted arguments
  		} else if ( unquoted && rpseudo.test( unquoted ) &&

  			// Get excess from tokenize (recursively)
  			( excess = tokenize( unquoted, true ) ) &&

  			// advance to the next closing parenthesis
  			( excess = unquoted.indexOf( ")", unquoted.length - excess ) -
  				unquoted.length ) ) {

  			// excess is a negative index
  			match[ 0 ] = match[ 0 ].slice( 0, excess );
  			match[ 2 ] = unquoted.slice( 0, excess );
  		}

  		// Return only captures needed by the pseudo filter method (type and argument)
  		return match.slice( 0, 3 );
  	}
  };

  function toSelector( tokens ) {
  	var i = 0,
  		len = tokens.length,
  		selector = "";
  	for ( ; i < len; i++ ) {
  		selector += tokens[ i ].value;
  	}
  	return selector;
  }

  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  function access( elems, fn, key, value, chainable, emptyGet, raw ) {
  	var i = 0,
  		len = elems.length,
  		bulk = key == null;

  	// Sets many values
  	if ( toType( key ) === "object" ) {
  		chainable = true;
  		for ( i in key ) {
  			access( elems, fn, i, key[ i ], true, emptyGet, raw );
  		}

  	// Sets one value
  	} else if ( value !== undefined ) {
  		chainable = true;

  		if ( typeof value !== "function" ) {
  			raw = true;
  		}

  		if ( bulk ) {

  			// Bulk operations run against the entire set
  			if ( raw ) {
  				fn.call( elems, value );
  				fn = null;

  			// ...except when executing function values
  			} else {
  				bulk = fn;
  				fn = function( elem, _key, value ) {
  					return bulk.call( jQuery( elem ), value );
  				};
  			}
  		}

  		if ( fn ) {
  			for ( ; i < len; i++ ) {
  				fn(
  					elems[ i ], key, raw ?
  						value :
  						value.call( elems[ i ], i, fn( elems[ i ], key ) )
  				);
  			}
  		}
  	}

  	if ( chainable ) {
  		return elems;
  	}

  	// Gets
  	if ( bulk ) {
  		return fn.call( elems );
  	}

  	return len ? fn( elems[ 0 ], key ) : emptyGet;
  }

  jQuery.fn.extend( {
  	attr: function( name, value ) {
  		return access( this, jQuery.attr, name, value, arguments.length > 1 );
  	},

  	removeAttr: function( name ) {
  		return this.each( function() {
  			jQuery.removeAttr( this, name );
  		} );
  	}
  } );

  jQuery.extend( {
  	attr: function( elem, name, value ) {
  		var ret, hooks,
  			nType = elem.nodeType;

  		// Don't get/set attributes on text, comment and attribute nodes
  		if ( nType === 3 || nType === 8 || nType === 2 ) {
  			return;
  		}

  		// Fallback to prop when attributes are not supported
  		if ( typeof elem.getAttribute === "undefined" ) {
  			return jQuery.prop( elem, name, value );
  		}

  		// Attribute hooks are determined by the lowercase version
  		// Grab necessary hook if one is defined
  		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
  			hooks = jQuery.attrHooks[ name.toLowerCase() ];
  		}

  		if ( value !== undefined ) {
  			if ( value === null ) {
  				jQuery.removeAttr( elem, name );
  				return;
  			}

  			if ( hooks && "set" in hooks &&
  				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
  				return ret;
  			}

  			elem.setAttribute( name, value );
  			return value;
  		}

  		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
  			return ret;
  		}

  		ret = elem.getAttribute( name );

  		// Non-existent attributes return null, we normalize to undefined
  		return ret == null ? undefined : ret;
  	},

  	attrHooks: {},

  	removeAttr: function( elem, value ) {
  		var name,
  			i = 0,

  			// Attribute names can contain non-HTML whitespace characters
  			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
  			attrNames = value && value.match( rnothtmlwhite );

  		if ( attrNames && elem.nodeType === 1 ) {
  			while ( ( name = attrNames[ i++ ] ) ) {
  				elem.removeAttribute( name );
  			}
  		}
  	}
  } );

  // Support: IE <=11+
  // An input loses its value after becoming a radio
  if ( isIE ) {
  	jQuery.attrHooks.type = {
  		set: function( elem, value ) {
  			if ( value === "radio" && nodeName( elem, "input" ) ) {
  				var val = elem.value;
  				elem.setAttribute( "type", value );
  				if ( val ) {
  					elem.value = val;
  				}
  				return value;
  			}
  		}
  	};
  }

  // HTML boolean attributes have special behavior:
  // we consider the lowercase name to be the only valid value, so
  // getting (if the attribute is present) normalizes to that, as does
  // setting to any non-`false` value (and setting to `false` removes the attribute).
  // See https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
  jQuery.each( (
  	"checked selected async autofocus autoplay controls defer disabled " +
  	"hidden ismap loop multiple open readonly required scoped"
  ).split( " " ), function( _i, name ) {
  	jQuery.attrHooks[ name ] = {
  		get: function( elem ) {
  			var ret,
  				isXML = jQuery.isXMLDoc( elem ),
  				lowercaseName = name.toLowerCase();

  			if ( !isXML ) {
  				ret = elem.getAttribute( name ) != null ?
  					lowercaseName :
  					null;
  			}
  			return ret;
  		},

  		set: function( elem, value, name ) {
  			if ( value === false ) {

  				// Remove boolean attributes when set to false
  				jQuery.removeAttr( elem, name );
  			} else {
  				elem.setAttribute( name, name );
  			}
  			return name;
  		}
  	};
  } );

  // CSS string/identifier serialization
  // https://drafts.csswg.org/cssom/#common-serializing-idioms
  var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

  function fcssescape( ch, asCodePoint ) {
  	if ( asCodePoint ) {

  		// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
  		if ( ch === "\0" ) {
  			return "\uFFFD";
  		}

  		// Control characters and (dependent upon position) numbers get escaped as code points
  		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
  	}

  	// Other potentially-special ASCII characters get backslash-escaped
  	return "\\" + ch;
  }

  jQuery.escapeSelector = function( sel ) {
  	return ( sel + "" ).replace( rcssescape, fcssescape );
  };

  var sort = arr.sort;

  var splice = arr.splice;

  var hasDuplicate;

  // Document order sorting
  function sortOrder( a, b ) {

  	// Flag for duplicate removal
  	if ( a === b ) {
  		hasDuplicate = true;
  		return 0;
  	}

  	// Sort on method existence if only one input has compareDocumentPosition
  	var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
  	if ( compare ) {
  		return compare;
  	}

  	// Calculate position if both inputs belong to the same document
  	// Support: IE 11+
  	// IE sometimes throws a "Permission denied" error when strict-comparing
  	// two documents; shallow comparisons work.
  	// eslint-disable-next-line eqeqeq
  	compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
  		a.compareDocumentPosition( b ) :

  		// Otherwise we know they are disconnected
  		1;

  	// Disconnected nodes
  	if ( compare & 1 ) {

  		// Choose the first element that is related to the document
  		// Support: IE 11+
  		// IE sometimes throws a "Permission denied" error when strict-comparing
  		// two documents; shallow comparisons work.
  		// eslint-disable-next-line eqeqeq
  		if ( a == document || a.ownerDocument == document &&
  			jQuery.contains( document, a ) ) {
  			return -1;
  		}

  		// Support: IE 11+
  		// IE sometimes throws a "Permission denied" error when strict-comparing
  		// two documents; shallow comparisons work.
  		// eslint-disable-next-line eqeqeq
  		if ( b == document || b.ownerDocument == document &&
  			jQuery.contains( document, b ) ) {
  			return 1;
  		}

  		// Maintain original order
  		return 0;
  	}

  	return compare & 4 ? -1 : 1;
  }

  /**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
  jQuery.uniqueSort = function( results ) {
  	var elem,
  		duplicates = [],
  		j = 0,
  		i = 0;

  	hasDuplicate = false;

  	sort.call( results, sortOrder );

  	if ( hasDuplicate ) {
  		while ( ( elem = results[ i++ ] ) ) {
  			if ( elem === results[ i ] ) {
  				j = duplicates.push( i );
  			}
  		}
  		while ( j-- ) {
  			splice.call( results, duplicates[ j ], 1 );
  		}
  	}

  	return results;
  };

  jQuery.fn.uniqueSort = function() {
  	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
  };

  var i,
  	outermostContext,

  	// Local document vars
  	document$1,
  	documentElement$1,
  	documentIsHTML,

  	// Instance-specific data
  	dirruns = 0,
  	done = 0,
  	classCache = createCache(),
  	compilerCache = createCache(),
  	nonnativeSelectorCache = createCache(),

  	// Regular expressions

  	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  	rwhitespace = new RegExp( whitespace + "+", "g" ),

  	ridentifier = new RegExp( "^" + identifier + "$" ),

  	matchExpr = jQuery.extend( {

  		// For use in libraries implementing .is()
  		// We use this for POS matching in `select`
  		needsContext: new RegExp( "^" + whitespace +
  			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
  			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
  	}, filterMatchExpr ),

  	rinputs = /^(?:input|select|textarea|button)$/i,
  	rheader = /^h\d$/i,

  	// Easily-parseable/retrievable ID or TAG or CLASS selectors
  	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

  	// Used for iframes; see `setDocument`.
  	// Support: IE 9 - 11+
  	// Removing the function wrapper causes a "Permission Denied"
  	// error in IE.
  	unloadHandler = function() {
  		setDocument();
  	},

  	inDisabledFieldset = addCombinator(
  		function( elem ) {
  			return elem.disabled === true && nodeName( elem, "fieldset" );
  		},
  		{ dir: "parentNode", next: "legend" }
  	);

  function find( selector, context, results, seed ) {
  	var m, i, elem, nid, match, groups, newSelector,
  		newContext = context && context.ownerDocument,

  		// nodeType defaults to 9, since context defaults to document
  		nodeType = context ? context.nodeType : 9;

  	results = results || [];

  	// Return early from calls with invalid selector or context
  	if ( typeof selector !== "string" || !selector ||
  		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

  		return results;
  	}

  	// Try to shortcut find operations (as opposed to filters) in HTML documents
  	if ( !seed ) {
  		setDocument( context );
  		context = context || document$1;

  		if ( documentIsHTML ) {

  			// If the selector is sufficiently simple, try using a "get*By*" DOM method
  			// (excepting DocumentFragment context, where the methods don't exist)
  			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

  				// ID selector
  				if ( ( m = match[ 1 ] ) ) {

  					// Document context
  					if ( nodeType === 9 ) {
  						if ( ( elem = context.getElementById( m ) ) ) {
  							push.call( results, elem );
  						}
  						return results;

  					// Element context
  					} else {
  						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
  							jQuery.contains( context, elem ) ) {

  							push.call( results, elem );
  							return results;
  						}
  					}

  				// Type selector
  				} else if ( match[ 2 ] ) {
  					push.apply( results, context.getElementsByTagName( selector ) );
  					return results;

  				// Class selector
  				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
  					push.apply( results, context.getElementsByClassName( m ) );
  					return results;
  				}
  			}

  			// Take advantage of querySelectorAll
  			if ( !nonnativeSelectorCache[ selector + " " ] &&
  				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

  				newSelector = selector;
  				newContext = context;

  				// qSA considers elements outside a scoping root when evaluating child or
  				// descendant combinators, which is not what we want.
  				// In such cases, we work around the behavior by prefixing every selector in the
  				// list with an ID selector referencing the scope context.
  				// The technique has to be used as well when a leading combinator is used
  				// as such selectors are not recognized by querySelectorAll.
  				// Thanks to Andrew Dupont for this technique.
  				if ( nodeType === 1 &&
  					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

  					// Expand context for sibling selectors
  					newContext = rsibling.test( selector ) &&
  						testContext( context.parentNode ) ||
  						context;

  					// Outside of IE, if we're not changing the context we can
  					// use :scope instead of an ID.
  					// Support: IE 11+
  					// IE sometimes throws a "Permission denied" error when strict-comparing
  					// two documents; shallow comparisons work.
  					// eslint-disable-next-line eqeqeq
  					if ( newContext != context || isIE ) {

  						// Capture the context ID, setting it first if necessary
  						if ( ( nid = context.getAttribute( "id" ) ) ) {
  							nid = jQuery.escapeSelector( nid );
  						} else {
  							context.setAttribute( "id", ( nid = jQuery.expando ) );
  						}
  					}

  					// Prefix every selector in the list
  					groups = tokenize( selector );
  					i = groups.length;
  					while ( i-- ) {
  						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
  							toSelector( groups[ i ] );
  					}
  					newSelector = groups.join( "," );
  				}

  				try {
  					push.apply( results,
  						newContext.querySelectorAll( newSelector )
  					);
  					return results;
  				} catch ( qsaError ) {
  					nonnativeSelectorCache( selector, true );
  				} finally {
  					if ( nid === jQuery.expando ) {
  						context.removeAttribute( "id" );
  					}
  				}
  			}
  		}
  	}

  	// All others
  	return select( selector.replace( rtrimCSS, "$1" ), context, results, seed );
  }

  /**
   * Mark a function for special use by jQuery selector module
   * @param {Function} fn The function to mark
   */
  function markFunction( fn ) {
  	fn[ jQuery.expando ] = true;
  	return fn;
  }

  /**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
  function createInputPseudo( type ) {
  	return function( elem ) {
  		return nodeName( elem, "input" ) && elem.type === type;
  	};
  }

  /**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
  function createButtonPseudo( type ) {
  	return function( elem ) {
  		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
  			elem.type === type;
  	};
  }

  /**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
  function createDisabledPseudo( disabled ) {

  	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
  	return function( elem ) {

  		// Only certain elements can match :enabled or :disabled
  		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
  		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
  		if ( "form" in elem ) {

  			// Check for inherited disabledness on relevant non-disabled elements:
  			// * listed form-associated elements in a disabled fieldset
  			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
  			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
  			// * option elements in a disabled optgroup
  			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
  			// All such elements have a "form" property.
  			if ( elem.parentNode && elem.disabled === false ) {

  				// Option elements defer to a parent optgroup if present
  				if ( "label" in elem ) {
  					if ( "label" in elem.parentNode ) {
  						return elem.parentNode.disabled === disabled;
  					} else {
  						return elem.disabled === disabled;
  					}
  				}

  				// Support: IE 6 - 11+
  				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
  				return elem.isDisabled === disabled ||

  					// Where there is no isDisabled, check manually
  					elem.isDisabled !== !disabled &&
  						inDisabledFieldset( elem ) === disabled;
  			}

  			return elem.disabled === disabled;

  		// Try to winnow out elements that can't be disabled before trusting the disabled property.
  		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
  		// even exist on them, let alone have a boolean value.
  		} else if ( "label" in elem ) {
  			return elem.disabled === disabled;
  		}

  		// Remaining elements are neither :enabled nor :disabled
  		return false;
  	};
  }

  /**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
  function createPositionalPseudo( fn ) {
  	return markFunction( function( argument ) {
  		argument = +argument;
  		return markFunction( function( seed, matches ) {
  			var j,
  				matchIndexes = fn( [], seed.length, argument ),
  				i = matchIndexes.length;

  			// Match elements found at the specified indexes
  			while ( i-- ) {
  				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
  					seed[ j ] = !( matches[ j ] = seed[ j ] );
  				}
  			}
  		} );
  	} );
  }

  /**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [node] An element or document object to use to set the document
   */
  function setDocument( node ) {
  	var subWindow,
  		doc = node ? node.ownerDocument || node : document;

  	// Return early if doc is invalid or already selected
  	// Support: IE 11+
  	// IE sometimes throws a "Permission denied" error when strict-comparing
  	// two documents; shallow comparisons work.
  	// eslint-disable-next-line eqeqeq
  	if ( doc == document$1 || doc.nodeType !== 9 ) {
  		return;
  	}

  	// Update global variables
  	document$1 = doc;
  	documentElement$1 = document$1.documentElement;
  	documentIsHTML = !jQuery.isXMLDoc( document$1 );

  	// Support: IE 9 - 11+
  	// Accessing iframe documents after unload throws "permission denied" errors (see trac-13936)
  	// Support: IE 11+
  	// IE sometimes throws a "Permission denied" error when strict-comparing
  	// two documents; shallow comparisons work.
  	// eslint-disable-next-line eqeqeq
  	if ( isIE && document != document$1 &&
  		( subWindow = document$1.defaultView ) && subWindow.top !== subWindow ) {
  		subWindow.addEventListener( "unload", unloadHandler );
  	}
  }

  find.matches = function( expr, elements ) {
  	return find( expr, null, null, elements );
  };

  find.matchesSelector = function( elem, expr ) {
  	setDocument( elem );

  	if ( documentIsHTML &&
  		!nonnativeSelectorCache[ expr + " " ] &&
  		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

  		try {
  			return matches.call( elem, expr );
  		} catch ( e ) {
  			nonnativeSelectorCache( expr, true );
  		}
  	}

  	return find( expr, document$1, null, [ elem ] ).length > 0;
  };

  jQuery.expr = {

  	// Can be adjusted by the user
  	cacheLength: 50,

  	createPseudo: markFunction,

  	match: matchExpr,

  	find: {
  		ID: function( id, context ) {
  			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
  				var elem = context.getElementById( id );
  				return elem ? [ elem ] : [];
  			}
  		},

  		TAG: function( tag, context ) {
  			if ( typeof context.getElementsByTagName !== "undefined" ) {
  				return context.getElementsByTagName( tag );

  				// DocumentFragment nodes don't have gEBTN
  			} else {
  				return context.querySelectorAll( tag );
  			}
  		},

  		CLASS: function( className, context ) {
  			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
  				return context.getElementsByClassName( className );
  			}
  		}
  	},

  	relative: {
  		">": { dir: "parentNode", first: true },
  		" ": { dir: "parentNode" },
  		"+": { dir: "previousSibling", first: true },
  		"~": { dir: "previousSibling" }
  	},

  	preFilter: preFilter,

  	filter: {
  		ID: function( id ) {
  			var attrId = unescapeSelector( id );
  			return function( elem ) {
  				return elem.getAttribute( "id" ) === attrId;
  			};
  		},

  		TAG: function( nodeNameSelector ) {
  			var expectedNodeName = unescapeSelector( nodeNameSelector ).toLowerCase();
  			return nodeNameSelector === "*" ?

  				function() {
  					return true;
  				} :

  				function( elem ) {
  					return nodeName( elem, expectedNodeName );
  				};
  		},

  		CLASS: function( className ) {
  			var pattern = classCache[ className + " " ];

  			return pattern ||
  				( pattern = new RegExp( "(^|" + whitespace + ")" + className +
  					"(" + whitespace + "|$)" ) ) &&
  				classCache( className, function( elem ) {
  					return pattern.test(
  						typeof elem.className === "string" && elem.className ||
  							typeof elem.getAttribute !== "undefined" &&
  								elem.getAttribute( "class" ) ||
  							""
  					);
  				} );
  		},

  		ATTR: function( name, operator, check ) {
  			return function( elem ) {
  				var result = jQuery.attr( elem, name );

  				if ( result == null ) {
  					return operator === "!=";
  				}
  				if ( !operator ) {
  					return true;
  				}

  				result += "";

  				if ( operator === "=" ) {
  					return result === check;
  				}
  				if ( operator === "!=" ) {
  					return result !== check;
  				}
  				if ( operator === "^=" ) {
  					return check && result.indexOf( check ) === 0;
  				}
  				if ( operator === "*=" ) {
  					return check && result.indexOf( check ) > -1;
  				}
  				if ( operator === "$=" ) {
  					return check && result.slice( -check.length ) === check;
  				}
  				if ( operator === "~=" ) {
  					return ( " " + result.replace( rwhitespace, " " ) + " " )
  						.indexOf( check ) > -1;
  				}
  				if ( operator === "|=" ) {
  					return result === check || result.slice( 0, check.length + 1 ) === check + "-";
  				}

  				return false;
  			};
  		},

  		CHILD: function( type, what, _argument, first, last ) {
  			var simple = type.slice( 0, 3 ) !== "nth",
  				forward = type.slice( -4 ) !== "last",
  				ofType = what === "of-type";

  			return first === 1 && last === 0 ?

  				// Shortcut for :nth-*(n)
  				function( elem ) {
  					return !!elem.parentNode;
  				} :

  				function( elem, _context, xml ) {
  					var cache, outerCache, node, nodeIndex, start,
  						dir = simple !== forward ? "nextSibling" : "previousSibling",
  						parent = elem.parentNode,
  						name = ofType && elem.nodeName.toLowerCase(),
  						useCache = !xml && !ofType,
  						diff = false;

  					if ( parent ) {

  						// :(first|last|only)-(child|of-type)
  						if ( simple ) {
  							while ( dir ) {
  								node = elem;
  								while ( ( node = node[ dir ] ) ) {
  									if ( ofType ?
  										nodeName( node, name ) :
  										node.nodeType === 1 ) {

  										return false;
  									}
  								}

  								// Reverse direction for :only-* (if we haven't yet done so)
  								start = dir = type === "only" && !start && "nextSibling";
  							}
  							return true;
  						}

  						start = [ forward ? parent.firstChild : parent.lastChild ];

  						// non-xml :nth-child(...) stores cache data on `parent`
  						if ( forward && useCache ) {

  							// Seek `elem` from a previously-cached index
  							outerCache = parent[ jQuery.expando ] ||
  								( parent[ jQuery.expando ] = {} );
  							cache = outerCache[ type ] || [];
  							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
  							diff = nodeIndex && cache[ 2 ];
  							node = nodeIndex && parent.childNodes[ nodeIndex ];

  							while ( ( node = ++nodeIndex && node && node[ dir ] ||

  								// Fallback to seeking `elem` from the start
  								( diff = nodeIndex = 0 ) || start.pop() ) ) {

  								// When found, cache indexes on `parent` and break
  								if ( node.nodeType === 1 && ++diff && node === elem ) {
  									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
  									break;
  								}
  							}

  						} else {

  							// Use previously-cached element index if available
  							if ( useCache ) {
  								outerCache = elem[ jQuery.expando ] ||
  									( elem[ jQuery.expando ] = {} );
  								cache = outerCache[ type ] || [];
  								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
  								diff = nodeIndex;
  							}

  							// xml :nth-child(...)
  							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
  							if ( diff === false ) {

  								// Use the same loop as above to seek `elem` from the start
  								while ( ( node = ++nodeIndex && node && node[ dir ] ||
  									( diff = nodeIndex = 0 ) || start.pop() ) ) {

  									if ( ( ofType ?
  										nodeName( node, name ) :
  										node.nodeType === 1 ) &&
  										++diff ) {

  										// Cache the index of each encountered element
  										if ( useCache ) {
  											outerCache = node[ jQuery.expando ] ||
  												( node[ jQuery.expando ] = {} );
  											outerCache[ type ] = [ dirruns, diff ];
  										}

  										if ( node === elem ) {
  											break;
  										}
  									}
  								}
  							}
  						}

  						// Incorporate the offset, then check against cycle size
  						diff -= last;
  						return diff === first || ( diff % first === 0 && diff / first >= 0 );
  					}
  				};
  		},

  		PSEUDO: function( pseudo, argument ) {

  			// pseudo-class names are case-insensitive
  			// https://www.w3.org/TR/selectors/#pseudo-classes
  			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
  			// Remember that setFilters inherits from pseudos
  			var fn = jQuery.expr.pseudos[ pseudo ] ||
  				jQuery.expr.setFilters[ pseudo.toLowerCase() ] ||
  				selectorError( "unsupported pseudo: " + pseudo );

  			// The user may use createPseudo to indicate that
  			// arguments are needed to create the filter function
  			// just as jQuery does
  			if ( fn[ jQuery.expando ] ) {
  				return fn( argument );
  			}

  			return fn;
  		}
  	},

  	pseudos: {

  		// Potentially complex pseudos
  		not: markFunction( function( selector ) {

  			// Trim the selector passed to compile
  			// to avoid treating leading and trailing
  			// spaces as combinators
  			var input = [],
  				results = [],
  				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

  			return matcher[ jQuery.expando ] ?
  				markFunction( function( seed, matches, _context, xml ) {
  					var elem,
  						unmatched = matcher( seed, null, xml, [] ),
  						i = seed.length;

  					// Match elements unmatched by `matcher`
  					while ( i-- ) {
  						if ( ( elem = unmatched[ i ] ) ) {
  							seed[ i ] = !( matches[ i ] = elem );
  						}
  					}
  				} ) :
  				function( elem, _context, xml ) {
  					input[ 0 ] = elem;
  					matcher( input, null, xml, results );

  					// Don't keep the element
  					// (see https://github.com/jquery/sizzle/issues/299)
  					input[ 0 ] = null;
  					return !results.pop();
  				};
  		} ),

  		has: markFunction( function( selector ) {
  			return function( elem ) {
  				return find( selector, elem ).length > 0;
  			};
  		} ),

  		contains: markFunction( function( text ) {
  			text = unescapeSelector( text );
  			return function( elem ) {
  				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
  			};
  		} ),

  		// "Whether an element is represented by a :lang() selector
  		// is based solely on the element's language value
  		// being equal to the identifier C,
  		// or beginning with the identifier C immediately followed by "-".
  		// The matching of C against the element's language value is performed case-insensitively.
  		// The identifier C does not have to be a valid language name."
  		// https://www.w3.org/TR/selectors/#lang-pseudo
  		lang: markFunction( function( lang ) {

  			// lang value must be a valid identifier
  			if ( !ridentifier.test( lang || "" ) ) {
  				selectorError( "unsupported lang: " + lang );
  			}
  			lang = unescapeSelector( lang ).toLowerCase();
  			return function( elem ) {
  				var elemLang;
  				do {
  					if ( ( elemLang = documentIsHTML ?
  						elem.lang :
  						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

  						elemLang = elemLang.toLowerCase();
  						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
  					}
  				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
  				return false;
  			};
  		} ),

  		// Miscellaneous
  		target: function( elem ) {
  			var hash = window.location && window.location.hash;
  			return hash && hash.slice( 1 ) === elem.id;
  		},

  		root: function( elem ) {
  			return elem === documentElement$1;
  		},

  		focus: function( elem ) {
  			return elem === document$1.activeElement &&
  				document$1.hasFocus() &&
  				!!( elem.type || elem.href || ~elem.tabIndex );
  		},

  		// Boolean properties
  		enabled: createDisabledPseudo( false ),
  		disabled: createDisabledPseudo( true ),

  		checked: function( elem ) {

  			// In CSS3, :checked should return both checked and selected elements
  			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
  			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
  				( nodeName( elem, "option" ) && !!elem.selected );
  		},

  		selected: function( elem ) {

  			// Support: IE <=11+
  			// Accessing the selectedIndex property
  			// forces the browser to treat the default option as
  			// selected when in an optgroup.
  			if ( isIE && elem.parentNode ) {
  				// eslint-disable-next-line no-unused-expressions
  				elem.parentNode.selectedIndex;
  			}

  			return elem.selected === true;
  		},

  		// Contents
  		empty: function( elem ) {

  			// https://www.w3.org/TR/selectors/#empty-pseudo
  			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
  			//   but not by others (comment: 8; processing instruction: 7; etc.)
  			// nodeType < 6 works because attributes (2) do not appear as children
  			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
  				if ( elem.nodeType < 6 ) {
  					return false;
  				}
  			}
  			return true;
  		},

  		parent: function( elem ) {
  			return !jQuery.expr.pseudos.empty( elem );
  		},

  		// Element/input types
  		header: function( elem ) {
  			return rheader.test( elem.nodeName );
  		},

  		input: function( elem ) {
  			return rinputs.test( elem.nodeName );
  		},

  		button: function( elem ) {
  			return nodeName( elem, "input" ) && elem.type === "button" ||
  				nodeName( elem, "button" );
  		},

  		text: function( elem ) {
  			return nodeName( elem, "input" ) && elem.type === "text";
  		},

  		// Position-in-collection
  		first: createPositionalPseudo( function() {
  			return [ 0 ];
  		} ),

  		last: createPositionalPseudo( function( _matchIndexes, length ) {
  			return [ length - 1 ];
  		} ),

  		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
  			return [ argument < 0 ? argument + length : argument ];
  		} ),

  		even: createPositionalPseudo( function( matchIndexes, length ) {
  			var i = 0;
  			for ( ; i < length; i += 2 ) {
  				matchIndexes.push( i );
  			}
  			return matchIndexes;
  		} ),

  		odd: createPositionalPseudo( function( matchIndexes, length ) {
  			var i = 1;
  			for ( ; i < length; i += 2 ) {
  				matchIndexes.push( i );
  			}
  			return matchIndexes;
  		} ),

  		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
  			var i;

  			if ( argument < 0 ) {
  				i = argument + length;
  			} else if ( argument > length ) {
  				i = length;
  			} else {
  				i = argument;
  			}

  			for ( ; --i >= 0; ) {
  				matchIndexes.push( i );
  			}
  			return matchIndexes;
  		} ),

  		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
  			var i = argument < 0 ? argument + length : argument;
  			for ( ; ++i < length; ) {
  				matchIndexes.push( i );
  			}
  			return matchIndexes;
  		} )
  	}
  };

  jQuery.expr.pseudos.nth = jQuery.expr.pseudos.eq;

  // Add button/input type pseudos
  for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
  	jQuery.expr.pseudos[ i ] = createInputPseudo( i );
  }
  for ( i in { submit: true, reset: true } ) {
  	jQuery.expr.pseudos[ i ] = createButtonPseudo( i );
  }

  // Easy API for creating new setFilters
  function setFilters() {}
  setFilters.prototype = jQuery.expr.filters = jQuery.expr.pseudos;
  jQuery.expr.setFilters = new setFilters();

  function addCombinator( matcher, combinator, base ) {
  	var dir = combinator.dir,
  		skip = combinator.next,
  		key = skip || dir,
  		checkNonElements = base && key === "parentNode",
  		doneName = done++;

  	return combinator.first ?

  		// Check against closest ancestor/preceding element
  		function( elem, context, xml ) {
  			while ( ( elem = elem[ dir ] ) ) {
  				if ( elem.nodeType === 1 || checkNonElements ) {
  					return matcher( elem, context, xml );
  				}
  			}
  			return false;
  		} :

  		// Check against all ancestor/preceding elements
  		function( elem, context, xml ) {
  			var oldCache, outerCache,
  				newCache = [ dirruns, doneName ];

  			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
  			if ( xml ) {
  				while ( ( elem = elem[ dir ] ) ) {
  					if ( elem.nodeType === 1 || checkNonElements ) {
  						if ( matcher( elem, context, xml ) ) {
  							return true;
  						}
  					}
  				}
  			} else {
  				while ( ( elem = elem[ dir ] ) ) {
  					if ( elem.nodeType === 1 || checkNonElements ) {
  						outerCache = elem[ jQuery.expando ] || ( elem[ jQuery.expando ] = {} );

  						if ( skip && nodeName( elem, skip ) ) {
  							elem = elem[ dir ] || elem;
  						} else if ( ( oldCache = outerCache[ key ] ) &&
  							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

  							// Assign to newCache so results back-propagate to previous elements
  							return ( newCache[ 2 ] = oldCache[ 2 ] );
  						} else {

  							// Reuse newcache so results back-propagate to previous elements
  							outerCache[ key ] = newCache;

  							// A match means we're done; a fail means we have to keep checking
  							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
  								return true;
  							}
  						}
  					}
  				}
  			}
  			return false;
  		};
  }

  function elementMatcher( matchers ) {
  	return matchers.length > 1 ?
  		function( elem, context, xml ) {
  			var i = matchers.length;
  			while ( i-- ) {
  				if ( !matchers[ i ]( elem, context, xml ) ) {
  					return false;
  				}
  			}
  			return true;
  		} :
  		matchers[ 0 ];
  }

  function multipleContexts( selector, contexts, results ) {
  	var i = 0,
  		len = contexts.length;
  	for ( ; i < len; i++ ) {
  		find( selector, contexts[ i ], results );
  	}
  	return results;
  }

  function condense( unmatched, map, filter, context, xml ) {
  	var elem,
  		newUnmatched = [],
  		i = 0,
  		len = unmatched.length,
  		mapped = map != null;

  	for ( ; i < len; i++ ) {
  		if ( ( elem = unmatched[ i ] ) ) {
  			if ( !filter || filter( elem, context, xml ) ) {
  				newUnmatched.push( elem );
  				if ( mapped ) {
  					map.push( i );
  				}
  			}
  		}
  	}

  	return newUnmatched;
  }

  function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
  	if ( postFilter && !postFilter[ jQuery.expando ] ) {
  		postFilter = setMatcher( postFilter );
  	}
  	if ( postFinder && !postFinder[ jQuery.expando ] ) {
  		postFinder = setMatcher( postFinder, postSelector );
  	}
  	return markFunction( function( seed, results, context, xml ) {
  		var temp, i, elem, matcherOut,
  			preMap = [],
  			postMap = [],
  			preexisting = results.length,

  			// Get initial elements from seed or context
  			elems = seed ||
  				multipleContexts( selector || "*",
  					context.nodeType ? [ context ] : context, [] ),

  			// Prefilter to get matcher input, preserving a map for seed-results synchronization
  			matcherIn = preFilter && ( seed || !selector ) ?
  				condense( elems, preMap, preFilter, context, xml ) :
  				elems;

  		if ( matcher ) {

  			// If we have a postFinder, or filtered seed, or non-seed postFilter
  			// or preexisting results,
  			matcherOut = postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

  				// ...intermediate processing is necessary
  				[] :

  				// ...otherwise use results directly
  				results;

  			// Find primary matches
  			matcher( matcherIn, matcherOut, context, xml );
  		} else {
  			matcherOut = matcherIn;
  		}

  		// Apply postFilter
  		if ( postFilter ) {
  			temp = condense( matcherOut, postMap );
  			postFilter( temp, [], context, xml );

  			// Un-match failing elements by moving them back to matcherIn
  			i = temp.length;
  			while ( i-- ) {
  				if ( ( elem = temp[ i ] ) ) {
  					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
  				}
  			}
  		}

  		if ( seed ) {
  			if ( postFinder || preFilter ) {
  				if ( postFinder ) {

  					// Get the final matcherOut by condensing this intermediate into postFinder contexts
  					temp = [];
  					i = matcherOut.length;
  					while ( i-- ) {
  						if ( ( elem = matcherOut[ i ] ) ) {

  							// Restore matcherIn since elem is not yet a final match
  							temp.push( ( matcherIn[ i ] = elem ) );
  						}
  					}
  					postFinder( null, ( matcherOut = [] ), temp, xml );
  				}

  				// Move matched elements from seed to results to keep them synchronized
  				i = matcherOut.length;
  				while ( i-- ) {
  					if ( ( elem = matcherOut[ i ] ) &&
  						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

  						seed[ temp ] = !( results[ temp ] = elem );
  					}
  				}
  			}

  		// Add elements to results, through postFinder if defined
  		} else {
  			matcherOut = condense(
  				matcherOut === results ?
  					matcherOut.splice( preexisting, matcherOut.length ) :
  					matcherOut
  			);
  			if ( postFinder ) {
  				postFinder( null, results, matcherOut, xml );
  			} else {
  				push.apply( results, matcherOut );
  			}
  		}
  	} );
  }

  function matcherFromTokens( tokens ) {
  	var checkContext, matcher, j,
  		len = tokens.length,
  		leadingRelative = jQuery.expr.relative[ tokens[ 0 ].type ],
  		implicitRelative = leadingRelative || jQuery.expr.relative[ " " ],
  		i = leadingRelative ? 1 : 0,

  		// The foundational matcher ensures that elements are reachable from top-level context(s)
  		matchContext = addCombinator( function( elem ) {
  			return elem === checkContext;
  		}, implicitRelative, true ),
  		matchAnyContext = addCombinator( function( elem ) {
  			return indexOf.call( checkContext, elem ) > -1;
  		}, implicitRelative, true ),
  		matchers = [ function( elem, context, xml ) {

  			// Support: IE 11+
  			// IE sometimes throws a "Permission denied" error when strict-comparing
  			// two documents; shallow comparisons work.
  			// eslint-disable-next-line eqeqeq
  			var ret = ( !leadingRelative && ( xml || context != outermostContext ) ) || (
  				( checkContext = context ).nodeType ?
  					matchContext( elem, context, xml ) :
  					matchAnyContext( elem, context, xml ) );

  			// Avoid hanging onto element
  			// (see https://github.com/jquery/sizzle/issues/299)
  			checkContext = null;
  			return ret;
  		} ];

  	for ( ; i < len; i++ ) {
  		if ( ( matcher = jQuery.expr.relative[ tokens[ i ].type ] ) ) {
  			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
  		} else {
  			matcher = jQuery.expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

  			// Return special upon seeing a positional matcher
  			if ( matcher[ jQuery.expando ] ) {

  				// Find the next relative operator (if any) for proper handling
  				j = ++i;
  				for ( ; j < len; j++ ) {
  					if ( jQuery.expr.relative[ tokens[ j ].type ] ) {
  						break;
  					}
  				}
  				return setMatcher(
  					i > 1 && elementMatcher( matchers ),
  					i > 1 && toSelector(

  						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
  						tokens.slice( 0, i - 1 )
  							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
  					).replace( rtrimCSS, "$1" ),
  					matcher,
  					i < j && matcherFromTokens( tokens.slice( i, j ) ),
  					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
  					j < len && toSelector( tokens )
  				);
  			}
  			matchers.push( matcher );
  		}
  	}

  	return elementMatcher( matchers );
  }

  function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
  	var bySet = setMatchers.length > 0,
  		byElement = elementMatchers.length > 0,
  		superMatcher = function( seed, context, xml, results, outermost ) {
  			var elem, j, matcher,
  				matchedCount = 0,
  				i = "0",
  				unmatched = seed && [],
  				setMatched = [],
  				contextBackup = outermostContext,

  				// We must always have either seed elements or outermost context
  				elems = seed || byElement && jQuery.expr.find.TAG( "*", outermost ),

  				// Use integer dirruns iff this is the outermost matcher
  				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 );

  			if ( outermost ) {

  				// Support: IE 11+
  				// IE sometimes throws a "Permission denied" error when strict-comparing
  				// two documents; shallow comparisons work.
  				// eslint-disable-next-line eqeqeq
  				outermostContext = context == document$1 || context || outermost;
  			}

  			// Add elements passing elementMatchers directly to results
  			for ( ; ( elem = elems[ i ] ) != null; i++ ) {
  				if ( byElement && elem ) {
  					j = 0;

  					// Support: IE 11+
  					// IE sometimes throws a "Permission denied" error when strict-comparing
  					// two documents; shallow comparisons work.
  					// eslint-disable-next-line eqeqeq
  					if ( !context && elem.ownerDocument != document$1 ) {
  						setDocument( elem );
  						xml = !documentIsHTML;
  					}
  					while ( ( matcher = elementMatchers[ j++ ] ) ) {
  						if ( matcher( elem, context || document$1, xml ) ) {
  							push.call( results, elem );
  							break;
  						}
  					}
  					if ( outermost ) {
  						dirruns = dirrunsUnique;
  					}
  				}

  				// Track unmatched elements for set filters
  				if ( bySet ) {

  					// They will have gone through all possible matchers
  					if ( ( elem = !matcher && elem ) ) {
  						matchedCount--;
  					}

  					// Lengthen the array for every element, matched or not
  					if ( seed ) {
  						unmatched.push( elem );
  					}
  				}
  			}

  			// `i` is now the count of elements visited above, and adding it to `matchedCount`
  			// makes the latter nonnegative.
  			matchedCount += i;

  			// Apply set filters to unmatched elements
  			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
  			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
  			// no element matchers and no seed.
  			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
  			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
  			// numerically zero.
  			if ( bySet && i !== matchedCount ) {
  				j = 0;
  				while ( ( matcher = setMatchers[ j++ ] ) ) {
  					matcher( unmatched, setMatched, context, xml );
  				}

  				if ( seed ) {

  					// Reintegrate element matches to eliminate the need for sorting
  					if ( matchedCount > 0 ) {
  						while ( i-- ) {
  							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
  								setMatched[ i ] = pop.call( results );
  							}
  						}
  					}

  					// Discard index placeholder values to get only actual matches
  					setMatched = condense( setMatched );
  				}

  				// Add matches to results
  				push.apply( results, setMatched );

  				// Seedless set matches succeeding multiple successful matchers stipulate sorting
  				if ( outermost && !seed && setMatched.length > 0 &&
  					( matchedCount + setMatchers.length ) > 1 ) {

  					jQuery.uniqueSort( results );
  				}
  			}

  			// Override manipulation of globals by nested matchers
  			if ( outermost ) {
  				dirruns = dirrunsUnique;
  				outermostContext = contextBackup;
  			}

  			return unmatched;
  		};

  	return bySet ?
  		markFunction( superMatcher ) :
  		superMatcher;
  }

  function compile( selector, match /* Internal Use Only */ ) {
  	var i,
  		setMatchers = [],
  		elementMatchers = [],
  		cached = compilerCache[ selector + " " ];

  	if ( !cached ) {

  		// Generate a function of recursive functions that can be used to check each element
  		if ( !match ) {
  			match = tokenize( selector );
  		}
  		i = match.length;
  		while ( i-- ) {
  			cached = matcherFromTokens( match[ i ] );
  			if ( cached[ jQuery.expando ] ) {
  				setMatchers.push( cached );
  			} else {
  				elementMatchers.push( cached );
  			}
  		}

  		// Cache the compiled function
  		cached = compilerCache( selector,
  			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

  		// Save selector and tokenization
  		cached.selector = selector;
  	}
  	return cached;
  }

  /**
   * A low-level selection function that works with jQuery's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with jQuery selector compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
  function select( selector, context, results, seed ) {
  	var i, tokens, token, type, find,
  		compiled = typeof selector === "function" && selector,
  		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

  	results = results || [];

  	// Try to minimize operations if there is only one selector in the list and no seed
  	// (the latter of which guarantees us context)
  	if ( match.length === 1 ) {

  		// Reduce context if the leading compound selector is an ID
  		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
  		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
  				context.nodeType === 9 && documentIsHTML &&
  				jQuery.expr.relative[ tokens[ 1 ].type ] ) {

  			context = ( jQuery.expr.find.ID(
  				unescapeSelector( token.matches[ 0 ] ),
  				context
  			) || [] )[ 0 ];
  			if ( !context ) {
  				return results;

  			// Precompiled matchers will still verify ancestry, so step up a level
  			} else if ( compiled ) {
  				context = context.parentNode;
  			}

  			selector = selector.slice( tokens.shift().value.length );
  		}

  		// Fetch a seed set for right-to-left matching
  		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
  		while ( i-- ) {
  			token = tokens[ i ];

  			// Abort if we hit a combinator
  			if ( jQuery.expr.relative[ ( type = token.type ) ] ) {
  				break;
  			}
  			if ( ( find = jQuery.expr.find[ type ] ) ) {

  				// Search, expanding context for leading sibling combinators
  				if ( ( seed = find(
  					unescapeSelector( token.matches[ 0 ] ),
  					rsibling.test( tokens[ 0 ].type ) &&
  						testContext( context.parentNode ) || context
  				) ) ) {

  					// If seed is empty or no tokens remain, we can return early
  					tokens.splice( i, 1 );
  					selector = seed.length && toSelector( tokens );
  					if ( !selector ) {
  						push.apply( results, seed );
  						return results;
  					}

  					break;
  				}
  			}
  		}
  	}

  	// Compile and execute a filtering function if one is not provided
  	// Provide `match` to avoid retokenization if we modified the selector above
  	( compiled || compile( selector, match ) )(
  		seed,
  		context,
  		!documentIsHTML,
  		results,
  		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
  	);
  	return results;
  }

  // Initialize against the default document
  setDocument();

  jQuery.find = find;

  // These have always been private, but they used to be documented as part of
  // Sizzle so let's maintain them for now for backwards compatibility purposes.
  find.compile = compile;
  find.select = select;
  find.setDocument = setDocument;
  find.tokenize = tokenize;

  var rneedsContext = jQuery.expr.match.needsContext;

  // Implement the identical functionality for filter and not
  function winnow( elements, qualifier, not ) {
  	if ( typeof qualifier === "function" ) {
  		return jQuery.grep( elements, function( elem, i ) {
  			return !!qualifier.call( elem, i, elem ) !== not;
  		} );
  	}

  	// Single element
  	if ( qualifier.nodeType ) {
  		return jQuery.grep( elements, function( elem ) {
  			return ( elem === qualifier ) !== not;
  		} );
  	}

  	// Arraylike of elements (jQuery, arguments, Array)
  	if ( typeof qualifier !== "string" ) {
  		return jQuery.grep( elements, function( elem ) {
  			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
  		} );
  	}

  	// Filtered directly for both simple and complex selectors
  	return jQuery.filter( qualifier, elements, not );
  }

  jQuery.filter = function( expr, elems, not ) {
  	var elem = elems[ 0 ];

  	if ( not ) {
  		expr = ":not(" + expr + ")";
  	}

  	if ( elems.length === 1 && elem.nodeType === 1 ) {
  		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
  	}

  	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
  		return elem.nodeType === 1;
  	} ) );
  };

  jQuery.fn.extend( {
  	find: function( selector ) {
  		var i, ret,
  			len = this.length,
  			self = this;

  		if ( typeof selector !== "string" ) {
  			return this.pushStack( jQuery( selector ).filter( function() {
  				for ( i = 0; i < len; i++ ) {
  					if ( jQuery.contains( self[ i ], this ) ) {
  						return true;
  					}
  				}
  			} ) );
  		}

  		ret = this.pushStack( [] );

  		for ( i = 0; i < len; i++ ) {
  			jQuery.find( selector, self[ i ], ret );
  		}

  		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
  	},
  	filter: function( selector ) {
  		return this.pushStack( winnow( this, selector || [], false ) );
  	},
  	not: function( selector ) {
  		return this.pushStack( winnow( this, selector || [], true ) );
  	},
  	is: function( selector ) {
  		return !!winnow(
  			this,

  			// If this is a positional/relative selector, check membership in the returned set
  			// so $("p:first").is("p:last") won't return true for a doc with two "p".
  			typeof selector === "string" && rneedsContext.test( selector ) ?
  				jQuery( selector ) :
  				selector || [],
  			false
  		).length;
  	}
  } );

  // Initialize a jQuery object

  // A central reference to the root jQuery(document)
  var rootjQuery,

  	// A simple way to check for HTML strings
  	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
  	// Strict HTML recognition (trac-11290: must start with <)
  	// Shortcut simple #id case for speed
  	rquickExpr$1 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

  	init = jQuery.fn.init = function( selector, context ) {
  		var match, elem;

  		// HANDLE: $(""), $(null), $(undefined), $(false)
  		if ( !selector ) {
  			return this;
  		}

  		// HANDLE: $(DOMElement)
  		if ( selector.nodeType ) {
  			this[ 0 ] = selector;
  			this.length = 1;
  			return this;

  		// HANDLE: $(function)
  		// Shortcut for document ready
  		} else if ( typeof selector === "function" ) {
  			return rootjQuery.ready !== undefined ?
  				rootjQuery.ready( selector ) :

  				// Execute immediately if ready is not present
  				selector( jQuery );

  		} else {

  			// Handle obvious HTML strings
  			match = selector + "";
  			if ( isObviousHtml( match ) ) {

  				// Assume that strings that start and end with <> are HTML and skip
  				// the regex check. This also handles browser-supported HTML wrappers
  				// like TrustedHTML.
  				match = [ null, selector, null ];

  			// Handle HTML strings or selectors
  			} else if ( typeof selector === "string" ) {
  				match = rquickExpr$1.exec( selector );
  			} else {
  				return jQuery.makeArray( selector, this );
  			}

  			// Match html or make sure no context is specified for #id
  			// Note: match[1] may be a string or a TrustedHTML wrapper
  			if ( match && ( match[ 1 ] || !context ) ) {

  				// HANDLE: $(html) -> $(array)
  				if ( match[ 1 ] ) {
  					context = context instanceof jQuery ? context[ 0 ] : context;

  					// Option to run scripts is true for back-compat
  					// Intentionally let the error be thrown if parseHTML is not present
  					jQuery.merge( this, jQuery.parseHTML(
  						match[ 1 ],
  						context && context.nodeType ? context.ownerDocument || context : document,
  						true
  					) );

  					// HANDLE: $(html, props)
  					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
  						for ( match in context ) {

  							// Properties of context are called as methods if possible
  							if ( typeof this[ match ] === "function" ) {
  								this[ match ]( context[ match ] );

  							// ...and otherwise set as attributes
  							} else {
  								this.attr( match, context[ match ] );
  							}
  						}
  					}

  					return this;

  				// HANDLE: $(#id)
  				} else {
  					elem = document.getElementById( match[ 2 ] );

  					if ( elem ) {

  						// Inject the element directly into the jQuery object
  						this[ 0 ] = elem;
  						this.length = 1;
  					}
  					return this;
  				}

  			// HANDLE: $(expr) & $(expr, $(...))
  			} else if ( !context || context.jquery ) {
  				return ( context || rootjQuery ).find( selector );

  			// HANDLE: $(expr, context)
  			// (which is just equivalent to: $(context).find(expr)
  			} else {
  				return this.constructor( context ).find( selector );
  			}
  		}

  	};

  // Give the init function the jQuery prototype for later instantiation
  init.prototype = jQuery.fn;

  // Initialize central reference
  rootjQuery = jQuery( document );

  var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
  	return true;
  }

  function returnFalse() {
  	return false;
  }

  function on( elem, types, selector, data, fn, one ) {
  	var origFn, type;

  	// Types can be a map of types/handlers
  	if ( typeof types === "object" ) {

  		// ( types-Object, selector, data )
  		if ( typeof selector !== "string" ) {

  			// ( types-Object, data )
  			data = data || selector;
  			selector = undefined;
  		}
  		for ( type in types ) {
  			on( elem, type, selector, data, types[ type ], one );
  		}
  		return elem;
  	}

  	if ( data == null && fn == null ) {

  		// ( types, fn )
  		fn = selector;
  		data = selector = undefined;
  	} else if ( fn == null ) {
  		if ( typeof selector === "string" ) {

  			// ( types, selector, fn )
  			fn = data;
  			data = undefined;
  		} else {

  			// ( types, data, fn )
  			fn = data;
  			data = selector;
  			selector = undefined;
  		}
  	}
  	if ( fn === false ) {
  		fn = returnFalse;
  	} else if ( !fn ) {
  		return elem;
  	}

  	if ( one === 1 ) {
  		origFn = fn;
  		fn = function( event ) {

  			// Can use an empty set, since event contains the info
  			jQuery().off( event );
  			return origFn.apply( this, arguments );
  		};

  		// Use same guid so caller can remove using origFn
  		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
  	}
  	return elem.each( function() {
  		jQuery.event.add( this, types, fn, data, selector );
  	} );
  }

  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */
  jQuery.event = {

  	add: function( elem, types, handler, data, selector ) {

  		var handleObjIn, eventHandle, tmp,
  			events, t, handleObj,
  			special, handlers, type, namespaces, origType,
  			elemData = dataPriv.get( elem );

  		// Only attach events to objects that accept data
  		if ( !acceptData( elem ) ) {
  			return;
  		}

  		// Caller can pass in an object of custom data in lieu of the handler
  		if ( handler.handler ) {
  			handleObjIn = handler;
  			handler = handleObjIn.handler;
  			selector = handleObjIn.selector;
  		}

  		// Ensure that invalid selectors throw exceptions at attach time
  		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
  		if ( selector ) {
  			jQuery.find.matchesSelector( documentElement, selector );
  		}

  		// Make sure that the handler has a unique ID, used to find/remove it later
  		if ( !handler.guid ) {
  			handler.guid = jQuery.guid++;
  		}

  		// Init the element's event structure and main handler, if this is the first
  		if ( !( events = elemData.events ) ) {
  			events = elemData.events = Object.create( null );
  		}
  		if ( !( eventHandle = elemData.handle ) ) {
  			eventHandle = elemData.handle = function( e ) {

  				// Discard the second event of a jQuery.event.trigger() and
  				// when an event is called after a page has unloaded
  				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
  					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
  			};
  		}

  		// Handle multiple events separated by a space
  		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
  		t = types.length;
  		while ( t-- ) {
  			tmp = rtypenamespace.exec( types[ t ] ) || [];
  			type = origType = tmp[ 1 ];
  			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

  			// There *must* be a type, no attaching namespace-only handlers
  			if ( !type ) {
  				continue;
  			}

  			// If event changes its type, use the special event handlers for the changed type
  			special = jQuery.event.special[ type ] || {};

  			// If selector defined, determine special event api type, otherwise given type
  			type = ( selector ? special.delegateType : special.bindType ) || type;

  			// Update special based on newly reset type
  			special = jQuery.event.special[ type ] || {};

  			// handleObj is passed to all event handlers
  			handleObj = jQuery.extend( {
  				type: type,
  				origType: origType,
  				data: data,
  				handler: handler,
  				guid: handler.guid,
  				selector: selector,
  				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
  				namespace: namespaces.join( "." )
  			}, handleObjIn );

  			// Init the event handler queue if we're the first
  			if ( !( handlers = events[ type ] ) ) {
  				handlers = events[ type ] = [];
  				handlers.delegateCount = 0;

  				// Only use addEventListener if the special events handler returns false
  				if ( !special.setup ||
  					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

  					if ( elem.addEventListener ) {
  						elem.addEventListener( type, eventHandle );
  					}
  				}
  			}

  			if ( special.add ) {
  				special.add.call( elem, handleObj );

  				if ( !handleObj.handler.guid ) {
  					handleObj.handler.guid = handler.guid;
  				}
  			}

  			// Add to the element's handler list, delegates in front
  			if ( selector ) {
  				handlers.splice( handlers.delegateCount++, 0, handleObj );
  			} else {
  				handlers.push( handleObj );
  			}
  		}

  	},

  	// Detach an event or set of events from an element
  	remove: function( elem, types, handler, selector, mappedTypes ) {

  		var j, origCount, tmp,
  			events, t, handleObj,
  			special, handlers, type, namespaces, origType,
  			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

  		if ( !elemData || !( events = elemData.events ) ) {
  			return;
  		}

  		// Once for each type.namespace in types; type may be omitted
  		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
  		t = types.length;
  		while ( t-- ) {
  			tmp = rtypenamespace.exec( types[ t ] ) || [];
  			type = origType = tmp[ 1 ];
  			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

  			// Unbind all events (on this namespace, if provided) for the element
  			if ( !type ) {
  				for ( type in events ) {
  					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
  				}
  				continue;
  			}

  			special = jQuery.event.special[ type ] || {};
  			type = ( selector ? special.delegateType : special.bindType ) || type;
  			handlers = events[ type ] || [];
  			tmp = tmp[ 2 ] &&
  				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

  			// Remove matching events
  			origCount = j = handlers.length;
  			while ( j-- ) {
  				handleObj = handlers[ j ];

  				if ( ( mappedTypes || origType === handleObj.origType ) &&
  					( !handler || handler.guid === handleObj.guid ) &&
  					( !tmp || tmp.test( handleObj.namespace ) ) &&
  					( !selector || selector === handleObj.selector ||
  						selector === "**" && handleObj.selector ) ) {
  					handlers.splice( j, 1 );

  					if ( handleObj.selector ) {
  						handlers.delegateCount--;
  					}
  					if ( special.remove ) {
  						special.remove.call( elem, handleObj );
  					}
  				}
  			}

  			// Remove generic event handler if we removed something and no more handlers exist
  			// (avoids potential for endless recursion during removal of special event handlers)
  			if ( origCount && !handlers.length ) {
  				if ( !special.teardown ||
  					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

  					jQuery.removeEvent( elem, type, elemData.handle );
  				}

  				delete events[ type ];
  			}
  		}

  		// Remove data and the expando if it's no longer used
  		if ( jQuery.isEmptyObject( events ) ) {
  			dataPriv.remove( elem, "handle events" );
  		}
  	},

  	dispatch: function( nativeEvent ) {

  		var i, j, ret, matched, handleObj, handlerQueue,
  			args = new Array( arguments.length ),

  			// Make a writable jQuery.Event from the native event object
  			event = jQuery.event.fix( nativeEvent ),

  			handlers = (
  				dataPriv.get( this, "events" ) || Object.create( null )
  			)[ event.type ] || [],
  			special = jQuery.event.special[ event.type ] || {};

  		// Use the fix-ed jQuery.Event rather than the (read-only) native event
  		args[ 0 ] = event;

  		for ( i = 1; i < arguments.length; i++ ) {
  			args[ i ] = arguments[ i ];
  		}

  		event.delegateTarget = this;

  		// Call the preDispatch hook for the mapped type, and let it bail if desired
  		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
  			return;
  		}

  		// Determine handlers
  		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

  		// Run delegates first; they may want to stop propagation beneath us
  		i = 0;
  		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
  			event.currentTarget = matched.elem;

  			j = 0;
  			while ( ( handleObj = matched.handlers[ j++ ] ) &&
  				!event.isImmediatePropagationStopped() ) {

  				// If the event is namespaced, then each handler is only invoked if it is
  				// specially universal or its namespaces are a superset of the event's.
  				if ( !event.rnamespace || handleObj.namespace === false ||
  					event.rnamespace.test( handleObj.namespace ) ) {

  					event.handleObj = handleObj;
  					event.data = handleObj.data;

  					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
  						handleObj.handler ).apply( matched.elem, args );

  					if ( ret !== undefined ) {
  						if ( ( event.result = ret ) === false ) {
  							event.preventDefault();
  							event.stopPropagation();
  						}
  					}
  				}
  			}
  		}

  		// Call the postDispatch hook for the mapped type
  		if ( special.postDispatch ) {
  			special.postDispatch.call( this, event );
  		}

  		return event.result;
  	},

  	handlers: function( event, handlers ) {
  		var i, handleObj, sel, matchedHandlers, matchedSelectors,
  			handlerQueue = [],
  			delegateCount = handlers.delegateCount,
  			cur = event.target;

  		// Find delegate handlers
  		if ( delegateCount &&

  			// Support: Firefox <=42 - 66+
  			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
  			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
  			// Support: IE 11+
  			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
  			!( event.type === "click" && event.button >= 1 ) ) {

  			for ( ; cur !== this; cur = cur.parentNode || this ) {

  				// Don't check non-elements (trac-13208)
  				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
  				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
  					matchedHandlers = [];
  					matchedSelectors = {};
  					for ( i = 0; i < delegateCount; i++ ) {
  						handleObj = handlers[ i ];

  						// Don't conflict with Object.prototype properties (trac-13203)
  						sel = handleObj.selector + " ";

  						if ( matchedSelectors[ sel ] === undefined ) {
  							matchedSelectors[ sel ] = handleObj.needsContext ?
  								jQuery( sel, this ).index( cur ) > -1 :
  								jQuery.find( sel, this, null, [ cur ] ).length;
  						}
  						if ( matchedSelectors[ sel ] ) {
  							matchedHandlers.push( handleObj );
  						}
  					}
  					if ( matchedHandlers.length ) {
  						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
  					}
  				}
  			}
  		}

  		// Add the remaining (directly-bound) handlers
  		cur = this;
  		if ( delegateCount < handlers.length ) {
  			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
  		}

  		return handlerQueue;
  	},

  	addProp: function( name, hook ) {
  		Object.defineProperty( jQuery.Event.prototype, name, {
  			enumerable: true,
  			configurable: true,

  			get: typeof hook === "function" ?
  				function() {
  					if ( this.originalEvent ) {
  						return hook( this.originalEvent );
  					}
  				} :
  				function() {
  					if ( this.originalEvent ) {
  						return this.originalEvent[ name ];
  					}
  				},

  			set: function( value ) {
  				Object.defineProperty( this, name, {
  					enumerable: true,
  					configurable: true,
  					writable: true,
  					value: value
  				} );
  			}
  		} );
  	},

  	fix: function( originalEvent ) {
  		return originalEvent[ jQuery.expando ] ?
  			originalEvent :
  			new jQuery.Event( originalEvent );
  	},

  	special: jQuery.extend( Object.create( null ), {
  		load: {

  			// Prevent triggered image.load events from bubbling to window.load
  			noBubble: true
  		},
  		click: {

  			// Utilize native event to ensure correct state for checkable inputs
  			setup: function( data ) {

  				// For mutual compressibility with _default, replace `this` access with a local var.
  				// `|| data` is dead code meant only to preserve the variable through minification.
  				var el = this || data;

  				// Claim the first handler
  				if ( rcheckableType.test( el.type ) &&
  					el.click && nodeName( el, "input" ) ) {

  					// dataPriv.set( el, "click", ... )
  					leverageNative( el, "click", true );
  				}

  				// Return false to allow normal processing in the caller
  				return false;
  			},
  			trigger: function( data ) {

  				// For mutual compressibility with _default, replace `this` access with a local var.
  				// `|| data` is dead code meant only to preserve the variable through minification.
  				var el = this || data;

  				// Force setup before triggering a click
  				if ( rcheckableType.test( el.type ) &&
  					el.click && nodeName( el, "input" ) ) {

  					leverageNative( el, "click" );
  				}

  				// Return non-false to allow normal event-path propagation
  				return true;
  			},

  			// For cross-browser consistency, suppress native .click() on links
  			// Also prevent it if we're currently inside a leveraged native-event stack
  			_default: function( event ) {
  				var target = event.target;
  				return rcheckableType.test( target.type ) &&
  					target.click && nodeName( target, "input" ) &&
  					dataPriv.get( target, "click" ) ||
  					nodeName( target, "a" );
  			}
  		},

  		beforeunload: {
  			postDispatch: function( event ) {

  				// Support: Chrome <=73+
  				// Chrome doesn't alert on `event.preventDefault()`
  				// as the standard mandates.
  				if ( event.result !== undefined && event.originalEvent ) {
  					event.originalEvent.returnValue = event.result;
  				}
  			}
  		}
  	} )
  };

  // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.
  function leverageNative( el, type, isSetup ) {

  	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
  	if ( !isSetup ) {
  		if ( dataPriv.get( el, type ) === undefined ) {
  			jQuery.event.add( el, type, returnTrue );
  		}
  		return;
  	}

  	// Register the controller as a special universal handler for all event namespaces
  	dataPriv.set( el, type, false );
  	jQuery.event.add( el, type, {
  		namespace: false,
  		handler: function( event ) {
  			var result,
  				saved = dataPriv.get( this, type );

  			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

  				// Interrupt processing of the outer synthetic .trigger()ed event
  				if ( !saved ) {

  					// Store arguments for use when handling the inner native event
  					// There will always be at least one argument (an event object), so this array
  					// will not be confused with a leftover capture object.
  					saved = slice.call( arguments );
  					dataPriv.set( this, type, saved );

  					// Trigger the native event and capture its result
  					this[ type ]();
  					result = dataPriv.get( this, type );
  					dataPriv.set( this, type, false );

  					if ( saved !== result ) {

  						// Cancel the outer synthetic event
  						event.stopImmediatePropagation();
  						event.preventDefault();

  						return result;
  					}

  				// If this is an inner synthetic event for an event with a bubbling surrogate
  				// (focus or blur), assume that the surrogate already propagated from triggering
  				// the native event and prevent that from happening again here.
  				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
  				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
  				// less bad than duplication.
  				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
  					event.stopPropagation();
  				}

  			// If this is a native event triggered above, everything is now in order
  			// Fire an inner synthetic event with the original arguments
  			} else if ( saved ) {

  				// ...and capture the result
  				dataPriv.set( this, type, jQuery.event.trigger(
  					saved[ 0 ],
  					saved.slice( 1 ),
  					this
  				) );

  				// Abort handling of the native event by all jQuery handlers while allowing
  				// native handlers on the same element to run. On target, this is achieved
  				// by stopping immediate propagation just on the jQuery event. However,
  				// the native event is re-wrapped by a jQuery one on each level of the
  				// propagation so the only way to stop it for jQuery is to stop it for
  				// everyone via native `stopPropagation()`. This is not a problem for
  				// focus/blur which don't bubble, but it does also stop click on checkboxes
  				// and radios. We accept this limitation.
  				event.stopPropagation();
  				event.isImmediatePropagationStopped = returnTrue;
  			}
  		}
  	} );
  }

  jQuery.removeEvent = function( elem, type, handle ) {

  	// This "if" is needed for plain objects
  	if ( elem.removeEventListener ) {
  		elem.removeEventListener( type, handle );
  	}
  };

  jQuery.Event = function( src, props ) {

  	// Allow instantiation without the 'new' keyword
  	if ( !( this instanceof jQuery.Event ) ) {
  		return new jQuery.Event( src, props );
  	}

  	// Event object
  	if ( src && src.type ) {
  		this.originalEvent = src;
  		this.type = src.type;

  		// Events bubbling up the document may have been marked as prevented
  		// by a handler lower down the tree; reflect the correct value.
  		this.isDefaultPrevented = src.defaultPrevented ?
  			returnTrue :
  			returnFalse;

  		// Create target properties
  		this.target = src.target;
  		this.currentTarget = src.currentTarget;
  		this.relatedTarget = src.relatedTarget;

  	// Event type
  	} else {
  		this.type = src;
  	}

  	// Put explicitly provided properties onto the event object
  	if ( props ) {
  		jQuery.extend( this, props );
  	}

  	// Create a timestamp if incoming event doesn't have one
  	this.timeStamp = src && src.timeStamp || Date.now();

  	// Mark it as fixed
  	this[ jQuery.expando ] = true;
  };

  // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
  jQuery.Event.prototype = {
  	constructor: jQuery.Event,
  	isDefaultPrevented: returnFalse,
  	isPropagationStopped: returnFalse,
  	isImmediatePropagationStopped: returnFalse,
  	isSimulated: false,

  	preventDefault: function() {
  		var e = this.originalEvent;

  		this.isDefaultPrevented = returnTrue;

  		if ( e && !this.isSimulated ) {
  			e.preventDefault();
  		}
  	},
  	stopPropagation: function() {
  		var e = this.originalEvent;

  		this.isPropagationStopped = returnTrue;

  		if ( e && !this.isSimulated ) {
  			e.stopPropagation();
  		}
  	},
  	stopImmediatePropagation: function() {
  		var e = this.originalEvent;

  		this.isImmediatePropagationStopped = returnTrue;

  		if ( e && !this.isSimulated ) {
  			e.stopImmediatePropagation();
  		}

  		this.stopPropagation();
  	}
  };

  // Includes all common event props including KeyEvent and MouseEvent specific props
  jQuery.each( {
  	altKey: true,
  	bubbles: true,
  	cancelable: true,
  	changedTouches: true,
  	ctrlKey: true,
  	detail: true,
  	eventPhase: true,
  	metaKey: true,
  	pageX: true,
  	pageY: true,
  	shiftKey: true,
  	view: true,
  	"char": true,
  	code: true,
  	charCode: true,
  	key: true,
  	keyCode: true,
  	button: true,
  	buttons: true,
  	clientX: true,
  	clientY: true,
  	offsetX: true,
  	offsetY: true,
  	pointerId: true,
  	pointerType: true,
  	screenX: true,
  	screenY: true,
  	targetTouches: true,
  	toElement: true,
  	touches: true,
  	which: true
  }, jQuery.event.addProp );

  jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

  	// Support: IE 11+
  	// Attach a single focusin/focusout handler on the document while someone wants focus/blur.
  	// This is because the former are synchronous in IE while the latter are async. In other
  	// browsers, all those handlers are invoked synchronously.
  	function focusMappedHandler( nativeEvent ) {

  		// `eventHandle` would already wrap the event, but we need to change the `type` here.
  		var event = jQuery.event.fix( nativeEvent );
  		event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
  		event.isSimulated = true;

  		// focus/blur don't bubble while focusin/focusout do; simulate the former by only
  		// invoking the handler at the lower level.
  		if ( event.target === event.currentTarget ) {

  			// The setup part calls `leverageNative`, which, in turn, calls
  			// `jQuery.event.add`, so event handle will already have been set
  			// by this point.
  			dataPriv.get( this, "handle" )( event );
  		}
  	}

  	jQuery.event.special[ type ] = {

  		// Utilize native event if possible so blur/focus sequence is correct
  		setup: function() {

  			// Claim the first handler
  			// dataPriv.set( this, "focus", ... )
  			// dataPriv.set( this, "blur", ... )
  			leverageNative( this, type, true );

  			if ( isIE ) {
  				this.addEventListener( delegateType, focusMappedHandler );
  			} else {

  				// Return false to allow normal processing in the caller
  				return false;
  			}
  		},
  		trigger: function() {

  			// Force setup before trigger
  			leverageNative( this, type );

  			// Return non-false to allow normal event-path propagation
  			return true;
  		},

  		teardown: function() {
  			if ( isIE ) {
  				this.removeEventListener( delegateType, focusMappedHandler );
  			} else {

  				// Return false to indicate standard teardown should be applied
  				return false;
  			}
  		},

  		// Suppress native focus or blur if we're currently inside
  		// a leveraged native-event stack
  		_default: function( event ) {
  			return dataPriv.get( event.target, type );
  		},

  		delegateType: delegateType
  	};
  } );

  // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  jQuery.each( {
  	mouseenter: "mouseover",
  	mouseleave: "mouseout",
  	pointerenter: "pointerover",
  	pointerleave: "pointerout"
  }, function( orig, fix ) {
  	jQuery.event.special[ orig ] = {
  		delegateType: fix,
  		bindType: fix,

  		handle: function( event ) {
  			var ret,
  				target = this,
  				related = event.relatedTarget,
  				handleObj = event.handleObj;

  			// For mouseenter/leave call the handler if related is outside the target.
  			// NB: No relatedTarget if the mouse left/entered the browser window
  			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
  				event.type = handleObj.origType;
  				ret = handleObj.handler.apply( this, arguments );
  				event.type = fix;
  			}
  			return ret;
  		}
  	};
  } );

  jQuery.fn.extend( {

  	on: function( types, selector, data, fn ) {
  		return on( this, types, selector, data, fn );
  	},
  	one: function( types, selector, data, fn ) {
  		return on( this, types, selector, data, fn, 1 );
  	},
  	off: function( types, selector, fn ) {
  		var handleObj, type;
  		if ( types && types.preventDefault && types.handleObj ) {

  			// ( event )  dispatched jQuery.Event
  			handleObj = types.handleObj;
  			jQuery( types.delegateTarget ).off(
  				handleObj.namespace ?
  					handleObj.origType + "." + handleObj.namespace :
  					handleObj.origType,
  				handleObj.selector,
  				handleObj.handler
  			);
  			return this;
  		}
  		if ( typeof types === "object" ) {

  			// ( types-object [, selector] )
  			for ( type in types ) {
  				this.off( type, selector, types[ type ] );
  			}
  			return this;
  		}
  		if ( selector === false || typeof selector === "function" ) {

  			// ( types [, fn] )
  			fn = selector;
  			selector = undefined;
  		}
  		if ( fn === false ) {
  			fn = returnFalse;
  		}
  		return this.each( function() {
  			jQuery.event.remove( this, types, fn, selector );
  		} );
  	}
  } );

  return jQuery;

  }

  var jQuery = jQueryFactory( window);

  /**
   * Custom positioning reference element.
   * @see https://floating-ui.com/docs/virtual-elements
   */

  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = v => ({
    x: v,
    y: v
  });
  const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split('-')[0];
  }
  function getAlignment(placement) {
    return placement.split('-')[1];
  }
  function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }
  function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
  }
  function getSideAxis(placement) {
    return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ['left', 'right'];
    const rl = ['right', 'left'];
    const tb = ['top', 'bottom'];
    const bt = ['bottom', 'top'];
    switch (side) {
      case 'top':
      case 'bottom':
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case 'left':
      case 'right':
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
      list = list.map(side => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    return {
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    };
  }

  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case 'top':
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case 'bottom':
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case 'right':
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case 'left':
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case 'start':
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case 'end':
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a given reference element.
   *
   * This export does not have any `platform` interface logic. You will need to
   * write one for the platform you are using Floating UI with.
   */
  const computePosition$1 = async (reference, floating, config) => {
    const {
      placement = 'bottom',
      strategy = 'absolute',
      middleware = [],
      platform
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const {
        name,
        fn
      } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === 'object') {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
        continue;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };

  /**
   * Resolves with an object of overflow side offsets that determine how much the
   * element is overflowing a given clipping boundary on each side.
   * - positive = overflowing the boundary by that number of pixels
   * - negative = how many pixels left before it will overflow
   * - 0 = lies flush with the boundary
   * @see https://floating-ui.com/docs/detectOverflow
   */
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = 'clippingAncestors',
      rootBoundary = 'viewport',
      elementContext = 'floating',
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform.getClippingRect({
      element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === 'floating' ? {
      ...rects.floating,
      x,
      y
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  const flip$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'flip',
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = 'bestFit',
          fallbackAxisSideDirection = 'none',
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);

        // If a reset by the arrow was caused due to an alignment offset being
        // added, we should skip any logic now since `flip()` has already done its
        // work.
        // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides[0]], overflow[sides[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];

        // One or more sides is overflowing.
        if (!overflows.every(side => side <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }

          // First, find the candidates that fit on the mainAxis side of overflow,
          // then find the placement that fits the best on the main crossAxis side.
          let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

          // Otherwise fallback.
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case 'bestFit':
                {
                  var _overflowsData$map$so;
                  const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                  if (placement) {
                    resetPlacement = placement;
                  }
                  break;
                }
              case 'initialPlacement':
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };

  // For type backwards-compatibility, the `OffsetOptions` type was also
  // Derivable.

  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform,
      elements
    } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === 'y';
    const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);

    // eslint-disable-next-line prefer-const
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === 'number' ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...rawValue
    };
    if (alignment && typeof alignmentAxis === 'number') {
      crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }

  /**
   * Modifies the placement by translating the floating element along the
   * specified axes.
   * A number (shorthand for `mainAxis` or distance), or an axes configuration
   * object may be passed.
   * @see https://floating-ui.com/docs/offset
   */
  const offset = function (options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: 'offset',
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x,
          y,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);

        // If the placement is the same and the arrow caused an alignment offset
        // then we don't need to change the positioning coordinates.
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  const shift$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'shift',
      options,
      async fn(state) {
        const {
          x,
          y,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: _ref => {
              let {
                x,
                y
              } = _ref;
              return {
                x,
                y
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === 'y' ? 'top' : 'left';
          const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
          const min = mainAxisCoord + overflow[minSide];
          const max = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min, mainAxisCoord, max);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === 'y' ? 'top' : 'left';
          const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
          const min = crossAxisCoord + overflow[minSide];
          const max = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min, crossAxisCoord, max);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        };
      }
    };
  };

  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    // Browsers without `ShadowRoot` support.
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
  }
  function isTableElement(element) {
    return ['table', 'td', 'th'].includes(getNodeName(element));
  }
  function isContainingBlock(element) {
    const webkit = isWebKit();
    const css = getComputedStyle$1(element);

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else {
        currentNode = getParentNode(currentNode);
      }
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
  }
  function isLastTraversableNode(node) {
    return ['html', 'body', '#document'].includes(getNodeName(node));
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === 'html') {
      return node;
    }
    const result =
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot ||
    // DOM Element detected.
    node.parentNode ||
    // ShadowRoot detected.
    isShadowRoot(node) && node.host ||
    // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }

  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }

  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }

  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;

    // 0, NaN, or Infinity should always fallback to 1.

    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }

  const noOffsets = /*#__PURE__*/createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentIFrame = win.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== win) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle$1(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentIFrame = getWindow(currentIFrame).frameElement;
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }

  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    if (offsetParent === documentElement) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
  }

  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
  }

  // Gets the entire size of the scrollable document area, even extending outside
  // of the `<html>` and `<body>` rect bounds if horizontally scrollable.
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle$1(body).direction === 'rtl') {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  // Returns the inner client rect, subtracting scrollbars if present.
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x,
      y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        ...clippingAncestor,
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
  }

  // A "clipping ancestor" is an `overflow` element with the characteristic of
  // clipping (or hiding) child elements. This returns all clipping ancestors
  // of the given element up the tree.
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
    let currentNode = elementIsFixed ? getParentNode(element) : element;

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle$1(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        // Drop non-containing blocks.
        result = result.filter(ancestor => ancestor !== currentNode);
      } else {
        // Record last containing block for next iteration.
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }

  // Gets the maximum area that the element is visible in due to any number of
  // clipping ancestors.
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }

  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }

  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    return element.offsetParent;
  }

  // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.
  function getOffsetParent(element, polyfill) {
    const window = getWindow(element);
    if (!isHTMLElement(element)) {
      return window;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
      return window;
    }
    return offsetParent || getContainingBlock(element) || window;
  }

  const getElementRects = async function (_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...(await getDimensionsFn(floating))
      }
    };
  };

  function isRTL(element) {
    return getComputedStyle$1(element).direction === 'rtl';
  }

  const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };

  // https://samthor.au/2021/observing-dom/
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      clearTimeout(timeoutId);
      io && io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 100);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }

      // Older browsers don't support a `document` as the root and will throw an
      // error.
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }

  /**
   * Automatically updates the position of the floating element when necessary.
   * Should only be called when the floating element is mounted on the DOM or
   * visible on the screen.
   * @returns cleanup function that should be invoked when the floating element is
   * removed from the DOM or hidden from the screen.
   * @see https://floating-ui.com/docs/autoUpdate
   */
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === 'function',
      layoutShift = typeof IntersectionObserver === 'function',
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.addEventListener('scroll', update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver(_ref => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          // Prevent update loops when using the `size` middleware.
          // https://github.com/floating-ui/floating-ui/issues/1740
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            resizeObserver && resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      ancestors.forEach(ancestor => {
        ancestorScroll && ancestor.removeEventListener('scroll', update);
        ancestorResize && ancestor.removeEventListener('resize', update);
      });
      cleanupIo && cleanupIo();
      resizeObserver && resizeObserver.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  const shift = shift$1;

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  const flip = flip$1;

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a given reference element.
   */
  const computePosition = (reference, floating, options) => {
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition$1(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };

  var canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );

  var canUseDom = canUseDOM;

  var canUseDOM$1 = /*@__PURE__*/getDefaultExportFromCjs(canUseDom);

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var Symbol$1 = root.Symbol;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto$1.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag);
  }

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return root.Date.now();
  };

  /** Error message constants. */
  var FUNC_ERROR_TEXT$1 = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;

      return maxing
        ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
        : timeWaiting;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  /**
   * simplebar-core - v1.2.4
   * Scrollbars, simpler.
   * https://grsmto.github.io/simplebar/
   *
   * Made by Adrien Denat from a fork by Jonathan Nicol
   * Under MIT License
   */


  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  var cachedScrollbarWidth = null;
  var cachedDevicePixelRatio = null;
  if (canUseDOM$1) {
      window.addEventListener('resize', function () {
          if (cachedDevicePixelRatio !== window.devicePixelRatio) {
              cachedDevicePixelRatio = window.devicePixelRatio;
              cachedScrollbarWidth = null;
          }
      });
  }
  function scrollbarWidth() {
      if (cachedScrollbarWidth === null) {
          if (typeof document === 'undefined') {
              cachedScrollbarWidth = 0;
              return cachedScrollbarWidth;
          }
          var body = document.body;
          var box = document.createElement('div');
          box.classList.add('simplebar-hide-scrollbar');
          body.appendChild(box);
          var width = box.getBoundingClientRect().right;
          body.removeChild(box);
          cachedScrollbarWidth = width;
      }
      return cachedScrollbarWidth;
  }

  function getElementWindow$1(element) {
      if (!element ||
          !element.ownerDocument ||
          !element.ownerDocument.defaultView) {
          return window;
      }
      return element.ownerDocument.defaultView;
  }
  function getElementDocument$1(element) {
      if (!element || !element.ownerDocument) {
          return document;
      }
      return element.ownerDocument;
  }
  // Helper function to retrieve options from element attributes
  var getOptions$1 = function (obj) {
      var initialObj = {};
      var options = Array.prototype.reduce.call(obj, function (acc, attribute) {
          var option = attribute.name.match(/data-simplebar-(.+)/);
          if (option) {
              var key = option[1].replace(/\W+(.)/g, function (_, chr) { return chr.toUpperCase(); });
              switch (attribute.value) {
                  case 'true':
                      acc[key] = true;
                      break;
                  case 'false':
                      acc[key] = false;
                      break;
                  case undefined:
                      acc[key] = true;
                      break;
                  default:
                      acc[key] = attribute.value;
              }
          }
          return acc;
      }, initialObj);
      return options;
  };
  function addClasses$1(el, classes) {
      var _a;
      if (!el)
          return;
      (_a = el.classList).add.apply(_a, classes.split(' '));
  }
  function removeClasses$1(el, classes) {
      if (!el)
          return;
      classes.split(' ').forEach(function (className) {
          el.classList.remove(className);
      });
  }
  function classNamesToQuery$1(classNames) {
      return ".".concat(classNames.split(' ').join('.'));
  }

  var helpers = /*#__PURE__*/Object.freeze({
      __proto__: null,
      getElementWindow: getElementWindow$1,
      getElementDocument: getElementDocument$1,
      getOptions: getOptions$1,
      addClasses: addClasses$1,
      removeClasses: removeClasses$1,
      classNamesToQuery: classNamesToQuery$1
  });

  var getElementWindow = getElementWindow$1, getElementDocument = getElementDocument$1, getOptions$2 = getOptions$1, addClasses$2 = addClasses$1, removeClasses = removeClasses$1, classNamesToQuery = classNamesToQuery$1;
  var SimpleBarCore = /** @class */ (function () {
      function SimpleBarCore(element, options) {
          if (options === void 0) { options = {}; }
          var _this = this;
          this.removePreventClickId = null;
          this.minScrollbarWidth = 20;
          this.stopScrollDelay = 175;
          this.isScrolling = false;
          this.isMouseEntering = false;
          this.scrollXTicking = false;
          this.scrollYTicking = false;
          this.wrapperEl = null;
          this.contentWrapperEl = null;
          this.contentEl = null;
          this.offsetEl = null;
          this.maskEl = null;
          this.placeholderEl = null;
          this.heightAutoObserverWrapperEl = null;
          this.heightAutoObserverEl = null;
          this.rtlHelpers = null;
          this.scrollbarWidth = 0;
          this.resizeObserver = null;
          this.mutationObserver = null;
          this.elStyles = null;
          this.isRtl = null;
          this.mouseX = 0;
          this.mouseY = 0;
          this.onMouseMove = function () { };
          this.onWindowResize = function () { };
          this.onStopScrolling = function () { };
          this.onMouseEntered = function () { };
          /**
           * On scroll event handling
           */
          this.onScroll = function () {
              var elWindow = getElementWindow(_this.el);
              if (!_this.scrollXTicking) {
                  elWindow.requestAnimationFrame(_this.scrollX);
                  _this.scrollXTicking = true;
              }
              if (!_this.scrollYTicking) {
                  elWindow.requestAnimationFrame(_this.scrollY);
                  _this.scrollYTicking = true;
              }
              if (!_this.isScrolling) {
                  _this.isScrolling = true;
                  addClasses$2(_this.el, _this.classNames.scrolling);
              }
              _this.showScrollbar('x');
              _this.showScrollbar('y');
              _this.onStopScrolling();
          };
          this.scrollX = function () {
              if (_this.axis.x.isOverflowing) {
                  _this.positionScrollbar('x');
              }
              _this.scrollXTicking = false;
          };
          this.scrollY = function () {
              if (_this.axis.y.isOverflowing) {
                  _this.positionScrollbar('y');
              }
              _this.scrollYTicking = false;
          };
          this._onStopScrolling = function () {
              removeClasses(_this.el, _this.classNames.scrolling);
              if (_this.options.autoHide) {
                  _this.hideScrollbar('x');
                  _this.hideScrollbar('y');
              }
              _this.isScrolling = false;
          };
          this.onMouseEnter = function () {
              if (!_this.isMouseEntering) {
                  addClasses$2(_this.el, _this.classNames.mouseEntered);
                  _this.showScrollbar('x');
                  _this.showScrollbar('y');
                  _this.isMouseEntering = true;
              }
              _this.onMouseEntered();
          };
          this._onMouseEntered = function () {
              removeClasses(_this.el, _this.classNames.mouseEntered);
              if (_this.options.autoHide) {
                  _this.hideScrollbar('x');
                  _this.hideScrollbar('y');
              }
              _this.isMouseEntering = false;
          };
          this._onMouseMove = function (e) {
              _this.mouseX = e.clientX;
              _this.mouseY = e.clientY;
              if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
                  _this.onMouseMoveForAxis('x');
              }
              if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
                  _this.onMouseMoveForAxis('y');
              }
          };
          this.onMouseLeave = function () {
              _this.onMouseMove.cancel();
              if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
                  _this.onMouseLeaveForAxis('x');
              }
              if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
                  _this.onMouseLeaveForAxis('y');
              }
              _this.mouseX = -1;
              _this.mouseY = -1;
          };
          this._onWindowResize = function () {
              // Recalculate scrollbarWidth in case it's a zoom
              _this.scrollbarWidth = _this.getScrollbarWidth();
              _this.hideNativeScrollbar();
          };
          this.onPointerEvent = function (e) {
              if (!_this.axis.x.track.el ||
                  !_this.axis.y.track.el ||
                  !_this.axis.x.scrollbar.el ||
                  !_this.axis.y.scrollbar.el)
                  return;
              var isWithinTrackXBounds, isWithinTrackYBounds;
              _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
              _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
              if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
                  isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
              }
              if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
                  isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
              }
              // If any pointer event is called on the scrollbar
              if (isWithinTrackXBounds || isWithinTrackYBounds) {
                  // Prevent event leaking
                  e.stopPropagation();
                  if (e.type === 'pointerdown' && e.pointerType !== 'touch') {
                      if (isWithinTrackXBounds) {
                          _this.axis.x.scrollbar.rect =
                              _this.axis.x.scrollbar.el.getBoundingClientRect();
                          if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
                              _this.onDragStart(e, 'x');
                          }
                          else {
                              _this.onTrackClick(e, 'x');
                          }
                      }
                      if (isWithinTrackYBounds) {
                          _this.axis.y.scrollbar.rect =
                              _this.axis.y.scrollbar.el.getBoundingClientRect();
                          if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
                              _this.onDragStart(e, 'y');
                          }
                          else {
                              _this.onTrackClick(e, 'y');
                          }
                      }
                  }
              }
          };
          /**
           * Drag scrollbar handle
           */
          this.drag = function (e) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
              if (!_this.draggedAxis || !_this.contentWrapperEl)
                  return;
              var eventOffset;
              var track = _this.axis[_this.draggedAxis].track;
              var trackSize = (_b = (_a = track.rect) === null || _a === void 0 ? void 0 : _a[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _b !== void 0 ? _b : 0;
              var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
              var contentSize = (_d = (_c = _this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c[_this.axis[_this.draggedAxis].scrollSizeAttr]) !== null && _d !== void 0 ? _d : 0;
              var hostSize = parseInt((_f = (_e = _this.elStyles) === null || _e === void 0 ? void 0 : _e[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _f !== void 0 ? _f : '0px', 10);
              e.preventDefault();
              e.stopPropagation();
              if (_this.draggedAxis === 'y') {
                  eventOffset = e.pageY;
              }
              else {
                  eventOffset = e.pageX;
              }
              // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).
              var dragPos = eventOffset -
                  ((_h = (_g = track.rect) === null || _g === void 0 ? void 0 : _g[_this.axis[_this.draggedAxis].offsetAttr]) !== null && _h !== void 0 ? _h : 0) -
                  _this.axis[_this.draggedAxis].dragOffset;
              dragPos = _this.draggedAxis === 'x' && _this.isRtl
                  ? ((_k = (_j = track.rect) === null || _j === void 0 ? void 0 : _j[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _k !== void 0 ? _k : 0) -
                      scrollbar.size -
                      dragPos
                  : dragPos;
              // Convert the mouse position into a percentage of the scrollbar height/width.
              var dragPerc = dragPos / (trackSize - scrollbar.size);
              // Scroll the content by the same percentage.
              var scrollPos = dragPerc * (contentSize - hostSize);
              // Fix browsers inconsistency on RTL
              if (_this.draggedAxis === 'x' && _this.isRtl) {
                  scrollPos = ((_l = SimpleBarCore.getRtlHelpers()) === null || _l === void 0 ? void 0 : _l.isScrollingToNegative)
                      ? -scrollPos
                      : scrollPos;
              }
              _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] =
                  scrollPos;
          };
          /**
           * End scroll handle drag
           */
          this.onEndDrag = function (e) {
              var elDocument = getElementDocument(_this.el);
              var elWindow = getElementWindow(_this.el);
              e.preventDefault();
              e.stopPropagation();
              removeClasses(_this.el, _this.classNames.dragging);
              elDocument.removeEventListener('mousemove', _this.drag, true);
              elDocument.removeEventListener('mouseup', _this.onEndDrag, true);
              _this.removePreventClickId = elWindow.setTimeout(function () {
                  // Remove these asynchronously so we still suppress click events
                  // generated simultaneously with mouseup.
                  elDocument.removeEventListener('click', _this.preventClick, true);
                  elDocument.removeEventListener('dblclick', _this.preventClick, true);
                  _this.removePreventClickId = null;
              });
          };
          /**
           * Handler to ignore click events during drag
           */
          this.preventClick = function (e) {
              e.preventDefault();
              e.stopPropagation();
          };
          this.el = element;
          this.options = __assign(__assign({}, SimpleBarCore.defaultOptions), options);
          this.classNames = __assign(__assign({}, SimpleBarCore.defaultOptions.classNames), options.classNames);
          this.axis = {
              x: {
                  scrollOffsetAttr: 'scrollLeft',
                  sizeAttr: 'width',
                  scrollSizeAttr: 'scrollWidth',
                  offsetSizeAttr: 'offsetWidth',
                  offsetAttr: 'left',
                  overflowAttr: 'overflowX',
                  dragOffset: 0,
                  isOverflowing: true,
                  forceVisible: false,
                  track: { size: null, el: null, rect: null, isVisible: false },
                  scrollbar: { size: null, el: null, rect: null, isVisible: false }
              },
              y: {
                  scrollOffsetAttr: 'scrollTop',
                  sizeAttr: 'height',
                  scrollSizeAttr: 'scrollHeight',
                  offsetSizeAttr: 'offsetHeight',
                  offsetAttr: 'top',
                  overflowAttr: 'overflowY',
                  dragOffset: 0,
                  isOverflowing: true,
                  forceVisible: false,
                  track: { size: null, el: null, rect: null, isVisible: false },
                  scrollbar: { size: null, el: null, rect: null, isVisible: false }
              }
          };
          if (typeof this.el !== 'object' || !this.el.nodeName) {
              throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
          }
          this.onMouseMove = throttle(this._onMouseMove, 64);
          this.onWindowResize = debounce(this._onWindowResize, 64, { leading: true });
          this.onStopScrolling = debounce(this._onStopScrolling, this.stopScrollDelay);
          this.onMouseEntered = debounce(this._onMouseEntered, this.stopScrollDelay);
          this.init();
      }
      /**
       * Helper to fix browsers inconsistency on RTL:
       *  - Firefox inverts the scrollbar initial position
       *  - IE11 inverts both scrollbar position and scrolling offset
       * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
       */
      SimpleBarCore.getRtlHelpers = function () {
          if (SimpleBarCore.rtlHelpers) {
              return SimpleBarCore.rtlHelpers;
          }
          var dummyDiv = document.createElement('div');
          dummyDiv.innerHTML =
              '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
          var scrollbarDummyEl = dummyDiv.firstElementChild;
          var dummyChild = scrollbarDummyEl === null || scrollbarDummyEl === void 0 ? void 0 : scrollbarDummyEl.firstElementChild;
          if (!dummyChild)
              return null;
          document.body.appendChild(scrollbarDummyEl);
          scrollbarDummyEl.scrollLeft = 0;
          var dummyContainerOffset = SimpleBarCore.getOffset(scrollbarDummyEl);
          var dummyChildOffset = SimpleBarCore.getOffset(dummyChild);
          scrollbarDummyEl.scrollLeft = -999;
          var dummyChildOffsetAfterScroll = SimpleBarCore.getOffset(dummyChild);
          document.body.removeChild(scrollbarDummyEl);
          SimpleBarCore.rtlHelpers = {
              // determines if the scrolling is responding with negative values
              isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,
              // determines if the origin scrollbar position is inverted or not (positioned on left or right)
              isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left
          };
          return SimpleBarCore.rtlHelpers;
      };
      SimpleBarCore.prototype.getScrollbarWidth = function () {
          // Try/catch for FF 56 throwing on undefined computedStyles
          try {
              // Detect browsers supporting CSS scrollbar styling and do not calculate
              if ((this.contentWrapperEl &&
                  getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar')
                      .display === 'none') ||
                  'scrollbarWidth' in document.documentElement.style ||
                  '-ms-overflow-style' in document.documentElement.style) {
                  return 0;
              }
              else {
                  return scrollbarWidth();
              }
          }
          catch (e) {
              return scrollbarWidth();
          }
      };
      SimpleBarCore.getOffset = function (el) {
          var rect = el.getBoundingClientRect();
          var elDocument = getElementDocument(el);
          var elWindow = getElementWindow(el);
          return {
              top: rect.top +
                  (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
              left: rect.left +
                  (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
          };
      };
      SimpleBarCore.prototype.init = function () {
          // We stop here on server-side
          if (canUseDOM$1) {
              this.initDOM();
              this.rtlHelpers = SimpleBarCore.getRtlHelpers();
              this.scrollbarWidth = this.getScrollbarWidth();
              this.recalculate();
              this.initListeners();
          }
      };
      SimpleBarCore.prototype.initDOM = function () {
          var _a, _b;
          // assume that element has his DOM already initiated
          this.wrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.wrapper));
          this.contentWrapperEl =
              this.options.scrollableNode ||
                  this.el.querySelector(classNamesToQuery(this.classNames.contentWrapper));
          this.contentEl =
              this.options.contentNode ||
                  this.el.querySelector(classNamesToQuery(this.classNames.contentEl));
          this.offsetEl = this.el.querySelector(classNamesToQuery(this.classNames.offset));
          this.maskEl = this.el.querySelector(classNamesToQuery(this.classNames.mask));
          this.placeholderEl = this.findChild(this.wrapperEl, classNamesToQuery(this.classNames.placeholder));
          this.heightAutoObserverWrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverWrapperEl));
          this.heightAutoObserverEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverEl));
          this.axis.x.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.horizontal)));
          this.axis.y.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.vertical)));
          this.axis.x.scrollbar.el =
              ((_a = this.axis.x.track.el) === null || _a === void 0 ? void 0 : _a.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
          this.axis.y.scrollbar.el =
              ((_b = this.axis.y.track.el) === null || _b === void 0 ? void 0 : _b.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
          if (!this.options.autoHide) {
              addClasses$2(this.axis.x.scrollbar.el, this.classNames.visible);
              addClasses$2(this.axis.y.scrollbar.el, this.classNames.visible);
          }
      };
      SimpleBarCore.prototype.initListeners = function () {
          var _this = this;
          var _a;
          var elWindow = getElementWindow(this.el);
          // Event listeners
          this.el.addEventListener('mouseenter', this.onMouseEnter);
          this.el.addEventListener('pointerdown', this.onPointerEvent, true);
          this.el.addEventListener('mousemove', this.onMouseMove);
          this.el.addEventListener('mouseleave', this.onMouseLeave);
          (_a = this.contentWrapperEl) === null || _a === void 0 ? void 0 : _a.addEventListener('scroll', this.onScroll);
          // Browser zoom triggers a window resize
          elWindow.addEventListener('resize', this.onWindowResize);
          if (!this.contentEl)
              return;
          if (window.ResizeObserver) {
              // Hack for https://github.com/WICG/ResizeObserver/issues/38
              var resizeObserverStarted_1 = false;
              var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
              this.resizeObserver = new resizeObserver(function () {
                  if (!resizeObserverStarted_1)
                      return;
                  elWindow.requestAnimationFrame(function () {
                      _this.recalculate();
                  });
              });
              this.resizeObserver.observe(this.el);
              this.resizeObserver.observe(this.contentEl);
              elWindow.requestAnimationFrame(function () {
                  resizeObserverStarted_1 = true;
              });
          }
          // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.
          this.mutationObserver = new elWindow.MutationObserver(function () {
              elWindow.requestAnimationFrame(function () {
                  _this.recalculate();
              });
          });
          this.mutationObserver.observe(this.contentEl, {
              childList: true,
              subtree: true,
              characterData: true
          });
      };
      SimpleBarCore.prototype.recalculate = function () {
          if (!this.heightAutoObserverEl ||
              !this.contentEl ||
              !this.contentWrapperEl ||
              !this.wrapperEl ||
              !this.placeholderEl)
              return;
          var elWindow = getElementWindow(this.el);
          this.elStyles = elWindow.getComputedStyle(this.el);
          this.isRtl = this.elStyles.direction === 'rtl';
          var contentElOffsetWidth = this.contentEl.offsetWidth;
          var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
          var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;
          var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
          var elOverflowX = this.elStyles.overflowX;
          var elOverflowY = this.elStyles.overflowY;
          this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
          this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
          var contentElScrollHeight = this.contentEl.scrollHeight;
          var contentElScrollWidth = this.contentEl.scrollWidth;
          this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%';
          // Determine placeholder size
          this.placeholderEl.style.width = isWidthAuto
              ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px")
              : 'auto';
          this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");
          var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
          this.axis.x.isOverflowing =
              contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;
          this.axis.y.isOverflowing =
              contentElScrollHeight > contentWrapperElOffsetHeight;
          // Set isOverflowing to false if user explicitely set hidden overflow
          this.axis.x.isOverflowing =
              elOverflowX === 'hidden' ? false : this.axis.x.isOverflowing;
          this.axis.y.isOverflowing =
              elOverflowY === 'hidden' ? false : this.axis.y.isOverflowing;
          this.axis.x.forceVisible =
              this.options.forceVisible === 'x' || this.options.forceVisible === true;
          this.axis.y.forceVisible =
              this.options.forceVisible === 'y' || this.options.forceVisible === true;
          this.hideNativeScrollbar();
          // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)
          var offsetForXScrollbar = this.axis.x.isOverflowing
              ? this.scrollbarWidth
              : 0;
          var offsetForYScrollbar = this.axis.y.isOverflowing
              ? this.scrollbarWidth
              : 0;
          this.axis.x.isOverflowing =
              this.axis.x.isOverflowing &&
                  contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
          this.axis.y.isOverflowing =
              this.axis.y.isOverflowing &&
                  contentElScrollHeight >
                      contentWrapperElOffsetHeight - offsetForXScrollbar;
          this.axis.x.scrollbar.size = this.getScrollbarSize('x');
          this.axis.y.scrollbar.size = this.getScrollbarSize('y');
          if (this.axis.x.scrollbar.el)
              this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
          if (this.axis.y.scrollbar.el)
              this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
          this.positionScrollbar('x');
          this.positionScrollbar('y');
          this.toggleTrackVisibility('x');
          this.toggleTrackVisibility('y');
      };
      /**
       * Calculate scrollbar size
       */
      SimpleBarCore.prototype.getScrollbarSize = function (axis) {
          var _a, _b;
          if (axis === void 0) { axis = 'y'; }
          if (!this.axis[axis].isOverflowing || !this.contentEl) {
              return 0;
          }
          var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
          var trackSize = (_b = (_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) !== null && _b !== void 0 ? _b : 0;
          var scrollbarRatio = trackSize / contentSize;
          var scrollbarSize;
          // Calculate new height/position of drag handle.
          scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
          if (this.options.scrollbarMaxSize) {
              scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
          }
          return scrollbarSize;
      };
      SimpleBarCore.prototype.positionScrollbar = function (axis) {
          var _a, _b, _c;
          if (axis === void 0) { axis = 'y'; }
          var scrollbar = this.axis[axis].scrollbar;
          if (!this.axis[axis].isOverflowing ||
              !this.contentWrapperEl ||
              !scrollbar.el ||
              !this.elStyles) {
              return;
          }
          var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
          var trackSize = ((_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) || 0;
          var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
          var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
          scrollOffset =
              axis === 'x' &&
                  this.isRtl &&
                  ((_b = SimpleBarCore.getRtlHelpers()) === null || _b === void 0 ? void 0 : _b.isScrollOriginAtZero)
                  ? -scrollOffset
                  : scrollOffset;
          if (axis === 'x' && this.isRtl) {
              scrollOffset = ((_c = SimpleBarCore.getRtlHelpers()) === null || _c === void 0 ? void 0 : _c.isScrollingToNegative)
                  ? scrollOffset
                  : -scrollOffset;
          }
          var scrollPourcent = scrollOffset / (contentSize - hostSize);
          var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
          handleOffset =
              axis === 'x' && this.isRtl
                  ? -handleOffset + (trackSize - scrollbar.size)
                  : handleOffset;
          scrollbar.el.style.transform =
              axis === 'x'
                  ? "translate3d(".concat(handleOffset, "px, 0, 0)")
                  : "translate3d(0, ".concat(handleOffset, "px, 0)");
      };
      SimpleBarCore.prototype.toggleTrackVisibility = function (axis) {
          if (axis === void 0) { axis = 'y'; }
          var track = this.axis[axis].track.el;
          var scrollbar = this.axis[axis].scrollbar.el;
          if (!track || !scrollbar || !this.contentWrapperEl)
              return;
          if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
              track.style.visibility = 'visible';
              this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
              this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));
          }
          else {
              track.style.visibility = 'hidden';
              this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
              this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));
          }
          // Even if forceVisible is enabled, scrollbar itself should be hidden
          if (this.axis[axis].isOverflowing) {
              scrollbar.style.display = 'block';
          }
          else {
              scrollbar.style.display = 'none';
          }
      };
      SimpleBarCore.prototype.showScrollbar = function (axis) {
          if (axis === void 0) { axis = 'y'; }
          if (this.axis[axis].isOverflowing && !this.axis[axis].scrollbar.isVisible) {
              addClasses$2(this.axis[axis].scrollbar.el, this.classNames.visible);
              this.axis[axis].scrollbar.isVisible = true;
          }
      };
      SimpleBarCore.prototype.hideScrollbar = function (axis) {
          if (axis === void 0) { axis = 'y'; }
          if (this.axis[axis].isOverflowing && this.axis[axis].scrollbar.isVisible) {
              removeClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
              this.axis[axis].scrollbar.isVisible = false;
          }
      };
      SimpleBarCore.prototype.hideNativeScrollbar = function () {
          if (!this.offsetEl)
              return;
          this.offsetEl.style[this.isRtl ? 'left' : 'right'] =
              this.axis.y.isOverflowing || this.axis.y.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : '0px';
          this.offsetEl.style.bottom =
              this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : '0px';
      };
      SimpleBarCore.prototype.onMouseMoveForAxis = function (axis) {
          if (axis === void 0) { axis = 'y'; }
          var currentAxis = this.axis[axis];
          if (!currentAxis.track.el || !currentAxis.scrollbar.el)
              return;
          currentAxis.track.rect = currentAxis.track.el.getBoundingClientRect();
          currentAxis.scrollbar.rect =
              currentAxis.scrollbar.el.getBoundingClientRect();
          if (this.isWithinBounds(currentAxis.track.rect)) {
              this.showScrollbar(axis);
              addClasses$2(currentAxis.track.el, this.classNames.hover);
              if (this.isWithinBounds(currentAxis.scrollbar.rect)) {
                  addClasses$2(currentAxis.scrollbar.el, this.classNames.hover);
              }
              else {
                  removeClasses(currentAxis.scrollbar.el, this.classNames.hover);
              }
          }
          else {
              removeClasses(currentAxis.track.el, this.classNames.hover);
              if (this.options.autoHide) {
                  this.hideScrollbar(axis);
              }
          }
      };
      SimpleBarCore.prototype.onMouseLeaveForAxis = function (axis) {
          if (axis === void 0) { axis = 'y'; }
          removeClasses(this.axis[axis].track.el, this.classNames.hover);
          removeClasses(this.axis[axis].scrollbar.el, this.classNames.hover);
          if (this.options.autoHide) {
              this.hideScrollbar(axis);
          }
      };
      /**
       * on scrollbar handle drag movement starts
       */
      SimpleBarCore.prototype.onDragStart = function (e, axis) {
          var _a;
          if (axis === void 0) { axis = 'y'; }
          var elDocument = getElementDocument(this.el);
          var elWindow = getElementWindow(this.el);
          var scrollbar = this.axis[axis].scrollbar;
          // Measure how far the user's mouse is from the top of the scrollbar drag handle.
          var eventOffset = axis === 'y' ? e.pageY : e.pageX;
          this.axis[axis].dragOffset =
              eventOffset - (((_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) || 0);
          this.draggedAxis = axis;
          addClasses$2(this.el, this.classNames.dragging);
          elDocument.addEventListener('mousemove', this.drag, true);
          elDocument.addEventListener('mouseup', this.onEndDrag, true);
          if (this.removePreventClickId === null) {
              elDocument.addEventListener('click', this.preventClick, true);
              elDocument.addEventListener('dblclick', this.preventClick, true);
          }
          else {
              elWindow.clearTimeout(this.removePreventClickId);
              this.removePreventClickId = null;
          }
      };
      SimpleBarCore.prototype.onTrackClick = function (e, axis) {
          var _this = this;
          var _a, _b, _c, _d;
          if (axis === void 0) { axis = 'y'; }
          var currentAxis = this.axis[axis];
          if (!this.options.clickOnTrack ||
              !currentAxis.scrollbar.el ||
              !this.contentWrapperEl)
              return;
          // Preventing the event's default to trigger click underneath
          e.preventDefault();
          var elWindow = getElementWindow(this.el);
          this.axis[axis].scrollbar.rect =
              currentAxis.scrollbar.el.getBoundingClientRect();
          var scrollbar = this.axis[axis].scrollbar;
          var scrollbarOffset = (_b = (_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) !== null && _b !== void 0 ? _b : 0;
          var hostSize = parseInt((_d = (_c = this.elStyles) === null || _c === void 0 ? void 0 : _c[this.axis[axis].sizeAttr]) !== null && _d !== void 0 ? _d : '0px', 10);
          var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
          var t = axis === 'y'
              ? this.mouseY - scrollbarOffset
              : this.mouseX - scrollbarOffset;
          var dir = t < 0 ? -1 : 1;
          var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
          var speed = 40;
          var scrollTo = function () {
              if (!_this.contentWrapperEl)
                  return;
              if (dir === -1) {
                  if (scrolled > scrollSize) {
                      scrolled -= speed;
                      _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
                      elWindow.requestAnimationFrame(scrollTo);
                  }
              }
              else {
                  if (scrolled < scrollSize) {
                      scrolled += speed;
                      _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
                      elWindow.requestAnimationFrame(scrollTo);
                  }
              }
          };
          scrollTo();
      };
      /**
       * Getter for content element
       */
      SimpleBarCore.prototype.getContentElement = function () {
          return this.contentEl;
      };
      /**
       * Getter for original scrolling element
       */
      SimpleBarCore.prototype.getScrollElement = function () {
          return this.contentWrapperEl;
      };
      SimpleBarCore.prototype.removeListeners = function () {
          var elWindow = getElementWindow(this.el);
          // Event listeners
          this.el.removeEventListener('mouseenter', this.onMouseEnter);
          this.el.removeEventListener('pointerdown', this.onPointerEvent, true);
          this.el.removeEventListener('mousemove', this.onMouseMove);
          this.el.removeEventListener('mouseleave', this.onMouseLeave);
          if (this.contentWrapperEl) {
              this.contentWrapperEl.removeEventListener('scroll', this.onScroll);
          }
          elWindow.removeEventListener('resize', this.onWindowResize);
          if (this.mutationObserver) {
              this.mutationObserver.disconnect();
          }
          if (this.resizeObserver) {
              this.resizeObserver.disconnect();
          }
          // Cancel all debounced functions
          this.onMouseMove.cancel();
          this.onWindowResize.cancel();
          this.onStopScrolling.cancel();
          this.onMouseEntered.cancel();
      };
      /**
       * Remove all listeners from DOM nodes
       */
      SimpleBarCore.prototype.unMount = function () {
          this.removeListeners();
      };
      /**
       * Check if mouse is within bounds
       */
      SimpleBarCore.prototype.isWithinBounds = function (bbox) {
          return (this.mouseX >= bbox.left &&
              this.mouseX <= bbox.left + bbox.width &&
              this.mouseY >= bbox.top &&
              this.mouseY <= bbox.top + bbox.height);
      };
      /**
       * Find element children matches query
       */
      SimpleBarCore.prototype.findChild = function (el, query) {
          var matches = el.matches ||
              el.webkitMatchesSelector ||
              el.mozMatchesSelector ||
              el.msMatchesSelector;
          return Array.prototype.filter.call(el.children, function (child) {
              return matches.call(child, query);
          })[0];
      };
      SimpleBarCore.rtlHelpers = null;
      SimpleBarCore.defaultOptions = {
          forceVisible: false,
          clickOnTrack: true,
          scrollbarMinSize: 25,
          scrollbarMaxSize: 0,
          ariaLabel: 'scrollable content',
          classNames: {
              contentEl: 'simplebar-content',
              contentWrapper: 'simplebar-content-wrapper',
              offset: 'simplebar-offset',
              mask: 'simplebar-mask',
              wrapper: 'simplebar-wrapper',
              placeholder: 'simplebar-placeholder',
              scrollbar: 'simplebar-scrollbar',
              track: 'simplebar-track',
              heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
              heightAutoObserverEl: 'simplebar-height-auto-observer',
              visible: 'simplebar-visible',
              horizontal: 'simplebar-horizontal',
              vertical: 'simplebar-vertical',
              hover: 'simplebar-hover',
              dragging: 'simplebar-dragging',
              scrolling: 'simplebar-scrolling',
              scrollable: 'simplebar-scrollable',
              mouseEntered: 'simplebar-mouse-entered'
          },
          scrollableNode: null,
          contentNode: null,
          autoHide: true
      };
      /**
       * Static functions
       */
      SimpleBarCore.getOptions = getOptions$2;
      SimpleBarCore.helpers = helpers;
      return SimpleBarCore;
  }());

  /**
   * simplebar - v6.2.5
   * Scrollbars, simpler.
   * https://grsmto.github.io/simplebar/
   *
   * Made by Adrien Denat from a fork by Jonathan Nicol
   * Under MIT License
   */


  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var _a = SimpleBarCore.helpers, getOptions = _a.getOptions, addClasses = _a.addClasses;
  var SimpleBar = /** @class */ (function (_super) {
      __extends(SimpleBar, _super);
      function SimpleBar() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, args) || this;
          // // Save a reference to the instance, so we know this DOM node has already been instancied
          SimpleBar.instances.set(args[0], _this);
          return _this;
      }
      SimpleBar.initDOMLoadedElements = function () {
          document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements);
          window.removeEventListener('load', this.initDOMLoadedElements);
          Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (el) {
              if (el.getAttribute('data-simplebar') !== 'init' &&
                  !SimpleBar.instances.has(el))
                  new SimpleBar(el, getOptions(el.attributes));
          });
      };
      SimpleBar.removeObserver = function () {
          var _a;
          (_a = SimpleBar.globalObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      };
      SimpleBar.prototype.initDOM = function () {
          var _this = this;
          var _a, _b, _c;
          // make sure this element doesn't have the elements yet
          if (!Array.prototype.filter.call(this.el.children, function (child) {
              return child.classList.contains(_this.classNames.wrapper);
          }).length) {
              // Prepare DOM
              this.wrapperEl = document.createElement('div');
              this.contentWrapperEl = document.createElement('div');
              this.offsetEl = document.createElement('div');
              this.maskEl = document.createElement('div');
              this.contentEl = document.createElement('div');
              this.placeholderEl = document.createElement('div');
              this.heightAutoObserverWrapperEl = document.createElement('div');
              this.heightAutoObserverEl = document.createElement('div');
              addClasses(this.wrapperEl, this.classNames.wrapper);
              addClasses(this.contentWrapperEl, this.classNames.contentWrapper);
              addClasses(this.offsetEl, this.classNames.offset);
              addClasses(this.maskEl, this.classNames.mask);
              addClasses(this.contentEl, this.classNames.contentEl);
              addClasses(this.placeholderEl, this.classNames.placeholder);
              addClasses(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl);
              addClasses(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl);
              while (this.el.firstChild) {
                  this.contentEl.appendChild(this.el.firstChild);
              }
              this.contentWrapperEl.appendChild(this.contentEl);
              this.offsetEl.appendChild(this.contentWrapperEl);
              this.maskEl.appendChild(this.offsetEl);
              this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
              this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
              this.wrapperEl.appendChild(this.maskEl);
              this.wrapperEl.appendChild(this.placeholderEl);
              this.el.appendChild(this.wrapperEl);
              (_a = this.contentWrapperEl) === null || _a === void 0 ? void 0 : _a.setAttribute('tabindex', '0');
              (_b = this.contentWrapperEl) === null || _b === void 0 ? void 0 : _b.setAttribute('role', 'region');
              (_c = this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c.setAttribute('aria-label', this.options.ariaLabel);
          }
          if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var track = document.createElement('div');
              var scrollbar = document.createElement('div');
              addClasses(track, this.classNames.track);
              addClasses(scrollbar, this.classNames.scrollbar);
              track.appendChild(scrollbar);
              this.axis.x.track.el = track.cloneNode(true);
              addClasses(this.axis.x.track.el, this.classNames.horizontal);
              this.axis.y.track.el = track.cloneNode(true);
              addClasses(this.axis.y.track.el, this.classNames.vertical);
              this.el.appendChild(this.axis.x.track.el);
              this.el.appendChild(this.axis.y.track.el);
          }
          SimpleBarCore.prototype.initDOM.call(this);
          this.el.setAttribute('data-simplebar', 'init');
      };
      SimpleBar.prototype.unMount = function () {
          SimpleBarCore.prototype.unMount.call(this);
          SimpleBar.instances["delete"](this.el);
      };
      SimpleBar.initHtmlApi = function () {
          this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this);
          // MutationObserver is IE11+
          if (typeof MutationObserver !== 'undefined') {
              // Mutation observer to observe dynamically added elements
              this.globalObserver = new MutationObserver(SimpleBar.handleMutations);
              this.globalObserver.observe(document, { childList: true, subtree: true });
          }
          // Taken from jQuery `ready` function
          // Instantiate elements already present on the page
          if (document.readyState === 'complete' || // @ts-ignore: IE specific
              (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
              // Handle it asynchronously to allow scripts the opportunity to delay init
              window.setTimeout(this.initDOMLoadedElements);
          }
          else {
              document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements);
              window.addEventListener('load', this.initDOMLoadedElements);
          }
      };
      SimpleBar.handleMutations = function (mutations) {
          mutations.forEach(function (mutation) {
              mutation.addedNodes.forEach(function (addedNode) {
                  if (addedNode.nodeType === 1) {
                      if (addedNode.hasAttribute('data-simplebar')) {
                          !SimpleBar.instances.has(addedNode) &&
                              document.documentElement.contains(addedNode) &&
                              new SimpleBar(addedNode, getOptions(addedNode.attributes));
                      }
                      else {
                          addedNode
                              .querySelectorAll('[data-simplebar]')
                              .forEach(function (el) {
                              if (el.getAttribute('data-simplebar') !== 'init' &&
                                  !SimpleBar.instances.has(el) &&
                                  document.documentElement.contains(el))
                                  new SimpleBar(el, getOptions(el.attributes));
                          });
                      }
                  }
              });
              mutation.removedNodes.forEach(function (removedNode) {
                  if (removedNode.nodeType === 1) {
                      if (removedNode.getAttribute('data-simplebar') === 'init') {
                          SimpleBar.instances.has(removedNode) &&
                              !document.documentElement.contains(removedNode) &&
                              SimpleBar.instances.get(removedNode).unMount();
                      }
                      else {
                          Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), function (el) {
                              SimpleBar.instances.has(el) &&
                                  !document.documentElement.contains(el) &&
                                  SimpleBar.instances.get(el).unMount();
                          });
                      }
                  }
              });
          });
      };
      SimpleBar.instances = new WeakMap();
      return SimpleBar;
  }(SimpleBarCore));
  /**
   * HTML API
   * Called only in a browser env.
   */
  if (canUseDOM$1) {
      SimpleBar.initHtmlApi();
  }

  var _class;
  var _id = /*#__PURE__*/new WeakMap();
  var _options = /*#__PURE__*/new WeakMap();
  var _element = /*#__PURE__*/new WeakMap();
  var _containerEl = /*#__PURE__*/new WeakMap();
  var _toolbarEl = /*#__PURE__*/new WeakMap();
  var _toolbarItemTabWrapperEl = /*#__PURE__*/new WeakMap();
  var _toolbarItemDropdownEl = /*#__PURE__*/new WeakMap();
  var _tabBodyEl = /*#__PURE__*/new WeakMap();
  var _cacheHandle = /*#__PURE__*/new WeakMap();
  var _cacheKey = /*#__PURE__*/new WeakMap();
  var _cacheDefaultTabsKey = /*#__PURE__*/new WeakMap();
  var _contextmenuEl = /*#__PURE__*/new WeakMap();
  var _dropdownEl = /*#__PURE__*/new WeakMap();
  var _contextmenuCleanup = /*#__PURE__*/new WeakMap();
  var _dropdownCleanup = /*#__PURE__*/new WeakMap();
  var _hideItemSelector = /*#__PURE__*/new WeakMap();
  var _debounceCenterActive = /*#__PURE__*/new WeakMap();
  var _openTabsSubtitleEl = /*#__PURE__*/new WeakMap();
  var _openTabsOriginalListEl = /*#__PURE__*/new WeakMap();
  var _openTabsearchResultsEl = /*#__PURE__*/new WeakMap();
  var _recentlyClosedTabsSubtitleEl = /*#__PURE__*/new WeakMap();
  var _recentlyClosedTabsOriginalListEl = /*#__PURE__*/new WeakMap();
  var _recentlyClosedTabssearchResultsEl = /*#__PURE__*/new WeakMap();
  var _noResultsMessageEl = /*#__PURE__*/new WeakMap();
  var _cacheRecentlyClosedTabsKey = /*#__PURE__*/new WeakMap();
  var _canAccessIFrame = /*#__PURE__*/new WeakSet();
  var _closeTabsByElements = /*#__PURE__*/new WeakSet();
  var _getActiveTab = /*#__PURE__*/new WeakSet();
  var _getTabs = /*#__PURE__*/new WeakSet();
  var _isClosableTabByUrl = /*#__PURE__*/new WeakSet();
  var _getClosableTabs = /*#__PURE__*/new WeakSet();
  var _getTabByUrl = /*#__PURE__*/new WeakSet();
  var _getTabPaneByUrl = /*#__PURE__*/new WeakSet();
  var _getActiveTabPane = /*#__PURE__*/new WeakSet();
  var _isActiveTabByUrl = /*#__PURE__*/new WeakSet();
  var _clsoeLoadingByUrl = /*#__PURE__*/new WeakSet();
  var _init = /*#__PURE__*/new WeakSet();
  var _initDropdown = /*#__PURE__*/new WeakSet();
  var _initLocale = /*#__PURE__*/new WeakSet();
  var _tabOptionExtend = /*#__PURE__*/new WeakSet();
  var _initCache = /*#__PURE__*/new WeakSet();
  var _initEvent = /*#__PURE__*/new WeakSet();
  var _restoreBodyElement = /*#__PURE__*/new WeakSet();
  var _highlightKeyword = /*#__PURE__*/new WeakSet();
  var _matchKeyword = /*#__PURE__*/new WeakSet();
  var _search = /*#__PURE__*/new WeakSet();
  var _getTabUrl = /*#__PURE__*/new WeakSet();
  var _toggleDropdown = /*#__PURE__*/new WeakSet();
  var _prepareDropdownData = /*#__PURE__*/new WeakSet();
  var _showDropdown = /*#__PURE__*/new WeakSet();
  var _closeDropdown = /*#__PURE__*/new WeakSet();
  var _showContextmenuByUrl = /*#__PURE__*/new WeakSet();
  var _closeContextmenu = /*#__PURE__*/new WeakSet();
  var _updatePosition = /*#__PURE__*/new WeakSet();
  var _initContainer = /*#__PURE__*/new WeakSet();
  var _initContextmenu = /*#__PURE__*/new WeakSet();
  var _initTabs = /*#__PURE__*/new WeakSet();
  var _cacheTabsCheck = /*#__PURE__*/new WeakSet();
  var _restoreTabs = /*#__PURE__*/new WeakSet();
  var _dataAttrAddTabEventRegister = /*#__PURE__*/new WeakSet();
  var _removeTabByUrl = /*#__PURE__*/new WeakSet();
  var _cacheRecentlyClosedByUrl = /*#__PURE__*/new WeakSet();
  var _removeTabPaneByUrl = /*#__PURE__*/new WeakSet();
  var _removeCacheTabByUrl = /*#__PURE__*/new WeakSet();
  var _activeTabByUrl = /*#__PURE__*/new WeakSet();
  var _addTabPaneByUrl = /*#__PURE__*/new WeakSet();
  var _addIFrameByUrl = /*#__PURE__*/new WeakSet();
  var _iFrameTimeoutHandle = /*#__PURE__*/new WeakSet();
  var _refreshIFrameByUrl = /*#__PURE__*/new WeakSet();
  var _removeIFrameByUrl = /*#__PURE__*/new WeakSet();
  var _clearIFrameTimeout = /*#__PURE__*/new WeakSet();
  var _tabFinallyAndAll = /*#__PURE__*/new WeakSet();
  var _generateTabHtml = /*#__PURE__*/new WeakSet();
  var _addCacheTab = /*#__PURE__*/new WeakSet();
  var _activeCacheTabByUrl = /*#__PURE__*/new WeakSet();
  var _scrollToTabByUrl = /*#__PURE__*/new WeakSet();
  var _getCacheActiveTab = /*#__PURE__*/new WeakSet();
  var _updateCacheTabByUrl = /*#__PURE__*/new WeakSet();
  var _getTabLoadingByUrl = /*#__PURE__*/new WeakSet();
  var _addLoadingByUrl = /*#__PURE__*/new WeakSet();
  var _getIFrames = /*#__PURE__*/new WeakSet();
  var _getIFrameByUrl = /*#__PURE__*/new WeakSet();
  class Quicktab {
    constructor(id, _options2) {
      var _classPrivateFieldGet2;
      _classPrivateMethodInitSpec(this, _getIFrameByUrl);
      // 获取所有的iframe
      _classPrivateMethodInitSpec(this, _getIFrames);
      // 添加遮罩层
      _classPrivateMethodInitSpec(this, _addLoadingByUrl);
      _classPrivateMethodInitSpec(this, _getTabLoadingByUrl);
      //根据url来修改数据
      _classPrivateMethodInitSpec(this, _updateCacheTabByUrl);
      //获取缓存中激活的tab项
      _classPrivateMethodInitSpec(this, _getCacheActiveTab);
      _classPrivateMethodInitSpec(this, _scrollToTabByUrl);
      _classPrivateMethodInitSpec(this, _activeCacheTabByUrl);
      _classPrivateMethodInitSpec(this, _addCacheTab);
      // 生产tab的html字符串
      _classPrivateMethodInitSpec(this, _generateTabHtml);
      _classPrivateMethodInitSpec(this, _tabFinallyAndAll);
      _classPrivateMethodInitSpec(this, _clearIFrameTimeout);
      // 移除tab面板里面的iframe
      _classPrivateMethodInitSpec(this, _removeIFrameByUrl);
      //刷新iframe
      _classPrivateMethodInitSpec(this, _refreshIFrameByUrl);
      //iframe的超时处理逻辑
      _classPrivateMethodInitSpec(this, _iFrameTimeoutHandle);
      //往tab容器里插入iframe
      _classPrivateMethodInitSpec(this, _addIFrameByUrl);
      //根据url来添加面板
      _classPrivateMethodInitSpec(this, _addTabPaneByUrl);
      /**
       * 私有的激活tab的方法
       * @param {String} url
       * @param {Boolean} fromAddTabMethod 激活tab的方法方法是否来自addTab()
       * @param {Boolean} timestamp 是否需要更新自动时间戳
       * @returns
       */
      _classPrivateMethodInitSpec(this, _activeTabByUrl);
      //根据url删除缓存里的tab
      _classPrivateMethodInitSpec(this, _removeCacheTabByUrl);
      // 删除面板
      _classPrivateMethodInitSpec(this, _removeTabPaneByUrl);
      _classPrivateMethodInitSpec(this, _cacheRecentlyClosedByUrl);
      //单纯的只做删除的工作
      _classPrivateMethodInitSpec(this, _removeTabByUrl);
      //通过data属性快速添加tab事件注册
      _classPrivateMethodInitSpec(this, _dataAttrAddTabEventRegister);
      /**
       * 恢复tab
       * @param {Array} options tab选项数组
       * @param {String} url 将要激活tab的url,不传将设置options中的最后一项
       * @returns
       */
      _classPrivateMethodInitSpec(this, _restoreTabs);
      //检测缓存中的tab的合法性
      _classPrivateMethodInitSpec(this, _cacheTabsCheck);
      _classPrivateMethodInitSpec(this, _initTabs);
      _classPrivateMethodInitSpec(this, _initContextmenu);
      _classPrivateMethodInitSpec(this, _initContainer);
      _classPrivateMethodInitSpec(this, _updatePosition);
      //关闭右键菜单
      _classPrivateMethodInitSpec(this, _closeContextmenu);
      //显示右键菜单
      _classPrivateMethodInitSpec(this, _showContextmenuByUrl);
      //关闭右键菜单
      _classPrivateMethodInitSpec(this, _closeDropdown);
      //显示下拉菜单
      _classPrivateMethodInitSpec(this, _showDropdown);
      // 准备下拉菜单的数据
      _classPrivateMethodInitSpec(this, _prepareDropdownData);
      _classPrivateMethodInitSpec(this, _toggleDropdown);
      // 从元素的data属性上获取Url
      _classPrivateMethodInitSpec(this, _getTabUrl);
      _classPrivateMethodInitSpec(this, _search);
      // 匹配关键词高亮
      _classPrivateMethodInitSpec(this, _matchKeyword);
      _classPrivateMethodInitSpec(this, _highlightKeyword);
      _classPrivateMethodInitSpec(this, _restoreBodyElement);
      _classPrivateMethodInitSpec(this, _initEvent);
      _classPrivateMethodInitSpec(this, _initCache);
      //合并单个tab的选项
      _classPrivateMethodInitSpec(this, _tabOptionExtend);
      _classPrivateMethodInitSpec(this, _initLocale);
      _classPrivateMethodInitSpec(this, _initDropdown);
      _classPrivateMethodInitSpec(this, _init);
      // 关闭loading层
      _classPrivateMethodInitSpec(this, _clsoeLoadingByUrl);
      /**
       * 根据url来判断tab是否已经激活
       * @param {String} url
       * @returns
       */
      _classPrivateMethodInitSpec(this, _isActiveTabByUrl);
      _classPrivateMethodInitSpec(this, _getActiveTabPane);
      _classPrivateMethodInitSpec(this, _getTabPaneByUrl);
      _classPrivateMethodInitSpec(this, _getTabByUrl);
      // 获取所有可关闭的tab
      _classPrivateMethodInitSpec(this, _getClosableTabs);
      /**
       * 判断是否是可关闭的tab
       * @param {String} url
       * @returns
       */
      _classPrivateMethodInitSpec(this, _isClosableTabByUrl);
      _classPrivateMethodInitSpec(this, _getTabs);
      _classPrivateMethodInitSpec(this, _getActiveTab);
      /**
       * 根据 DOM 元素数组关闭选项卡
       * @param {Array} tabElements - 包含选项卡 DOM 元素的数组
       */
      _classPrivateMethodInitSpec(this, _closeTabsByElements);
      /**
       * private API
       * ====================================================
       */
      /**
       * 根据传入的iframe的dom判断是否可以访问
       * @param {Element|Document} iframeEl
       * @returns
       */
      _classPrivateMethodInitSpec(this, _canAccessIFrame);
      // 唯一的id
      _classPrivateFieldInitSpec(this, _id, {
        writable: true,
        value: void 0
      });
      // 选项
      _classPrivateFieldInitSpec(this, _options, {
        writable: true,
        value: void 0
      });
      // 传入的id查找对应的元素
      _classPrivateFieldInitSpec(this, _element, {
        writable: true,
        value: void 0
      });
      // quicktab的真实的容器元素
      _classPrivateFieldInitSpec(this, _containerEl, {
        writable: true,
        value: void 0
      });
      // 整个工具条
      _classPrivateFieldInitSpec(this, _toolbarEl, {
        writable: true,
        value: void 0
      });
      // tab滚动区域包裹层
      _classPrivateFieldInitSpec(this, _toolbarItemTabWrapperEl, {
        writable: true,
        value: void 0
      });
      // 工具栏-item-下拉菜单按钮
      _classPrivateFieldInitSpec(this, _toolbarItemDropdownEl, {
        writable: true,
        value: void 0
      });
      // tab的面板区域包裹层
      _classPrivateFieldInitSpec(this, _tabBodyEl, {
        writable: true,
        value: void 0
      });
      // 缓存句柄
      _classPrivateFieldInitSpec(this, _cacheHandle, {
        writable: true,
        value: void 0
      });
      // tab持久化的缓存key
      _classPrivateFieldInitSpec(this, _cacheKey, {
        writable: true,
        value: void 0
      });
      // 初始化缓存选项
      _classPrivateFieldInitSpec(this, _cacheDefaultTabsKey, {
        writable: true,
        value: void 0
      });
      // 右键菜单的列表组
      _classPrivateFieldInitSpec(this, _contextmenuEl, {
        writable: true,
        value: void 0
      });
      // 下拉菜单的元素
      _classPrivateFieldInitSpec(this, _dropdownEl, {
        writable: true,
        value: void 0
      });
      // tab右键菜单floatui自动更新的监听器
      _classPrivateFieldInitSpec(this, _contextmenuCleanup, {
        writable: true,
        value: void 0
      });
      //下拉菜单floatui自动更新的监听器
      _classPrivateFieldInitSpec(this, _dropdownCleanup, {
        writable: true,
        value: void 0
      });
      //工具栏需要隐藏的项目
      _classPrivateFieldInitSpec(this, _hideItemSelector, {
        writable: true,
        value: void 0
      });
      //激活tab居中防抖函数
      _classPrivateFieldInitSpec(this, _debounceCenterActive, {
        writable: true,
        value: void 0
      });
      // 下拉菜单的一些组成部分
      _classPrivateFieldInitSpec(this, _openTabsSubtitleEl, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _openTabsOriginalListEl, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _openTabsearchResultsEl, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _recentlyClosedTabsSubtitleEl, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _recentlyClosedTabsOriginalListEl, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _recentlyClosedTabssearchResultsEl, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldInitSpec(this, _noResultsMessageEl, {
        writable: true,
        value: void 0
      });
      // 用以存储最近关闭的缓存的key
      _classPrivateFieldInitSpec(this, _cacheRecentlyClosedTabsKey, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldSet(this, _element, document.getElementById(id));
      if (!_classPrivateFieldGet(this, _element)) {
        return Utils.notify("ID '".concat(id, "' is invalid"));
      }
      if (_classStaticPrivateFieldSpecGet(Quicktab, Quicktab, _instances).has(id)) {
        return Utils.notify("The ID ".concat(id, " has already been used"));
      }

      //立马隐藏挂载元素
      _classPrivateFieldGet(this, _element).style.setProperty('display', 'none');
      _classStaticPrivateFieldSpecGet(Quicktab, Quicktab, _instances).set(id, this);

      //接收用户参数
      const userOptions = Utils.extend(true, {}, Utils.parseDataOptions(_classPrivateFieldGet(this, _element), Constants.OPTIONS, 'data-qt-'), Utils.isObject(_options2) && _options2);

      // 处理hideItem参数
      const hideItemKey = 'responsive.hide';
      const hideItemVal = Utils.getObjDataByKey(userOptions, hideItemKey);
      if (hideItemVal !== undefined) {
        Utils.updateObjDataByKey(Constants.DEFAULTS, hideItemKey, hideItemVal);
      }

      //合并默认参数
      _classPrivateFieldSet(this, _options, Utils.extend(true, {}, Constants.DEFAULTS, userOptions));

      //验证参数
      const result = Struct.validateOptions(Constants.OPTIONSSTRUCT, _classPrivateFieldGet(this, _options));
      if (result !== true) {
        return Utils.notify(result);
      }

      //合并一下单个tab的选项
      _classPrivateFieldGet(this, _options).defaultTabs = _classPrivateFieldGet(this, _options).defaultTabs.map(option => _classPrivateMethodGet(this, _tabOptionExtend, _tabOptionExtend2).call(this, option));
      _classPrivateFieldSet(this, _id, id);
      _classPrivateFieldSet(this, _cacheKey, "".concat(Constants.NAMESPACE, "-").concat(_classPrivateFieldGet(this, _id)));
      _classPrivateFieldSet(this, _cacheDefaultTabsKey, "".concat(_classPrivateFieldGet(this, _cacheKey), "-defaultTabs"));
      _classPrivateFieldSet(this, _cacheRecentlyClosedTabsKey, "".concat(_classPrivateFieldGet(this, _cacheKey), "-recentlyClosed"));
      _classPrivateFieldSet(this, _hideItemSelector, (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _options).responsive.hide) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.map(item => {
        return ".".concat(Constants.CLASSES.toolbar, " li.").concat(item);
      }));
      //这里要注意：实例化多个实例的时候，页面大小可能会改变，会触发该防抖函数
      _classPrivateFieldSet(this, _debounceCenterActive, Utils.debounce(() => {
        this.scrollToTabByUrl(_classPrivateMethodGet(this, _getTabUrl, _getTabUrl2).call(this, _classPrivateMethodGet(this, _getActiveTab, _getActiveTab2).call(this)));
      }, 500));

      //初始化
      _classPrivateMethodGet(this, _init, _init2).call(this);

      //初始化完毕调用init
      _classPrivateFieldGet(this, _options).onInit.call(this);
    }

    /**
     * public API
     * ====================================================
     */

    // 直接通过id可以得到实例
    static get(id) {
      return _classStaticPrivateFieldSpecGet(Quicktab, Quicktab, _instances).get(id);
    }

    /**
     * 关闭所有的可关闭的tabs
     */
    closeAllTabs() {
      _classPrivateMethodGet(this, _closeTabsByElements, _closeTabsByElements2).call(this, _classPrivateMethodGet(this, _getTabs, _getTabs2).call(this));
    }

    /**
     * 添加tab
     * @param {Object} option
     * @returns
     */
    addTab(option) {
      if (!Utils.isObject(option)) return 'tab选项必须是对象';

      //参数合并
      option = _classPrivateMethodGet(this, _tabOptionExtend, _tabOptionExtend2).call(this, option);
      const result = Struct.validateOptions(Constants.TABOPTIONSTRUCT, option);
      if (result !== true) {
        return Utils.notify(result);
      }
      const url = option.url;
      if (!_classPrivateMethodGet(this, _getTabByUrl, _getTabByUrl2).call(this, url)) {
        //如果这个tab不存在

        let maxNum = _classPrivateFieldGet(this, _options).tab.maxNum;
        if (maxNum > 0) {
          let closableTabs = _classPrivateMethodGet(this, _getClosableTabs, _getClosableTabs2).call(this); //获取所有的可删除的tab

          if (maxNum === 1) {
            //如果只保留一个，那么就把所有的tab给删除掉,因为添加的当前tab将会作为最新的1个tab

            for (let tab of closableTabs) {
              _classPrivateMethodGet(this, _removeTabByUrl, _removeTabByUrl2).call(this, _classPrivateMethodGet(this, _getTabUrl, _getTabUrl2).call(this, tab));
            }
          } else {
            if (closableTabs.length >= maxNum) {
              //得到需要排除的tab
              closableTabs.slice(0, -(maxNum - 1)).forEach(tab => {
                _classPrivateMethodGet(this, _removeTabByUrl, _removeTabByUrl2).call(this, _classPrivateMethodGet(this, _getTabUrl, _getTabUrl2).call(this, tab));
              });
            }
          }
        }
        const tabEl = Utils.createNode(_classPrivateMethodGet(this, _generateTabHtml, _generateTabHtml2).call(this, option));
        option.timestamp = Date.now();
        tabEl[Constants.DATAKEYS.tabOptionDataKey] = option;
        _classPrivateFieldGet(this, _toolbarItemTabWrapperEl).appendChild(tabEl);

        //添加进缓存
        _classPrivateMethodGet(this, _addCacheTab, _addCacheTab2).call(this, option);
      }

      //激活这个被添加的tab
      _classPrivateMethodGet(this, _activeTabByUrl, _activeTabByUrl2).call(this, url, true);

      //滚动到tab所在位置
      this.scrollToTabByUrl(url);
    }

    /**
     * 根据url来关闭tab
     * @param {String} url
     */
    closeTabByUrl(url) {
      if (_classPrivateMethodGet(this, _isActiveTabByUrl, _isActiveTabByUrl2).call(this, url)) {
        //判断是否是激活的tab

        //下一个即将激活的tab
        let nextTab;
        let tab = _classPrivateMethodGet(this, _getTabByUrl, _getTabByUrl2).call(this, url);
        if (tab !== null && tab !== void 0 && tab.nextElementSibling) {
          //如果后面有就激活后面的
          nextTab = tab.nextElementSibling;
        } else if (tab !== null && tab !== void 0 && tab.previousElementSibling) {
          nextTab = tab.previousElementSibling;
        }

        //删除tab
        _classPrivateMethodGet(this, _removeTabByUrl, _removeTabByUrl2).call(this, url);

        //激活tab
        _classPrivateMethodGet(this, _activeTabByUrl, _activeTabByUrl2).call(this, _classPrivateMethodGet(this, _getTabUrl, _getTabUrl2).call(this, nextTab));
      } else {
        _classPrivateMethodGet(this, _removeTabByUrl, _removeTabByUrl2).call(this, url);
      }
    }

    /**
     * 根据url来激活tab
     * @param {String} url
     */
    activeTabByUrl(url) {
      _classPrivateMethodGet(this, _activeTabByUrl, _activeTabByUrl2).call(this, url);
    }

    /**
     * 滚动到指定url对应的tab的位置
     * @param {String} url
     */
    scrollToTabByUrl(url) {
      _classPrivateMethodGet(this, _scrollToTabByUrl, _scrollToTabByUrl2).call(this, url);
    }

    /**
     * 上滚动
     */
    prevScroll() {
      _classPrivateFieldGet(this, _toolbarItemTabWrapperEl).scrollTo({
        left: _classPrivateFieldGet(this, _toolbarItemTabWrapperEl).scrollLeft - _classPrivateFieldGet(this, _toolbarItemTabWrapperEl).offsetWidth,
        behavior: 'smooth'
      });
    }

    /**
     * 下滚动
     */
    nextScroll() {
      _classPrivateFieldGet(this, _toolbarItemTabWrapperEl).scrollTo({
        left: _classPrivateFieldGet(this, _toolbarItemTabWrapperEl).scrollLeft + _classPrivateFieldGet(this, _toolbarItemTabWrapperEl).offsetWidth,
        behavior: 'smooth'
      });
    }

    /**
     * 根据url来刷新tab
     * @param {String} url
     */
    refreshTabByUrl(url) {
      //判断tab是否存在，不存在则不执行

      if (!Utils.isDOMElement(_classPrivateMethodGet(this, _getTabByUrl, _getTabByUrl2).call(this, url))) {
        return;
      }
      if (!_classPrivateMethodGet(this, _getTabPaneByUrl, _getTabPaneByUrl2).call(this, url)) {
        _classPrivateMethodGet(this, _addTabPaneByUrl, _addTabPaneByUrl2).call(this, url);
      } else {
        //首先必须尝试添加loading层
        _classPrivateMethodGet(this, _addLoadingByUrl, _addLoadingByUrl2).call(this, url);

        // 刷新逻辑
        !_classPrivateMethodGet(this, _getIFrameByUrl, _getIFrameByUrl2).call(this, url) ? _classPrivateMethodGet(this, _addIFrameByUrl, _addIFrameByUrl2).call(this, url) : _classPrivateMethodGet(this, _refreshIFrameByUrl, _refreshIFrameByUrl2).call(this, url);
      }
    }

    /**
     * 根据url全屏显示tab
     * @param {String} url
     */
    fullscreenTabByUrl(url) {
      _classPrivateMethodGet(this, _activeTabByUrl, _activeTabByUrl2).call(this, url);
      _classPrivateMethodGet(this, _getTabPaneByUrl, _getTabPaneByUrl2).call(this, url).requestFullscreen();
    }

    /**
     * 刷新当前激活的tab
     */
    refreshActiveTab() {
      this.refreshTabByUrl(_classPrivateMethodGet(this, _getTabUrl, _getTabUrl2).call(this, _classPrivateMethodGet(this, _getActiveTab, _getActiveTab2).call(this)));
    }

    /**
     * 当前激活的tab全屏显示
     */
    fullscreenActiveTab() {
      this.fullscreenTabByUrl(_classPrivateMethodGet(this, _getTabUrl, _getTabUrl2).call(this, _classPrivateMethodGet(this, _getActiveTab, _getActiveTab2).call(this)));
    }

    /**
     * 滚动到当前激活的tab所在位置
     */
    scrollToActiveTab() {
      this.scrollToTabByUrl(_classPrivateMethodGet(this, _getTabUrl, _getTabUrl2).call(this, _classPrivateMethodGet(this, _getActiveTab, _getActiveTab2).call(this)));
    }

    /**
     * 在浏览器新选项卡打开指定url的tab
     * @param {String} url
     */
    openNewTabByUrl(url) {
      window.open(url, '_blank');
    }

    /**
     * 关闭所有的除了指定url的选项卡
     * @param {String} url
     */
    closeAllTabsExceptByUrl(url) {
      _classPrivateMethodGet(this, _closeTabsByElements, _closeTabsByElements2).call(this, _classPrivateMethodGet(this, _getTabs, _getTabs2).call(this).filter(tab => _classPrivateMethodGet(this, _getTabUrl, _getTabUrl2).call(this, tab) !== url));
    }

    /**
     * 关闭除了指定url的tab前面所有的选项卡
     * @param {String} url
     */
    closePrevAllTabsByUrl(url) {
      _classPrivateMethodGet(this, _closeTabsByElements, _closeTabsByElements2).call(this, Utils.prevAll(_classPrivateMethodGet(this, _getTabByUrl, _getTabByUrl2).call(this, url)));
    }

    /**
     * 关闭除了指定url的tab后面所有的选项卡
     * @param {String} url
     */
    closeNextAllTabsByUrl(url) {
      _classPrivateMethodGet(this, _closeTabsByElements, _closeTabsByElements2).call(this, Utils.nextAll(_classPrivateMethodGet(this, _getTabByUrl, _getTabByUrl2).call(this, url)));
    }

    /**
     * 获取指定url的tab的contentWindow对象
     * @param {String} url
     */
    getTabWindowByUrl(url) {
      const iframe = _classPrivateMethodGet(this, _getIFrameByUrl, _getIFrameByUrl2).call(this, url);
      if (_classPrivateMethodGet(this, _canAccessIFrame, _canAccessIFrame2).call(this, iframe)) {
        return iframe.contentWindow;
      }
      return undefined;
    }
  }
  _class = Quicktab;
  function _canAccessIFrame2(iframeEl) {
    return Utils.isDOMElement(iframeEl) && iframeEl[Constants.DATAKEYS.iframeLoaded] === true && Utils.isSameOriginIframe(iframeEl);
  }
  function _closeTabsByElements2(tabElements) {
    tabElements.forEach(tabEl => {
      const tabUrl = _classPrivateMethodGet(this, _getTabUrl, _getTabUrl2).call(this, tabEl);
      if (_classPrivateMethodGet(this, _isClosableTabByUrl, _isClosableTabByUrl2).call(this, tabUrl)) {
        this.closeTabByUrl(tabUrl);
      }
    });
  }
  function _getActiveTab2() {
    return _classPrivateMethodGet(this, _getTabs, _getTabs2).call(this).find(tabEl => tabEl.classList.contains(Constants.CLASSES.tabActive));
  }
  function _getTabs2() {
    return Array.from(_classPrivateFieldGet(this, _toolbarItemTabWrapperEl).querySelectorAll("button[".concat(Constants.DATAKEYS.tabUrl, "]")));
  }
  function _isClosableTabByUrl2(url) {
    var _classPrivateMethodGe;
    return (_classPrivateMethodGe = _classPrivateMethodGet(this, _getTabByUrl, _getTabByUrl2).call(this, url)) !== null && _classPrivateMethodGe !== void 0 && _classPrivateMethodGe.querySelector('svg') ? true : false;
  }
  function _getClosableTabs2() {
    return _classPrivateMethodGet(this, _getTabs, _getTabs2).call(this).filter(tabEl => _classPrivateMethodGet(this, _isClosableTabByUrl, _isClosableTabByUrl2).call(this, _classPrivateMethodGet(this, _getTabUrl, _getTabUrl2).call(this, tabEl)));
  }
  function _getTabByUrl2(url) {
    return _classPrivateFieldGet(this, _toolbarItemTabWrapperEl).querySelector("[".concat(Constants.DATAKEYS.tabUrl, "=\"").concat(url, "\"]"));
  }
  function _getTabPaneByUrl2(url) {
    return _classPrivateFieldGet(this, _tabBodyEl).querySelector("[".concat(Constants.DATAKEYS.tabUrl, "=\"").concat(url, "\"]"));
  }
  function _getActiveTabPane2() {
    return _classPrivateFieldGet(this, _tabBodyEl).querySelector("li.".concat(Constants.CLASSES.tabPaneActive));
  }
  function _isActiveTabByUrl2(url) {
    var _classPrivateMethodGe2;
    return (_classPrivateMethodGe2 = _classPrivateMethodGet(this, _getTabByUrl, _getTabByUrl2).call(this, url)) !== null && _classPrivateMethodGe2 !== void 0 && _classPrivateMethodGe2.classList.contains(Constants.CLASSES.tabActive) ? true : false;
  }
  function _clsoeLoadingByUrl2(url) {
    var _classPrivateMethodGe3;
    (_classPrivateMethodGe3 = _classPrivateMethodGet(this, _getTabPaneByUrl, _getTabPaneByUrl2).call(this, url)) === null || _classPrivateMethodGe3 === void 0 || (_classPrivateMethodGe3 = _classPrivateMethodGe3.querySelector(".".concat(Constants.CLASSES.overlays))) === null || _classPrivateMethodGe3 === void 0 || _classPrivateMethodGe3.remove();
  }
  function _init2() {
    _classPrivateMethodGet(this, _initLocale, _initLocale2).call(this);
    _classPrivateMethodGet(this, _initCache, _initCache2).call(this);
    _classPrivateMethodGet(this, _initContainer, _initContainer2).call(this);
    _classPrivateMethodGet(this, _initContextmenu, _initContextmenu2).call(this);
    _classPrivateMethodGet(this, _initDropdown, _initDropdown2).call(this);
    _classPrivateMethodGet(this, _initEvent, _initEvent2).call(this);
    _classPrivateMethodGet(this, _initTabs, _initTabs2).call(this);
  }
  function _initDropdown2() {
    if (_classPrivateFieldGet(this, _options).toolbar.dropdown.enable === false) return;
    const dropdownOptions = _classPrivateFieldGet(this, _options).toolbar.dropdown;

    //组织html
    const html = [Utils.sprintf(Constants.HTML.dropdown[0], _classPrivateFieldGet(this, _id))];
    const placeholderText = dropdownOptions.searchInput.placeholder.trim() !== '' ? dropdownOptions.searchInput.placeholder : _classPrivateFieldGet(this, _options).formatSearchInputPlaceholder();
    html.push(Utils.sprintf(Constants.HTML.dropdownHeader, dropdownOptions.searchInput.prefixIcon, placeholderText));

    // 加入body的开始标记
    html.push(Constants.HTML.dropdownBody[0]);

    //打开的标签的副标题
    const openedTabsText = dropdownOptions.openedTabs.text.trim() !== '' ? dropdownOptions.openedTabs.text : _classPrivateFieldGet(this, _options).formatOpenedTabs();
    html.push(Utils.sprintf(Constants.HTML.dropdownBodySticky, '', openedTabsText, ''));

    //插入两个section(一个存储原来的结果，一个是展示搜索结果，展示搜索结果的默认要隐藏)
    html.push(Constants.HTML.dropdownBodySection);
    html.push(Utils.setProperty(Constants.HTML.dropdownBodySection, ['.section'], 'display', 'none'));

    //插入第二个副标题
    const recentlyClosedTabsText = dropdownOptions.recentlyClosedTabs.text.trim() !== '' ? dropdownOptions.recentlyClosedTabs.text : _classPrivateFieldGet(this, _options).formatRecentlyClosedTabs();
    html.push(Utils.sprintf(Constants.HTML.dropdownBodySticky, Constants.CLASSES.dropdownBodyStickyHasIcon, recentlyClosedTabsText, Utils.sprintf(Constants.HTML.iconWrapper, 'tabindex="0"', dropdownOptions.recentlyClosedTabs.hideIcon)));

    //这两个section外面再套一个div
    html.push('<div>');
    //再插入两个section
    html.push(Constants.HTML.dropdownBodySection);
    html.push(Utils.setProperty(Constants.HTML.dropdownBodySection, ['.section'], 'display', 'none'));
    html.push('</div>');

    //再插入一个无数据时的dom
    const noResultsText = dropdownOptions.emptyText.trim() !== '' ? dropdownOptions.emptyText : _classPrivateFieldGet(this, _options).formatSearchNoResults();
    html.push(Utils.sprintf(Constants.HTML.dropdownEmpty, noResultsText));
    html.push(Constants.HTML.dropdownBody[1]);
    html.push(Constants.HTML.dropdown[1]);

    //插入到body中去
    document.body.insertAdjacentHTML('beforeEnd', html.join(''));

    //查找右键菜单
    _classPrivateFieldSet(this, _dropdownEl, document.querySelector("[".concat(Constants.DATAKEYS.dropdown, "=\"").concat(_classPrivateFieldGet(this, _id), "\"]")));

    //查找一些必须的元素

    const allSticky = _classPrivateFieldGet(this, _dropdownEl).querySelectorAll('.sticky');
    const allSection = _classPrivateFieldGet(this, _dropdownEl).querySelectorAll('ul.section');
    _classPrivateFieldSet(this, _openTabsSubtitleEl, allSticky[0]);
    _classPrivateFieldSet(this, _openTabsOriginalListEl, allSection[0]);
    _classPrivateFieldSet(this, _openTabsearchResultsEl, allSection[1]);
    _classPrivateFieldSet(this, _recentlyClosedTabsSubtitleEl, allSticky[1]);
    _classPrivateFieldSet(this, _recentlyClosedTabsOriginalListEl, allSection[2]);
    _classPrivateFieldSet(this, _recentlyClosedTabssearchResultsEl, allSection[3]);
    _classPrivateFieldSet(this, _noResultsMessageEl, _classPrivateFieldGet(this, _dropdownEl).querySelector('.empty'));

    //初始化滚动条插件
    new SimpleBar(_classPrivateFieldGet(this, _dropdownEl).querySelector('.body'), {
      autoHide: true
    });
  }
  function _initLocale2() {
    if (_classPrivateFieldGet(this, _options).lang) {
      const langs = _class.LANGS;
      const parts = _classPrivateFieldGet(this, _options).lang.split(/-|_/);
      parts[0] = parts[0].toLowerCase();
      if (parts[1]) {
        parts[1] = parts[1].toUpperCase();
      }
      let langsToExtend = {};
      if (langs[_classPrivateFieldGet(this, _options).lang]) {
        langsToExtend = langs[_classPrivateFieldGet(this, _options).lang];
      } else if (langs[parts.join('-')]) {
        langsToExtend = langs[parts.join('-')];
      } else if (langs[parts[0]]) {
        langsToExtend = langs[parts[0]];
      }
      for (const [formatName, func] of Object.entries(langsToExtend)) {
        if (_classPrivateFieldGet(this, _options)[formatName] !== _class.DEFAULTS[formatName]) {
          continue;
        }
        _classPrivateFieldGet(this, _options)[formatName] = func;
      }
    }
  }
  function _tabOptionExtend2(option) {
    return Utils.extend(true, {}, Constants.TABDEFAULTS, option, {
      [Constants.CLASSES.tabActive]: false
    });
  }
  function _initCache2() {
    _classPrivateFieldSet(this, _cacheHandle, new QuickCache({
      type: _classPrivateFieldGet(this, _options).cacheType
    }));
  }
  function _initEvent2() {
    let that = this;

    //用以处理tab右键菜单和下拉菜单的关闭处理
    jQuery(document).on('click contextmenu scroll touchstart dragstart', function (event) {
      const clickedElement = event.target;
      const eventType = event.type;

      //上面的这几种事件全部都要关闭tab的右键菜单
      _classPrivateMethodGet(that, _closeContextmenu, _closeContextmenu2).call(that);
      if (['click', 'dragstart'].includes(eventType)) {
        var _classPrivateFieldGet3, _classPrivateFieldGet4;
        //对于下拉菜单只处理点击和拖拽用户体验比较好
        if (!((_classPrivateFieldGet3 = _classPrivateFieldGet(that, _dropdownEl)) !== null && _classPrivateFieldGet3 !== void 0 && _classPrivateFieldGet3.contains(clickedElement)) && !((_classPrivateFieldGet4 = _classPrivateFieldGet(that, _toolbarItemDropdownEl)) !== null && _classPrivateFieldGet4 !== void 0 && _classPrivateFieldGet4.contains(clickedElement))) {
          _classPrivateMethodGet(that, _closeDropdown, _closeDropdown2).call(that);
        }
      }
    });

    //响应式处理
    Utils.onResize(_classPrivateFieldGet(this, _element).parentNode, function (rect) {
      //关闭tab右键菜单和下拉菜单
      _classPrivateMethodGet(that, _closeContextmenu, _closeContextmenu2).call(that);
      _classPrivateMethodGet(that, _closeDropdown, _closeDropdown2).call(that);
      if (_classPrivateFieldGet(that, _options).responsive.enable !== false) {
        //如果启用了响应式就动态设置显示和隐藏
        Utils.setProperty(_classPrivateFieldGet(that, _containerEl), _classPrivateFieldGet(that, _hideItemSelector), 'display', rect.width < _classPrivateFieldGet(that, _options).responsive.breakpoint ? 'none' : null);
      }
      if (_classPrivateFieldGet(that, _options).tab.resizeCenterActive === true) {
        _classPrivateFieldGet(that, _debounceCenterActive).call(that);
      }
    });

    //添加通过html属性添加tab的能力(这个非常方便)
    _classPrivateMethodGet(that, _dataAttrAddTabEventRegister, _dataAttrAddTabEventRegister2).call(that, document, Constants.DATAKEYS.addTabTarget);

    //事件委托监听loading过渡完毕
    jQuery(_classPrivateFieldGet(this, _containerEl)).on('transitionend', ".".concat(Constants.CLASSES.tabBody, " .").concat(Constants.CLASSES.overlays), function (event) {
      if (event.target === event.currentTarget) {
        const maskEl = event.target;
        const url = _classPrivateMethodGet(that, _getTabUrl, _getTabUrl2).call(that, maskEl);
        maskEl.remove();

        //tab过渡完毕事件回调
        _classPrivateFieldGet(that, _options).onTabLoadingTransitionend.call(that, url);
      }
    });

    //tab的单击事件
    jQuery(_classPrivateFieldGet(this, _toolbarItemTabWrapperEl)).on('click', 'button', Utils.handleSingleAndDoubleClick({
      click: {
        stopPropagation: false,
        handle: function () {
          let url = _classPrivateMethodGet(that, _getTabUrl, _getTabUrl2).call(that, this);

          //tab被单击的回调
          _classPrivateFieldGet(that, _options).onTabClick.call(that, url);

          //激活
          _classPrivateMethodGet(that, _activeTabByUrl, _activeTabByUrl2).call(that, url);

          //滚动到tab所在位置
          if (_classPrivateFieldGet(that, _options).tab.clickCenterActive === true) {
            that.scrollToTabByUrl(url);
          }
        }
      },
      dbclick: {
        stopPropagation: false,
        handle: function () {
          const url = _classPrivateMethodGet(that, _getTabUrl, _getTabUrl2).call(that, this);
          if (_classPrivateFieldGet(that, _options).tab.doubleClick.refresh === true) {
            that.refreshTabByUrl(url);
          }
          //双击事件回调
          _classPrivateFieldGet(that, _options).onTabDoubleClick.call(that, url);
        }
      }
    }, {
      enableDbClick: _classPrivateFieldGet(that, _options).tab.doubleClick.enable === true
    }));

    //tab关闭事件
    if (_classPrivateFieldGet(this, _options).tab.closeBtn.enable !== false) {
      jQuery(_classPrivateFieldGet(this, _toolbarItemTabWrapperEl)).on('click', "button > svg", function (event) {
        event.stopPropagation(); //必须要阻止事件的冒泡,否则会冲突

        let tab = this.parentNode;
        //因为阻止了事件的冒泡传递，因此，需要手动关闭右键菜单
        _classPrivateMethodGet(that, _closeContextmenu, _closeContextmenu2).call(that);
        that.closeTabByUrl(_classPrivateMethodGet(that, _getTabUrl, _getTabUrl2).call(that, tab));
      });
    }

    //给工具栏绑定事件
    jQuery(_classPrivateFieldGet(this, _toolbarEl)).on('click', "li > button", function (event) {
      let classItem = this.parentNode.getAttribute('class');
      switch (classItem) {
        case 'fullscreen':
          that.fullscreenActiveTab();
          break;
        case 'prev':
          that.prevScroll();
          break;
        case 'refresh':
          that.refreshActiveTab();
          break;
        case 'next':
          that.nextScroll();
          break;
        case 'dropdown':
          _classPrivateMethodGet(that, _toggleDropdown, _toggleDropdown2).call(that);
          break;
      }
    });

    //鼠标滚动切换
    if (_classPrivateFieldGet(this, _options).tab.mouseWheelSwitch.enable !== false) {
      //鼠标滚轮切换tab功能启用

      let centerTabEl;
      const withTabPaneDebounce = Utils.debounce(function (event) {
        const activeTab = _classPrivateMethodGet(that, _getActiveTab, _getActiveTab2).call(that);
        const prev = activeTab.previousElementSibling;
        const next = activeTab.nextElementSibling;

        // 判断滚轮方向，负值表示向上滚动，正值表示向下滚动
        const direction = Math.sign(event.deltaY);
        if (direction === -1 && prev) {
          _classPrivateMethodGet(that, _activeTabByUrl, _activeTabByUrl2).call(that, _classPrivateMethodGet(that, _getTabUrl, _getTabUrl2).call(that, prev));
          centerTabEl = prev;
        } else if (direction === 1 && next) {
          _classPrivateMethodGet(that, _activeTabByUrl, _activeTabByUrl2).call(that, _classPrivateMethodGet(that, _getTabUrl, _getTabUrl2).call(that, next));
          centerTabEl = next;
        }
        that.scrollToTabByUrl(_classPrivateMethodGet(that, _getTabUrl, _getTabUrl2).call(that, centerTabEl));
      }, 200);
      _classPrivateFieldGet(this, _toolbarItemTabWrapperEl).addEventListener('wheel', function (event) {
        event.preventDefault(); //阻止默认事件，否则它会被外部的滚动条影响

        //判断是否启用右键菜单，如果启用就要关闭
        if (_classPrivateFieldGet(that, _options).tab.contextmenu !== false) {
          _classPrivateMethodGet(that, _closeContextmenu, _closeContextmenu2).call(that);
        }
        if (_classPrivateFieldGet(that, _options).tab.mouseWheelSwitch.onlyScroll === true) {
          //如果只是滚动
          _classPrivateFieldGet(that, _toolbarItemTabWrapperEl).scrollLeft += (event.deltaY || event.detail || -event.wheelDelta) / 2;
        } else {
          withTabPaneDebounce(event);
        }
      }, {
        passive: false
      }); //{ passive: false }解决控制台的警告错误
    }

    //是否启用右键菜单功能
    if (_classPrivateFieldGet(this, _options).tab.contextmenu.enable !== false) {
      //tab右键的事件委托
      jQuery(_classPrivateFieldGet(this, _toolbarItemTabWrapperEl)).on('contextmenu', 'button', function (event) {
        let tabEl = this;
        event.preventDefault();
        event.stopPropagation(); //必须要防止冒泡,防止和外部的右键事件冲突

        //显示右键菜单
        _classPrivateMethodGet(that, _showContextmenuByUrl, _showContextmenuByUrl2).call(that, _classPrivateMethodGet(that, _getTabUrl, _getTabUrl2).call(that, tabEl));
      });

      //touchstart 在chrome控制台的警告#https://github.com/jquery/jquery/issues/2871,如果还要用jquery的event那就没有办法修复，除非替换它
      jQuery(_classPrivateFieldGet(this, _contextmenuEl)).on('click contextmenu touchstart', "li[".concat(Constants.DATAKEYS.tabUrl, "]"), function (event) {
        if (event.type === 'contextmenu') {
          event.preventDefault();
        }
        const url = _classPrivateMethodGet(that, _getTabUrl, _getTabUrl2).call(that, this);
        const itemClass = this.getAttribute('class');
        switch (itemClass) {
          case 'refresh':
            that.refreshTabByUrl(url);
            break;
          case 'other':
            that.closeAllTabsExceptByUrl(url);
            break;
          case 'prev':
            that.closePrevAllTabsByUrl(url);
            break;
          case 'next':
            that.closeNextAllTabsByUrl(url);
            break;
          case 'all':
            that.closeAllTabs();
            break;
          case 'new-blank':
            that.openNewTabByUrl(url);
            break;
          case 'fullscreen':
            that.fullscreenTabByUrl(url);
            break;
          case 'center-active':
            that.scrollToActiveTab();
            break;
          case 'close':
            that.closeTabByUrl(url);
            break;
        }
      });
    }

    //如果启用拖动排序
    if (_classPrivateFieldGet(this, _options).tab.dragSort === true) {
      //当前拖动的元素
      let dragging = null;
      jQuery(_classPrivateFieldGet(this, _toolbarItemTabWrapperEl)).on('dragstart', function (event) {
        dragging = event.target;
      });

      //拖拽移动中
      jQuery(_classPrivateFieldGet(this, _toolbarItemTabWrapperEl)).on('dragover', function (event) {
        event.preventDefault();
        // 默认无法将数据/元素放置到其他元素中。如果需要设置允许放置，必须阻止对元素的默认处理方式

        let target = event.target;

        //当前拖动的元素是li 且不等于
        if (target.nodeName === 'BUTTON' && target !== dragging) {
          // 获取初始位置
          let targetRect = target.getBoundingClientRect();
          let draggingRect = dragging.getBoundingClientRect();
          if (target) {
            // 判断是否动画元素
            if (target.animated) {
              return;
            }
          }
          if (Utils.index(dragging) < Utils.index(target)) {
            // 目标比元素大，插到其后面
            // extSibling下一个兄弟元素
            target.parentNode.insertBefore(dragging, target.nextSibling);
          } else {
            // 目标比元素小，插到其前面
            target.parentNode.insertBefore(dragging, target);
          }
          Utils.animate(draggingRect, dragging);
          Utils.animate(targetRect, target);
        }
      });

      //拖拽结束
      jQuery(_classPrivateFieldGet(this, _toolbarItemTabWrapperEl)).on('dragend', function () {
        dragging = null;
      });
    }

    //下拉菜单的相关事件
    if (_classPrivateFieldGet(this, _options).toolbar.dropdown.enable !== false) {
      //是否进行正在合成
      let isComposing = false;

      //点击最近关闭折叠
      jQuery(_classPrivateFieldGet(this, _dropdownEl)).on('click', '.has-icon', function (event) {
        const ul = this.nextElementSibling;
        const iconWrapper = this.querySelector('.icon-wrapper');
        iconWrapper.focus();
        if (ul.style.display === 'none') {
          iconWrapper.innerHTML = _classPrivateFieldGet(that, _options).toolbar.dropdown.recentlyClosedTabs.hideIcon;
          ul.style.display = 'block';
        } else {
          iconWrapper.innerHTML = _classPrivateFieldGet(that, _options).toolbar.dropdown.recentlyClosedTabs.showIcon;
          ul.style.display = 'none';
        }
      });
      const inputElementSelector = '.header input';
      //input框的事件
      jQuery(_classPrivateFieldGet(this, _dropdownEl)).on('input', inputElementSelector, function () {
        if (isComposing) return;
        _classPrivateMethodGet(that, _search, _search2).call(that, this.value);
      });
      jQuery(_classPrivateFieldGet(this, _dropdownEl)).on('compositionstart', inputElementSelector, function () {
        isComposing = true;
      });
      jQuery(_classPrivateFieldGet(this, _dropdownEl)).on('compositionend', inputElementSelector, function () {
        isComposing = false;
        _classPrivateMethodGet(that, _search, _search2).call(that, this.value);
      });

      //每个tab的点击事件
      jQuery(_classPrivateFieldGet(this, _dropdownEl)).on('click', '.section li', function (event) {
        const option = this[Constants.DATAKEYS.tabOptionDataKey];
        that.addTab({
          title: option.title,
          url: option.url,
          closable: option.closable
        });

        //点击完毕后关闭下拉菜单
        _classPrivateMethodGet(that, _closeDropdown, _closeDropdown2).call(that);
      });

      //tab的关闭按钮被单击
      jQuery(_classPrivateFieldGet(this, _dropdownEl)).on('click', '.section li .icon-wrapper', function (event) {
        event.stopPropagation();
        const tabLiEl = this.parentNode;
        const option = tabLiEl[Constants.DATAKEYS.tabOptionDataKey];
        that.closeTabByUrl(option.url);
        tabLiEl.remove();
      });
    }
  }
  function _restoreBodyElement2(element, resultsEl, subtitleEl) {
    element.style.display = 'block';
    subtitleEl.style.display = 'block';
    resultsEl.style.display = 'none';
  }
  function _highlightKeyword2(text, keyword) {
    const regex = new RegExp("(".concat(keyword, ")"), 'gi');
    return text.replace(regex, '<span class="highlighted">$1</span>');
  }
  function _matchKeyword2(keyword, element, resultsEl, subtitleEl) {
    let hasResults = false;
    Array.from(element.children).forEach(li => {
      const title = li.querySelector('.title').textContent;
      const url = li.querySelector('.url').textContent.toLowerCase();
      if (title.toLowerCase().includes(keyword) || url.toLowerCase().includes(keyword)) {
        hasResults = true;

        // console.log(li[Constants.DATAKEYS.tabOptionDataKey]);

        let matchLi = li.cloneNode(true);

        //bugfix:克隆会导致自定义属性丢失,重新赋值
        matchLi[Constants.DATAKEYS.tabOptionDataKey] = li[Constants.DATAKEYS.tabOptionDataKey];
        matchLi.querySelector('.title').innerHTML = _classPrivateMethodGet(this, _highlightKeyword, _highlightKeyword2).call(this, title, keyword);
        matchLi.querySelector('.url').innerHTML = _classPrivateMethodGet(this, _highlightKeyword, _highlightKeyword2).call(this, url, keyword);
        resultsEl.appendChild(matchLi);
      }
    });
    if (hasResults) {
      resultsEl.style.display = 'block';
      subtitleEl.style.display = 'block';
      element.style.display = 'none';
    } else {
      resultsEl.style.display = 'none';
      element.style.display = 'none';
      subtitleEl.style.display = 'none';
    }
    return hasResults;
  }
  function _search2(keyword) {
    keyword = keyword.toLowerCase();

    //先清空
    _classPrivateFieldGet(this, _openTabsearchResultsEl).innerHTML = '';
    _classPrivateFieldGet(this, _recentlyClosedTabssearchResultsEl).innerHTML = '';
    if (keyword.trim() !== '') {
      let results1 = false;
      let results2 = false;
      results1 = _classPrivateMethodGet(this, _matchKeyword, _matchKeyword2).call(this, keyword, _classPrivateFieldGet(this, _openTabsOriginalListEl), _classPrivateFieldGet(this, _openTabsearchResultsEl), _classPrivateFieldGet(this, _openTabsSubtitleEl));
      results2 = _classPrivateMethodGet(this, _matchKeyword, _matchKeyword2).call(this, keyword, _classPrivateFieldGet(this, _recentlyClosedTabsOriginalListEl), _classPrivateFieldGet(this, _recentlyClosedTabssearchResultsEl), _classPrivateFieldGet(this, _recentlyClosedTabsSubtitleEl));
      if (results1 === false && results2 === false) {
        //说明两个都没找到结果
        _classPrivateFieldGet(this, _noResultsMessageEl).style.display = 'block';
      } else {
        _classPrivateFieldGet(this, _noResultsMessageEl).style.display = 'none';
      }
    } else {
      //隐藏结果
      _classPrivateFieldGet(this, _noResultsMessageEl).style.display = 'none';
      _classPrivateMethodGet(this, _restoreBodyElement, _restoreBodyElement2).call(this, _classPrivateFieldGet(this, _openTabsOriginalListEl), _classPrivateFieldGet(this, _openTabsearchResultsEl), _classPrivateFieldGet(this, _openTabsSubtitleEl));
      _classPrivateMethodGet(this, _restoreBodyElement, _restoreBodyElement2).call(this, _classPrivateFieldGet(this, _recentlyClosedTabsOriginalListEl), _classPrivateFieldGet(this, _recentlyClosedTabssearchResultsEl), _classPrivateFieldGet(this, _recentlyClosedTabsSubtitleEl));
    }
  }
  function _getTabUrl2(element) {
    return element === null || element === void 0 ? void 0 : element.getAttribute(Constants.DATAKEYS.tabUrl);
  }
  function _toggleDropdown2() {
    if (_classPrivateFieldGet(this, _dropdownEl).classList.contains(Constants.CLASSES.dropdownActive)) {
      _classPrivateMethodGet(this, _closeDropdown, _closeDropdown2).call(this);
    } else {
      _classPrivateMethodGet(this, _prepareDropdownData, _prepareDropdownData2).call(this);
      _classPrivateMethodGet(this, _showDropdown, _showDropdown2).call(this);
    }
  }
  function _prepareDropdownData2() {
    var _classPrivateMethodGe4, _classPrivateFieldGet5;
    const allOpenedTabs = [];
    (_classPrivateMethodGe4 = _classPrivateMethodGet(this, _getTabs, _getTabs2).call(this)) === null || _classPrivateMethodGe4 === void 0 || _classPrivateMethodGe4.forEach(tabEl => {
      allOpenedTabs.push(tabEl[Constants.DATAKEYS.tabOptionDataKey]);
    });

    // 未激活的,按照timestamp从小到大排序
    const newOrderTabs = allOpenedTabs.filter(tab => tab.active === false).sort((a, b) => b.timestamp - a.timestamp);
    const ativeTabs = allOpenedTabs.find(tab => tab.active === true);
    if (ativeTabs) {
      newOrderTabs.push(ativeTabs);
    }
    const closeBtnTpl = Utils.sprintf(Constants.HTML.iconWrapper, '', _classPrivateFieldGet(this, _options).toolbar.dropdown.openedTabs.closeIcon);

    //创建两个虚拟节点
    const openTabsFrag = document.createDocumentFragment();
    const timeFormatOptions = _classPrivateFieldGet(this, _options).toolbar.dropdown.timeFormat;

    //国际化时间文本
    const customText = {
      second: timeFormatOptions.seconds.trim() !== '' ? timeFormatOptions.seconds : _classPrivateFieldGet(this, _options).formatTimeSeconds(),
      minutes: timeFormatOptions.minutes.trim() !== '' ? timeFormatOptions.minutes : _classPrivateFieldGet(this, _options).formatTimeMinutes(),
      hours: timeFormatOptions.hours.trim() !== '' ? timeFormatOptions.hours : _classPrivateFieldGet(this, _options).formatTimeHours(),
      days: timeFormatOptions.days.trim() !== '' ? timeFormatOptions.days : _classPrivateFieldGet(this, _options).formatTimeDays(),
      months: timeFormatOptions.months.trim() !== '' ? timeFormatOptions.months : _classPrivateFieldGet(this, _options).formatTimeMonths(),
      years: timeFormatOptions.year.trim() !== '' ? timeFormatOptions.year : _classPrivateFieldGet(this, _options).formatTimeYear()
    };
    newOrderTabs.forEach((item, index) => {
      const dropdownItemEl = Utils.createNode(Utils.sprintf(Constants.HTML.sectionItem, index === 0 ? Constants.CLASSES.dropdownActive : '', item.title, item.url, Utils.timeAgo(item.timestamp, customText), item.closable === true ? closeBtnTpl : ''));
      dropdownItemEl[Constants.DATAKEYS.tabOptionDataKey] = item;
      openTabsFrag.appendChild(dropdownItemEl);
    });
    _classPrivateFieldGet(this, _openTabsOriginalListEl).replaceChildren(openTabsFrag);

    //然后准备最近关闭的标签
    const recentlyClosedTabsFrag = document.createDocumentFragment();
    //获取最近关闭的tabs
    (_classPrivateFieldGet5 = _classPrivateFieldGet(this, _cacheHandle).get(_classPrivateFieldGet(this, _cacheRecentlyClosedTabsKey))) === null || _classPrivateFieldGet5 === void 0 || _classPrivateFieldGet5.sort((a, b) => b.timestamp - a.timestamp).forEach(item => {
      const recentlyClosedTabEl = Utils.createNode(Utils.sprintf(Constants.HTML.sectionItem, '', item.title, item.url, Utils.timeAgo(item.timestamp, customText), ''));
      recentlyClosedTabEl[Constants.DATAKEYS.tabOptionDataKey] = item;
      recentlyClosedTabsFrag.appendChild(recentlyClosedTabEl);
    });
    _classPrivateFieldGet(this, _recentlyClosedTabsOriginalListEl).replaceChildren(recentlyClosedTabsFrag);
  }
  function _showDropdown2() {
    var _classPrivateFieldGet6;
    (_classPrivateFieldGet6 = _classPrivateFieldGet(this, _dropdownCleanup)) === null || _classPrivateFieldGet6 === void 0 || _classPrivateFieldGet6.call(this);
    // 注册菜单自动更新位置
    _classPrivateFieldSet(this, _dropdownCleanup, autoUpdate(_classPrivateFieldGet(this, _toolbarItemDropdownEl), _classPrivateFieldGet(this, _dropdownEl), _classPrivateMethodGet(this, _updatePosition, _updatePosition2).bind(this, _classPrivateFieldGet(this, _toolbarItemDropdownEl), _classPrivateFieldGet(this, _dropdownEl), 'bottom-end')));
    _classPrivateFieldGet(this, _dropdownEl).classList.add(Constants.CLASSES.dropdownActive);
    _classPrivateFieldGet(this, _containerEl).classList.add(Constants.CLASSES.dropdownPEN);

    //关闭tab的右键菜单
    _classPrivateMethodGet(this, _closeContextmenu, _closeContextmenu2).call(this);
  }
  function _closeDropdown2() {
    var _classPrivateFieldGet7, _classPrivateFieldGet8;
    (_classPrivateFieldGet7 = _classPrivateFieldGet(this, _dropdownCleanup)) === null || _classPrivateFieldGet7 === void 0 || _classPrivateFieldGet7.call(this);
    (_classPrivateFieldGet8 = _classPrivateFieldGet(this, _dropdownEl)) === null || _classPrivateFieldGet8 === void 0 || _classPrivateFieldGet8.classList.remove(Constants.CLASSES.dropdownActive);
    _classPrivateFieldGet(this, _containerEl).classList.remove(Constants.CLASSES.dropdownPEN);
  }
  function _showContextmenuByUrl2(url) {
    var _classPrivateFieldGet9;
    //判断关闭当前菜单选项是否被启用
    if (_classPrivateFieldGet(this, _options).tab.contextmenu.close !== false) {
      const listGroupCloseItemEl = _classPrivateFieldGet(this, _contextmenuEl).querySelector(".".concat(Constants.CLASSES.listGroupCloseItem));
      const enableSeparator = _classPrivateFieldGet(this, _options).tab.contextmenu.close.separator === true;
      if (_classPrivateMethodGet(this, _isClosableTabByUrl, _isClosableTabByUrl2).call(this, url)) {
        listGroupCloseItemEl.style.setProperty('display', null); //是可关闭的，因此需要显示右键菜单的关闭当前
        enableSeparator && listGroupCloseItemEl.nextElementSibling.style.setProperty('display', null);
      } else {
        listGroupCloseItemEl.style.setProperty('display', 'none');
        enableSeparator && listGroupCloseItemEl.nextElementSibling.style.setProperty('display', 'none');
      }
    }
    const tabEl = _classPrivateMethodGet(this, _getTabByUrl, _getTabByUrl2).call(this, url);
    (_classPrivateFieldGet9 = _classPrivateFieldGet(this, _contextmenuCleanup)) === null || _classPrivateFieldGet9 === void 0 || _classPrivateFieldGet9.call(this);

    // 注册菜单自动更新位置
    _classPrivateFieldSet(this, _contextmenuCleanup, autoUpdate(tabEl, _classPrivateFieldGet(this, _contextmenuEl), _classPrivateMethodGet(this, _updatePosition, _updatePosition2).bind(this, tabEl, _classPrivateFieldGet(this, _contextmenuEl), 'top')));

    //显示右键菜单
    _classPrivateFieldGet(this, _contextmenuEl).classList.add(Constants.CLASSES.listGroupActive);

    //给iframe添加蒙层
    _classPrivateFieldGet(this, _containerEl).classList.add(Constants.CLASSES.contextmenuPEN);

    //把url属性也给每一个列表项目设置一遍，方便后续事件的处理
    _classPrivateFieldGet(this, _contextmenuEl).querySelectorAll('li').forEach(function (li) {
      li.setAttribute(Constants.DATAKEYS.tabUrl, url);
    });

    //关闭下拉菜单
    _classPrivateMethodGet(this, _closeDropdown, _closeDropdown2).call(this);
  }
  function _closeContextmenu2() {
    var _classPrivateFieldGet10, _classPrivateFieldGet11;
    (_classPrivateFieldGet10 = _classPrivateFieldGet(this, _contextmenuCleanup)) === null || _classPrivateFieldGet10 === void 0 || _classPrivateFieldGet10.call(this);
    (_classPrivateFieldGet11 = _classPrivateFieldGet(this, _contextmenuEl)) === null || _classPrivateFieldGet11 === void 0 || _classPrivateFieldGet11.classList.remove(Constants.CLASSES.listGroupActive);
    _classPrivateFieldGet(this, _containerEl).classList.remove(Constants.CLASSES.contextmenuPEN);
  }
  function _updatePosition2(referenceEl, floatingEl) {
    let placement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';
    computePosition(referenceEl, floatingEl, {
      placement: placement,
      strategy: 'fixed',
      // 默认是'absolute'
      middleware: [offset(3),
      //offset(6)必须放在数组最前面，官方文档提示
      flip(), shift({
        padding: 10
      })
      // arrow({element: arrowElement})
      ]
    }).then(_ref => {
      let {
        x,
        y,
        placement,
        middlewareData
      } = _ref;
      Object.assign(floatingEl.style, {
        left: "".concat(x, "px"),
        top: "".concat(y, "px")
      });
    });
  }
  function _initContainer2() {
    const toolbarTabWrapperOpsKey = 'tabWrapper';
    const toolbarItemClassMap = {
      prev: Constants.CLASSES.toolbarPrevItem,
      refresh: Constants.CLASSES.toolbarRefreshItem,
      [toolbarTabWrapperOpsKey]: Constants.CLASSES.toolbarTabWrapperItem,
      next: Constants.CLASSES.toolbarNextItem,
      dropdown: Constants.CLASSES.toolbarDropdownItem,
      fullscreen: Constants.CLASSES.toolbarFullscreenItem
    };
    let html = [Utils.sprintf(Constants.HTML.container[0], _classPrivateFieldGet(this, _id))];
    const toolbarHtml = [Utils.sprintf(Constants.HTML.toolbar[0], _classPrivateFieldGet(this, _options).toolbar.hide === true ? Constants.CLASSES.toolbarHide : '')];
    Utils.getEnabledAndSortedOpsKey(_classPrivateFieldGet(this, _options).toolbar, toolbarItemClassMap).map(key => {
      toolbarHtml.push(Utils.sprintf(Constants.HTML.toolbarItem, toolbarItemClassMap[key], key === toolbarTabWrapperOpsKey ? '' : "<button>".concat(_classPrivateFieldGet(this, _options).toolbar[key].icon, "</button>")));
    });
    //加入工具栏的结尾
    toolbarHtml.push(Constants.HTML.toolbar[1]);

    //排序实现
    const pos = _classPrivateFieldGet(this, _options).toolbar.position;
    if (pos === 'bottom') {
      toolbarHtml.unshift(Constants.HTML.tabBody);
    } else if (pos === 'top') {
      toolbarHtml.push(Constants.HTML.tabBody);
    }
    html.push(...toolbarHtml);
    html.push(Constants.HTML.container[1]);
    html = html.join(''); //转换成字符串

    // 隐藏特定的项目
    if (_classPrivateFieldGet(this, _options).responsive.enable !== false && _classPrivateFieldGet(this, _element).parentNode.getBoundingClientRect().width < _classPrivateFieldGet(this, _options).responsive.breakpoint) {
      html = Utils.setProperty(html, _classPrivateFieldGet(this, _hideItemSelector), 'display', 'none');
    }

    //设置容器的尺寸
    const {
      height,
      width,
      minHeight
    } = _classPrivateFieldGet(this, _options);
    const containerSelector = "[".concat(Constants.DATAKEYS.container, "=\"").concat(_classPrivateFieldGet(this, _id), "\"]");
    html = Utils.setProperty(html, [containerSelector], 'height', height);
    html = Utils.setProperty(html, [containerSelector], 'width', width);
    html = Utils.setProperty(html, [containerSelector], 'min-height', minHeight);

    //插入到挂载元素之后
    _classPrivateFieldGet(this, _element).insertAdjacentHTML('afterend', html);
    _classPrivateFieldSet(this, _containerEl, document.querySelector(containerSelector));

    //查找一些需要的dom
    _classPrivateFieldSet(this, _toolbarEl, _classPrivateFieldGet(this, _containerEl).querySelector(".".concat(Constants.CLASSES.toolbar)));
    _classPrivateFieldSet(this, _toolbarItemTabWrapperEl, _classPrivateFieldGet(this, _containerEl).querySelector(".".concat(Constants.CLASSES.toolbar, " li.").concat(Constants.CLASSES.toolbarTabWrapperItem)));
    _classPrivateFieldSet(this, _tabBodyEl, _classPrivateFieldGet(this, _containerEl).querySelector(".".concat(Constants.CLASSES.tabBody)));

    //下拉菜单的按钮,弹出下拉菜单时需要使用
    _classPrivateFieldSet(this, _toolbarItemDropdownEl, _classPrivateFieldGet(this, _toolbarEl).querySelector(".".concat(Constants.CLASSES.toolbarDropdownItem, " button")));

    // console.log(this.#toolbarEl);
    // console.log(this.#toolbarItemTabWrapperEl);
    // console.log(this.#tabBodyEl);
    // console.log(this.#toolbarItemDropdownEl);
  }
  function _initContextmenu2() {
    if (_classPrivateFieldGet(this, _options).tab.contextmenu.enable === false) return;
    const listGroupItemMap = {
      close: {
        class: Constants.CLASSES.listGroupCloseItem,
        text: _classPrivateFieldGet(this, _options).formatContextmenuClose()
      },
      closeOthers: {
        class: Constants.CLASSES.listGroupCloseOtherItem,
        text: _classPrivateFieldGet(this, _options).formatContextmenuCloseOthers()
      },
      closePrev: {
        class: Constants.CLASSES.listGroupClosePrevItem,
        text: _classPrivateFieldGet(this, _options).formatContextmenuClosePrev()
      },
      closeNext: {
        class: Constants.CLASSES.listGroupCloseNextItem,
        text: _classPrivateFieldGet(this, _options).formatContextmenuCloseNext()
      },
      closeAll: {
        class: Constants.CLASSES.listGroupCloseAllItem,
        text: _classPrivateFieldGet(this, _options).formatContextmenuCloseAll()
      },
      fullscreen: {
        class: Constants.CLASSES.listGroupFullscreenItem,
        text: _classPrivateFieldGet(this, _options).formatContextmenuFullscreen()
      },
      refresh: {
        class: Constants.CLASSES.listGroupRefreshItem,
        text: _classPrivateFieldGet(this, _options).formatContextmenuRefresh()
      },
      centerActive: {
        class: Constants.CLASSES.listGroupCenterActiveItem,
        text: _classPrivateFieldGet(this, _options).formatContextmenuCenterActive()
      },
      newBlank: {
        class: Constants.CLASSES.listGroupNewBlankItem,
        text: _classPrivateFieldGet(this, _options).formatContextmenuNewBlank()
      }
    };
    const html = [Utils.sprintf(Constants.HTML.listGroup[0], _classPrivateFieldGet(this, _id))];
    Utils.getEnabledAndSortedOpsKey(_classPrivateFieldGet(this, _options).tab.contextmenu, listGroupItemMap).map(key => {
      //开始组装字符串

      //根据key把配置项都解构出来
      const {
        text,
        separator
      } = _classPrivateFieldGet(this, _options).tab.contextmenu[key];
      let formatText = listGroupItemMap[key].text;
      if (text !== '') {
        formatText = text;
      }
      html.push(Utils.sprintf(Constants.HTML.listGroupItem, listGroupItemMap[key].class, formatText) + (separator ? Constants.HTML.listGroupSeparatorItem : ''));
    });
    html.push(Constants.HTML.listGroup[1]);

    //插入到body中去
    document.body.insertAdjacentHTML('beforeEnd', html.join(''));

    //查找右键菜单
    _classPrivateFieldSet(this, _contextmenuEl, document.querySelector("[".concat(Constants.DATAKEYS.contextmenu, "=\"").concat(_classPrivateFieldGet(this, _id), "\"]")));

    //滚动条初始化
    new SimpleBar(_classPrivateFieldGet(this, _contextmenuEl), {
      autoHide: true,
      // scrollbarMinSize:6,
      scrollbarMaxSize: 200
    });
  }
  function _initTabs2() {
    const defaultTabs = _classPrivateFieldGet(this, _options).defaultTabs;
    const cacheTabs = _classPrivateFieldGet(this, _cacheHandle).get(_classPrivateFieldGet(this, _cacheKey)); //获取缓存中的tab
    const cacheDefaultTabs = _classPrivateFieldGet(this, _cacheHandle).get(_classPrivateFieldGet(this, _cacheDefaultTabsKey)); //获取缓存中的tab

    if (_classPrivateFieldGet(this, _options).tab.remember === false) {
      const cacheStores = ['local', 'session'];
      const cacheKeys = [_classPrivateFieldGet(this, _cacheKey), _classPrivateFieldGet(this, _cacheDefaultTabsKey)];
      for (const store of cacheStores) {
        for (const key of cacheKeys) {
          _classPrivateFieldGet(this, _cacheHandle).store(store).delete(key);
        }
      }
      _classPrivateMethodGet(this, _restoreTabs, _restoreTabs2).call(this, defaultTabs);
      return;
    }
    if (cacheTabs !== null && cacheDefaultTabs !== null && _classPrivateMethodGet(this, _cacheTabsCheck, _cacheTabsCheck2).call(this, cacheTabs) && JSON.stringify(defaultTabs) === JSON.stringify(cacheDefaultTabs)) {
      var _classPrivateMethodGe5;
      //这里是缓存数据一切正常的情况下,直接回显就行
      _classPrivateMethodGet(this, _restoreTabs, _restoreTabs2).call(this, cacheTabs, (_classPrivateMethodGe5 = _classPrivateMethodGet(this, _getCacheActiveTab, _getCacheActiveTab2).call(this)) === null || _classPrivateMethodGe5 === void 0 ? void 0 : _classPrivateMethodGe5.url);
    } else {
      //必须先设置一遍缓存
      _classPrivateFieldGet(this, _cacheHandle).set(_classPrivateFieldGet(this, _cacheKey), defaultTabs);
      _classPrivateMethodGet(this, _restoreTabs, _restoreTabs2).call(this, defaultTabs);
      _classPrivateFieldGet(this, _cacheHandle).set(_classPrivateFieldGet(this, _cacheDefaultTabsKey), defaultTabs);
    }
  }
  function _cacheTabsCheck2(tabs) {
    //要检查的键数组
    let targetKeys = [...Object.keys(Constants.TABDEFAULTS), Constants.CLASSES.tabActive];
    return tabs.every(obj => targetKeys.every(key => Object.hasOwnProperty.call(obj, key)));
  }
  function _restoreTabs2(options) {
    var _options$slice;
    let url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (!Array.isArray(options) || options.length === 0) {
      return;
    }

    //创建两个虚拟节点
    const tabFrag = document.createDocumentFragment();

    //这里只添加所有的tab，不添加iframe,否则全部加载iframe将会卡爆(重点优化)
    options.forEach((option, index) => {
      //克隆
      option = Utils.extend(true, {}, option);
      const tabNode = Utils.createNode(_classPrivateMethodGet(this, _generateTabHtml, _generateTabHtml2).call(this, option));

      //插入一个时间参数，并把整个对象再次存到这个dom节点对象上,是下拉菜单功能需要使用
      if (!Object.hasOwnProperty.call(option, 'timestamp')) {
        option.timestamp = +"".concat(Date.now(), ".").concat(index + 1);
      }
      tabNode[Constants.DATAKEYS.tabOptionDataKey] = option;
      tabFrag.appendChild(tabNode);
    });

    //添加虚拟节点到tab的容器里面
    _classPrivateFieldGet(this, _toolbarItemTabWrapperEl).appendChild(tabFrag);

    // 默认激活最后一项
    url = url || ((_options$slice = options.slice(-1)) === null || _options$slice === void 0 || (_options$slice = _options$slice[0]) === null || _options$slice === void 0 ? void 0 : _options$slice.url);

    //激活最后一个
    _classPrivateMethodGet(this, _activeTabByUrl, _activeTabByUrl2).call(this, url, false, false);

    //滚动到激活tab所在位置
    _classPrivateMethodGet(this, _scrollToTabByUrl, _scrollToTabByUrl2).call(this, url, 'auto');
  }
  function _dataAttrAddTabEventRegister2(doc, targetKey) {
    const that = this;
    //同时给子页面绑定快速打开tab的事件
    jQuery(doc).on('click', "[".concat(Constants.DATAKEYS.addTabUrl, "][").concat(targetKey, "]"), function (event) {
      event.preventDefault();
      const target = this;
      const targetID = target.getAttribute(targetKey).replace(/^#/, '');
      const url = target.getAttribute(Constants.DATAKEYS.addTabUrl);
      const title = target.getAttribute(Constants.DATAKEYS.addTabTitle);
      const closable = target.getAttribute(Constants.DATAKEYS.addTabClosable);
      if (_classStaticPrivateFieldSpecGet(_class, _class, _instances).has(targetID)) {
        let option = {
          ...(url !== null && {
            url
          }),
          ...(title !== null && {
            title
          }),
          ...(closable !== null && (closable === 'true' || closable === 'false') && {
            closable: closable === 'true'
          })
        };
        option = _classPrivateMethodGet(that, _tabOptionExtend, _tabOptionExtend2).call(that, option);
        _classStaticPrivateFieldSpecGet(_class, _class, _instances).get(targetID).addTab(option);
      }
    });
  }
  function _removeTabByUrl2(url) {
    var _classPrivateMethodGe6;
    //添加进最近关闭的缓存
    _classPrivateMethodGet(this, _cacheRecentlyClosedByUrl, _cacheRecentlyClosedByUrl2).call(this, url);

    //删除tab
    (_classPrivateMethodGe6 = _classPrivateMethodGet(this, _getTabByUrl, _getTabByUrl2).call(this, url)) === null || _classPrivateMethodGe6 === void 0 || _classPrivateMethodGe6.remove();

    //删除面板
    _classPrivateMethodGet(this, _removeTabPaneByUrl, _removeTabPaneByUrl2).call(this, url);

    //删除缓存里的tab
    _classPrivateMethodGet(this, _removeCacheTabByUrl, _removeCacheTabByUrl2).call(this, url);

    //关闭tab的回调
    _classPrivateFieldGet(this, _options).onTabClose.call(this, url);
  }
  function _cacheRecentlyClosedByUrl2(url) {
    //添加最近删除的缓存,从tab的dom中拿到选项进行缓存
    let tabEl = _classPrivateMethodGet(this, _getTabByUrl, _getTabByUrl2).call(this, url);
    let tabOption = tabEl[Constants.DATAKEYS.tabOptionDataKey];

    //更新时间戳为关闭时的时间戳
    tabOption.timestamp = Date.now();
    if (_classPrivateFieldGet(this, _cacheHandle).has(_classPrivateFieldGet(this, _cacheRecentlyClosedTabsKey))) {
      //先取所有的数组
      let all = _classPrivateFieldGet(this, _cacheHandle).get(_classPrivateFieldGet(this, _cacheRecentlyClosedTabsKey));
      while (all.length >= 10) {
        all.shift();
      }
      all.push(tabOption);
      _classPrivateFieldGet(this, _cacheHandle).set(_classPrivateFieldGet(this, _cacheRecentlyClosedTabsKey), all);
    } else {
      _classPrivateFieldGet(this, _cacheHandle).set(_classPrivateFieldGet(this, _cacheRecentlyClosedTabsKey), [tabOption]);
    }
  }
  function _removeTabPaneByUrl2(url) {
    var _classPrivateMethodGe7;
    //先删除iframe
    _classPrivateMethodGet(this, _removeIFrameByUrl, _removeIFrameByUrl2).call(this, url);
    //删除tab面板最外层的容器
    (_classPrivateMethodGe7 = _classPrivateMethodGet(this, _getTabPaneByUrl, _getTabPaneByUrl2).call(this, url)) === null || _classPrivateMethodGe7 === void 0 || _classPrivateMethodGe7.remove();
  }
  function _removeCacheTabByUrl2(url) {
    if (_classPrivateFieldGet(this, _options).tab.remember === false) return;
    let tabs = _classPrivateFieldGet(this, _cacheHandle).get(_classPrivateFieldGet(this, _cacheKey));
    tabs === null || tabs === void 0 || tabs.forEach((tab, index) => {
      if (tab.url === url) {
        tabs.splice(index, 1);
      }
    });
    _classPrivateFieldGet(this, _cacheHandle).set(_classPrivateFieldGet(this, _cacheKey), tabs);
  }
  function _activeTabByUrl2(url) {
    var _classPrivateMethodGe8, _classPrivateMethodGe9;
    let fromAddTabMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let timestamp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    const tabEl = _classPrivateMethodGet(this, _getTabByUrl, _getTabByUrl2).call(this, url);
    if (!tabEl || _classPrivateMethodGet(this, _isActiveTabByUrl, _isActiveTabByUrl2).call(this, url)) {
      //过滤掉不存在的tab,或者已经激活的tab
      return;
    }
    const activeTabEl = _classPrivateMethodGet(this, _getActiveTab, _getActiveTab2).call(this);
    activeTabEl === null || activeTabEl === void 0 || activeTabEl.classList.remove(Constants.CLASSES.tabActive); //把之前激活的tab的激活状态类给删掉
    if (activeTabEl && activeTabEl[Constants.DATAKEYS.tabOptionDataKey]) {
      activeTabEl[Constants.DATAKEYS.tabOptionDataKey].active = false;
    }

    //添加上激活的类,激活当前tab的dom里存的选项,并更新时间戳
    tabEl === null || tabEl === void 0 || tabEl.classList.add(Constants.CLASSES.tabActive);
    if (tabEl && tabEl[Constants.DATAKEYS.tabOptionDataKey]) {
      tabEl[Constants.DATAKEYS.tabOptionDataKey].active = true;
      if (timestamp === true) tabEl[Constants.DATAKEYS.tabOptionDataKey].timestamp = Date.now();
    }

    //激活缓存中的tab
    _classPrivateMethodGet(this, _activeCacheTabByUrl, _activeCacheTabByUrl2).call(this, url);
    if (timestamp === true) _classPrivateMethodGet(this, _updateCacheTabByUrl, _updateCacheTabByUrl2).call(this, url, 'timestamp', Date.now());

    //判断tab面板是否已经存在,不存在则添加
    if (!_classPrivateMethodGet(this, _getTabPaneByUrl, _getTabPaneByUrl2).call(this, url)) {
      _classPrivateMethodGet(this, _addTabPaneByUrl, _addTabPaneByUrl2).call(this, url);
    }

    //激活面板
    //把之前激活的面板给移除掉
    (_classPrivateMethodGe8 = _classPrivateMethodGet(this, _getActiveTabPane, _getActiveTabPane2).call(this)) === null || _classPrivateMethodGe8 === void 0 || _classPrivateMethodGe8.classList.remove(Constants.CLASSES.tabPaneActive);
    //把当前的tab面板给添加激活类
    (_classPrivateMethodGe9 = _classPrivateMethodGet(this, _getTabPaneByUrl, _getTabPaneByUrl2).call(this, url)) === null || _classPrivateMethodGe9 === void 0 || _classPrivateMethodGe9.classList.add(Constants.CLASSES.tabPaneActive);

    //激活逻辑完成调用激活事件
    if (fromAddTabMethod) {
      _classPrivateFieldGet(this, _options).onTabAddActivated.call(this, url);
    } else {
      _classPrivateFieldGet(this, _options).onTabActivated.call(this, url);
    }
  }
  function _addTabPaneByUrl2(url) {
    //添加tab面板的容器li元素
    _classPrivateFieldGet(this, _tabBodyEl).insertAdjacentHTML('beforeEnd', Utils.sprintf(Constants.HTML.tabBodyItem, url));

    //加载层逻辑
    _classPrivateMethodGet(this, _addLoadingByUrl, _addLoadingByUrl2).call(this, url);

    //加载iframe
    _classPrivateMethodGet(this, _addIFrameByUrl, _addIFrameByUrl2).call(this, url);
  }
  function _addIFrameByUrl2(url) {
    var _classPrivateMethodGe11;
    const that = this;

    //创建iframe
    const iframe = document.createElement('iframe');

    //超时逻辑
    _classPrivateMethodGet(this, _iFrameTimeoutHandle, _iFrameTimeoutHandle2).call(this, url, iframe);
    iframe.src = url;
    iframe.onload = () => {
      var _classPrivateMethodGe10;
      //销毁定时器
      _classPrivateMethodGet(this, _clearIFrameTimeout, _clearIFrameTimeout2).call(this, iframe);
      //设置iframe状态完毕
      iframe[Constants.DATAKEYS.iframeLoaded] = true;

      //判断是否有loading 有的话就执行过渡
      (_classPrivateMethodGe10 = _classPrivateMethodGet(this, _getTabLoadingByUrl, _getTabLoadingByUrl2).call(this, url)) === null || _classPrivateMethodGe10 === void 0 || _classPrivateMethodGe10.style.setProperty('opacity', 0);
      _classPrivateFieldGet(this, _options).onTabLoaded.call(this, url);
      _classPrivateMethodGet(this, _tabFinallyAndAll, _tabFinallyAndAll2).call(this, url);
      if (_classPrivateMethodGet(this, _canAccessIFrame, _canAccessIFrame2).call(this, iframe)) {
        //如果是非跨域的iframe

        iframe.contentWindow.onbeforeunload = () => {
          //遮罩
          _classPrivateMethodGet(this, _addLoadingByUrl, _addLoadingByUrl2).call(this, url);
          //清理掉iframe的状态
          delete iframe[Constants.DATAKEYS.iframeLoaded];
          //超时处理
          _classPrivateMethodGet(this, _iFrameTimeoutHandle, _iFrameTimeoutHandle2).call(this, url, iframe);
        };

        //给子页面绑定通过属性快速注册tab的事件
        _classPrivateMethodGet(that, _dataAttrAddTabEventRegister, _dataAttrAddTabEventRegister2).call(that, iframe.contentDocument, Constants.DATAKEYS.addTabParentTarget);
      } else {
        //如果是跨域的iframe,所有的逻辑执行完毕后清空onload,因为跨域的iframe,被用户点击重新加载此框架时,无法控制它
        iframe.onload = null;
      }
    };

    //插入iframe
    (_classPrivateMethodGe11 = _classPrivateMethodGet(this, _getTabPaneByUrl, _getTabPaneByUrl2).call(this, url)) === null || _classPrivateMethodGe11 === void 0 || _classPrivateMethodGe11.appendChild(iframe);
  }
  function _iFrameTimeoutHandle2(url, iframeEl) {
    if (_classPrivateFieldGet(this, _options).tab.timeout === false) return;

    //过滤掉某些需要超时的
    let filter = _classPrivateFieldGet(this, _options).tab.timeout.filter.call(this, url);
    if (!filter) return;

    //清除原先的定时器,否则会重复触发
    _classPrivateMethodGet(this, _clearIFrameTimeout, _clearIFrameTimeout2).call(this, iframeEl);
    iframeEl[Constants.DATAKEYS.iframeTimeoutTimer] = setTimeout(() => {
      var _classPrivateMethodGe12, _classPrivateMethodGe13;
      _classPrivateMethodGet(this, _removeIFrameByUrl, _removeIFrameByUrl2).call(this, url); //直接移除iframe停止加载

      //如果超时的话，就应该立即移除这个loading层
      (_classPrivateMethodGe12 = _classPrivateMethodGet(this, _getTabLoadingByUrl, _getTabLoadingByUrl2).call(this, url)) === null || _classPrivateMethodGe12 === void 0 || _classPrivateMethodGe12.remove();
      let timeoutHtml = Utils.sprintf(Constants.HTML.maskWrapper, url, Utils.sprintf(Constants.HTML.timeout, _classPrivateFieldGet(this, _options).tab.timeout.text.trim() !== '' ? _classPrivateFieldGet(this, _options).tab.timeout.text : _classPrivateFieldGet(this, _options).formatTimeoutMessage()));
      if (_classPrivateFieldGet(this, _options).tab.timeout.template.trim() !== '') {
        timeoutHtml = _classPrivateFieldGet(this, _options).tab.timeout.template;
      }
      (_classPrivateMethodGe13 = _classPrivateMethodGet(this, _getTabPaneByUrl, _getTabPaneByUrl2).call(this, url)) === null || _classPrivateMethodGe13 === void 0 || _classPrivateMethodGe13.insertAdjacentHTML('beforeEnd', timeoutHtml);
      _classPrivateFieldGet(this, _options).onTabTimeout.call(this, url);
      _classPrivateMethodGet(this, _tabFinallyAndAll, _tabFinallyAndAll2).call(this, url);
    }, _classPrivateFieldGet(this, _options).tab.timeout.second);
  }
  function _refreshIFrameByUrl2(url) {
    //先找到iframe
    const iframe = _classPrivateMethodGet(this, _getIFrameByUrl, _getIFrameByUrl2).call(this, url);
    if (_classPrivateMethodGet(this, _canAccessIFrame, _canAccessIFrame2).call(this, iframe)) {
      //iframe加载完毕时且非跨域的情况

      //超时逻辑
      _classPrivateMethodGet(this, _iFrameTimeoutHandle, _iFrameTimeoutHandle2).call(this, url, iframe);
      //清理掉iframe的状态
      delete iframe[Constants.DATAKEYS.iframeLoaded];
      iframe.contentWindow.location.reload();
    } else {
      _classPrivateMethodGet(this, _removeIFrameByUrl, _removeIFrameByUrl2).call(this, url);
      _classPrivateMethodGet(this, _addIFrameByUrl, _addIFrameByUrl2).call(this, url);
    }
  }
  function _removeIFrameByUrl2(url) {
    const iframe = _classPrivateMethodGet(this, _getIFrameByUrl, _getIFrameByUrl2).call(this, url);
    if (iframe) {
      _classPrivateMethodGet(this, _clearIFrameTimeout, _clearIFrameTimeout2).call(this, iframe);
      iframe.onload = null;
      iframe.remove();
    }
  }
  function _clearIFrameTimeout2(iframeEl) {
    clearTimeout(iframeEl[Constants.DATAKEYS.iframeTimeoutTimer]);
  }
  function _tabFinallyAndAll2(url) {
    _classPrivateFieldGet(this, _options).onTabFinally.call(this, url);

    // 判断所有的tab是否都完成
    const allCompleted = Array.from(_classPrivateMethodGet(this, _getIFrames, _getIFrames2).call(this)).every(iframe => {
      return iframe[Constants.DATAKEYS.iframeLoaded] === true;
    });
    if (allCompleted) {
      _classPrivateFieldGet(this, _options).onTabAll.call(this, this);
    }
  }
  function _generateTabHtml2(option) {
    //是否启用
    const enable = _classPrivateFieldGet(this, _options).tab.closeBtn.enable !== false && option.closable === true;
    return Utils.sprintf(Constants.HTML.tab, _classPrivateFieldGet(this, _options).tab.dragSort === true ? "draggable=\"true\"" : '', enable && _classPrivateFieldGet(this, _options).tab.closeBtn.showOnHover === true ? Constants.CLASSES.showCloseBtnOnHover : '', option.url, option.title, enable ? _classPrivateFieldGet(this, _options).tab.closeBtn.icon : '');
  }
  function _addCacheTab2(option) {
    if (_classPrivateFieldGet(this, _options).tab.remember === false) return;
    if (_classPrivateFieldGet(this, _cacheHandle).has(_classPrivateFieldGet(this, _cacheKey))) {
      _classPrivateFieldGet(this, _cacheHandle).push(_classPrivateFieldGet(this, _cacheKey), option);
    } else {
      _classPrivateFieldGet(this, _cacheHandle).set(_classPrivateFieldGet(this, _cacheKey), [option]);
    }
  }
  function _activeCacheTabByUrl2(url) {
    if (_classPrivateFieldGet(this, _options).tab.remember === false) return;
    const tabs = _classPrivateFieldGet(this, _cacheHandle).get(_classPrivateFieldGet(this, _cacheKey));
    tabs.forEach(item => {
      item.active = item.url === url;
    });
    _classPrivateFieldGet(this, _cacheHandle).set(_classPrivateFieldGet(this, _cacheKey), tabs);
  }
  function _scrollToTabByUrl2(url) {
    let behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'smooth';
    const tab = _classPrivateMethodGet(this, _getTabByUrl, _getTabByUrl2).call(this, url);
    if (!tab) return;

    //需要父元素设置postion(relative、absolute、fixed)
    // 获取到当前点击元素的 offsetLeft  - 包裹盒子 offsetWidth 的一半 + 当前点击元素 offsetWidth 的一半
    _classPrivateFieldGet(this, _toolbarItemTabWrapperEl).scrollTo({
      left: tab.offsetLeft - _classPrivateFieldGet(this, _toolbarItemTabWrapperEl).offsetWidth / 2 + tab.offsetWidth / 2,
      behavior
    });
  }
  function _getCacheActiveTab2() {
    var _classPrivateFieldGet12;
    return (_classPrivateFieldGet12 = _classPrivateFieldGet(this, _cacheHandle).get(_classPrivateFieldGet(this, _cacheKey))) === null || _classPrivateFieldGet12 === void 0 ? void 0 : _classPrivateFieldGet12.find(item => item.active === true);
  }
  function _updateCacheTabByUrl2(url, updateKey, updateValue) {
    if (_classPrivateFieldGet(this, _options).tab.remember === false) return;
    const tabs = _classPrivateFieldGet(this, _cacheHandle).get(_classPrivateFieldGet(this, _cacheKey));
    const targetElement = tabs.find(item => item.url === url);
    if (targetElement) {
      targetElement[updateKey] = updateValue;
    }
    _classPrivateFieldGet(this, _cacheHandle).set(_classPrivateFieldGet(this, _cacheKey), tabs);
  }
  function _getTabLoadingByUrl2(url) {
    var _classPrivateMethodGe14;
    return (_classPrivateMethodGe14 = _classPrivateMethodGet(this, _getTabPaneByUrl, _getTabPaneByUrl2).call(this, url)) === null || _classPrivateMethodGe14 === void 0 ? void 0 : _classPrivateMethodGe14.querySelector(".".concat(Constants.CLASSES.overlays));
  }
  function _addLoadingByUrl2(url) {
    var _classPrivateMethodGe15;
    if (_classPrivateFieldGet(this, _options).tab.loading.enable === false) return;

    //关闭遮罩层
    _classPrivateMethodGet(this, _clsoeLoadingByUrl, _clsoeLoadingByUrl2).call(this, url);
    let filter = _classPrivateFieldGet(this, _options).tab.loading.filter.call(this, url);
    if (!filter) return;
    let template = _classPrivateFieldGet(this, _options).tab.loading.template !== '' ? _classPrivateFieldGet(this, _options).tab.loading.template : Constants.HTML.loading;

    //插入面板
    (_classPrivateMethodGe15 = _classPrivateMethodGet(this, _getTabPaneByUrl, _getTabPaneByUrl2).call(this, url)) === null || _classPrivateMethodGe15 === void 0 || _classPrivateMethodGe15.insertAdjacentHTML('beforeEnd', Utils.sprintf(Constants.HTML.maskWrapper, url, template));
  }
  function _getIFrames2() {
    return _classPrivateFieldGet(this, _tabBodyEl).querySelectorAll("li[".concat(Constants.DATAKEYS.tabUrl, "] > iframe"));
  }
  function _getIFrameByUrl2(url) {
    var _classPrivateMethodGe16;
    return (_classPrivateMethodGe16 = _classPrivateMethodGet(this, _getTabPaneByUrl, _getTabPaneByUrl2).call(this, url)) === null || _classPrivateMethodGe16 === void 0 ? void 0 : _classPrivateMethodGe16.querySelector('iframe');
  }
  // 实例集合
  var _instances = {
    writable: true,
    value: new Map()
  };
  Quicktab.VERSION = Constants.VERSION;
  Quicktab.DEFAULTS = Constants.DEFAULTS;
  Quicktab.LANGS = Constants.LANGS;

  /**
   * ------------------------------------------------------------------------
   * Data Api
   * ------------------------------------------------------------------------
   */
  Utils.ready(() => {
    document.querySelectorAll("".concat(Constants.SELECTOR_DATA_TOGGLE, "[id]")).forEach(element => {
      new Quicktab(element.getAttribute('id'));
    });
  });

  return Quicktab;

}));
//# sourceMappingURL=quicktab.js.map
