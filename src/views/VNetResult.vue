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
        <flexbox-item v-if="result.recall === '0'" style="background-color: #00CEA8;border-radius: 10px">
          <div class="result">该批次疫苗信息正常</div>
        </flexbox-item>
        <flexbox-item v-else style="background-color: #FF564E;border-radius: 10px">
          <div  class="result">该批次属于问题疫苗</div>
        </flexbox-item>
        <flexbox-item :span="1"></flexbox-item>
      </flexbox>

      <flexbox orient="vertical" style="background-color: #FFF6F6;margin-top: 25px;padding-bottom: 15px;padding-top: 15px">
        <flexbox-item  >
          <h2 style="margin-left: 15px">{{result.product_name_raw}}</h2>
        </flexbox-item>

        <flexbox-item>
          <flexbox>
            <flexbox-item>
              <p style="margin-left: 15px">简称：{{result.product_name}}</p>
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
              <p style="margin-left: 15px">生产批号：{{result.batch_number}}</p>
            </flexbox-item>
          </flexbox>
        </flexbox-item>

        <flexbox-item>
          <flexbox>
            <flexbox-item>
              <p style="margin-left: 15px">有效期至：{{result.valid_date}}</p>
            </flexbox-item>
          </flexbox>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item :span="4"></flexbox-item>
        <flexbox-item>
          <p style="font-size: 12px;color: lightslategray;">已为您提供最接近的结果</p>
        </flexbox-item>
        <flexbox-item :span="1"></flexbox-item>
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
  name: "VResult",
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
      emptyshow: true
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init() {
      const url = config.base_url + '/vquery/net?pname=' + this.product_name + '&bnumber=' + this.batch_number
      axios
        .get(url)
        .then(response=>{
          if (response.data.data === []){
            console.log('kongde')
            this.emptyshow = false
          } else {
            this.result = response.data.data[0]
            this.emptyshow = false
            console.log(this.result)
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
