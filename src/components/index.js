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

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MyPlugin)
}