<template>
    <div id="wrap">
        <introduce />
        <advantage />
        <project />
        <github />
    </div>
</template>

<script>
import introduce from './introduce'
import advantage from './advantage'
import project from './project'
import github from './github'
export default {
  components: { introduce, advantage, project, github },
  props: {},
  data () {
    return {
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
#wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 92%;
    margin: -16vh auto auto auto;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 24px;
    box-shadow: 0 8px 40px rgba(0,0,0,.4);
}
#wrap div{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
}
</style>
