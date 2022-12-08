<template>
  <div class="collage-wrap">
    <v-card class="collage-card div1 pa-5 pa-md-7" outlined>
      <p>
        Подбор спецтехники
        <span class="primary-text"> под&nbsp;вашу задачу</span>
      </p>
    </v-card>
    <v-card class="collage-card div2 pa-5 pa-md-7" outlined>
      <p>
        гарантия&nbsp;— 
        <span class="primary-text">24&nbsp;месяца или&nbsp;3000&nbsp;<span style="white-space: nowrap;">м/ч</span></span>
      </p>
    </v-card>
    <v-card class="collage-card div3" outlined>
      <v-img src="/img/collage/cars.png" alt="" />
    </v-card>
    <v-card class="collage-card div4 pa-5 pa-md-7" outlined>
      <p>
        Поставка
        <span class="primary-text"> точно в&nbsp;срок</span>
         и&nbsp;в&nbsp;полной
        <span class="primary-text"> готовности к&nbsp;работе</span>
      </p>
    </v-card>
    <v-card class="collage-card div5 pa-5 pa-md-7" outlined>
      <p>
        <span class="primary-text">Выездной </span>
        сервис, ремонт и&nbsp;продажа запчастей
      </p>
    </v-card>
    <v-card class="collage-card div6" outlined>
      <v-img src="/img/collage/service.png" alt="" />
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
      grid-template-rows: repeat(7, 1fr);
    }

    .collage-card p {
      font-size: 14px;
    }

    .div1 {
      grid-area: 1/1/3/7;
    }

    .div2 {
      grid-area: 6/7/8/1;
    }

    .div3 {
      grid-area: 3/1/6/7;
    }

    .div4 {
      grid-area: 1/7/3/13;
    }

    .div5 {
      grid-area: 6/7/8/13;
    }

    .div6 {
      grid-area: 3/7/6/13;
    }
  }
</style>