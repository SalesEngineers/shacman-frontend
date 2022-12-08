<template>
    <v-container>
      <v-row class="flex-wrap-reverse flex-md-wrap">
        <v-col cols="12" md="6" class="d-flex align-center">
          <div class="mb-8 mb-md-0">
            <h1 class="mb-9" v-if="error.statusCode === 404">
              Страница на&nbsp;реконструкции
            </h1>
            <h1 class="mb-9" v-else>
              Произошла внутренняя ошибка
            </h1>

            <v-row class="flex-wrap-reverse flex-md-wrap">
              <v-col cols="12"  lg="8" xl="6">
                <span class="d-block mb-10 mb-xs-14">
                  Неправильно набран адрес, или&nbsp;страница, которую вы&nbsp;ищите, больше не&nbsp;существует. 
                  <br>
                  <br>
                  Вернитесь на&nbsp;главную либо воспользуйтесь главной навигацией.
                </span>
                <span class="d-block mb-14">
                  <nuxt-link class="underline-href font-weight-bold" to="/">
                    Вернуться на главную
                  </nuxt-link>
                </span>
              </v-col>
            </v-row>

          </div>
        </v-col>
        <v-col cols="12" md="6">
          <img class="pb-sm-8" src="/img/404.png" alt="">
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? 'Страница не найдена ' : 'Произошла внутренняя ошибка'
    return {
      title
    }
  },
  created() {
    this.$store.commit('onVisabilityHeader')
    this.$store.commit('setBreadCrumbs', null)
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  right: -8vw;
  position: relative;
}
a {
  color: $primary-color;
}
@include xs {
  h1 {
    font-size: 26px;
  }
}
</style>
