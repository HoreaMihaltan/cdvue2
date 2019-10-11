<template>
  <div id="app">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div id="txt"></div>
    <router-view/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <Header v-if="$router.currentRoute.name !== 'home'" class="sticky"/>
    <Footer v-if="$router.currentRoute.name !== 'home'" class="footer"/>
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
body {margin:0}

body {margin:0;}

.icon-bar {
  width: 100%;
  background-color: #555;
  overflow: auto;
}

.icon-bar a {
  float: left;
  width: 20%;
  text-align: center;
  padding: 12px 0;
  transition: all 0.3s ease;
  color: white;
  font-size: 36px;
}

.icon-bar a:hover {
  background-color: #000;
}

.active {
  background-color: #4CAF50;
}
</style>
