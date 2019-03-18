<template>
   <div>
     <x-header :left-options="{showBack: false}">育儿文章</x-header>
     <flexbox orient="vertical">
       <flexbox-item v-for="article in articles" :key="article.id" style="border-bottom: 10px solid #F5F5F5;padding-bottom: 8px">
         <router-link :to="{name: 'ArticleDetail', params: {id: article.id}}" style="color: black">
           <flexbox orient="vertical">
             <flexbox-item ><h3 style="margin-left: 15px"><b>{{article.title}}</b></h3></flexbox-item>
             <flexbox-item><p style="margin-left: 15px">{{article.content.substring(0,40) + '...'}}</p></flexbox-item>
           </flexbox>
         </router-link>
       </flexbox-item>
     </flexbox>
     <BottomTab></BottomTab>
   </div>
</template>

<script>
import { XHeader,Flexbox, FlexboxItem, Divider, XImg, Icon,XButton,ViewBox} from 'vux'
import BottomTab from './BottomTab'
import {config} from "../utils/global"
import axios from 'axios'

export default {
  name: "Article",
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    Divider,
    XImg,
    Icon,
    XButton,
    ViewBox,BottomTab
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
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
