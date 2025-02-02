<template>
  <v-row class="catalog-block">
    <v-col
      cols="12"
      sm="6"
      md="3"
      lg="3"
      v-for="(item, index) in items"
      :key="index"
      :style="$vuetify.breakpoint.xl ? ' flex: 1 0 20%; max-width: 20%;' : ''"
    >
      <nuxt-link :to="`/product-category/${item.url}/`">
        <v-card
          @mouseenter="hoverEvent(index)" 
          @mouseleave="hoverEvent(null)"
          :class="hoverCard == index ? 'shadow-primary' : ''"
        > 
          <div class="card-content">
            <img v-if="item.image" :src="item.image.url" :alt="item.image.alt" :title="item.image.title" loading="lazy"/>
            <img v-else src="/img/no_photo.svg" alt="Нет фотографии" title="Нет фотографии" loading="lazy"/>
            <p class="card-title catalog-card__title">{{ item.name }}</p>
          </div>
          <v-expand-transition>
              <v-btn color="primary" height="43px" class="text-none font-weight-bold" absolute block v-show="hoverCard == index">
                Перейти в каталог
              </v-btn>
          </v-expand-transition>
        </v-card>

      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
  created() {
  },
  data() {
    return {
      hoverCard: null
    };
  },
  methods: {
    hoverEvent(index) {
      this.hoverCard = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  height: 100%;
}
.v-card .card-content{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.catalog-block img {
    border: 0.5px solid rgba(168, 169, 173, 0.3);
    border-radius: 4px;
    height: 250px;
    width: 100%;
    object-fit: cover;
}
.catalog-card__title {
  padding: 15px 20px;
  margin: 0;
}
.catalog-block .v-card {
  transition: all 0.5s;
  box-shadow: unset !important;
}
.catalog-block .shadow-primary {
  box-shadow: $card-shadow !important;
  position: relative;
  z-index: 10;
}
.catalog-block a,
.catalog-block .v-card {
  height: 100%;
}
@include xl {
  .catalog-block .v-card-title {
    font-size: 24px;
  }
}
</style>