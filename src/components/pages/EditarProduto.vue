<template>
  <div class="container-fluid editar">
    <b-form-text class="titulo-form">Edição do produto</b-form-text>

    <b-row class="container-fluid id-produto">Id do produto: {{ id }}</b-row>

    <b-form
      class="form-edita"
      @submit.prevent="onSubmit"
      @reset="onReset"
      v-if="show"
    >
      <b-form-group
        id="input-group-1"
        label="Nome de produto:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="adicionar_produto.titulo"
          type="text"
          required
          placeholder="Adicione o nome do produto"
          alt="nome do produto"
          title="nome do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Detalhes:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="adicionar_produto.detalhes"
          required
          placeholder="Adicione detalhes do produto"
          alt="detalhes do produto"
          title="detalhes do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Valor:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="adicionar_produto.valor"
          type="number"
          required
          placeholder="Adicione o valor do produto"
          alt="preço do produto"
          title="preço do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Promoção:" label-for="input-5">
        <b-form-radio
          v-model="adicionar_produto.promocao"
          name="promocao"
          value="Sim"
          alt="sim"
          title="sim"
          >Sim
        </b-form-radio>
        <b-form-radio
          v-model="adicionar_produto.promocao"
          name="promocao"
          value="Não"
          alt="não"
          title="não"
          >Não
        </b-form-radio>
      </b-form-group>

      <b-row class="botoes">
        <b-button type="submit" variant="primary" alt="editar" title="editar"
          >Editar</b-button
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EditarProduto",
  data() {
    return {
      id: this.$route.params.id,
      adicionar_produto: {
        titulo: "",
        detalhes: "",
        valor: "",
        promocao: []
      },
      show: true
    };
  },
  methods: {
    ...mapActions(["atualizaProduto"]),
    onSubmit() {
      this.atualizaProduto(this.adicionar_produto);
      alert("Produto editado com sucesso!");
    },
    onReset(event) {
      event.preventDefault();
      this.adicionar_produto.titulo = "";
      this.adicionar_produto.detalhes = "";
      this.adicionar_produto.valor = "";
      this.adicionar_produto.imagem = "";
      this.adicionar_produto.promocao = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  computed: mapGetters(["produtoById"]),
  created() {
    this.adicionar_produto = this.produtoById(this.id);
  }
};
</script>

<style scoped>

  .editar {
    margin-top: 10%;
  }

.titulo-form {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 3em;
  font-weight: bold;
  color: #004F5A !important;
}

.id-produto {
  font-weight: bold;
  margin-bottom: 2%;
  font-size: 1.5em;
}
.form-edita {
  height: 100%;
  font-weight: bold;
}

.botoes {
  justify-content: center;
  /*margin-bottom: 5%;*/
}

.btn-reset {
  margin-left: 1%;
}

/* Responsividade */

@media (max-width: 500px) {

  .titulo-form {
    margin-top: 50%;
  }
}
</style>
