<template>
  <div>
    <x-header title="文章详情"><div slot="right" @click="del(article.id)">删除</div></x-header>
    <flexbox orient="vertical">
      <flexbox-item>
        <group>
          <x-input
            title="文章标题"
            v-model="article.title"
            required
            placeholder="必填"
            placeholder-align="right"></x-input>

          <x-textarea
            :rows="15"
            v-model="article.content"
            placeholder="文章内容"
            style="border: 1px solid #F5F5F5;"></x-textarea>

        </group>
      </flexbox-item>
    </flexbox>

    <flexbox style="margin-top: 25px">
      <flexbox-item :span="3"></flexbox-item>
      <flexbox-item :span="6">
        <x-button style="background-color: #4A90E2;color: white" @click.native="updateArticle">提交修改</x-button>
      </flexbox-item>
      <flexbox-item :span="3"></flexbox-item>
    </flexbox>
    <confirm v-model="showConfirm"
             title="温馨提示"
             theme="android"
             confirm-text="删除"
             @on-cancel="onCancel"
             @on-confirm="onConfirm(article.id)">
      <p style="text-align:left;">删除后数据不可恢复！</p>
    </confirm>
  </div>
</template>

<script>
  import { XHeader,Flexbox, FlexboxItem, Divider, XImg, Icon,XButton,ViewBox,XTextarea,XInput,Confirm,Group} from 'vux'
  import {config} from "../../utils/global"
  import axios from 'axios'
  export default {
    name: "EditA",
    components: {
      XHeader,
      Flexbox,
      FlexboxItem,
      Divider,
      XImg,
      Icon,
      XButton,
      ViewBox,
      XTextarea,
      XInput,
      Confirm,
      Group
    },
    data() {
      return{
        article: {

        },
        showConfirm: false
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        const url = config.base_url + '/article/get?id=' + this.$route.params.id
        axios.get(url)
          .then(response=>{
            this.article = response.data.data
          })
      },
      updateArticle() {
        const url = config.base_url + '/article/update?title=' + this.article.title + '&content=' + this.article.content
                    + '&id='+ this.article.id
        axios
          .post(url)
          .then(response=>{
            this.$vux.toast.text('修改成功！', 'bottom')
            this.$router.push({path: '/admin/article'})
          })
      },
      onConfirm(id) {
        const url = config.base_url + '/article/del/?id=' + this.$route.params.id
        axios
          .delete(url)
          .then(response=>{
            this.$vux.toast.text('删除成功！', 'bottom')
            this.$router.push({path: '/admin/article'})
          })
      },
      del(){
        this.showConfirm = true
      },
      onCancel() {
        this.showConfirm = false
      }
    }
  }
</script>

<style scoped>

</style>
