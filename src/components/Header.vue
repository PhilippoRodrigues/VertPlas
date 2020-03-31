<template>
  <div>
    <b-navbar toggleable="lg" class="navbar">
      <b-navbar-brand href="#" class="brand-nav" alt="verplas" title="vertplas"
        >VertPlas<b-img
          class="img-brand"
          :src="imageBrand"
          alt="verplas"
          title="vertplas"
        ></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse class="my-sm-auto" id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto nav">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2 input-nav"
              placeholder="Search"
              alt="search"
              title="search"
            ></b-form-input>

            <b-icon
              size="sm"
              icon="search"
              class="my-2 my-sm-0 input-icon-nav"
              alt="search"
              title="search"
              type="submit"
              >Search
            </b-icon>

            <b-navbar-nav class="nav-items row">
              <b-nav-item class="item1" href="#" alt="home" title="home">
                <router-link :to="{ name: 'home' }">
                  Home</router-link
                ></b-nav-item
              >

              <b-nav-item class="item1" href="#" alt="sobre" title="sobre">
                <router-link :to="{ name: 'sobre' }">
                  Sobre</router-link
                ></b-nav-item
              >

              <b-nav-item
                class="item1"
                href="#"
                alt="promoções"
                title="promoções"
              >
                <router-link :to="{ name: 'promocoes' }">
                  Promoções</router-link
                ></b-nav-item
              >

              <b-nav-item
                class="item1"
                href="#"
                alt="produtos"
                title="produtos"
              >
                <router-link :to="{ name: 'produtos' }"
                  >Produtos
                </router-link></b-nav-item
              >

              <b-nav-item class="item1" href="#" alt="contato" title="contato"
                ><router-link :to="{ name: 'contato' }">
                  Contato
                </router-link></b-nav-item
              >
            </b-navbar-nav>
          </b-nav-form>

          <b-nav-item class="row row-cols-sm-6 icons-nav">
            <router-link :to="{ name: 'cart' }" class="row row-cols-sm-12">
              <b-img
                :src="imageCart"
                size="sm"
                class="imagem-carrinho"
                alt="carrinho"
                title="carrinho"
                @click="mostrarCarrinho"
              ></b-img>
              <b-badge class="badge" v-if="cartLength > 0">
                {{ cartLength }}</b-badge>
            </router-link
            >
            <router-link :to="{ name: 'login' }" class="row row-cols-sm-12">
              <b-img
                :src="imageLogin"
                size="sm"
                class="imagem-login "
                alt="login"
                title="login"
              ></b-img
            ></router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      carrinho: [],
      imageCart: require("../assets/icons/iconCart.svg"),
      imageLogin: require("../assets/icons/login.svg"),
      imageBrand: require("../assets/vp_preto.svg")
    };
  },
  methods: {
    mostrarCarrinho() {
      this.$router.push({ name: "cart" });
    },
  },
  computed: {
    cartLength() {
      return this.$store.getters.cartLength
    },

  }
};
</script>

<style scoped>
.nav {
  width: 200%;
  align-items: center;
  justify-content: center;
  vertical-align: center;
}

.navbar {
  background-color: #b0e9df;
  display: flex;
  justify-content: space-between;
  align-items: normal;
  padding-left: 8%;
  height: 8em;
}

.navbar-nav,
.nav-link,
.navbar-toggler {
  background-color: #b0e9df;
  display: flex;
  justify-content: center;
  text-decoration: none;
}

.brand-nav {
  font-size: 3rem;
  font-weight: bold;
  /*margin-left: 2%;*/
  vertical-align: middle;
  margin-top: 0.4em;
}

.img-brand {
  width: 20%;
}

#nav-collapse {
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  align-self: center;
  z-index: 50;
  display: flex;
}

.form-inline .form-control {
  display: flex;
  width: 74%;
  justify-content: center;
}

.ml-auto {
  margin-left: 0 !important;
}

.nav-items {
  font-size: 1.5rem;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  align-items: flex-end;
  align-self: center;
  display: flex;
  margin-left: 0.5%;
}

.nav-items a:hover {
  color: cadetblue;
}

a:visited,
a:link {
  text-decoration: none;
  color: #498d81;
}

.input-icon-nav {
  -webkit-appearance: none;
  width: 2rem;
  height: 2rem;
  text-decoration: none;
  color: #2c3e50;
}

.icons-nav {
  display: flex;
  justify-content: space-evenly;
}

.icons-nav > img {
  align-items: center;
}

.imagem-carrinho,
.imagem-login {
  width: 7rem;
  padding-right: 60%;
}

.imagem-carrinho {
  margin-top: 0;
  display: inline;
}

.badge {
  margin-left: 40%;
  margin-bottom: 10%;
  border-radius: 100%;
  font-size: 90%;
  display: flex;
  background-color: lightgray;
  color: black;
  justify-content: flex-end;
}
</style>
