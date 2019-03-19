<template>
  <div>
    <x-header title="添加公司"></x-header>
    <flexbox style="margin-top: 15px">
      <flexbox-item>
        <group>
          <x-input
            title="公司名称"
            v-model="name"
            required
            placeholder="必填"
            placeholder-align="right"></x-input>

          <x-textarea
            :rows="15"
            v-model="introduce"
            placeholder="公司简介"
            style="border: 1px solid #F5F5F5;"></x-textarea>

        </group>
      </flexbox-item>
    </flexbox>
    <flexbox style="margin-top: 25px">
      <flexbox-item :span="3"></flexbox-item>
      <flexbox-item :span="6">
        <x-button style="background-color: #4A90E2;color: white" @click.native="addCompany">添加公司</x-button>
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
    name: "AddC",
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
        name: '',
        introduce: '',
      }
    },
    methods:{
      addCompany() {
        const url = config.base_url + '/company/add'
        axios
          .post(url,{
            name :this.name,
            introduce: this.introduce,
          })
          .then(response=>{
            this.$vux.toast.text('添加成功！', 'bottom')
            this.$router.push({path: '/admin/company'})
          })
      }
    }
  }
</script>

<style scoped>

</style>
