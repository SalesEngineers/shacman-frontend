<template>
  <div class="collage-wrap">
    <v-card class="collage-card div1 pa-5 pa-md-7" outlined>
      <p>
        <span class="primary-text">особые условия</span> для постоянных клиентов
      </p>
    </v-card>
    <v-card class="collage-card div2 pa-5 pa-md-7" outlined>
      <p>
        <span class="primary-text">доставка</span> по&nbsp;всей россии или
        <span class="primary-text">самовывоз</span> со&nbsp;склада
      </p>
    </v-card>
    <v-card class="collage-card div3" outlined>
      <v-img src="/img/collage/spare_parts.png" alt="" />
    </v-card>
    <v-card class="collage-card div4" outlined>
      <v-img src="/img/collage/liquids.png" alt="" />
    </v-card>
    <v-card class="collage-card div5 pa-5 pa-md-7" outlined>
      <p>
        всегда <span class="primary-text">в&nbsp;наличии</span> в
        <span class="primary-text">широком ассортименте</span>
      </p>
    </v-card>
    <v-card class="collage-card div6" outlined>
      <v-img src="/img/collage/sklad.jpg" alt="" />
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
    grid-template-rows: repeat(16, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  
  .v-image {
    width: 100%;
    height: 10rem;
    min-height: 100%;
  }
  
  .div1 {
    grid-area: 1/7/5/13;
  }

  .div2 {
    grid-area: 3/1/7/7;
  }

  .div3 {
    grid-area: 5/7/10/13;
  }

  .div4 {
    grid-area: 7/1/12/7;
  }

  .div5 {
    grid-area: 10/7/14/13;
  }

  .div6 {
    grid-area: 12/7/17/1;
  }

  @include xl {
    .div6 {
      display: none;
    }

    .collage-wrap {
      grid-template-rows: repeat(13, 1fr);
    }
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
      grid-area: 5/1/9/5;
    }

    .div2 {
      grid-area: 1/1/5/5;
    }

    .div3 {
      grid-area: 9/5/5/9;
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
      grid-area: 1/7/4/13;
    }

    .div3 {
      grid-area: 4/1/7/7;
    }

    .div4 {
      grid-area: 4/7/7/13;
    }

    .div5 {
      grid-area: 7/7/10/1;
    }

    .div6 {
      grid-area: 7/7/10/13;
    }
  }
</style>