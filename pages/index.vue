<template>
  <div>
    <MainWindow link="/product-category/" btnTitle="Перейти в каталог" title="Дилер №1 по&nbsp;поставкам спецтехники XCMG в&nbsp;России" :slides="['/img/main-window/xcmg-diler-oficial.webp','/img/main-window/xcmg-oficial-diler.webp','/img/main-window/xcmg-diler.webp','/img/main-window/diler-xcmg.webp',]"/>
      <v-container class="content-padding">
        <v-row align="center" class="block-padding">
          <v-col cols="12" lg="6">
            <div class="mr-xl-9 mr-lg-4">
              <h2 class="text-uppercase mb-md-14 mb-9">
                  Немного о&nbsp;«KOMTRANS&nbsp;<span class="text-none">Group</span>»
              </h2>
              <p class="pb-14 mb-md-0">
                  Компания основана в&nbsp;2009 году и&nbsp;на&nbsp;протяжении многих лет успешно реализует спецтехнику XCMG. За&nbsp;время работы открыто 12&nbsp;филиалов по&nbsp;всей стране, собственные сервисные центры и&nbsp;склад запасных частей для спецтехники и&nbsp;грузовых автомобилей. В&nbsp;штате компании 14&nbsp;выездных бригад для обслуживания техники по&nbsp;месту её&nbsp;работы.<br><br>
                  Мы&nbsp;делаем акцент на&nbsp;подбор техники по&nbsp;конкретную задачу, поставляем более 1000 единиц спецтехники в&nbsp;год. Входим в&nbsp;топ-10 дилеров XCMG в&nbsp;мире.
              </p>    
              <v-row align="center" class="pb-9 pb-lg-0">
                  <v-col cols="12" sm="6">
                    <nuxt-link to="/about/" class="big-main-text href-primary underline-href text-none font-weight-bold">
                      Узнать подробнее
                    </nuxt-link>
                  </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="12" lg="6">
              <CollageMain/>
          </v-col>
        </v-row>

        <h2 class="mb-md-14 mb-9 text-uppercase">
          Наши филиалы
        </h2>
        
        <client-only>
          <Map/>
        </client-only>

        <div class="block-padding">
          <h2 class="text-uppercase mb-md-14 mb-9">
            Каталог
          </h2>
          <Catalog :items="catalogSpec"/>
        </div>
        
        <Services/>

        <h2 class="mb-md-14 mb-9 text-uppercase">
          Оплата и доставка
        </h2>
        <v-row class="block-padding">
          <v-col cols="12" sm="6">
            <v-card class="shadow-text-card">
              <p class="card-title primary-text text-uppercase">Оплата</p>
              <p>Оплата производится через безналичный или&nbsp;наличный расчет. Проанализировав потребности и&nbsp;пожелания клиентов, мы&nbsp;создали гибкую схему сотрудничества, которая удовлетворит каждого покупателя. Преобрести технику можно в&nbsp;кредит, через лизинг от&nbsp;12&nbsp;компаний и&nbsp;через программы трейд-ин.</p>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card class="shadow-text-card">
              <p class="card-title primary-text text-uppercase">Доставка</p>
              <p>Доставка возможна эвакуатором, фурой, ЖД&nbsp;транспортом. Служба доставки может осуществлять разборку спецтехники, погрузку, увязку, доставку, разгрузку, сборку, ТО на&nbsp;месте эксплуатации и&nbsp;передачу покупателю. Ответственность за&nbsp;время всех работ и&nbsp;доставки несет компания.</p>
            </v-card>
          </v-col>
        </v-row>

        <!-- <BlogList :isMain="true"/> -->

        <h2 class="text-uppercase mb-md-14 mb-9">
            Контакты
        </h2>
        <ContactCardsList/>
      </v-container>
    <FeedbackMan title="Подберём технику<br>специально для&nbsp;вас!" content="Квалифицированный менеджер поможет с&nbsp;выбором спецтехники под&nbsp;вашу задачу и&nbsp;ответит на&nbsp;любой вопрос" btnTitle="Подобрать технику"/>
  </div>
</template>

<script>
import MainWindow from '~/components/Main_window.vue'
import CollageMain from '~/components/collage/Collage_main.vue'
import ContactCardsList from '~/components/Contact_cards_list.vue'
import FeedbackMan from '~/components/Feedback_man.vue'
import Catalog from '~/components/Catalog_cards_list.vue'
import Services from '~/components/Services.vue'
import BlogList from '~/components/Blog_list.vue'
import Map from '~/components/Main_map.vue'
import { mapState } from 'vuex'

export default {
  components: {
    MainWindow,
    ContactCardsList,
    FeedbackMan,
    CollageMain,
    Catalog,
    Services,
    BlogList,
    Map
  },
  head () {
    return {
      title: 'Купить спецтехнику XCMG в России - официальный дилер',
      meta: [
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: 'Спецтехника XCMG от официального дилера по всей России с доставкой из 12 городов ➤ Более 400 единиц техники в наличии ⬥ Официальная гарантия, выездное сервисное обслуживание.'},
        { hid: 'keywords', name: 'keywords', content: 'Главная'}
      ]
    }
  },
  data() {
    return {
      catalogSpec: [],
    }
  },
  mounted() {
    this.getCategories()
  },
  created() {
    this.$store.commit('offVisabilityHeader')
    this.$store.commit('setBreadCrumbs', null)
  },
  watch: {
    categories() {
      this.catalogSpec = []
      this.getCategories()
    }
  },
  methods: {
    getCategories() {
      this.categories.forEach(element => {
        if (element.id == 2) {
            element.children.forEach(category => {
              this.catalogSpec.push(category)
            });
        }
      });
    },
  },
  computed: {
    ...mapState([
        'categories'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .shadow-text-card {
    display: flex;
  }
  .shadow-text-card .card-title {
    padding-right: 30px;
  }
  @include lg {
    .shadow-text-card .card-title {
      padding-right: 20px;
    }
  }
  @include sm {
    .shadow-text-card{
      display: block;
    }
    .shadow-text-card .card-title {
      margin-bottom: 30px;
      padding-right: 0;
    }
  }
</style>