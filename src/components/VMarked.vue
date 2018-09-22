<template lang='pug'>
  .v-marked(v-html='markdown' ref='VMarked')
</template>

<script>
import marked from 'marked'
import prism from 'prismjs'

export default {
  name: 'VMarked',
  data() {
    return {
      loadBackupStyles: this.$slots.default.length && this.syntaxHighlight && !document.getElementById('prism-theme')
    }
  },
  created() {
    if (this.loadBackupStyles) {
      const head  = document.getElementsByTagName('head')[0];
      const link  = document.createElement('link');
      link.id = 'prism-theme'
      link.rel  = 'stylesheet';
      link.href = this.prismThemeUrl || `https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/${this.prismTheme}.css`
      head.appendChild(link);
    }
  },
  mounted() {
    if(this.loadBackupStyles) {
      prism.highlightAllUnder(this.$refs.VMarked);
    }
  },
  computed: {
    markdown() {
      return this.$slots.default.length && marked(this.$slots.default[0].text) || '';
    }
  },
  methods: {
    highlight() {
      prism.highlightAll();
    },
    highlightComponent() {
      prism.highlightAllUnder(this.$refs.VMarked);
    }
  }
}
</script>