import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 透過 API 取得的 currentUser
        ...currentUser
      }
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
  },
  actions: {
    async fetchCurrentUser() {
      try{
        const { data } = await usersAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data
        this.commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
      } catch (error) {
        console.log('error', error)
        console.error('can not fetch user information')
      }
    }
  }
})