import axios from "axios";

const state = {
  adicionados: [],
  produtos: [],
  produtosLista: null
};

const getters = {
  listaProdutos: state => state.produtos,
  itensAdicionados: state => state.adicionados,
  produtoById: state => id => state.produtos.filter(prod => prod.id === id)[0],
  cartLength() {
    return state.adicionados.length;
  }
};

const actions = {
  fetchProdutos({ commit }) {
    commit("setProdutos");
  },
  getProdutos({ commit }) {
    axios.get("json/produtos.json").then(response => {
      commit("getProduto", response.data.produtos);
    });
  },
  adicionarProduto({ commit }, adicionar_produto) {
    let novo_id = 1;
    if (state.produtos.length !== 0) {
      const novo_index = state.produtos[state.produtos.length - 1];
      novo_id = novo_index.id + 1;
    }
    const response = {
      userId: 1,
      id: novo_id,
      titulo: adicionar_produto.titulo,
      detalhes: adicionar_produto.detalhes,
      valor: adicionar_produto.valor,
      imagem: adicionar_produto.imagem,
      promocao: adicionar_produto.promocao,
      completed: false
    };
    commit("novoProduto", response);
  },
  excluiProduto({ commit }, id) {
    commit("excluiProduto", id);
  },
  atualizaProduto({ commit }, atualizaProd) {
    commit("atualizaProduto", atualizaProd);
  },
  addToCart({ commit }, id) {
    commit("ADD_TO_CART", id);
  }
};

const mutations = {
  setProdutos: state => state.produtos,
  getProduto: (state, produto) => (state.produtos = produto),
  novoProduto: (state, produto) => state.produtos.push(produto),
  excluiProduto: (state, id) => {
    state.produtos = state.produtos.filter(prod => prod.id !== id);
    state.adicionados = state.adicionados.filter(prod => prod.id !== id);
  },
  atualizaProduto: (state, atualizaProd) => {
    const index = state.produtos.findIndex(prod => prod.id === atualizaProd.id);
    if (index !== -1) {
      state.produtos.splice(index, 1, atualizaProd);
    }
  },
  ADD_TO_CART(state, id) {
    state.adicionados.push(id);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
