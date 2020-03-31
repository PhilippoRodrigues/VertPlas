<template>
  <div id="produto">
    <b-row v-if="exibeProduto" class="cards-home">
      <h1>Produtos</h1>
    </b-row>

    <AdicionarProduto />

    <b-button
      href="#"
      class="btn-adicionar"
      alt="adicionar produto"
      title="adicionar produto"
    >
      <router-link :to="{ name: 'adicionarProduto' }">
        Adicionar produto
      </router-link>
    </b-button>

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
      >
        <b-card-text class="preco-card" alt="preço" title="preço">
                     Preço: {{ produto.valor | formatarPreco("R$") }}
          <!--            Preço: R${{ produto.valor }}/Kg-->
<!--          Preço: {{ // produto.valor }}-->
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
            @click="adicionarAoCarrinho(produto)"
            alt="comprar"
            title="comprar"
          >
            Comprar</b-button
          >
        </b-row>

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
      </b-card>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AdicionarProduto from "./AdicionarProduto";

export default {
  name: "Produto",
  components: {
    AdicionarProduto
  },
  data() {
    return {
      exibeProduto: true,
      carrinho: [],
      banner: require("../assets/banner-plastico.jpg"),
      carouselUm: require("../assets/sale.jpg"),
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    adicionarAoCarrinho: function(produto) {
      this.carrinho.push(produto.id);
    },
    mostrarCarrinho() {
      this.$router.push({ name: "cart" });
    },
    quantidadeNoCarrinhoPorProduto: function(produto) {
      this.carrinho.filter(elem => elem === produto.id).length;
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
.btn-comprar:hover,
.btn-adicionar {
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

.btn-adicionar {
  margin-left: 6%;
  margin-top: 5%;
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

  .btn-adicionar {
    margin-left: 0;
    margin-top: 5%;
    margin-bottom: 5%;
  }
}
</style>
