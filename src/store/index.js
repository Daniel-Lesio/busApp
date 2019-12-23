import Vue from 'vue'
import Vuex from 'vuex'

 import plan from './plan'
 import calendar from './calendar'
 import voyages from './voyages'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
     calendar,
     plan,
     voyages,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
