<template>
  <div class="container carrinho">
    <b-form-text class="container-fluid titulo-form">Carrinho</b-form-text>

    <b-alert class="sem-produto-inserido" variant="danger" v-if="itensAdicionados <= 0"
             :show=mensagemSemProduto>
      {{mensagemSemProduto}}

    </b-alert>

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
          <b-td colspan="2" v-if="produto.promocao === 'Não'">{{ produto.valor.replace(".", ",") | currencyMask("R$")
          }}</b-td>
          <b-td colspan="2" v-else>{{ produto.valor_promocao.replace(".", ",") | currencyMask("R$")
            }}</b-td>
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
       </b-tbody>
      <b-tfoot class="total">
        <b-td colspan="2">Total:</b-td>
        <b-td colspan="4"></b-td>
        <b-td colspan= "2" class="valorTotal">{{ total | currencyMask("R$") }}</b-td>
        <b-td>
          <b-button colspan="4" type="button" class="btn btn-success">
            Pagamento <i class="fa fa-arrow-right"></i>
          </b-button>
        </b-td>
      </b-tfoot>
    </b-table-simple>
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
    total() {
      let cart_total = 0.0;
      let cart_total_promocao = 0.0;
      let total = 0.0;
      this.itensAdicionados.forEach(prod => {
        if(prod.promocao === "Não") {
          cart_total += parseFloat(prod.valor);
        } else {
          cart_total_promocao += parseFloat(prod.valor_promocao);
        }
        total = (parseFloat(cart_total) + parseFloat(cart_total_promocao));
      });
      return total.toFixed(2).replace(".", ",");
    },
    ...mapGetters(["itensAdicionados"])
  },
  filters: {
    currencyMask(valor, simbolo) {
      if (!parseFloat(valor)) {
        return "";
      }
      return simbolo + " " + valor;
    }
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
  font-size: 3em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  color: #52706b !important;
}

.sem-produto-inserido {
  display: block;
  text-align: center;
  font-size: 180%;
  height: 8%;
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

  /* Media */

  @media (max-width: 500px) {
    .sem-produto-inserido {
      height: auto;
    }
  }

</style>
