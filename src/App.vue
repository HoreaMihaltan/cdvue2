<template>
  <div id="app">

    <Header></Header>

<!--      <h3 style="inline"><router-link to="/">Home</router-link> |<router-link to="/users">Useri</router-link></h3>-->


    <router-view/>
    <Footer style="position: sticky"></Footer>
  </div>
</template>
<script>
  import MainHeader from "./components/Header.vue";
  import Header from "./components/Header";
  import Footer from "./components/Footer";
    export default {
        name: 'App',
        components: {
            Header,
            Footer
        }
    }

  component: { MainHeader}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
