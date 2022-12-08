<template>
  <div class="collage-wrap">
    <v-card class="collage-card div1 pa-4 pa-md-7" outlined>
      <p>
        <span class="primary-text">Удорожание до&nbsp;5%</span> от первоначальной стоимости
      </p>
    </v-card>
    <v-card class="collage-card div2 pa-4 pa-md-7" outlined>
      <p>
        <span class="primary-text">Первоначальный </span> 
        взнос
        <span class="primary-text"> от&nbsp;10%</span>
      </p>
    </v-card>
    <v-card class="collage-card div3" outlined>
      <v-img src="/img/collage/excavator.jpg" alt="" />
    </v-card>
    <v-card class="collage-card div4 pa-4 pa-md-7" outlined>
      <p>
        <span class="primary-text">Срок </span>
        лизинга
        <span class="primary-text"> от&nbsp;1&nbsp;до&nbsp;5&nbsp;лет</span>
      </p>
    </v-card>
    <v-card class="collage-card div5 pa-4 pa-md-7" outlined>
      <p>
        Возможность 
        <span class="primary-text"> досрочного погашения</span>
      </p>
    </v-card>
    <v-card class="collage-card div6" outlined>
      <v-img src="/img/collage/frontal.png" alt="" />
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
    grid-area: 1/7/4/13;
  }

  .div2 {
    grid-area: 3/1/6/7;
  }

  .div3 {
    grid-area: 4/7/8/13;
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

  @include sm {
    .collage-card p {
      font-size: 14px;
    }
    .v-image {
      height: 150px;
    } 
  }

  @include xs {
    .v-image {
      height: 130px;
    }
    .collage-wrap {
      grid-template-rows: repeat(6, 1fr);
    }

    .div1 {
      grid-area: 6/1/7/13;
    }

    .div2 {
      grid-area: 1/1/2/13;
    }

    .div3 {
      grid-area: 2/1/4/7;
    }

    .div4 {
      grid-area: 2/7/4/13;
    }

    .div5 {
      grid-area: 4/7/6/1;
    }

    .div6 {
      grid-area: 4/7/6/13;
    }
  }
</style>