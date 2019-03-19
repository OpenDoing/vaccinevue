<template>
  <div>
    <x-header>添加疫苗</x-header>
    <flexbox style="margin-top: 25px">
      <flexbox-item>
        <group>
          <x-input
            title="宝宝姓名"
            v-model="bname"
            required
            placeholder="必填"
            placeholder-align="right"></x-input>
          <calendar title="接种时间" v-model="today" @on-change="changeTime"></calendar>
          <popup-picker
            title="疫苗名称"
            :data="vlist"
            v-model="vname"
            placeholder="必选"></popup-picker>
          <x-input
            title="疫苗批号"
            placeholder="必填"
            v-model="bnumber"
            required
            placeholder-align="right"></x-input>
        </group>
      </flexbox-item>
    </flexbox>
    <flexbox style="margin-top: 25px">
      <flexbox-item :span="3"></flexbox-item>
      <flexbox-item :span="6">
        <x-button style="background-color: #4A90E2;color: white" @click.native="addVaccine">添加疫苗</x-button>
      </flexbox-item>
      <flexbox-item :span="3"></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XInput,XButton,Toast,PopupPicker,Calendar} from 'vux'
import { config } from "../utils/global"
import axios from 'axios'
export default {
  name: "AddVaccine",
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
    PopupPicker,Calendar,
  },
  data() {
    return{
      today: 'TODAY',
      bname: '',
      vname: ['百白破疫苗'],
      bnumber: '',
      vlist: [['百白破疫苗', '乙肝疫苗', '卡介苗', '脊灰疫苗', '流脑疫苗', '麻疹疫苗', '甲肝疫苗', 'A+C流脑疫苗', '麻风腮疫苗', '乙脑减毒疫苗']],
    }
  },
  methods:{
    changeTime() {

    },
    addVaccine() {
      const uid = localStorage.getItem('userId')
      const url = config.base_url + '/baby/add'
      axios.post(url,{
        byname :this.bname,
        vname: this.vname[0],
        itime: this.today,
        bnumber:this.bnumber,
        uid: uid
      })
        .then(response=>{
          this.$vux.toast.text('添加成功！', 'bottom')
          this.$router.push({path: '/vaccine'})
        })
    }
  }
}
</script>

<style scoped>

</style>
