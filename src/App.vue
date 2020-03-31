<template>
  <div id="app">
      <Header />
      <router-view />
      <Footer />
  </div>

</template>

<script>

import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {Footer, Header}
};
</script>

<style>

    html {
        background-color: #f8faf5;
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  height: 70em;
  background-color: #f8faf5;
}
    body {
        background-color: #f7f9f0;
    }
</style>
