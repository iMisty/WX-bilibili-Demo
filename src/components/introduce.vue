<template>
<div>
    <p>{{ message }}</p>
</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      message: 'Miya Carnival 是一套基于 BootStrap 与 Vue 的模板,只为内容渲染'
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
    width: 72%;
    text-align: center;
    flex-wrap: wrap;
    padding: 8vh 0;
}
p{
    width: 80%;
    margin: 0 auto;
    font-size: 1.2rem;
    letter-spacing: 1px;
}
</style>
