<template>
  <div class="collage-wrap">
    <v-card class="collage-card div1 pa-5 pa-md-7" outlined>
      <p>
        <span class="third-text collage-bold-text">03</span><br>
        <span>место в рейтинге дилеров Shacman в рф</span>
      </p>
    </v-card>
    <v-card class="collage-card div2 pa-5 pa-md-7" outlined>
      <p>
        <span class="third-text collage-bold-text">28</span><br>
        <span>филиалов в крупных городах</span>
      </p>
    </v-card>
    <v-card class="collage-card div3" outlined>
      <v-img src="/img/about/about-komtrans-1.jpg" alt="" />
    </v-card>
    <v-card class="collage-card div4 pa-5 pa-md-7" outlined>
      <p>
        <span class="third-text collage-bold-text">400</span><br>
        <span>единиц техники в наличии на складе</span>
      </p>
    </v-card>
    <v-card class="collage-card div5 pa-5 pa-md-7" outlined>
      <p>
        <span class="third-text collage-bold-text">1000</span><br>
        <span>единиц техники реализуется в год</span>
      </p>
    </v-card>
    <v-card class="collage-card div6" outlined>
      <v-img src="/img/about/about-komtrans-2.jpg" alt="" />
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/collage.scss';

  .collage-wrap {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .div1 {
    grid-area: 3/1/6/7;
  }

  .div2 {
    grid-area: 5/7/8/13;
  }

  .div3 {
    grid-area: 1/7/5/13;
  }

  .div4 {
    grid-area: 6/1/9/7;
  }

  .div5 {
    grid-area: 8/7/11/13;
  }

  .div6 {
    grid-area: 9/7/13/1;
  }

  .v-image {
    width: 100%;
    height: 210px;
    min-height: 100%;
  }
  @include lg {
    .v-image {
      height: 160px;
    }
  }
  @include md {
    .collage-wrap {
        grid-template-rows: repeat(8, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }

    .div1 {
      grid-area: 1/1/5/5;
    }

    .div2 {
      grid-area: 9/5/5/9;
    }

    .div3 {
      grid-area: 5/1/9/5;
    }

    .div4 {
      grid-area: 1/5/5/9;
    }

    .div5 {
      grid-area: 5/13/9/9;
    }

    .div6 {
      grid-area: 1/9/5/13;
    }
  }
  @include sm {
    .v-image {
      height: 150px;
    } 
  }
  @include xs {
    .v-image {
      height: 130px;
    }

    .collage-wrap {
      grid-template-rows: repeat(9, 1fr);
    }

    .collage-card p {
      font-size: 14px;
    }

    .div1 {
      grid-area: 1/1/4/7;
    }

    .div2 {
      grid-area: 7/7/10/1;
    }

    .div3 {
      grid-area: 4/1/7/7;
    }

    .div4 {
      grid-area: 1/7/4/13;
    }

    .div5 {
      grid-area: 7/7/10/13;
    }

    .div6 {
      grid-area: 4/7/7/13;
    }
  }
</style>