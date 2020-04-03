<template>
  <div class="container detalhes-produto">
    <b-form-text class=" container-fluid titulo-form">
      Detalhes do produto {{ produtoById(id).titulo }}
    </b-form-text>

    <b-form-group class="container-fluid form-detalhes">
      <b-button :to="{ name: 'produtos' }" alt="voltar" title="voltar">
        Voltar para produtos
      </b-button>
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
        >Preço: {{ produtoById(id).valor | currencyMask("R$") }}</b-row
      >
      <b-row
        class="container-fluid form-detalhes"
        alt="promoção"
        title="promoção"
        >Promoção? {{ produtoById(id).promocao }}</b-row
      >
      <b-button
        @click="editarProduto"
        class="btn-editar"
        alt="editar"
        title="editar"
        >Editar Produto</b-button
      >
    </b-form-group>

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
  computed: mapGetters(["produtoById"]),
  filters: {
    currencyMask(valor, simbolo) {
      if (!parseFloat(valor)) {
        return "";
      }
      return simbolo + " " + valor.replace(".", ",") + "/kg";
    }
  }
};
</script>

<style scoped>
.detalhes-produto {
  margin-bottom: 25%;
}

.titulo-form {
  text-align: center;
  margin: 5% 0;
  font-size: 2em;
  color: #004f5a !important;
}

.form-detalhes {
  height: 70%;
  font-weight: bold;
  margin-top: 2%;
}

.btn-editar {
  margin: 2% 0 0 0;
}

/* Responsividade */

@media (max-width: 500px) {
  .detalhes-produto {
    margin-bottom: 50%;
  }
}
</style>
