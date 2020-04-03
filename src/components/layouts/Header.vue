<template>
  <div>
    <b-navbar toggleable="lg" class="navbar">
      <b-navbar-brand href="#" class="brand-nav" alt="verplas" title="vertplas">
        <router-link class="brand-nav-text" :to="{ name: 'home' }"
          >VertPlas
          <b-img
            class="img-brand"
            :src="imageBrand"
            alt="verplas"
            title="vertplas"
          ></b-img>
        </router-link>
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
            >
            </b-form-input>

            <b-icon-search
              size="sm"
              class="my-2 my-sm-0 input-icon-nav"
              alt="search"
              title="search"
              type="submit"
              >Search
            </b-icon-search>

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
              <div>
                <div class="badge" v-if="produtosCarrinho > 0">
                  {{ produtosCarrinho }}
                </div>
              </div>
            </router-link>
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
      imageCart: require("../../assets/icons/iconCart.svg"),
      imageLogin: require("../../assets/icons/login.svg"),
      imageBrand: require("../../assets/vp_preto.svg")
    };
  },
  methods: {
    mostrarCarrinho() {
      this.$router.push({ name: "cart" });
    }
  },
  computed: {
    produtosCarrinho() {
      return this.$store.getters.produtosCarrinho;
    }
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
  font-size: 2.5rem;
  font-weight: bold;
  vertical-align: middle;
  margin-top: 0.5em;
}

.brand-nav .brand-nav-text {
  color: #384a47;
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
  font-weight: bold;
}

.nav-items a:hover {
  color: #83c5b8;
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

.imagem-carrinho,
.imagem-login {
  width: 7rem;
  padding-right: 60%;
}

.badge {
  margin-left: -5%;
  margin-top: 2%;
  border-radius: 100%;
  font-size: 90%;
  display: flex;
  position: absolute;
  background-color: lightgray;
  color: black;
}
/* Badge */

@media (max-width: 500px) {
  .brand-nav {
    text-align: center;
  }

  .navbar-nav {
    width: 100% !important;
  }

  .form-inline .form-control {
    margin-top: 15%;
    width: 90%;
  }

  .input-icon-nav {
    margin-top: auto !important;
    margin-bottom: 0 !important;
  }
  .imagem-carrinho,
  .imagem-login {
    width: 4rem;
    display: block;
    flex-flow: column;
    padding-right: 0;
    margin-bottom: 55%;
  }

  .imagem-carrinho {
    margin-right: 4.5rem;
  }

  .imagem-login {
    margin-left: 30%;
    margin-bottom: 110%;
  }

  .badge {
    margin-left: -17%;
    margin-top: 10%;
  }
  .form-inline {
    height: auto;
    justify-content: center;
    margin-top: 0;
  }

  .nav-items {
    display: inline;
    width: 100%;
    margin-top: 5%;
    text-align: center;
  }
}
</style>
