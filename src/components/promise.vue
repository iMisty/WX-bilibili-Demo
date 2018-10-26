<template>
    <div>
        <h3>{{ message }}</h3>
        <ul>
            <li v-for="item of list" :key="item.index">
                <i class="fa fa-check"></i>
                <p>{{ item }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      message: '使用该模板您将得到',
      list: ['6种不同的模板可自由组合', '可快速部署于您的服务器', '可自定义的组件列表', '60个以上的组件', '承诺不断更新']
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style scoped>
div{
    flex:0.38;
}
li{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    line-height: 30px;
    padding: 16px 0;
    border-bottom: 1px solid #999;
}
li:nth-last-child(1){
    border: none;
}
i{
    color: #81C784;
    padding-right: 4px;
}
@media screen and (max-width: 960px) {
    div{
        text-align: center;
    }
    li,p{
        margin: 0 auto;
    }
}
</style>
