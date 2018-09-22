# vue-strapdown

## Installation
```
yarn install v-marked
```

### Setup
```js
import VMarked from './components'
Vue.use(VMarked)
```

### Advanced Setup With Syntax Highlighting from [Prismjs](https://prismjs.com/)
```js
import VMarked from './components'

Vue.use(VMarked, {
  syntaxHighlight: true,

  // attempts to use the cloudflare CDN.
  // pick a theme name from https://github.com/PrismJS/prism/tree/master/themes
  prismTheme: 'prism-tomorrow',

  // alternatively, passing the full url to the desired resource is possible
  prismThemeUrl: `https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-funky.css`
});
```
If you prefer to link to your prism css sheet in `<head />`, don't supply `prismTheme` or `prismThemeUrl` options, and give the linked stylesheet an id of `#prism-theme` to prevent to default stylesheet from loading.

### Usage

Anywhere in your components, supply the `<v-marked />` tag and fill it with all your markdown.
``````
<v-marked ref='myMarked'>
# Marked in the browser
## Rendered by **marked**.

## thats neat
1. list 1
1. list 2
1. list 3

| header 1 | header 2 | header 3 |
|----------|----------|----------|
| 1        | 2        | 3        |
| 4        | 5        | 6        |

```javascript
if (true) {
  console.log("Written with v-marked")
}
```
</v-marked>
``````

### Gotchas
It is required that no extra indentation is used when writing your markdown. i.e.
``````
        <v-marked>
          ### This Wont Work
        </v-marked>

<v-marked>
### but this will
</v-marked>
``````

