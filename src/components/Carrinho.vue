<template>
  <div class="container carrinho">
    <b-form-text class=" container-fluid titulo-form">Carrinho</b-form-text>

    <b-row class="sem-produto-inserido" v-if="itensAdicionados <= 0">
           {{mensagemSemProduto}}
    </b-row>

    <b-table-simple
            v-else
      class=" container-fluid tabela"
      striped
      hover
      alt="compras"
      title="compras"
    >
      <b-thead head-variant="dark">
        <b-tr>
          <b-th colspan="2">Código</b-th>
          <b-th colspan="4">Produto</b-th>
          <b-th colspan="2">Preço</b-th>
          <b-th colspan="4">Excluir</b-th>
        </b-tr>
      </b-thead>
      <b-tbody class="corpo-tabela">
        <b-tr v-for="(produto, index) in itensAdicionados" :key="produto.id">
          <b-td colspan="2">{{ index + 1 }}</b-td>
          <b-td colspan="4">{{ produto.titulo }}</b-td>
          <b-td colspan="2">{{ produto.valor }}</b-td>
          <b-td>
            <b-button
              class="btn btn-danger"
              type="button"
              @click="excluiProduto(produto.id)"
            >
              Remover
            </b-button>
          </b-td>
        </b-tr>
<!--        <b-tr>-->
<!--          <b-td></b-td>-->
<!--          <b-td></b-td>-->
<!--          <b-td></b-td>-->
<!--        </b-tr>-->

        </b-tbody>
      <b-tfoot class="total">
        <b-td colspan="2">Total:</b-td>
        <b-td colspan="4"></b-td>
        <b-td colspan= "2" class="valorTotal">{{ cartTotal }}</b-td>
        <b-td>
          <b-button colspan="4" type="button" class="btn btn-success">
            Pagamento <i class="fa fa-arrow-right"></i>
          </b-button>
        </b-td>
      </b-tfoot>
    </b-table-simple>

    <!--    <table class="table table-bordered table-hover table-responsive">-->
    <!--      <thead>-->
    <!--        <tr>-->
    <!--          <th>#</th>-->
    <!--          <th>Produto</th>-->
    <!--          <th>Preço</th>-->
    <!--          <th>Action</th>-->
    <!--        </tr>-->
    <!--      </thead>-->

    <!--      <tbody>-->
    <!--        <tr v-for="(produto, index) in itensAdicionados" :key="produto.id">-->
    <!--          <td>{{ // index + 1 }}</td>-->
    <!--          <td>{{ produto.titulo }}</td>-->
    <!--          <td>{{ // produto.valor }}</td>-->
    <!--          <td>-->
    <!--            <button-->
    <!--              class="btn btn-danger"-->
    <!--              type="button"-->
    <!--              @click="excluiProduto(produto.id)"-->
    <!--            >-->
    <!--              Remover do carrinho-->
    <!--            </button>-->
    <!--          </td>-->
    <!--        </tr>-->
    <!--        <tr>-->
    <!--          <td colspan="3">Total: {{ cartTotal }}</td>-->
    <!--          <td>-->
    <!--            <button type="button" class="btn btn-success">-->
    <!--              Pagamento <i class="fa fa-arrow-right"></i>-->
    <!--            </button>-->
    <!--          </td>-->
    <!--        </tr>-->
    <!--      </tbody>-->
    <!--    </table>-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Carrinho",
  data() {
    return {
      campos: ["Produto", "Preço/Kg", "Excluir"],
      mensagemSemProduto: "Nenhum produto foi adicionado ao carrinho",
    };
  },
  methods: mapActions(["excluiProduto"]),
  computed: {
    produtos() {
      return this.$store.state.produtosLista;
    },
    cartTotal() {
      let cart_total = 0;
      this.itensAdicionados.forEach(item => {
        cart_total += item.valor;
      });
      return cart_total;
    },
    ...mapGetters(["itensAdicionados"])
  }
};
</script>

<style scoped>
.carrinho {
  height: 75%;
}

.titulo-form {
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 2em;
  display: flex;
  justify-content: center;
}

.tabela {
  text-align: center;
  vertical-align: middle;
  margin-top: 10%;
}

  .total {
    font-weight: bold;
    font-size: 120%;
  }

</style>
