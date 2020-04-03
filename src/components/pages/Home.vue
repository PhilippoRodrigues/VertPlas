<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="1500"
      controls
      indicators
      background-color="#ababab"
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        :img-src="carouselUm"
        alt="slide 1"
        title="slide 1"
      ></b-carousel-slide>

      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=55"
        alt="slide 2"
        title="slide 2"
      >
        <h1 class="descricao-banner" style="color: black">Uma frase qualquer</h1>
      </b-carousel-slide>

      <b-carousel-slide
        :img-src="carouselUm"
        alt="slide 3"
        title="slide 3"
      ></b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            src="https://picsum.photos/1024/480/?image=55"
            alt="slide 4"
            title="slide 4"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Blank Image"
        img-blank
        img-alt="slide 5"
        img-title="slide 5"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <b-col class="col-12 banner">
      <b-img :src="banner" alt="banner" title="banner"></b-img>
    </b-col>

    <ListaDeProdutos />
    <Promocoes />
  </div>
</template>

<script>
import ListaDeProdutos from "./ListaDeProdutos";
import Promocoes from "./Promocoes";
export default {
  name: "Home",
  components: {
    ListaDeProdutos,
    Promocoes,
  },
  data() {
    return {
      banner: require("../../assets/banner-plastico.jpg"),
      carouselUm: require("../../assets/banner-green-carousel.jpg"),
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
}

/* Banner */

.banner {
  margin: 0;
  padding: 0;
}

.banner img {
  width: 100%;
}

  .descricao-banner {
    font-size: 1.5em;
    font-weight: bold;
  }
</style>
