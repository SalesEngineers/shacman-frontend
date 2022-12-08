<template>
    <div class="block-padding">
        <h2 class="mb-md-14 mb-9 text-uppercase">
          Услуги
        </h2>
        <v-row>
          <v-col class="d-flex flex-column" cols="12" md="6">
            <v-card class="d-flex flex-column service-card flex-grow-1">
              <v-img class="service-card__img" :src="images[0]" alt="service"/>
              <div class="service-card__content__first service-card__content ">
                <div> 
                  <p class="card-title">Сервис</p>
                  <p class="mb-10">
                    «Комтранс» имеет 12 сервисных центров и 20 выездных бригад. Специалисты компании всегда готовы выехать в любые места эксплуатации техники и провести ремонт.<br><br>
                    Мы предлагаем широкий спектр услуг по техническому обслуживанию, диагностике, ремонту спецтехники и навесного оборудования
                  </p>
                </div>
                <div>
                  <nuxt-link class="underline-href font-weight-bold big-main-text" to="/service/">Узнать подробнее</nuxt-link>
                </div>
              </div>
            </v-card>  
          </v-col>
          <v-col class="d-flex flex-column" cols="12" md="6">
            <v-row class="">
              <v-col cols="12" sm="6">
                <v-card class="d-flex flex-column service-card flex-grow-1">
                  <v-img class="service-card__img" :src="images[1]" alt="service"/>
                  <div class="service-card__content__second service-card__content ">
                    <div class=""> 
                      <p class="card-title">Запчасти</p>
                      <p class="mb-10">
                        Предлагаем качественные запчасти от проверенных производителей и доставляем по всей территории России, поэтому необходимый товар вы получите в сжатые сроки
                      </p>
                    </div>
                    <div>
                      <nuxt-link class="underline-href font-weight-bold big-main-text" to="/parts/">Узнать подробнее</nuxt-link>
                    </div>
                  </div>
                </v-card>  
              </v-col>
              <v-col cols="12" sm="6">
                <v-card class="d-flex flex-column service-card flex-grow-1">
                  <v-img class="service-card__img" :src="images[2]" alt="service"/>
                  <div class="service-card__content__second service-card__content ">
                    <div> 
                      <p class="card-title">Лизинг</p>
                      <p class="mb-10">
                        Финансирование компаний — важное направление деятельности нашего предприятия, поэтому мы разработали гибкую схему продажи спецтехники в лизинг
                      </p>
                    </div>
                    <div>
                      <nuxt-link class="underline-href font-weight-bold big-main-text" to="/lizing/">Узнать подробнее</nuxt-link>
                    </div>
                  </div>
                </v-card>  
              </v-col>
            </v-row>
          </v-col>
        </v-row>     
    </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => ['/img/services/service.png', '/img/services/parts.png', '/img/services/lizing.png'],
    },
  },
}
</script>

<style lang="scss" scoped>
  .service-card {
    height: 100%;
  }
  .service-card__content {
    font-size: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .service-card__content {
    padding: 30px;
    padding-bottom: 50px;
    color: white;
  }
  .service-card__img {
    height: 350px;
    max-height: 350px;
  }
  .service-card__content__first {
    background: $primary-color;
  }
  .service-card__content__second {
    background: $secondary-color;
  }
  @include lg {
    .service-card__content {
      font-size: 14px;
      padding: 20px;
      padding-bottom: 40px;
    }
    .service-card__img {
      height: 250px;
      max-height: 250px;
    }
  }
</style>