# [vue storyground reader](https://storygroundeditor.com) &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

**vue storyground reader** è un semplice componente per visualizzare le storie di storygroundeditor.com.

## Installazione

Se non sarà fornito alcun parametro all'inizializzazione verrà visualizzata una storia "segna posto". Sarà necessario per visualizzare la propria storia avere a disposizione l'esportazione di una storia, quest'ultima contiene un file json contenente la storia e una cartella con i media della storia nella quale è anche presente un file indexMediaObj.json.
Ecco il tuo primo esempio per iniziare:

```vue
<game :gameData="jsonStory" />
```

Questo esempio è molto utile in una prima fase di **development** in qunto i media saranno presenti direttamente su storygroundeditor.com.

Se si vorranno utilizzare i media direttamente dal proprio dominio, sarà necessario aggiungere le seguenti props:

```vue
<game
  :gameData="jsonStory"
  :pathMediaDir="./media"
  :indexMedia="indexMediaObj"
  :editorUsage="false"
/>
```

**Una lista delle props**

| Name                 | type      | Default             | description                                                                                                                                                                                                                                          |
| -------------------- | --------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gameData`           | `Object`  | `defaultStory`      | la storia da visualizzare che si può trovare all'interno del pacchetto d'esportazione in formato JSON                                                                                                                                                |
| `propLang`           | `String`  | `"null-lang"`       | La lingua in cui deve essere visualizzata la storia                                                                                                                                                                                                  |
| `width`              | `String`  | `"100vw"`           | la larghezza del visualizzatore (https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)                                                                                                                                |
| `height`             | `String`  | `"100vh"`           | la altezza del visualizzatore (https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)                                                                                                                                  |
| `editorUsage`        | `Boolean` | `true`              | Se il valore è `true` verranno utlizzati alcuni datai presenti su storygroundeditor.com in particolare gli indirrizzi assoluti ai media presenti nella storia, in questo caso sarà necessario valorizzare i parametri: `pathMediaDir` e `indexMedia` |
| `pathMediaDir`       | `String`  | `"./media"`         | l'indirizzo assoluto alla cartella in cui sono presenti i media                                                                                                                                                                                      |
| `indexMedia`         | `Object`  | `defaultIndexMedia` | un'indice dei media presenti nella storia è necessario se il parametro `editorUsage` è `false`                                                                                                                                                       |
| `disableIlustration` | `Boolean` | `false`             | Rimuove dal la possibilità di visualizzare i media                                                                                                                                                                                                   |
| `stopLink`           | `Boolean` | `false`             | inpedisce al visualizzatore di navigare in un'altra pagina visualizzando in un messaggio l'url di destinazione                                                                                                                                       |
| `langEditor`         | `String`  | `"en"`              | La lingua in cui vengono visualizzati i messaggi di log                                                                                                                                                                                              |
| `strings`            | `Object`  | `defaultStrings`    | definisce le stringhe mostrate dal visualizzatore nei messaggi di log                                                                                                                                                                                |

### License

js storyground reader is [MIT licensed](./LICENSE).
