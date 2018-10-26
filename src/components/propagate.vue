<template>
    <div class="prop">
        <i class="fa fa-github fa-large"></i>
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
        <section class="button">
            <view-button />
            <star-button />
            <fork-button />
        </section>
    </div>
</template>

<script>
import viewButton from './view-button'
import starButton from './star-button'
import forkButton from './fork-button'
export default {
  components: { viewButton, starButton, forkButton },
  props: {},
  data () {
    return {
      title: '免费且开源的模板',
      text: '本页面为开源模板,您可以随意修改并发布为您自己的网站页面'
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
.prop{
    padding: 4vh 0;
    flex: 0.4;
    padding: 2vh 0;
}
p{
    width: 80%;
}
.button{
    display: inline-flex;
    padding: 2vh 4px 0 4px;
    line-height: 46px;
}
@media screen and (max-width: 960px){
    .prop{
        text-align: center;
    }
    p{
        width: 100%;
    }
}
</style>
