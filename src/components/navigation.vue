<template>
<div>
    <ul>
        <li v-for="list of list"
            :key="list.index"
        >
            <a :href="list.link">{{ list.value }}</a>
        </li>
    </ul>
</div>
</template>

<script>
import logo from './logo'
export default {
  components: { logo },
  data () {
    return {
      list: [
        {link: '#first-section', value: '简介'},
        {link: '#third-section', value: '作品'},
        {link: '#forth-section', value: '关于'},
        {link: '#', value: '施工中'}
      ]
    }
  }
}
</script>
<style lang="css" scoped>
div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    transition: .4s;
}
ul{
    display: inline-flex;
}
li{
    padding: 20px 8px;
}
li a{
    color: #fff;
    font-size: 0.94rem;
}

</style>
