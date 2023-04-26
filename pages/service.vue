<template>
   <div>
        <MainWindow btnTitle="Получить консультацию" title="Сервисное обслуживание спецтехники Shacman в Красноярске" :slides="['/img/services/slide-1.jpg']"/>
        <div class="content-padding pb-0">
            <v-container>
                <v-row class="align-center block-padding flex-row flex-md-row-reverse">
                    <v-col cols="12" md="6">
                        <client-only>
                            <iframe loading="lazy" class="video mb-8 mb-md-0" src="https://www.youtube.com/embed/XxR2MIly3ZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </client-only>
                    </v-col>

                    <v-col cols="12" md="6">
                        <p class="mb-5 mb-md-8 mb-xl-11">Транспортировка и&nbsp;отрыв спецтехники от&nbsp;производства больше не&nbsp;требуются: мобильная бригада &laquo;KOMTRANS Group&raquo; прибудет в&nbsp;кратчайшие сроки и&nbsp;выполнит все необходимые работы&nbsp;&mdash; от&nbsp;планового обслуживания до&nbsp;замены неисправных узлов.</p>
                        <p class="ma-0">Запись для получения услуги&nbsp;&mdash; по&nbsp;телефону:</p>
                        <a class="phone mb-9 mb-md-11 d-block" href="tel:+7 (923) 343-86-02">+7 (923) 343-86-02</a>
                        <v-btn class="main-button text-none font-weight-bold" color="primary" @click="$store.commit('onModalWindow', {title: 'Получить консультацию', btnName: 'Получить консультацию'})">
                            Получить консультацию
                        </v-btn>

                    </v-col>
                </v-row>

                <v-row class="align-center pb-9 flex-row flex-md-row-reverse">
                    <v-col cols="12" md="6">
                        <h2 class="text-uppercase mb-md-14 mb-9">Выездной сервис в&nbsp;любую точку России</h2>
                        <p>&laquo;KOMTRANS Group&raquo; имеет 12&nbsp;сервисных центров и&nbsp;20&nbsp;выездных бригад. Специалисты компании всегда готовы выехать в&nbsp;любые места эксплуатации техники и&nbsp;провести ремонт, максимально сократив простои. При этом транспортировка спецтехники не&nbsp;требуется.</p>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-img src="/img/services/truck.jpg" alt="Выездной сервис в любую точку России"/>
                    </v-col>
                </v-row>

                <v-row class="block-padding">
                    <v-col cols="12" md="4">
                        <v-card class="shadow-text-card">
                        <p class="card-title primary-text text-uppercase">Оперативность</p>
                        <p class="mb-0">Выездая бригада приедет в&nbsp;кратчайшие сроки, быстро определит неисправность и&nbsp;произведёт ремонт.</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="shadow-text-card">
                        <p class="card-title primary-text text-uppercase">Экономия</p>
                        <p class="mb-0">Вызов выездной бригады зачастую дешевле, чем транспортировка спецтехники до&nbsp;сервисного центра.</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="shadow-text-card">
                        <p class="card-title primary-text text-uppercase">Сертификация</p>
                        <p class="mb-0">&laquo;KOMTRANS Group&raquo;&nbsp;&mdash; сертифицированный сервис, аккредитованный Shacman.</p>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row class="block-padding">
                    <v-col cols="12" md="6">
                        <h2 class="text-uppercase mb-md-14 mb-9">Первичная диагностика уже&nbsp;сейчас</h2>
                        <p class="mb-5 mb-md-8 mb-xl-11">Специалист &laquo;KOMTRANS Group&raquo; проведёт первичную диагностику неисправности в&nbsp;режиме реального времени по&nbsp;телефону или WhatsApp и&nbsp;даст рекомендации по&nbsp;ремонту.</p>
                        <p class="ma-0">Запись для получения услуги&nbsp;&mdash; по&nbsp;телефону:</p>
                        <a class="phone mb-9 mb-md-11 d-block" href="tel:+7 (923) 343-86-02">+7 (923) 343-86-02</a>
                        <v-btn class="main-button text-none font-weight-bold" color="primary" @click="$store.commit('onModalWindow', {title: 'Провести диагностику', btnName: 'Провести диагностику'})">
                            Провести диагностику
                        </v-btn>
                    </v-col>
                    <v-col class="arm__col__wrap" cols="12" md="6">
                        <div class="arm__wrap">
                            <img
                                class="arm__photo"
                                src="/img/arm_photo.png"
                            />
                        </div>
                    </v-col>
                </v-row>

                <div class="block-padding">
                    <h2 class="text-uppercase mb-md-14 mb-9">Виды обслуживаемой техники</h2>
                    <Catalog :items="catalogSpec"/>
                </div>
                <div class="align-center block-padding">
                    <v-row class="align-center mb-8 mb-xl-16">
                        <v-col cols="12" md="6">
                            <h2 class="text-uppercase mb-md-14 mb-9">Услуги</h2>
                            <p>Мы предлагаем широкий спектр услуг по техническому обслуживанию, диагностике, ремонту спецтехники и навесного оборудования. Занимаемся препрограммированием, установкой дополнительного оборудования, систем взвешивания, датчиков.</p>
                            <p>Обслуживание и проведение ТО купленной техники вы можете доверить компании «KOMTRANS Group» — сервис аккредитован брендом Shacman.</p>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="service-card">
                                <v-img class="service-card__img" src="/img/services/service-2.jpg" alt="repair man"/>
                                <div class="px-5 px-xl-9 py-5 py-xl-6">
                                    <p class="card-title">Авторизованный сервис Shacman</p>
                                    <p class="ma-0">Обслуживание спецтехники в&nbsp;&laquo;KOMTRANS Group&raquo; не&nbsp;повлечёт прекращения официальной гарантии</p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="catalog-cards">
                        <v-col cols="12" sm="6" md="4" lg="3" v-for="(item, index) in service_items" :key="index" :style="$vuetify.breakpoint.xl ? ' flex: 1 0 20%; max-width: 20%;' : ''">
                            <div class="content-card_wrapper" @click="$store.commit('onModalWindow', {title: 'Получить консультацию', btnName: 'Получить консультацию'})">
                                <v-card 
                                    @mouseenter="hoverEvent(index)" 
                                    @mouseleave="hoverEvent(null)"
                                    :class="hoverCard == index ? 'shadow-primary' : ''">
                                    <div class="card-content">
                                        <v-img
                                            height="250"
                                            :src="item.img"
                                        ></v-img>
                                        <p class="card-title" v-html="item.title"></p>
                                    </div>
                                    <v-expand-transition>
                                        <v-btn color="primary" height="43px" class="text-none font-weight-bold" absolute block v-show="hoverCard == index">
                                            Получить консультацию
                                        </v-btn>
                                    </v-expand-transition>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>
                </div>

                <div class="order-works block-padding">
                    <h2 class="text-uppercase mb-md-14 mb-9">Порядок работы</h2>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-card class="shadow-text-card" @mouseenter="expand = true" @mouseleave="expand = false">
                            <p class="card-title-number text-right secondary-text text-uppercase">01</p>
                            <p class="card-title primary-text text-uppercase ma-0">Оформление<br>заявки</p>
                            <v-expand-transition>
                                <div v-show="expand">
                                    <v-btn width="100%" class="mt-5 font-weight-bold" color="primary" @click="$store.commit('onModalWindow', {title: 'Оставить заявку', btnName: 'Оставить заявку'})">Оставить заявку</v-btn>
                                </div>
                            </v-expand-transition>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-card class="shadow-text-card"> 
                            <p class="card-title-number text-right secondary-text text-uppercase">02</p>
                            <p class="card-title primary-text text-uppercase ma-0">Формирование<br>и&nbsp;оплата счёта</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-card class="shadow-text-card">
                            <p class="card-title-number text-right secondary-text text-uppercase">03</p>
                            <p class="card-title primary-text text-uppercase ma-0">Выезд<br>мобильной бригады</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-card class="shadow-text-card">
                            <p class="card-title-number text-right secondary-text text-uppercase">04</p>
                            <p class="card-title primary-text text-uppercase ma-0">Устранение<br>неисправности</p>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>

                <v-contacts></v-contacts>
            </v-container>
        </div>
        <FeedbackMan title="Оставьте заявку на сервисное обслуживание" content="Квалифицированный менеджер поможет с выбором услуги  и ответит на любой вопрос" btnTitle="Подобрать технику"/>
   </div>
</template>

<script>
import MainWindow from '~/components/Main_window.vue'
import FeedbackMan from '~/components/Feedback_man.vue'
import Catalog from '~/components/Catalog_cards_list.vue'
import VContacts from '~/components/VContacts/index.vue'
import { mapState } from 'vuex'

export default {
    components: {
      MainWindow,
      FeedbackMan,
      Catalog,
      VContacts
    },    
    head () {
        return {
        title: 'Сервисное обслуживание спецтехники Shacman у официального дилера',
        meta: [
            { charset: 'utf-8' },
            { hid: 'description', name: 'description', content: 'Специалисты компании КОМТРАНС производят диагностику грузовых автомобилей с выездом на место стоянки. 14 экипажей выездных бригад.'},
            { hid: 'keywords', name: 'keywords', content: 'сервисное обслуживание спецтехники shacman, ремонт, шакман, шахман'}
        ]
        }
    },
    data() {
      return {
        expand: false,
        catalogSpec: [],
        hoverCard: null,
        service_items: [
            {
                title: 'Проведение ТО',
                img: '/img/service_parts/pogruzchik-man.png',
            },
            {
                title: 'Ремонт ДВС',
                img: '/img/service_parts/tech-hand.png',
            },
            {
                title: 'Ремонт КПП',
                img: '/img/service_parts/kpp.png',
            },
            {
                title: 'Сборка/разборка<br>техники',
                img: '/img/service_parts/tech-hand-2.png',
            },
            {
                title: 'Подготовка техники<br>к сезону',
                img: '/img/service_parts/pogruzchik.png',
            },
            {
                title: 'Ремонт мостов<br>и редукторов',
                img: '/img/service_parts/under.png',
            },
            {
                title: 'Установка навесного',
                img: '/img/service_parts/sklad.png',
            },
            {
                title: 'Ремонт автоэлектрики',
                img: '/img/service_parts/tech-man.png',
            },
            {
                title: 'Ремонт гидравлики',
                img: '/img/service_parts/off-hand.png',
            }
        ]

      }
    },
    created() {
      this.$store.commit('offVisabilityHeader')
      this.$store.commit('setBreadCrumbs', 
        [
            {
            text: 'Официальный дилер Shacman',
            disabled: false,
            href: '/',
            position: 1,
            },
            {
            text: 'Сервис',
            disabled: true,
            href: '/about',
            position: 2,
            },
        ])
    },
    mounted() {
        this.getCategories()
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
        hoverEvent(index) {
            this.hoverCard = index;
        }
    },
    computed: {
        ...mapState([
            'categories'
        ])
    }
}
</script>

<style lang="scss" scoped>
    .video {   
        width: 100%;
        height: 22vw;
        min-height: 250px;
    }
    .phone {
        font-size: 34px;
        font-weight: bold;
        color: $primary-color;
    }
    .arm__wrap {
        position: absolute;
        left: 6vw;
        right: 0;
    }
    .arm__photo {
        position: absolute;
        top: -60px;
        max-height: 600px;
        height: 50vw;
        z-index: 1;
        right: 0;
    }
    .service-card {
        background: $secondary-color;
        color: white;
    }
    .service-card__img {
        height: 300px;
    }
    .card-title-number {
        font-family: $title_bold;
        font-size: 40px;
        line-height: 1;
    }
    .order-works .shadow-text-card {
        padding: 30px 20px;
    }
    .catalog-cards .v-card .card-content{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .catalog-cards .v-card {
        height: 100%;
        transition: all .5s;
        box-shadow: unset !important;
    }
    .catalog-cards .v-image {
        border-radius: 4px;
    }
    .content-card_wrapper {
        cursor: pointer;
    }
    .catalog-cards .shadow-primary {
        box-shadow: $card-shadow !important;
        position: relative;
        z-index: 10;
    }
    .catalog-cards .v-card .card-title {
        padding: 15px 20px;
        margin: 0;
        height: 100%;
    }
    @include lg {
        .phone {
            font-size: 30px;
        }
    }

    @include md {
        .order-works .shadow-text-card {
            padding: 30px 15px;
        }
    }
    @include sm {
        .video {   
            height: 50vw;
        }
        .phone {
            font-size: 24px;
        }
        .order-works .shadow-text-card {
            padding: 30px 20px;
        }
        .arm__col__wrap{
            height: 70vw;
        }
        .arm__photo{
            height: 70vw;
            top: 30px;
        }
    }
    @include xs {
        .arm__col__wrap{
            height: 100vw;
        }
        .arm__photo{
            height: 100vw;
        }
        .service-card .card-title{
            font-size: 17px;
        }
    }
</style>