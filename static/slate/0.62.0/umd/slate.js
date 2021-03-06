(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Slate = {}));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var arrayLikeToArray = createCommonjsModule(function (module) {
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	module.exports = _arrayLikeToArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(arrayLikeToArray);

	var arrayWithoutHoles = createCommonjsModule(function (module) {
	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return arrayLikeToArray(arr);
	}

	module.exports = _arrayWithoutHoles;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(arrayWithoutHoles);

	var iterableToArray = createCommonjsModule(function (module) {
	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
	}

	module.exports = _iterableToArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(iterableToArray);

	var unsupportedIterableToArray = createCommonjsModule(function (module) {
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	}

	module.exports = _unsupportedIterableToArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(unsupportedIterableToArray);

	var nonIterableSpread = createCommonjsModule(function (module) {
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	module.exports = _nonIterableSpread;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(nonIterableSpread);

	var toConsumableArray = createCommonjsModule(function (module) {
	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
	}

	module.exports = _toConsumableArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _toConsumableArray = unwrapExports(toConsumableArray);

	var arrayWithHoles = createCommonjsModule(function (module) {
	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	module.exports = _arrayWithHoles;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(arrayWithHoles);

	var iterableToArrayLimit = createCommonjsModule(function (module) {
	function _iterableToArrayLimit(arr, i) {
	  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	module.exports = _iterableToArrayLimit;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(iterableToArrayLimit);

	var nonIterableRest = createCommonjsModule(function (module) {
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	module.exports = _nonIterableRest;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(nonIterableRest);

	var slicedToArray = createCommonjsModule(function (module) {
	function _slicedToArray(arr, i) {
	  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
	}

	module.exports = _slicedToArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _slicedToArray = unwrapExports(slicedToArray);

	var defineProperty = createCommonjsModule(function (module) {
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	module.exports = _defineProperty;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _defineProperty = unwrapExports(defineProperty);

	var DIRTY_PATHS = new WeakMap();
	var FLUSHING = new WeakMap();
	var NORMALIZING = new WeakMap();
	var PATH_REFS = new WeakMap();
	var POINT_REFS = new WeakMap();
	var RANGE_REFS = new WeakMap();

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	/**
	 * Create a new Slate `Editor` object.
	 */

	var createEditor = function createEditor() {
	  var editor = {
	    children: [],
	    operations: [],
	    selection: null,
	    marks: null,
	    isInline: function isInline() {
	      return false;
	    },
	    isVoid: function isVoid() {
	      return false;
	    },
	    onChange: function onChange() {},
	    apply: function apply(op) {
	      var _iterator = _createForOfIteratorHelper(Editor.pathRefs(editor)),
	          _step;

	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var ref = _step.value;
	          PathRef.transform(ref, op);
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }

	      var _iterator2 = _createForOfIteratorHelper(Editor.pointRefs(editor)),
	          _step2;

	      try {
	        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	          var _ref = _step2.value;
	          PointRef.transform(_ref, op);
	        }
	      } catch (err) {
	        _iterator2.e(err);
	      } finally {
	        _iterator2.f();
	      }

	      var _iterator3 = _createForOfIteratorHelper(Editor.rangeRefs(editor)),
	          _step3;

	      try {
	        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	          var _ref2 = _step3.value;
	          RangeRef.transform(_ref2, op);
	        }
	      } catch (err) {
	        _iterator3.e(err);
	      } finally {
	        _iterator3.f();
	      }

	      var set = new Set();
	      var dirtyPaths = [];

	      var add = function add(path) {
	        if (path) {
	          var key = path.join(',');

	          if (!set.has(key)) {
	            set.add(key);
	            dirtyPaths.push(path);
	          }
	        }
	      };

	      var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
	      var newDirtyPaths = getDirtyPaths(op);

	      var _iterator4 = _createForOfIteratorHelper(oldDirtyPaths),
	          _step4;

	      try {
	        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
	          var path = _step4.value;
	          var newPath = Path.transform(path, op);
	          add(newPath);
	        }
	      } catch (err) {
	        _iterator4.e(err);
	      } finally {
	        _iterator4.f();
	      }

	      var _iterator5 = _createForOfIteratorHelper(newDirtyPaths),
	          _step5;

	      try {
	        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
	          var _path = _step5.value;
	          add(_path);
	        }
	      } catch (err) {
	        _iterator5.e(err);
	      } finally {
	        _iterator5.f();
	      }

	      DIRTY_PATHS.set(editor, dirtyPaths);
	      Transforms.transform(editor, op);
	      editor.operations.push(op);
	      Editor.normalize(editor); // Clear any formats applied to the cursor if the selection changes.

	      if (op.type === 'set_selection') {
	        editor.marks = null;
	      }

	      if (!FLUSHING.get(editor)) {
	        FLUSHING.set(editor, true);
	        Promise.resolve().then(function () {
	          FLUSHING.set(editor, false);
	          editor.onChange();
	          editor.operations = [];
	        });
	      }
	    },
	    addMark: function addMark(key, value) {
	      var selection = editor.selection;

	      if (selection) {
	        if (Range.isExpanded(selection)) {
	          Transforms.setNodes(editor, _defineProperty({}, key, value), {
	            match: Text.isText,
	            split: true
	          });
	        } else {
	          var marks = _objectSpread(_objectSpread({}, Editor.marks(editor) || {}), {}, _defineProperty({}, key, value));

	          editor.marks = marks;
	          editor.onChange();
	        }
	      }
	    },
	    deleteBackward: function deleteBackward(unit) {
	      var selection = editor.selection;

	      if (selection && Range.isCollapsed(selection)) {
	        Transforms["delete"](editor, {
	          unit: unit,
	          reverse: true
	        });
	      }
	    },
	    deleteForward: function deleteForward(unit) {
	      var selection = editor.selection;

	      if (selection && Range.isCollapsed(selection)) {
	        Transforms["delete"](editor, {
	          unit: unit
	        });
	      }
	    },
	    deleteFragment: function deleteFragment(direction) {
	      var selection = editor.selection;

	      if (selection && Range.isExpanded(selection)) {
	        Transforms["delete"](editor, {
	          reverse: direction === 'backward'
	        });
	      }
	    },
	    getFragment: function getFragment() {
	      var selection = editor.selection;

	      if (selection) {
	        return Node.fragment(editor, selection);
	      }

	      return [];
	    },
	    insertBreak: function insertBreak() {
	      Transforms.splitNodes(editor, {
	        always: true
	      });
	    },
	    insertFragment: function insertFragment(fragment) {
	      Transforms.insertFragment(editor, fragment);
	    },
	    insertNode: function insertNode(node) {
	      Transforms.insertNodes(editor, node);
	    },
	    insertText: function insertText(text) {
	      var selection = editor.selection,
	          marks = editor.marks;

	      if (selection) {
	        // If the cursor is at the end of an inline, move it outside of
	        // the inline before inserting
	        if (Range.isCollapsed(selection)) {
	          var inline = Editor.above(editor, {
	            match: function match(n) {
	              return Editor.isInline(editor, n);
	            },
	            mode: 'highest'
	          });

	          if (inline) {
	            var _inline = _slicedToArray(inline, 2),
	                inlinePath = _inline[1];

	            if (Editor.isEnd(editor, selection.anchor, inlinePath)) {
	              var point = Editor.after(editor, inlinePath);
	              Transforms.setSelection(editor, {
	                anchor: point,
	                focus: point
	              });
	            }
	          }
	        }

	        if (marks) {
	          var node = _objectSpread({
	            text: text
	          }, marks);

	          Transforms.insertNodes(editor, node);
	        } else {
	          Transforms.insertText(editor, text);
	        }

	        editor.marks = null;
	      }
	    },
	    normalizeNode: function normalizeNode(entry) {
	      var _entry = _slicedToArray(entry, 2),
	          node = _entry[0],
	          path = _entry[1]; // There are no core normalizations for text nodes.


	      if (Text.isText(node)) {
	        return;
	      } // Ensure that block and inline nodes have at least one text child.


	      if (Element.isElement(node) && node.children.length === 0) {
	        var child = {
	          text: ''
	        };
	        Transforms.insertNodes(editor, child, {
	          at: path.concat(0),
	          voids: true
	        });
	        return;
	      } // Determine whether the node should have block or inline children.


	      var shouldHaveInlines = Editor.isEditor(node) ? false : Element.isElement(node) && (editor.isInline(node) || node.children.length === 0 || Text.isText(node.children[0]) || editor.isInline(node.children[0])); // Since we'll be applying operations while iterating, keep track of an
	      // index that accounts for any added/removed nodes.

	      var n = 0;

	      for (var i = 0; i < node.children.length; i++, n++) {
	        var _child = node.children[i];
	        var prev = node.children[i - 1];
	        var isLast = i === node.children.length - 1;
	        var isInlineOrText = Text.isText(_child) || Element.isElement(_child) && editor.isInline(_child); // Only allow block nodes in the top-level children and parent blocks
	        // that only contain block nodes. Similarly, only allow inline nodes in
	        // other inline nodes, or parent blocks that only contain inlines and
	        // text.

	        if (isInlineOrText !== shouldHaveInlines) {
	          Transforms.removeNodes(editor, {
	            at: path.concat(n),
	            voids: true
	          });
	          n--;
	        } else if (Element.isElement(_child)) {
	          // Ensure that inline nodes are surrounded by text nodes.
	          if (editor.isInline(_child)) {
	            if (prev == null || !Text.isText(prev)) {
	              var newChild = {
	                text: ''
	              };
	              Transforms.insertNodes(editor, newChild, {
	                at: path.concat(n),
	                voids: true
	              });
	              n++;
	            } else if (isLast) {
	              var _newChild = {
	                text: ''
	              };
	              Transforms.insertNodes(editor, _newChild, {
	                at: path.concat(n + 1),
	                voids: true
	              });
	              n++;
	            }
	          }
	        } else {
	          // Merge adjacent text nodes that are empty or match.
	          if (prev != null && Text.isText(prev)) {
	            if (Text.equals(_child, prev, {
	              loose: true
	            })) {
	              Transforms.mergeNodes(editor, {
	                at: path.concat(n),
	                voids: true
	              });
	              n--;
	            } else if (prev.text === '') {
	              Transforms.removeNodes(editor, {
	                at: path.concat(n - 1),
	                voids: true
	              });
	              n--;
	            } else if (isLast && _child.text === '') {
	              Transforms.removeNodes(editor, {
	                at: path.concat(n),
	                voids: true
	              });
	              n--;
	            }
	          }
	        }
	      }
	    },
	    removeMark: function removeMark(key) {
	      var selection = editor.selection;

	      if (selection) {
	        if (Range.isExpanded(selection)) {
	          Transforms.unsetNodes(editor, key, {
	            match: Text.isText,
	            split: true
	          });
	        } else {
	          var marks = _objectSpread({}, Editor.marks(editor) || {});

	          delete marks[key];
	          editor.marks = marks;
	          editor.onChange();
	        }
	      }
	    }
	  };
	  return editor;
	};
	/**
	 * Get the "dirty" paths generated from an operation.
	 */

	var getDirtyPaths = function getDirtyPaths(op) {
	  switch (op.type) {
	    case 'insert_text':
	    case 'remove_text':
	    case 'set_node':
	      {
	        var path = op.path;
	        return Path.levels(path);
	      }

	    case 'insert_node':
	      {
	        var node = op.node,
	            _path2 = op.path;
	        var levels = Path.levels(_path2);
	        var descendants = Text.isText(node) ? [] : Array.from(Node.nodes(node), function (_ref3) {
	          var _ref4 = _slicedToArray(_ref3, 2),
	              p = _ref4[1];

	          return _path2.concat(p);
	        });
	        return [].concat(_toConsumableArray(levels), _toConsumableArray(descendants));
	      }

	    case 'merge_node':
	      {
	        var _path3 = op.path;
	        var ancestors = Path.ancestors(_path3);
	        var previousPath = Path.previous(_path3);
	        return [].concat(_toConsumableArray(ancestors), [previousPath]);
	      }

	    case 'move_node':
	      {
	        var _path4 = op.path,
	            newPath = op.newPath;

	        if (Path.equals(_path4, newPath)) {
	          return [];
	        }

	        var oldAncestors = [];
	        var newAncestors = [];

	        var _iterator6 = _createForOfIteratorHelper(Path.ancestors(_path4)),
	            _step6;

	        try {
	          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
	            var ancestor = _step6.value;
	            var p = Path.transform(ancestor, op);
	            oldAncestors.push(p);
	          }
	        } catch (err) {
	          _iterator6.e(err);
	        } finally {
	          _iterator6.f();
	        }

	        var _iterator7 = _createForOfIteratorHelper(Path.ancestors(newPath)),
	            _step7;

	        try {
	          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
	            var _ancestor = _step7.value;

	            var _p = Path.transform(_ancestor, op);

	            newAncestors.push(_p);
	          }
	        } catch (err) {
	          _iterator7.e(err);
	        } finally {
	          _iterator7.f();
	        }

	        var newParent = newAncestors[newAncestors.length - 1];
	        var newIndex = newPath[newPath.length - 1];
	        var resultPath = newParent.concat(newIndex);
	        return [].concat(oldAncestors, newAncestors, [resultPath]);
	      }

	    case 'remove_node':
	      {
	        var _path5 = op.path;

	        var _ancestors = Path.ancestors(_path5);

	        return _toConsumableArray(_ancestors);
	      }

	    case 'split_node':
	      {
	        var _path6 = op.path;

	        var _levels = Path.levels(_path6);

	        var nextPath = Path.next(_path6);
	        return [].concat(_toConsumableArray(_levels), [nextPath]);
	      }

	    default:
	      {
	        return [];
	      }
	  }
	};

	var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	module.exports = _objectWithoutPropertiesLoose;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(objectWithoutPropertiesLoose);

	var objectWithoutProperties = createCommonjsModule(function (module) {
	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = objectWithoutPropertiesLoose(source, excluded);
	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	module.exports = _objectWithoutProperties;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _objectWithoutProperties = unwrapExports(objectWithoutProperties);

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	   module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	});

	var regenerator = runtime_1;

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	}

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}

	function isPlainObject(o) {
	  var ctor,prot;

	  if (isObjectObject(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	}

	var esrever = createCommonjsModule(function (module, exports) {
	(function(root) {

		// Detect free variables `exports`
		var freeExports =  exports;

		// Detect free variable `module`
		var freeModule =  module &&
			module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var regexSymbolWithCombiningMarks = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
		var regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

		var reverse = function(string) {
			// Step 1: deal with combining marks and astral symbols (surrogate pairs)
			string = string
				// Swap symbols with their combining marks so the combining marks go first
				.replace(regexSymbolWithCombiningMarks, function($0, $1, $2) {
					// Reverse the combining marks so they will end up in the same order
					// later on (after another round of reversing)
					return reverse($2) + $1;
				})
				// Swap high and low surrogates so the low surrogates go first
				.replace(regexSurrogatePair, '$2$1');
			// Step 2: reverse the code units in the string
			var result = '';
			var index = string.length;
			while (index--) {
				result += string.charAt(index);
			}
			return result;
		};

		/*--------------------------------------------------------------------------*/

		var esrever = {
			'version': '0.2.0',
			'reverse': reverse
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js, io.js, or RingoJS v0.8.0+
				freeModule.exports = esrever;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (var key in esrever) {
					esrever.hasOwnProperty(key) && (freeExports[key] = esrever[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.esrever = esrever;
		}

	}(commonjsGlobal));
	});
	var esrever_1 = esrever.reverse;

	/**
	 * Constants for string distance checking.
	 */
	var SPACE = /\s/;
	var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
	var CHAMELEON = /['\u2018\u2019]/;
	var SURROGATE_START = 0xd800;
	var SURROGATE_END = 0xdfff;
	var ZERO_WIDTH_JOINER = 0x200d;
	/**
	 * Get the distance to the end of the first character in a string of text.
	 */

	var getCharacterDistance = function getCharacterDistance(text) {
	  var offset = 0; // prev types:
	  // SURR: surrogate pair
	  // MOD: modifier (technically also surrogate pair)
	  // ZWJ: zero width joiner
	  // VAR: variation selector
	  // BMP: sequenceable character from basic multilingual plane

	  var prev = null;
	  var charCode = text.charCodeAt(0);

	  while (charCode) {
	    if (isSurrogate(charCode)) {
	      var modifier = isModifier(charCode, text, offset); // Early returns are the heart of this function, where we decide if previous and current
	      // codepoints should form a single character (in terms of how many of them should selection
	      // jump over).

	      if (prev === 'SURR' || prev === 'BMP') {
	        break;
	      }

	      offset += 2;
	      prev = modifier ? 'MOD' : 'SURR';
	      charCode = text.charCodeAt(offset); // Absolutely fine to `continue` without any checks because if `charCode` is NaN (which
	      // is the case when out of `text` range), next `while` loop won"t execute and we"re done.

	      continue;
	    }

	    if (charCode === ZERO_WIDTH_JOINER) {
	      offset += 1;
	      prev = 'ZWJ';
	      charCode = text.charCodeAt(offset);
	      continue;
	    }

	    if (isBMPEmoji(charCode)) {
	      if (prev && prev !== 'ZWJ' && prev !== 'VAR') {
	        break;
	      }

	      offset += 1;
	      prev = 'BMP';
	      charCode = text.charCodeAt(offset);
	      continue;
	    }

	    if (isVariationSelector(charCode)) {
	      if (prev && prev !== 'ZWJ') {
	        break;
	      }

	      offset += 1;
	      prev = 'VAR';
	      charCode = text.charCodeAt(offset);
	      continue;
	    } // Modifier 'groups up' with what ever character is before that (even whitespace), need to
	    // look ahead.


	    if (prev === 'MOD') {
	      offset += 1;
	      break;
	    } // If while loop ever gets here, we're done (e.g latin chars).


	    break;
	  }

	  return offset || 1;
	};
	/**
	 * Get the distance to the end of the first word in a string of text.
	 */

	var getWordDistance = function getWordDistance(text) {
	  var length = 0;
	  var i = 0;
	  var started = false;

	  var _char;

	  while (_char = text.charAt(i)) {
	    var l = getCharacterDistance(_char);
	    _char = text.slice(i, i + l);
	    var rest = text.slice(i + l);

	    if (isWordCharacter(_char, rest)) {
	      started = true;
	      length += l;
	    } else if (!started) {
	      length += l;
	    } else {
	      break;
	    }

	    i += l;
	  }

	  return length;
	};
	/**
	 * Check if a character is a word character. The `remaining` argument is used
	 * because sometimes you must read subsequent characters to truly determine it.
	 */

	var isWordCharacter = function isWordCharacter(_char2, remaining) {
	  if (SPACE.test(_char2)) {
	    return false;
	  } // Chameleons count as word characters as long as they're in a word, so
	  // recurse to see if the next one is a word character or not.


	  if (CHAMELEON.test(_char2)) {
	    var next = remaining.charAt(0);
	    var length = getCharacterDistance(next);
	    next = remaining.slice(0, length);
	    var rest = remaining.slice(length);

	    if (isWordCharacter(next, rest)) {
	      return true;
	    }
	  }

	  if (PUNCTUATION.test(_char2)) {
	    return false;
	  }

	  return true;
	};
	/**
	 * Determines if `code` is a surrogate
	 */


	var isSurrogate = function isSurrogate(code) {
	  return SURROGATE_START <= code && code <= SURROGATE_END;
	};
	/**
	 * Does `code` form Modifier with next one.
	 *
	 * https://emojipedia.org/modifiers/
	 */


	var isModifier = function isModifier(code, text, offset) {
	  if (code === 0xd83c) {
	    var next = text.charCodeAt(offset + 1);
	    return next <= 0xdfff && next >= 0xdffb;
	  }

	  return false;
	};
	/**
	 * Is `code` a Variation Selector.
	 *
	 * https://codepoints.net/variation_selectors
	 */


	var isVariationSelector = function isVariationSelector(code) {
	  return code <= 0xfe0f && code >= 0xfe00;
	};
	/**
	 * Is `code` one of the BMP codes used in emoji sequences.
	 *
	 * https://emojipedia.org/emoji-zwj-sequences/
	 */


	var isBMPEmoji = function isBMPEmoji(code) {
	  // This requires tiny bit of maintanance, better ideas?
	  // Fortunately it only happens if new Unicode Standard
	  // is released. Fails gracefully if upkeep lags behind,
	  // same way Slate previously behaved with all emojis.
	  return code === 0x2764 || // heart (❤)
	  code === 0x2642 || // male (♂)
	  code === 0x2640 || // female (♀)
	  code === 0x2620 || // scull (☠)
	  code === 0x2695 || // medical (⚕)
	  code === 0x2708 || // plane (✈️)
	  code === 0x25ef // large circle (◯)
	  ;
	};

	var Element = {
	  /**
	   * Check if a value implements the 'Ancestor' interface.
	   */
	  isAncestor: function isAncestor(value) {
	    return isPlainObject(value) && Node.isNodeList(value.children);
	  },

	  /**
	   * Check if a value implements the `Element` interface.
	   */
	  isElement: function isElement(value) {
	    return isPlainObject(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
	  },

	  /**
	   * Check if a value is an array of `Element` objects.
	   */
	  isElementList: function isElementList(value) {
	    return Array.isArray(value) && value.every(function (val) {
	      return Element.isElement(val);
	    });
	  },

	  /**
	   * Check if a set of props is a partial of Element.
	   */
	  isElementProps: function isElementProps(props) {
	    return props.children !== undefined;
	  },

	  /**
	   * Check if an element matches set of properties.
	   *
	   * Note: this checks custom properties, and it does not ensure that any
	   * children are equivalent.
	   */
	  matches: function matches(element, props) {
	    for (var key in props) {
	      if (key === 'children') {
	        continue;
	      }

	      if (element[key] !== props[key]) {
	        return false;
	      }
	    }

	    return true;
	  }
	};

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _createForOfIteratorHelper$1(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

	function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	var IS_EDITOR_CACHE = new WeakMap();
	var Editor = {
	  /**
	   * Get the ancestor above a location in the document.
	   */
	  above: function above(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$voids = options.voids,
	        voids = _options$voids === void 0 ? false : _options$voids,
	        _options$mode = options.mode,
	        mode = _options$mode === void 0 ? 'lowest' : _options$mode,
	        _options$at = options.at,
	        at = _options$at === void 0 ? editor.selection : _options$at,
	        match = options.match;

	    if (!at) {
	      return;
	    }

	    var path = Editor.path(editor, at);
	    var reverse = mode === 'lowest';

	    var _iterator = _createForOfIteratorHelper$1(Editor.levels(editor, {
	      at: path,
	      voids: voids,
	      match: match,
	      reverse: reverse
	    })),
	        _step;

	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var _step$value = _slicedToArray(_step.value, 2),
	            n = _step$value[0],
	            p = _step$value[1];

	        if (!Text.isText(n) && !Path.equals(path, p)) {
	          return [n, p];
	        }
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	  },

	  /**
	   * Add a custom property to the leaf text nodes in the current selection.
	   *
	   * If the selection is currently collapsed, the marks will be added to the
	   * `editor.marks` property instead, and applied when text is inserted next.
	   */
	  addMark: function addMark(editor, key, value) {
	    editor.addMark(key, value);
	  },

	  /**
	   * Get the point after a location.
	   */
	  after: function after(editor, at) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var anchor = Editor.point(editor, at, {
	      edge: 'end'
	    });
	    var focus = Editor.end(editor, []);
	    var range = {
	      anchor: anchor,
	      focus: focus
	    };
	    var _options$distance = options.distance,
	        distance = _options$distance === void 0 ? 1 : _options$distance;
	    var d = 0;
	    var target;

	    var _iterator2 = _createForOfIteratorHelper$1(Editor.positions(editor, _objectSpread$1(_objectSpread$1({}, options), {}, {
	      at: range
	    }))),
	        _step2;

	    try {
	      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	        var p = _step2.value;

	        if (d > distance) {
	          break;
	        }

	        if (d !== 0) {
	          target = p;
	        }

	        d++;
	      }
	    } catch (err) {
	      _iterator2.e(err);
	    } finally {
	      _iterator2.f();
	    }

	    return target;
	  },

	  /**
	   * Get the point before a location.
	   */
	  before: function before(editor, at) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var anchor = Editor.start(editor, []);
	    var focus = Editor.point(editor, at, {
	      edge: 'start'
	    });
	    var range = {
	      anchor: anchor,
	      focus: focus
	    };
	    var _options$distance2 = options.distance,
	        distance = _options$distance2 === void 0 ? 1 : _options$distance2;
	    var d = 0;
	    var target;

	    var _iterator3 = _createForOfIteratorHelper$1(Editor.positions(editor, _objectSpread$1(_objectSpread$1({}, options), {}, {
	      at: range,
	      reverse: true
	    }))),
	        _step3;

	    try {
	      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	        var p = _step3.value;

	        if (d > distance) {
	          break;
	        }

	        if (d !== 0) {
	          target = p;
	        }

	        d++;
	      }
	    } catch (err) {
	      _iterator3.e(err);
	    } finally {
	      _iterator3.f();
	    }

	    return target;
	  },

	  /**
	   * Delete content in the editor backward from the current selection.
	   */
	  deleteBackward: function deleteBackward(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$unit = options.unit,
	        unit = _options$unit === void 0 ? 'character' : _options$unit;
	    editor.deleteBackward(unit);
	  },

	  /**
	   * Delete content in the editor forward from the current selection.
	   */
	  deleteForward: function deleteForward(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$unit2 = options.unit,
	        unit = _options$unit2 === void 0 ? 'character' : _options$unit2;
	    editor.deleteForward(unit);
	  },

	  /**
	   * Delete the content in the current selection.
	   */
	  deleteFragment: function deleteFragment(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$direction = options.direction,
	        direction = _options$direction === void 0 ? 'forward' : _options$direction;
	    editor.deleteFragment(direction);
	  },

	  /**
	   * Get the start and end points of a location.
	   */
	  edges: function edges(editor, at) {
	    return [Editor.start(editor, at), Editor.end(editor, at)];
	  },

	  /**
	   * Get the end point of a location.
	   */
	  end: function end(editor, at) {
	    return Editor.point(editor, at, {
	      edge: 'end'
	    });
	  },

	  /**
	   * Get the first node at a location.
	   */
	  first: function first(editor, at) {
	    var path = Editor.path(editor, at, {
	      edge: 'start'
	    });
	    return Editor.node(editor, path);
	  },

	  /**
	   * Get the fragment at a location.
	   */
	  fragment: function fragment(editor, at) {
	    var range = Editor.range(editor, at);
	    var fragment = Node.fragment(editor, range);
	    return fragment;
	  },

	  /**
	   * Check if a node has block children.
	   */
	  hasBlocks: function hasBlocks(editor, element) {
	    return element.children.some(function (n) {
	      return Editor.isBlock(editor, n);
	    });
	  },

	  /**
	   * Check if a node has inline and text children.
	   */
	  hasInlines: function hasInlines(editor, element) {
	    return element.children.some(function (n) {
	      return Text.isText(n) || Editor.isInline(editor, n);
	    });
	  },

	  /**
	   * Check if a node has text children.
	   */
	  hasTexts: function hasTexts(editor, element) {
	    return element.children.every(function (n) {
	      return Text.isText(n);
	    });
	  },

	  /**
	   * Insert a block break at the current selection.
	   *
	   * If the selection is currently expanded, it will be deleted first.
	   */
	  insertBreak: function insertBreak(editor) {
	    editor.insertBreak();
	  },

	  /**
	   * Insert a fragment at the current selection.
	   *
	   * If the selection is currently expanded, it will be deleted first.
	   */
	  insertFragment: function insertFragment(editor, fragment) {
	    editor.insertFragment(fragment);
	  },

	  /**
	   * Insert a node at the current selection.
	   *
	   * If the selection is currently expanded, it will be deleted first.
	   */
	  insertNode: function insertNode(editor, node) {
	    editor.insertNode(node);
	  },

	  /**
	   * Insert text at the current selection.
	   *
	   * If the selection is currently expanded, it will be deleted first.
	   */
	  insertText: function insertText(editor, text) {
	    editor.insertText(text);
	  },

	  /**
	   * Check if a value is a block `Element` object.
	   */
	  isBlock: function isBlock(editor, value) {
	    return Element.isElement(value) && !editor.isInline(value);
	  },

	  /**
	   * Check if a value is an `Editor` object.
	   */
	  isEditor: function isEditor(value) {
	    if (!isPlainObject(value)) return false;
	    var cachedIsEditor = IS_EDITOR_CACHE.get(value);

	    if (cachedIsEditor !== undefined) {
	      return cachedIsEditor;
	    }

	    var isEditor = typeof value.addMark === 'function' && typeof value.apply === 'function' && typeof value.deleteBackward === 'function' && typeof value.deleteForward === 'function' && typeof value.deleteFragment === 'function' && typeof value.insertBreak === 'function' && typeof value.insertFragment === 'function' && typeof value.insertNode === 'function' && typeof value.insertText === 'function' && typeof value.isInline === 'function' && typeof value.isVoid === 'function' && typeof value.normalizeNode === 'function' && typeof value.onChange === 'function' && typeof value.removeMark === 'function' && (value.marks === null || isPlainObject(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
	    IS_EDITOR_CACHE.set(value, isEditor);
	    return isEditor;
	  },

	  /**
	   * Check if a point is the end point of a location.
	   */
	  isEnd: function isEnd(editor, point, at) {
	    var end = Editor.end(editor, at);
	    return Point.equals(point, end);
	  },

	  /**
	   * Check if a point is an edge of a location.
	   */
	  isEdge: function isEdge(editor, point, at) {
	    return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
	  },

	  /**
	   * Check if an element is empty, accounting for void nodes.
	   */
	  isEmpty: function isEmpty(editor, element) {
	    var children = element.children;

	    var _children = _slicedToArray(children, 1),
	        first = _children[0];

	    return children.length === 0 || children.length === 1 && Text.isText(first) && first.text === '' && !editor.isVoid(element);
	  },

	  /**
	   * Check if a value is an inline `Element` object.
	   */
	  isInline: function isInline(editor, value) {
	    return Element.isElement(value) && editor.isInline(value);
	  },

	  /**
	   * Check if the editor is currently normalizing after each operation.
	   */
	  isNormalizing: function isNormalizing(editor) {
	    var isNormalizing = NORMALIZING.get(editor);
	    return isNormalizing === undefined ? true : isNormalizing;
	  },

	  /**
	   * Check if a point is the start point of a location.
	   */
	  isStart: function isStart(editor, point, at) {
	    // PERF: If the offset isn't `0` we know it's not the start.
	    if (point.offset !== 0) {
	      return false;
	    }

	    var start = Editor.start(editor, at);
	    return Point.equals(point, start);
	  },

	  /**
	   * Check if a value is a void `Element` object.
	   */
	  isVoid: function isVoid(editor, value) {
	    return Element.isElement(value) && editor.isVoid(value);
	  },

	  /**
	   * Get the last node at a location.
	   */
	  last: function last(editor, at) {
	    var path = Editor.path(editor, at, {
	      edge: 'end'
	    });
	    return Editor.node(editor, path);
	  },

	  /**
	   * Get the leaf text node at a location.
	   */
	  leaf: function leaf(editor, at) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var path = Editor.path(editor, at, options);
	    var node = Node.leaf(editor, path);
	    return [node, path];
	  },

	  /**
	   * Iterate through all of the levels at a location.
	   */
	  levels: /*#__PURE__*/regenerator.mark(function levels(editor) {
	    var options,
	        _options$at2,
	        at,
	        _options$reverse,
	        reverse,
	        _options$voids2,
	        voids,
	        match,
	        levels,
	        path,
	        _iterator4,
	        _step4,
	        _step4$value,
	        n,
	        p,
	        _args = arguments;

	    return regenerator.wrap(function levels$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
	            _options$at2 = options.at, at = _options$at2 === void 0 ? editor.selection : _options$at2, _options$reverse = options.reverse, reverse = _options$reverse === void 0 ? false : _options$reverse, _options$voids2 = options.voids, voids = _options$voids2 === void 0 ? false : _options$voids2;
	            match = options.match;

	            if (match == null) {
	              match = function match() {
	                return true;
	              };
	            }

	            if (at) {
	              _context.next = 6;
	              break;
	            }

	            return _context.abrupt("return");

	          case 6:
	            levels = [];
	            path = Editor.path(editor, at);
	            _iterator4 = _createForOfIteratorHelper$1(Node.levels(editor, path));
	            _context.prev = 9;

	            _iterator4.s();

	          case 11:
	            if ((_step4 = _iterator4.n()).done) {
	              _context.next = 20;
	              break;
	            }

	            _step4$value = _slicedToArray(_step4.value, 2), n = _step4$value[0], p = _step4$value[1];

	            if (match(n, p)) {
	              _context.next = 15;
	              break;
	            }

	            return _context.abrupt("continue", 18);

	          case 15:
	            levels.push([n, p]);

	            if (!(!voids && Editor.isVoid(editor, n))) {
	              _context.next = 18;
	              break;
	            }

	            return _context.abrupt("break", 20);

	          case 18:
	            _context.next = 11;
	            break;

	          case 20:
	            _context.next = 25;
	            break;

	          case 22:
	            _context.prev = 22;
	            _context.t0 = _context["catch"](9);

	            _iterator4.e(_context.t0);

	          case 25:
	            _context.prev = 25;

	            _iterator4.f();

	            return _context.finish(25);

	          case 28:
	            if (reverse) {
	              levels.reverse();
	            }

	            return _context.delegateYield(levels, "t1", 30);

	          case 30:
	          case "end":
	            return _context.stop();
	        }
	      }
	    }, levels, null, [[9, 22, 25, 28]]);
	  }),

	  /**
	   * Get the marks that would be added to text at the current selection.
	   */
	  marks: function marks(editor) {
	    var marks = editor.marks,
	        selection = editor.selection;

	    if (!selection) {
	      return null;
	    }

	    if (marks) {
	      return marks;
	    }

	    if (Range.isExpanded(selection)) {
	      var _Editor$nodes = Editor.nodes(editor, {
	        match: Text.isText
	      }),
	          _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
	          match = _Editor$nodes2[0];

	      if (match) {
	        var _match = _slicedToArray(match, 1),
	            _node = _match[0];

	        var _text = _node.text,
	            _rest = _objectWithoutProperties(_node, ["text"]);

	        return _rest;
	      } else {
	        return {};
	      }
	    }

	    var anchor = selection.anchor;
	    var path = anchor.path;

	    var _Editor$leaf = Editor.leaf(editor, path),
	        _Editor$leaf2 = _slicedToArray(_Editor$leaf, 1),
	        node = _Editor$leaf2[0];

	    if (anchor.offset === 0) {
	      var prev = Editor.previous(editor, {
	        at: path,
	        match: Text.isText
	      });
	      var block = Editor.above(editor, {
	        match: function match(n) {
	          return Editor.isBlock(editor, n);
	        }
	      });

	      if (prev && block) {
	        var _prev = _slicedToArray(prev, 2),
	            prevNode = _prev[0],
	            prevPath = _prev[1];

	        var _block = _slicedToArray(block, 2),
	            blockPath = _block[1];

	        if (Path.isAncestor(blockPath, prevPath)) {
	          node = prevNode;
	        }
	      }
	    }

	    var _node2 = node,
	        text = _node2.text,
	        rest = _objectWithoutProperties(_node2, ["text"]);

	    return rest;
	  },

	  /**
	   * Get the matching node in the branch of the document after a location.
	   */
	  next: function next(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$mode2 = options.mode,
	        mode = _options$mode2 === void 0 ? 'lowest' : _options$mode2,
	        _options$voids3 = options.voids,
	        voids = _options$voids3 === void 0 ? false : _options$voids3;
	    var match = options.match,
	        _options$at3 = options.at,
	        at = _options$at3 === void 0 ? editor.selection : _options$at3;

	    if (!at) {
	      return;
	    }

	    var pointAfterLocation = Editor.after(editor, at, {
	      voids: voids
	    });
	    if (!pointAfterLocation) return;

	    var _Editor$last = Editor.last(editor, []),
	        _Editor$last2 = _slicedToArray(_Editor$last, 2),
	        to = _Editor$last2[1];

	    var span = [pointAfterLocation.path, to];

	    if (Path.isPath(at) && at.length === 0) {
	      throw new Error("Cannot get the next node from the root node!");
	    }

	    if (match == null) {
	      if (Path.isPath(at)) {
	        var _Editor$parent = Editor.parent(editor, at),
	            _Editor$parent2 = _slicedToArray(_Editor$parent, 1),
	            parent = _Editor$parent2[0];

	        match = function match(n) {
	          return parent.children.includes(n);
	        };
	      } else {
	        match = function match() {
	          return true;
	        };
	      }
	    }

	    var _Editor$nodes3 = Editor.nodes(editor, {
	      at: span,
	      match: match,
	      mode: mode,
	      voids: voids
	    }),
	        _Editor$nodes4 = _slicedToArray(_Editor$nodes3, 1),
	        next = _Editor$nodes4[0];

	    return next;
	  },

	  /**
	   * Get the node at a location.
	   */
	  node: function node(editor, at) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var path = Editor.path(editor, at, options);
	    var node = Node.get(editor, path);
	    return [node, path];
	  },

	  /**
	   * Iterate through all of the nodes in the Editor.
	   */
	  nodes: /*#__PURE__*/regenerator.mark(function nodes(editor) {
	    var options,
	        _options$at4,
	        at,
	        _options$mode3,
	        mode,
	        _options$universal,
	        universal,
	        _options$reverse2,
	        reverse,
	        _options$voids4,
	        voids,
	        match,
	        from,
	        to,
	        first,
	        last,
	        nodeEntries,
	        matches,
	        hit,
	        _iterator5,
	        _step5,
	        _step5$value,
	        node,
	        path,
	        isLower,
	        emit,
	        _args2 = arguments;

	    return regenerator.wrap(function nodes$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
	            _options$at4 = options.at, at = _options$at4 === void 0 ? editor.selection : _options$at4, _options$mode3 = options.mode, mode = _options$mode3 === void 0 ? 'all' : _options$mode3, _options$universal = options.universal, universal = _options$universal === void 0 ? false : _options$universal, _options$reverse2 = options.reverse, reverse = _options$reverse2 === void 0 ? false : _options$reverse2, _options$voids4 = options.voids, voids = _options$voids4 === void 0 ? false : _options$voids4;
	            match = options.match;

	            if (!match) {
	              match = function match() {
	                return true;
	              };
	            }

	            if (at) {
	              _context2.next = 6;
	              break;
	            }

	            return _context2.abrupt("return");

	          case 6:
	            if (Span.isSpan(at)) {
	              from = at[0];
	              to = at[1];
	            } else {
	              first = Editor.path(editor, at, {
	                edge: 'start'
	              });
	              last = Editor.path(editor, at, {
	                edge: 'end'
	              });
	              from = reverse ? last : first;
	              to = reverse ? first : last;
	            }

	            nodeEntries = Node.nodes(editor, {
	              reverse: reverse,
	              from: from,
	              to: to,
	              pass: function pass(_ref) {
	                var _ref2 = _slicedToArray(_ref, 1),
	                    n = _ref2[0];

	                return voids ? false : Editor.isVoid(editor, n);
	              }
	            });
	            matches = [];
	            _iterator5 = _createForOfIteratorHelper$1(nodeEntries);
	            _context2.prev = 10;

	            _iterator5.s();

	          case 12:
	            if ((_step5 = _iterator5.n()).done) {
	              _context2.next = 37;
	              break;
	            }

	            _step5$value = _slicedToArray(_step5.value, 2), node = _step5$value[0], path = _step5$value[1];
	            isLower = hit && Path.compare(path, hit[1]) === 0; // In highest mode any node lower than the last hit is not a match.

	            if (!(mode === 'highest' && isLower)) {
	              _context2.next = 17;
	              break;
	            }

	            return _context2.abrupt("continue", 35);

	          case 17:
	            if (match(node, path)) {
	              _context2.next = 23;
	              break;
	            }

	            if (!(universal && !isLower && Text.isText(node))) {
	              _context2.next = 22;
	              break;
	            }

	            return _context2.abrupt("return");

	          case 22:
	            return _context2.abrupt("continue", 35);

	          case 23:
	            if (!(mode === 'lowest' && isLower)) {
	              _context2.next = 26;
	              break;
	            }

	            hit = [node, path];
	            return _context2.abrupt("continue", 35);

	          case 26:
	            // In lowest mode we emit the last hit, once it's guaranteed lowest.
	            emit = mode === 'lowest' ? hit : [node, path];

	            if (!emit) {
	              _context2.next = 34;
	              break;
	            }

	            if (!universal) {
	              _context2.next = 32;
	              break;
	            }

	            matches.push(emit);
	            _context2.next = 34;
	            break;

	          case 32:
	            _context2.next = 34;
	            return emit;

	          case 34:
	            hit = [node, path];

	          case 35:
	            _context2.next = 12;
	            break;

	          case 37:
	            _context2.next = 42;
	            break;

	          case 39:
	            _context2.prev = 39;
	            _context2.t0 = _context2["catch"](10);

	            _iterator5.e(_context2.t0);

	          case 42:
	            _context2.prev = 42;

	            _iterator5.f();

	            return _context2.finish(42);

	          case 45:
	            if (!(mode === 'lowest' && hit)) {
	              _context2.next = 52;
	              break;
	            }

	            if (!universal) {
	              _context2.next = 50;
	              break;
	            }

	            matches.push(hit);
	            _context2.next = 52;
	            break;

	          case 50:
	            _context2.next = 52;
	            return hit;

	          case 52:
	            if (!universal) {
	              _context2.next = 54;
	              break;
	            }

	            return _context2.delegateYield(matches, "t1", 54);

	          case 54:
	          case "end":
	            return _context2.stop();
	        }
	      }
	    }, nodes, null, [[10, 39, 42, 45]]);
	  }),

	  /**
	   * Normalize any dirty objects in the editor.
	   */
	  normalize: function normalize(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$force = options.force,
	        force = _options$force === void 0 ? false : _options$force;

	    var getDirtyPaths = function getDirtyPaths(editor) {
	      return DIRTY_PATHS.get(editor) || [];
	    };

	    if (!Editor.isNormalizing(editor)) {
	      return;
	    }

	    if (force) {
	      var allPaths = Array.from(Node.nodes(editor), function (_ref3) {
	        var _ref4 = _slicedToArray(_ref3, 2),
	            p = _ref4[1];

	        return p;
	      });
	      DIRTY_PATHS.set(editor, allPaths);
	    }

	    if (getDirtyPaths(editor).length === 0) {
	      return;
	    }

	    Editor.withoutNormalizing(editor, function () {
	      var max = getDirtyPaths(editor).length * 42; // HACK: better way?

	      var m = 0;

	      while (getDirtyPaths(editor).length !== 0) {
	        if (m > max) {
	          throw new Error("\n            Could not completely normalize the editor after ".concat(max, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
	        }

	        var dirtyPath = getDirtyPaths(editor).pop(); // If the node doesn't exist in the tree, it does not need to be normalized.

	        if (Node.has(editor, dirtyPath)) {
	          var entry = Editor.node(editor, dirtyPath);
	          editor.normalizeNode(entry);
	        }

	        m++;
	      }
	    });
	  },

	  /**
	   * Get the parent node of a location.
	   */
	  parent: function parent(editor, at) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var path = Editor.path(editor, at, options);
	    var parentPath = Path.parent(path);
	    var entry = Editor.node(editor, parentPath);
	    return entry;
	  },

	  /**
	   * Get the path of a location.
	   */
	  path: function path(editor, at) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var depth = options.depth,
	        edge = options.edge;

	    if (Path.isPath(at)) {
	      if (edge === 'start') {
	        var _Node$first = Node.first(editor, at),
	            _Node$first2 = _slicedToArray(_Node$first, 2),
	            firstPath = _Node$first2[1];

	        at = firstPath;
	      } else if (edge === 'end') {
	        var _Node$last = Node.last(editor, at),
	            _Node$last2 = _slicedToArray(_Node$last, 2),
	            lastPath = _Node$last2[1];

	        at = lastPath;
	      }
	    }

	    if (Range.isRange(at)) {
	      if (edge === 'start') {
	        at = Range.start(at);
	      } else if (edge === 'end') {
	        at = Range.end(at);
	      } else {
	        at = Path.common(at.anchor.path, at.focus.path);
	      }
	    }

	    if (Point.isPoint(at)) {
	      at = at.path;
	    }

	    if (depth != null) {
	      at = at.slice(0, depth);
	    }

	    return at;
	  },
	  hasPath: function hasPath(editor, path) {
	    return Node.has(editor, path);
	  },

	  /**
	   * Create a mutable ref for a `Path` object, which will stay in sync as new
	   * operations are applied to the editor.
	   */
	  pathRef: function pathRef(editor, path) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var _options$affinity = options.affinity,
	        affinity = _options$affinity === void 0 ? 'forward' : _options$affinity;
	    var ref = {
	      current: path,
	      affinity: affinity,
	      unref: function unref() {
	        var current = ref.current;
	        var pathRefs = Editor.pathRefs(editor);
	        pathRefs["delete"](ref);
	        ref.current = null;
	        return current;
	      }
	    };
	    var refs = Editor.pathRefs(editor);
	    refs.add(ref);
	    return ref;
	  },

	  /**
	   * Get the set of currently tracked path refs of the editor.
	   */
	  pathRefs: function pathRefs(editor) {
	    var refs = PATH_REFS.get(editor);

	    if (!refs) {
	      refs = new Set();
	      PATH_REFS.set(editor, refs);
	    }

	    return refs;
	  },

	  /**
	   * Get the start or end point of a location.
	   */
	  point: function point(editor, at) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var _options$edge = options.edge,
	        edge = _options$edge === void 0 ? 'start' : _options$edge;

	    if (Path.isPath(at)) {
	      var path;

	      if (edge === 'end') {
	        var _Node$last3 = Node.last(editor, at),
	            _Node$last4 = _slicedToArray(_Node$last3, 2),
	            lastPath = _Node$last4[1];

	        path = lastPath;
	      } else {
	        var _Node$first3 = Node.first(editor, at),
	            _Node$first4 = _slicedToArray(_Node$first3, 2),
	            firstPath = _Node$first4[1];

	        path = firstPath;
	      }

	      var node = Node.get(editor, path);

	      if (!Text.isText(node)) {
	        throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
	      }

	      return {
	        path: path,
	        offset: edge === 'end' ? node.text.length : 0
	      };
	    }

	    if (Range.isRange(at)) {
	      var _Range$edges = Range.edges(at),
	          _Range$edges2 = _slicedToArray(_Range$edges, 2),
	          start = _Range$edges2[0],
	          end = _Range$edges2[1];

	      return edge === 'start' ? start : end;
	    }

	    return at;
	  },

	  /**
	   * Create a mutable ref for a `Point` object, which will stay in sync as new
	   * operations are applied to the editor.
	   */
	  pointRef: function pointRef(editor, point) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var _options$affinity2 = options.affinity,
	        affinity = _options$affinity2 === void 0 ? 'forward' : _options$affinity2;
	    var ref = {
	      current: point,
	      affinity: affinity,
	      unref: function unref() {
	        var current = ref.current;
	        var pointRefs = Editor.pointRefs(editor);
	        pointRefs["delete"](ref);
	        ref.current = null;
	        return current;
	      }
	    };
	    var refs = Editor.pointRefs(editor);
	    refs.add(ref);
	    return ref;
	  },

	  /**
	   * Get the set of currently tracked point refs of the editor.
	   */
	  pointRefs: function pointRefs(editor) {
	    var refs = POINT_REFS.get(editor);

	    if (!refs) {
	      refs = new Set();
	      POINT_REFS.set(editor, refs);
	    }

	    return refs;
	  },

	  /**
	   * Iterate through all of the positions in the document where a `Point` can be
	   * placed.
	   *
	   * By default it will move forward by individual offsets at a time,  but you
	   * can pass the `unit: 'character'` option to moved forward one character, word,
	   * or line at at time.
	   *
	   * Note: By default void nodes are treated as a single point and iteration
	   * will not happen inside their content unless you pass in true for the
	   * voids option, then iteration will occur.
	   */
	  positions: /*#__PURE__*/regenerator.mark(function positions(editor) {
	    var options,
	        _options$at5,
	        at,
	        _options$unit3,
	        unit,
	        _options$reverse3,
	        reverse,
	        _options$voids5,
	        voids,
	        range,
	        _Range$edges3,
	        _Range$edges4,
	        start,
	        end,
	        first,
	        string,
	        available,
	        offset,
	        distance,
	        isNewBlock,
	        advance,
	        _iterator6,
	        _step6,
	        _step6$value,
	        node,
	        path,
	        e,
	        s,
	        text,
	        isFirst,
	        _args3 = arguments;

	    return regenerator.wrap(function positions$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
	            _options$at5 = options.at, at = _options$at5 === void 0 ? editor.selection : _options$at5, _options$unit3 = options.unit, unit = _options$unit3 === void 0 ? 'offset' : _options$unit3, _options$reverse3 = options.reverse, reverse = _options$reverse3 === void 0 ? false : _options$reverse3, _options$voids5 = options.voids, voids = _options$voids5 === void 0 ? false : _options$voids5;

	            if (at) {
	              _context3.next = 4;
	              break;
	            }

	            return _context3.abrupt("return");

	          case 4:
	            range = Editor.range(editor, at);
	            _Range$edges3 = Range.edges(range), _Range$edges4 = _slicedToArray(_Range$edges3, 2), start = _Range$edges4[0], end = _Range$edges4[1];
	            first = reverse ? end : start;
	            string = '';
	            available = 0;
	            offset = 0;
	            distance = null;
	            isNewBlock = false;

	            advance = function advance() {
	              if (distance == null) {
	                if (unit === 'character') {
	                  distance = getCharacterDistance(string);
	                } else if (unit === 'word') {
	                  distance = getWordDistance(string);
	                } else if (unit === 'line' || unit === 'block') {
	                  distance = string.length;
	                } else {
	                  distance = 1;
	                }

	                string = string.slice(distance);
	              } // Add or substract the offset.


	              offset = reverse ? offset - distance : offset + distance; // Subtract the distance traveled from the available text.

	              available = available - distance; // If the available had room to spare, reset the distance so that it will
	              // advance again next time. Otherwise, set it to the overflow amount.

	              distance = available >= 0 ? null : 0 - available;
	            };

	            _iterator6 = _createForOfIteratorHelper$1(Editor.nodes(editor, {
	              at: at,
	              reverse: reverse,
	              voids: voids
	            }));
	            _context3.prev = 14;

	            _iterator6.s();

	          case 16:
	            if ((_step6 = _iterator6.n()).done) {
	              _context3.next = 51;
	              break;
	            }

	            _step6$value = _slicedToArray(_step6.value, 2), node = _step6$value[0], path = _step6$value[1];

	            if (!Element.isElement(node)) {
	              _context3.next = 26;
	              break;
	            }

	            if (!(!voids && editor.isVoid(node))) {
	              _context3.next = 23;
	              break;
	            }

	            _context3.next = 22;
	            return Editor.start(editor, path);

	          case 22:
	            return _context3.abrupt("continue", 49);

	          case 23:
	            if (!editor.isInline(node)) {
	              _context3.next = 25;
	              break;
	            }

	            return _context3.abrupt("continue", 49);

	          case 25:
	            if (Editor.hasInlines(editor, node)) {
	              e = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
	              s = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
	              text = Editor.string(editor, {
	                anchor: s,
	                focus: e
	              }, {
	                voids: voids
	              });
	              string = reverse ? esrever_1(text) : text;
	              isNewBlock = true;
	            }

	          case 26:
	            if (!Text.isText(node)) {
	              _context3.next = 49;
	              break;
	            }

	            isFirst = Path.equals(path, first.path);
	            available = node.text.length;
	            offset = reverse ? available : 0;

	            if (isFirst) {
	              available = reverse ? first.offset : available - first.offset;
	              offset = first.offset;
	            }

	            if (!(isFirst || isNewBlock || unit === 'offset')) {
	              _context3.next = 34;
	              break;
	            }

	            _context3.next = 34;
	            return {
	              path: path,
	              offset: offset
	            };

	          case 34:

	            if (!(string === '' && distance === null)) {
	              _context3.next = 39;
	              break;
	            }

	            return _context3.abrupt("break", 48);

	          case 39:
	            advance();

	          case 40:
	            if (!(available >= 0)) {
	              _context3.next = 45;
	              break;
	            }

	            _context3.next = 43;
	            return {
	              path: path,
	              offset: offset
	            };

	          case 43:
	            _context3.next = 46;
	            break;

	          case 45:
	            return _context3.abrupt("break", 48);

	          case 46:
	            _context3.next = 34;
	            break;

	          case 48:
	            isNewBlock = false;

	          case 49:
	            _context3.next = 16;
	            break;

	          case 51:
	            _context3.next = 56;
	            break;

	          case 53:
	            _context3.prev = 53;
	            _context3.t0 = _context3["catch"](14);

	            _iterator6.e(_context3.t0);

	          case 56:
	            _context3.prev = 56;

	            _iterator6.f();

	            return _context3.finish(56);

	          case 59:
	          case "end":
	            return _context3.stop();
	        }
	      }
	    }, positions, null, [[14, 53, 56, 59]]);
	  }),

	  /**
	   * Get the matching node in the branch of the document before a location.
	   */
	  previous: function previous(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$mode4 = options.mode,
	        mode = _options$mode4 === void 0 ? 'lowest' : _options$mode4,
	        _options$voids6 = options.voids,
	        voids = _options$voids6 === void 0 ? false : _options$voids6;
	    var match = options.match,
	        _options$at6 = options.at,
	        at = _options$at6 === void 0 ? editor.selection : _options$at6;

	    if (!at) {
	      return;
	    }

	    var pointBeforeLocation = Editor.before(editor, at, {
	      voids: voids
	    });

	    if (!pointBeforeLocation) {
	      return;
	    }

	    var _Editor$first = Editor.first(editor, []),
	        _Editor$first2 = _slicedToArray(_Editor$first, 2),
	        to = _Editor$first2[1]; // The search location is from the start of the document to the path of
	    // the point before the location passed in


	    var span = [pointBeforeLocation.path, to];

	    if (Path.isPath(at) && at.length === 0) {
	      throw new Error("Cannot get the previous node from the root node!");
	    }

	    if (match == null) {
	      if (Path.isPath(at)) {
	        var _Editor$parent3 = Editor.parent(editor, at),
	            _Editor$parent4 = _slicedToArray(_Editor$parent3, 1),
	            parent = _Editor$parent4[0];

	        match = function match(n) {
	          return parent.children.includes(n);
	        };
	      } else {
	        match = function match() {
	          return true;
	        };
	      }
	    }

	    var _Editor$nodes5 = Editor.nodes(editor, {
	      reverse: true,
	      at: span,
	      match: match,
	      mode: mode,
	      voids: voids
	    }),
	        _Editor$nodes6 = _slicedToArray(_Editor$nodes5, 1),
	        previous = _Editor$nodes6[0];

	    return previous;
	  },

	  /**
	   * Get a range of a location.
	   */
	  range: function range(editor, at, to) {
	    if (Range.isRange(at) && !to) {
	      return at;
	    }

	    var start = Editor.start(editor, at);
	    var end = Editor.end(editor, to || at);
	    return {
	      anchor: start,
	      focus: end
	    };
	  },

	  /**
	   * Create a mutable ref for a `Range` object, which will stay in sync as new
	   * operations are applied to the editor.
	   */
	  rangeRef: function rangeRef(editor, range) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var _options$affinity3 = options.affinity,
	        affinity = _options$affinity3 === void 0 ? 'forward' : _options$affinity3;
	    var ref = {
	      current: range,
	      affinity: affinity,
	      unref: function unref() {
	        var current = ref.current;
	        var rangeRefs = Editor.rangeRefs(editor);
	        rangeRefs["delete"](ref);
	        ref.current = null;
	        return current;
	      }
	    };
	    var refs = Editor.rangeRefs(editor);
	    refs.add(ref);
	    return ref;
	  },

	  /**
	   * Get the set of currently tracked range refs of the editor.
	   */
	  rangeRefs: function rangeRefs(editor) {
	    var refs = RANGE_REFS.get(editor);

	    if (!refs) {
	      refs = new Set();
	      RANGE_REFS.set(editor, refs);
	    }

	    return refs;
	  },

	  /**
	   * Remove a custom property from all of the leaf text nodes in the current
	   * selection.
	   *
	   * If the selection is currently collapsed, the removal will be stored on
	   * `editor.marks` and applied to the text inserted next.
	   */
	  removeMark: function removeMark(editor, key) {
	    editor.removeMark(key);
	  },

	  /**
	   * Get the start point of a location.
	   */
	  start: function start(editor, at) {
	    return Editor.point(editor, at, {
	      edge: 'start'
	    });
	  },

	  /**
	   * Get the text string content of a location.
	   *
	   * Note: by default the text of void nodes is considered to be an empty
	   * string, regardless of content, unless you pass in true for the voids option
	   */
	  string: function string(editor, at) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var _options$voids7 = options.voids,
	        voids = _options$voids7 === void 0 ? false : _options$voids7;
	    var range = Editor.range(editor, at);

	    var _Range$edges5 = Range.edges(range),
	        _Range$edges6 = _slicedToArray(_Range$edges5, 2),
	        start = _Range$edges6[0],
	        end = _Range$edges6[1];

	    var text = '';

	    var _iterator7 = _createForOfIteratorHelper$1(Editor.nodes(editor, {
	      at: range,
	      match: Text.isText,
	      voids: voids
	    })),
	        _step7;

	    try {
	      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
	        var _step7$value = _slicedToArray(_step7.value, 2),
	            node = _step7$value[0],
	            path = _step7$value[1];

	        var t = node.text;

	        if (Path.equals(path, end.path)) {
	          t = t.slice(0, end.offset);
	        }

	        if (Path.equals(path, start.path)) {
	          t = t.slice(start.offset);
	        }

	        text += t;
	      }
	    } catch (err) {
	      _iterator7.e(err);
	    } finally {
	      _iterator7.f();
	    }

	    return text;
	  },

	  /**
	   * Convert a range into a non-hanging one.
	   */
	  unhangRange: function unhangRange(editor, range) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var _options$voids8 = options.voids,
	        voids = _options$voids8 === void 0 ? false : _options$voids8;

	    var _Range$edges7 = Range.edges(range),
	        _Range$edges8 = _slicedToArray(_Range$edges7, 2),
	        start = _Range$edges8[0],
	        end = _Range$edges8[1]; // PERF: exit early if we can guarantee that the range isn't hanging.


	    if (start.offset !== 0 || end.offset !== 0 || Range.isCollapsed(range)) {
	      return range;
	    }

	    var endBlock = Editor.above(editor, {
	      at: end,
	      match: function match(n) {
	        return Editor.isBlock(editor, n);
	      }
	    });
	    var blockPath = endBlock ? endBlock[1] : [];
	    var first = Editor.start(editor, []);
	    var before = {
	      anchor: first,
	      focus: end
	    };
	    var skip = true;

	    var _iterator8 = _createForOfIteratorHelper$1(Editor.nodes(editor, {
	      at: before,
	      match: Text.isText,
	      reverse: true,
	      voids: voids
	    })),
	        _step8;

	    try {
	      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
	        var _step8$value = _slicedToArray(_step8.value, 2),
	            node = _step8$value[0],
	            path = _step8$value[1];

	        if (skip) {
	          skip = false;
	          continue;
	        }

	        if (node.text !== '' || Path.isBefore(path, blockPath)) {
	          end = {
	            path: path,
	            offset: node.text.length
	          };
	          break;
	        }
	      }
	    } catch (err) {
	      _iterator8.e(err);
	    } finally {
	      _iterator8.f();
	    }

	    return {
	      anchor: start,
	      focus: end
	    };
	  },

	  /**
	   * Match a void node in the current branch of the editor.
	   */
	  "void": function _void(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return Editor.above(editor, _objectSpread$1(_objectSpread$1({}, options), {}, {
	      match: function match(n) {
	        return Editor.isVoid(editor, n);
	      }
	    }));
	  },

	  /**
	   * Call a function, deferring normalization until after it completes.
	   */
	  withoutNormalizing: function withoutNormalizing(editor, fn) {
	    var value = Editor.isNormalizing(editor);
	    NORMALIZING.set(editor, false);
	    fn();
	    NORMALIZING.set(editor, value);
	    Editor.normalize(editor);
	  }
	};

	var Location = {
	  /**
	   * Check if a value implements the `Location` interface.
	   */
	  isLocation: function isLocation(value) {
	    return Path.isPath(value) || Point.isPoint(value) || Range.isRange(value);
	  }
	};
	var Span = {
	  /**
	   * Check if a value implements the `Span` interface.
	   */
	  isSpan: function isSpan(value) {
	    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
	  }
	};

	function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];{var i=Y[n],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}}function t(n){return !!n&&!!n[Q]}function r(n){return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var t=Object.getPrototypeOf(n);return !t||t===Object.prototype}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:Z)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n);})):n.forEach((function(r,e){return t(e,r,n)}));}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r;}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return n.slice();var t=nn(n);delete t[Q];for(var r=Z(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){b(n)||t(n)||!r(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0));}function h(){n(2);}function b(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function y(t){var r=tn[t];return r||n(18,t),r}function _(){return U||n(0),U}function j(n,t){t&&(y("Patches"),n.u=[],n.s=[],n.v=t);}function g(n){O(n),n.p.forEach(S),n.p=null;}function O(n){n===U&&(U=n.l);}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.g=!0;}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.O||y("ES5").S(e,t,o),o?(i[Q].P&&(g(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&y("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(b(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&y("Patches").R(e,r,n.u,n.s);}return e.o}function A(e,i,o,a,c,s){if(c===o&&n(5),t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1;}if(r(c)&&!b(c)){if(!e.h.N&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(n,t,r){void 0===r&&(r=!1),n.h.N&&n.m&&d(t,r);}function z(n,t){var r=n[Q];return (r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r);}}function E(n){n.P||(n.P=!0,n.l&&E(n.l));}function k(n){n.o||(n.o=l(n.t));}function R(n,t,r){var e=s(t)?y("MapSet").T(t,r):v(t)?y("MapSet").F(t,r):n.O?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=rn;r&&(i=[e],o=en);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):y("ES5").J(t,r);return (r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!y("ES5").K(u)))return u.t;u.I=!0,e=N(t,c),u.I=!1;}else e=N(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r));})),3===c?new Set(e):e}(e)}function N(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return "Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return "Unsupported patch operation: "+n},18:function(n){return "The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},19:"plugin not loaded",20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return "'current' expects a draft, got: "+n},23:function(n){return "'original' expects a draft, got: "+n}},Z="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,nn=Object.getOwnPropertyDescriptors||function(n){var t={};return Z(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r);})),t},tn={},rn={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(k(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(n.D[t]=!0,!n.P){if(c(r,z(p(n),t))&&(void 0!==r||u(n.t,t)))return !0;k(n),E(n);}return n.o[t]=r,!0},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,k(n),E(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12);}},en={};i(rn,(function(n,t){en[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)};})),en.deleteProperty=function(t,r){return isNaN(parseInt(r))&&n(13),rn.deleteProperty.call(this,t[0],r)},en.set=function(t,r,e){return "length"!==r&&isNaN(parseInt(r))&&n(14),rn.set.call(this,t[0],r,e,t[0])};var on=function(){function e(n){this.O=B,this.N="production"!=="development","boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this);}var i=e.prototype;return i.produce=function(t,e,i){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(n,(function(n){var r;return (r=e).call.apply(r,[t,n].concat(i))}))}}var a;if("function"!=typeof e&&n(6),void 0!==i&&"function"!=typeof i&&n(7),r(t)){var f=w(this),c=R(this,t,void 0),s=!0;try{a=e(c),s=!1;}finally{s?g(f):O(f);}return "undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return j(f,i),P(n,f)}),(function(n){throw g(f),n})):(j(f,i),P(a,f))}if(!t||"object"!=typeof t){if((a=e(t))===H)return;return void 0===a&&(a=t),this.N&&d(a,!0),a}n(21,t);},i.produceWithPatches=function(n,t){var r,e,i=this;return "function"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t;})),r,e]},i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(t,r){var e=t&&t[Q];(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.N=n;},i.setUseProxies=function(t){t&&!B&&n(20),this.O=t;},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=y("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),un=new on,an=un.produce,fn=un.produceWithPatches.bind(un),cn=un.setAutoFreeze.bind(un),sn=un.setUseProxies.bind(un),vn=un.applyPatches.bind(un),pn=un.createDraft.bind(un),ln=un.finishDraft.bind(un);

	function _createForOfIteratorHelper$2(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

	function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	var IS_NODE_LIST_CACHE = new WeakMap();
	var Node = {
	  /**
	   * Get the node at a specific path, asserting that it's an ancestor node.
	   */
	  ancestor: function ancestor(root, path) {
	    var node = Node.get(root, path);

	    if (Text.isText(node)) {
	      throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(node));
	    }

	    return node;
	  },

	  /**
	   * Return a generator of all the ancestor nodes above a specific path.
	   *
	   * By default the order is bottom-up, from lowest to highest ancestor in
	   * the tree, but you can pass the `reverse: true` option to go top-down.
	   */
	  ancestors: /*#__PURE__*/regenerator.mark(function ancestors(root, path) {
	    var options,
	        _iterator,
	        _step,
	        p,
	        n,
	        entry,
	        _args = arguments;

	    return regenerator.wrap(function ancestors$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
	            _iterator = _createForOfIteratorHelper$2(Path.ancestors(path, options));
	            _context.prev = 2;

	            _iterator.s();

	          case 4:
	            if ((_step = _iterator.n()).done) {
	              _context.next = 12;
	              break;
	            }

	            p = _step.value;
	            n = Node.ancestor(root, p);
	            entry = [n, p];
	            _context.next = 10;
	            return entry;

	          case 10:
	            _context.next = 4;
	            break;

	          case 12:
	            _context.next = 17;
	            break;

	          case 14:
	            _context.prev = 14;
	            _context.t0 = _context["catch"](2);

	            _iterator.e(_context.t0);

	          case 17:
	            _context.prev = 17;

	            _iterator.f();

	            return _context.finish(17);

	          case 20:
	          case "end":
	            return _context.stop();
	        }
	      }
	    }, ancestors, null, [[2, 14, 17, 20]]);
	  }),

	  /**
	   * Get the child of a node at a specific index.
	   */
	  child: function child(root, index) {
	    if (Text.isText(root)) {
	      throw new Error("Cannot get the child of a text node: ".concat(JSON.stringify(root)));
	    }

	    var c = root.children[index];

	    if (c == null) {
	      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(JSON.stringify(root)));
	    }

	    return c;
	  },

	  /**
	   * Iterate over the children of a node at a specific path.
	   */
	  children: /*#__PURE__*/regenerator.mark(function children(root, path) {
	    var options,
	        _options$reverse,
	        reverse,
	        ancestor,
	        children,
	        index,
	        child,
	        childPath,
	        _args2 = arguments;

	    return regenerator.wrap(function children$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
	            _options$reverse = options.reverse, reverse = _options$reverse === void 0 ? false : _options$reverse;
	            ancestor = Node.ancestor(root, path);
	            children = ancestor.children;
	            index = reverse ? children.length - 1 : 0;

	          case 5:
	            if (!(reverse ? index >= 0 : index < children.length)) {
	              _context2.next = 13;
	              break;
	            }

	            child = Node.child(ancestor, index);
	            childPath = path.concat(index);
	            _context2.next = 10;
	            return [child, childPath];

	          case 10:
	            index = reverse ? index - 1 : index + 1;
	            _context2.next = 5;
	            break;

	          case 13:
	          case "end":
	            return _context2.stop();
	        }
	      }
	    }, children);
	  }),

	  /**
	   * Get an entry for the common ancesetor node of two paths.
	   */
	  common: function common(root, path, another) {
	    var p = Path.common(path, another);
	    var n = Node.get(root, p);
	    return [n, p];
	  },

	  /**
	   * Get the node at a specific path, asserting that it's a descendant node.
	   */
	  descendant: function descendant(root, path) {
	    var node = Node.get(root, path);

	    if (Editor.isEditor(node)) {
	      throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(node));
	    }

	    return node;
	  },

	  /**
	   * Return a generator of all the descendant node entries inside a root node.
	   */
	  descendants: /*#__PURE__*/regenerator.mark(function descendants(root) {
	    var options,
	        _iterator2,
	        _step2,
	        _step2$value,
	        node,
	        path,
	        _args3 = arguments;

	    return regenerator.wrap(function descendants$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
	            _iterator2 = _createForOfIteratorHelper$2(Node.nodes(root, options));
	            _context3.prev = 2;

	            _iterator2.s();

	          case 4:
	            if ((_step2 = _iterator2.n()).done) {
	              _context3.next = 11;
	              break;
	            }

	            _step2$value = _slicedToArray(_step2.value, 2), node = _step2$value[0], path = _step2$value[1];

	            if (!(path.length !== 0)) {
	              _context3.next = 9;
	              break;
	            }

	            _context3.next = 9;
	            return [node, path];

	          case 9:
	            _context3.next = 4;
	            break;

	          case 11:
	            _context3.next = 16;
	            break;

	          case 13:
	            _context3.prev = 13;
	            _context3.t0 = _context3["catch"](2);

	            _iterator2.e(_context3.t0);

	          case 16:
	            _context3.prev = 16;

	            _iterator2.f();

	            return _context3.finish(16);

	          case 19:
	          case "end":
	            return _context3.stop();
	        }
	      }
	    }, descendants, null, [[2, 13, 16, 19]]);
	  }),

	  /**
	   * Return a generator of all the element nodes inside a root node. Each iteration
	   * will return an `ElementEntry` tuple consisting of `[Element, Path]`. If the
	   * root node is an element it will be included in the iteration as well.
	   */
	  elements: /*#__PURE__*/regenerator.mark(function elements(root) {
	    var options,
	        _iterator3,
	        _step3,
	        _step3$value,
	        node,
	        path,
	        _args4 = arguments;

	    return regenerator.wrap(function elements$(_context4) {
	      while (1) {
	        switch (_context4.prev = _context4.next) {
	          case 0:
	            options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
	            _iterator3 = _createForOfIteratorHelper$2(Node.nodes(root, options));
	            _context4.prev = 2;

	            _iterator3.s();

	          case 4:
	            if ((_step3 = _iterator3.n()).done) {
	              _context4.next = 11;
	              break;
	            }

	            _step3$value = _slicedToArray(_step3.value, 2), node = _step3$value[0], path = _step3$value[1];

	            if (!Element.isElement(node)) {
	              _context4.next = 9;
	              break;
	            }

	            _context4.next = 9;
	            return [node, path];

	          case 9:
	            _context4.next = 4;
	            break;

	          case 11:
	            _context4.next = 16;
	            break;

	          case 13:
	            _context4.prev = 13;
	            _context4.t0 = _context4["catch"](2);

	            _iterator3.e(_context4.t0);

	          case 16:
	            _context4.prev = 16;

	            _iterator3.f();

	            return _context4.finish(16);

	          case 19:
	          case "end":
	            return _context4.stop();
	        }
	      }
	    }, elements, null, [[2, 13, 16, 19]]);
	  }),

	  /**
	   * Extract props from a Node.
	   */
	  extractProps: function extractProps(node) {
	    if (Element.isAncestor(node)) {
	      var children = node.children,
	          properties = _objectWithoutProperties(node, ["children"]);

	      return properties;
	    } else {
	      var text = node.text,
	          _properties = _objectWithoutProperties(node, ["text"]);

	      return _properties;
	    }
	  },

	  /**
	   * Get the first node entry in a root node from a path.
	   */
	  first: function first(root, path) {
	    var p = path.slice();
	    var n = Node.get(root, p);

	    while (n) {
	      if (Text.isText(n) || n.children.length === 0) {
	        break;
	      } else {
	        n = n.children[0];
	        p.push(0);
	      }
	    }

	    return [n, p];
	  },

	  /**
	   * Get the sliced fragment represented by a range inside a root node.
	   */
	  fragment: function fragment(root, range) {
	    if (Text.isText(root)) {
	      throw new Error("Cannot get a fragment starting from a root text node: ".concat(JSON.stringify(root)));
	    }

	    var newRoot = an({
	      children: root.children
	    }, function (r) {
	      var _Range$edges = Range.edges(range),
	          _Range$edges2 = _slicedToArray(_Range$edges, 2),
	          start = _Range$edges2[0],
	          end = _Range$edges2[1];

	      var nodeEntries = Node.nodes(r, {
	        reverse: true,
	        pass: function pass(_ref) {
	          var _ref2 = _slicedToArray(_ref, 2),
	              path = _ref2[1];

	          return !Range.includes(range, path);
	        }
	      });

	      var _iterator4 = _createForOfIteratorHelper$2(nodeEntries),
	          _step4;

	      try {
	        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
	          var _step4$value = _slicedToArray(_step4.value, 2),
	              path = _step4$value[1];

	          if (!Range.includes(range, path)) {
	            var parent = Node.parent(r, path);
	            var index = path[path.length - 1];
	            parent.children.splice(index, 1);
	          }

	          if (Path.equals(path, end.path)) {
	            var leaf = Node.leaf(r, path);
	            leaf.text = leaf.text.slice(0, end.offset);
	          }

	          if (Path.equals(path, start.path)) {
	            var _leaf = Node.leaf(r, path);

	            _leaf.text = _leaf.text.slice(start.offset);
	          }
	        }
	      } catch (err) {
	        _iterator4.e(err);
	      } finally {
	        _iterator4.f();
	      }

	      if (Editor.isEditor(r)) {
	        r.selection = null;
	      }
	    });
	    return newRoot.children;
	  },

	  /**
	   * Get the descendant node referred to by a specific path. If the path is an
	   * empty array, it refers to the root node itself.
	   */
	  get: function get(root, path) {
	    var node = root;

	    for (var i = 0; i < path.length; i++) {
	      var p = path[i];

	      if (Text.isText(node) || !node.children[p]) {
	        throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(JSON.stringify(root)));
	      }

	      node = node.children[p];
	    }

	    return node;
	  },

	  /**
	   * Check if a descendant node exists at a specific path.
	   */
	  has: function has(root, path) {
	    var node = root;

	    for (var i = 0; i < path.length; i++) {
	      var p = path[i];

	      if (Text.isText(node) || !node.children[p]) {
	        return false;
	      }

	      node = node.children[p];
	    }

	    return true;
	  },

	  /**
	   * Check if a value implements the `Node` interface.
	   */
	  isNode: function isNode(value) {
	    return Text.isText(value) || Element.isElement(value) || Editor.isEditor(value);
	  },

	  /**
	   * Check if a value is a list of `Node` objects.
	   */
	  isNodeList: function isNodeList(value) {
	    if (!Array.isArray(value)) {
	      return false;
	    }

	    var cachedResult = IS_NODE_LIST_CACHE.get(value);

	    if (cachedResult !== undefined) {
	      return cachedResult;
	    }

	    var isNodeList = value.every(function (val) {
	      return Node.isNode(val);
	    });
	    IS_NODE_LIST_CACHE.set(value, isNodeList);
	    return isNodeList;
	  },

	  /**
	   * Get the last node entry in a root node from a path.
	   */
	  last: function last(root, path) {
	    var p = path.slice();
	    var n = Node.get(root, p);

	    while (n) {
	      if (Text.isText(n) || n.children.length === 0) {
	        break;
	      } else {
	        var i = n.children.length - 1;
	        n = n.children[i];
	        p.push(i);
	      }
	    }

	    return [n, p];
	  },

	  /**
	   * Get the node at a specific path, ensuring it's a leaf text node.
	   */
	  leaf: function leaf(root, path) {
	    var node = Node.get(root, path);

	    if (!Text.isText(node)) {
	      throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(node));
	    }

	    return node;
	  },

	  /**
	   * Return a generator of the in a branch of the tree, from a specific path.
	   *
	   * By default the order is top-down, from lowest to highest node in the tree,
	   * but you can pass the `reverse: true` option to go bottom-up.
	   */
	  levels: /*#__PURE__*/regenerator.mark(function levels(root, path) {
	    var options,
	        _iterator5,
	        _step5,
	        p,
	        n,
	        _args5 = arguments;

	    return regenerator.wrap(function levels$(_context5) {
	      while (1) {
	        switch (_context5.prev = _context5.next) {
	          case 0:
	            options = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
	            _iterator5 = _createForOfIteratorHelper$2(Path.levels(path, options));
	            _context5.prev = 2;

	            _iterator5.s();

	          case 4:
	            if ((_step5 = _iterator5.n()).done) {
	              _context5.next = 11;
	              break;
	            }

	            p = _step5.value;
	            n = Node.get(root, p);
	            _context5.next = 9;
	            return [n, p];

	          case 9:
	            _context5.next = 4;
	            break;

	          case 11:
	            _context5.next = 16;
	            break;

	          case 13:
	            _context5.prev = 13;
	            _context5.t0 = _context5["catch"](2);

	            _iterator5.e(_context5.t0);

	          case 16:
	            _context5.prev = 16;

	            _iterator5.f();

	            return _context5.finish(16);

	          case 19:
	          case "end":
	            return _context5.stop();
	        }
	      }
	    }, levels, null, [[2, 13, 16, 19]]);
	  }),

	  /**
	   * Check if a node matches a set of props.
	   */
	  matches: function matches(node, props) {
	    return Element.isElement(node) && Element.isElementProps(props) && Element.matches(node, props) || Text.isText(node) && Text.isTextProps(props) && Text.matches(node, props);
	  },

	  /**
	   * Return a generator of all the node entries of a root node. Each entry is
	   * returned as a `[Node, Path]` tuple, with the path referring to the node's
	   * position inside the root node.
	   */
	  nodes: /*#__PURE__*/regenerator.mark(function nodes(root) {
	    var options,
	        pass,
	        _options$reverse2,
	        reverse,
	        _options$from,
	        from,
	        to,
	        visited,
	        p,
	        n,
	        nextIndex,
	        newPath,
	        _newPath,
	        _args6 = arguments;

	    return regenerator.wrap(function nodes$(_context6) {
	      while (1) {
	        switch (_context6.prev = _context6.next) {
	          case 0:
	            options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
	            pass = options.pass, _options$reverse2 = options.reverse, reverse = _options$reverse2 === void 0 ? false : _options$reverse2;
	            _options$from = options.from, from = _options$from === void 0 ? [] : _options$from, to = options.to;
	            visited = new Set();
	            p = [];
	            n = root;

	          case 6:

	            if (!(to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to)))) {
	              _context6.next = 9;
	              break;
	            }

	            return _context6.abrupt("break", 37);

	          case 9:
	            if (visited.has(n)) {
	              _context6.next = 12;
	              break;
	            }

	            _context6.next = 12;
	            return [n, p];

	          case 12:
	            if (!(!visited.has(n) && !Text.isText(n) && n.children.length !== 0 && (pass == null || pass([n, p]) === false))) {
	              _context6.next = 19;
	              break;
	            }

	            visited.add(n);
	            nextIndex = reverse ? n.children.length - 1 : 0;

	            if (Path.isAncestor(p, from)) {
	              nextIndex = from[p.length];
	            }

	            p = p.concat(nextIndex);
	            n = Node.get(root, p);
	            return _context6.abrupt("continue", 6);

	          case 19:
	            if (!(p.length === 0)) {
	              _context6.next = 21;
	              break;
	            }

	            return _context6.abrupt("break", 37);

	          case 21:
	            if (reverse) {
	              _context6.next = 27;
	              break;
	            }

	            newPath = Path.next(p);

	            if (!Node.has(root, newPath)) {
	              _context6.next = 27;
	              break;
	            }

	            p = newPath;
	            n = Node.get(root, p);
	            return _context6.abrupt("continue", 6);

	          case 27:
	            if (!(reverse && p[p.length - 1] !== 0)) {
	              _context6.next = 32;
	              break;
	            }

	            _newPath = Path.previous(p);
	            p = _newPath;
	            n = Node.get(root, p);
	            return _context6.abrupt("continue", 6);

	          case 32:
	            // Otherwise we're going upward...
	            p = Path.parent(p);
	            n = Node.get(root, p);
	            visited.add(n);
	            _context6.next = 6;
	            break;

	          case 37:
	          case "end":
	            return _context6.stop();
	        }
	      }
	    }, nodes);
	  }),

	  /**
	   * Get the parent of a node at a specific path.
	   */
	  parent: function parent(root, path) {
	    var parentPath = Path.parent(path);
	    var p = Node.get(root, parentPath);

	    if (Text.isText(p)) {
	      throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
	    }

	    return p;
	  },

	  /**
	   * Get the concatenated text string of a node's content.
	   *
	   * Note that this will not include spaces or line breaks between block nodes.
	   * It is not a user-facing string, but a string for performing offset-related
	   * computations for a node.
	   */
	  string: function string(node) {
	    if (Text.isText(node)) {
	      return node.text;
	    } else {
	      return node.children.map(Node.string).join('');
	    }
	  },

	  /**
	   * Return a generator of all leaf text nodes in a root node.
	   */
	  texts: /*#__PURE__*/regenerator.mark(function texts(root) {
	    var options,
	        _iterator6,
	        _step6,
	        _step6$value,
	        node,
	        path,
	        _args7 = arguments;

	    return regenerator.wrap(function texts$(_context7) {
	      while (1) {
	        switch (_context7.prev = _context7.next) {
	          case 0:
	            options = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
	            _iterator6 = _createForOfIteratorHelper$2(Node.nodes(root, options));
	            _context7.prev = 2;

	            _iterator6.s();

	          case 4:
	            if ((_step6 = _iterator6.n()).done) {
	              _context7.next = 11;
	              break;
	            }

	            _step6$value = _slicedToArray(_step6.value, 2), node = _step6$value[0], path = _step6$value[1];

	            if (!Text.isText(node)) {
	              _context7.next = 9;
	              break;
	            }

	            _context7.next = 9;
	            return [node, path];

	          case 9:
	            _context7.next = 4;
	            break;

	          case 11:
	            _context7.next = 16;
	            break;

	          case 13:
	            _context7.prev = 13;
	            _context7.t0 = _context7["catch"](2);

	            _iterator6.e(_context7.t0);

	          case 16:
	            _context7.prev = 16;

	            _iterator6.f();

	            return _context7.finish(16);

	          case 19:
	          case "end":
	            return _context7.stop();
	        }
	      }
	    }, texts, null, [[2, 13, 16, 19]]);
	  })
	};

	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var Operation = {
	  /**
	   * Check of a value is a `NodeOperation` object.
	   */
	  isNodeOperation: function isNodeOperation(value) {
	    return Operation.isOperation(value) && value.type.endsWith('_node');
	  },

	  /**
	   * Check of a value is an `Operation` object.
	   */
	  isOperation: function isOperation(value) {
	    if (!isPlainObject(value)) {
	      return false;
	    }

	    switch (value.type) {
	      case 'insert_node':
	        return Path.isPath(value.path) && Node.isNode(value.node);

	      case 'insert_text':
	        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

	      case 'merge_node':
	        return typeof value.position === 'number' && Path.isPath(value.path) && isPlainObject(value.properties);

	      case 'move_node':
	        return Path.isPath(value.path) && Path.isPath(value.newPath);

	      case 'remove_node':
	        return Path.isPath(value.path) && Node.isNode(value.node);

	      case 'remove_text':
	        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

	      case 'set_node':
	        return Path.isPath(value.path) && isPlainObject(value.properties) && isPlainObject(value.newProperties);

	      case 'set_selection':
	        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || isPlainObject(value.properties) && isPlainObject(value.newProperties);

	      case 'split_node':
	        return Path.isPath(value.path) && typeof value.position === 'number' && isPlainObject(value.properties);

	      default:
	        return false;
	    }
	  },

	  /**
	   * Check if a value is a list of `Operation` objects.
	   */
	  isOperationList: function isOperationList(value) {
	    return Array.isArray(value) && value.every(function (val) {
	      return Operation.isOperation(val);
	    });
	  },

	  /**
	   * Check of a value is a `SelectionOperation` object.
	   */
	  isSelectionOperation: function isSelectionOperation(value) {
	    return Operation.isOperation(value) && value.type.endsWith('_selection');
	  },

	  /**
	   * Check of a value is a `TextOperation` object.
	   */
	  isTextOperation: function isTextOperation(value) {
	    return Operation.isOperation(value) && value.type.endsWith('_text');
	  },

	  /**
	   * Invert an operation, returning a new operation that will exactly undo the
	   * original when applied.
	   */
	  inverse: function inverse(op) {
	    switch (op.type) {
	      case 'insert_node':
	        {
	          return _objectSpread$2(_objectSpread$2({}, op), {}, {
	            type: 'remove_node'
	          });
	        }

	      case 'insert_text':
	        {
	          return _objectSpread$2(_objectSpread$2({}, op), {}, {
	            type: 'remove_text'
	          });
	        }

	      case 'merge_node':
	        {
	          return _objectSpread$2(_objectSpread$2({}, op), {}, {
	            type: 'split_node',
	            path: Path.previous(op.path)
	          });
	        }

	      case 'move_node':
	        {
	          var newPath = op.newPath,
	              path = op.path; // PERF: in this case the move operation is a no-op anyways.

	          if (Path.equals(newPath, path)) {
	            return op;
	          } // If the move happens completely within a single parent the path and
	          // newPath are stable with respect to each other.


	          if (Path.isSibling(path, newPath)) {
	            return _objectSpread$2(_objectSpread$2({}, op), {}, {
	              path: newPath,
	              newPath: path
	            });
	          } // If the move does not happen within a single parent it is possible
	          // for the move to impact the true path to the location where the node
	          // was removed from and where it was inserted. We have to adjust for this
	          // and find the original path. We can accomplish this (only in non-sibling)
	          // moves by looking at the impact of the move operation on the node
	          // after the original move path.


	          var inversePath = Path.transform(path, op);
	          var inverseNewPath = Path.transform(Path.next(path), op);
	          return _objectSpread$2(_objectSpread$2({}, op), {}, {
	            path: inversePath,
	            newPath: inverseNewPath
	          });
	        }

	      case 'remove_node':
	        {
	          return _objectSpread$2(_objectSpread$2({}, op), {}, {
	            type: 'insert_node'
	          });
	        }

	      case 'remove_text':
	        {
	          return _objectSpread$2(_objectSpread$2({}, op), {}, {
	            type: 'insert_text'
	          });
	        }

	      case 'set_node':
	        {
	          var properties = op.properties,
	              newProperties = op.newProperties;
	          return _objectSpread$2(_objectSpread$2({}, op), {}, {
	            properties: newProperties,
	            newProperties: properties
	          });
	        }

	      case 'set_selection':
	        {
	          var _properties = op.properties,
	              _newProperties = op.newProperties;

	          if (_properties == null) {
	            return _objectSpread$2(_objectSpread$2({}, op), {}, {
	              properties: _newProperties,
	              newProperties: null
	            });
	          } else if (_newProperties == null) {
	            return _objectSpread$2(_objectSpread$2({}, op), {}, {
	              properties: null,
	              newProperties: _properties
	            });
	          } else {
	            return _objectSpread$2(_objectSpread$2({}, op), {}, {
	              properties: _newProperties,
	              newProperties: _properties
	            });
	          }
	        }

	      case 'split_node':
	        {
	          return _objectSpread$2(_objectSpread$2({}, op), {}, {
	            type: 'merge_node',
	            path: Path.next(op.path)
	          });
	        }
	    }
	  }
	};

	var Path = {
	  /**
	   * Get a list of ancestor paths for a given path.
	   *
	   * The paths are sorted from deepest to shallowest ancestor. However, if the
	   * `reverse: true` option is passed, they are reversed.
	   */
	  ancestors: function ancestors(path) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$reverse = options.reverse,
	        reverse = _options$reverse === void 0 ? false : _options$reverse;
	    var paths = Path.levels(path, options);

	    if (reverse) {
	      paths = paths.slice(1);
	    } else {
	      paths = paths.slice(0, -1);
	    }

	    return paths;
	  },

	  /**
	   * Get the common ancestor path of two paths.
	   */
	  common: function common(path, another) {
	    var common = [];

	    for (var i = 0; i < path.length && i < another.length; i++) {
	      var av = path[i];
	      var bv = another[i];

	      if (av !== bv) {
	        break;
	      }

	      common.push(av);
	    }

	    return common;
	  },

	  /**
	   * Compare a path to another, returning an integer indicating whether the path
	   * was before, at, or after the other.
	   *
	   * Note: Two paths of unequal length can still receive a `0` result if one is
	   * directly above or below the other. If you want exact matching, use
	   * [[Path.equals]] instead.
	   */
	  compare: function compare(path, another) {
	    var min = Math.min(path.length, another.length);

	    for (var i = 0; i < min; i++) {
	      if (path[i] < another[i]) return -1;
	      if (path[i] > another[i]) return 1;
	    }

	    return 0;
	  },

	  /**
	   * Check if a path ends after one of the indexes in another.
	   */
	  endsAfter: function endsAfter(path, another) {
	    var i = path.length - 1;
	    var as = path.slice(0, i);
	    var bs = another.slice(0, i);
	    var av = path[i];
	    var bv = another[i];
	    return Path.equals(as, bs) && av > bv;
	  },

	  /**
	   * Check if a path ends at one of the indexes in another.
	   */
	  endsAt: function endsAt(path, another) {
	    var i = path.length;
	    var as = path.slice(0, i);
	    var bs = another.slice(0, i);
	    return Path.equals(as, bs);
	  },

	  /**
	   * Check if a path ends before one of the indexes in another.
	   */
	  endsBefore: function endsBefore(path, another) {
	    var i = path.length - 1;
	    var as = path.slice(0, i);
	    var bs = another.slice(0, i);
	    var av = path[i];
	    var bv = another[i];
	    return Path.equals(as, bs) && av < bv;
	  },

	  /**
	   * Check if a path is exactly equal to another.
	   */
	  equals: function equals(path, another) {
	    return path.length === another.length && path.every(function (n, i) {
	      return n === another[i];
	    });
	  },

	  /**
	   * Check if the path of previous sibling node exists
	   */
	  hasPrevious: function hasPrevious(path) {
	    return path[path.length - 1] > 0;
	  },

	  /**
	   * Check if a path is after another.
	   */
	  isAfter: function isAfter(path, another) {
	    return Path.compare(path, another) === 1;
	  },

	  /**
	   * Check if a path is an ancestor of another.
	   */
	  isAncestor: function isAncestor(path, another) {
	    return path.length < another.length && Path.compare(path, another) === 0;
	  },

	  /**
	   * Check if a path is before another.
	   */
	  isBefore: function isBefore(path, another) {
	    return Path.compare(path, another) === -1;
	  },

	  /**
	   * Check if a path is a child of another.
	   */
	  isChild: function isChild(path, another) {
	    return path.length === another.length + 1 && Path.compare(path, another) === 0;
	  },

	  /**
	   * Check if a path is equal to or an ancestor of another.
	   */
	  isCommon: function isCommon(path, another) {
	    return path.length <= another.length && Path.compare(path, another) === 0;
	  },

	  /**
	   * Check if a path is a descendant of another.
	   */
	  isDescendant: function isDescendant(path, another) {
	    return path.length > another.length && Path.compare(path, another) === 0;
	  },

	  /**
	   * Check if a path is the parent of another.
	   */
	  isParent: function isParent(path, another) {
	    return path.length + 1 === another.length && Path.compare(path, another) === 0;
	  },

	  /**
	   * Check is a value implements the `Path` interface.
	   */
	  isPath: function isPath(value) {
	    return Array.isArray(value) && (value.length === 0 || typeof value[0] === 'number');
	  },

	  /**
	   * Check if a path is a sibling of another.
	   */
	  isSibling: function isSibling(path, another) {
	    if (path.length !== another.length) {
	      return false;
	    }

	    var as = path.slice(0, -1);
	    var bs = another.slice(0, -1);
	    var al = path[path.length - 1];
	    var bl = another[another.length - 1];
	    return al !== bl && Path.equals(as, bs);
	  },

	  /**
	   * Get a list of paths at every level down to a path. Note: this is the same
	   * as `Path.ancestors`, but including the path itself.
	   *
	   * The paths are sorted from shallowest to deepest. However, if the `reverse:
	   * true` option is passed, they are reversed.
	   */
	  levels: function levels(path) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$reverse2 = options.reverse,
	        reverse = _options$reverse2 === void 0 ? false : _options$reverse2;
	    var list = [];

	    for (var i = 0; i <= path.length; i++) {
	      list.push(path.slice(0, i));
	    }

	    if (reverse) {
	      list.reverse();
	    }

	    return list;
	  },

	  /**
	   * Given a path, get the path to the next sibling node.
	   */
	  next: function next(path) {
	    if (path.length === 0) {
	      throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
	    }

	    var last = path[path.length - 1];
	    return path.slice(0, -1).concat(last + 1);
	  },

	  /**
	   * Given a path, return a new path referring to the parent node above it.
	   */
	  parent: function parent(path) {
	    if (path.length === 0) {
	      throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
	    }

	    return path.slice(0, -1);
	  },

	  /**
	   * Given a path, get the path to the previous sibling node.
	   */
	  previous: function previous(path) {
	    if (path.length === 0) {
	      throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
	    }

	    var last = path[path.length - 1];

	    if (last <= 0) {
	      throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
	    }

	    return path.slice(0, -1).concat(last - 1);
	  },

	  /**
	   * Get a path relative to an ancestor.
	   */
	  relative: function relative(path, ancestor) {
	    if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
	      throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
	    }

	    return path.slice(ancestor.length);
	  },

	  /**
	   * Transform a path by an operation.
	   */
	  transform: function transform(path, operation) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    return an(path, function (p) {
	      var _options$affinity = options.affinity,
	          affinity = _options$affinity === void 0 ? 'forward' : _options$affinity; // PERF: Exit early if the operation is guaranteed not to have an effect.

	      if (path.length === 0) {
	        return;
	      }

	      switch (operation.type) {
	        case 'insert_node':
	          {
	            var op = operation.path;

	            if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
	              p[op.length - 1] += 1;
	            }

	            break;
	          }

	        case 'remove_node':
	          {
	            var _op = operation.path;

	            if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
	              return null;
	            } else if (Path.endsBefore(_op, p)) {
	              p[_op.length - 1] -= 1;
	            }

	            break;
	          }

	        case 'merge_node':
	          {
	            var _op2 = operation.path,
	                position = operation.position;

	            if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
	              p[_op2.length - 1] -= 1;
	            } else if (Path.isAncestor(_op2, p)) {
	              p[_op2.length - 1] -= 1;
	              p[_op2.length] += position;
	            }

	            break;
	          }

	        case 'split_node':
	          {
	            var _op3 = operation.path,
	                _position = operation.position;

	            if (Path.equals(_op3, p)) {
	              if (affinity === 'forward') {
	                p[p.length - 1] += 1;
	              } else if (affinity === 'backward') ; else {
	                return null;
	              }
	            } else if (Path.endsBefore(_op3, p)) {
	              p[_op3.length - 1] += 1;
	            } else if (Path.isAncestor(_op3, p) && path[_op3.length] >= _position) {
	              p[_op3.length - 1] += 1;
	              p[_op3.length] -= _position;
	            }

	            break;
	          }

	        case 'move_node':
	          {
	            var _op4 = operation.path,
	                onp = operation.newPath; // If the old and new path are the same, it's a no-op.

	            if (Path.equals(_op4, onp)) {
	              return;
	            }

	            if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
	              var copy = onp.slice();

	              if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
	                copy[_op4.length - 1] -= 1;
	              }

	              return copy.concat(p.slice(_op4.length));
	            } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p) || Path.equals(onp, p))) {
	              if (Path.endsBefore(_op4, p)) {
	                p[_op4.length - 1] -= 1;
	              } else {
	                p[_op4.length - 1] += 1;
	              }
	            } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
	              if (Path.endsBefore(_op4, p)) {
	                p[_op4.length - 1] -= 1;
	              }

	              p[onp.length - 1] += 1;
	            } else if (Path.endsBefore(_op4, p)) {
	              if (Path.equals(onp, p)) {
	                p[onp.length - 1] += 1;
	              }

	              p[_op4.length - 1] -= 1;
	            }

	            break;
	          }
	      }
	    });
	  }
	};

	var PathRef = {
	  /**
	   * Transform the path ref's current value by an operation.
	   */
	  transform: function transform(ref, op) {
	    var current = ref.current,
	        affinity = ref.affinity;

	    if (current == null) {
	      return;
	    }

	    var path = Path.transform(current, op, {
	      affinity: affinity
	    });
	    ref.current = path;

	    if (path == null) {
	      ref.unref();
	    }
	  }
	};

	function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var Point = {
	  /**
	   * Compare a point to another, returning an integer indicating whether the
	   * point was before, at, or after the other.
	   */
	  compare: function compare(point, another) {
	    var result = Path.compare(point.path, another.path);

	    if (result === 0) {
	      if (point.offset < another.offset) return -1;
	      if (point.offset > another.offset) return 1;
	      return 0;
	    }

	    return result;
	  },

	  /**
	   * Check if a point is after another.
	   */
	  isAfter: function isAfter(point, another) {
	    return Point.compare(point, another) === 1;
	  },

	  /**
	   * Check if a point is before another.
	   */
	  isBefore: function isBefore(point, another) {
	    return Point.compare(point, another) === -1;
	  },

	  /**
	   * Check if a point is exactly equal to another.
	   */
	  equals: function equals(point, another) {
	    // PERF: ensure the offsets are equal first since they are cheaper to check.
	    return point.offset === another.offset && Path.equals(point.path, another.path);
	  },

	  /**
	   * Check if a value implements the `Point` interface.
	   */
	  isPoint: function isPoint(value) {
	    return isPlainObject(value) && typeof value.offset === 'number' && Path.isPath(value.path);
	  },

	  /**
	   * Transform a point by an operation.
	   */
	  transform: function transform(point, op) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    return an(point, function (p) {
	      var _options$affinity = options.affinity,
	          affinity = _options$affinity === void 0 ? 'forward' : _options$affinity;
	      var path = p.path,
	          offset = p.offset;

	      switch (op.type) {
	        case 'insert_node':
	        case 'move_node':
	          {
	            p.path = Path.transform(path, op, options);
	            break;
	          }

	        case 'insert_text':
	          {
	            if (Path.equals(op.path, path) && op.offset <= offset) {
	              p.offset += op.text.length;
	            }

	            break;
	          }

	        case 'merge_node':
	          {
	            if (Path.equals(op.path, path)) {
	              p.offset += op.position;
	            }

	            p.path = Path.transform(path, op, options);
	            break;
	          }

	        case 'remove_text':
	          {
	            if (Path.equals(op.path, path) && op.offset <= offset) {
	              p.offset -= Math.min(offset - op.offset, op.text.length);
	            }

	            break;
	          }

	        case 'remove_node':
	          {
	            if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
	              return null;
	            }

	            p.path = Path.transform(path, op, options);
	            break;
	          }

	        case 'split_node':
	          {
	            if (Path.equals(op.path, path)) {
	              if (op.position === offset && affinity == null) {
	                return null;
	              } else if (op.position < offset || op.position === offset && affinity === 'forward') {
	                p.offset -= op.position;
	                p.path = Path.transform(path, op, _objectSpread$3(_objectSpread$3({}, options), {}, {
	                  affinity: 'forward'
	                }));
	              }
	            } else {
	              p.path = Path.transform(path, op, options);
	            }

	            break;
	          }
	      }
	    });
	  }
	};

	var PointRef = {
	  /**
	   * Transform the point ref's current value by an operation.
	   */
	  transform: function transform(ref, op) {
	    var current = ref.current,
	        affinity = ref.affinity;

	    if (current == null) {
	      return;
	    }

	    var point = Point.transform(current, op, {
	      affinity: affinity
	    });
	    ref.current = point;

	    if (point == null) {
	      ref.unref();
	    }
	  }
	};

	function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var Range = {
	  /**
	   * Get the start and end points of a range, in the order in which they appear
	   * in the document.
	   */
	  edges: function edges(range) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$reverse = options.reverse,
	        reverse = _options$reverse === void 0 ? false : _options$reverse;
	    var anchor = range.anchor,
	        focus = range.focus;
	    return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
	  },

	  /**
	   * Get the end point of a range.
	   */
	  end: function end(range) {
	    var _Range$edges = Range.edges(range),
	        _Range$edges2 = _slicedToArray(_Range$edges, 2),
	        end = _Range$edges2[1];

	    return end;
	  },

	  /**
	   * Check if a range is exactly equal to another.
	   */
	  equals: function equals(range, another) {
	    return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
	  },

	  /**
	   * Check if a range includes a path, a point or part of another range.
	   */
	  includes: function includes(range, target) {
	    if (Range.isRange(target)) {
	      if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
	        return true;
	      }

	      var _Range$edges3 = Range.edges(range),
	          _Range$edges4 = _slicedToArray(_Range$edges3, 2),
	          rs = _Range$edges4[0],
	          re = _Range$edges4[1];

	      var _Range$edges5 = Range.edges(target),
	          _Range$edges6 = _slicedToArray(_Range$edges5, 2),
	          ts = _Range$edges6[0],
	          te = _Range$edges6[1];

	      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
	    }

	    var _Range$edges7 = Range.edges(range),
	        _Range$edges8 = _slicedToArray(_Range$edges7, 2),
	        start = _Range$edges8[0],
	        end = _Range$edges8[1];

	    var isAfterStart = false;
	    var isBeforeEnd = false;

	    if (Point.isPoint(target)) {
	      isAfterStart = Point.compare(target, start) >= 0;
	      isBeforeEnd = Point.compare(target, end) <= 0;
	    } else {
	      isAfterStart = Path.compare(target, start.path) >= 0;
	      isBeforeEnd = Path.compare(target, end.path) <= 0;
	    }

	    return isAfterStart && isBeforeEnd;
	  },

	  /**
	   * Get the intersection of a range with another.
	   */
	  intersection: function intersection(range, another) {
	    var anchor = range.anchor,
	        focus = range.focus,
	        rest = _objectWithoutProperties(range, ["anchor", "focus"]);

	    var _Range$edges9 = Range.edges(range),
	        _Range$edges10 = _slicedToArray(_Range$edges9, 2),
	        s1 = _Range$edges10[0],
	        e1 = _Range$edges10[1];

	    var _Range$edges11 = Range.edges(another),
	        _Range$edges12 = _slicedToArray(_Range$edges11, 2),
	        s2 = _Range$edges12[0],
	        e2 = _Range$edges12[1];

	    var start = Point.isBefore(s1, s2) ? s2 : s1;
	    var end = Point.isBefore(e1, e2) ? e1 : e2;

	    if (Point.isBefore(end, start)) {
	      return null;
	    } else {
	      return _objectSpread$4({
	        anchor: start,
	        focus: end
	      }, rest);
	    }
	  },

	  /**
	   * Check if a range is backward, meaning that its anchor point appears in the
	   * document _after_ its focus point.
	   */
	  isBackward: function isBackward(range) {
	    var anchor = range.anchor,
	        focus = range.focus;
	    return Point.isAfter(anchor, focus);
	  },

	  /**
	   * Check if a range is collapsed, meaning that both its anchor and focus
	   * points refer to the exact same position in the document.
	   */
	  isCollapsed: function isCollapsed(range) {
	    var anchor = range.anchor,
	        focus = range.focus;
	    return Point.equals(anchor, focus);
	  },

	  /**
	   * Check if a range is expanded.
	   *
	   * This is the opposite of [[Range.isCollapsed]] and is provided for legibility.
	   */
	  isExpanded: function isExpanded(range) {
	    return !Range.isCollapsed(range);
	  },

	  /**
	   * Check if a range is forward.
	   *
	   * This is the opposite of [[Range.isBackward]] and is provided for legibility.
	   */
	  isForward: function isForward(range) {
	    return !Range.isBackward(range);
	  },

	  /**
	   * Check if a value implements the [[Range]] interface.
	   */
	  isRange: function isRange(value) {
	    return isPlainObject(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
	  },

	  /**
	   * Iterate through all of the point entries in a range.
	   */
	  points: /*#__PURE__*/regenerator.mark(function points(range) {
	    return regenerator.wrap(function points$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.next = 2;
	            return [range.anchor, 'anchor'];

	          case 2:
	            _context.next = 4;
	            return [range.focus, 'focus'];

	          case 4:
	          case "end":
	            return _context.stop();
	        }
	      }
	    }, points);
	  }),

	  /**
	   * Get the start point of a range.
	   */
	  start: function start(range) {
	    var _Range$edges13 = Range.edges(range),
	        _Range$edges14 = _slicedToArray(_Range$edges13, 1),
	        start = _Range$edges14[0];

	    return start;
	  },

	  /**
	   * Transform a range by an operation.
	   */
	  transform: function transform(range, op) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var _options$affinity = options.affinity,
	        affinity = _options$affinity === void 0 ? 'inward' : _options$affinity;
	    var affinityAnchor;
	    var affinityFocus;

	    if (affinity === 'inward') {
	      if (Range.isForward(range)) {
	        affinityAnchor = 'forward';
	        affinityFocus = 'backward';
	      } else {
	        affinityAnchor = 'backward';
	        affinityFocus = 'forward';
	      }
	    } else if (affinity === 'outward') {
	      if (Range.isForward(range)) {
	        affinityAnchor = 'backward';
	        affinityFocus = 'forward';
	      } else {
	        affinityAnchor = 'forward';
	        affinityFocus = 'backward';
	      }
	    } else {
	      affinityAnchor = affinity;
	      affinityFocus = affinity;
	    }

	    return an(range, function (r) {
	      var anchor = Point.transform(r.anchor, op, {
	        affinity: affinityAnchor
	      });
	      var focus = Point.transform(r.focus, op, {
	        affinity: affinityFocus
	      });

	      if (!anchor || !focus) {
	        return null;
	      }

	      r.anchor = anchor;
	      r.focus = focus;
	    });
	  }
	};

	var RangeRef = {
	  /**
	   * Transform the range ref's current value by an operation.
	   */
	  transform: function transform(ref, op) {
	    var current = ref.current,
	        affinity = ref.affinity;

	    if (current == null) {
	      return;
	    }

	    var path = Range.transform(current, op, {
	      affinity: affinity
	    });
	    ref.current = path;

	    if (path == null) {
	      ref.unref();
	    }
	  }
	};

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new _ListCache;
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol$1 = _root.Symbol;

	var _Symbol = Symbol$1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

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
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

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
	function isObject$1(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject$1;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$2 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */
	var Map$1 = _getNative(_root, 'Map');

	var _Map = Map$1;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash,
	    'map': new (_Map || _ListCache),
	    'string': new _Hash
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;
	    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new _MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;

	var _Stack = Stack;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED$2);
	  return this;
	}

	var _setCacheAdd = setCacheAdd;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new _MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
	SetCache.prototype.has = _setCacheHas;

	var _SetCache = SetCache;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arraySome = arraySome;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!_arraySome(other, function(othValue, othIndex) {
	            if (!_cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var _equalArrays = equalArrays;

	/** Built-in value references. */
	var Uint8Array = _root.Uint8Array;

	var _Uint8Array = Uint8Array;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$1 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq_1(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = _mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
	      convert || (convert = _setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG$1;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	var _equalByTag = equalByTag;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

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

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
	  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
	    !propertyIsEnumerable$1.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse_1;

	module.exports = isBuffer;
	});

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var isLength_1 = isLength;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag$1 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$1 = '[object Set]',
	    stringTag$1 = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$1 = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
	typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
	typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag$1] =
	typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) &&
	    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$5.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           _isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$9.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1;

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$a.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
	      objProps = _getAllKeys(object),
	      objLength = objProps.length,
	      othProps = _getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$7.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var _equalObjects = equalObjects;

	/* Built-in method references that are verified to be native. */
	var DataView = _getNative(_root, 'DataView');

	var _DataView = DataView;

	/* Built-in method references that are verified to be native. */
	var Promise$1 = _getNative(_root, 'Promise');

	var _Promise = Promise$1;

	/* Built-in method references that are verified to be native. */
	var Set$1 = _getNative(_root, 'Set');

	var _Set = Set$1;

	/* Built-in method references that are verified to be native. */
	var WeakMap$1 = _getNative(_root, 'WeakMap');

	var _WeakMap = WeakMap$1;

	/** `Object#toString` result references. */
	var mapTag$2 = '[object Map]',
	    objectTag$1 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$2 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$2 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = _baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
	    (_Map && getTag(new _Map) != mapTag$2) ||
	    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
	    (_Set && getTag(new _Set) != setTag$2) ||
	    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
	  getTag = function(value) {
	    var result = _baseGetTag(value),
	        Ctor = result == objectTag$1 ? value.constructor : undefined,
	        ctorString = Ctor ? _toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$2;
	        case mapCtorString: return mapTag$2;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$2;
	        case weakMapCtorString: return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    objectTag$2 = '[object Object]';

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray_1(object),
	      othIsArr = isArray_1(other),
	      objTag = objIsArr ? arrayTag$1 : _getTag(object),
	      othTag = othIsArr ? arrayTag$1 : _getTag(other);

	  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
	  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

	  var objIsObj = objTag == objectTag$2,
	      othIsObj = othTag == objectTag$2,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer_1(object)) {
	    if (!isBuffer_1(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new _Stack);
	    return (objIsArr || isTypedArray_1(object))
	      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
	    var objIsWrapped = objIsObj && hasOwnProperty$8.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty$8.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new _Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new _Stack);
	  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	var _baseIsEqualDeep = baseIsEqualDeep;

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
	    return value !== value && other !== other;
	  }
	  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	var _baseIsEqual = baseIsEqual;

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return _baseIsEqual(value, other);
	}

	var isEqual_1 = isEqual;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap;

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	var _arrayEach = arrayEach;

	var defineProperty$1 = (function() {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty$1 = defineProperty$1;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty$1) {
	    _defineProperty$1(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$9.call(object, key) && eq_1(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignValue = assignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      _baseAssignValue(object, key, newValue);
	    } else {
	      _assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	var _copyObject = copyObject;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && _copyObject(source, keys_1(source), object);
	}

	var _baseAssign = baseAssign;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _nativeKeysIn = nativeKeysIn;

	/** Used for built-in method references. */
	var objectProto$d = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$d.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject_1(object)) {
	    return _nativeKeysIn(object);
	  }
	  var isProto = _isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$a.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeysIn = baseKeysIn;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn$1(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
	}

	var keysIn_1 = keysIn$1;

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && _copyObject(source, keysIn_1(source), object);
	}

	var _baseAssignIn = baseAssignIn;

	var _cloneBuffer = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;
	});

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	var _copyArray = copyArray;

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return _copyObject(source, _getSymbols(source), object);
	}

	var _copySymbols = copySymbols;

	/** Built-in value references. */
	var getPrototype = _overArg(Object.getPrototypeOf, Object);

	var _getPrototype = getPrototype;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
	  var result = [];
	  while (object) {
	    _arrayPush(result, _getSymbols(object));
	    object = _getPrototype(object);
	  }
	  return result;
	};

	var _getSymbolsIn = getSymbolsIn;

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return _copyObject(source, _getSymbolsIn(source), object);
	}

	var _copySymbolsIn = copySymbolsIn;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
	}

	var _getAllKeysIn = getAllKeysIn;

	/** Used for built-in method references. */
	var objectProto$e = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$b = objectProto$e.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty$b.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	var _initCloneArray = initCloneArray;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer;

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var _cloneDataView = cloneDataView;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var _cloneRegExp = cloneRegExp;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
	}

	var _cloneSymbol = cloneSymbol;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray;

	/** `Object#toString` result references. */
	var boolTag$2 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    mapTag$3 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$3 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$1 = '[object Symbol]';

	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$3 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$2:
	      return _cloneArrayBuffer(object);

	    case boolTag$2:
	    case dateTag$2:
	      return new Ctor(+object);

	    case dataViewTag$3:
	      return _cloneDataView(object, isDeep);

	    case float32Tag$1: case float64Tag$1:
	    case int8Tag$1: case int16Tag$1: case int32Tag$1:
	    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
	      return _cloneTypedArray(object, isDeep);

	    case mapTag$3:
	      return new Ctor;

	    case numberTag$2:
	    case stringTag$2:
	      return new Ctor(object);

	    case regexpTag$2:
	      return _cloneRegExp(object);

	    case setTag$3:
	      return new Ctor;

	    case symbolTag$1:
	      return _cloneSymbol(object);
	  }
	}

	var _initCloneByTag = initCloneByTag;

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject_1(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	var _baseCreate = baseCreate;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !_isPrototype(object))
	    ? _baseCreate(_getPrototype(object))
	    : {};
	}

	var _initCloneObject = initCloneObject;

	/** `Object#toString` result references. */
	var mapTag$4 = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap(value) {
	  return isObjectLike_1(value) && _getTag(value) == mapTag$4;
	}

	var _baseIsMap = baseIsMap;

	/* Node.js helper references. */
	var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

	var isMap_1 = isMap;

	/** `Object#toString` result references. */
	var setTag$4 = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike_1(value) && _getTag(value) == setTag$4;
	}

	var _baseIsSet = baseIsSet;

	/* Node.js helper references. */
	var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

	var isSet_1 = isSet;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag$3 = '[object Arguments]',
	    arrayTag$2 = '[object Array]',
	    boolTag$3 = '[object Boolean]',
	    dateTag$3 = '[object Date]',
	    errorTag$2 = '[object Error]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    mapTag$5 = '[object Map]',
	    numberTag$3 = '[object Number]',
	    objectTag$3 = '[object Object]',
	    regexpTag$3 = '[object RegExp]',
	    setTag$5 = '[object Set]',
	    stringTag$3 = '[object String]',
	    symbolTag$2 = '[object Symbol]',
	    weakMapTag$2 = '[object WeakMap]';

	var arrayBufferTag$3 = '[object ArrayBuffer]',
	    dataViewTag$4 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] =
	cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] =
	cloneableTags[boolTag$3] = cloneableTags[dateTag$3] =
	cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
	cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
	cloneableTags[int32Tag$2] = cloneableTags[mapTag$5] =
	cloneableTags[numberTag$3] = cloneableTags[objectTag$3] =
	cloneableTags[regexpTag$3] = cloneableTags[setTag$5] =
	cloneableTags[stringTag$3] = cloneableTags[symbolTag$2] =
	cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
	cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
	cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
	cloneableTags[weakMapTag$2] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject_1(value)) {
	    return value;
	  }
	  var isArr = isArray_1(value);
	  if (isArr) {
	    result = _initCloneArray(value);
	    if (!isDeep) {
	      return _copyArray(value, result);
	    }
	  } else {
	    var tag = _getTag(value),
	        isFunc = tag == funcTag$2 || tag == genTag$1;

	    if (isBuffer_1(value)) {
	      return _cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag$3 || tag == argsTag$3 || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? _copySymbolsIn(value, _baseAssignIn(result, value))
	          : _copySymbols(value, _baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = _initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new _Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet_1(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap_1(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = isFull
	    ? (isFlat ? _getAllKeysIn : _getAllKeys)
	    : (isFlat ? keysIn : keys_1);

	  var props = isArr ? undefined : keysFunc(value);
	  _arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var _baseClone = baseClone;

	/** `Object#toString` result references. */
	var symbolTag$3 = '[object Symbol]';

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
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$3);
	}

	var isSymbol_1 = isSymbol;

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray_1(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol_1(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	var _isKey = isKey;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || _MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = _MapCache;

	var memoize_1 = memoize;

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize_1(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	var _memoizeCapped = memoizeCapped;

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = _memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	var _stringToPath = stringToPath;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto$2 ? symbolProto$2.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray_1(value)) {
	    return value;
	  }
	  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
	}

	var _castPath = castPath;

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? array[length - 1] : undefined;
	}

	var last_1 = last;

	/** Used as references for various `Number` constants. */
	var INFINITY$1 = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol_1(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
	}

	var _toKey = toKey;

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = _castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[_toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	var _baseGet = baseGet;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	var _baseSlice = baseSlice;

	/**
	 * Gets the parent value at `path` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path to get the parent value of.
	 * @returns {*} Returns the parent value.
	 */
	function parent(object, path) {
	  return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
	}

	var _parent = parent;

	/**
	 * The base implementation of `_.unset`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The property path to unset.
	 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	 */
	function baseUnset(object, path) {
	  path = _castPath(path, object);
	  object = _parent(object, path);
	  return object == null || delete object[_toKey(last_1(path))];
	}

	var _baseUnset = baseUnset;

	/** `Object#toString` result references. */
	var objectTag$4 = '[object Object]';

	/** Used for built-in method references. */
	var funcProto$2 = Function.prototype,
	    objectProto$f = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$c = objectProto$f.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString$2.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject$1(value) {
	  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$4) {
	    return false;
	  }
	  var proto = _getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$c.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString$2.call(Ctor) == objectCtorString;
	}

	var isPlainObject_1 = isPlainObject$1;

	/**
	 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
	 * objects.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {string} key The key of the property to inspect.
	 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
	 */
	function customOmitClone(value) {
	  return isPlainObject_1(value) ? undefined : value;
	}

	var _customOmitClone = customOmitClone;

	/** Built-in value references. */
	var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray_1(value) || isArguments_1(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	var _isFlattenable = isFlattenable;

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = _isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        _arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	var _baseFlatten = baseFlatten;

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? _baseFlatten(array, 1) : [];
	}

	var flatten_1 = flatten;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	var _apply = apply;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return _apply(func, this, otherArgs);
	  };
	}

	var _overRest = overRest;

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	var constant_1 = constant;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	var identity_1 = identity;

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !_defineProperty$1 ? identity_1 : function(func, string) {
	  return _defineProperty$1(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant_1(string),
	    'writable': true
	  });
	};

	var _baseSetToString = baseSetToString;

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	var _shortOut = shortOut;

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = _shortOut(_baseSetToString);

	var _setToString = setToString;

	/**
	 * A specialized version of `baseRest` which flattens the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */
	function flatRest(func) {
	  return _setToString(_overRest(func, undefined, flatten_1), func + '');
	}

	var _flatRest = flatRest;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$1 = 1,
	    CLONE_FLAT_FLAG$1 = 2,
	    CLONE_SYMBOLS_FLAG$1 = 4;

	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable property paths of `object` that are not omitted.
	 *
	 * **Note:** This method is considerably slower than `_.pick`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [paths] The property paths to omit.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.omit(object, ['a', 'c']);
	 * // => { 'b': '2' }
	 */
	var omit = _flatRest(function(object, paths) {
	  var result = {};
	  if (object == null) {
	    return result;
	  }
	  var isDeep = false;
	  paths = _arrayMap(paths, function(path) {
	    path = _castPath(path, object);
	    isDeep || (isDeep = path.length > 1);
	    return path;
	  });
	  _copyObject(object, _getAllKeysIn(object), result);
	  if (isDeep) {
	    result = _baseClone(result, CLONE_DEEP_FLAG$1 | CLONE_FLAT_FLAG$1 | CLONE_SYMBOLS_FLAG$1, _customOmitClone);
	  }
	  var length = paths.length;
	  while (length--) {
	    _baseUnset(result, paths[length]);
	  }
	  return result;
	});

	var omit_1 = omit;

	function _createForOfIteratorHelper$3(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

	function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var Text = {
	  /**
	   * Check if two text nodes are equal.
	   */
	  equals: function equals(text, another) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var _options$loose = options.loose,
	        loose = _options$loose === void 0 ? false : _options$loose;
	    return isEqual_1(loose ? omit_1(text, 'text') : text, loose ? omit_1(another, 'text') : another);
	  },

	  /**
	   * Check if a value implements the `Text` interface.
	   */
	  isText: function isText(value) {
	    return isPlainObject(value) && typeof value.text === 'string';
	  },

	  /**
	   * Check if a value is a list of `Text` objects.
	   */
	  isTextList: function isTextList(value) {
	    return Array.isArray(value) && value.every(function (val) {
	      return Text.isText(val);
	    });
	  },

	  /**
	   * Check if some props are a partial of Text.
	   */
	  isTextProps: function isTextProps(props) {
	    return props.text !== undefined;
	  },

	  /**
	   * Check if an text matches set of properties.
	   *
	   * Note: this is for matching custom properties, and it does not ensure that
	   * the `text` property are two nodes equal.
	   */
	  matches: function matches(text, props) {
	    for (var key in props) {
	      if (key === 'text') {
	        continue;
	      }

	      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
	        return false;
	      }
	    }

	    return true;
	  },

	  /**
	   * Get the leaves for a text node given decorations.
	   */
	  decorations: function decorations(node, _decorations) {
	    var leaves = [_objectSpread$5({}, node)];

	    var _iterator = _createForOfIteratorHelper$3(_decorations),
	        _step;

	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var dec = _step.value;

	        var anchor = dec.anchor,
	            focus = dec.focus,
	            rest = _objectWithoutProperties(dec, ["anchor", "focus"]);

	        var _Range$edges = Range.edges(dec),
	            _Range$edges2 = _slicedToArray(_Range$edges, 2),
	            start = _Range$edges2[0],
	            end = _Range$edges2[1];

	        var next = [];
	        var o = 0;

	        var _iterator2 = _createForOfIteratorHelper$3(leaves),
	            _step2;

	        try {
	          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	            var leaf = _step2.value;
	            var length = leaf.text.length;
	            var offset = o;
	            o += length; // If the range encompases the entire leaf, add the range.

	            if (start.offset <= offset && end.offset >= o) {
	              Object.assign(leaf, rest);
	              next.push(leaf);
	              continue;
	            } // If the range expanded and match the leaf, or starts after, or ends before it, continue.


	            if (start.offset !== end.offset && (start.offset === o || end.offset === offset) || start.offset > o || end.offset < offset || end.offset === offset && offset !== 0) {
	              next.push(leaf);
	              continue;
	            } // Otherwise we need to split the leaf, at the start, end, or both,
	            // and add the range to the middle intersecting section. Do the end
	            // split first since we don't need to update the offset that way.


	            var middle = leaf;
	            var before = void 0;
	            var after = void 0;

	            if (end.offset < o) {
	              var off = end.offset - offset;
	              after = _objectSpread$5(_objectSpread$5({}, middle), {}, {
	                text: middle.text.slice(off)
	              });
	              middle = _objectSpread$5(_objectSpread$5({}, middle), {}, {
	                text: middle.text.slice(0, off)
	              });
	            }

	            if (start.offset > offset) {
	              var _off = start.offset - offset;

	              before = _objectSpread$5(_objectSpread$5({}, middle), {}, {
	                text: middle.text.slice(0, _off)
	              });
	              middle = _objectSpread$5(_objectSpread$5({}, middle), {}, {
	                text: middle.text.slice(_off)
	              });
	            }

	            Object.assign(middle, rest);

	            if (before) {
	              next.push(before);
	            }

	            next.push(middle);

	            if (after) {
	              next.push(after);
	            }
	          }
	        } catch (err) {
	          _iterator2.e(err);
	        } finally {
	          _iterator2.f();
	        }

	        leaves = next;
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }

	    return leaves;
	  }
	};

	function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _createForOfIteratorHelper$4(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

	function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	var GeneralTransforms = {
	  /**
	   * Transform the editor by an operation.
	   */
	  transform: function transform(editor, op) {
	    editor.children = pn(editor.children);
	    var selection = editor.selection && pn(editor.selection);

	    switch (op.type) {
	      case 'insert_node':
	        {
	          var path = op.path,
	              node = op.node;
	          var parent = Node.parent(editor, path);
	          var index = path[path.length - 1];
	          parent.children.splice(index, 0, node);

	          if (selection) {
	            var _iterator = _createForOfIteratorHelper$4(Range.points(selection)),
	                _step;

	            try {
	              for (_iterator.s(); !(_step = _iterator.n()).done;) {
	                var _step$value = _slicedToArray(_step.value, 2),
	                    point = _step$value[0],
	                    key = _step$value[1];

	                selection[key] = Point.transform(point, op);
	              }
	            } catch (err) {
	              _iterator.e(err);
	            } finally {
	              _iterator.f();
	            }
	          }

	          break;
	        }

	      case 'insert_text':
	        {
	          var _path = op.path,
	              offset = op.offset,
	              text = op.text;

	          var _node = Node.leaf(editor, _path);

	          var before = _node.text.slice(0, offset);

	          var after = _node.text.slice(offset);

	          _node.text = before + text + after;

	          if (selection) {
	            var _iterator2 = _createForOfIteratorHelper$4(Range.points(selection)),
	                _step2;

	            try {
	              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	                var _step2$value = _slicedToArray(_step2.value, 2),
	                    _point = _step2$value[0],
	                    _key = _step2$value[1];

	                selection[_key] = Point.transform(_point, op);
	              }
	            } catch (err) {
	              _iterator2.e(err);
	            } finally {
	              _iterator2.f();
	            }
	          }

	          break;
	        }

	      case 'merge_node':
	        {
	          var _path2 = op.path;

	          var _node2 = Node.get(editor, _path2);

	          var prevPath = Path.previous(_path2);
	          var prev = Node.get(editor, prevPath);

	          var _parent = Node.parent(editor, _path2);

	          var _index = _path2[_path2.length - 1];

	          if (Text.isText(_node2) && Text.isText(prev)) {
	            prev.text += _node2.text;
	          } else if (!Text.isText(_node2) && !Text.isText(prev)) {
	            var _prev$children;

	            (_prev$children = prev.children).push.apply(_prev$children, _toConsumableArray(_node2.children));
	          } else {
	            throw new Error("Cannot apply a \"merge_node\" operation at path [".concat(_path2, "] to nodes of different interfaces: ").concat(_node2, " ").concat(prev));
	          }

	          _parent.children.splice(_index, 1);

	          if (selection) {
	            var _iterator3 = _createForOfIteratorHelper$4(Range.points(selection)),
	                _step3;

	            try {
	              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	                var _step3$value = _slicedToArray(_step3.value, 2),
	                    _point2 = _step3$value[0],
	                    _key2 = _step3$value[1];

	                selection[_key2] = Point.transform(_point2, op);
	              }
	            } catch (err) {
	              _iterator3.e(err);
	            } finally {
	              _iterator3.f();
	            }
	          }

	          break;
	        }

	      case 'move_node':
	        {
	          var _path3 = op.path,
	              newPath = op.newPath;

	          if (Path.isAncestor(_path3, newPath)) {
	            throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
	          }

	          var _node3 = Node.get(editor, _path3);

	          var _parent2 = Node.parent(editor, _path3);

	          var _index2 = _path3[_path3.length - 1]; // This is tricky, but since the `path` and `newPath` both refer to
	          // the same snapshot in time, there's a mismatch. After either
	          // removing the original position, the second step's path can be out
	          // of date. So instead of using the `op.newPath` directly, we
	          // transform `op.path` to ascertain what the `newPath` would be after
	          // the operation was applied.

	          _parent2.children.splice(_index2, 1);

	          var truePath = Path.transform(_path3, op);
	          var newParent = Node.get(editor, Path.parent(truePath));
	          var newIndex = truePath[truePath.length - 1];
	          newParent.children.splice(newIndex, 0, _node3);

	          if (selection) {
	            var _iterator4 = _createForOfIteratorHelper$4(Range.points(selection)),
	                _step4;

	            try {
	              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
	                var _step4$value = _slicedToArray(_step4.value, 2),
	                    _point3 = _step4$value[0],
	                    _key3 = _step4$value[1];

	                selection[_key3] = Point.transform(_point3, op);
	              }
	            } catch (err) {
	              _iterator4.e(err);
	            } finally {
	              _iterator4.f();
	            }
	          }

	          break;
	        }

	      case 'remove_node':
	        {
	          var _path4 = op.path;
	          var _index3 = _path4[_path4.length - 1];

	          var _parent3 = Node.parent(editor, _path4);

	          _parent3.children.splice(_index3, 1); // Transform all of the points in the value, but if the point was in the
	          // node that was removed we need to update the range or remove it.


	          if (selection) {
	            var _iterator5 = _createForOfIteratorHelper$4(Range.points(selection)),
	                _step5;

	            try {
	              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
	                var _step5$value = _slicedToArray(_step5.value, 2),
	                    _point4 = _step5$value[0],
	                    _key4 = _step5$value[1];

	                var result = Point.transform(_point4, op);

	                if (selection != null && result != null) {
	                  selection[_key4] = result;
	                } else {
	                  var _prev = void 0;

	                  var next = void 0;

	                  var _iterator6 = _createForOfIteratorHelper$4(Node.texts(editor)),
	                      _step6;

	                  try {
	                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
	                      var _step6$value = _slicedToArray(_step6.value, 2),
	                          n = _step6$value[0],
	                          p = _step6$value[1];

	                      if (Path.compare(p, _path4) === -1) {
	                        _prev = [n, p];
	                      } else {
	                        next = [n, p];
	                        break;
	                      }
	                    }
	                  } catch (err) {
	                    _iterator6.e(err);
	                  } finally {
	                    _iterator6.f();
	                  }

	                  if (_prev) {
	                    _point4.path = _prev[1];
	                    _point4.offset = _prev[0].text.length;
	                  } else if (next) {
	                    _point4.path = next[1];
	                    _point4.offset = 0;
	                  } else {
	                    selection = null;
	                  }
	                }
	              }
	            } catch (err) {
	              _iterator5.e(err);
	            } finally {
	              _iterator5.f();
	            }
	          }

	          break;
	        }

	      case 'remove_text':
	        {
	          var _path5 = op.path,
	              _offset = op.offset,
	              _text = op.text;

	          var _node4 = Node.leaf(editor, _path5);

	          var _before = _node4.text.slice(0, _offset);

	          var _after = _node4.text.slice(_offset + _text.length);

	          _node4.text = _before + _after;

	          if (selection) {
	            var _iterator7 = _createForOfIteratorHelper$4(Range.points(selection)),
	                _step7;

	            try {
	              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
	                var _step7$value = _slicedToArray(_step7.value, 2),
	                    _point5 = _step7$value[0],
	                    _key5 = _step7$value[1];

	                selection[_key5] = Point.transform(_point5, op);
	              }
	            } catch (err) {
	              _iterator7.e(err);
	            } finally {
	              _iterator7.f();
	            }
	          }

	          break;
	        }

	      case 'set_node':
	        {
	          var _path6 = op.path,
	              newProperties = op.newProperties;

	          if (_path6.length === 0) {
	            throw new Error("Cannot set properties on the root node!");
	          }

	          var _node5 = Node.get(editor, _path6);

	          for (var _key6 in newProperties) {
	            if (_key6 === 'children' || _key6 === 'text') {
	              throw new Error("Cannot set the \"".concat(_key6, "\" property of nodes!"));
	            }

	            var value = newProperties[_key6];

	            if (value == null) {
	              delete _node5[_key6];
	            } else {
	              _node5[_key6] = value;
	            }
	          }

	          break;
	        }

	      case 'set_selection':
	        {
	          var _newProperties = op.newProperties;

	          if (_newProperties == null) {
	            selection = _newProperties;
	          } else {
	            if (selection == null) {
	              if (!Range.isRange(_newProperties)) {
	                throw new Error("Cannot apply an incomplete \"set_selection\" operation properties ".concat(JSON.stringify(_newProperties), " when there is no current selection."));
	              }

	              selection = _objectSpread$6({}, _newProperties);
	            }

	            for (var _key7 in _newProperties) {
	              var _value = _newProperties[_key7];

	              if (_value == null) {
	                if (_key7 === 'anchor' || _key7 === 'focus') {
	                  throw new Error("Cannot remove the \"".concat(_key7, "\" selection property"));
	                }

	                delete selection[_key7];
	              } else {
	                selection[_key7] = _value;
	              }
	            }
	          }

	          break;
	        }

	      case 'split_node':
	        {
	          var _path7 = op.path,
	              position = op.position,
	              properties = op.properties;

	          if (_path7.length === 0) {
	            throw new Error("Cannot apply a \"split_node\" operation at path [".concat(_path7, "] because the root node cannot be split."));
	          }

	          var _node6 = Node.get(editor, _path7);

	          var _parent4 = Node.parent(editor, _path7);

	          var _index4 = _path7[_path7.length - 1];
	          var newNode;

	          if (Text.isText(_node6)) {
	            var _before2 = _node6.text.slice(0, position);

	            var _after2 = _node6.text.slice(position);

	            _node6.text = _before2;
	            newNode = _objectSpread$6(_objectSpread$6({}, properties), {}, {
	              text: _after2
	            });
	          } else {
	            var _before3 = _node6.children.slice(0, position);

	            var _after3 = _node6.children.slice(position);

	            _node6.children = _before3;
	            newNode = _objectSpread$6(_objectSpread$6({}, properties), {}, {
	              children: _after3
	            });
	          }

	          _parent4.children.splice(_index4 + 1, 0, newNode);

	          if (selection) {
	            var _iterator8 = _createForOfIteratorHelper$4(Range.points(selection)),
	                _step8;

	            try {
	              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
	                var _step8$value = _slicedToArray(_step8.value, 2),
	                    _point6 = _step8$value[0],
	                    _key8 = _step8$value[1];

	                selection[_key8] = Point.transform(_point6, op);
	              }
	            } catch (err) {
	              _iterator8.e(err);
	            } finally {
	              _iterator8.f();
	            }
	          }

	          break;
	        }
	    }

	    editor.children = ln(editor.children);

	    if (selection) {
	      editor.selection = t(selection) ? ln(selection) : selection;
	    } else {
	      editor.selection = null;
	    }
	  }
	};

	function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _createForOfIteratorHelper$5(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }

	function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	var NodeTransforms = {
	  /**
	   * Insert nodes at a specific location in the Editor.
	   */
	  insertNodes: function insertNodes(editor, nodes) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    Editor.withoutNormalizing(editor, function () {
	      var _options$hanging = options.hanging,
	          hanging = _options$hanging === void 0 ? false : _options$hanging,
	          _options$voids = options.voids,
	          voids = _options$voids === void 0 ? false : _options$voids,
	          _options$mode = options.mode,
	          mode = _options$mode === void 0 ? 'lowest' : _options$mode;
	      var at = options.at,
	          match = options.match,
	          select = options.select;

	      if (Node.isNode(nodes)) {
	        nodes = [nodes];
	      }

	      if (nodes.length === 0) {
	        return;
	      }

	      var _nodes = nodes,
	          _nodes2 = _slicedToArray(_nodes, 1),
	          node = _nodes2[0]; // By default, use the selection as the target location. But if there is
	      // no selection, insert at the end of the document since that is such a
	      // common use case when inserting from a non-selected state.


	      if (!at) {
	        if (editor.selection) {
	          at = editor.selection;
	        } else if (editor.children.length > 0) {
	          at = Editor.end(editor, []);
	        } else {
	          at = [0];
	        }

	        select = true;
	      }

	      if (select == null) {
	        select = false;
	      }

	      if (Range.isRange(at)) {
	        if (!hanging) {
	          at = Editor.unhangRange(editor, at);
	        }

	        if (Range.isCollapsed(at)) {
	          at = at.anchor;
	        } else {
	          var _Range$edges = Range.edges(at),
	              _Range$edges2 = _slicedToArray(_Range$edges, 2),
	              end = _Range$edges2[1];

	          var pointRef = Editor.pointRef(editor, end);
	          Transforms["delete"](editor, {
	            at: at
	          });
	          at = pointRef.unref();
	        }
	      }

	      if (Point.isPoint(at)) {
	        if (match == null) {
	          if (Text.isText(node)) {
	            match = function match(n) {
	              return Text.isText(n);
	            };
	          } else if (editor.isInline(node)) {
	            match = function match(n) {
	              return Text.isText(n) || Editor.isInline(editor, n);
	            };
	          } else {
	            match = function match(n) {
	              return Editor.isBlock(editor, n);
	            };
	          }
	        }

	        var _Editor$nodes = Editor.nodes(editor, {
	          at: at.path,
	          match: match,
	          mode: mode,
	          voids: voids
	        }),
	            _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
	            entry = _Editor$nodes2[0];

	        if (entry) {
	          var _entry = _slicedToArray(entry, 2),
	              _matchPath = _entry[1];

	          var pathRef = Editor.pathRef(editor, _matchPath);
	          var isAtEnd = Editor.isEnd(editor, at, _matchPath);
	          Transforms.splitNodes(editor, {
	            at: at,
	            match: match,
	            mode: mode,
	            voids: voids
	          });
	          var path = pathRef.unref();
	          at = isAtEnd ? Path.next(path) : path;
	        } else {
	          return;
	        }
	      }

	      var parentPath = Path.parent(at);
	      var index = at[at.length - 1];

	      if (!voids && Editor["void"](editor, {
	        at: parentPath
	      })) {
	        return;
	      }

	      var _iterator = _createForOfIteratorHelper$5(nodes),
	          _step;

	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var _node = _step.value;

	          var _path = parentPath.concat(index);

	          index++;
	          editor.apply({
	            type: 'insert_node',
	            path: _path,
	            node: _node
	          });
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }

	      if (select) {
	        var point = Editor.end(editor, at);

	        if (point) {
	          Transforms.select(editor, point);
	        }
	      }
	    });
	  },

	  /**
	   * Lift nodes at a specific location upwards in the document tree, splitting
	   * their parent in two if necessary.
	   */
	  liftNodes: function liftNodes(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    Editor.withoutNormalizing(editor, function () {
	      var _options$at = options.at,
	          at = _options$at === void 0 ? editor.selection : _options$at,
	          _options$mode2 = options.mode,
	          mode = _options$mode2 === void 0 ? 'lowest' : _options$mode2,
	          _options$voids2 = options.voids,
	          voids = _options$voids2 === void 0 ? false : _options$voids2;
	      var match = options.match;

	      if (match == null) {
	        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
	          return Editor.isBlock(editor, n);
	        };
	      }

	      if (!at) {
	        return;
	      }

	      var matches = Editor.nodes(editor, {
	        at: at,
	        match: match,
	        mode: mode,
	        voids: voids
	      });
	      var pathRefs = Array.from(matches, function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2),
	            p = _ref2[1];

	        return Editor.pathRef(editor, p);
	      });

	      for (var _i = 0, _pathRefs = pathRefs; _i < _pathRefs.length; _i++) {
	        var pathRef = _pathRefs[_i];
	        var path = pathRef.unref();

	        if (path.length < 2) {
	          throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
	        }

	        var parentNodeEntry = Editor.node(editor, Path.parent(path));

	        var _parentNodeEntry = _slicedToArray(parentNodeEntry, 2),
	            parent = _parentNodeEntry[0],
	            parentPath = _parentNodeEntry[1];

	        var index = path[path.length - 1];
	        var length = parent.children.length;

	        if (length === 1) {
	          var toPath = Path.next(parentPath);
	          Transforms.moveNodes(editor, {
	            at: path,
	            to: toPath,
	            voids: voids
	          });
	          Transforms.removeNodes(editor, {
	            at: parentPath,
	            voids: voids
	          });
	        } else if (index === 0) {
	          Transforms.moveNodes(editor, {
	            at: path,
	            to: parentPath,
	            voids: voids
	          });
	        } else if (index === length - 1) {
	          var _toPath = Path.next(parentPath);

	          Transforms.moveNodes(editor, {
	            at: path,
	            to: _toPath,
	            voids: voids
	          });
	        } else {
	          var splitPath = Path.next(path);

	          var _toPath2 = Path.next(parentPath);

	          Transforms.splitNodes(editor, {
	            at: splitPath,
	            voids: voids
	          });
	          Transforms.moveNodes(editor, {
	            at: path,
	            to: _toPath2,
	            voids: voids
	          });
	        }
	      }
	    });
	  },

	  /**
	   * Merge a node at a location with the previous node of the same depth,
	   * removing any empty containing nodes after the merge if necessary.
	   */
	  mergeNodes: function mergeNodes(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    Editor.withoutNormalizing(editor, function () {
	      var match = options.match,
	          _options$at2 = options.at,
	          at = _options$at2 === void 0 ? editor.selection : _options$at2;
	      var _options$hanging2 = options.hanging,
	          hanging = _options$hanging2 === void 0 ? false : _options$hanging2,
	          _options$voids3 = options.voids,
	          voids = _options$voids3 === void 0 ? false : _options$voids3,
	          _options$mode3 = options.mode,
	          mode = _options$mode3 === void 0 ? 'lowest' : _options$mode3;

	      if (!at) {
	        return;
	      }

	      if (match == null) {
	        if (Path.isPath(at)) {
	          var _Editor$parent = Editor.parent(editor, at),
	              _Editor$parent2 = _slicedToArray(_Editor$parent, 1),
	              parent = _Editor$parent2[0];

	          match = function match(n) {
	            return parent.children.includes(n);
	          };
	        } else {
	          match = function match(n) {
	            return Editor.isBlock(editor, n);
	          };
	        }
	      }

	      if (!hanging && Range.isRange(at)) {
	        at = Editor.unhangRange(editor, at);
	      }

	      if (Range.isRange(at)) {
	        if (Range.isCollapsed(at)) {
	          at = at.anchor;
	        } else {
	          var _Range$edges3 = Range.edges(at),
	              _Range$edges4 = _slicedToArray(_Range$edges3, 2),
	              end = _Range$edges4[1];

	          var pointRef = Editor.pointRef(editor, end);
	          Transforms["delete"](editor, {
	            at: at
	          });
	          at = pointRef.unref();

	          if (options.at == null) {
	            Transforms.select(editor, at);
	          }
	        }
	      }

	      var _Editor$nodes3 = Editor.nodes(editor, {
	        at: at,
	        match: match,
	        voids: voids,
	        mode: mode
	      }),
	          _Editor$nodes4 = _slicedToArray(_Editor$nodes3, 1),
	          current = _Editor$nodes4[0];

	      var prev = Editor.previous(editor, {
	        at: at,
	        match: match,
	        voids: voids,
	        mode: mode
	      });

	      if (!current || !prev) {
	        return;
	      }

	      var _current = _slicedToArray(current, 2),
	          node = _current[0],
	          path = _current[1];

	      var _prev = _slicedToArray(prev, 2),
	          prevNode = _prev[0],
	          prevPath = _prev[1];

	      if (path.length === 0 || prevPath.length === 0) {
	        return;
	      }

	      var newPath = Path.next(prevPath);
	      var commonPath = Path.common(path, prevPath);
	      var isPreviousSibling = Path.isSibling(path, prevPath);
	      var levels = Array.from(Editor.levels(editor, {
	        at: path
	      }), function (_ref3) {
	        var _ref4 = _slicedToArray(_ref3, 1),
	            n = _ref4[0];

	        return n;
	      }).slice(commonPath.length).slice(0, -1); // Determine if the merge will leave an ancestor of the path empty as a
	      // result, in which case we'll want to remove it after merging.

	      var emptyAncestor = Editor.above(editor, {
	        at: path,
	        mode: 'highest',
	        match: function match(n) {
	          return levels.includes(n) && hasSingleChildNest(editor, n);
	        }
	      });
	      var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
	      var properties;
	      var position; // Ensure that the nodes are equivalent, and figure out what the position
	      // and extra properties of the merge will be.

	      if (Text.isText(node) && Text.isText(prevNode)) {
	        var text = node.text,
	            rest = _objectWithoutProperties(node, ["text"]);

	        position = prevNode.text.length;
	        properties = rest;
	      } else if (Element.isElement(node) && Element.isElement(prevNode)) {
	        var children = node.children,
	            _rest = _objectWithoutProperties(node, ["children"]);

	        position = prevNode.children.length;
	        properties = _rest;
	      } else {
	        throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(JSON.stringify(node), " ").concat(JSON.stringify(prevNode)));
	      } // If the node isn't already the next sibling of the previous node, move
	      // it so that it is before merging.


	      if (!isPreviousSibling) {
	        Transforms.moveNodes(editor, {
	          at: path,
	          to: newPath,
	          voids: voids
	        });
	      } // If there was going to be an empty ancestor of the node that was merged,
	      // we remove it from the tree.


	      if (emptyRef) {
	        Transforms.removeNodes(editor, {
	          at: emptyRef.current,
	          voids: voids
	        });
	      } // If the target node that we're merging with is empty, remove it instead
	      // of merging the two. This is a common rich text editor behavior to
	      // prevent losing formatting when deleting entire nodes when you have a
	      // hanging selection.


	      if (Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === '') {
	        Transforms.removeNodes(editor, {
	          at: prevPath,
	          voids: voids
	        });
	      } else {
	        editor.apply({
	          type: 'merge_node',
	          path: newPath,
	          position: position,
	          properties: properties
	        });
	      }

	      if (emptyRef) {
	        emptyRef.unref();
	      }
	    });
	  },

	  /**
	   * Move the nodes at a location to a new location.
	   */
	  moveNodes: function moveNodes(editor, options) {
	    Editor.withoutNormalizing(editor, function () {
	      var to = options.to,
	          _options$at3 = options.at,
	          at = _options$at3 === void 0 ? editor.selection : _options$at3,
	          _options$mode4 = options.mode,
	          mode = _options$mode4 === void 0 ? 'lowest' : _options$mode4,
	          _options$voids4 = options.voids,
	          voids = _options$voids4 === void 0 ? false : _options$voids4;
	      var match = options.match;

	      if (!at) {
	        return;
	      }

	      if (match == null) {
	        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
	          return Editor.isBlock(editor, n);
	        };
	      }

	      var toRef = Editor.pathRef(editor, to);
	      var targets = Editor.nodes(editor, {
	        at: at,
	        match: match,
	        mode: mode,
	        voids: voids
	      });
	      var pathRefs = Array.from(targets, function (_ref5) {
	        var _ref6 = _slicedToArray(_ref5, 2),
	            p = _ref6[1];

	        return Editor.pathRef(editor, p);
	      });

	      for (var _i2 = 0, _pathRefs2 = pathRefs; _i2 < _pathRefs2.length; _i2++) {
	        var pathRef = _pathRefs2[_i2];
	        var path = pathRef.unref();
	        var newPath = toRef.current;

	        if (path.length !== 0) {
	          editor.apply({
	            type: 'move_node',
	            path: path,
	            newPath: newPath
	          });
	        }

	        if (toRef.current && Path.isSibling(newPath, path) && Path.isAfter(newPath, path)) {
	          // When performing a sibling move to a later index, the path at the destination is shifted
	          // to before the insertion point instead of after. To ensure our group of nodes are inserted
	          // in the correct order we increment toRef to account for that
	          toRef.current = Path.next(toRef.current);
	        }
	      }

	      toRef.unref();
	    });
	  },

	  /**
	   * Remove the nodes at a specific location in the document.
	   */
	  removeNodes: function removeNodes(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    Editor.withoutNormalizing(editor, function () {
	      var _options$hanging3 = options.hanging,
	          hanging = _options$hanging3 === void 0 ? false : _options$hanging3,
	          _options$voids5 = options.voids,
	          voids = _options$voids5 === void 0 ? false : _options$voids5,
	          _options$mode5 = options.mode,
	          mode = _options$mode5 === void 0 ? 'lowest' : _options$mode5;
	      var _options$at4 = options.at,
	          at = _options$at4 === void 0 ? editor.selection : _options$at4,
	          match = options.match;

	      if (!at) {
	        return;
	      }

	      if (match == null) {
	        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
	          return Editor.isBlock(editor, n);
	        };
	      }

	      if (!hanging && Range.isRange(at)) {
	        at = Editor.unhangRange(editor, at);
	      }

	      var depths = Editor.nodes(editor, {
	        at: at,
	        match: match,
	        mode: mode,
	        voids: voids
	      });
	      var pathRefs = Array.from(depths, function (_ref7) {
	        var _ref8 = _slicedToArray(_ref7, 2),
	            p = _ref8[1];

	        return Editor.pathRef(editor, p);
	      });

	      for (var _i3 = 0, _pathRefs3 = pathRefs; _i3 < _pathRefs3.length; _i3++) {
	        var pathRef = _pathRefs3[_i3];
	        var path = pathRef.unref();

	        if (path) {
	          var _Editor$node = Editor.node(editor, path),
	              _Editor$node2 = _slicedToArray(_Editor$node, 1),
	              node = _Editor$node2[0];

	          editor.apply({
	            type: 'remove_node',
	            path: path,
	            node: node
	          });
	        }
	      }
	    });
	  },

	  /**
	   * Set new properties on the nodes at a location.
	   */
	  setNodes: function setNodes(editor, props) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    Editor.withoutNormalizing(editor, function () {
	      var match = options.match,
	          _options$at5 = options.at,
	          at = _options$at5 === void 0 ? editor.selection : _options$at5;
	      var _options$hanging4 = options.hanging,
	          hanging = _options$hanging4 === void 0 ? false : _options$hanging4,
	          _options$mode6 = options.mode,
	          mode = _options$mode6 === void 0 ? 'lowest' : _options$mode6,
	          _options$split = options.split,
	          split = _options$split === void 0 ? false : _options$split,
	          _options$voids6 = options.voids,
	          voids = _options$voids6 === void 0 ? false : _options$voids6;

	      if (!at) {
	        return;
	      }

	      if (match == null) {
	        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
	          return Editor.isBlock(editor, n);
	        };
	      }

	      if (!hanging && Range.isRange(at)) {
	        at = Editor.unhangRange(editor, at);
	      }

	      if (split && Range.isRange(at)) {
	        var rangeRef = Editor.rangeRef(editor, at, {
	          affinity: 'inward'
	        });

	        var _Range$edges5 = Range.edges(at),
	            _Range$edges6 = _slicedToArray(_Range$edges5, 2),
	            start = _Range$edges6[0],
	            end = _Range$edges6[1];

	        var splitMode = mode === 'lowest' ? 'lowest' : 'highest';
	        Transforms.splitNodes(editor, {
	          at: end,
	          match: match,
	          mode: splitMode,
	          voids: voids
	        });
	        Transforms.splitNodes(editor, {
	          at: start,
	          match: match,
	          mode: splitMode,
	          voids: voids
	        });
	        at = rangeRef.unref();

	        if (options.at == null) {
	          Transforms.select(editor, at);
	        }
	      }

	      var _iterator2 = _createForOfIteratorHelper$5(Editor.nodes(editor, {
	        at: at,
	        match: match,
	        mode: mode,
	        voids: voids
	      })),
	          _step2;

	      try {
	        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	          var _step2$value = _slicedToArray(_step2.value, 2),
	              node = _step2$value[0],
	              path = _step2$value[1];

	          var properties = {};
	          var newProperties = {}; // You can't set properties on the editor node.

	          if (path.length === 0) {
	            continue;
	          }

	          for (var k in props) {
	            if (k === 'children' || k === 'text') {
	              continue;
	            }

	            if (props[k] !== node[k]) {
	              properties[k] = node[k];
	              newProperties[k] = props[k];
	            }
	          }

	          if (Object.keys(newProperties).length !== 0) {
	            editor.apply({
	              type: 'set_node',
	              path: path,
	              properties: properties,
	              newProperties: newProperties
	            });
	          }
	        }
	      } catch (err) {
	        _iterator2.e(err);
	      } finally {
	        _iterator2.f();
	      }
	    });
	  },

	  /**
	   * Split the nodes at a specific location.
	   */
	  splitNodes: function splitNodes(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    Editor.withoutNormalizing(editor, function () {
	      var _options$mode7 = options.mode,
	          mode = _options$mode7 === void 0 ? 'lowest' : _options$mode7,
	          _options$voids7 = options.voids,
	          voids = _options$voids7 === void 0 ? false : _options$voids7;
	      var match = options.match,
	          _options$at6 = options.at,
	          at = _options$at6 === void 0 ? editor.selection : _options$at6,
	          _options$height = options.height,
	          height = _options$height === void 0 ? 0 : _options$height,
	          _options$always = options.always,
	          always = _options$always === void 0 ? false : _options$always;

	      if (match == null) {
	        match = function match(n) {
	          return Editor.isBlock(editor, n);
	        };
	      }

	      if (Range.isRange(at)) {
	        at = deleteRange(editor, at);
	      } // If the target is a path, the default height-skipping and position
	      // counters need to account for us potentially splitting at a non-leaf.


	      if (Path.isPath(at)) {
	        var path = at;
	        var point = Editor.point(editor, path);

	        var _Editor$parent3 = Editor.parent(editor, path),
	            _Editor$parent4 = _slicedToArray(_Editor$parent3, 1),
	            parent = _Editor$parent4[0];

	        match = function match(n) {
	          return n === parent;
	        };

	        height = point.path.length - path.length + 1;
	        at = point;
	        always = true;
	      }

	      if (!at) {
	        return;
	      }

	      var beforeRef = Editor.pointRef(editor, at, {
	        affinity: 'backward'
	      });

	      var _Editor$nodes5 = Editor.nodes(editor, {
	        at: at,
	        match: match,
	        mode: mode,
	        voids: voids
	      }),
	          _Editor$nodes6 = _slicedToArray(_Editor$nodes5, 1),
	          highest = _Editor$nodes6[0];

	      if (!highest) {
	        return;
	      }

	      var voidMatch = Editor["void"](editor, {
	        at: at,
	        mode: 'highest'
	      });
	      var nudge = 0;

	      if (!voids && voidMatch) {
	        var _voidMatch = _slicedToArray(voidMatch, 2),
	            voidNode = _voidMatch[0],
	            voidPath = _voidMatch[1];

	        if (Element.isElement(voidNode) && editor.isInline(voidNode)) {
	          var after = Editor.after(editor, voidPath);

	          if (!after) {
	            var text = {
	              text: ''
	            };
	            var afterPath = Path.next(voidPath);
	            Transforms.insertNodes(editor, text, {
	              at: afterPath,
	              voids: voids
	            });
	            after = Editor.point(editor, afterPath);
	          }

	          at = after;
	          always = true;
	        }

	        var siblingHeight = at.path.length - voidPath.length;
	        height = siblingHeight + 1;
	        always = true;
	      }

	      var afterRef = Editor.pointRef(editor, at);
	      var depth = at.path.length - height;

	      var _highest = _slicedToArray(highest, 2),
	          highestPath = _highest[1];

	      var lowestPath = at.path.slice(0, depth);
	      var position = height === 0 ? at.offset : at.path[depth] + nudge;

	      var _iterator3 = _createForOfIteratorHelper$5(Editor.levels(editor, {
	        at: lowestPath,
	        reverse: true,
	        voids: voids
	      })),
	          _step3;

	      try {
	        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	          var _step3$value = _slicedToArray(_step3.value, 2),
	              node = _step3$value[0],
	              _path2 = _step3$value[1];

	          var split = false;

	          if (_path2.length < highestPath.length || _path2.length === 0 || !voids && Editor.isVoid(editor, node)) {
	            break;
	          }

	          var _point2 = beforeRef.current;
	          var isEnd = Editor.isEnd(editor, _point2, _path2);

	          if (always || !beforeRef || !Editor.isEdge(editor, _point2, _path2)) {
	            split = true;
	            var properties = Node.extractProps(node);
	            editor.apply({
	              type: 'split_node',
	              path: _path2,
	              position: position,
	              properties: properties
	            });
	          }

	          position = _path2[_path2.length - 1] + (split || isEnd ? 1 : 0);
	        }
	      } catch (err) {
	        _iterator3.e(err);
	      } finally {
	        _iterator3.f();
	      }

	      if (options.at == null) {
	        var _point = afterRef.current || Editor.end(editor, []);

	        Transforms.select(editor, _point);
	      }

	      beforeRef.unref();
	      afterRef.unref();
	    });
	  },

	  /**
	   * Unset properties on the nodes at a location.
	   */
	  unsetNodes: function unsetNodes(editor, props) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    if (!Array.isArray(props)) {
	      props = [props];
	    }

	    var obj = {};

	    var _iterator4 = _createForOfIteratorHelper$5(props),
	        _step4;

	    try {
	      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
	        var key = _step4.value;
	        obj[key] = null;
	      }
	    } catch (err) {
	      _iterator4.e(err);
	    } finally {
	      _iterator4.f();
	    }

	    Transforms.setNodes(editor, obj, options);
	  },

	  /**
	   * Unwrap the nodes at a location from a parent node, splitting the parent if
	   * necessary to ensure that only the content in the range is unwrapped.
	   */
	  unwrapNodes: function unwrapNodes(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    Editor.withoutNormalizing(editor, function () {
	      var _options$mode8 = options.mode,
	          mode = _options$mode8 === void 0 ? 'lowest' : _options$mode8,
	          _options$split2 = options.split,
	          split = _options$split2 === void 0 ? false : _options$split2,
	          _options$voids8 = options.voids,
	          voids = _options$voids8 === void 0 ? false : _options$voids8;
	      var _options$at7 = options.at,
	          at = _options$at7 === void 0 ? editor.selection : _options$at7,
	          match = options.match;

	      if (!at) {
	        return;
	      }

	      if (match == null) {
	        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
	          return Editor.isBlock(editor, n);
	        };
	      }

	      if (Path.isPath(at)) {
	        at = Editor.range(editor, at);
	      }

	      var rangeRef = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
	      var matches = Editor.nodes(editor, {
	        at: at,
	        match: match,
	        mode: mode,
	        voids: voids
	      });
	      var pathRefs = Array.from(matches, function (_ref9) {
	        var _ref10 = _slicedToArray(_ref9, 2),
	            p = _ref10[1];

	        return Editor.pathRef(editor, p);
	      });

	      var _loop = function _loop() {
	        var pathRef = _pathRefs4[_i4];
	        var path = pathRef.unref();

	        var _Editor$node3 = Editor.node(editor, path),
	            _Editor$node4 = _slicedToArray(_Editor$node3, 1),
	            node = _Editor$node4[0];

	        var range = Editor.range(editor, path);

	        if (split && rangeRef) {
	          range = Range.intersection(rangeRef.current, range);
	        }

	        Transforms.liftNodes(editor, {
	          at: range,
	          match: function match(n) {
	            return Element.isAncestor(node) && node.children.includes(n);
	          },
	          voids: voids
	        });
	      };

	      for (var _i4 = 0, _pathRefs4 = pathRefs; _i4 < _pathRefs4.length; _i4++) {
	        _loop();
	      }

	      if (rangeRef) {
	        rangeRef.unref();
	      }
	    });
	  },

	  /**
	   * Wrap the nodes at a location in a new container node, splitting the edges
	   * of the range first to ensure that only the content in the range is wrapped.
	   */
	  wrapNodes: function wrapNodes(editor, element) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    Editor.withoutNormalizing(editor, function () {
	      var _options$mode9 = options.mode,
	          mode = _options$mode9 === void 0 ? 'lowest' : _options$mode9,
	          _options$split3 = options.split,
	          split = _options$split3 === void 0 ? false : _options$split3,
	          _options$voids9 = options.voids,
	          voids = _options$voids9 === void 0 ? false : _options$voids9;
	      var match = options.match,
	          _options$at8 = options.at,
	          at = _options$at8 === void 0 ? editor.selection : _options$at8;

	      if (!at) {
	        return;
	      }

	      if (match == null) {
	        if (Path.isPath(at)) {
	          match = matchPath(editor, at);
	        } else if (editor.isInline(element)) {
	          match = function match(n) {
	            return Editor.isInline(editor, n) || Text.isText(n);
	          };
	        } else {
	          match = function match(n) {
	            return Editor.isBlock(editor, n);
	          };
	        }
	      }

	      if (split && Range.isRange(at)) {
	        var _Range$edges7 = Range.edges(at),
	            _Range$edges8 = _slicedToArray(_Range$edges7, 2),
	            start = _Range$edges8[0],
	            end = _Range$edges8[1];

	        var rangeRef = Editor.rangeRef(editor, at, {
	          affinity: 'inward'
	        });
	        Transforms.splitNodes(editor, {
	          at: end,
	          match: match,
	          voids: voids
	        });
	        Transforms.splitNodes(editor, {
	          at: start,
	          match: match,
	          voids: voids
	        });
	        at = rangeRef.unref();

	        if (options.at == null) {
	          Transforms.select(editor, at);
	        }
	      }

	      var roots = Array.from(Editor.nodes(editor, {
	        at: at,
	        match: editor.isInline(element) ? function (n) {
	          return Editor.isBlock(editor, n);
	        } : function (n) {
	          return Editor.isEditor(n);
	        },
	        mode: 'lowest',
	        voids: voids
	      }));

	      for (var _i5 = 0, _roots = roots; _i5 < _roots.length; _i5++) {
	        var _roots$_i = _slicedToArray(_roots[_i5], 2),
	            rootPath = _roots$_i[1];

	        var a = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;

	        if (!a) {
	          continue;
	        }

	        var matches = Array.from(Editor.nodes(editor, {
	          at: a,
	          match: match,
	          mode: mode,
	          voids: voids
	        }));

	        if (matches.length > 0) {
	          (function () {
	            var _matches = _slicedToArray(matches, 1),
	                first = _matches[0];

	            var last = matches[matches.length - 1];

	            var _first = _slicedToArray(first, 2),
	                firstPath = _first[1];

	            var _last = _slicedToArray(last, 2),
	                lastPath = _last[1];

	            var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
	            var range = Editor.range(editor, firstPath, lastPath);
	            var commonNodeEntry = Editor.node(editor, commonPath);

	            var _commonNodeEntry = _slicedToArray(commonNodeEntry, 1),
	                commonNode = _commonNodeEntry[0];

	            var depth = commonPath.length + 1;
	            var wrapperPath = Path.next(lastPath.slice(0, depth));

	            var wrapper = _objectSpread$7(_objectSpread$7({}, element), {}, {
	              children: []
	            });

	            Transforms.insertNodes(editor, wrapper, {
	              at: wrapperPath,
	              voids: voids
	            });
	            Transforms.moveNodes(editor, {
	              at: range,
	              match: function match(n) {
	                return Element.isAncestor(commonNode) && commonNode.children.includes(n);
	              },
	              to: wrapperPath.concat(0),
	              voids: voids
	            });
	          })();
	        }
	      }
	    });
	  }
	};

	var hasSingleChildNest = function hasSingleChildNest(editor, node) {
	  if (Element.isElement(node)) {
	    var element = node;

	    if (Editor.isVoid(editor, node)) {
	      return true;
	    } else if (element.children.length === 1) {
	      return hasSingleChildNest(editor, element.children[0]);
	    } else {
	      return false;
	    }
	  } else if (Editor.isEditor(node)) {
	    return false;
	  } else {
	    return true;
	  }
	};
	/**
	 * Convert a range into a point by deleting it's content.
	 */


	var deleteRange = function deleteRange(editor, range) {
	  if (Range.isCollapsed(range)) {
	    return range.anchor;
	  } else {
	    var _Range$edges9 = Range.edges(range),
	        _Range$edges10 = _slicedToArray(_Range$edges9, 2),
	        end = _Range$edges10[1];

	    var pointRef = Editor.pointRef(editor, end);
	    Transforms["delete"](editor, {
	      at: range
	    });
	    return pointRef.unref();
	  }
	};

	var matchPath = function matchPath(editor, path) {
	  var _Editor$node5 = Editor.node(editor, path),
	      _Editor$node6 = _slicedToArray(_Editor$node5, 1),
	      node = _Editor$node6[0];

	  return function (n) {
	    return n === node;
	  };
	};

	function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var SelectionTransforms = {
	  /**
	   * Collapse the selection.
	   */
	  collapse: function collapse(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$edge = options.edge,
	        edge = _options$edge === void 0 ? 'anchor' : _options$edge;
	    var selection = editor.selection;

	    if (!selection) {
	      return;
	    } else if (edge === 'anchor') {
	      Transforms.select(editor, selection.anchor);
	    } else if (edge === 'focus') {
	      Transforms.select(editor, selection.focus);
	    } else if (edge === 'start') {
	      var _Range$edges = Range.edges(selection),
	          _Range$edges2 = _slicedToArray(_Range$edges, 1),
	          start = _Range$edges2[0];

	      Transforms.select(editor, start);
	    } else if (edge === 'end') {
	      var _Range$edges3 = Range.edges(selection),
	          _Range$edges4 = _slicedToArray(_Range$edges3, 2),
	          end = _Range$edges4[1];

	      Transforms.select(editor, end);
	    }
	  },

	  /**
	   * Unset the selection.
	   */
	  deselect: function deselect(editor) {
	    var selection = editor.selection;

	    if (selection) {
	      editor.apply({
	        type: 'set_selection',
	        properties: selection,
	        newProperties: null
	      });
	    }
	  },

	  /**
	   * Move the selection's point forward or backward.
	   */
	  move: function move(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var selection = editor.selection;
	    var _options$distance = options.distance,
	        distance = _options$distance === void 0 ? 1 : _options$distance,
	        _options$unit = options.unit,
	        unit = _options$unit === void 0 ? 'character' : _options$unit,
	        _options$reverse = options.reverse,
	        reverse = _options$reverse === void 0 ? false : _options$reverse;
	    var _options$edge2 = options.edge,
	        edge = _options$edge2 === void 0 ? null : _options$edge2;

	    if (!selection) {
	      return;
	    }

	    if (edge === 'start') {
	      edge = Range.isBackward(selection) ? 'focus' : 'anchor';
	    }

	    if (edge === 'end') {
	      edge = Range.isBackward(selection) ? 'anchor' : 'focus';
	    }

	    var anchor = selection.anchor,
	        focus = selection.focus;
	    var opts = {
	      distance: distance,
	      unit: unit
	    };
	    var props = {};

	    if (edge == null || edge === 'anchor') {
	      var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);

	      if (point) {
	        props.anchor = point;
	      }
	    }

	    if (edge == null || edge === 'focus') {
	      var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);

	      if (_point) {
	        props.focus = _point;
	      }
	    }

	    Transforms.setSelection(editor, props);
	  },

	  /**
	   * Set the selection to a new value.
	   */
	  select: function select(editor, target) {
	    var selection = editor.selection;
	    target = Editor.range(editor, target);

	    if (selection) {
	      Transforms.setSelection(editor, target);
	      return;
	    }

	    if (!Range.isRange(target)) {
	      throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(JSON.stringify(target)));
	    }

	    editor.apply({
	      type: 'set_selection',
	      properties: selection,
	      newProperties: target
	    });
	  },

	  /**
	   * Set new properties on one of the selection's points.
	   */
	  setPoint: function setPoint(editor, props) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var selection = editor.selection;
	    var _options$edge3 = options.edge,
	        edge = _options$edge3 === void 0 ? 'both' : _options$edge3;

	    if (!selection) {
	      return;
	    }

	    if (edge === 'start') {
	      edge = Range.isBackward(selection) ? 'focus' : 'anchor';
	    }

	    if (edge === 'end') {
	      edge = Range.isBackward(selection) ? 'anchor' : 'focus';
	    }

	    var anchor = selection.anchor,
	        focus = selection.focus;
	    var point = edge === 'anchor' ? anchor : focus;
	    Transforms.setSelection(editor, _defineProperty({}, edge === 'anchor' ? 'anchor' : 'focus', _objectSpread$8(_objectSpread$8({}, point), props)));
	  },

	  /**
	   * Set new properties on the selection.
	   */
	  setSelection: function setSelection(editor, props) {
	    var selection = editor.selection;
	    var oldProps = {};
	    var newProps = {};

	    if (!selection) {
	      return;
	    }

	    for (var k in props) {
	      if (k === 'anchor' && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k === 'focus' && props.focus != null && !Point.equals(props.focus, selection.focus) || k !== 'anchor' && k !== 'focus' && props[k] !== selection[k]) {
	        oldProps[k] = selection[k];
	        newProps[k] = props[k];
	      }
	    }

	    if (Object.keys(oldProps).length > 0) {
	      editor.apply({
	        type: 'set_selection',
	        properties: oldProps,
	        newProperties: newProps
	      });
	    }
	  }
	};

	function _createForOfIteratorHelper$6(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$6(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$6(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen); }

	function _arrayLikeToArray$6(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	var TextTransforms = {
	  /**
	   * Delete content in the editor.
	   */
	  "delete": function _delete(editor) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    Editor.withoutNormalizing(editor, function () {
	      var _options$reverse = options.reverse,
	          reverse = _options$reverse === void 0 ? false : _options$reverse,
	          _options$unit = options.unit,
	          unit = _options$unit === void 0 ? 'character' : _options$unit,
	          _options$distance = options.distance,
	          distance = _options$distance === void 0 ? 1 : _options$distance,
	          _options$voids = options.voids,
	          voids = _options$voids === void 0 ? false : _options$voids;
	      var _options$at = options.at,
	          at = _options$at === void 0 ? editor.selection : _options$at,
	          _options$hanging = options.hanging,
	          hanging = _options$hanging === void 0 ? false : _options$hanging;

	      if (!at) {
	        return;
	      }

	      if (Range.isRange(at) && Range.isCollapsed(at)) {
	        at = at.anchor;
	      }

	      if (Point.isPoint(at)) {
	        var furthestVoid = Editor["void"](editor, {
	          at: at,
	          mode: 'highest'
	        });

	        if (!voids && furthestVoid) {
	          var _furthestVoid = _slicedToArray(furthestVoid, 2),
	              voidPath = _furthestVoid[1];

	          at = voidPath;
	        } else {
	          var opts = {
	            unit: unit,
	            distance: distance
	          };
	          var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
	          at = {
	            anchor: at,
	            focus: target
	          };
	          hanging = true;
	        }
	      }

	      if (Path.isPath(at)) {
	        Transforms.removeNodes(editor, {
	          at: at,
	          voids: voids
	        });
	        return;
	      }

	      if (Range.isCollapsed(at)) {
	        return;
	      }

	      if (!hanging) {
	        var _Range$edges = Range.edges(at),
	            _Range$edges2 = _slicedToArray(_Range$edges, 2),
	            _end = _Range$edges2[1];

	        var endOfDoc = Editor.end(editor, []);

	        if (!Point.equals(_end, endOfDoc)) {
	          at = Editor.unhangRange(editor, at, {
	            voids: voids
	          });
	        }
	      }

	      var _Range$edges3 = Range.edges(at),
	          _Range$edges4 = _slicedToArray(_Range$edges3, 2),
	          start = _Range$edges4[0],
	          end = _Range$edges4[1];

	      var startBlock = Editor.above(editor, {
	        match: function match(n) {
	          return Editor.isBlock(editor, n);
	        },
	        at: start,
	        voids: voids
	      });
	      var endBlock = Editor.above(editor, {
	        match: function match(n) {
	          return Editor.isBlock(editor, n);
	        },
	        at: end,
	        voids: voids
	      });
	      var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
	      var isSingleText = Path.equals(start.path, end.path);
	      var startVoid = voids ? null : Editor["void"](editor, {
	        at: start,
	        mode: 'highest'
	      });
	      var endVoid = voids ? null : Editor["void"](editor, {
	        at: end,
	        mode: 'highest'
	      }); // If the start or end points are inside an inline void, nudge them out.

	      if (startVoid) {
	        var before = Editor.before(editor, start);

	        if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
	          start = before;
	        }
	      }

	      if (endVoid) {
	        var after = Editor.after(editor, end);

	        if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
	          end = after;
	        }
	      } // Get the highest nodes that are completely inside the range, as well as
	      // the start and end nodes.


	      var matches = [];
	      var lastPath;

	      var _iterator = _createForOfIteratorHelper$6(Editor.nodes(editor, {
	        at: at,
	        voids: voids
	      })),
	          _step;

	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var entry = _step.value;

	          var _entry = _slicedToArray(entry, 2),
	              _node2 = _entry[0],
	              _path3 = _entry[1];

	          if (lastPath && Path.compare(_path3, lastPath) === 0) {
	            continue;
	          }

	          if (!voids && Editor.isVoid(editor, _node2) || !Path.isCommon(_path3, start.path) && !Path.isCommon(_path3, end.path)) {
	            matches.push(entry);
	            lastPath = _path3;
	          }
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }

	      var pathRefs = Array.from(matches, function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2),
	            p = _ref2[1];

	        return Editor.pathRef(editor, p);
	      });
	      var startRef = Editor.pointRef(editor, start);
	      var endRef = Editor.pointRef(editor, end);

	      if (!isSingleText && !startVoid) {
	        var _point = startRef.current;

	        var _Editor$leaf = Editor.leaf(editor, _point),
	            _Editor$leaf2 = _slicedToArray(_Editor$leaf, 1),
	            node = _Editor$leaf2[0];

	        var path = _point.path;
	        var _start = start,
	            offset = _start.offset;
	        var text = node.text.slice(offset);
	        editor.apply({
	          type: 'remove_text',
	          path: path,
	          offset: offset,
	          text: text
	        });
	      }

	      for (var _i = 0, _pathRefs = pathRefs; _i < _pathRefs.length; _i++) {
	        var pathRef = _pathRefs[_i];

	        var _path = pathRef.unref();

	        Transforms.removeNodes(editor, {
	          at: _path,
	          voids: voids
	        });
	      }

	      if (!endVoid) {
	        var _point2 = endRef.current;

	        var _Editor$leaf3 = Editor.leaf(editor, _point2),
	            _Editor$leaf4 = _slicedToArray(_Editor$leaf3, 1),
	            _node = _Editor$leaf4[0];

	        var _path2 = _point2.path;

	        var _offset = isSingleText ? start.offset : 0;

	        var _text = _node.text.slice(_offset, end.offset);

	        editor.apply({
	          type: 'remove_text',
	          path: _path2,
	          offset: _offset,
	          text: _text
	        });
	      }

	      if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
	        Transforms.mergeNodes(editor, {
	          at: endRef.current,
	          hanging: true,
	          voids: voids
	        });
	      }

	      var point = reverse ? startRef.unref() || endRef.unref() : endRef.unref() || startRef.unref();

	      if (options.at == null && point) {
	        Transforms.select(editor, point);
	      }
	    });
	  },

	  /**
	   * Insert a fragment at a specific location in the editor.
	   */
	  insertFragment: function insertFragment(editor, fragment) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    Editor.withoutNormalizing(editor, function () {
	      var _options$hanging2 = options.hanging,
	          hanging = _options$hanging2 === void 0 ? false : _options$hanging2,
	          _options$voids2 = options.voids,
	          voids = _options$voids2 === void 0 ? false : _options$voids2;
	      var _options$at2 = options.at,
	          at = _options$at2 === void 0 ? editor.selection : _options$at2;

	      if (!fragment.length) {
	        return;
	      }

	      if (!at) {
	        return;
	      } else if (Range.isRange(at)) {
	        if (!hanging) {
	          at = Editor.unhangRange(editor, at);
	        }

	        if (Range.isCollapsed(at)) {
	          at = at.anchor;
	        } else {
	          var _Range$edges5 = Range.edges(at),
	              _Range$edges6 = _slicedToArray(_Range$edges5, 2),
	              end = _Range$edges6[1];

	          if (!voids && Editor["void"](editor, {
	            at: end
	          })) {
	            return;
	          }

	          var pointRef = Editor.pointRef(editor, end);
	          Transforms["delete"](editor, {
	            at: at
	          });
	          at = pointRef.unref();
	        }
	      } else if (Path.isPath(at)) {
	        at = Editor.start(editor, at);
	      }

	      if (!voids && Editor["void"](editor, {
	        at: at
	      })) {
	        return;
	      } // If the insert point is at the edge of an inline node, move it outside
	      // instead since it will need to be split otherwise.


	      var inlineElementMatch = Editor.above(editor, {
	        at: at,
	        match: function match(n) {
	          return Editor.isInline(editor, n);
	        },
	        mode: 'highest',
	        voids: voids
	      });

	      if (inlineElementMatch) {
	        var _inlineElementMatch = _slicedToArray(inlineElementMatch, 2),
	            _inlinePath = _inlineElementMatch[1];

	        if (Editor.isEnd(editor, at, _inlinePath)) {
	          var after = Editor.after(editor, _inlinePath);
	          at = after;
	        } else if (Editor.isStart(editor, at, _inlinePath)) {
	          var before = Editor.before(editor, _inlinePath);
	          at = before;
	        }
	      }

	      var blockMatch = Editor.above(editor, {
	        match: function match(n) {
	          return Editor.isBlock(editor, n);
	        },
	        at: at,
	        voids: voids
	      });

	      var _blockMatch = _slicedToArray(blockMatch, 2),
	          blockPath = _blockMatch[1];

	      var isBlockStart = Editor.isStart(editor, at, blockPath);
	      var isBlockEnd = Editor.isEnd(editor, at, blockPath);
	      var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
	      var mergeEnd = !isBlockEnd;

	      var _Node$first = Node.first({
	        children: fragment
	      }, []),
	          _Node$first2 = _slicedToArray(_Node$first, 2),
	          firstPath = _Node$first2[1];

	      var _Node$last = Node.last({
	        children: fragment
	      }, []),
	          _Node$last2 = _slicedToArray(_Node$last, 2),
	          lastPath = _Node$last2[1];

	      var matches = [];

	      var matcher = function matcher(_ref3) {
	        var _ref4 = _slicedToArray(_ref3, 2),
	            n = _ref4[0],
	            p = _ref4[1];

	        if (mergeStart && Path.isAncestor(p, firstPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
	          return false;
	        }

	        if (mergeEnd && Path.isAncestor(p, lastPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
	          return false;
	        }

	        return true;
	      };

	      var _iterator2 = _createForOfIteratorHelper$6(Node.nodes({
	        children: fragment
	      }, {
	        pass: matcher
	      })),
	          _step2;

	      try {
	        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	          var entry = _step2.value;

	          if (entry[1].length > 0 && matcher(entry)) {
	            matches.push(entry);
	          }
	        }
	      } catch (err) {
	        _iterator2.e(err);
	      } finally {
	        _iterator2.f();
	      }

	      var starts = [];
	      var middles = [];
	      var ends = [];
	      var starting = true;
	      var hasBlocks = false;

	      for (var _i2 = 0, _matches = matches; _i2 < _matches.length; _i2++) {
	        var _matches$_i = _slicedToArray(_matches[_i2], 1),
	            node = _matches$_i[0];

	        if (Element.isElement(node) && !editor.isInline(node)) {
	          starting = false;
	          hasBlocks = true;
	          middles.push(node);
	        } else if (starting) {
	          starts.push(node);
	        } else {
	          ends.push(node);
	        }
	      }

	      var _Editor$nodes = Editor.nodes(editor, {
	        at: at,
	        match: function match(n) {
	          return Text.isText(n) || Editor.isInline(editor, n);
	        },
	        mode: 'highest',
	        voids: voids
	      }),
	          _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
	          inlineMatch = _Editor$nodes2[0];

	      var _inlineMatch = _slicedToArray(inlineMatch, 2),
	          inlinePath = _inlineMatch[1];

	      var isInlineStart = Editor.isStart(editor, at, inlinePath);
	      var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
	      var middleRef = Editor.pathRef(editor, isBlockEnd ? Path.next(blockPath) : blockPath);
	      var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
	      Transforms.splitNodes(editor, {
	        at: at,
	        match: function match(n) {
	          return hasBlocks ? Editor.isBlock(editor, n) : Text.isText(n) || Editor.isInline(editor, n);
	        },
	        mode: hasBlocks ? 'lowest' : 'highest',
	        voids: voids
	      });
	      var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
	      Transforms.insertNodes(editor, starts, {
	        at: startRef.current,
	        match: function match(n) {
	          return Text.isText(n) || Editor.isInline(editor, n);
	        },
	        mode: 'highest',
	        voids: voids
	      });
	      Transforms.insertNodes(editor, middles, {
	        at: middleRef.current,
	        match: function match(n) {
	          return Editor.isBlock(editor, n);
	        },
	        mode: 'lowest',
	        voids: voids
	      });
	      Transforms.insertNodes(editor, ends, {
	        at: endRef.current,
	        match: function match(n) {
	          return Text.isText(n) || Editor.isInline(editor, n);
	        },
	        mode: 'highest',
	        voids: voids
	      });

	      if (!options.at) {
	        var path;

	        if (ends.length > 0) {
	          path = Path.previous(endRef.current);
	        } else if (middles.length > 0) {
	          path = Path.previous(middleRef.current);
	        } else {
	          path = Path.previous(startRef.current);
	        }

	        var _end2 = Editor.end(editor, path);

	        Transforms.select(editor, _end2);
	      }

	      startRef.unref();
	      middleRef.unref();
	      endRef.unref();
	    });
	  },

	  /**
	   * Insert a string of text in the Editor.
	   */
	  insertText: function insertText(editor, text) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    Editor.withoutNormalizing(editor, function () {
	      var _options$voids3 = options.voids,
	          voids = _options$voids3 === void 0 ? false : _options$voids3;
	      var _options$at3 = options.at,
	          at = _options$at3 === void 0 ? editor.selection : _options$at3;

	      if (!at) {
	        return;
	      }

	      if (Path.isPath(at)) {
	        at = Editor.range(editor, at);
	      }

	      if (Range.isRange(at)) {
	        if (Range.isCollapsed(at)) {
	          at = at.anchor;
	        } else {
	          var end = Range.end(at);

	          if (!voids && Editor["void"](editor, {
	            at: end
	          })) {
	            return;
	          }

	          var pointRef = Editor.pointRef(editor, end);
	          Transforms["delete"](editor, {
	            at: at,
	            voids: voids
	          });
	          at = pointRef.unref();
	          Transforms.setSelection(editor, {
	            anchor: at,
	            focus: at
	          });
	        }
	      }

	      if (!voids && Editor["void"](editor, {
	        at: at
	      })) {
	        return;
	      }

	      var _at = at,
	          path = _at.path,
	          offset = _at.offset;
	      editor.apply({
	        type: 'insert_text',
	        path: path,
	        offset: offset,
	        text: text
	      });
	    });
	  }
	};

	function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var Transforms = _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);

	exports.Editor = Editor;
	exports.Element = Element;
	exports.Location = Location;
	exports.Node = Node;
	exports.Operation = Operation;
	exports.Path = Path;
	exports.PathRef = PathRef;
	exports.Point = Point;
	exports.PointRef = PointRef;
	exports.Range = Range;
	exports.RangeRef = RangeRef;
	exports.Span = Span;
	exports.Text = Text;
	exports.Transforms = Transforms;
	exports.createEditor = createEditor;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
