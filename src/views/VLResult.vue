<template>
  <div>
    <x-header>疫苗查询结果</x-header>

    <div v-if="emptyshow">
      <flexbox style="margin-top: 120px">
        <flexbox-item :span="4"></flexbox-item>
        <flexbox-item :span="5">
          <img src="../assets/img/nofind.svg" class="notfind"/>
          <br/>
          <b>未找到该批次的疫苗</b>
        </flexbox-item>
        <flexbox-item :span="3"></flexbox-item>
      </flexbox>

    </div>

    <div v-else>
      <flexbox style="margin-top: 15px">
        <flexbox-item :span="1"></flexbox-item>
        <flexbox-item v-if="result.recall === 0" style="background-color: #00CEA8;border-radius: 10px">
          <div class="result">该批次疫苗信息正常</div>
        </flexbox-item>
        <flexbox-item v-else-if="result.recall === 1" style="background-color: #FF564E;border-radius: 10px">
          <div  class="result">该批次属于问题疫苗</div>
        </flexbox-item>
        <flexbox-item :span="1"></flexbox-item>
      </flexbox>

      <flexbox orient="vertical" style="background-color: #FFF6F6;margin-top: 25px;padding-bottom: 15px;padding-top: 15px">
        <flexbox-item  >
          <h2 style="margin-left: 15px">{{result.rname}}</h2>
        </flexbox-item>

        <flexbox-item>
          <flexbox>
            <flexbox-item>
              <p style="margin-left: 15px">简称：{{result.pname}}</p>
            </flexbox-item>
          </flexbox>
        </flexbox-item>

        <flexbox-item>
          <flexbox>
            <flexbox-item>
              <p style="margin-left: 15px">生产企业：{{result.manufacturer}}</p>
            </flexbox-item>
          </flexbox>
        </flexbox-item>

        <flexbox-item>
          <flexbox>
            <flexbox-item>
              <p style="margin-left: 15px">生产批号：{{result.bnumber}}</p>
            </flexbox-item>
          </flexbox>
        </flexbox-item>

      </flexbox>
    </div>
    <BottomTab></BottomTab>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XInput,XButton,Toast,PopupPicker} from 'vux'
  import BottomTab from './BottomTab'
  import { config } from "../utils/global"
  import axios from 'axios'
  export default {
    name: "VLResult",
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
        product_name: this.$route.params.pname,
        batch_number: this.$route.params.bnumber,
        result: {},
        emptyshow: false
      }
    },
    mounted() {
      this.init()
    },
    methods:{
      init() {
        const url = config.base_url + '/vquery/local?pname=' + this.product_name + '&bnumber=' + this.batch_number
        axios
          .get(url)
          .then(response=>{
            if (response.data.data === null){
              console.log(666)
              this.emptyshow = true
            } else {
              this.result = response.data.data
            }
          })
      }
    }
  }
</script>

<style scoped>
  .result{
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 22px;

  }
  .notfind{
    width: 120px;
    height: auto;
  }
</style>
