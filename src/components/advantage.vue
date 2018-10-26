<template>
<div>
    <article v-for="item of list" :key="item.index">
        <i class="fa fa-4x" :class="item.icon"></i>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
    </article>
</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      list: [
        {icon: 'fa-flag', title: '可选的组件化工程', text: '组件化的配置使得部署一个站点变得非常简单,只需要选择想要的组件,再设置喜欢的颜色样式即可完成'},
        {icon: 'fa-home', title: '多用途页面配置', text: '简单配置一个页面,无论企业网站还是博客网站,亦或是定价展示等,在这里都可以实现'},
        {icon: 'fa-map', title: '示例页面和站点', text: '如果只是为了产品或内容的展示或寻找合适的idea,您完全可以根据我们提供的示例页面来设置操作'}
      ]
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
    flex-direction: row !important;
    justify-content: space-around;
    text-align: center;
}
article{
    padding: 0 12px;
    letter-spacing: 1px;
    word-break: break-all;
}
@media screen and (max-width: 960px){
    div{
        flex-direction: column !important;
    }
}
</style>
