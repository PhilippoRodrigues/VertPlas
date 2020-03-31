<template>
  <div class="container adiciona">
    <b-button :to="{ name: 'produtos' }">
      Voltar para produtos
    </b-button>

    <b-form-text class=" container-fluid titulo-form"
      >Adicionar produto</b-form-text
    >
    <b-form
      class="form-adiciona"
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
          alt="nome do produto"
          title="nome do produto"
          placeholder="Adicione o nome do produto"
          autofocus
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Detalhes:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="adicionar_produto.detalhes"
          required
          alt="detalhes do produto"
          title="detalhes do produto"
          placeholder="Adicione detalhes do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Valor:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="adicionar_produto.valor"
          @keyup="formatarPreco('R$')"
          type="number"
          required
          alt="valor do produto"
          title="valor do produto"
          placeholder="Adicione o valor do produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Imagem:" label-for="input-4">
        <b-form-file
          id="input-4"
          v-model="adicionar_produto.imagem"
          :state="Boolean(adicionar_produto.imagem)"
          placeholder="Selecione uma imagem"
          alt="imagem do produto"
          title="imagem do produto"
        ></b-form-file>
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
    <b-card class="mt-3" header="Dados inseridos">
      <pre class="m-0">
                {{ adicionar_produto }}
            </pre
      >
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AdicionarProduto",
  data() {
    return {
      adicionar_produto: {
        titulo: "",
        detalhes: "",
        valor: "",
        imagem: null,
        promocao: []
      },
      show: true
    };
  },
  methods: {
    ...mapActions(["adicionarProduto"]),
    onSubmit() {
      this.adicionarProduto(this.adicionar_produto);
      alert("Produto adicionado com sucesso!");
    },
    onReset(event) {
      event.preventDefault();
      this.adicionar_produto.titulo = "";
      this.adicionar_produto.detalhes = "";
      this.adicionar_produto.valor = "";
      this.adicionar_produto.imagem = "";
      this.adicionar_produto.promocao = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
.titulo-form {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 2em;
}

.form-adiciona {
  height: 100%;
  font-weight: bold;
}

.botoes {
  justify-content: center;
}

.btn-reset {
  margin-left: 1%;
}
</style>
