<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      indicators
      background-color="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        :img-src="carouselUm"
        alt="slide 1"
        title="slide 1"
      ></b-carousel-slide>

      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=55"
        alt="slide 2"
        title="slide 2"
      >
        <h1>Uma frase qualquer</h1>
      </b-carousel-slide>

      <b-carousel-slide
        :img-src="carouselUm"
        alt="slide 3"
        title="slide 3"
      ></b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            src="https://picsum.photos/1024/480/?image=55"
            alt="slide 4"
            title="slide 4"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Blank Image"
        img-blank
        img-alt="slide 5"
        img-title="slide 5"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <b-col class="col-12 banner">
      <b-img :src="banner" alt="banner" title="banner"></b-img>
    </b-col>

    <b-row v-if="exibeProduto" class="cards-home">
      <h1>Produtos</h1>
    </b-row>

    <b-row class="container-fluid cards">
      <b-card
        v-for="(produto, index) in listaProdutos"
        :key="index"
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
            alt="comprar"
            title="comprar"
            @click="addToCart(produto)"
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
  name: "Home",
  props: {
    productId: { default: null,}
  },
  data() {
    return {
      exibeProduto: true,
      banner: require("../assets/banner-plastico.jpg"),
      carouselUm: require("../assets/sale.jpg"),
      slide: 0,
      sliding: null
    };
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id)
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    // adicionarAoCarrinho: function(produto) {
    //   return this.carrinho.push(produto.id);
    // },

    // mostrarCarrinho() {
    //   this.$router.push({ name: "cart" });
    // },
    quantidadeNoCarrinhoPorProduto: function(produto) {
      return this.carrinho.filter(elem => elem === produto.id).length;
    },
    ...mapActions(["getProdutos", "addToCart"])
  },
  computed: {
    ...mapGetters(["listaProdutos"]),

    // quantidadeNoCarrinho: function() {
    //   return this.carrinho.length;
    // },
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

/* Banner */

.banner {
  margin: 0;
  padding: 0;
}

.banner img {
  width: 100%;
}

/*Cards*/

.cards-home {
  justify-content: center;
  padding: 3% 0 0;
}

.cards {
  justify-content: space-between;
  display: flex;
  /*flex-wrap: wrap;*/
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
  max-width: 20%;
  padding: 0;
  margin: 5%;
}

.card-produto-promocao {
  background-color: orange;
}

/* Botões */

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
  margin: 0;
}

a:visited:hover,
a:link:hover {
  background-color: yellow;
}

@media (max-width: 500px) {
  .cards {
    display: flex;
    justify-content: center;
  }
  .card-produto {
    max-width: 70%;
    margin: auto;
  }

  .botoes {
    width: auto;
    margin-bottom: 4%;
  }
}
</style>
