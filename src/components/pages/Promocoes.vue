<template>
  <div class="promocoes">
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

/* Body */

.promocoes {
  background-color: #F7CCBB;
}

.form-text {
  margin-top: 0;
}

/* Título */

.titulo-form {
  text-align: center;
  padding-top: 5%;
  margin-bottom: 5%;
  font-size: 3em;
  font-weight: bold;
  color: #004F5A !important;
  background-color: #F7CCBB;
}

/*Cards*/

.cards-home {
  justify-content: center;
  padding-top: 5%;
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

.cards {
  background-color: #F7CCBB;
  color: #DE9F8C;
  padding-bottom: 5%;
}

.preco-card-antigo {
  text-decoration: line-through;
}

.preco-card {
  text-align: center;
  vertical-align: bottom;
  font-weight: bold;
  color: #E97142;
}

.card-produto img {
  height: 50%;
}

.card-produto {
  text-align: center;
  width: 21%;
  padding: 0;
  margin: 5%;
  border-color: black;
}

/*Botões*/

.botoes {
  justify-content: space-around;
}

.btn-detalhe:hover,
.btn-comprar:hover {
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
    text-align: center;
    margin-left: 20%;
  }

  .botoes {
    width: auto;
    margin-bottom: 4%;
  }
}
</style>
