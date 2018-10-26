<template>
    <div id="header-title">
        <h1 class="text">{{ title }}</h1>
        <p class="text">{{ text }}</p>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      title: 'Miya Carnival',
      text: '路过的熟悉，如同有你，已无转身的距离'
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="css" scoped>
div{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    background:linear-gradient(-135deg,#00B4DB,#0083B0);
}
.text{
    width: 48%;
    margin: 0 auto;
    padding: 8px 0;
    color: #fff;
    letter-spacing: 1px;
    line-height: 30px;
}
</style>
