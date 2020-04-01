<template>
  <div id="promocoes">
    <b-form-text class=" container-fluid titulo-form">Promoções</b-form-text>

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
        <b-card-text class="preco-card-antigo">
          De: {{ produto.valor | currencyMask("R$") }}
        </b-card-text>
        <b-card-text class="preco-card">
          Por: {{ produto.valor_promocao | currencyMask("R$") }}
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
            @click="adicionarNoCarrinho(produto)"
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
    adicionarNoCarrinho(id) {
      this.$store.dispatch("adicionarNoCarrinho", id);
    },
    mostrarCarrinho() {
      this.$router.push({ name: "cart" });
    },
    ...mapActions(["getProdutos", "excluiProduto", "atualizaProduto"])
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
* {
  text-decoration: none;
}

/* Promoções */

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

.preco-card-antigo {
  text-decoration: line-through;
}

.preco-card {
  text-align: center;
  vertical-align: bottom;
  font-weight: bold;
}

.card-produto img {
  border-top-left-radius: 9%;
  border-top-right-radius: 9%;
  height: 50%;
}

.card-produto {
  border-radius: 8%;
  border: #52706b solid 5px;
  text-align: center;
  width: 21%;
  padding: 0;
  margin: 5%;
}

.card-produto-promocao {
  background-color: #ffd19a;
}

/*Botões*/

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
