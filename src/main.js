import { createApp } from 'vue'
import App from './App.vue'
import makeRouter from './router'
import makeStore from './store'
import makeI18n from './plugins/i18n'

import createServer from '../api/server' // Miragejs mock server
createServer()

createApp(App)
  .use(makeStore())
  .use(makeRouter())
  .use(makeI18n())
  .mount('#app')
