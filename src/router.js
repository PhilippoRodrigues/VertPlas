import VueRouter from "vue-router";
import Home from "./components/pages/Home";
import Carrinho from "./components/pages/Carrinho";
import Produtos from "./components/pages/Produtos";
import Sobre from "./components/pages/Sobre";
import Contato from "./components/pages/Contato";
import Promocoes from "./components/pages/Promocoes";
import AdicionarProduto from "./components/pages/AdicionarProduto";
import DetalheProduto from "./components/pages/DetalheProduto";
import EditarProduto from "./components/pages/EditarProduto";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";

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
