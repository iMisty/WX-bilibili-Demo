<template>
    <div>
        <a :href="links">
            <button>{{ message }}</button>
        </a>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      links: 'https://github.com/Miya-Yukarin',
      message: 'View Demo On GitHub'
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
button{
    padding: 16px;
    border: transparent;
    border-radius: 20px;
    background-color: #00B4DB;
    color: #fff;
    transition: .6s;
}
button:hover{
    transition: .6s;
    box-shadow: 0 4px 8px rgba(0,180,219,.5);
}
button:active{
    transition: .6s;
    box-shadow: none;
}
</style>
