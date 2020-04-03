<template>
  <div class="lista-de-produtos">
  <b-form-text class=" container-fluid titulo-form" v-if="exibeProduto">Produtos</b-form-text>

  <b-row class="container-fluid cards">
    <b-card
      v-for="(produto, index) in listaProdutos"
      :key="index"
      :id="produto.id"
      :title="produto.titulo"
      :img-src="produto.imagem"
      img-top
      class="mb-2 container card-produto"
      :class="{ 'card-produto-promocao': produto.promocao === 'Não' }"
      v-show="produto.promocao === 'Não'"
    >
      <b-card-text class="preco-card" alt="preço" title="preço">
        Preço: {{ produto.valor | currencyMask("R$") }}
      </b-card-text>

      <b-row class="botoes">
        <b-button
          href="#"
          class="btn-detalhe"
          alt="saiba mais"
          title="saiba mais"
        >
          <router-link
            :to="{ name: 'detalheProduto', params: { id: produto.id } }"
          >
            Saiba mais
          </router-link>
        </b-button>

        <b-button
          href="#"
          class="btn-comprar"
          alt="comprar"
          title="comprar"
          @click="adicionarNoCarrinho(produto)"
        >
          Comprar</b-button
        >
      </b-row>
    </b-card>
  </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ListaDeProdutos",
  data() {
    return {
      exibeProduto: true
    };
  },
  methods: {
    adicionarNoCarrinho(id) {
      this.$store.dispatch("adicionarNoCarrinho", id);
    },
    ...mapActions(["getProdutos", "adicionarNoCarrinho"])
  },
  computed: {
    ...mapGetters(["listaProdutos"])
  },
  created() {
    this.getProdutos();
  },
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

  /*Título Produtos */

  .titulo-form {
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 3em;
    font-weight: bold;
    color: #52706b !important;
  }

  /*Cards*/

  .cards-home {
    justify-content: center;
    padding: 3% 0 0;
  }

  .cards {
    justify-content: space-between;
    display: flex;
    padding-bottom: 5%;
    height: auto;
  }

  .card-title {
    font-size: 130%;
    font-weight: bold;
  }

  .cards-home,
  .cards {
    /*background-color: #f8faf5;*/
  }

  .preco-card {
    text-align: center;
    vertical-align: bottom;
  }

  .card-produto img {
    /*border-top-left-radius: 9%;*/
    /*border-top-right-radius: 9%;*/
    height: 50%;
  }

  .card-produto {
    /*border-radius: 8%;*/
    /*border: #52706b solid 5px;*/
    text-align: center;
    max-width: 20%;
    padding: 0;
    margin: 5%;
  }

  /* Botões */

  .botoes {
    justify-content: space-around;
    vertical-align: bottom;
  }

  .btn-detalhe:hover,
  .btn-comprar:hover {
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
  }

  a:visited,
  a:link {
    text-decoration: none;
    background-color: #b0e9df;
    color: #498d81;
    font-weight: bold;
    box-shadow: none;
  }

  a:link {

  }

  /* Media */

  @media (max-width: 500px) {
    .cards {
      display: flex;
      justify-content: center;
    }

    .card-produto {
      max-width: 70%;
      text-align: center;
      margin-left: 10%;
    }

    .preco-card {
      margin-bottom: 20%;
    }

    .botoes {
      width: auto;
    }
  }
</style>
