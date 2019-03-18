<template>
  <div>
    <x-header>保险公司</x-header>

    <flexbox orient="vertical">
      <flexbox-item v-for="company in clist " :key="company.id" style="border-bottom: 10px solid #F5F5F5;">
        <flexbox style="margin-bottom: 8px">
          <flexbox-item :span="1"></flexbox-item>
          <flexbox-item :span="8">{{company.name}}</flexbox-item>
          <flexbox-item>
            <x-button mini  type="primary" @click.native="buy(company.id)">购买</x-button>
          </flexbox-item>
        </flexbox>
      </flexbox-item>
    </flexbox>
    <toast v-model="tshow" >购买成功</toast>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XInput,XButton,Toast,PopupPicker} from 'vux'
import BottomTab from './BottomTab'
import {config} from "../utils/global"
import axios from 'axios'
export default {
  name: "CompanyList",
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
    PopupPicker,
    BottomTab
  },
  data() {
    return{
      clist:[],
      tshow: false
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
          this.clist = response.data.data
        })
    },
    buy(id) {
      const url = config.base_url + '/baby/updateCompany?uid=' +this.$route.params.id + '&cid=' + id
      axios
        .post(url)
        .then(response=>{
          this.tshow = true
          this.$router.push({path: '/vaccine'})
        })
    }
  }
}
</script>

<style scoped>

</style>
