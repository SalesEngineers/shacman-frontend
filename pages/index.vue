<template>
    <div>
        <MainWindow
            :slides="slides"
        ></MainWindow>
        <v-container class="content-padding">
            <v-row align="center" class="block-padding">
                <v-col cols="12" lg="6">
                    <div class="mr-xl-9 mr-lg-4">
                        <h2 class="text-uppercase mb-md-14 mb-9">
                            Немного о&nbsp;«KOMTRANS&nbsp;
                            <span class="text-none">Group</span>»
                        </h2>
                        <p>
                            Компания основана в 2009 году и на протяжении многих
                            лет успешно реализует спецтехнику Shacman. За время
                            работы открыто 28 филиалов по всей стране,
                            собственные сервисные центры и склад запасных частей
                            для спецтехники и грузовых автомобилей. В штате
                            компании 14 выездных бригад для обслуживания техники
                            по месту её работы.
                        </p>
                        <p class="pb-14 mb-md-0">
                            Мы делаем акцент на подбор техники под конкретную
                            задачу, поставляем более 1000 единиц спецтехники
                            в год. Входим в топ-3 дилеров Shacman в России.
                        </p>
                        <v-row align="center" class="pb-9 pb-lg-0">
                            <v-col cols="12" sm="6">
                                <nuxt-link
                                    to="/about/"
                                    class="big-main-text href-primary underline-href text-none font-weight-bold"
                                >Узнать подробнее</nuxt-link>
                            </v-col>
                        </v-row>
                    </div>   
                    <div v-if="settings.video" class="pt-14">
                        <iframe loading="lazy" class="iframe-video" :src="settings.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>                  
                </v-col>
                <v-col cols="12" lg="6">
                    <CollageMain />
                </v-col>
            </v-row>

            <div class="block-padding">
                <h2 class="mb-md-14 mb-9 text-uppercase">Наши филиалы</h2>

                <client-only>
                    <div class="svg-map-container">
                        <svg
                            width="376"
                            height="126"
                            viewBox="0 0 376 126"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M58.5 85.8297V100.43H4.5V62.9297L41.7 57.9297V45.0297H4.9V30.4297H46.3L58.5 42.6297V69.6297L21.3 74.6297V85.8297H58.5ZM78.3883 100.43L66.1883 88.2297V71.0297L75.0883 63.8297L68.1883 58.3297V42.6297L80.3883 30.4297H111.388L123.588 42.6297V58.3297L116.688 63.8297L125.588 71.0297V88.2297L113.388 100.43H78.3883ZM86.1883 58.7297H105.588V43.8297H86.1883V58.7297ZM84.7883 87.0297H107.888V70.3297H84.7883V87.0297Z"
                                fill="#FEC210"
                            />
                            <path
                                d="M145.8 46.7297V33.1297L150.44 28.4897H157.72V25.9297H163.96V28.4897H171.24L175.88 33.1297V46.7297L171.24 51.3697H163.96V53.9297H157.72V51.3697H150.44L145.8 46.7297ZM152.28 33.8497V46.0097H157.72V33.8497H152.28ZM169.4 33.8497H163.96V46.0097H169.4V33.8497ZM202.952 53.9297H196.352V35.4497L185.952 53.9297H179.592V25.9297H186.192V44.4097L196.592 25.9297H202.952V53.9297ZM229.859 25.9297V53.9297H223.139V31.8497H216.739L212.419 53.9297H205.299L211.219 25.9297H229.859ZM257.053 53.9297H250.453V35.4497L240.053 53.9297H233.693V25.9297H240.293V44.4097L250.693 25.9297H257.053V53.9297ZM259.401 53.9297L265.561 25.9297H278.601L284.761 53.9297H277.641L276.481 47.9297H267.681L266.521 53.9297H259.401ZM268.521 43.0897H275.641L273.321 31.2497H270.841L268.521 43.0897ZM310.211 25.9297V53.9297H303.491V31.8497H297.091L292.771 53.9297H285.651L291.571 25.9297H310.211ZM313.925 49.0497V30.8097L318.805 25.9297H332.645L337.525 30.8097V49.0497L332.645 53.9297H318.805L313.925 49.0497ZM320.885 31.7697V48.0897H330.565V31.7697H320.885ZM363.473 30.5697V37.1697L361.113 39.1297L364.273 41.7697V49.2897L359.633 53.9297H341.233V25.9297H358.833L363.473 30.5697ZM347.953 37.2497H356.633V31.2897H347.953V37.2497ZM347.953 48.5697H357.313V41.8897H347.953V48.5697ZM145.92 101.93V73.9297H168.08V101.93H161.36V79.7697H152.64V101.93H145.92ZM171.816 97.0497V78.8097L176.696 73.9297H190.536L195.416 78.8097V97.0497L190.536 101.93H176.696L171.816 97.0497ZM178.776 79.7697V96.0897H188.456V79.7697H178.776ZM231.514 78.8097V91.0497L226.634 95.9297H216.234V101.93H209.514V73.9297H226.634L231.514 78.8097ZM216.234 90.5697H224.794V79.2897H216.234V90.5697ZM234.433 97.0497V78.8097L239.313 73.9297H253.153L258.033 78.8097V97.0497L253.153 101.93H239.313L234.433 97.0497ZM241.393 79.7697V96.0897H251.073V79.7697H241.393ZM261.62 97.0497V78.8097L266.5 73.9297H280.58V80.0497H268.58V95.8097H280.98V101.93H266.5L261.62 97.0497ZM283.847 97.0497V78.8097L288.727 73.9297H302.807V80.0497H290.807V95.8097H303.207V101.93H288.727L283.847 97.0497ZM329.553 101.93H322.953V83.4497L312.553 101.93H306.193V73.9297H312.793V92.4097L323.193 73.9297H329.553V101.93ZM356.741 101.93H350.141V83.4497L339.741 101.93H333.381V73.9297H339.981V92.4097L350.381 73.9297H356.741V101.93Z"
                                fill="#231F20"
                            />
                        </svg>
                        <svg-map :city-slug="dynamicContact.slug" :contacts="contacts"></svg-map>
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
                            осуществлять разборку спецтехники, погрузку, увязку,
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
            content="Квалифицированный менеджер поможет с&nbsp;выбором спецтехники под&nbsp;вашу задачу и&nbsp;ответит на&nbsp;любой вопрос"
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
            title: "Продажа грузовых автомобилей Shacman Shaanxi от официального дилера",
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
                title: 'Новый Shacman X6000 уже в продаже',
                link: '/product-category/x6000/',
                btnTitle: 'Перейти в каталог',
                image: '/img/main-window/slide-1.webp'
            },{
                title: 'Официальный&nbsp;дилер  спецтехники Shacman в&nbsp;России',
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
}
.card-info {
    position: absolute;
    z-index: 1;
    max-width: 500px;
    width: 50vw;
    left: 0;
    top: 0;
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
.iframe-video {
  width: 100%;
  height: 30vw;
  max-height: 340px;
  display: block;
}
</style>