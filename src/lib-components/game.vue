<template>
	<div class="game-grid">
		<boxillustration
			v-if="illustration"
			v-bind:illustration="illustration"
		>
		</boxillustration>

		<boxnarration
			v-if="narrationBox == 'default' || narrationBox == 'descriptions' ||  narrationBox == 'chose'"
			v-bind:lang="lang"
			v-bind:current-tabs="currentTabs"
			v-on:reedbeams="reedBeams"
		></boxnarration>

		<gameEnd
			v-if="narrationBox == 'end' "
			v-bind:lang="lang"
			v-bind:current-tabs="currentTabs"
			v-on:reedbeams="reedBeams"
		></gameEnd>

		<gameOver
			v-if="narrationBox == 'game over'"
			v-bind:lang="lang"
			v-bind:current-tabs="currentTabs"
			v-on:reedbeams="reedBeams"
		></gameOver>

		<div
			v-if="narrationBox == 'false' || narrationBox == 'node-bad-mix'"
			class="log-app"
		>
			<div
				v-if="narrationBox == false && onRunError.length == 0"
				class="game-error"
			>{{ strings.noEnd.langEditor }}</div>
			<div
				v-for="(el, index ) in onRunError"
				v-bind:key="index"
				class="game-error"
			>{{el}}</div>
			<div
				v-if="narrationBox == 'node-bad-mix'"
				class="game-error"
			>
				{{ strings.nodeBadMix.langEditor }} {{listBadMixId}} )

			</div>
		</div>

		<div class="icons-group-left">
			<a
				class="icon-draw-info"
				target="_blanck"
				href="http://storygroundeditor.com/"
			></a>
			<div
				v-on:click="audio = !audio"
				v-bind:class="[{ 'icon-draw-audio-on' : audio },{ 'icon-draw-audio-off' : audio == false }]"
			>
			</div>
		</div>

		<div
			class="cover"
			v-bind:class="{ 'hide-cover' : cover == false }"
		>
		</div>

	</div>
</template>

<style scoped>
</style>

<script>
	import { defineComponent } from "vue";

	import defaultStrings from "./defaultStrings.json";
	import defaultStory from "./defaultStory.json";

	import boxNarration from "./boxNarration.vue";
	import boxNarrationGameEnd from "./boxNarrationGameEnd.vue";
	import boxNarrationGameOver from "./boxNarrationGameOver.vue";
	import boxIllustration from "./boxIllustration.vue";
	import deepCopy from "./deepCopy.js";

	function randomNum(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	export default /*#__PURE__*/ defineComponent({
		name: "game",
		components: {
			boxnarration: boxNarration,
			boxillustration: boxIllustration,
			gameEnd: boxNarrationGameEnd,
			gameOver: boxNarrationGameOver,
		},
		props: {
			lang: {
				type: String,
				required: true,
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
				defailt: defaultStory,
			},
		},
		//["lang", "strings", "gameData", "playerData", "gameIntent"],
		data: function () {
			return {
				textualTabs: ["descriptions", "chose", "game over", "end"],
				playerState: "playing",
				player: {
					item: [],
				},
				currentTabs: [],
				illustration: false,
				onRunError: [],
				listBadMixId: "",
				cover: true,
				gameLoaded: false,
			};
		},
		watch: {
			narrationBox: function (val) {
				if (val == "node-bad-mix") {
					this.setListBadMixId();
				}
			},

			audio: function (val) {
				if (val == true) {
					document.getElementById("audio-player").play();
				} else {
					document.getElementById("audio-player").pause();
				}
			},
		},

		mounted() {
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
				this.gameData.stats.forEach((stats) => {
					let newStats = deepCopy(stats);
					newStats.level = 0;
					this.player.stats.push(newStats);
				});

				//creo lista oggetti da visualizzare
				this.setPlayerItemFiltered();

				/* apro la tab di inizio */
				let startPointArray = [];
				let startPointId = this.gameData.story.tabs.find(
					(element) => element.gameStart
				).id;
				startPointArray.push(startPointId);
				this.navigation(startPointArray);
			},

			/* stabilisco tabs da vedere */
			navigation(newIdArray) {
				let tabs = this.gameData.story.tabs.filter((el) =>
					newIdArray.includes(el.id)
				);
				let tabsToNavigate = this.ResoveTabsList(tabs);

				if (tabsToNavigate.length == 0) {
					this.error = "!!! -- id tabs sbagliato -- !!";
				} else {
					if (tabsToNavigate.length == 1) {
						this.singleBeemFoward = true;

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
					let newCollection = [];

					//controllo chi è testuale e chi no
					collectionOfTextualTabs.forEach((el) => {
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

			/*
															risolvo singole tab logiche tab e passo a quelle successive il risultato è un'array di tab
														*/
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
						currentTab.listRedirectId.forEach((el) => {
							if (!el) {
								errorRedirect = true;
							}
						});

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
								this.strings.redirectError.langEditor +
								" ( ID: " +
								currentTab.id +
								" )";
							this.onRunError.push(error);
							stop = true;
						}

						break;

					case "set stat":
						let itemExist3 = this.gameData.stats.find(
							(el) => el.id == currentTab.idStat
						);
						if (itemExist3) {
							if (itemExist3.length == 0 || currentTab.operator == false) {
								let error =
									this.strings.expressionIncoplete.langEditor +
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
								this.strings.expressionIncoplete.langEditor +
								" ( ID: " +
								currentTab.id +
								" )";
							this.onRunError.push(error);
							stop = true;
						}
						break;

					case "set object":
						let itemExist2 = this.gameData.items.find(
							(el) => el.id == currentTab.idObject
						);

						if (itemExist2) {
							if (itemExist2.length == 0 || currentTab.operator == false) {
								let error =
									this.strings.expressionIncoplete.langEditor +
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
								this.strings.expressionIncoplete.langEditor +
								" ( ID: " +
								currentTab.id +
								" )";
							this.onRunError.push(error);
							stop = true;
						}
						break;

					case "if stat":
						let statToCheck = this.player.stats.find(
							(element) => element.id == currentTab.idStat
						);

						if (statToCheck) {
							/*
																      controllo che non siano presenti errori nella espressione
																    */

							if (
								currentTab.ammount === false ||
								currentTab.ammount == undefined ||
								currentTab.operator == false
							) {
								let error =
									this.strings.expressionIncoplete.langEditor +
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
								this.strings.expressionIncoplete.langEditor +
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

						/*
																    controllo che non siano presenti errori nella espressione
																  */

						//controllo se esiste l'oggetto
						let itemExist = this.gameData.items.find(
							(el) => el.id == currentTab.idObject
						);

						if (itemExist) {
							if (itemExist.length == 0 || currentTab.operator == false) {
								let error =
									this.strings.expressionIncoplete.langEditor +
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
								this.strings.expressionIncoplete.langEditor +
								" ( ID: " +
								currentTab.id +
								" )";
							this.onRunError.push(error);
							stop = true;
						}

						break;
				}

				if (stop == false) {
					/*
										            trovo nodi successivi perchè il corrente nodo non si può visualizzare
															*/
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

					//uso plurale o singolare
					/*
																                if(resultAmmount == 1){
																                    messageLog= {
																                        en:"added " + chosenItem.name.en,
																                        it:"aggiunto " + chosenItem.name.it
																                    }
																                }else{
																                    messageLog= {
																                        en:"added " + resultAmmount + chosenItem.namePlural.en,
																                        it:"aggiunti " + resultAmmount + chosenItem.namePlural.it
																                    }
																                }


																                */
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
		},
	});
</script>
