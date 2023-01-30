<template>
    <div>
        <MainWindow
            link="/product-category/"
            btnTitle="Перейти в каталог"
            title="Официальный&nbsp;дилер  спецтехники Shacman в&nbsp;России"
            :slides="['/img/main-window/xcmg-slider-general.jpg']"
        />
        <v-container class="content-padding">
            <v-row align="center" class="block-padding">
                <v-col cols="12" lg="6">
                    <div class="mr-xl-9 mr-lg-4">
                        <h2 class="text-uppercase mb-md-14 mb-9">
                            Немного о&nbsp;«KOMTRANS&nbsp;<span
                                class="text-none"
                                >Group</span
                            >»
                        </h2>
                        <p>
                            Компания основана в 2009 году и на протяжении многих
                            лет успешно реализует спецтехнику Shacman. За время
                            работы открыто 28 филиалов по всей стране,
                            собственные сервисные центры и склад запасных частей
                            для спецтехники и грузовых автомобилей. В штате
                            компании 14 выездных бригад для обслуживания техники
                            по месту её работы.
                        </p>
                        <p class="pb-14 mb-md-0">
                            Мы делаем акцент на подбор техники под конкретную
                            задачу, поставляем более 1000 единиц спецтехники
                            в год. Входим в топ-3 дилеров Shacman в России.
                        </p>
                        <v-row align="center" class="pb-9 pb-lg-0">
                            <v-col cols="12" sm="6">
                                <nuxt-link
                                    to="/about/"
                                    class="
                                        big-main-text
                                        href-primary
                                        underline-href
                                        text-none
                                        font-weight-bold
                                    "
                                >
                                    Узнать подробнее
                                </nuxt-link>
                            </v-col>
                        </v-row>
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
                            class="card-info"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 494 165"
                            fill="none"
                        >
                            <path
                                d="M73.5 93.8297V108.43H19.5V70.9297L56.7 65.9297V53.0297H19.9V38.4297H61.3L73.5 50.6297V77.6297L36.3 82.6297V93.8297H73.5ZM86.0883 108.43L117.688 62.3297V52.4297H97.1883V63.6297H81.0883V38.4297H134.488V64.8297L106.188 108.43H86.0883Z"
                                fill="#FEC210"
                            />
                            <path
                                d="M154.8 54.7297V41.1297L159.44 36.4897H166.72V33.9297H172.96V36.4897H180.24L184.88 41.1297V54.7297L180.24 59.3697H172.96V61.9297H166.72V59.3697H159.44L154.8 54.7297ZM161.28 41.8497V54.0097H166.72V41.8497H161.28ZM178.4 41.8497H172.96V54.0097H178.4V41.8497ZM211.952 61.9297H205.352V43.4497L194.952 61.9297H188.592V33.9297H195.192V52.4097L205.592 33.9297H211.952V61.9297ZM238.859 33.9297V61.9297H232.139V39.8497H225.739L221.419 61.9297H214.299L220.219 33.9297H238.859ZM266.053 61.9297H259.453V43.4497L249.053 61.9297H242.693V33.9297H249.293V52.4097L259.693 33.9297H266.053V61.9297ZM268.401 61.9297L274.561 33.9297H287.601L293.761 61.9297H286.641L285.481 55.9297H276.681L275.521 61.9297H268.401ZM277.521 51.0897H284.641L282.321 39.2497H279.841L277.521 51.0897ZM319.211 33.9297V61.9297H312.491V39.8497H306.091L301.771 61.9297H294.651L300.571 33.9297H319.211ZM322.925 57.0497V38.8097L327.805 33.9297H341.645L346.525 38.8097V57.0497L341.645 61.9297H327.805L322.925 57.0497ZM329.885 39.7697V56.0897H339.565V39.7697H329.885ZM372.473 38.5697V45.1697L370.113 47.1297L373.273 49.7697V57.2897L368.633 61.9297H350.233V33.9297H367.833L372.473 38.5697ZM356.953 45.2497H365.633V39.2897H356.953V45.2497ZM356.953 56.5697H366.313V49.8897H356.953V56.5697ZM154.92 109.93V81.9297H177.08V109.93H170.36V87.7697H161.64V109.93H154.92ZM180.816 105.05V86.8097L185.696 81.9297H199.536L204.416 86.8097V105.05L199.536 109.93H185.696L180.816 105.05ZM187.776 87.7697V104.09H197.456V87.7697H187.776ZM240.514 86.8097V99.0497L235.634 103.93H225.234V109.93H218.514V81.9297H235.634L240.514 86.8097ZM225.234 98.5697H233.794V87.2897H225.234V98.5697ZM243.433 105.05V86.8097L248.313 81.9297H262.153L267.033 86.8097V105.05L262.153 109.93H248.313L243.433 105.05ZM250.393 87.7697V104.09H260.073V87.7697H250.393ZM270.62 105.05V86.8097L275.5 81.9297H289.58V88.0497H277.58V103.81H289.98V109.93H275.5L270.62 105.05ZM292.847 105.05V86.8097L297.727 81.9297H311.807V88.0497H299.807V103.81H312.207V109.93H297.727L292.847 105.05ZM338.553 109.93H331.953V91.4497L321.553 109.93H315.193V81.9297H321.793V100.41L332.193 81.9297H338.553V109.93ZM365.741 109.93H359.141V91.4497L348.741 109.93H342.381V81.9297H348.981V100.41L359.381 81.9297H365.741V109.93Z"
                                fill="#231F20"
                            />
                        </svg>
                        <svg-map
                            city-slug="krasnoyarsk"
                            :contacts="contacts"
                        ></svg-map>
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
                        <p class="card-title primary-text text-uppercase">
                            Оплата
                        </p>
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
                        <p class="card-title primary-text text-uppercase">
                            Доставка
                        </p>
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

            <!-- <BlogList :isMain="true"/> -->

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
                    element.children.forEach((category) => {
                        this.catalogSpec.push(category);
                    });
                }
            });
        },
    },
    computed: {
        ...mapState(["categories"]),
        ...mapGetters({
            contacts: "getContacts",
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
</style>