<template>
  <div class="container cadastro">
    <b-form-text class=" container-fluid titulo-form">Cadastro</b-form-text>

    <b-form
      class="form-cadastro"
      @submit="onSubmit"
      @reset="onReset"
      v-if="show"
    >
      <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.nome"
          required
          placeholder="Digite seu nome"
          alt="nome"
          title="nome"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Sobrenome:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.sobrenome"
          type="text"
          required
          placeholder="Digite seu sobrenome"
          alt="sobrenome"
          title="sobrenome"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="E-mail:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Digite seu email"
          alt="e-mail"
          title="e-mail"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Celular:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.celular"
          type="number"
          required
          placeholder="Digite seu celular com o DDD"
          alt="celular"
          title="celular"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="CNPJ:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.cnpj"
          type="number"
          required
          placeholder="Digite o CNPJ da empresa"
          alt="CNPJ"
          title="CNPJ"
        ></b-form-input>
      </b-form-group>

      <b-row class="botoes">
        <b-button
          type="submit"
          alt="cadastrar"
          title="cadastrar"
          >Cadastrar</b-button
        >
        <b-button
          type="reset"
          variant="danger"
          class="btn-reset"
          alt="apagar"
          title="apagar"
          >Apagar as informações</b-button
        >
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nome: "",
        sobrenome: "",
        email: "",
        celular: "",
        cnpj: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
.cadastro {
  margin-bottom: 20%;
}

.titulo-form {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 3em;
  font-weight: bold;
  color: #004F5A !important;
}

.form-cadastro {
  height: 100%;
  font-weight: bold;
}

.botoes {
  justify-content: center;
  margin-top: 5%;
}

.btn-secondary {
  text-decoration: none;
  background-color: #b0e9df;
  color: #498d81;
  font-weight: bold;
  box-shadow: none;
}

.btn-secondary:hover {
  background-color: #004F5A;
}

.btn-reset {
  margin-left: 1%;
}

@media (max-width: 500px) {
  .cadastro {
    margin-top: 50%;
  }
}
</style>
