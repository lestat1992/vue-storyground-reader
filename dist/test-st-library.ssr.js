'use strict';var vue=require('vue');function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$6 = /*#__PURE__*/vue.defineComponent({
  name: 'TestStLibrarySample',
  // vue component name
  data: function data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },
  computed: {
    changedBy: function changedBy() {
      var message = this.message;
      if (!message.action) return 'initialized';
      return "".concat(message.action, " ").concat(message.amount || '').trim();
    }
  },
  methods: {
    increment: function increment(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement: function decrement(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset: function reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }
  }
});var _hoisted_1$5 = {
  class: "test-st-library-sample"
};

var _hoisted_2$4 = /*#__PURE__*/vue.createTextVNode(".");

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [vue.createElementVNode("p", null, [vue.createTextVNode("The counter was " + vue.toDisplayString(_ctx.changedBy) + " to ", 1), vue.createElementVNode("b", null, vue.toDisplayString(_ctx.counter), 1), _hoisted_2$4]), vue.createElementVNode("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.increment && _ctx.increment.apply(_ctx, arguments);
    })
  }, " Click +1 "), vue.createElementVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.decrement && _ctx.decrement.apply(_ctx, arguments);
    })
  }, " Click -1 "), vue.createElementVNode("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.increment(5);
    })
  }, " Click +5 "), vue.createElementVNode("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.decrement(5);
    })
  }, " Click -5 "), vue.createElementVNode("button", {
    onClick: _cache[4] || (_cache[4] = function () {
      return _ctx.reset && _ctx.reset.apply(_ctx, arguments);
    })
  }, " Reset ")]);
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = "\n.test-st-library-sample[data-v-09179d00] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.test-st-library-sample p[data-v-09179d00] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z);script$6.render = render$6;
script$6.__scopeId = "data-v-09179d00";var noData = {
	en: "No data appears to be present at the moment",
	it: "Al momento non sembra essere presente alcun dato"
};
var noStart = {
	en: "A node has not been selected to start the story from",
	it: "Non è stato selezionato un nodo da cui iniziare la storia"
};
var noEnd = {
	en: "an end node has not been inserted",
	it: "non è stato inserito un nodo finale"
};
var nodeBadMix = {
	it: "the resulting list of nodes is incorrect (nodes to be disconnected:",
	en: ""
};
var expressionIncoplete = {
	it: "l'espressione usata è incopleta",
	en: "the expression used is incomplete"
};
var redirectError = {
	it: "Non sono stati specificati alcuni nodi di destinazione",
	en: "Some target nodes were not specified"
};
var defaultStrings = {
	noData: noData,
	noStart: noStart,
	noEnd: noEnd,
	nodeBadMix: nodeBadMix,
	expressionIncoplete: expressionIncoplete,
	redirectError: redirectError
};var postInfo = {
	title: "Placeholder",
	lenghtDescriptionsNode: 400,
	lenghtChoseNode: 20,
	selectedWorkSpace: 1,
	privateLink: true,
	langList: [
		"en",
		"it"
	]
};
var erorList = {
	noStart: false
};
var MaxId = 16;
var levels = [
];
var achievements = [
];
var items = [
];
var stats = [
];
var story = {
	tabs: [
		{
			id: 1,
			humanName: {
				"default": "start"
			},
			level: 0,
			name: "start",
			type: "start",
			gameStart: true,
			levelStart: false,
			x: 670,
			y: 122.8125
		},
		{
			id: 2,
			humanName: {
				"default": "text",
				textImage: "text & image"
			},
			level: 0,
			name: "descriptions0",
			text: {
				it: "Questa è una storia segnaposto, sei interessato a proseguire?",
				en: "This is a placeholder story"
			},
			type: "descriptions",
			img: "",
			save: false,
			textRevision: false,
			x: 585,
			y: 258.8125
		},
		{
			id: 4,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose0",
			text: {
				it: "si",
				en: "yes"
			},
			type: "chose",
			textRevision: false,
			x: 480,
			y: 531.8125
		},
		{
			id: 5,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose1",
			text: {
				it: "no",
				en: "no"
			},
			type: "chose",
			textRevision: false,
			x: 735,
			y: 536.8125
		},
		{
			id: 10,
			humanName: {
				"default": "text",
				textImage: "text & image"
			},
			level: 0,
			name: "descriptions1",
			text: {
				it: "Non c'è molto altro da dire, come ti ho detto...",
				en: "There isn't much more to say, as I told you...\r"
			},
			type: "descriptions",
			img: "",
			save: false,
			textRevision: false,
			x: 473,
			y: 681.8125
		},
		{
			id: 11,
			humanName: {
				"default": "null"
			},
			level: 0,
			type: "null",
			x: 149,
			y: 319.8125,
			name: "null0"
		},
		{
			id: 15,
			humanName: {
				"default": "end"
			},
			level: 0,
			name: "end0",
			type: "end",
			text: {
				it: "Allora esci da questa pagina",
				en: ""
			},
			img: "",
			textRevision: false,
			x: 787,
			y: 795.8125
		}
	],
	beams: [
		{
			id: 3,
			from: 1,
			to: 2
		},
		{
			id: 8,
			from: 2,
			to: 4
		},
		{
			id: 9,
			from: 2,
			to: 5
		},
		{
			id: 12,
			from: 10,
			to: 11
		},
		{
			id: 13,
			from: 11,
			to: 2
		},
		{
			id: 14,
			from: 4,
			to: 10
		},
		{
			id: 16,
			from: 5,
			to: 15
		}
	]
};
var style = {
	"font-family": "Twinkle Star",
	"layou-type": 1,
	"bg-color": "#FF0000",
	color: "#000000",
	"icon-single-arrow": {
		id: 1,
		size: 16,
		units: "px",
		color: "#00FF00"
	},
	"icon-multiple-arrow": {
		id: 1,
		size: 16,
		units: "px",
		color: "#00FF00"
	},
	desktop: {
		"font-size": 20,
		units: "px"
	},
	mobile: {
		"font-size": 18,
		units: "px"
	}
};
var defaultStory = {
	postInfo: postInfo,
	erorList: erorList,
	MaxId: MaxId,
	levels: levels,
	achievements: achievements,
	items: items,
	stats: stats,
	story: story,
	style: style
};var boxIllustration = {
  name: "boxIllustration",
  props: ["illustration"],
  methods: {}
};
var script$5 = boxIllustration;var _hoisted_1$4 = {
  class: "box-illustration"
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [vue.createElementVNode("div", {
    class: "inner-box",
    style: vue.normalizeStyle({
      paddingBottom: _ctx.illustration.srcFull[2] / _ctx.illustration.srcFull[1] * 100 + '%'
    })
  }, [vue.createElementVNode("div", {
    class: "box-img",
    style: vue.normalizeStyle({
      backgroundImage: 'url(' + _ctx.illustration.srcFull[0] + ')'
    })
  }, null, 4)], 4)]);
}script$5.render = render$5;var boxNarration = {
  name: "boxNarration",
  props: ["currentTabs", "lang", "reedbeams"],
  methods: {
    reedBeams: function reedBeams(id) {
      console.log("OPLA AMIGO --- ");
      console.log(id);
      this.$emit("reedbeams", id);
    }
  }
};
var script$4 = boxNarration;var _hoisted_1$3 = {
  class: "box-narration"
};
var _hoisted_2$3 = {
  class: "tab-results"
};
var _hoisted_3$3 = {
  key: 0,
  class: "p"
};
var _hoisted_4$1 = ["onClick"];
var _hoisted_5 = {
  key: 0,
  class: "single-beem-foward-box"
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [vue.createElementVNode("div", _hoisted_2$3, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.currentTabs, function (tab, index) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: tab.id,
      class: vue.normalizeClass(_ctx.currentTabs.length == 1 ? 'label-description' : 'label-multiple-chose')
    }, [_ctx.currentTabs.length == 1 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$3, vue.toDisplayString(tab.text[_ctx.lang]), 1)) : (vue.openBlock(), vue.createElementBlock("div", {
      key: 1,
      onClick: function onClick($event) {
        return _ctx.reedBeams(tab.id);
      },
      class: "p"
    }, vue.toDisplayString(tab.text[_ctx.lang]), 9, _hoisted_4$1))], 2);
  }), 128))]), _ctx.currentTabs.length == 1 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, [vue.createElementVNode("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.reedBeams(_ctx.currentTabs[0].id);
    }),
    class: "icon-proceed"
  })])) : vue.createCommentVNode("", true)]);
}script$4.render = render$4;var boxNarrationGameEnd = {
  name: "boxNarrationGameEnd",
  props: ["currentTabs", "lang", "reedbeams"],
  methods: {
    reedBeams: function reedBeams(id) {
      console.log("OPLA AMIGO --- ");
      console.log(id);
      this.$emit("reedbeams", id);
    }
  }
};
var script$3 = boxNarrationGameEnd;var _hoisted_1$2 = {
  class: "box-narration"
};
var _hoisted_2$2 = {
  class: "tab-results"
};
var _hoisted_3$2 = {
  key: 0,
  class: "p"
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [vue.createElementVNode("div", _hoisted_2$2, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.currentTabs, function (tab, index) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: tab.id,
      class: vue.normalizeClass(_ctx.currentTabs.length == 1 ? 'label-description' : 'label-multiple-chose')
    }, [_ctx.currentTabs.length == 1 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$2, vue.toDisplayString(tab.text[_ctx.lang]), 1)) : vue.createCommentVNode("", true)], 2);
  }), 128))])]);
}script$3.render = render$3;var boxNarrationGameOver = {
  name: "boxNarrationGameOver",
  props: ["currentTabs", "lang", "reedbeams"],
  methods: {
    reedBeams: function reedBeams(id) {
      console.log("OPLA AMIGO --- ");
      console.log(id);
      this.$emit("reedbeams", id);
    }
  }
};
var script$2 = boxNarrationGameOver;var _hoisted_1$1 = {
  class: "box-narration"
};
var _hoisted_2$1 = {
  class: "tab-results"
};
var _hoisted_3$1 = {
  key: 0,
  class: "p"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [vue.createElementVNode("div", _hoisted_2$1, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.currentTabs, function (tab, index) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: tab.id,
      class: vue.normalizeClass(_ctx.currentTabs.length == 1 ? 'label-description' : 'label-multiple-chose')
    }, [_ctx.currentTabs.length == 1 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$1, vue.toDisplayString(tab.text[_ctx.lang]), 1)) : vue.createCommentVNode("", true)], 2);
  }), 128))])]);
}script$2.render = render$2;var boxText = {
  name: "boxText",
  props: ["narrationBox", "lang", "currentTabs", "reedBeams"],
  components: {
    boxnarration: script$4,
    gameEnd: script$3,
    gameOver: script$2
  }
};
var script$1 = boxText;function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_boxnarration = vue.resolveComponent("boxnarration");

  var _component_gameEnd = vue.resolveComponent("gameEnd");

  var _component_gameOver = vue.resolveComponent("gameOver");

  return vue.openBlock(), vue.createElementBlock("span", null, [_ctx.narrationBox == 'default' || _ctx.narrationBox == 'descriptions' || _ctx.narrationBox == 'chose' ? (vue.openBlock(), vue.createBlock(_component_boxnarration, {
    key: 0,
    lang: _ctx.lang,
    "current-tabs": _ctx.currentTabs,
    onReedBeams: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.emit('reedBeams');
    })
  }, null, 8, ["lang", "current-tabs"])) : vue.createCommentVNode("", true), _ctx.narrationBox == 'end' ? (vue.openBlock(), vue.createBlock(_component_gameEnd, {
    key: 1,
    lang: _ctx.lang,
    "current-tabs": _ctx.currentTabs,
    onReedBeams: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.emit('reedBeams');
    })
  }, null, 8, ["lang", "current-tabs"])) : vue.createCommentVNode("", true), _ctx.narrationBox == 'game over' ? (vue.openBlock(), vue.createBlock(_component_gameOver, {
    key: 2,
    lang: _ctx.lang,
    "current-tabs": _ctx.currentTabs,
    onReedBeams: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.emit('reedBeams');
    })
  }, null, 8, ["lang", "current-tabs"])) : vue.createCommentVNode("", true)]);
}script$1.render = render$1;//returns a copy of the object
function deepCopy(obj) {
  var rv;

  switch (_typeof(obj)) {
    case "object":
      if (obj === null) {
        // null => null
        rv = null;
      } else {
        switch (toString.call(obj)) {
          case "[object Array]":
            // It's an array, create a new array with
            // deep copies of the entries
            rv = obj.map(deepCopy);
            break;

          case "[object Date]":
            // Clone the date
            rv = new Date(obj);
            break;

          case "[object RegExp]":
            // Clone the RegExp
            rv = new RegExp(obj);
            break;
          // ...probably a few others

          default:
            // Some other kind of object, deep-copy its
            // properties into a new object
            rv = Object.keys(obj).reduce(function (prev, key) {
              prev[key] = deepCopy(obj[key]);
              return prev;
            }, {});
            break;
        }
      }

      break;

    default:
      // It's a primitive, copy via assignment
      rv = obj;
      break;
  }

  return rv;
}function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var script = /*#__PURE__*/vue.defineComponent({
  name: "game",
  components: {
    boxillustration: script$5,
    boxText: script$1
  },
  props: {
    propLang: {
      type: String,
      default: "null-lang"
    },
    langEditor: {
      type: String,
      default: "en"
    },
    strings: {
      type: Object,
      default: defaultStrings
    },
    gameData: {
      type: Object,
      default: defaultStory
    }
  },
  //["lang", "strings", "gameData", "playerData", "gameIntent"],
  data: function data() {
    return {
      lang: false,
      textualTabs: ["descriptions", "chose", "game over", "end"],
      playerState: "playing",
      player: {
        item: []
      },
      currentTabs: [],
      illustration: false,
      onRunError: [],
      listBadMixId: "",
      cover: true,
      gameLoaded: false
    };
  },
  watch: {
    narrationBox: function narrationBox(val) {
      if (val == "node-bad-mix") {
        this.setListBadMixId();
      }
    }
  },
  mounted: function mounted() {
    if (this.propLang !== "null-lang") {
      this.lang = this.propLang;
    } else {
      this.lang = this.gameData.postInfo.langList[0];
    }

    this.gameIntentLoad();
  },
  computed: {
    narrationBox: function narrationBox() {
      if (this.onRunError.length > 0) {
        return "false";
      } else {
        if (this.currentTabs.length > 0) {
          if (this.currentTabs.length == 1) {
            return this.currentTabs[0].type;
          } else {
            var allowed = ["chose"];
            var listTypeCheck = this.currentTabs.filter(function (element) {
              return allowed.includes(element.type);
            });

            if (listTypeCheck.length == this.currentTabs.length) {
              return "default";
            } else {
              return "node-bad-mix";
            }
          }
        } else {
          return false;
        }
      }
    }
  },
  methods: {
    /* |||||||||||||||||||| GAME CORE |||||||||||||||||||||| */
    gameIntentLoad: function gameIntentLoad() {
      var _this = this;

      this.playerState = "playing";
      this.player = {
        stats: [],
        item: []
      };
      /* carico liste statistiche con livello preimpostato a 0 se non presenti nella whitelist */

      if (this.gameData.stats) {
        this.gameData.stats.forEach(function (stats) {
          var newStats = deepCopy(stats);
          newStats.level = 0;

          _this.player.stats.push(newStats);
        });
      } //creo lista oggetti da visualizzare


      this.setPlayerItemFiltered();
      /* apro la tab di inizio */

      var startPointArray = [];
      var startPointId = this.gameData.story.tabs.find(function (element) {
        return element.gameStart;
      }).id;
      startPointArray.push(startPointId);
      this.navigation(startPointArray);
    },

    /* stabilisco tabs da vedere */
    navigation: function navigation(newIdArray) {
      var tabs = this.gameData.story.tabs.filter(function (el) {
        return newIdArray.includes(el.id);
      });
      var tabsToNavigate = this.ResoveTabsList(tabs);

      if (tabsToNavigate.length == 0) {
        this.error = "!!! -- id tabs sbagliato -- !!";
      } else {
        if (tabsToNavigate.length == 1) {
          this.singleBeemFoward = true; //setto immagine

          if (tabsToNavigate[0].img) {
            this.setImage(tabsToNavigate[0].img);
          } //salvo dati


          if (tabsToNavigate[0].save == true) {
            this.saveData();
          }
        } else {
          this.singleBeemFoward = false;
        }

        this.currentTabs = tabsToNavigate;
      }
    },
    //------------------------------------------------------
    ResoveTabsList: function ResoveTabsList(tabs) {
      var _this2 = this;

      var stop = false;
      var n = 0;
      var textualTabs = this.textualTabs;
      var collectionOfTextualTabs = tabs;

      var _loop = function _loop() {
        n++;
        var allTextual = true;
        var newCollection = []; //controllo chi è testuale e chi no

        collectionOfTextualTabs.forEach(function (el) {
          if (!textualTabs.includes(el.type)) {
            allTextual = false;
            newCollection = [].concat(_toConsumableArray(newCollection), _toConsumableArray(_this2.ResoveTab(el)));
          } else {
            newCollection.push(el);
          }
        });
        collectionOfTextualTabs = newCollection;

        if (allTextual == true || n >= 100) {
          stop = true;
        }
      };

      while (stop == false) {
        _loop();
      }

      return collectionOfTextualTabs;
    },

    /* risolvo singole tab logiche tab e passo a quelle successive il risultato è un'array di tab */
    ResoveTab: function ResoveTab(tab) {
      function operatorResolve(dn1, operator, dn2) {
        var n1 = parseInt(dn1);
        var n2 = parseInt(dn2);

        switch (operator) {
          case ">":
            if (n1 > n2) {
              return true;
            } else {
              return false;
            }

          case ">=":
            if (n1 >= n2) {
              return true;
            } else {
              return false;
            }

          case "<":
            if (n1 < n2) {
              return true;
            } else {
              return false;
            }

          case "<=":
            if (n1 <= n2) {
              return true;
            } else {
              return false;
            }

          case "==":
            if (n1 == n2) {
              return true;
            } else {
              return false;
            }
        }
      }

      var tabToAdd = [];
      var stop = false;
      var currentTab;

      if (_typeof(tab) === "object") {
        currentTab = tab;
      } else {
        /* si tratta di una inizializzazione (è l'id di un nodo start) */
        currentTab = this.gameData.story.tabs.find(function (el) {
          return el.id == tab;
        });
      }

      switch (currentTab.type) {
        case "start":
          break;

        case "descriptions":
          tabToAdd.push(currentTab);
          stop = true;
          break;

        case "chose":
          tabToAdd.push(currentTab);
          stop = true;
          break;

        case "game over":
          this.playerState = "game over";
          tabToAdd.push(currentTab);
          stop = true;
          break;

        case "end":
          this.playerState = "game end";
          tabToAdd.push(currentTab);
          stop = true;
          break;

        case "redirect":
          var errorRedirect = false;
          currentTab.listRedirectId.forEach(function (el) {
            if (!el) {
              errorRedirect = true;
            }
          });

          if (errorRedirect == false) {
            var idRedirect;

            if (currentTab.listRedirectId.length == 1) {
              idRedirect = currentTab.listRedirectId[0];
            } else {
              var indexRandom = randomNum(0, currentTab.listRedirectId.length - 1);
              idRedirect = currentTab.listRedirectId[indexRandom];
            }

            var tabToRedirect = this.gameData.story.tabs.find(function (element) {
              return element.id == idRedirect;
            });
            currentTab = tabToRedirect;
          } else {
            var error = this.strings.redirectError.langEditor + " ( ID: " + currentTab.id + " )";
            this.onRunError.push(error);
            stop = true;
          }

          break;

        case "set stat":
          var itemExist3 = this.gameData.stats.find(function (el) {
            return el.id == currentTab.idStat;
          });

          if (itemExist3) {
            if (itemExist3.length == 0 || currentTab.operator == false) {
              var _error = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";

              this.onRunError.push(_error);
              stop = true;
            } else {
              this.modifyStat(currentTab.idStat, currentTab.operator, currentTab.ammount);
            }
          } else {
            var _error2 = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";

            this.onRunError.push(_error2);
            stop = true;
          }

          break;

        case "set object":
          var itemExist2 = this.gameData.items.find(function (el) {
            return el.id == currentTab.idObject;
          });

          if (itemExist2) {
            if (itemExist2.length == 0 || currentTab.operator == false) {
              var _error3 = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";

              this.onRunError.push(_error3);
              stop = true;
            } else {
              this.modifyItem(currentTab.idObject, currentTab.operator, currentTab.ammount);
            }
          } else {
            var _error4 = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";

            this.onRunError.push(_error4);
            stop = true;
          }

          break;

        case "if stat":
          var statToCheck = this.player.stats.find(function (element) {
            return element.id == currentTab.idStat;
          });

          if (statToCheck) {
            /* controllo che non siano presenti errori nella espressione */
            if (currentTab.ammount === false || currentTab.ammount == undefined || currentTab.operator == false) {
              var _error5 = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";

              this.onRunError.push(_error5);
              stop = true;
            } else {
              var status = operatorResolve(statToCheck.level, currentTab.operator, currentTab.ammount);

              if (status) {
                var tabsTrue = this.gameData.story.tabs.filter(function (element) {
                  return currentTab.trueId.includes(element.id);
                });
                tabToAdd = tabsTrue;
                stop = true;
              } else {
                var tabsFalse = this.gameData.story.tabs.filter(function (element) {
                  return currentTab.falseId.includes(element.id);
                });
                tabToAdd = tabsFalse;
                stop = true;
              }
            }
          } else {
            var _error6 = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";

            this.onRunError.push(_error6);
            stop = true;
          }

          break;

        case "if item":
          var itemToCheck = this.player.item.filter(function (element) {
            return element.id == currentTab.idObject;
          }).length;
          /*
          																																    controllo che non siano presenti errori nella espressione
          																																  */
          //controllo se esiste l'oggetto

          var itemExist = this.gameData.items.find(function (el) {
            return el.id == currentTab.idObject;
          });

          if (itemExist) {
            if (itemExist.length == 0 || currentTab.operator == false) {
              var _error7 = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";

              this.onRunError.push(_error7);
              stop = true;
            } else {
              var status2 = operatorResolve(itemToCheck, currentTab.operator, currentTab.ammount);

              if (status2) {
                var _tabsTrue = this.gameData.story.tabs.filter(function (element) {
                  return currentTab.trueId.includes(element.id);
                });

                tabToAdd = _tabsTrue;
                stop = true;
              } else {
                var _tabsFalse = this.gameData.story.tabs.filter(function (element) {
                  return currentTab.falseId.includes(element.id);
                });

                tabToAdd = _tabsFalse;
                stop = true;
              }
            }
          } else {
            var _error8 = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";

            this.onRunError.push(_error8);
            stop = true;
          }

          break;
      }

      if (stop == false) {
        /* trovo nodi successivi perchè il corrente nodo non si può visualizzare */
        this.gameData.story.beams.forEach(function (el) {
          if (currentTab.id == el.from) {
            tabToAdd.push(el.to);
          }
        });
        stop = true;
      }

      return tabToAdd;
    },

    /* modify stat */
    modifyStat: function modifyStat(idStat, operator, ammount) {
      var chosenStat = this.gameData.stats.find(function (element) {
        return element.id == idStat;
      });
      var playerStat = this.player.stats.find(function (element) {
        return element.id == idStat;
      });
      var resultAmmount;
      var use;

      switch (operator) {
        case "+":
          resultAmmount = ammount;
          use = 1;
          break;

        case "-":
          resultAmmount = ammount;
          use = 2;
          break;

        case "*":
          resultAmmount = parseInt(playerStat.level) * parseInt(ammount);
          use = 1;
          break;

        case "/":
          resultAmmount = Math.floor(parseInt(playerStat.level) / parseInt(ammount));
          use = 2;
          break;

        case "=":
          resultAmmount = ammount;
          use = 5;
          break;
      } //  + *


      if (use == 1) {
        /* controllo se giocatore ha statistica */
        playerStat.level = parseInt(playerStat.level) + parseInt(resultAmmount);
      } //  - /


      if (use == 2) {
        /* controllo se giocatore ha statistica */
        playerStat.level = parseInt(playerStat.level) - parseInt(resultAmmount);
      } //  =


      if (use == 5) {
        playerStat.level = resultAmmount;
      } //CORREZIONI VALORE ---------------------


      if (playerStat.level > chosenStat.max) {
        playerStat.level = chosenStat.max;
      }

      if (playerStat.level < 0 && !isNaN(playerStat.level)) {
        playerStat.level = 0;
      } //---------------------------------------

    },

    /* modify item */
    modifyItem: function modifyItem(idObject, operator, ammount) {

      var chosenItem = this.gameData.items.find(function (element) {
        return element.id == idObject;
      });
      var nItemPlayer = this.player.item.filter(function (el) {
        return el.id == chosenItem.id;
      }).length;
      var resultAmmount;
      var use; //resolve

      switch (operator) {
        case "+":
          resultAmmount = ammount;
          use = 1;
          break;

        case "-":
          resultAmmount = ammount;
          use = 2;
          break;

        case "*":
          resultAmmount = parseInt(nItemPlayer) * parseInt(ammount);
          use = 1;
          break;

        case "/":
          resultAmmount = parseInt(nItemPlayer) - Math.floor(parseInt(nItemPlayer) / parseInt(ammount));
          use = 2;
          break;

        case "=":
          if (ammount < nItemPlayer) {
            resultAmmount = nItemPlayer - ammount;
            use = 2;
          } else {
            resultAmmount = ammount - nItemPlayer;
            use = 1;
          }

          break;
      }

      if (use == 1) {
        for (var index = 0; index < resultAmmount; index++) {
          this.player.item.push(chosenItem);
        }
      }

      if (use == 2) {
        var newArray = [];
        var nPushed = 0;
        this.player.item.forEach(function (element) {
          if (chosenItem.id == element.id) {
            nPushed++;

            if (nPushed <= nItemPlayer - resultAmmount) {
              newArray.push(element);
            }
          } else {
            newArray.push(element);
          }
        });
        this.player.item = newArray;
      } //setto lista oggetti
      //this.player.item = totalResult
      //rifaccio lista oggetti da visualizzare


      this.setPlayerItemFiltered();
    },
    //------------------------------------------------------

    /* leggo beem da punto di inizio a punto di fine */
    reedBeams: function reedBeams(fromId) {
      var newIdArray = [];
      this.gameData.story.beams.forEach(function (beam) {
        if (fromId == beam.from) {
          newIdArray.push(beam.to);
        }
      });
      this.navigation(newIdArray);
    },
    saveData: function saveData() {},
    setImage: function setImage(imageName) {
      this.illustration = imageName;
    },

    /* ||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

    /* animazione selettore */
    animatePaperSelector: function animatePaperSelector() {
      var _this3 = this;

      if (this.hoveCharacterSheet == true) {
        if (this.subTabCharacterSheet == "stats") {
          this.player.stats.forEach(function (element) {
            if (element.id == _this3.seletedItem) {
              element.active = 2;
            } else {
              if (element.active != 0) {
                element.active = 1;
              }
            }
          });
        } else {
          this.playerItemFiltered.forEach(function (element) {
            if (element.id == _this3.seletedItem) {
              element.active = 2;
            } else {
              if (element.active != 0) {
                element.active = 1;
              }
            }
          });
        }
      }
    },
    clearAnimatePaperSelector: function clearAnimatePaperSelector() {
      this.player.stats.forEach(function (element) {
        element.active = 0;
      });
      this.player.item.forEach(function (element) {
        element.active = 0;
      });
    },

    /* setto paper */
    setDescriptionPaper: function setDescriptionPaper(item) {
      var _this4 = this;

      this.seletedItem = item.id;
      this.animatePaperSelector();
      this.descriptionPaperName = item.name[this.lang];
      this.descriptionPaperDescription = item.description[this.lang];
      this.oldItemTap = this.itemTap; //Object.assign({},this.itemTap)

      this.itemTap = this.itemTap + 1; //Object.assign({},this.itemTap) + 1

      setTimeout(function () {
        if (_this4.itemTap == 0) {
          _this4.seletedItem = false;

          _this4.animatePaperSelector();
        }
      }, 4000);
    },

    /* setto lista oggetti da esporre  */
    setPlayerItemFiltered: function setPlayerItemFiltered() {
      var _this5 = this;

      var listItems = [];
      this.player.item.forEach(function (item) {
        var found = listItems.find(function (element) {
          return element.id == item.id;
        });

        if (found == undefined) {
          var nCopy = _this5.player.item.filter(function (element) {
            return element.id == item.id;
          }).length;

          var newItem = Object.assign({}, item);
          newItem.amount = nCopy;
          listItems.push(newItem);
        }
      });
      this.playerItemFiltered = listItems;
    },

    /* lista nodi badMix */
    setListBadMixId: function setListBadMixId() {
      var BadMixList = "";
      var allDescription = this.currentTabs.filter(function (el) {
        return el.type == "descriptions";
      });
      allDescription.forEach(function (el, index) {
        BadMixList = BadMixList + el.id;
        if (index + 1 < allDescription.length) BadMixList = BadMixList + ", ";
      });
      this.listBadMixId = BadMixList;
    },

    /* PROJECT X ------------------------------------- */
    activateDemo: function activateDemo() {
      //full screen
      function requestFullScreen(element) {
        // Supports most browsers and their versions.
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

        if (requestMethod) {
          // Native full screen.
          requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") {
          // Older IE.
          var wscript = new ActiveXObject("WScript.Shell");

          if (wscript !== null) {
            wscript.SendKeys("{F11}");
          }
        }
      }

      var elem = document.body; // Make the body go full screen.

      requestFullScreen(elem);
    }
  }
});var _hoisted_1 = {
  class: "game-grid"
};
var _hoisted_2 = {
  key: 1,
  class: "log-app"
};
var _hoisted_3 = {
  key: 0,
  class: "game-error"
};
var _hoisted_4 = {
  key: 1,
  class: "game-error"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_boxillustration = vue.resolveComponent("boxillustration");

  var _component_boxText = vue.resolveComponent("boxText");

  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [_ctx.illustration ? (vue.openBlock(), vue.createBlock(_component_boxillustration, {
    key: 0,
    illustration: _ctx.illustration
  }, null, 8, ["illustration"])) : vue.createCommentVNode("", true), vue.createVNode(_component_boxText, {
    narrationBox: _ctx.narrationBox,
    lang: _ctx.lang,
    "current-tabs": _ctx.currentTabs,
    onReedBeams: _ctx.reedBeams
  }, null, 8, ["narrationBox", "lang", "current-tabs", "onReedBeams"]), _ctx.narrationBox == 'false' || _ctx.narrationBox == 'node-bad-mix' ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [_ctx.narrationBox == false && _ctx.onRunError.length == 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, vue.toDisplayString(_ctx.strings.noEnd.langEditor), 1)) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.onRunError, function (el, index) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: index,
      class: "game-error"
    }, vue.toDisplayString(el), 1);
  }), 128)), _ctx.narrationBox == 'node-bad-mix' ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, vue.toDisplayString(_ctx.strings.nodeBadMix.langEditor) + " " + vue.toDisplayString(_ctx.listBadMixId) + " ) ", 1)) : vue.createCommentVNode("", true)])) : vue.createCommentVNode("", true), vue.createElementVNode("div", {
    class: vue.normalizeClass(["cover", {
      'hide-cover': _ctx.cover == false
    }])
  }, null, 2)]);
}script.render = render;/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,TestStLibrarySample:script$6,game:script});var install = function installTestStLibrary(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,TestStLibrarySample:script$6,game:script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;