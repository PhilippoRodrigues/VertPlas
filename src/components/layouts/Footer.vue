<template>
  <div class="footer">
    <b-row class="col-12 copyright-footer">
      VertPlas Copyright© 2020
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background-color: #b0e9df;
  width: 100%;
  height: 12%;
  display: flex;
}

.copyright-footer {
  justify-content: center;
  margin-top: 5%;
  padding: 0;
  width: 100%;
  color: #52706b !important;
}

@media (max-width: 500px) {
  .footer {
    height: 20%;
  }
  .copyright-footer {
    margin-top: 20%;
  }
}
</style>
