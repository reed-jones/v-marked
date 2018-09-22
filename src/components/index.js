import VMarked from './VMarked'

const MyPlugin = {
  install(Vue, options = {}) {
    Vue.component(VMarked.name, {
      ...VMarked,
      props: {
        syntaxHighlight: {
          type: Boolean,
          default: options['syntaxHighlight'] || false
        },
        prismTheme: {
          type: String,
          default: options['prismTheme'] || 'prism'
        },
        prismThemeUrl: {
          type: String,
          default: options['prismThemeUrl'] || null
        }
      }
    })
  }
};

export default MyPlugin;