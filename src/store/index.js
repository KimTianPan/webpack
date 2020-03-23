import Vue from 'vue';
import 'es6-promise/auto'
import Vuex from 'vuex';
import test from '@/store/modules/test'
Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    test
  }
})