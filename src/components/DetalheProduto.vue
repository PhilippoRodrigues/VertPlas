<template>
  <div class="container">
    <b-form-text class=" container-fluid titulo-form">
      Detalhes do produto {{ produtoById(id).titulo }}
    </b-form-text>

    <b-button :to="{ name: 'produtos' }" alt="voltar" title="voltar">
      Voltar para produtos
    </b-button>

    <b-form-group class="container-fluid form-detalhes">
      <b-row
        class="container-fluid form-detalhes"
        alt="nome do produto"
        title="nome do produto"
        >Produto: {{ produtoById(id).titulo }}</b-row
      >
      <b-row
        class="container-fluid form-detalhes"
        alt="detalhes do produto"
        title="detalhes do produto"
        >Detalhes: {{ produtoById(id).detalhes }}</b-row
      >
      <b-row
        class="container-fluid form-detalhes"
        alt="preço do produto"
        title="preço do produto"
        >Preço: {{ produtoById(id).valor }}</b-row
      >
      <b-row
        class="container-fluid form-detalhes"
        alt="promoção"
        title="promoção"
        >Promoção? {{ produtoById(id).promocao }}</b-row
      >
    </b-form-group>

    <b-button
      @click="editarProduto"
      class="btn-editar"
      alt="editar"
      title="editar"
      >Editar Produto</b-button
    >

    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DetalheProduto",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    editarProduto() {
      this.$router.push({ name: "editaProduto" });
    }
  },
  computed: mapGetters(["produtoById"])
};
</script>

<style scoped>
.titulo-form {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 2em;
}

.form-detalhes {
  height: 100%;
  font-weight: bold;
  margin-top: 2%;
}

.form-detalhes:nth-last-child {
  margin-bottom: 2%;
}

.btn-editar {
  margin: 2% 0 30% 0;
}
</style>
