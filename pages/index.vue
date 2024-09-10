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
                        <p>Компания основана в 2009 году и на протяжении многих лет успешно реализует технику Shacman. За время работы открыто более 28 филиалов по всей стране, собственные сервисные центры и склад запасных частей для грузовых автомобилей. В штате компании 14 выездных бригад для обслуживания грузовой техники по месту её работы.</p>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="374" height="130" viewBox="0 0 374 130" fill="none">
                        <path d="M58.5 85.4V100H4.5V62.5L41.7 57.5V44.6H4.9V30H46.3L58.5 42.2V69.2L21.3 74.2V85.4H58.5ZM86.1883 58.3H105.588V43.4H86.1883V58.3ZM84.7883 86.6H107.888V69.9H84.7883V86.6ZM78.3883 100L66.1883 87.8V70.6L75.0883 63.4L68.1883 57.9V42.2L80.3883 30H111.388L123.588 42.2V57.9L116.688 63.4L125.588 70.6V87.8L113.388 100H78.3883Z" fill="#FEC210"/>
                        <path d="M145.8 47.8V34.2L150.44 29.56H171.24L175.88 34.2V47.8L171.24 52.44H150.44L145.8 47.8ZM152.28 34.92V47.08H169.4V34.92H152.28ZM163.96 55H157.72V27H163.96V55ZM202.952 55H196.352V36.52L185.952 55H179.592V27H186.192V45.48L196.592 27H202.952V55ZM229.859 27V55H223.139V32.92H216.739L212.419 55H205.299L211.219 27H229.859ZM257.053 55H250.453V36.52L240.053 55H233.693V27H240.293V45.48L250.693 27H257.053V55ZM259.401 55L265.561 27H278.601L284.761 55H277.641L276.481 49H267.681L266.521 55H259.401ZM268.521 44.16H275.641L273.321 32.32H270.841L268.521 44.16ZM310.211 27V55H303.491V32.92H297.091L292.771 55H285.651L291.571 27H310.211ZM313.925 50.12V31.88L318.805 27H332.645L337.525 31.88V50.12L332.645 55H318.805L313.925 50.12ZM320.885 32.84V49.16H330.565V32.84H320.885ZM347.953 38.32H356.633V32.36H347.953V38.32ZM347.953 49.64H357.313V42.96H347.953V49.64ZM363.473 31.64V38.24L361.113 40.2L364.273 42.84V50.36L359.633 55H341.233V27H358.833L363.473 31.64ZM145.92 103V75H168.08V103H161.36V80.84H152.64V103H145.92ZM171.816 98.12V79.88L176.696 75H190.536L195.416 79.88V98.12L190.536 103H176.696L171.816 98.12ZM178.776 80.84V97.16H188.456V80.84H178.776ZM216.234 91.64H224.794V80.36H216.234V91.64ZM231.514 79.88V92.12L226.634 97H216.234V103H209.514V75H226.634L231.514 79.88ZM234.433 98.12V79.88L239.313 75H253.153L258.033 79.88V98.12L253.153 103H239.313L234.433 98.12ZM241.393 80.84V97.16H251.073V80.84H241.393ZM261.62 98.12V79.88L266.5 75H280.58V81.12H268.58V96.88H280.98V103H266.5L261.62 98.12ZM283.847 98.12V79.88L288.727 75H302.807V81.12H290.807V96.88H303.207V103H288.727L283.847 98.12ZM329.553 103H322.953V84.52L312.553 103H306.193V75H312.793V93.48L323.193 75H329.553V103ZM356.741 103H350.141V84.52L339.741 103H333.381V75H339.981V93.48L350.381 75H356.741V103Z" fill="#231F20"/>
                        </svg>
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
            slides: [{
                image: '/img/main-window/akciya-shacman-1.webp',
                title: 'При покупке любой модели марки SHACMAN чехлы на сиденья в подарок',
                notes: [
                    "*Акция действует до 30 сентября 2024г.",
                    'Подробности узнавайте у менеджеров компании KOMTRANS Group'
                ]
            },{
                image: '/img/main-window/akciya-shacman-2.webp',
                title: 'Сервис SHACMAN <br/>Скидка на работы в течении всего месяца!',
                notes: [
                    "*Акция действует до 30 сентября 2024г.",
                    'Подробности узнавайте у менеджеров компании KOMTRANS Group'
                ]
            },{
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