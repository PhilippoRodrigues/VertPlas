<template>
  <div class="container contato">
    <b-form-text class=" container-fluid titulo-form">Contato</b-form-text>

    <b-form
      class="form-contato"
      @submit="onSubmit"
      @reset="onReset"
      v-if="show"
    >
      <b-form-group
        id="input-group-1"
        label="Selecione uma opção de contato:"
        label-for="input-1"
      >
        <b-form-select
          id="input-1"
          v-model="form.opcao"
          :options="opcoes"
          required
          alt="opções"
          title="opções"
          autofocus
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.nome"
          required
          placeholder="Digite seu nome completo"
          alt="nome"
          title="nome"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Email:" label-for="input-1">
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

      <b-form-group id="input-group-4" label="Escreva:" label-for="input-4">
        <b-form-textarea
          class="form-textarea"
          id="input-4"
          v-model="form.texto"
          type="text"
          rows="10"
          required
          alt="textarea"
          title="textarea"
        ></b-form-textarea>
      </b-form-group>

      <b-row class="botoes">
        <b-button
          type="submit"
          variant="primary"
          alt="adicionar"
          title="adicionar"
          >Adicionar</b-button
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
        opcao: null,
        nome: "",
        email: "",
        texto: ""
      },
      opcoes: [
        { text: "Selecione", value: null },
        "Sugestão",
        "Reclamação",
        "Parceria"
      ],
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
.contato {
  margin-bottom: 20%;
}
.titulo-form {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 2em;
}
.form-contato {
  height: 100%;
  font-weight: bold;
}

.botoes {
  justify-content: center;
  margin-top: 5%;
}

.btn-reset {
  margin-left: 1%;
}

@media (max-width: 500px) {
  .contato {
    margin-bottom: 70%;
  }
}
</style>
