<template>
    <div>
        <MainWindow
            :slides="slides"
        ></MainWindow>
        <v-container class="content-padding">
            <v-row align="center" class="block-padding">
                <v-col cols="12" lg="6">
                    <div class="mr-xl-9 mr-lg-4">
                        <h1 class="text-uppercase mb-md-14 mb-9 heading-h1">
                            Официальный дилер техники Shacman в России
                        </h1>
                        <p>Компания основана в 2009 году и на протяжении многих лет успешно реализует технику Shacman. За время работы открыто более 24 филиалов по всей стране, собственные сервисные центры и склад запасных частей для грузовых автомобилей. В штате компании 30 выездных бригад для обслуживания грузовой техники по месту её работы.</p>
                        <p class="pb-14 mb-md-0">Мы делаем акцент на подбор техники под конкретную задачу, поставляем более 2000 единиц грузовой техники в год. Являемся официальным дилером Shacman и входим в топ-3 дилеров Shacman в России.</p>
                        <v-row align="center" class="pb-9 pb-lg-0">
                            <v-col cols="12" sm="6">
                                <nuxt-link
                                    to="/about/"
                                    class="big-main-text href-primary underline-href text-none font-weight-bold"
                                >Узнать подробнее</nuxt-link>
                            </v-col>
                        </v-row>
                    </div>                                       
                </v-col>
                <v-col cols="12" lg="6">
                    <CollageMain />
                </v-col>
            </v-row>

            <div v-if="settings.video" class="block-padding">
                <v-row>
                    <v-col cols="12" md="6">
                        <div class="iframe-video-block">
                            <iframe
                                :src="settings.video"
                                loading="lazy"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </v-col>
                </v-row>
            </div>

            <div class="block-padding">
                <h2 class="mb-md-14 mb-9 text-uppercase">Наши филиалы</h2>

                <client-only>
                    <div class="svg-map-container">
                        <div class="svg-title">
                            <div class="svg-title-number">24</div>
                            <div class="svg-title-content">филиала <br/>по России</div>
                        </div>
                        <svg-map :city-slug="dynamicContact?.slug" :contacts="contacts"></svg-map>
                    </div>
                </client-only>
            </div>

            <div class="block-padding">
                <h2 class="text-uppercase mb-md-14 mb-9">Каталог</h2>
                <Catalog :items="catalogSpec" />
            </div>

            <Services />

            <h2 class="mb-md-14 mb-9 text-uppercase">Оплата и доставка</h2>
            <v-row class="block-padding">
                <v-col cols="12" sm="6">
                    <v-card class="shadow-text-card">
                        <p class="card-title primary-text text-uppercase">Оплата</p>
                        <p>
                            Оплата производится через безналичный
                            или&nbsp;наличный расчет. Проанализировав
                            потребности и&nbsp;пожелания клиентов,
                            мы&nbsp;создали гибкую схему сотрудничества, которая
                            удовлетворит каждого покупателя. Преобрести технику
                            можно в&nbsp;кредит, через лизинг
                            от&nbsp;12&nbsp;компаний и&nbsp;через программы
                            трейд-ин.
                        </p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-card class="shadow-text-card">
                        <p class="card-title primary-text text-uppercase">Доставка</p>
                        <p>
                            Доставка возможна эвакуатором, фурой,
                            ЖД&nbsp;транспортом. Служба доставки может
                            осуществлять разборку грузовой техники, погрузку, увязку,
                            доставку, разгрузку, сборку, ТО на&nbsp;месте
                            эксплуатации и&nbsp;передачу покупателю.
                            Ответственность за&nbsp;время всех работ
                            и&nbsp;доставки несет компания.
                        </p>
                    </v-card>
                </v-col>
            </v-row>

            <BlogList :isMain="true" />

            <v-contacts></v-contacts>
        </v-container>
        <FeedbackMan
            title="Подберём технику<br>специально для&nbsp;вас!"
            content="Квалифицированный менеджер поможет с&nbsp;выбором грузовой техники под&nbsp;вашу задачу и&nbsp;ответит на&nbsp;любой вопрос"
            btnTitle="Подобрать технику"
        />
    </div>
</template>

<script>
import MainWindow from "~/components/Main_window.vue";
import CollageMain from "~/components/collage/Collage_main.vue";
import VContacts from "~/components/VContacts/index.vue";
import FeedbackMan from "~/components/Feedback_man.vue";
import Catalog from "~/components/Catalog_cards_list.vue";
import Services from "~/components/Services.vue";
import BlogList from "~/components/Blog_list.vue";
import Map from "~/components/Main_map.vue";
import SvgMap from "~/components/SvgMap/index.vue";
import { mapState, mapGetters } from "vuex";

export default {
    components: {
        MainWindow,
        VContacts,
        FeedbackMan,
        CollageMain,
        Catalog,
        Services,
        BlogList,
        Map,
        SvgMap,
    },
    head() {
        return {
            title: "Продажа грузовых машин Shacman от официального дилера в России",
            meta: [
                { charset: "utf-8" },
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Продажа китайских грузовых автомобилей Shacman Shaanxi от официального дилера с доставкой по всей РФ ➤ Лизинг от 5% ✓ Все машины проходят ТО ✓ Прямые поставки техники.",
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content:
                        "официальный дилер shacman, шакман, шахман, продажа, купить, цена",
                },
            ],
        };
    },
    data() {
        return {
            catalogSpec: [],
            slides: [
            /*{
                image: '/img/main-window/akciya-shacman-1.webp',
                title: 'При приобретении от 3-х единиц SHACMAN зимний пакет на каждую в подарок',
                notes: [
                    "*Акция действует до 31 октября 2024г.",
                    'Подробности узнавайте у менеджеров компании KOMTRANS Group'
                ]
            },{
                image: '/img/main-window/akciya-shacman-2.webp',
                title: 'Сервис SHACMAN <br/>Для машин с пробегом более 60 000 км. - скидка на ТО 40%',
                notes: [
                    "*Акция действует до 31 октября 2024г.",
                    'Подробности узнавайте у менеджеров компании KOMTRANS Group'
                ]
            },*/
            {
                title: 'Новый Shacman X6000 уже в продаже',
                link: '/product-category/x6000/',
                btnTitle: 'Перейти в каталог',
                image: '/img/main-window/slide-1.webp'
            },{
                title: 'Официальный дилер техники Shacman в&nbsp;России',
                link: '/product-category/',
                btnTitle: 'Перейти в каталог',
                image: '/img/main-window/xcmg-slider-general.webp'
            }]
        };
    },
    mounted() {
        this.getCategories();
    },
    created() {
        this.$store.commit("offVisabilityHeader");
        this.$store.commit("setBreadCrumbs", null);
    },
    watch: {
        categories: {
            handler() {
                this.catalogSpec = [];
                this.getCategories();
            },
            immediate: true,
        },
    },
    methods: {
        getCategories() {
            this.categories.forEach((element) => {
                if (element.id == 26) {
                    this.catalogSpec = Array.isArray(element.children)
                        ? [...element.children]
                        : [];
                }
            });
        },
    },
    computed: {
        ...mapState(["categories","settings"]),
        ...mapGetters({
            contacts: "getContacts",
            dynamicContact: "getDynamicContact",
        }),
    },
};
</script>

<style lang="scss" scoped>
.svg-title {
    display: flex;
    gap: 15px;
    font-family: "Tektur_Bold";
    align-items: center;
}
.svg-title-number {
    font-size: clamp(74px, 6vw, 90px);
    font-weight: bold;    
    line-height: 1;
    color: $hover-color;
}
.svg-title-content {
    font-size: clamp(28px, 6vw, 36px);
    line-height: 1.2;
    text-transform: uppercase;
    color: #231F20;
}
.svg-map-container {
    position: relative;

    svg {
        width: 100%;
        max-width: 339px;
    }
}
.card-info {
    position: absolute;
    z-index: 1;
    max-width: 500px;
    width: 50vw;
    left: 0;
    top: 0;
}

.heading-h1 {
    font-size: 51px;

    @include lg {
        font-size: 40px;
    }

    @include sm {
        font-size: 30px;
    }

    @include xs {
        font-size: 22px;
    }
}

@include lg {
    .card-info {
        width: 20vw;
    }
}

@include md {
    .card-info {
        width: 30vw;
    }

    .block-video {
      margin-bottom: 40px;
    }
}

@include sm {
    .card-info {
        left: unset;
        top: 0;
        right: 0;
        width: 40vw;
    }
}

@include xs {
    .card-info {
        width: 50vw;
    }
}
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
    .shadow-text-card {
        display: block;
    }
    .shadow-text-card .card-title {
        margin-bottom: 30px;
        padding-right: 0;
    }
}
</style>