import Vuex from "vuex";
import Vue from "vue";
import produtos from "./modules/produtos";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        produtos,
    }
});
