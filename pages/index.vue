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
                        <p>Компания основана в 2009 году и на протяжении многих лет успешно реализует технику Shacman. За время работы открыто более 30 филиалов по всей стране, собственные сервисные центры и склад запасных частей для грузовых автомобилей. В штате компании 14 выездных бригад для обслуживания грузовой техники по месту её работы.</p>
                        <p class="pb-14 mb-md-0">Мы делаем акцент на подбор техники под конкретную задачу, поставляем более 1000 единиц грузовой техники в год. Являемся официальным дилером Shacman и входим в топ-3 дилеров Shacman в России.</p>
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
                        <svg width="339" height="131" viewBox="0 0 339 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.8 100.5H3V86.5H42.1V71.5H9V58.1H40.1V44.5H4V30.5H45.8L57.4 42.1V59L51.1 63.9L59.4 70.5V88.9L47.8 100.5ZM66.707 100.9V87.8L75.707 87.3V47.1L67.107 48V34.5L92.507 30.5V87.3L100.707 87.8V100.9L83.707 100.1L66.707 100.9Z" fill="#FEC210"/>
                        <path d="M122.8 48.3V34.7L127.44 30.06H148.24L152.88 34.7V48.3L148.24 52.94H127.44L122.8 48.3ZM129.28 35.42V47.58H146.4V35.42H129.28ZM140.96 55.5H134.72V27.5H140.96V55.5ZM179.952 55.5H173.352V37.02L162.952 55.5H156.592V27.5H163.192V45.98L173.592 27.5H179.952V55.5ZM206.859 27.5V55.5H200.139V33.42H193.739L189.419 55.5H182.299L188.219 27.5H206.859ZM234.053 55.5H227.453V37.02L217.053 55.5H210.693V27.5H217.293V45.98L227.693 27.5H234.053V55.5ZM236.401 55.5L242.561 27.5H255.601L261.761 55.5H254.641L253.481 49.5H244.681L243.521 55.5H236.401ZM245.521 44.66H252.641L250.321 32.82H247.841L245.521 44.66ZM287.211 27.5V55.5H280.491V33.42H274.091L269.771 55.5H262.651L268.571 27.5H287.211ZM122.92 103.5V75.5H145.08V103.5H138.36V81.34H129.64V103.5H122.92ZM148.816 98.62V80.38L153.696 75.5H167.536L172.416 80.38V98.62L167.536 103.5H153.696L148.816 98.62ZM155.776 81.34V97.66H165.456V81.34H155.776ZM193.234 92.14H201.794V80.86H193.234V92.14ZM208.514 80.38V92.62L203.634 97.5H193.234V103.5H186.514V75.5H203.634L208.514 80.38ZM211.433 98.62V80.38L216.313 75.5H230.153L235.033 80.38V98.62L230.153 103.5H216.313L211.433 98.62ZM218.393 81.34V97.66H228.073V81.34H218.393ZM238.62 98.62V80.38L243.5 75.5H257.58V81.62H245.58V97.38H257.98V103.5H243.5L238.62 98.62ZM260.847 98.62V80.38L265.727 75.5H279.807V81.62H267.807V97.38H280.207V103.5H265.727L260.847 98.62ZM306.553 103.5H299.953V85.02L289.553 103.5H283.193V75.5H289.793V93.98L300.193 75.5H306.553V103.5ZM333.741 103.5H327.141V85.02L316.741 103.5H310.381V75.5H316.981V93.98L327.381 75.5H333.741V103.5Z" fill="#231F20"/>
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
                title: 'При покупке любой модели техники SHACMAN полный бак топлива в подарок',
                notes: [
                    "*Акция действует до 30 июня 2024г.",
                    'Подробности узнавайте у менеджеров компании KOMTRANS Group'
                ]
            },{
                image: '/img/main-window/akciya-shacman-2.webp',
                title: 'Сервис SHACMAN <br/>Скидка на ремонт подвески кабины - 30%',
                notes: [
                    "*Акция действует до 30 июня 2024г.",
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