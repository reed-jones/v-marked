<template>
  <div id="app">
    <button @click='reColor'>click</button>
<v-marked ref='myMarked'>
# Marked in the browser
Rendered by **marked**.
## thats neat
1. test
1. test 2

| test | test | test 3 |
|--|--|--|
| 1 | 2 | 3 |
| 4 | 5 | 6 |

```javascript
if (true) {
  let publish = "cool"
}
```
</v-marked>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    reColor() {
      this.$refs.myMarked.highlight()
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  margin-top 60px
</style>
