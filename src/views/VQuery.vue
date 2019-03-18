<template>
  <div>
    <x-header :left-options="{showBack: false}">疫苗快查</x-header>
    <flexbox>
      <flexbox-item>
        <img src="../assets/img/query.jpg" class="home-cover"/>
      </flexbox-item>
    </flexbox>
    <flexbox orient="vertical">
      <flexbox-item>
        <group>
          <popup-picker
            title="疫苗名称"
            :data="vlist"
            v-model="name"
            @on-change="onChange"
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
      <flexbox-item :span="1"></flexbox-item>
      <flexbox-item :span="4">
        <x-button @click.native="local">本地查询</x-button>
      </flexbox-item>
      <flexbox-item :span="1"></flexbox-item>
      <flexbox-item :span="4">
        <x-button type="primary" @click.native="net" style="background-color: #4A90E2">网络查询</x-button>
      </flexbox-item>
    </flexbox>

    <flexbox orient="vertical" style="margin-top: 30px">
      <flexbox-item>
        <b style="padding-left: 15px">网络查询：</b>
        <br/>
        <p style="padding-left: 15px">基于国家疫苗中心最新数据，保证数据的实时性</p>
      </flexbox-item>
      <flexbox-item>
        <b style="padding-left: 15px">本地查询：</b>
        <br/>
        <p style="padding-left: 15px">用户自已上传的疫苗数据</p>
      </flexbox-item>
    </flexbox>
    <BottomTab></BottomTab>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XInput,XButton,Toast,PopupPicker} from 'vux'
import BottomTab from './BottomTab'
export default {
  name: "VQuery",
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
      name: ['百白破疫苗'],
      bnumber: '',
      vlist: [['百白破疫苗', '乙肝疫苗', '卡介苗', '脊灰疫苗', '流脑疫苗', '麻疹疫苗', '甲肝疫苗', 'A+C流脑疫苗', '麻风腮疫苗', '乙脑减毒疫苗']],
    }
  },
  mounted() {

  },
  methods: {
    onChange() {

    },
    local() {
      if (this.bnumber === '') {
        this.$vux.toast.text('批号为空！', 'bottom')
        return
      }
      this.$router.push('/lresult/' + this.name[0] + '/' + this.bnumber)
    },
    net() {
      if (this.bnumber === '') {
        this.$vux.toast.text('批号为空！', 'bottom')
        return
      }
      this.$router.push('/nresult/' + this.name[0] + '/' + this.bnumber)
    }
  }
}
</script>

<style scoped>
  .home-cover {
    width: 100%;
    height: auto;
  }
</style>
