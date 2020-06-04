import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  // 使用绝对路径
  uri: 'http://localhost:4000/graphql',
})

// 保存了接下来被所有子组件使用的Apollo客户端实例
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

export default apolloProvider
