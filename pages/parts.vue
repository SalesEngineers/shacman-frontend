<template>
    <div>
        <MainWindow title="Оригинальные запчасти для спецтехники Shacman  " :slides="['/img/parts/slide-1.jpg']"/>
        <v-container class="content-padding">
            <v-row align="center" class="block-padding">
                <v-col cols="12" lg="6">
                    <div class="mr-xl-9 mr-lg-4">
                        <h2 class="text-uppercase mb-md-14 mb-9">
                            Запчасти <br class="d-none d-lg-inline">для спецтехники   
                        </h2>
                        <p>Компания «KOMTRANS Group» предлагает качественные запчасти для спецтехники Shacman. Мы реализуем оригинальные, аналоговые и универсальные изделия от известных и проверенных производителей. Всегда в наличии на складе запасные части в широком ассортименте. Поставки выполняются по всей территории России через наши филиалы, поэтому необходимый товар вы получите в самые сжатые сроки.</p>
                        <p class="pb-9 mb-md-0">Заявки быстро обрабатываются и комплектуются. Приобретенную продукцию вы можете забрать самостоятельно с регионального склада нашего представительства, либо воспользоваться нашим сервисом адресной доставки.</p>    
                    </div>
                </v-col>
                <v-col cols="12" lg="6">
                    <Collage/>
                </v-col>
            </v-row>            

            <v-contacts></v-contacts>
        </v-container>
        
        <FeedbackMan title="Подберём запчасти<br>специально для&nbsp;вас!" content="Квалифицированный менеджер поможет с выбором и ответит на любой вопрос " btnTitle="Подобрать технику"/>
    </div>
</template>

<script>
import MainWindow from '~/components/Main_window.vue'
import Collage from '~/components/collage/Collage_parts.vue'
import VContacts from "~/components/VContacts/index.vue";
import FeedbackMan from '~/components/Feedback_man.vue'

export default {
    components: {
        MainWindow,
        Collage,
        VContacts,
        FeedbackMan
    },
    head () {
        return {
        title: 'Запчасти на спецтехнику Shacman - купить у официального дилера',
        meta: [
            { charset: 'utf-8' },
            { hid: 'description', name: 'description', content: 'Продажа запчастей на китайскую технику Shacman по всей РФ от официального дилера.'},
            { hid: 'keywords', name: 'keywords', content: 'запчасти на спецтехнику shacman, шакман, шахман, запасные части'}
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
            text: 'Официальный дилер Shacman',
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