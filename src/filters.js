import Vue from 'vue';

Vue.filter('formatarPreco', function (valor, simbolo) {
    if (!parseInt(valor)) {
        return "";
    }
    // if (valor !== '') {
        let precoFormatado = (valor.toFixed(2)).replace('.', ',');
        return simbolo + " " + precoFormatado + "/kg";
    // }
});
