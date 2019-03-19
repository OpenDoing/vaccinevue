<template>
  <div>
    <x-header title="编辑疫苗"><div slot="right" @click="del(vaccine.id)">删除</div></x-header>
    <flexbox style="margin-top: 25px">
      <flexbox-item>
        <group>
          <x-input
            title="产品全称"
            v-model="vaccine.rname"
            required
            placeholder="产品专业名"
            placeholder-align="right"></x-input>

          <x-input
            title="产品简写"
            v-model="vaccine.pname"
            required
            placeholder="产品俗名"
            placeholder-align="right"></x-input>

          <x-input
            title="疫苗批号"
            placeholder="产品批号"
            v-model="vaccine.bnumber"
            required
            placeholder-align="right"></x-input>

          <x-input
            title="生产厂家"
            placeholder="厂家全称"
            v-model="vaccine.manufacturer"
            required
            placeholder-align="right"></x-input>

          <x-input
            title="是否召回"
            placeholder="0正常 1召回"
            v-model="vaccine.recall"
            required
            placeholder-align="right"></x-input>
        </group>
      </flexbox-item>
    </flexbox>
    <flexbox style="margin-top: 25px">
      <flexbox-item :span="3"></flexbox-item>
      <flexbox-item :span="6">
        <x-button style="background-color: #4A90E2;color: white" @click.native="updateCommit">提交编辑</x-button>
      </flexbox-item>
      <flexbox-item :span="3"></flexbox-item>
    </flexbox>
    <confirm v-model="showConfirm"
             title="温馨提示"
             theme="android"
             confirm-text="删除"
             @on-cancel="onCancel"
             @on-confirm="onConfirm(vaccine.id)">
      <p style="text-align:left;">删除后数据不可恢复！</p>
    </confirm>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XInput,XButton,Toast,Confirm} from 'vux'
  import { config } from "../../utils/global"
  import axios from 'axios'
  export default {
    name: "EditV",
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
      Confirm,
    },
    data() {
      return{
        vaccine: {},
        showConfirm: false,
      }
    },
    mounted() {
      this.init()
    },
    methods:{
      init() {
        const url = config.base_url + '/vquery/get?id=' + this.$route.params.id
        axios
          .get(url)
          .then(response=>{
            this.vaccine = response.data.data
          })
      },
      changeTime() {

      },
      onConfirm(id) {
        const url = config.base_url + '/vquery/del/?id=' + this.vaccine.id
        axios
          .delete(url)
          .then(response=>{
            this.$vux.toast.text('删除成功！', 'bottom')
            this.$router.push({path: '/admin/vaccine'})
          })
      },
      del(id) {
        this.showConfirm = true
      },
      onCancel() {
        this.showConfirm = false
      },
      updateCommit() {
        if (this.vaccine.recall !== '0' && this.vaccine.recall !== '1') {
          this.$vux.toast.text('召回参数不正确！', 'bottom')
          return
        }
        const url = config.base_url + '/vquery/update/?pname=' + this.vaccine.pname + '&rname=' + this.vaccine.rname
                    + '&bnumber=' + this.vaccine.bnumber + '&recall=' + this.vaccine.recall + '&id=' +  this.vaccine.id
        axios
          .post(url)
          .then(response=>{
            this.$vux.toast.text('编辑成功！', 'bottom')
            this.$router.push({path: '/admin/vaccine'})
          })
      }
    }
  }
</script>

<style scoped>

</style>
