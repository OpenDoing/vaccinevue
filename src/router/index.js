import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import VQuery from '@/views/VQuery'
import VNetResult from '@/views/VNetResult'
import VLResult from '@/views/VLResult'
import VaccineList from '@/views/VaccineList'
import AddVaccine from '@/views/AddVaccine'
import EditVaccine from '@/views/EditVaccine'
import Article from '@/views/Article'
import Info from '@/views/Info'
import ArticleDetail from '@/views/ArticleDetail'
import Password from '@/views/Password'
import CompanyList from '@/views/CompanyList'
import UserManage from '@/views/back/UserManage'
import ArticleManage from '@/views/back/ArticleManage'
import VaccineManage from '@/views/back/VaccineManage'
import CompanyManage from '@/views/back/CompanyManage'
import AddV from '@/views/back/AddV'
import EditV from '@/views/back/EditV'
import AddA from '@/views/back/AddA'
import EditA from '@/views/back/EditA'
import AddC from '@/views/back/AddC'
import EditC from '@/views/back/EditC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/vquery',
      name: 'VQuery',
      component: VQuery
    },
    {
      path: '/vaccine',
      name: 'VaccineList',
      component: VaccineList
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/article/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/info/password/:id',
      name: 'Password',
      component: Password
    },
    {
      path: '/vaccine/add',
      name: 'AddVaccine',
      component: AddVaccine
    },
    {
      path: '/vaccine/edit/:id',
      name: 'EditVaccine',
      component: EditVaccine
    },
    {
      path: '/vaccine/buy/:id',
      name: 'CompanyList',
      component: CompanyList
    },
    {
      path: '/nresult/:pname/:bnumber',
      name: 'VNetResult',
      component: VNetResult
    },
    {
      path: '/lresult/:pname/:bnumber',
      name: 'VLResult',
      component: VLResult
    },
    {
      path: '/admin/user',
      name: 'UserManage',
      component: UserManage
    },
    {
      path: '/admin/company',
      name: 'CompanyManage',
      component: CompanyManage
    },
    {
      path: '/admin/company/add',
      name: 'AddC',
      component: AddC
    },
    {
      path: '/admin/company/edit/:id',
      name: 'EditC',
      component: EditC
    },
    {
      path: '/admin/article',
      name: 'ArticleManage',
      component: ArticleManage
    },
    {
      path: '/admin/article/add',
      name: 'AddA',
      component: AddA
    },
    {
      path: '/admin/article/edit/:id',
      name: 'EditA',
      component: EditA
    },
    {
      path: '/admin/vaccine',
      name: 'VaccineManage',
      component: VaccineManage
    },
    {
      path: '/admin/vaccine/add',
      name: 'AddV',
      component: AddV
    },
    {
      path: '/admin/vaccine/edit/:id',
      name: 'EditV',
      component: EditV
    },
  ]
})
