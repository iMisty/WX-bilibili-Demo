<template>
  <div id="app">
    <div class="fixed">
      <logo />
      <navigation />
    </div>
    <Header />
    <wrap />
    <Footer />
  </div>
</template>

<script>
import logo from './components/logo'
import navigation from './components/navigation'
import Header from './components/header'
import wrap from './components/wrap'
import Footer from './components/footer'
export default {
  name: 'App',
  components: {
    logo,
    navigation,
    Header,
    wrap,
    Footer
  }
}
</script>

<style>
#app{
  margin: 0;
  padding: 0;
  background-color: #e6e6e6;
  font-size: 1rem;
  letter-spacing: 1px;
  overflow-x: hidden;
}
.fixed{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    transition: .4s;
}
</style>
