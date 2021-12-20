import { defineComponent, openBlock, createElementBlock, createElementVNode, createTextVNode, toDisplayString, normalizeStyle, Fragment, renderList, normalizeClass, createCommentVNode, resolveComponent, createBlock, createVNode } from 'vue';

var script$6 = /*#__PURE__*/defineComponent({
  name: 'TestStLibrarySample',

  // vue component name
  data() {
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
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message.action} ${message.amount || ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

const _hoisted_1$5 = {
  class: "test-st-library-sample"
};

const _hoisted_2$4 = /*#__PURE__*/createTextVNode(".");

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [createElementVNode("p", null, [createTextVNode("The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1), createElementVNode("b", null, toDisplayString(_ctx.counter), 1), _hoisted_2$4]), createElementVNode("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.increment && _ctx.increment(...arguments);
    })
  }, " Click +1 "), createElementVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.decrement && _ctx.decrement(...arguments);
    })
  }, " Click -1 "), createElementVNode("button", {
    onClick: _cache[2] || (_cache[2] = $event => _ctx.increment(5))
  }, " Click +5 "), createElementVNode("button", {
    onClick: _cache[3] || (_cache[3] = $event => _ctx.decrement(5))
  }, " Click -5 "), createElementVNode("button", {
    onClick: _cache[4] || (_cache[4] = function () {
      return _ctx.reset && _ctx.reset(...arguments);
    })
  }, " Reset ")]);
}

function styleInject(css, ref) {
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
}

var css_248z = "\n.test-st-library-sample[data-v-09179d00] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.test-st-library-sample p[data-v-09179d00] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z);

script$6.render = render$6;
script$6.__scopeId = "data-v-09179d00";

var noData = {
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
};

var postInfo = {
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
};

let boxIllustration = {
  name: "boxIllustration",
  props: ["illustration"],
  methods: {}
};
var script$5 = boxIllustration;

const _hoisted_1$4 = {
  class: "box-illustration"
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [createElementVNode("div", {
    class: "inner-box",
    style: normalizeStyle({
      paddingBottom: _ctx.illustration.srcFull[2] / _ctx.illustration.srcFull[1] * 100 + '%'
    })
  }, [createElementVNode("div", {
    class: "box-img",
    style: normalizeStyle({
      backgroundImage: 'url(' + _ctx.illustration.srcFull[0] + ')'
    })
  }, null, 4)], 4)]);
}

script$5.render = render$5;

let boxNarration = {
  name: "boxNarration",
  props: ["currentTabs", "lang", "reedbeams"],
  methods: {
    reedBeams(id) {
      console.log("OPLA AMIGO --- ");
      console.log(id);
      this.$emit("reedbeams", id);
    }

  }
};
var script$4 = boxNarration;

const _hoisted_1$3 = {
  class: "box-narration"
};
const _hoisted_2$3 = {
  class: "tab-results"
};
const _hoisted_3$3 = {
  key: 0,
  class: "p"
};
const _hoisted_4$1 = ["onClick"];
const _hoisted_5 = {
  key: 0,
  class: "single-beem-foward-box"
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [createElementVNode("div", _hoisted_2$3, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentTabs, (tab, index) => {
    return openBlock(), createElementBlock("div", {
      key: tab.id,
      class: normalizeClass(_ctx.currentTabs.length == 1 ? 'label-description' : 'label-multiple-chose')
    }, [_ctx.currentTabs.length == 1 ? (openBlock(), createElementBlock("div", _hoisted_3$3, toDisplayString(tab.text[_ctx.lang]), 1)) : (openBlock(), createElementBlock("div", {
      key: 1,
      onClick: $event => _ctx.reedBeams(tab.id),
      class: "p"
    }, toDisplayString(tab.text[_ctx.lang]), 9, _hoisted_4$1))], 2);
  }), 128))]), _ctx.currentTabs.length == 1 ? (openBlock(), createElementBlock("div", _hoisted_5, [createElementVNode("div", {
    onClick: _cache[0] || (_cache[0] = $event => _ctx.reedBeams(_ctx.currentTabs[0].id)),
    class: "icon-proceed"
  })])) : createCommentVNode("", true)]);
}

script$4.render = render$4;

let boxNarrationGameEnd = {
  name: "boxNarrationGameEnd",
  props: ["currentTabs", "lang", "reedbeams"],
  methods: {
    reedBeams(id) {
      console.log("OPLA AMIGO --- ");
      console.log(id);
      this.$emit("reedbeams", id);
    }

  }
};
var script$3 = boxNarrationGameEnd;

const _hoisted_1$2 = {
  class: "box-narration"
};
const _hoisted_2$2 = {
  class: "tab-results"
};
const _hoisted_3$2 = {
  key: 0,
  class: "p"
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [createElementVNode("div", _hoisted_2$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentTabs, (tab, index) => {
    return openBlock(), createElementBlock("div", {
      key: tab.id,
      class: normalizeClass(_ctx.currentTabs.length == 1 ? 'label-description' : 'label-multiple-chose')
    }, [_ctx.currentTabs.length == 1 ? (openBlock(), createElementBlock("div", _hoisted_3$2, toDisplayString(tab.text[_ctx.lang]), 1)) : createCommentVNode("", true)], 2);
  }), 128))])]);
}

script$3.render = render$3;

let boxNarrationGameOver = {
  name: "boxNarrationGameOver",
  props: ["currentTabs", "lang", "reedbeams"],
  methods: {
    reedBeams(id) {
      console.log("OPLA AMIGO --- ");
      console.log(id);
      this.$emit("reedbeams", id);
    }

  }
};
var script$2 = boxNarrationGameOver;

const _hoisted_1$1 = {
  class: "box-narration"
};
const _hoisted_2$1 = {
  class: "tab-results"
};
const _hoisted_3$1 = {
  key: 0,
  class: "p"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentTabs, (tab, index) => {
    return openBlock(), createElementBlock("div", {
      key: tab.id,
      class: normalizeClass(_ctx.currentTabs.length == 1 ? 'label-description' : 'label-multiple-chose')
    }, [_ctx.currentTabs.length == 1 ? (openBlock(), createElementBlock("div", _hoisted_3$1, toDisplayString(tab.text[_ctx.lang]), 1)) : createCommentVNode("", true)], 2);
  }), 128))])]);
}

script$2.render = render$2;

let boxText = {
  name: "boxText",
  props: ["narrationBox", "lang", "currentTabs", "reedBeams"],
  components: {
    boxnarration: script$4,
    gameEnd: script$3,
    gameOver: script$2
  }
};
var script$1 = boxText;

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_boxnarration = resolveComponent("boxnarration");

  const _component_gameEnd = resolveComponent("gameEnd");

  const _component_gameOver = resolveComponent("gameOver");

  return openBlock(), createElementBlock("span", null, [_ctx.narrationBox == 'default' || _ctx.narrationBox == 'descriptions' || _ctx.narrationBox == 'chose' ? (openBlock(), createBlock(_component_boxnarration, {
    key: 0,
    lang: _ctx.lang,
    "current-tabs": _ctx.currentTabs,
    onReedBeams: _cache[0] || (_cache[0] = $event => _ctx.emit('reedBeams'))
  }, null, 8, ["lang", "current-tabs"])) : createCommentVNode("", true), _ctx.narrationBox == 'end' ? (openBlock(), createBlock(_component_gameEnd, {
    key: 1,
    lang: _ctx.lang,
    "current-tabs": _ctx.currentTabs,
    onReedBeams: _cache[1] || (_cache[1] = $event => _ctx.emit('reedBeams'))
  }, null, 8, ["lang", "current-tabs"])) : createCommentVNode("", true), _ctx.narrationBox == 'game over' ? (openBlock(), createBlock(_component_gameOver, {
    key: 2,
    lang: _ctx.lang,
    "current-tabs": _ctx.currentTabs,
    onReedBeams: _cache[2] || (_cache[2] = $event => _ctx.emit('reedBeams'))
  }, null, 8, ["lang", "current-tabs"])) : createCommentVNode("", true)]);
}

script$1.render = render$1;

//returns a copy of the object
function deepCopy(obj) {
  var rv;

  switch (typeof obj) {
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
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var script = /*#__PURE__*/defineComponent({
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
  data: function () {
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
    narrationBox: function (val) {
      if (val == "node-bad-mix") {
        this.setListBadMixId();
      }
    }
  },

  mounted() {
    if (this.propLang !== "null-lang") {
      this.lang = this.propLang;
    } else {
      this.lang = this.gameData.postInfo.langList[0];
    }

    this.gameIntentLoad();
  },

  computed: {
    narrationBox: function () {
      if (this.onRunError.length > 0) {
        return "false";
      } else {
        if (this.currentTabs.length > 0) {
          if (this.currentTabs.length == 1) {
            return this.currentTabs[0].type;
          } else {
            let allowed = ["chose"];
            let listTypeCheck = this.currentTabs.filter(element => allowed.includes(element.type));

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
    gameIntentLoad() {
      this.playerState = "playing";
      this.player = {
        stats: [],
        item: []
      };
      /* carico liste statistiche con livello preimpostato a 0 se non presenti nella whitelist */

      if (this.gameData.stats) {
        this.gameData.stats.forEach(stats => {
          let newStats = deepCopy(stats);
          newStats.level = 0;
          this.player.stats.push(newStats);
        });
      } //creo lista oggetti da visualizzare


      this.setPlayerItemFiltered();
      /* apro la tab di inizio */

      let startPointArray = [];
      let startPointId = this.gameData.story.tabs.find(element => element.gameStart).id;
      startPointArray.push(startPointId);
      this.navigation(startPointArray);
    },

    /* stabilisco tabs da vedere */
    navigation(newIdArray) {
      let tabs = this.gameData.story.tabs.filter(el => newIdArray.includes(el.id));
      let tabsToNavigate = this.ResoveTabsList(tabs);

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
    ResoveTabsList(tabs) {
      let stop = false;
      let n = 0;
      const textualTabs = this.textualTabs;
      let collectionOfTextualTabs = tabs;

      while (stop == false) {
        n++;
        let allTextual = true;
        let newCollection = []; //controllo chi è testuale e chi no

        collectionOfTextualTabs.forEach(el => {
          if (!textualTabs.includes(el.type)) {
            allTextual = false;
            newCollection = [...newCollection, ...this.ResoveTab(el)];
          } else {
            newCollection.push(el);
          }
        });
        collectionOfTextualTabs = newCollection;

        if (allTextual == true || n >= 100) {
          stop = true;
        }
      }

      return collectionOfTextualTabs;
    },

    /* risolvo singole tab logiche tab e passo a quelle successive il risultato è un'array di tab */
    ResoveTab(tab) {
      function operatorResolve(dn1, operator, dn2) {
        const n1 = parseInt(dn1);
        const n2 = parseInt(dn2);

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

      let tabToAdd = [];
      let stop = false;
      let currentTab;

      if (typeof tab === "object") {
        currentTab = tab;
      } else {
        /* si tratta di una inizializzazione (è l'id di un nodo start) */
        currentTab = this.gameData.story.tabs.find(el => el.id == tab);
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
          let errorRedirect = false;
          currentTab.listRedirectId.forEach(el => {
            if (!el) {
              errorRedirect = true;
            }
          });

          if (errorRedirect == false) {
            let idRedirect;

            if (currentTab.listRedirectId.length == 1) {
              idRedirect = currentTab.listRedirectId[0];
            } else {
              let indexRandom = randomNum(0, currentTab.listRedirectId.length - 1);
              idRedirect = currentTab.listRedirectId[indexRandom];
            }

            let tabToRedirect = this.gameData.story.tabs.find(element => element.id == idRedirect);
            currentTab = tabToRedirect;
          } else {
            let error = this.strings.redirectError.langEditor + " ( ID: " + currentTab.id + " )";
            this.onRunError.push(error);
            stop = true;
          }

          break;

        case "set stat":
          let itemExist3 = this.gameData.stats.find(el => el.id == currentTab.idStat);

          if (itemExist3) {
            if (itemExist3.length == 0 || currentTab.operator == false) {
              let error = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";
              this.onRunError.push(error);
              stop = true;
            } else {
              this.modifyStat(currentTab.idStat, currentTab.operator, currentTab.ammount);
            }
          } else {
            let error = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";
            this.onRunError.push(error);
            stop = true;
          }

          break;

        case "set object":
          let itemExist2 = this.gameData.items.find(el => el.id == currentTab.idObject);

          if (itemExist2) {
            if (itemExist2.length == 0 || currentTab.operator == false) {
              let error = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";
              this.onRunError.push(error);
              stop = true;
            } else {
              this.modifyItem(currentTab.idObject, currentTab.operator, currentTab.ammount);
            }
          } else {
            let error = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";
            this.onRunError.push(error);
            stop = true;
          }

          break;

        case "if stat":
          let statToCheck = this.player.stats.find(element => element.id == currentTab.idStat);

          if (statToCheck) {
            /* controllo che non siano presenti errori nella espressione */
            if (currentTab.ammount === false || currentTab.ammount == undefined || currentTab.operator == false) {
              let error = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";
              this.onRunError.push(error);
              stop = true;
            } else {
              let status = operatorResolve(statToCheck.level, currentTab.operator, currentTab.ammount);

              if (status) {
                let tabsTrue = this.gameData.story.tabs.filter(element => currentTab.trueId.includes(element.id));
                tabToAdd = tabsTrue;
                stop = true;
              } else {
                let tabsFalse = this.gameData.story.tabs.filter(element => currentTab.falseId.includes(element.id));
                tabToAdd = tabsFalse;
                stop = true;
              }
            }
          } else {
            let error = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";
            this.onRunError.push(error);
            stop = true;
          }

          break;

        case "if item":
          let itemToCheck = this.player.item.filter(element => element.id == currentTab.idObject).length;
          /*
          																																    controllo che non siano presenti errori nella espressione
          																																  */
          //controllo se esiste l'oggetto

          let itemExist = this.gameData.items.find(el => el.id == currentTab.idObject);

          if (itemExist) {
            if (itemExist.length == 0 || currentTab.operator == false) {
              let error = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";
              this.onRunError.push(error);
              stop = true;
            } else {
              let status2 = operatorResolve(itemToCheck, currentTab.operator, currentTab.ammount);

              if (status2) {
                let tabsTrue = this.gameData.story.tabs.filter(element => currentTab.trueId.includes(element.id));
                tabToAdd = tabsTrue;
                stop = true;
              } else {
                let tabsFalse = this.gameData.story.tabs.filter(element => currentTab.falseId.includes(element.id));
                tabToAdd = tabsFalse;
                stop = true;
              }
            }
          } else {
            let error = this.strings.expressionIncoplete.langEditor + " ( ID: " + currentTab.id + " )";
            this.onRunError.push(error);
            stop = true;
          }

          break;
      }

      if (stop == false) {
        /* trovo nodi successivi perchè il corrente nodo non si può visualizzare */
        this.gameData.story.beams.forEach(el => {
          if (currentTab.id == el.from) {
            tabToAdd.push(el.to);
          }
        });
        stop = true;
      }

      return tabToAdd;
    },

    /* modify stat */
    modifyStat(idStat, operator, ammount) {
      let chosenStat = this.gameData.stats.find(element => element.id == idStat);
      let playerStat = this.player.stats.find(element => element.id == idStat);
      let resultAmmount;
      let use;

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
    modifyItem(idObject, operator, ammount) {

      const chosenItem = this.gameData.items.find(element => element.id == idObject);
      const nItemPlayer = this.player.item.filter(el => el.id == chosenItem.id).length;
      let resultAmmount;
      let use; //resolve

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
        for (let index = 0; index < resultAmmount; index++) {
          this.player.item.push(chosenItem);
        }
      }

      if (use == 2) {
        let newArray = [];
        let nPushed = 0;
        this.player.item.forEach(element => {
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
    reedBeams(fromId) {
      let newIdArray = [];
      this.gameData.story.beams.forEach(beam => {
        if (fromId == beam.from) {
          newIdArray.push(beam.to);
        }
      });
      this.navigation(newIdArray);
    },

    saveData() {},

    setImage(imageName) {
      this.illustration = imageName;
    },

    /* ||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

    /* animazione selettore */
    animatePaperSelector() {
      if (this.hoveCharacterSheet == true) {
        if (this.subTabCharacterSheet == "stats") {
          this.player.stats.forEach(element => {
            if (element.id == this.seletedItem) {
              element.active = 2;
            } else {
              if (element.active != 0) {
                element.active = 1;
              }
            }
          });
        } else {
          this.playerItemFiltered.forEach(element => {
            if (element.id == this.seletedItem) {
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

    clearAnimatePaperSelector() {
      this.player.stats.forEach(element => {
        element.active = 0;
      });
      this.player.item.forEach(element => {
        element.active = 0;
      });
    },

    /* setto paper */
    setDescriptionPaper(item) {
      this.seletedItem = item.id;
      this.animatePaperSelector();
      this.descriptionPaperName = item.name[this.lang];
      this.descriptionPaperDescription = item.description[this.lang];
      this.oldItemTap = this.itemTap; //Object.assign({},this.itemTap)

      this.itemTap = this.itemTap + 1; //Object.assign({},this.itemTap) + 1

      setTimeout(() => {
        if (this.itemTap == 0) {
          this.seletedItem = false;
          this.animatePaperSelector();
        }
      }, 4000);
    },

    /* setto lista oggetti da esporre  */
    setPlayerItemFiltered() {
      let listItems = [];
      this.player.item.forEach(item => {
        let found = listItems.find(element => element.id == item.id);

        if (found == undefined) {
          let nCopy = this.player.item.filter(element => element.id == item.id).length;
          let newItem = Object.assign({}, item);
          newItem.amount = nCopy;
          listItems.push(newItem);
        }
      });
      this.playerItemFiltered = listItems;
    },

    /* lista nodi badMix */
    setListBadMixId() {
      let BadMixList = "";
      let allDescription = this.currentTabs.filter(el => el.type == "descriptions");
      allDescription.forEach((el, index) => {
        BadMixList = BadMixList + el.id;
        if (index + 1 < allDescription.length) BadMixList = BadMixList + ", ";
      });
      this.listBadMixId = BadMixList;
    },

    /* PROJECT X ------------------------------------- */
    activateDemo() {
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
});

const _hoisted_1 = {
  class: "game-grid"
};
const _hoisted_2 = {
  key: 1,
  class: "log-app"
};
const _hoisted_3 = {
  key: 0,
  class: "game-error"
};
const _hoisted_4 = {
  key: 1,
  class: "game-error"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_boxillustration = resolveComponent("boxillustration");

  const _component_boxText = resolveComponent("boxText");

  return openBlock(), createElementBlock("div", _hoisted_1, [_ctx.illustration ? (openBlock(), createBlock(_component_boxillustration, {
    key: 0,
    illustration: _ctx.illustration
  }, null, 8, ["illustration"])) : createCommentVNode("", true), createVNode(_component_boxText, {
    narrationBox: _ctx.narrationBox,
    lang: _ctx.lang,
    "current-tabs": _ctx.currentTabs,
    onReedBeams: _ctx.reedBeams
  }, null, 8, ["narrationBox", "lang", "current-tabs", "onReedBeams"]), _ctx.narrationBox == 'false' || _ctx.narrationBox == 'node-bad-mix' ? (openBlock(), createElementBlock("div", _hoisted_2, [_ctx.narrationBox == false && _ctx.onRunError.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.strings.noEnd.langEditor), 1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.onRunError, (el, index) => {
    return openBlock(), createElementBlock("div", {
      key: index,
      class: "game-error"
    }, toDisplayString(el), 1);
  }), 128)), _ctx.narrationBox == 'node-bad-mix' ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(_ctx.strings.nodeBadMix.langEditor) + " " + toDisplayString(_ctx.listBadMixId) + " ) ", 1)) : createCommentVNode("", true)])) : createCommentVNode("", true), createElementVNode("div", {
    class: normalizeClass(["cover", {
      'hide-cover': _ctx.cover == false
    }])
  }, null, 2)]);
}

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TestStLibrarySample: script$6,
  game: script
});

// Import vue components

const install = function installTestStLibrary(app) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { script$6 as TestStLibrarySample, install as default, script as game };
