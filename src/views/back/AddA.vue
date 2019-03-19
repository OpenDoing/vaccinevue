<template>
  <div>
    <x-header title="添加文章"></x-header>
    <flexbox style="margin-top: 15px">
      <flexbox-item>
        <group>
          <x-input
            title="文章标题"
            v-model="title"
            required
            placeholder="必填"
            placeholder-align="right"></x-input>

          <x-textarea
            :rows="15"
            v-model="content"
            placeholder="文章内容"
            style="border: 1px solid #F5F5F5;"></x-textarea>

        </group>
      </flexbox-item>
    </flexbox>
    <flexbox style="margin-top: 25px">
      <flexbox-item :span="3"></flexbox-item>
      <flexbox-item :span="6">
        <x-button style="background-color: #4A90E2;color: white" @click.native="addArticle">添加文章</x-button>
      </flexbox-item>
      <flexbox-item :span="3"></flexbox-item>
    </flexbox>

  </div>
</template>

<script>
  import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XInput,XButton,Toast,XTextarea} from 'vux'
  import { config } from "../../utils/global"
  import axios from 'axios'
  export default {
    name: "AddA",
    components: {
      Flexbox,
      FlexboxItem,
      XHeader,
      Divider,
      Cell,
      Group,
      XInput,
      XButton,
      Toast,
      XTextarea
    },
    data() {
      return{
        title: '',
        content: '',
      }
    },
    methods:{
      addArticle() {
        const url = config.base_url + '/article/add'
        axios
          .post(url,{
            title :this.title,
            content: this.content,
          })
          .then(response=>{
            this.$vux.toast.text('添加成功！', 'bottom')
            this.$router.push({path: '/admin/article'})
          })
      }
    }
  }
</script>

<style scoped>

</style>
