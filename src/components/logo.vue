<template>
<section>
    <a :href="link">{{ message }}</a>
</section>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      link: '#',
      message: 'Miya Carnival'
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
section{
    margin: auto 0;
}
a{
    color: #fff;
}
</style>
