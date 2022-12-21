<template>
  <div
    v-if="stylesObj || useTheme == false"
    :style="stylesObj.gameGrid"
    :class="{
      'sg1-no-theme': !stylesObj,
      'sg1-no-illustration': disableIlustration == false || !illustration,
      'sg1-toast-wrapper': showToast,
    }"
    class="sg1-game-grid"
  >
    <boxillustration
      v-if="
        disableIlustration == false &&
        illustration &&
        initialized &&
        !logMessage
      "
      :editorUsage="editorUsage"
      :illustration="illustration"
      :indexMedia="indexMedia"
      :pathMediaDir="pathMediaDir"
      :style="gameData.style"
      :stylesObj="stylesObj"
    />

    <boxText
      v-if="
        initialized &&
        narrationBox !== false &&
        narrationBox !== 'node-bad-mix' &&
        !logMessage
      "
      :narrationBox="narrationBox"
      :lang="lang"
      :current-tabs="currentTabs"
      :nextTabsChose="nextTabsChose"
      :stylesObj="stylesObj"
      @reedBeams="reedBeams"
      @gameIntentLoad="gameIntentLoad"
    />

    <div v-if="logMessage" class="sg1-log-app">
      <div
        v-if="narrationBox == false && onRunError.length == 0"
        class="sg1-game-error sg1-e-1"
      >
        {{ strings.noEnd[langEditor] }}
      </div>
      <div
        v-for="(el, index) in onRunError"
        :key="index"
        class="sg1-game-error sg1-e-2"
      >
        {{ el }}
      </div>
      <div v-if="narrationBox == 'node-bad-mix'" class="sg1-game-error sg1-e-3">
        {{ strings.nodeBadMix[langEditor] }} {{ listBadMixId }} )
      </div>

      <div class="sg1-game-message sg1-e-4" v-if="urlToShow">
        {{ urlToShow }}
      </div>
    </div>

    <ToastContainer v-if="showToast" ref="ToastContainerRef"></ToastContainer>

    <PreCachedImg
      v-if="preCachedImgList"
      :editorUsage="editorUsage"
      :preCachedImgList="preCachedImgList"
      @setImgsLoaded="setImgsLoaded"
    />

    <div v-if="!initialized" class="sg1-load-screen">
      <Spinner />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import WebFont from "webfontloader";

import defaultStrings from "./default/defaultStrings.json";
import defaultStory from "./default/storyData.json";
import defaultIndexMedia from "./default/indexMedia.json";

import boxIllustration from "./boxIllustration.vue";
import boxText from "./boxText.vue";

import PreCachedImg from "./utility/PreCachedImg.vue";
import Spinner from "./utility/Spinner.vue";

import ToastContainer from "./utility/ToastContainer.vue";

import deepCopy from "./functions/deepCopy.js";
import getGridLayout from "./functions/getGridLayout.js";

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default /*#__PURE__*/ defineComponent({
  name: "game",
  components: {
    boxillustration: boxIllustration,
    boxText: boxText,
    PreCachedImg: PreCachedImg,
    Spinner: Spinner,
    ToastContainer: ToastContainer,
  },
  props: {
    editorUsage: {
      type: Boolean,
      default: true,
    },
    disableIlustration: {
      type: Boolean,
      default: false,
    },
    propLang: {
      type: String,
      default: "null-lang",
    },
    langEditor: {
      type: String,
      default: "en",
    },
    strings: {
      type: Object,
      default: defaultStrings,
    },
    gameData: {
      type: Object,
      default: defaultStory,
    },
    indexMedia: {
      type: Object,
      default: defaultIndexMedia,
    },
    pathMediaDir: {
      type: String,
      default: "http://your-website/media",
    },
    width: {
      type: String,
      default: "100vw",
    },
    height: {
      type: String,
      default: "100vh",
    },
    stopLink: {
      type: Boolean,
      default: false,
    },
    useTheme: {
      type: Boolean,
      default: true,
    },
    canEmit: {
      type: Boolean,
      default: true,
    },
    showToast: {
      type: Boolean,
      default: false,
    },
    functionToEmit: {},
  },
  data: function () {
    return {
      initialized: false,
      stepToInit: {
        font: false,
        img: false,
      },
      preCachedImgList: [],
      lang: false,
      textualTabs: ["descriptions", "chose", "game over"],
      playerState: "playing",
      player: {
        item: [],
      },
      currentTabs: [],
      nextTabsChose: [],

      illustration: false,

      onRunError: [],
      listBadMixId: "",
      isBadNodeMixForCose: [],

      gameLoaded: false,
      device: false,

      goToLink: false,
      urlToShow: false,
    };
  },
  watch: {
    narrationBox: function (val) {
      if (val == "node-bad-mix") {
        this.setListBadMixId();
      }
    },
    stepToInit: {
      handler() {
        if (this.stepToInit.font && this.stepToInit.img) {
          this.initialized = true;
        } else {
          this.initialized = false;
        }
      },
      deep: true,
    },
    gameData: {
      handler() {
        this.LoadFont();
      },
      deep: true,
    },
    playerState: function (val) {
      if (val == "game end" && this.goToLink) {
        this.initialized = false;
      }
    },
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
            let listTypeCheck = this.currentTabs.filter((element) =>
              allowed.includes(element.type)
            );

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
    },
    /* Style */
    stylesObj: function () {
      if (this.useTheme) {
        if (this.device) {
          let gameGrid = {
            width: this.width,
            height: this.height,
            gridTemplateColumns:
              this.gameData.style[this.device].margin +
              " repeat(6, 1fr) " +
              this.gameData.style[this.device].margin,
            gridTemplateRows:
              this.gameData.style[this.device].margin +
              " repeat(4, 1fr) " +
              this.gameData.style[this.device].margin,
          };

          let gridLayoutItem;
          if (this.disableIlustration == true) {
            gridLayoutItem = getGridLayout("a1f8");
          } else {
            gridLayoutItem = getGridLayout(
              this.gameData.style[this.device]["layout-type"]
            );
          }

          let boxIllustration = {
            ...gridLayoutItem.boxIllustration,
          };

          let boxText = {
            ...gridLayoutItem.boxText,
          };

          let boxTextPadding = {
            padding: this.gameData.style[this.device]["box-text-padding"],
          };

          let currentBoxHeight;

          if (boxText.gridRowEnd != 7 && boxText.gridRowStart != 1) {
            currentBoxHeight =
              "(( " +
              this.height +
              " - " +
              "(" +
              this.gameData.style[this.device].margin +
              "+" +
              this.gameData.style[this.device].margin +
              "))/" +
              4 +
              ") * (" +
              boxText.gridRowEnd +
              " - " +
              boxText.gridRowStart +
              ")";
          } else {
            //boxText.gridRowEnd == 7 && boxText.gridRowStart == 1
            currentBoxHeight = this.height;
          }

          let heightCalc =
            "calc( " +
            currentBoxHeight +
            " - " +
            this.gameData.style[this.device]["box-text-padding"] +
            " - " +
            this.gameData.style[this.device]["box-text-padding"] +
            " - (" +
            " + " +
            this.gameData.style[this.device]["box-text-padding"] +
            " + " +
            this.gameData.style["icon-single-arrow"]["size"] +
            "))";

          let tabResultsMaxHeight = {
            maxHeight: heightCalc,
            minHeight: heightCalc,
          };

          /* FONT */

          let fontName = this.gameData.style["font-family"];

          let commonFontFamily = {
            fontFamily: this.gameData.style["font-family"],
          };

          let fontWeightList = this.gameData.style["font-weight"];

          let fontWeightListSelected = {
            fontWeight: this.gameData.style["font-weight-selected"],
          };

          let fontColor = {
            color: this.gameData.style["color"],
          };

          let fontSize1 = {
            fontSize: this.gameData.style[this.device]["font-size-1"],
          };

          /* single arrow next */
          let iconSingleArrow = this.gameData.style["icon-single-arrow"];

          /* multiple arrow next */
          let iconMultipleArrow = this.gameData.style["icon-multiple-arrow"];
          let paddingTopNextTab = {
            paddingTop: this.gameData.style[this.device]["box-text-padding"],
          };
          let paddingBottomNextTab = {
            paddingBottom: this.gameData.style[this.device]["box-text-padding"],
          };
          /* bg text box */
          let bgStyle = {
            bgType: this.gameData.style["bg-type"],
            bgColor: this.gameData.style["bg-color"],
          };

          return {
            gameGrid: gameGrid,
            layoutID: this.gameData.style[this.device]["layout-type"],
            boxIllustration: boxIllustration,
            boxText: boxText,
            fontName: fontName,
            commonFontFamily: commonFontFamily,
            boxTextPadding: boxTextPadding,
            fontWeightList: fontWeightList,
            fontWeightListSelected: fontWeightListSelected,
            fontColor: fontColor,
            fontSize1: fontSize1,
            iconSingleArrow: iconSingleArrow,
            iconMultipleArrow: iconMultipleArrow,
            paddingTopNextTab: paddingTopNextTab,
            paddingBottomNextTab: paddingBottomNextTab,
            tabResultsMaxHeight: tabResultsMaxHeight,
            bgStyle: bgStyle,
          };
        } else {
          return false;
        }
      } else {
        return false;
      }
    },

    logMessage: function () {
      if (
        this.narrationBox == "false" ||
        this.narrationBox == "node-bad-mix" ||
        this.urlToShow
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    if (this.propLang !== "null-lang") {
      this.lang = this.propLang;
    } else {
      this.lang = this.gameData.postInfo.langList[0];
    }
    this.gameIntentLoad();
  },

  created() {
    this.init();
    window.addEventListener("resize", this.setDevice);
  },
  destroyed() {
    window.removeEventListener("resize", this.setDevice);
  },
  methods: {
    /* |||||||||||||||||||| GAME CORE |||||||||||||||||||||| */

    gameIntentLoad() {
      this.playerState = "playing";

      this.player = {
        stats: [],
        item: [],
      };

      /* carico liste statistiche con livello preimpostato a 0 se non presenti nella whitelist */
      if (this.gameData.stats) {
        this.gameData.stats.forEach((stats) => {
          let newStats = deepCopy(stats);
          newStats.level = 0;
          this.player.stats.push(newStats);
        });
      }

      //creo lista oggetti da visualizzare
      this.setPlayerItemFiltered();

      /* apro la tab di inizio */
      let startPointArray = [];
      let startPointId = this.gameData.story.tabs.find(
        (element) => element.gameStart
      );
      if (startPointId) {
        startPointArray.push(startPointId.id);
        this.navigation(startPointArray);
      } else {
        let error = this.strings.noStart[this.langEditor];
        this.onRunError.push(error);
      }
    },

    /* stabilisco tabs da vedere */
    navigation(newIdArray) {
      let tabs = this.gameData.story.tabs.filter((el) =>
        newIdArray.includes(el.id)
      );
      let tabsToNavigate = this.ResoveTabsList(tabs);

      if (tabsToNavigate.length == 0 && this.playerState != "game end") {
        let error = this.strings.wrongTabsId[this.langEditor];
        this.onRunError.push(error);

        //setto nextTabsChose
        this.nextTabsChose = [];
      } else {
        if (tabsToNavigate.length == 1) {
          this.singleBeemFoward = true;

          //setto nextTabsChose ---------------------------

          /* trovo nodi successivi */
          let tabToAdd = [];
          let error = false;
          let single = false;

          this.gameData.story.beams.forEach((el) => {
            if (tabsToNavigate[0].id == el.from) {
              let newEl = this.gameData.story.tabs.find(
                (el2) => el2.id == el.to
              );
              tabToAdd.push(newEl);
            }
          });

          this.isBadNodeMixForCose = [];
          let testNextTabsChose = this.ResoveTabsList(tabToAdd, true);

          if (testNextTabsChose.length == 1) {
            if (
              testNextTabsChose[0].type == "descriptions" ||
              testNextTabsChose[0].type == "game over"
            ) {
              single = true;
            }
          } else {
            //controllo se sono tutti chose
            testNextTabsChose.forEach((el) => {
              if (el.type != "chose") {
                error = true;
              }
            });
          }

          if (single) {
            this.nextTabsChose = [];
          } else {
            if (error) {
              //errore
              this.narrationBox = "node-bad-mix";
              this.setListBadMixId();
              this.nextTabsChose = [];
            } else {
              this.nextTabsChose = testNextTabsChose;
            }
          }

          //-------------------------------------

          //setto immagine
          if (tabsToNavigate[0].img) {
            this.setImage(tabsToNavigate[0].img);
          }

          //salvo dati
          if (tabsToNavigate[0].save == true) {
            this.saveData();
          }
        } else {
          this.singleBeemFoward = false;

          /* controllo se tab to add sono tutti chose */
          let allChose = true;
          tabsToNavigate.forEach((el) => {
            if (el.type != "chose") {
              allChose = false;
            }
          });

          if (allChose) {
            this.nextTabsChose = [];
          }
        }

        this.currentTabs = tabsToNavigate;
      }
    },

    //------------------------------------------------------

    ResoveTabsList(tabs, isNext = false) {
      let stop = false;
      let n = 0;
      const textualTabs = this.textualTabs;
      let collectionOfTextualTabs = tabs;

      while (stop == false) {
        n++;

        let allTextual = true;
        let newCollection = [];

        //controllo chi è testuale e chi no
        collectionOfTextualTabs.forEach((el) => {
          if (!textualTabs.includes(el.type)) {
            allTextual = false;

            newCollection = [...newCollection, ...this.ResoveTab(el, isNext)];
          } else {
            let procedeToNewCollection = true;

            if (isNext) {
              if (this.playerState != "playing") {
                procedeToNewCollection = false;
              }
            }

            if (procedeToNewCollection) {
              newCollection.push(el);
            }
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
    ResoveTab(tab, isNext) {
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
            break;
          case ">=":
            if (n1 >= n2) {
              return true;
            } else {
              return false;
            }
            break;
          case "<":
            if (n1 < n2) {
              return true;
            } else {
              return false;
            }
            break;
          case "<=":
            if (n1 <= n2) {
              return true;
            } else {
              return false;
            }
            break;
          case "==":
            if (n1 == n2) {
              return true;
            } else {
              return false;
            }
            break;
        }
      }

      let tabToAdd = [];

      let stop = false;

      let index = 0;
      let currentTab;

      if (typeof tab === "object") {
        currentTab = tab;
      } else {
        /* si tratta di una inizializzazione (è l'id di un nodo start) */
        currentTab = this.gameData.story.tabs.find((el) => el.id == tab);
      }

      if (index == 100) {
        stop = true;
      }
      console.log("type: " + currentTab.type + "------------------------");
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
          if (!isNext) {
            this.playerState = "game over";
            tabToAdd.push(currentTab);
          }
          stop = true;

          break;
        case "end":
          if (!isNext) {
            this.playerState = "game end";
            if (currentTab.openNewPage) {
              this.goToLink = true;
              if (this.stopLink) {
                this.urlToShow =
                  this.strings.urlRedirect[this.langEditor] +
                  ": " +
                  currentTab.url[this.lang];
              } else {
                window.open(currentTab.url[this.lang], "_self");
              }
            } else {
              tabToAdd.push(currentTab);
              stop = true;
            }
          } else {
            stop = true;
          }
          break;
        case "redirect":
          let errorRedirect = false;
          if (currentTab.listRedirectId.length > 0) {
            currentTab.listRedirectId.forEach((el) => {
              if (!el) {
                errorRedirect = true;
              }
            });
          } else {
            errorRedirect =
              this.strings.linkNodeEmpty[this.langEditor] +
              " ( ID: " +
              currentTab.id +
              " )";
          }

          if (errorRedirect == false) {
            let idRedirect;
            if (currentTab.listRedirectId.length == 1) {
              idRedirect = currentTab.listRedirectId[0];
            } else {
              let indexRandom = randomNum(
                0,
                currentTab.listRedirectId.length - 1
              );
              idRedirect = currentTab.listRedirectId[indexRandom];
            }
            let tabToRedirect = this.gameData.story.tabs.find(
              (element) => element.id == idRedirect
            );

            currentTab = tabToRedirect;
          } else {
            let error =
              this.strings.redirectError[this.langEditor] +
              " ( ID: " +
              currentTab.id +
              " )";
            this.onRunError.push(error);
            stop = true;
          }

          if (errorRedirect) {
            this.onRunError.push(errorRedirect);
            stop = true;
          }

          break;

        case "set stat":
          if (!isNext) {
            let itemExist3 = this.gameData.stats.find(
              (el) => el.id == currentTab.idStat
            );
            if (itemExist3) {
              if (itemExist3.length == 0 || currentTab.operator == false) {
                let error =
                  this.strings.expressionIncoplete[this.langEditor] +
                  " ( ID: " +
                  currentTab.id +
                  " )";
                this.onRunError.push(error);
                stop = true;
              } else {
                this.modifyStat(
                  currentTab.idStat,
                  currentTab.operator,
                  currentTab.ammount
                );
              }
            } else {
              let error =
                this.strings.expressionIncoplete[this.langEditor] +
                " ( ID: " +
                currentTab.id +
                " )";
              this.onRunError.push(error);
              stop = true;
            }
          }
          break;

        case "set object":
          if (!isNext) {
            let itemExist2 = this.gameData.items.find(
              (el) => el.id == currentTab.idObject
            );

            if (itemExist2) {
              if (itemExist2.length == 0 || currentTab.operator == false) {
                let error =
                  this.strings.expressionIncoplete[this.langEditor] +
                  " ( ID: " +
                  currentTab.id +
                  " )";
                this.onRunError.push(error);
                stop = true;
              } else {
                this.modifyItem(
                  currentTab.idObject,
                  currentTab.operator,
                  currentTab.ammount
                );
              }
            } else {
              let error =
                this.strings.expressionIncoplete[this.langEditor] +
                " ( ID: " +
                currentTab.id +
                " )";
              this.onRunError.push(error);
              stop = true;
            }
          }
          break;

        case "if stat":
          let statToCheck = this.player.stats.find(
            (element) => element.id == currentTab.idStat
          );

          if (statToCheck) {
            /* controllo che non siano presenti errori nella espressione */

            if (
              currentTab.ammount === false ||
              currentTab.ammount == undefined ||
              currentTab.operator == false
            ) {
              let error =
                this.strings.expressionIncoplete[this.langEditor] +
                " ( ID: " +
                currentTab.id +
                " )";
              this.onRunError.push(error);
              stop = true;
            } else {
              let status = operatorResolve(
                statToCheck.level,
                currentTab.operator,
                currentTab.ammount
              );

              if (status) {
                let tabsTrue = this.gameData.story.tabs.filter((element) =>
                  currentTab.trueId.includes(element.id)
                );
                tabToAdd = tabsTrue;
                stop = true;
              } else {
                let tabsFalse = this.gameData.story.tabs.filter((element) =>
                  currentTab.falseId.includes(element.id)
                );
                tabToAdd = tabsFalse;
                stop = true;
              }
            }
          } else {
            let error =
              this.strings.expressionIncoplete[this.langEditor] +
              " ( ID: " +
              currentTab.id +
              " )";
            this.onRunError.push(error);
            stop = true;
          }

          break;

        case "if item":
          let itemToCheck = this.player.item.filter(
            (element) => element.id == currentTab.idObject
          ).length;

          /* controllo che non siano presenti errori nella espressione */

          //controllo se esiste l'oggetto
          let itemExist = this.gameData.items.find(
            (el) => el.id == currentTab.idObject
          );

          if (itemExist) {
            if (itemExist.length == 0 || currentTab.operator == false) {
              let error =
                this.strings.expressionIncoplete[this.langEditor] +
                " ( ID: " +
                currentTab.id +
                " )";
              this.onRunError.push(error);
              stop = true;
            } else {
              let status2 = operatorResolve(
                itemToCheck,
                currentTab.operator,
                currentTab.ammount
              );

              if (status2) {
                let tabsTrue = this.gameData.story.tabs.filter((element) =>
                  currentTab.trueId.includes(element.id)
                );
                tabToAdd = tabsTrue;
                stop = true;
              } else {
                let tabsFalse = this.gameData.story.tabs.filter((element) =>
                  currentTab.falseId.includes(element.id)
                );
                tabToAdd = tabsFalse;
                stop = true;
              }
            }
          } else {
            let error =
              this.strings.expressionIncoplete[this.langEditor] +
              " ( ID: " +
              currentTab.id +
              " )";
            this.onRunError.push(error);
            stop = true;
          }

          break;

        case "image":
          if (!isNext) {
            this.setImage(currentTab.img);
          }
          break;

        case "emit_function":
          if (!isNext) {
            //NUOVA FUNZIONALITà
            console.log("Passing HERE!!");

            if (this.canEmit) {
              this.$emit("functionToEmit", currentTab.objToEmit);
            }
            if (this.showToast) {
              this.$refs.ToastContainerRef.addToast({
                type: currentTab.type.replaceAll(" ", "_"),
                title:
                  currentTab.humanName.default +
                  ' <span class="sg1-id">ID: ' +
                  currentTab.id +
                  "</span>",
                content: currentTab.objToEmit,
              });

              /////////////////////////////////////////////////////////////////////
              setTimeout(() => {
                this.$refs.ToastContainerRef.addToast({
                  type: currentTab.type.replaceAll(" ", "_"),
                  title:
                    currentTab.humanName.default +
                    '1 <span class="sg1-id">ID: ' +
                    currentTab.id +
                    "</span>",
                  content: currentTab.objToEmit,
                });
              }, 1000);

              setTimeout(() => {
                this.$refs.ToastContainerRef.addToast({
                  type: currentTab.type.replaceAll(" ", "_"),
                  title:
                    currentTab.humanName.default +
                    '2 <span class="sg1-id">ID: ' +
                    currentTab.id +
                    "</span>",
                  content: currentTab.objToEmit,
                });
              }, 2000);

              setTimeout(() => {
                this.$refs.ToastContainerRef.addToast({
                  type: currentTab.type.replaceAll(" ", "_"),
                  title:
                    currentTab.humanName.default +
                    '3 <span class="sg1-id">ID: ' +
                    currentTab.id +
                    "</span>",
                  content: currentTab.objToEmit,
                });
              }, 3000);

              setTimeout(() => {
                this.$refs.ToastContainerRef.addToast({
                  type: currentTab.type.replaceAll(" ", "_"),
                  title:
                    currentTab.humanName.default +
                    '4 <span class="sg1-id">ID: ' +
                    currentTab.id +
                    "</span>",
                  content: currentTab.objToEmit,
                });
              }, 4000);

              setTimeout(() => {
                this.$refs.ToastContainerRef.addToast({
                  type: currentTab.type.replaceAll(" ", "_"),
                  title:
                    currentTab.humanName.default +
                    '4 <span class="sg1-id">ID: ' +
                    currentTab.id +
                    "</span>",
                  content: currentTab.objToEmit,
                });
              }, 5000);

              ///////////////////////////////////////////////////////////////
            }
          }
          break;
      }

      if (stop == false) {
        /* trovo nodi successivi perchè il corrente nodo non si può visualizzare */
        this.gameData.story.beams.forEach((el) => {
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
      let totalResult = [];

      let chosenStat = this.gameData.stats.find(
        (element) => element.id == idStat
      );
      let playerStat = this.player.stats.find(
        (element) => element.id == idStat
      );

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
          resultAmmount = Math.floor(
            parseInt(playerStat.level) / parseInt(ammount)
          );
          use = 2;
          break;
        case "=":
          resultAmmount = ammount;
          use = 5;
          break;
      }

      //  + *
      if (use == 1) {
        /* controllo se giocatore ha statistica */
        playerStat.level = parseInt(playerStat.level) + parseInt(resultAmmount);
      }

      //  - /
      if (use == 2) {
        /* controllo se giocatore ha statistica */
        playerStat.level = parseInt(playerStat.level) - parseInt(resultAmmount);
      }

      //  =
      if (use == 5) {
        playerStat.level = resultAmmount;
      }

      //CORREZIONI VALORE ---------------------
      if (playerStat.level > chosenStat.max) {
        playerStat.level = chosenStat.max;
      }
      if (playerStat.level < 0 && !isNaN(playerStat.level)) {
        playerStat.level = 0;
      }
      //---------------------------------------
    },

    /* modify item */
    modifyItem(idObject, operator, ammount) {
      let totalResult = [];

      //elemento da usare
      const chosenItem = this.gameData.items.find(
        (element) => element.id == idObject
      );
      const nItemPlayer = this.player.item.filter(
        (el) => el.id == chosenItem.id
      ).length;

      let resultAmmount;
      let use;

      //resolve
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
          resultAmmount =
            parseInt(nItemPlayer) -
            Math.floor(parseInt(nItemPlayer) / parseInt(ammount));
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

        let messageLog;
      }

      if (use == 2) {
        let newArray = [];

        let nPushed = 0;
        this.player.item.forEach((element) => {
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
      }

      //setto lista oggetti
      //this.player.item = totalResult

      //rifaccio lista oggetti da visualizzare
      this.setPlayerItemFiltered();
    },

    //------------------------------------------------------

    /* leggo beem da punto di inizio a punto di fine */
    reedBeams(fromId) {
      let newIdArray = [];
      this.gameData.story.beams.forEach((beam) => {
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
          this.player.stats.forEach((element) => {
            if (element.id == this.seletedItem) {
              element.active = 2;
            } else {
              if (element.active != 0) {
                element.active = 1;
              }
            }
          });
        } else {
          this.playerItemFiltered.forEach((element) => {
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
      this.player.stats.forEach((element) => {
        element.active = 0;
      });
      this.player.item.forEach((element) => {
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

      this.player.item.forEach((item) => {
        let found = listItems.find((element) => element.id == item.id);

        if (found == undefined) {
          let nCopy = this.player.item.filter(
            (element) => element.id == item.id
          ).length;

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
      let allDescription = this.currentTabs.filter(
        (el) => el.type == "descriptions"
      );
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
        var requestMethod =
          element.requestFullScreen ||
          element.webkitRequestFullScreen ||
          element.mozRequestFullScreen ||
          element.msRequestFullScreen;

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
    },

    /* STYLE ---------------------------------------- */

    init() {
      if (this.useTheme) {
        this.setDevice();
        this.LoadFont();
      } else {
        this.stepToInit.font = true;
      }

      console.log(this.preCachedImgList);

      this.setPreCacheImgList();

      if (this.preCachedImgList.length == 0) {
        this.stepToInit.img = true;
      }
    },

    LoadFont() {
      this.stepToInit.font = false;
      WebFont.load({
        google: {
          families: [
            this.stylesObj.fontName +
              ":" +
              this.stylesObj.fontWeightList.join(),
          ],
        },
        active: () => {
          this.stepToInit.font = true;
        },
        inactive: () => {
          this.stepToInit.font = true;
        },
      });
    },

    setPreCacheImgList() {
      this.gameData.story.tabs.forEach((el) => {
        if (el.img) {
          if (!this.editorUsage) {
            let data = {};

            let name = this.indexMedia.find((el2) => el2.Id == el.img.ID).name;

            let imgPathPart = this.pathMediaDir + "/" + name;

            let imgSize = this.gameData.style["img-sizes"];

            /* list of srcset rules */
            imgSize.forEach((elImg, index) => {
              data.srcset =
                data.srcset +
                imgPathPart +
                "-" +
                elImg.width +
                "x" +
                elImg.height +
                ".jpg " +
                elImg.width +
                "w";
              if (index + 1 != imgSize.length) {
                data.srcset = data.srcset + ",";
              }

              if (index + 1 != imgSize.length) {
                data.sizes =
                  data.sizes +
                  "( max-width:" +
                  elImg.width +
                  "px ) " +
                  elImg.width +
                  "px, ";
              } else {
                data.sizes = data.sizes + elImg.width + "px";
              }
              /* fallback src */
              data.src =
                imgPathPart +
                "-" +
                imgSize[imgSize.length - 1]["width"] +
                "x" +
                imgSize[imgSize.length - 1]["height"] +
                ".jpg";
            });

            this.preCachedImgList.push(data);
          } else {
            this.preCachedImgList.push(el.img.srcFull[0]);
          }
        }
      });
    },

    setImgsLoaded() {
      this.stepToInit.img = true;
    },

    /* dom method handler */
    setDevice() {
      if (window.innerWidth > 992) {
        this.device = "desktop";
      } else {
        this.device = "mobile";
      }
    },
  },
});
</script>
<style>
body {
  margin: 0;
}
.sg1-no-theme :where(.sg1-label-description) {
  margin-bottom: 30px;
}

.sg1-no-theme :where(.sg1-wrapper-box-text) {
  grid-column: 1/3;
  padding: 20px;
  background-color: whitesmoke;
}

.sg1-no-theme :where(.sg1-tab-results) {
  font-family: monospace;
  font-size: 16px;
  color: grey;
}

.sg1-no-theme:is(.sg1-game-grid) {
  max-width: calc(100% - 50px);
  max-width: 992px;
  aspect-ratio: 3/2;
  max-height: calc(100vh - 50px);
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-rows: 70% 30%;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
}

.sg1-no-theme:is(.sg1-game-grid):is(.sg1-no-illustration) {
  grid-template-rows: 100% 0;
}

.sg1-no-theme :where(.sg1-label-multiple-chose) {
  max-width: calc(100% - 25px);
  margin-left: 25px;
}

.sg1-no-theme :where(.list-item):before {
  content: "◆";
  display: inline-block;
  margin-right: 10px;
}

.sg1-no-theme :where(.sg1-single-beem-icon) {
  cursor: pointer;
  font-size: 12px;
  width: 2em;
  height: 2em;
  position: relative;
}

.sg1-no-theme :where(.sg1-single-beem-icon):before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 1em 1em 0 1em;
  border-color: grey transparent transparent transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.sg1-no-theme :where(.sg1-box-illustration) {
  grid-column: 1/3;
  grid-row: 1/1;
}

.sg1-no-theme :where(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.sg1-game-grid:is(.sg1-toast-wrapper) {
  position: relative;
  overflow: hidden;
}
</style>
<style scoped>
.sg1-game-grid:not(.sg1-no-theme) {
  display: grid;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #282828;
}
.sg1-load-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sg1-log-app {
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 7;
  grid-column-end: 9;
  flex-direction: column;
  max-width: 100% !important;
  overflow: hidden;

  background-color: #282828;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sg1-log-app > * {
  font-size: 15px;
  max-width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  width: 100%;
  text-align: center;
  font-family: monospace;
}
.sg1-game-error {
  color: #ed6767;
}
.sg1-game-message {
  color: #67ed72;
}
</style>
