<template>
  <div class="container sobre">
    <b-form-text class=" container-fluid titulo-form"
      >Sobre a VertPlas</b-form-text>

    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 100%; border: none">
        <b-row no-gutters>

          <b-col md="6">
            <b-card-body title="Sobre a VertPlas">
              <b-card-text>
                O site VertPlas é um projeto acadêmico fictício, que tem como objetivo proporcionar
                a venda de insumos eco-friendly para empresas produtoras
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="6">
            <b-card-img src="https://i.pinimg.com/736x/bb/b0/0d/bbb00d2349fe2d8c3b227c0286851c6a.jpg" class="rounded-0"></b-card-img>
          </b-col>
        </b-row>
      </b-card>
  </div>
  </div>
</template>

<script>
export default {
  name: "Sobre"
};
</script>

<style scoped>
    .sobre {
        height: 75%;
    }
    .titulo-form {
      text-align: center;
      margin-top: 5%;
      margin-bottom: 5%;
      font-size: 3em;
      font-weight: bold;
      color: #52706b !important;
    }
</style>
