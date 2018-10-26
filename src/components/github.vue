<template>
    <div>
        <h2 class="title">{{ message }}</h2>
        <section>
            <propagate />
            <promise />
        </section>
    </div>
</template>

<script>
import propagate from './propagate'
import promise from './promise'
export default {
  components: { propagate, promise },
  props: {},
  data () {
    return {
      message: '关于本项目'
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
    flex-direction: column;
    justify-content: space-around;
}
section{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 4vh 0;
}
@media screen and (max-width: 960px){
    section{
        flex-direction: column;
    }
}
</style>
