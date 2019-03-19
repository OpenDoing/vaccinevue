<template>
  <div>
    <x-header :left-options="{showBack: false}" title="文章管理"><div slot="right" @click="addA">新增</div></x-header>
    <flexbox orient="vertical">
      <flexbox-item v-for="article in articles" :key="article.id" style="border-bottom: 10px solid #F5F5F5;padding-bottom: 8px">
        <router-link :to="{name: 'EditA', params: {id: article.id}}" style="color: black">
          <flexbox orient="vertical">
            <flexbox-item ><h3 style="margin-left: 15px"><b>{{article.title}}</b></h3></flexbox-item>
            <flexbox-item><p style="margin-left: 15px">{{article.content.substring(0,40) + '...'}}</p></flexbox-item>
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
    name: "ArticleManage",
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
        articles: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        const url = config.base_url + '/article/all'
        axios
          .get(url)
          .then(response=>{
            this.articles = response.data.data
          })
      },
      addA() {
        this.$router.push({path: '/admin/article/add'})
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
