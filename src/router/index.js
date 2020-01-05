import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import other from '@/components/other'
import test from '@/components/test'
import testtop from '@/pages/testtop'
import test1 from '@/pages/test1'

Vue.use(Router)

export default new Router({
  mode: 'history',  // 追記 URLに#が入るのを防止
  base: 'test/vue-router-test', //追記 ベースURL 今回はサーバー内のサブディレクトリに保存したいため
  routes: [

    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/other',
      name: 'other',
      component: other
    },
    {
      path: '/test',
      component: test
    },
    {
      path: '/testtop',
      component: testtop
    },
    {
      path: '/test1',
      component: test1
    }
  ]
})



