<template>
  <div id="promocoes">
    <b-row v-if="exibeProduto" class="cards-home">
      <h1>Promoções</h1>
    </b-row>

    <b-row class="container-fluid cards">
      <b-card
        v-for="produto in listaProdutos"
        :key="produto.id"
        :id="produto.id"
        :title="produto.titulo"
        :img-src="produto.imagem"
        img-top
        class="mb-2 container card-produto"
        :class="{ 'card-produto-promocao': produto.promocao === 'Sim' }"
        v-show="produto.promocao === 'Sim'"
      >
        <b-card-text class="preco-card">
          <!--           Preço: {{ // produto.valor | formatarPreco("R$") }}-->
          <!--            Preço: R${{ produto.valor }}/Kg-->
          Preço: {{ produto.valor }}
        </b-card-text>

        <b-row class="botoes">
          <b-button href="#" class="btn-detalhe" alt="saiba mais"
                    title="saiba mais">
            <router-link
              :to="{ name: 'detalheProduto', params: { id: produto.id } }"
            >
              Saiba mais
            </router-link>
          </b-button>

          <b-button
            href="#"
            class="btn-comprar"
            @click="adicionarAoCarrinho(produto)"
            alt="comprar"
            title="comprar"
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
  name: "Promocoes",
  data() {
    return {
      exibeProduto: true,
      carrinho: []
    };
  },
  methods: {
    adicionarAoCarrinho: function(produto) {
      this.carrinho.push(produto.id);
    },
    mostrarCarrinho() {
      this.$router.push({ name: "cart" });
    },
    quantidadeNoCarrinhoPorProduto: function(produto) {
      this.carrinho.filter(prod => prod === produto.id).length;
    },
    ...mapActions(["getProdutos", "excluiProduto", "atualizaProduto"])
  },
  computed: {
    ...mapGetters(["listaProdutos"]),

    quantidadeNoCarrinho: function() {
      return this.carrinho.length;
    }
  },
  created() {
    this.getProdutos();
  }
};
</script>

<style scoped>
    * {
        text-decoration: none;
    }

    /*Cards*/

    .cards-home {
        justify-content: center;
        margin-top: 5%;
    }

    .cards {
        justify-content: space-between;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 5%;
        height: auto;
        margin-bottom: 5%;
    }

    .card-title {
        font-size: 130%;
        font-weight: bold;
    }

    .cards-home,
    .cards {
        background-color: #f8faf5;
    }

    .preco-card {
        text-align: center;
        vertical-align: bottom;
    }

    .card-produto img {
        border-top-left-radius: 9%;
        border-top-right-radius: 9%;
        height: 50%;
    }

    .card-produto {
        border-radius: 8%;
        border: #498d81 solid 5px;
        text-align: center;
        width: 21%;
        padding: 0;
        margin: 5%;
    }

    .card-produto-promocao {
        background-color: orange;
    }

    /*Botões*/

    .botoes {
        justify-content: space-around;
        vertical-align: bottom;
    }

    .btn-detalhe:hover,
    .btn-comprar:hover {
        background-color: yellow;
    }

    a:visited,
    a:link {
        text-decoration: none;
        background-color: #498d81;
        color: #b0e9df;
    }

    a:visited:hover {
        background-color: yellow;
    }

    a:visited:hover,
    a:link:hover {
        background-color: yellow;
    }

    .botao-apagar {
        margin-top: 10%;
        width: 100%;
    }

    .botao-apagar:hover {
        background-color: darkred;
    }

    @media (max-width: 500px) {
        .cards {
            display: block;
            justify-content: center;
        }
        .card-produto {
            width: 70%;
            margin: auto;
        }

        .botoes {
            width: auto;
            margin-bottom: 4%;
        }
    }
</style>
