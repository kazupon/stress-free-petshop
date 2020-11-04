import { mount as vtuMount } from '@vue/test-utils'
import makeRouter from '../src/router'
import makeStore from '../src/store'
import makeI18n from '../src/plugins/i18n'

const defaultPlugins = (router = makeRouter()) => ([ router, ...pluginsWithoutRouter()])
const pluginsWithoutRouter = () => ([makeStore(), makeI18n()])

// Technique to reduce boilerplate and create a wrapper that has your dependencies
// like vueI18n, etc
export function mount(component, options = {}) {
  options.global = options.global || {}
  options.global.plugins = Array.isArray(options.global.plugins) ?
    options.global.plugins : defaultPlugins()
  return vtuMount(component, options)
}

export async function mountWithRouter(component, options = {}) {
  options.global = options.global || {}
  let plugins = []
  if (Array.isArray(options.global.plugins)) {
    plugins = options.global.plugins
  } else {
    const router = makeRouter()
    await router.push('/')
    await router.isReady()
    plugins = defaultPlugins(router)
  }
  options.global.plugins = plugins
  return vtuMount(component, options)
}
