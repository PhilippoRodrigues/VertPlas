<template>
  <div id="produto">

    <lista-de-produtos />
    <Promocoes />

    <!-- This Component will be taken out -->
    <AdicionarProduto />

  </div>
</template>

<script>
import AdicionarProduto from "./AdicionarProduto";
import ListaDeProdutos from "./ListaDeProdutos";
import Promocoes from "./Promocoes";

export default {
  name: "Produto",
  components: {
    Promocoes,
    ListaDeProdutos,
    AdicionarProduto
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
}
</style>
