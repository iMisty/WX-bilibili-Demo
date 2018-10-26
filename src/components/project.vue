<template>
    <div>
        <h2 class="title">{{ message }}</h2>
        <div class="lists">
            <a
                v-for="item of list"
                :key="item.index"
                :href="item.link">
                <img :src="item.img" :alt="item.title" />
                <header>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.text }}</p>
                </header>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      message: '近期作品',
      list: [
        {
          link: 'https://Miya-Yukarin.github.io/Nekomimi/',
          img: '../../static/project/project1.png',
          title: 'Nekomimi-多功能导航页',
          text: 'Nekomimi是一个简洁的导航页,可用于博客起始页面或固定内容落地页'
        },
        {
          link: 'https://Miya-Yukarin.github.io/LandingPage/',
          img: '../../static/project/project2.png',
          title: 'LandingPage-简洁起始页',
          text: 'LandingPage是一个导航单页,仅输出标题与导航,无任何其他功能,回归简洁'
        },
        {
          link: 'https://Miya-Yukarin.github.io/HTML-MinResume/',
          img: '../../static/project/project3.png',
          title: 'Resume-个人简历项目',
          text: 'Resume是基于Bootstrap的个人简历项目,纯粹为展示内容而生'
        }
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
.lists{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    padding: 8vh 0 0 0;
}
a{
    padding: 0 12px;
    color: #999;
    word-break: break-all;
}
img{
    max-width: 360px;
    max-height: 140px;
}
@media screen and (max-width: 960px){
    .lists{
        flex-direction: column;
    }
}
</style>
