<template>
  <v-row class="catalog-block">
    <v-col
      cols="12"
      sm="6"
      md="3"
      lg="3"
      v-for="(item, index) in items"
      :key="index"
    >
      <nuxt-link :to="`../${item.categories[0].url}/${item.url}/`">
        <v-card
          @mouseenter="hoverEvent(index)" 
          @mouseleave="hoverEvent(null)"
          :class="hoverCard == index ? 'shadow-primary' : ''"
        >
          <div class="card-content">
            <img v-if="item.images[0]" :src="item.images[0].url" :alt="item.images[0].alt" :title="item.images[0].title" loading="lazy"/>
            <img v-else src="/img/no_photo.svg" alt="Нет фотографии" title="Нет фотографии" loading="lazy"/>
            <div class="card-inner-content">
              <p class="card-title catalog-card__title">{{ item.name }}</p>
              <div class="catalog-card__characteristics" v-if="item.characteristics.length">
                <p v-for="(item, index) in item.characteristics" :key="index">
                  <span>
                    {{ item.name }}
                  </span>
                  <span>
                    {{ item.value }}
                  </span>
                </p>
              </div>
            </div>
          </div>
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
.v-card .card-inner-content {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.catalog-block img {
    border: 0.5px solid rgba(168, 169, 173, 0.3);
    border-radius: 4px;
    height: 250px;
    width: 100%;
    object-fit: cover;
    flex-shrink: 0;
}
.catalog-card__title {
  padding: 20px;
  margin: 0;
}
.catalog-card__characteristics p {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 0;
}
.catalog-card__characteristics span {
  font-size: 12px;
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
  .catalog-card__characteristics span {
    font-size: 16px;
  }
}
</style>