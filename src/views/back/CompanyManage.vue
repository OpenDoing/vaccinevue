<template>
  <div>
    <x-header :left-options="{showBack: false}" title="保险管理"><div slot="right" @click="addC">新增</div></x-header>
    <flexbox orient="vertical">
      <flexbox-item v-for="company in companies" :key="company.id" style="border-bottom: 10px solid #F5F5F5;padding-bottom: 8px">
        <router-link :to="{name: 'EditC', params: {id: company.id}}" style="color: black">
          <flexbox orient="vertical">
            <flexbox-item ><h3 style="margin-left: 15px"><b>{{company.name}}</b></h3></flexbox-item>
            <flexbox-item><p style="margin-left: 15px">{{company.introduce.substring(0,40) + '...'}}</p></flexbox-item>
          </flexbox>
        </router-link>
      </flexbox-item>
    </flexbox>
    <BackBottomTab></BackBottomTab>
  </div>
</template>

<script>
  import { XHeader,Flexbox, FlexboxItem, Divider, XImg, Icon,XButton,ViewBox} from 'vux'
  import BackBottomTab from './BackBottomTab'
  import {config} from "../../utils/global"
  import axios from 'axios'

  export default {
    name: "CompanyManage",
    components: {
      XHeader,
      Flexbox,
      FlexboxItem,
      Divider,
      XImg,
      Icon,
      XButton,
      ViewBox,
      BackBottomTab
    },
    data() {
      return{
        companies: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        const url = config.base_url + '/company/all'
        axios
          .get(url)
          .then(response=>{
            this.companies = response.data.data
          })
      },
      addC() {
        this.$router.push({path: '/admin/company/add'})
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
