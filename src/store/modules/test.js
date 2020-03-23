const state = {
  data: ['我是测试1']
};
const getters = {
  data: data => {
    data.data;
  }
};
const mutations = {
  testFn: (data, handler) => {
    data.data = handler;
  }
};
const actions = {
  testFn(context, data) {
    context.commit('testFn', data);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
