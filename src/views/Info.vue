<template>
  <div>
    <x-header :left-options="{showBack: false}">个人中心</x-header>
    <flexbox style="margin-top: 20px">
      <flexbox-item :span="1"></flexbox-item>
      <flexbox-item :span="4">
        <!--<img src="../assets/logo.png" class="avatar">-->
        <el-upload
          class="avatar-uploader"
          :action="local"
          :show-file-list="false"
          :on-progress="uploadAva"
          :data="uploadData"
          name="file">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-picture avatar-uploader-icon"></i>
        </el-upload>
      </flexbox-item>
      <flexbox-item>
        <flexbox orient="vertical">
          <flexbox-item><p style="font-size: 22px;"><b>{{username}}</b></p></flexbox-item>
          <flexbox-item>ID:{{userId}}</flexbox-item>
        </flexbox>
      </flexbox-item>
    </flexbox>

    <flexbox style="margin-top: 30px" class="borderb"></flexbox>
    <flexbox orient="vertical">
      <flexbox-item>
        <group>
          <cell title="修改密码" :link="'/info/password/' + userId" >
            <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/password.svg">
          </cell>
          <cell title="切换账号" @click.native="changeAccount">
            <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/username.svg">
          </cell>
        </group>
      </flexbox-item>
    </flexbox>
    <BottomTab></BottomTab>
  </div>
</template>

<script>
  import BottomTab from './BottomTab'
import { XHeader,Flexbox, FlexboxItem, Divider, XImg, Icon,XButton,ViewBox,Cell,Group} from 'vux'
import { config} from "../utils/global";
import axios from 'axios'
export default {
  name: "Info",
  components: {
    XHeader,
    BottomTab,
    Flexbox,
    FlexboxItem,
    Divider,
    XImg,
    Icon,
    XButton,
    ViewBox,Cell,Group
  },
  data() {
    return{
      local: config.upload_avatar,
      uploadData: {
        userId: localStorage.getItem('userId')
      },
      userId: '',
      username: '',
      createNum: 0,
      joinNum: 0,
      imageUrl: '',
      imgaddress: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    changeAccount() {
      window.localStorage.clear();
      this.$router.push({path: '/'})
    },
    init() {
      const userId = localStorage.getItem('userId')
      const url = config.base_url + '/user/get?userId=' + userId
      axios
        .get(url)
        .then(response=>{
          console.log(response)
          let data = response.data
          this.username = data.data.username
          this.userId = data.data.id
          this.imageUrl = config.source_url + data.data.avatar
        })
    },
    uploadAva(response, file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw);

    },
  }
}
</script>

<style scoped>
  .avatar{
    width: 70px;
    height: 70px;
    border-radius: 70px;
  }
  .avatar-uploader .el-upload {
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    margin-left: 15px;
    margin-top: 15px;
    border-radius: 16px;
    border: 1px solid #d9d9d9;
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
</style>
