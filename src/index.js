import ContentPlaceholders from './components/ContentPlaceholders.vue'
import ContentPlaceholdersHeading from './components/ContentPlaceholdersHeading.vue'
import ContentPlaceholdersImg from './components/ContentPlaceholdersImg.vue'
import ContentPlaceholdersText from './components/ContentPlaceholdersText.vue'
import ContentPlaceholdersListItem from './components/ContentPlaceholdersListItem.vue'

export function install (Vue) {
  Vue.component('ContentPlaceholders', ContentPlaceholders)
  Vue.component('ContentPlaceholdersHeading', ContentPlaceholdersHeading)
  Vue.component('ContentPlaceholdersImg', ContentPlaceholdersImg)
  Vue.component('ContentPlaceholdersText', ContentPlaceholdersText)
  Vue.component('ContentPlaceholdersListItem', ContentPlaceholdersListItem)
}

export {
  ContentPlaceholders,
  ContentPlaceholdersHeading,
  ContentPlaceholdersImg,
  ContentPlaceholdersText,
  ContentPlaceholdersListItem,
}

const plugin = {
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
