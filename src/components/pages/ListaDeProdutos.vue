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
          Comprar
        </b-button>

        <b-button
                class="botao-apagar alert-danger"
                alt="apagar"
                title="apagar"
                @click="excluiProduto(produto.id)"
        >
          <b-icon-trash-fill
                  @click="excluiProduto(produto.id)"
                  class="icon-trash"
                  alt="apagar"
                  title="apagar"
          ></b-icon-trash-fill>
        </b-button>

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
    ...mapActions(["getProdutos", "adicionarNoCarrinho", "excluiProduto"])
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

  /* Body */

  .lista-de-produtos {
    background-color: #004F5A;
  }

  .form-text {
    margin-top: 0;
  }

  /*Título Produtos */

  .titulo-form {
    text-align: center;
    padding-top: 5%;
    margin-bottom: 5%;
    font-size: 3em;
    font-weight: bold;
    color: #E97142 !important;
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
    color: #E97142;
  }

  .preco-card {
    text-align: center;
    vertical-align: bottom;
    color: #DE9F8C;
  }

  .card-produto img {
    height: 50%;
  }

  .card-produto {
    text-align: center;
    max-width: 20%;
    padding: 0;
    margin: 5%;
    color: #DE9F8C;
    border-color: black;
  }

  /* Botões */

  .botoes {
    justify-content: space-around;
    display: flex;
  }

  .btn-detalhe:hover,
  .btn-comprar:hover,
  .botao-apagar:hover {
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
  }

  .botao-apagar {
    margin-top: 10%;
    width: 100%;
  }

  .botao-apagar:hover {
    background-color: darkred;
  }

  a:visited,
  a:link {
    text-decoration: none;
    background-color: white;
    color: #DE9F8C;
    font-weight: bold;
    box-shadow: none;
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
