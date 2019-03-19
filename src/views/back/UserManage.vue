<template>
  <div>
    <x-header :left-options="{showBack: false}" title="用户管理"><div slot="right" @click="quit">退出</div></x-header>
    <flexbox orient="vertical" style="margin-top: 15px">
      <flexbox-item v-for="user in users" :key="user.id" style="margin-top: 15px;border-bottom: 10px solid #F5F5F5;">
        <flexbox>
          <flexbox-item :span="1"></flexbox-item>
          <flexbox-item :span="5">
            {{user.username}}
          </flexbox-item>
          <flexbox-item :span="3">
            <x-button mini type="warn" @click.native="limit(user.id)">限登</x-button>
          </flexbox-item>
          <flexbox-item :span="3">
            <x-button mini type="primary" @click.native="normal(user.id)">解封</x-button>
          </flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item :span="1"></flexbox-item>
          <flexbox-item>
            当前状态：{{user.status === 1 ? '正常' : '已限制登录'}}
          </flexbox-item>
        </flexbox>
      </flexbox-item>
    </flexbox>
    <divider></divider>
    <divider></divider>
    <divider></divider>
    <BackBottomTab></BackBottomTab>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XButton  } from 'vux'
import axios from 'axios'
import {config} from "../../utils/global"
import BackBottomTab from './BackBottomTab'

export default {
    name: "User",
    inject: ['reload'],
    components: {
      Flexbox,
      FlexboxItem,
      XHeader,
      Divider,
      Cell,
      Group,
      XButton,
      BackBottomTab
    },
    data() {
      return {
        users: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        const url = config.base_url + '/user/users'
        axios
          .get(url)
          .then(response=>{
            this.users = response.data.data
          })
      },
      limit(id) {
        const url = config.base_url + '/user/fen?status=0&userId=' + id
        axios
          .post(url)
          .then(response=>{
            this.$vux.toast.text('已限制该用户！', 'bottom')
          })
        this.reload()
      },
      normal(id) {
        const url = config.base_url + '/user/fen?status=1&userId=' + id
        axios
          .post(url)
          .then(response=>{
            this.$vux.toast.text('已解封该用户！', 'bottom')
          })
        this.reload()

      },
      quit(){
        window.localStorage.clear();
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<style scoped>

</style>
