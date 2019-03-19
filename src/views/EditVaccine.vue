<template>
  <div>
    <x-header title="编辑疫苗"><div slot="right" @click="del(vaccine.id)">删除</div></x-header>
    <flexbox style="margin-top: 15px">
      <flexbox-item>
        <group>
          <x-input
            title="宝宝姓名"
            v-model="vaccine.byname"
            required
            placeholder="必填"
            placeholder-align="right"></x-input>
          <calendar title="接种时间" v-model="vaccine.itime" @on-change=""></calendar>
          <popup-picker
            title="疫苗名称"
            :data="vlist"
            v-model="vtype"
            placeholder="必选"></popup-picker>
          <x-input
            title="疫苗批号"
            placeholder="必填"
            v-model="vaccine.bnumber"
            required
            placeholder-align="right"></x-input>
          <!--v-model="vaccine.company === null ? '暂未购买' : vaccine.company"-->
          <x-input
            title="保险公司"
            v-model="vaccine.company"
            disabled
            placeholder-align="right"></x-input>
          <div style="font-size: 14px;padding-left: 15px">如已投保，保险公司不可修改</div>
        </group>
      </flexbox-item>
    </flexbox>
    <flexbox style="margin-top: 25px">
      <flexbox-item :span="2"></flexbox-item>
      <flexbox-item :span="4">
        <x-button style="background-color: #4A90E2;color: white" @click.native="updateBaby">提交修改</x-button>
      </flexbox-item>
      <flexbox-item :span="4">
        <x-button v-show="buyshow" style="background-color: #4A90E2;color: white" @click.native="buyins">购买保险</x-button>
      </flexbox-item>
      <flexbox-item :span="2"></flexbox-item>
    </flexbox>
    <divider></divider>
    <divider></divider>
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
import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XInput,XButton,Toast,PopupPicker,Calendar,Confirm} from 'vux'
import { config } from "../utils/global"
import axios from 'axios'
export default {
  name: "EditVaccine",
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
    PopupPicker,Calendar,Confirm
  },
  data() {
    return{
      showConfirm: false,
      vaccine: {},
      buyshow: false,
      vtype: ['百白破疫苗'],
      vlist: [['百白破疫苗', '乙肝疫苗', '卡介苗', '脊灰疫苗', '流脑疫苗', '麻疹疫苗', '甲肝疫苗', 'A+C流脑疫苗', '麻风腮疫苗', '乙脑减毒疫苗']],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const url = config.base_url + '/baby/get?id=' + this.$route.params.id
      axios
        .get(url)
        .then(response=>{
          this.vaccine = response.data.data
          if (this.vaccine.company === null) {
            this.buyshow = true
          }
        })
    },
    updateBaby() {
      const url = config.base_url + '/baby/update?byname=' + this.vaccine.byname + '&vname=' + this.vaccine.vname
                  + '&itime=' + this.vaccine.itime + '&bnumber=' + this.vaccine.bnumber + '&id=' + this.$route.params.id
      axios.post(url)
        .then(response=>{
          this.$vux.toast.text('修改成功！', 'bottom')
          this.init()
        })
    },
    buyins() {
      this.$router.push({path: '/vaccine/buy/' + this.$route.params.id})
    },
    del(id) {
      this.showConfirm = true
    },
    onConfirm(val) {
      const url = config.base_url + '/baby/del?id=' + val
      axios
        .delete(url)
        .then(response=>{
          this.$vux.toast.text('删除成功！', 'bottom')
          this.$router.push({path: '/vaccine'})
        })
      this.showConfirm = false
    },
    onCancel() {
      this.showConfirm = false
    }
  }
}
</script>

<style scoped>

</style>
