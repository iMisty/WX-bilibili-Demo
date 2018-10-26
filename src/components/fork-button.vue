<template>
<div>
    <a :href="links">
        <button>
            <i class="fa fa-code-fork"> Fork</i>
        </button>
    </a>
</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      links: 'https://github.com/Miya-Yukarin/Miya-Yukarin'
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
</style>
