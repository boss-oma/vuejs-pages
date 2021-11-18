import { createStore } from 'vuex'
import router from '../router/index'

export default createStore({
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload){
      state.token = payload
    }
  },
  actions: {
    async login({commit}, usuario) {
      console.log(usuario)
      try {
        const res = await fetch ('http://localhost:3000/login', {
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify(usuario)
        })
        const resDB = await res.json()
        console.log(resDB.token) 
        commit('setToken', resDB.token)
        localStorage.setItem('token', resDB.token)
        //This route is imported from index,js router file and allow redirect access after login sucessfull!!!
        router.push('/manager');
        } catch (error) { 
        console.log(error)
      }  
    },
    getToken({commit}) {
      if(localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      }else {
        commit ('setToken', null)
      }
    },
    logOut({commit}) {
      localStorage.removeItem('token')
      commit('setToken', null)
      router.push('/');
    }
  },
  modules: {
  }
})
