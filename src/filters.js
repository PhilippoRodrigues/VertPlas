import Vue from 'vue';

Vue.filter('formatarPreco', function (valor, simbolo) {
    if (!parseFloat(valor)) {
        return "";
    }
        let precoFormatado = (valor.toFixed(2)).replace('.', ',');
        return simbolo + " " + precoFormatado + "/kg";
});

Vue.filter('formatarPrecoCarrinho', function (valor, simbolo) {
    if (!parseFloat(valor)) {
        return "";
    }

    let precoFormatadoCarrinho = (valor.toFixed(2)).replace('.', ',');
    return simbolo + " " + precoFormatadoCarrinho;

});
