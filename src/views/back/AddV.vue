<template>
  <div>
    <x-header>添加疫苗</x-header>
    <flexbox style="margin-top: 25px">
      <flexbox-item>
        <group>
          <x-input
            title="产品全称"
            v-model="rname"
            required
            placeholder="产品专业名"
            placeholder-align="right"></x-input>

          <x-input
            title="产品简写"
            v-model="pname"
            required
            placeholder="产品俗名"
            placeholder-align="right"></x-input>

          <x-input
            title="疫苗批号"
            placeholder="产品批号"
            v-model="bnumber"
            required
            placeholder-align="right"></x-input>

          <x-input
            title="生产厂家"
            placeholder="厂家全称"
            v-model="manufacturer"
            required
            placeholder-align="right"></x-input>

          <x-input
            title="是否召回"
            placeholder="0正常 1召回"
            v-model="recall"
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
import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XInput,XButton,Toast} from 'vux'
import { config } from "../../utils/global"
import axios from 'axios'
export default {
    name: "AddV",
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
    },
    data() {
      return{
        rname: '',
        pname: '',
        manufacturer: '',
        bnumber: '',
        recall: ''
      }
    },
    methods:{
      changeTime() {

      },
      addVaccine() {
        if (this.recall !== '0' && this.recall !== '1') {
          this.$vux.toast.text('召回参数不正确！', 'bottom')
          return
        }
        const url = config.base_url + '/vquery/add'
        axios
          .post(url,{
            rname :this.rname,
            pname: this.pname,
            manufacturer: this.manufacturer,
            bnumber:this.bnumber,
            recall: this.recall
          })
          .then(response=>{
            this.$vux.toast.text('添加成功！', 'bottom')
            this.$router.push({path: '/admin/vaccine'})
          })
      }
    }
  }
</script>

<style scoped>

</style>
