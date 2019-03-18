<template>
  <div>
    <x-header :left-options="{showBack: false}" title="疫苗管理"><div slot="right" @click="addV">新增</div></x-header>
    <flexbox orient="vertical">
      <flexbox-item v-for="vaccine in vlist " :key="vaccine.id" style="border-bottom: 10px solid #F5F5F5;padding-bottom: 8px">
        <router-link :to="{name:'EditV',params: {id: vaccine.id}}" style="color: black">
          <flexbox style="border-bottom: 1px solid #F5F5F5">
            <flexbox-item :span="12" ><b style="font-size: 18px;padding-left: 15px">{{vaccine.rname}}</b></flexbox-item>
          </flexbox>
          <flexbox orient="vertical">
            <flexbox-item >
              <flexbox style="margin-top: 8px">
                <flexbox-item :span="12">
                  <p style="padding-left: 15px">简写: {{vaccine.pname}}</p>
                </flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item>
              <flexbox>
                <flexbox-item :span="12">
                  <p style="padding-left: 15px">生产批号：{{vaccine.bnumber}}</p>
                </flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox style="margin-top: 8px">
              <flexbox-item :span="12">
                <p style="padding-left: 15px">生产厂家：{{vaccine.manufacturer}}</p>
              </flexbox-item>
            </flexbox>
              <flexbox style="margin-top: 8px">
                <flexbox-item :span="4">
                  <p style="padding-left: 15px">是否召回：</p>
                </flexbox-item>
                <flexbox-item>
                  <div v-if="vaccine.recall === 1"><p style="color: #EA5A49">是</p></div>
                  <div v-else>否</div>
                </flexbox-item>
              </flexbox>
            </flexbox>
        </router-link>
      </flexbox-item>
    </flexbox>
    <BackBottomTab></BackBottomTab>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XInput,XButton,Toast,PopupPicker} from 'vux'
import { config } from "../../utils/global"
import axios from 'axios'
import BackBottomTab from './BackBottomTab'

export default {
  name: "VaccineManage",
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
    PopupPicker,BackBottomTab
  },
  data() {
    return {
      vlist: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const url = config.base_url + '/vquery/all'
      axios
        .get(url)
        .then(response=>{
          this.vlist = response.data.data
        })
    },
    addV() {
      this.$router.push({path: '/admin/vaccine/add'})
    }
  }
}
</script>

<style scoped>

</style>
