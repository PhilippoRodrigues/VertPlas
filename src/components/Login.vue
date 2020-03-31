<template>
  <div class="container login">
    <b-form class="form-login" @submit="onSubmit" v-if="show">
      <b-form-text class=" container-fluid titulo-form">Login</b-form-text>
      <b-form-group id="input-group-1" label="E-mail:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          required
          placeholder="Digite seu e-mail"
          alt="e-mail"
          title="e-mail"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Senha:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.senha"
          type="password"
          required
          placeholder="Digite sua senha"
          alt="senha"
          title="senha"
        ></b-form-input>
        <b-row class="botoes">
          <b-button type="submit" variant="primary" alt="entrar" title="entrar"
            >Entrar</b-button
          >
        </b-row>
        <b-row class="texto-cadastro">
          <b-form-text class="col-sm-12 link-cadastro"
            >Ainda não possui cadastro?</b-form-text
          >
          <b-form-text
            class="col-sm-12 btn-editar"
            @click="cadastro"
            alt="link para cadastro"
            title="link para cadastro"
            >Clique <b>aqui</b></b-form-text
          >
        </b-row>
      </b-form-group>

      <router-view></router-view>
    </b-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        senha: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    cadastro() {
      this.$router.push({ name: "cadastro" });
    }
  },
  computed: mapGetters(["produtoById"])
};
</script>

<style scoped>
.login {
  margin-bottom: 21%;
  margin-top: 10%;
}
.titulo-form {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 2em;
  vertical-align: middle;
}
.form-login {
  height: 100%;
  font-weight: bold;
  vertical-align: middle;
}

.botoes {
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 3%;
}

.texto-cadastro {
  text-align: center;
}

.link-cadastro {
  display: block;
}

.btn-editar {
  cursor: pointer;
}

@media (max-width: 500px) {
  .login {
    margin-bottom: 70%;
  }
}
</style>
