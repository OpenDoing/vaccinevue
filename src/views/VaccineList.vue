<template>
  <div>
    <x-header title="疫苗管理" :left-options="{showBack: false}"><div slot="right" @click="addV">新增</div></x-header>
    <flexbox orient="vertical">
      <flexbox-item v-for="vaccine in vlist " :key="vaccine.id" style="border-bottom: 10px solid #F5F5F5;">
        <router-link :to="{name:'EditVaccine',params: {id: vaccine.id}}" style="color: black">
        <flexbox style="border-bottom: 1px solid #F5F5F5">
          <flexbox-item :span="7" ><b style="font-size: 18px;padding-left: 15px">{{vaccine.byname}}</b></flexbox-item>
          <flexbox-item>{{vaccine.itime}}</flexbox-item>
        </flexbox>
        <flexbox orient="vertical">
          <flexbox-item >
            <flexbox style="margin-top: 8px">
              <flexbox-item :span="7">
                <p style="padding-left: 15px">接种类型:</p>
              </flexbox-item>
              <flexbox-item>
                {{vaccine.vname}}
              </flexbox-item>
            </flexbox>
          </flexbox-item>
          <flexbox-item>
            <flexbox>
              <flexbox-item :span="7">
                <p style="padding-left: 15px">接种批号：</p>
              </flexbox-item>
              <flexbox-item>
                <p style="color: #EA5A49">{{vaccine.bnumber}}</p>
              </flexbox-item>
            </flexbox>
          </flexbox-item>
          <flexbox style="margin-top: 8px">
            <flexbox-item :span="7">
              <p style="padding-left: 15px">投保公司：</p>
            </flexbox-item>
            <flexbox-item>
              <div v-if="vaccine.company !== null">{{vaccine.company}}</div>
              <div v-else>未投保
              </div>
            </flexbox-item>
          </flexbox>
        </flexbox>
        </router-link>
      </flexbox-item>
    </flexbox>
    <divider></divider>
    <divider></divider>
    <divider></divider>

    <BottomTab></BottomTab>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XInput,XButton,Toast,PopupPicker} from 'vux'
import BottomTab from './BottomTab'
import {config} from "../utils/global"
import axios from 'axios'
export default {
  name: "VaccineList",
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
      vlist: []

    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init() {
      const url = config.base_url + '/baby/all'
      axios
        .get(url)
        .then(response=>{
          this.vlist = response.data.data
        })
    },
    addV() {
      this.$router.push("/vaccine/add")
    }
  }
}
</script>

<style scoped>

</style>
