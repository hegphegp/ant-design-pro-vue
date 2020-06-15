import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'

// default router permission control
import permission from './modules/permission'

// dynamic router permission control (Experimental)
// import permission from './modules/async-router'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    permission
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {
    isMobile: state => state.app.isMobile,
    lang: state => state.app.lang,
    theme: state => state.app.theme,
    color: state => state.app.color,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    nickname: state => state.user.name,
    welcome: state => state.user.welcome,
    roles: state => state.user.roles,
    userInfo: state => state.user.info,
    addRouters: state => state.permission.addRouters,
    multiTab: state => state.app.multiTab
  }
  // ,
  // getters: {
  //   isMobile(state) {
  //     return state.app.isMobile
  //   },
  //   lang(state) {
  //     return state.app.lang
  //   },
  //   theme(state) {
  //     return state.app.theme
  //   },
  //   color(state) {
  //     return state.app.color
  //   },
  //   token(state) {
  //     return state.user.token
  //   },
  //   avatar(state) {
  //     return state.user.avatar
  //   },
  //   nickname(state) {
  //     return state.user.name
  //   },
  //   welcome(state) {
  //     return state.user.welcome
  //   },
  //   roles(state) {
  //     return state.user.roles
  //   },
  //   userInfo(state) {
  //     return state.user.info
  //   },
  //   addRouters(state) {
  //     return state.permission.addRouters
  //   },
  //   multiTab(state) {
  //     return state.app.multiTab
  //   }
  // }
})
