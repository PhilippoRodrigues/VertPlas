import VueRouter from "vue-router";
import Home from "./components/Home";
import Carrinho from "./components/Carrinho";
import Produtos from "./components/Produtos";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Promocoes from "./components/Promocoes";
import AdicionarProduto from "./components/AdicionarProduto";
import DetalheProduto from "./components/DetalheProduto";
import EditarProduto from "./components/EditarProduto";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/sobre",
      name: "sobre",
      component: Sobre
    },
    {
      path: "/promocoes",
      name: "promocoes",
      component: Promocoes
    },
    {
      path: "/cart",
      name: "cart",
      component: Carrinho
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: Produtos
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      children: [
        {
          path: "cadastro",
          name: "cadastro",
          component: Cadastro
        }
      ]
    },
    {
      path: '/produto/:id',
      name: 'detalheProduto',
      component: DetalheProduto,
      children: [
        {
          path: "edit",
          name: "editaProduto",
          component: EditarProduto
        }
      ]
    },
    {
      path: "/adicionar",
      name: "adicionarProduto",
      component: AdicionarProduto
    },
  ]
});
