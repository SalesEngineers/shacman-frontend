<template>
    <div>
        <MainWindow title="Оригинальные запчасти для&nbsp;спецтехники XCMG " :slides="['/img/main-window/xcmg-parts.webp']"/>
        <v-container class="content-padding">
            <v-row align="center" class="block-padding">
                <v-col cols="12" lg="6">
                    <div class="mr-xl-9 mr-lg-4">
                        <h2 class="text-uppercase mb-md-14 mb-9">
                            Запчасти <br class="d-none d-lg-inline">для спецтехники   
                        </h2>
                        <p class="pb-9 mb-md-0">
                            Компания &laquo;KOMTRANS Group&raquo; предлагает качественные запчасти для спецтехники XCMG. Мы&nbsp;реализуем оригинальные, аналоговые и&nbsp;универсальные изделия от&nbsp;известных и&nbsp;проверенных производителей. Всегда в&nbsp;наличии на&nbsp;складе запасные части в&nbsp;широком ассортименте. Поставки выполняются по&nbsp;всей территории России через наши филиалы, поэтому необходимый товар вы&nbsp;получите в&nbsp;самые сжатые сроки.<br><br>
                            Заявки быстро обрабатываются и&nbsp;комплектуются. Приобретенную продукцию вы&nbsp;можете забрать самостоятельно с&nbsp;регионального склада нашего представительства, либо воспользоваться нашим сервисом адресной доставки.
                        </p>    
                    </div>
                </v-col>
                <v-col cols="12" lg="6">
                    <Collage/>
                </v-col>
            </v-row>

            <div class="catalog-block block-padding">
                <h2 class="text-uppercase mb-md-14 mb-9">
                    Каталог
                </h2>
                <v-row>
                    <v-col cols="12" sm="6" md="4" lg="3" v-for="(item, index) in catalog_items" :key="index" :style="$vuetify.breakpoint.xl ? ' flex: 1 0 20%; max-width: 20%;' : ''">
                        <div class="content-card_wrapper" @click="$store.commit('onModalWindow', {title: 'Получить консультацию', btnName: 'Получить консультацию'})">
                            <v-card :class="item.expand ? 'shadow-primary' : ''" @mouseover="item.expand = true" @mouseleave="item.expand = false">
                                <div class="content-card">
                                    <v-img
                                        height="250"
                                        :src="item.img"
                                    ></v-img>
                                    <p class="card-title" v-html="item.title"></p>
                                </div>
                                <v-expand-transition>
                                    <v-btn color="primary" height="43px" class="text-none font-weight-bold" absolute block v-show="item.expand">
                                        Получить консультацию
                                    </v-btn>
                                </v-expand-transition>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </div>


            <h2 class="text-uppercase mb-md-14 mb-9">
                Контакты
            </h2>
            <ContactCardsList/>
        </v-container>
        <FeedbackMan title="Подберём запчасти<br>специально для&nbsp;вас!" content="Квалифицированный менеджер поможет с выбором и ответит на любой вопрос " btnTitle="Подобрать запчасти"/>
    </div>
</template>

<script>
import MainWindow from '~/components/Main_window.vue'
import Collage from '~/components/collage/Collage_parts.vue'
import ContactCardsList from '~/components/Contact_cards_list.vue'
import FeedbackMan from '~/components/Feedback_man.vue'

export default {
    components: {
        MainWindow,
        Collage,
        ContactCardsList,
        FeedbackMan
    },
    head () {
        return {
        title: 'Запчасти на спецтехнику XCMG - купить у официального дилера',
        meta: [
            { charset: 'utf-8' },
            { hid: 'description', name: 'description', content: 'Продажа запчастей на китайскую технику XCMG по всей РФ от официального дилера.'},
            { hid: 'keywords', name: 'keywords', content: ''}
        ]
        }
    },
    data() {
        return {
            catalog_items: [
                {
                    title: 'Фильтры',
                    img: '/img/catalog_parts/filters.png',
                    href: '/filters',
                    expand: false
                },
                {
                    title: 'Датчики',
                    img: '/img/catalog_parts/datchiki.png',
                    href: '/filters',
                    expand: false
                },
                {
                    title: 'Трансмиссия',
                    img: '/img/catalog_parts/transmission.png',
                    href: '/filters',
                    expand: false
                },
                {
                    title: 'Тормозная система',
                    img: '/img/catalog_parts/stop_system.png',
                    href: '/filters',
                    expand: false
                },
                {
                    title: 'Компрессоры',
                    img: '/img/catalog_parts/compressor.png',
                    href: '/filters',
                    expand: false
                },
                {
                    title: 'Ходовая часть',
                    img: '/img/catalog_parts/start_part.png',
                    href: '/filters',
                    expand: false
                }
            ],
            hoverCard: null
        }
    },
    created() {
        this.$store.commit('offVisabilityHeader')
        this.$store.commit('setBreadCrumbs', 
        [
            {
            text: 'Официальный дилер XCMG',
            disabled: false,
            href: '/',
            position: 1,
            },
            {
            text: 'Запчасти',
            disabled: true,
            href: '/parts',
            position: 2,
            },
        ])
    },
}
</script>

<style lang="scss" scoped>
    .content-card_wrapper {
        cursor: pointer;
    }
    .content-card_wrapper .v-image {
        border-radius: 4px;
    }
    .v-card__title {
        font-family: $title_bold;
    }
    .catalog-block .v-card .card-content{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .catalog-block .v-card {
        height: 100%;
    }
    .catalog-block .v-card .card-title {
        height: 100%;
        padding: 15px 20px;
        margin: 0;
    }
    .v-card {
        transition: all .5s;
        box-shadow: unset !important;
    }
    .shadow-primary {
        box-shadow: $card-shadow !important;
        position: relative;
        z-index: 10;
    }
    @include xl {
        .catalog-block .v-card-title {
            font-size: 24px;
        }
    }
</style>