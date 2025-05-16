<template>
    <div>
        <v-container class="content-padding">
            <div class="block-padding">
                <h1 class="mb-md-14 mb-9">{{ product.name }}</h1>
                <v-row>
                    <v-col cols="12" md="6">
                        <div>
                            <div class="main-photo-card">
                                <div class="photo-box">
                                    <img :src="mainImgUrl" :alt="mainImgAlt" :title="mainImgTitle" />
                                    <div v-if="product.is_out_of_production" class="label-wrapper">
                                        <div class="label" style="background-color: #8D8D8D;">
                                            <span>Снят с производства</span>
                                        </div>
                                        <svg
                                            width="17"
                                            height="36"
                                            viewBox="0 0 17 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M0 0H17L2.55556 36H0V0Z" fill="#8D8D8D" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="thumbs" v-if="product.images.length != 0">
                                    <template v-if="product.images.length != 0">
                                        <img
                                            @click="changeMainPhoto(item, index)"
                                            v-for="item, index in product.images"
                                            :class="activeSlide == index ? 'active-slide' : ''"
                                            :key="index"
                                            :src="item.url"
                                            :alt="item.alt"
                                            :title="item.title"
                                        />
                                    </template>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="product-content product-card-text mb-5">
                            <!-- <div class="d-flex flex-wrap mb-lg-10 mb-sm-9 mb-8 mb-8">
                                <span
                                    v-for="(item, index) in product.labels"
                                    :key="index"
                                    class="px-2 py-1 text-lowercase product-content__label mr-4 mb-2 d-block"
                                    :style="'background-color:' + item.color + ';color:white'"
                                >
                                    <component :is="item?.noindex ? 'noindex' : ''">{{ item.name }}</component>
                                </span>
                                <nuxt-link to="/parts/" class="mr-4 mb-2">
                                    <span
                                        class="px-2 py-1 text-lowercase product-content__label product-content__label_parts d-block"
                                    >запчасти</span>
                                </nuxt-link>
                                <nuxt-link to="/service/" class="mb-2">
                                    <span
                                        class="px-2 py-1 text-lowercase product-content__label product-content__label_service d-block"
                                    >сервис</span>
                                </nuxt-link>
                            </div> -->
                            <div
                                class="mb-lg-11 mb-sm-10 mb-9 product-characteristics"
                                v-if="mainCharacteristics.length != 0"
                            >
                                <div
                                    class="d-flex justify-space-between"
                                    v-for="(item, index) in mainCharacteristics"
                                    :key="index"
                                >
                                    <p class="font-weight-bold">{{ item.name }}</p>
                                    <p>{{ item.value }}</p>
                                </div>
                            </div>
                            <div class="product-links test-drive-link__wrapeer">
                                <v-btn
                                    v-if="product.is_out_of_production"
                                    height="44px"
                                    color="primary"
                                    class="big-main-text modal-window_button text-none font-weight-bold"
                                    @click="$store.commit('onModalWindow', {title: 'Подобрать аналог', btnName: 'Подобрать аналог', text: '<strong>' + product.name + '</strong>'})"
                                >Подобрать аналог</v-btn>
                                <v-btn
                                    v-else
                                    height="44px"
                                    color="primary"
                                    class="big-main-text modal-window_button text-none font-weight-bold"
                                    @click="$store.commit('onModalWindow', {title: 'Узнать цену', btnName: 'Узнать цену', text: '<strong>' + product.name + '</strong>'})"
                                >Узнать цену</v-btn>

                                <!-- <span class="sub-primary-text href-primary underline-href font-weight-bold" @click="$store.commit('onModalWindow', {title: 'Записаться на тест-драйв', btnName: 'Записаться'})">Записаться на тест-драйв</span> -->
                            </div>
                        </div>
                        <!-- <div class="lizing-content test-drive-link__wrapeer">
                            <p
                                class="mb-0 font-weight-bold text-uppercase"
                            >{{ product.categories[product.categories.length - 1].name }} в лизинг</p>
                            <p :class="{'mb-5':!product.is_out_of_production, 'mb-0': product.is_out_of_production}">с первоначальным взносом от 10%</p>
                            <span
                                v-if="!product.is_out_of_production"
                                class="product-card-text href-primary underline-href font-weight-bold"
                                @click="$store.commit('onModalWindow', {title: 'Рассчитать лизинг', btnName: 'Рассчитать'})"
                            >Рассчитать лизинг</span>
                        </div> -->
                    </v-col>
                </v-row>
                <div class="mt-10">
                    <v-row>
                        <v-col cols="12" md="4" class="mb-sm-3">
                            <div class="utp">
                                <div class="utp-title mb-4">Стоимость доставки до места эксплуатации</div>
                                <div>
                                    <p class="mb-2">Тралом - <strong>160 рублей</strong> один километр</p>
                                    <p class="mb-0">Фурой - <strong>80 рублей</strong> километр</p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4" class="mb-sm-3">
                            <div class="utp">
                                <div class="utp-title mb-4">Срок поставки - 800 км в день до места эксплуатации</div>
                                <div class="mb-1"><strong>В доставку в ходит:</strong></div>
                                <p class="mb-0">Загрузка / Доставка / Разгрузка / Узловая сборка и тестирование / Ввод в эксплуатацию</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div class="utp">
                                <div class="utp-title mb-4">Максимально удобные условия лизинга -</div>
                                <p class="mb-0">первоначальный <strong>взнос</strong> от 0, <strong>срок</strong> от одного года до 5 лет</p>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>

            <div class="block-padding">
                <h2 class="mb-md-14 mb-9 text-uppercase">Характеристики</h2>
                <div class="block-padding main-content-product">
                    <Tabs @tab-changed="onTabChanged">
                        <Tab name="Основное" :index="0" :active-tab="activeTab">
                            <div v-if="groups.length">
                                <div class="mb-5 group" v-for="(group, i) in groups" :key="i">
                                    <div class="group-title" v-if="group.name">{{ group.name }}</div>
                                    <div class="column-content pb-2">
                                        <div
                                            class="d-flex justify-space-between product-characteristic"
                                            v-for="(item, j) in group.values"
                                            :key="j"
                                        >
                                            <p class="pr-2 product-characteristic-label">{{ item.name }}:</p>
                                            <p class="product-characteristic-value">{{ item.value }}</p>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                            <div v-else>
                                <p class="font-weight-bold">Уточняйте у менеджера</p>
                            </div>
                        </Tab>
                        <Tab name="Описание" :index="1" :active-tab="activeTab" v-if="product.content">
                            <p v-html="product.content"></p>
                        </Tab>
                        <Tab name="Габариты" :index="2" :active-tab="activeTab" v-if="product.dimension.width || product.dimension.height || product.dimension.length || product.dimension.image_list">
                            <v-row>
                                <template
                                    v-if="product.dimension.image_list && product.dimension.image_list.length != 0"
                                >
                                    <v-col
                                        cols="12"
                                        md="6"
                                        v-for="(item, index) in product.dimension.image_list"
                                        :key="index"
                                    >
                                        <v-img :src="item" height="400"></v-img>
                                    </v-col>
                                </template>
                                <v-col
                                    cols="12"
                                    md="6"
                                    v-if="product.dimension.width || product.dimension.height || product.dimension.length"
                                >
                                    <div
                                        class="d-flex justify-space-between"
                                        v-if="product.dimension.width"
                                    >
                                        <p>Ширина, мм</p>
                                        <p>{{ product.dimension.width }}</p>
                                    </div>
                                    <div
                                        class="d-flex justify-space-between"
                                        v-if="product.dimension.height"
                                    >
                                        <p>Высота, мм</p>
                                        <p>{{ product.dimension.height }}</p>
                                    </div>
                                    <div
                                        class="d-flex justify-space-between"
                                        v-if="product.dimension.length"
                                    >
                                        <p>Длина, мм</p>
                                        <p>{{ product.dimension.length }}</p>
                                    </div>
                                </v-col>
                            </v-row>
                        </Tab>
                    </Tabs> 
                </div>
            </div>

            <v-advantages :items="advantages" hide-title></v-advantages>

            <div style="display: none;" v-if="product.script" v-html="product.script"></div>

            <div
                class="download-block block-padding"
                v-if="product.attachments && product.attachments.length != 0"
            >
                <h2 class="mb-md-14 mb-9 text-uppercase">Материалы для скачивания</h2>
                <v-row>
                    <v-col
                        cols="12"
                        md="6"
                        v-for="(item, index) in product.attachments"
                        :key="index"
                        @mouseenter="hoverEvent(index)"
                        @mouseleave="hoverEvent(null)"
                    >
                        <a target="_blank" :href="item.url">
                            <v-card
                                class="shadow-text-card"
                                :class="hoverDownload == index ? 'active-download-card' : ''"
                            >
                                <svg
                                    class="mr-6"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.791667 17.4167H18.2083C18.4183 17.4167 18.6197 17.5001 18.7681 17.6485C18.9166 17.797 19 17.9984 19 18.2083C19 18.4183 18.9166 18.6197 18.7681 18.7681C18.6197 18.9166 18.4183 19 18.2083 19H0.791667C0.581704 19 0.38034 18.9166 0.231874 18.7681C0.0834077 18.6197 0 18.4183 0 18.2083C0 17.9984 0.0834077 17.797 0.231874 17.6485C0.38034 17.5001 0.581704 17.4167 0.791667 17.4167ZM10.2917 11.1403L15.7838 5.64673C15.979 5.45143 16.2957 5.4514 16.4909 5.64668L16.9032 6.05898C17.0985 6.25423 17.0985 6.57079 16.9033 6.76605L9.42083 14.25L1.93689 6.76605C1.74162 6.57079 1.74162 6.25421 1.93689 6.05895L2.3492 5.64664C2.54446 5.45137 2.86104 5.45138 3.0563 5.64664L8.70833 11.2987V0.5C8.70833 0.223857 8.93219 0 9.20833 0H9.79167C10.0678 0 10.2917 0.223858 10.2917 0.5V11.1403Z"
                                        fill="#FEC210"
                                    />
                                </svg>
                                <span class="card-title text-uppercase">{{ item.name }}</span>
                            </v-card>
                        </a>
                    </v-col>
                </v-row>
            </div>

            <div
                class="advantages-block block-padding"
                v-if="product.advantages && product.advantages.length != 0"
            >
                <h2 class="mb-md-14 mb-9 text-uppercase">Конструктивные преимущества</h2>
                <v-row
                    class="align-center"
                    :class="[++index % 2 ? '' : 'flex-row-reverse', item == product.advantages[product.advantages.length - 1]  ? '' : 'mb-md-14 mb-10']"
                    v-for="item, index in product.advantages"
                    :key="index"
                >
                    <template>
                        <v-col cols="12" md="6">
                            <h3 class="mb-9">0{{ index }}. {{ item.name }}</h3>
                            <p v-html="item.content"></p>
                        </v-col>
                        <v-col cols="12" md="6" v-if="item.image">
                            <img
                                :src="item.image.url"
                                :alt="item.image.alt"
                                :title="item.image.title"
                            />
                        </v-col>
                    </template>
                </v-row>
            </div>

            <div v-if="videoYoutube || videosYoutube.length" class="block-padding">
                <v-row>
                    <v-col v-if="videoYoutube" cols="12" md="6">
                        <div class="iframe-video-block">
                            <iframe
                                loading="lazy"
                                :src="videoYoutube"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </v-col>
                    <v-col v-for="(multipleVideoYoutube, i) in videosYoutube" :key="i" cols="12" md="6">
                        <div class="iframe-video-block">
                            <iframe
                                loading="lazy"
                                :src="multipleVideoYoutube"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </v-col>
                </v-row>
                <!--<svg @click="showYouTube = true" width="70" height="70" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="39" cy="39" r="35" fill="#0154A6"/>
                    <path d="M53 39.5L32.75 27.8087V51.1913L53 39.5Z" fill="white"/>
                    </svg>
                    <v-dialog
                        v-model="showYouTube"
                        max-width="900px"
                    >
                        <v-card class="video-wrapper">
                            <v-icon class="btn-close" color="primary" @click="showYouTube = false">mdi-plus</v-icon>
                            <iframe class="iframe-video" :src="videoYoutube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </v-card>
                </v-dialog>-->
            </div>

            <div class="block-padding">
                <h2 class="mb-md-14 mb-9 text-uppercase">Оплата и доставка</h2>
                <v-row>
                    <v-col cols="12" md="3">
                        <v-card class="shadow-text-card">
                            <p class="card-title primary-text text-uppercase">Оплата</p>
                            <p>Безналичная форма оплаты для юр.&nbsp;лиц, наличная форма оплаты, оплата банковскими картами, НДС.</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-card class="shadow-text-card">
                            <p class="card-title primary-text text-uppercase">Доставка</p>
                            <p>Доставка возможна эвакуатором, фурой, ЖД&nbsp;транспортом. Служба доставки может осуществлять разборку грузовой техники, погрузку, увязку, доставку, разгрузку, сборку, ТО на&nbsp;месте эксплуатации &nbsp;передачу покупателю. Ответственность за&nbsp;время всех работ и&nbsp;доставки несет компания.</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-card class="shadow-text-card">
                            <p class="card-title primary-text text-uppercase">Гарантия</p>
                            <p>Одна из самых долгих гарантий на рынке грузовой техники — 24&nbsp;месяца или 3000&nbsp;моточасов.</p>
                        </v-card>
                    </v-col>
                </v-row>
            </div>

            <div class="block-padding" v-if="product.equipments && product.equipments.length != 0">
                <h2 class="mb-md-14 mb-9 text-uppercase">Навесное оборудование для этой модели</h2>
                <CatalogNaves :items="product.equipments" />
            </div>

            <Services
                :images="['/img/services/service.jpg','/img/services/parts.jpg','/img/services/lizing.jpg']"
            />

            <Feedback />

            <v-contacts></v-contacts>
        </v-container>
        <FeedbackMan
            title="Подберём технику специально для вас!"
            content="Квалифицированный менеджер поможет с выбором грузовой техники под вашу задачу и ответит на любой вопрос"
            btnTitle="Подобрать технику"
        />
    </div>
</template>

<script>
import VContacts from "~/components/VContacts/index.vue";
import FeedbackMan from "~/components/Feedback_man.vue";
import Services from "~/components/Services.vue";
import CatalogNaves from "~/components/Catalog_navesnoe_list.vue";
import Feedback from "~/components/Feedback.vue";
import Tabs from "~/components/Tabs";
import Tab from "~/components/Tabs/Tab";

const YOUTUBE_REG =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;

export default {
    components: {
        VContacts,
        FeedbackMan,
        Services,
        CatalogNaves,
        Feedback,
        Tabs,
        Tab
    },
    data() {
        return {
            activeTab: 0,
            hoverDownload: null,
            product: null,
            characteristics: [],
            mainCharacteristics: [],
            showYouTube: false,
            mainImgUrl: "",
            mainImgAlt: "",
            mainImgTitle: "",
            activeSlide: 0,
            advantages: [{
                name: "KOMTRANS Group обладает крупнейшей сетью сервисных центров XCMG в России.",
                content: "<p>Только профессионалы с опытом работы и необходимыми сертификатами осуществляют ремонт спецтехники в короткие сроки.</p><p>30 выездных бригад для обслуживания техники на месте её работы.</p><p>От стандартной диагностики до полного восстановления - KOMTRANS Group справится с любой задачей.</p>",
                video: {
                    url: "https://rutube.ru/play/embed/72f8e9d233133b504d2abf6391449e48/",
                    title: ""
                }
            }, {
                name: "KOMTRANS Group — Обладает крупнейшим складом запасных частей в наличии для брендов XCMG, SHACMAN, DAYUN",
                content: "<p>Склады в Москве, Екатеринбурге, Новокузнецке, Красноярске, Иркутске, Хабаровске.</p><p>Оперативная обработка заказа и быстрая доставка по всей России.</p><p>Вы можете забрать заказ в одном из наших 28 филиалов или доставка транспортной компанией до удобного Вам места.</p><p>Гарантия на запчасти от производителя: Мы уверены в качестве своей продукции!</p><p>Широкий ассортимент, конкурентные цены и оперативные сроки.</p>",
                video: {
                    url: "https://rutube.ru/play/embed/422245ada96f19938b9b2d14e2e99c49/",
                    title: ""
                }
            }, {
                name: "Логистика в KOMTRANS Group это оптимальный способ доставки под вас: автотранспортом, железнодорожным транспортом, морским транспортом.",
                content: "<p>Доставляем технику в любую точку России, включая труднодоступные районы крайнего севера.</p><p>Собственный парк автовозов позволяет нам максимально сократить сроки и осуществлять выгодную доставку.</p><p>Обязательства по срокам доставки закреплены в договоре.</p>",
                video: {
                    url: "https://rutube.ru/play/embed/280dd40c96ecb120aad722172e72e48f/",
                    title: ""
                }
            }]
        };
    },
    computed: {
        videoYoutube() {
            if (!this.product.video) return null;

            const video = this.product?.video.match(YOUTUBE_REG);

            if (video[1]) {
                return `https://www.youtube.com/embed/${video[1]}`;
            }

            return null;
        },
        videosYoutube() {
            return (this.product?.videos || []).map(video => {
                const matched = video.match(YOUTUBE_REG);

                if (matched[1]) {
                    return `https://www.youtube.com/embed/${matched[1]}`;
                }

                return null;
            }).filter(video => video !== null);
        },
        groups() {
            const groups = new Map;

            this.characteristics.forEach(characteristic => {
                if (characteristic.groups.length) {
                    characteristic.groups.forEach(group => {
                        let items = { id: group.id, name: group.name, values: [] };
                        
                        if (groups.has(group.id)) {
                            items = groups.get(group.id);
                        }

                        items.values.push(characteristic);

                        groups.set(group.id, items);
                    });
                } else {
                    let items = { id: null, name: null, values: [] };

                    if (groups.has(null)) {
                        items = groups.get(null);
                    }

                    items.values.push(characteristic);

                    groups.set(null, items);
                }
            });

            return [...groups.values()];
        }
    },
    head() {
        return {
            title: this.product.seo.title,
            meta: [
                { charset: "utf-8" },
                {
                    hid: "description",
                    name: "description",
                    content: this.product.seo.description,
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: this.product.seo.keywords,
                },
            ],
            link: [
                {
                    rel: "preload",
                    as: "image",
                    href: "/img/logo_shacman.svg",
                },
                {
                    rel: "preload",
                    as: "image",
                    href: this.product.images.length
                        ? this.product.images[0]?.url
                        : "",
                },
            ],
        };
    },
    async asyncData({ $axios, error, route }) {
        const productUrl = route.params.product;
        let product = null;

        product = await $axios
            .get("/products/" + productUrl)
            .then((res) => {
                const temps = res.data.data;
                return temps;
            })
            .catch((e) => {
                console.log(e);
                error({ statusCode: 404, message: "Страница не найдена" });
            });

        return { product: product };
    },
    created() {
        this.$store.commit("onVisabilityHeader");
        this.$store.commit("setBreadCrumbs", [
            {
                text: "Официальный дилер Shacman",
                disabled: false,
                href: "/",
                position: 1,
            },
            {
                text: "Каталог",
                disabled: false,
                href: "/product-category/",
                position: 2,
            },
            {
                text: this.product.categories[
                    this.product.categories.length - 1
                ].name,
                disabled: false,
                href:
                    "/product-category/" +
                    this.product.categories[this.product.categories.length - 1]
                        .url +
                    "/",
                position: 3,
            },
            {
                text: this.product.name,
                disabled: true,
                href: "",
                position: 4,
            },
        ]);

        //Главное изображение
        if (this.product.images.length != 0) {
            this.mainImgUrl = this.product.images[0].url;
            this.mainImgAlt = this.product.images[0].alt;
            this.mainImgTitle = this.product.images[0].title;
        } else {
            this.mainImgUrl = "/img/no_photo.svg";
            this.mainImgAlt = "Нет фотографии";
            this.mainImgTitle = "Нет фотографии";
        }

        //Главные характеристики
        this.characteristics = [];
        
        this.product?.characteristics.forEach((char) => {
            if (char.is_main) {
                this.mainCharacteristics.push(char);
            } else {
                this.characteristics.push(char);
            }
        });
    },
    methods: {
        onTabChanged(index) {
            this.activeTab = index;
        },
        hoverEvent(index) {
            this.hoverDownload = index;
        },
        changeMainPhoto(item, index) {
            this.mainImgUrl = item.url;
            this.mainImgAlt = item.alt;
            this.mainImgTitle = item.title;
            this.activeSlide = index;
        },
    },
};
</script>

<style lang="scss" scoped>
.utp {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    font-size: 18px;

    @include md {
        font-size: 16px;
        padding-left: 0;
        padding-right: 0;
    }

    @include sm {
        text-align: left;
    }
}
.utp-title {
    text-transform: uppercase;
    font-weight: bold;    
    font-family: $title_bold, sans-serif;
    font-size: 20px;
    color: $primary-color;

    @include md {
        font-size: 18px;
    }
}
.product-price {
    font-size: 24px;
}
.group {
    border-bottom: 1px solid #dfe9eb;
    padding-bottom: 5px;
}
.group-title {
    border-left: 4px solid #dfe9eb;
    align-items: center;
    display: flex;
    padding-left: 8px;
    padding-bottom: 0 !important;
    margin-bottom: 14px;
    text-transform: none !important;
    font-size: 18px;
    color: #000;
    font-weight: bold;
}
.label-wrapper {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 25px;
    height: 36px;
    z-index: 1;

    .label {
        height: 100%;
        display: flex;
        align-items: center;
    }
    span {
        display: block;
        padding-left: 8px;
        font-size: 20px;
        text-transform: lowercase;
        color: white;
        font-weight: 800;

        @include sm {
            font-size: 16px;
        }
    }
}
h3 {
    font-family: $body-font-family;
}
.product-content {
    padding: 50px 40px;
    box-shadow: $card-shadow;
    border-radius: 4px;
}
.product-characteristics {
    padding: 0 20px;
}
.product-characteristic {
    line-height: 1.2;
}
.product-characteristic-label {
    min-width: 45%;
    font-weight: 700;
}
.lizing-content {
    padding: 30px 40px;
    background-color: $secondary-color;
    color: white;
    border-radius: 4px;
}
.photo-box img {
    width: 100%;
    height: 30vw;
    max-height: 500px;
    object-fit: cover;
    border-radius: 4px;
    display: block;
}
.photo-box {
    position: relative;
    width: 100%;
    max-height: 500px;
    object-fit: cover;
}
.thumbs {
    margin-top: 10px;
    padding: 10px 0px;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: center;
}
.thumbs img {
    border-radius: 4px;
    object-fit: cover;
    margin: 0px 5px;
    cursor: pointer;
    height: 78px;
    width: 120px;
}
.thumbs svg {
    margin-right: 10px;
    flex-shrink: 0;
    cursor: pointer;
    circle {
        transition: 0.5s;
    }
    &:hover {
        circle {
            fill: $hover-color;
        }
    }
}
/* Firefox */
.thumbs {
    scrollbar-width: thin;
    scrollbar-color: #0154a6 #dfe9eb;
}
/* Chrome, Edge and Safari */
.thumbs::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
.thumbs::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: #dfe9eb;
}
.thumbs::-webkit-scrollbar-track:hover {
    background-color: #ced7da;
}
.thumbs::-webkit-scrollbar-track:active {
    background-color: #ced7da;
}
.thumbs::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #fec210;
}
.video-wrapper {
    position: relative;
}
.btn-close {
    position: absolute;
    right: 25px;
    top: 25px;
    font-size: 35px;
    transform: rotate(45deg);
}
.product-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.active-slide {
    outline: 2px solid $hover-color;
}
.product-content span,
.lizing-content span {
    transition: 0.5s all;
}
.product-content__label {
    border-radius: 4px;
}
.product-content__label_parts {
    color: white;
    background-color: #8ec31e;
    transition: 0.5s;
}
.product-content__label_parts:hover {
    background-color: #74aa00;
}
.product-content__label_service {
    color: white;
    background-color: #1fb0e6;
    transition: 0.5s;
}
.product-content__label_service:hover {
    background-color: #007eac;
}
.product-card-text {
    font-size: 24px;
}
.main-content-product {
    box-shadow: $card-shadow !important;
    border-radius: 4px;
}
.main-content-product .v-item-group {
    padding: 70px 50px;
    border-radius: 4px;
}
.main-content-product .v-card {
    box-shadow: unset !important;
}
.main-content-product .v-tabs {
    border-radius: 4px;
}
.main-content-product .v-tab {
    letter-spacing: 0;
    font-size: 24px;
}
.main-content-product .v-tab--active:focus::before {
    border-radius: 4px;
}
.main-content-product .v-tab--active {
    color: black !important;
}
.active-download-card {
    background: $primary-color;
}
.active-download-card span {
    color: $hover-color;
}
.download-block .v-card {
    transition: 0.5s all;
}
.download-block span {
    transition: 0.5s all;
}
.advantages-block img {
    width: 100%;
    border-radius: 4px;
    box-shadow: $card-shadow;
    max-height: 500px;
    object-fit: cover;
}
.test-drive-link__wrapeer span {
    cursor: pointer;
    &:hover {
        color: $hover-color;
    }
}
@include lg {
    .product-card-text {
        font-size: 20px;
    }
    .product-content {
        padding: 30px 20px;
    }
    .product-characteristics {
        padding: 0 10px;
    }
    .lizing-content {
        padding: 20px;
    }
    .main-content-product .v-item-group {
        padding: 40px 30px;
    }
    .main-content-product .v-tab {
        font-size: 20px;
    }
}
@include md {
    .product-card-text {
        font-size: 16px;
    }
}
@include sm {
    .photo-box img {
        height: 50vw;
    }
    .product-content {
        box-shadow: unset;
    }
    .main-content-product .v-item-group {
        padding: 40px 20px;
    }
    .main-content-product .v-tab {
        font-size: 16px;
    }
}
@include xs {
    .content-padding {
        padding-top: 90px;
    }
    .photo-box img {
        height: 60vw;
    }
    .btn-close {
        right: 15px;
        top: 15px;
    }
    .product-characteristics {
        padding: 0;
    }
    .product-content {
        padding: 30px 0;
    }
}
@include xss {
    .product-price {
        text-align: right;
        width: 100%;
    }

    .product-links {
        flex-direction: column;
    }
    .product-links .v-btn {
        width: 100%;
        margin-bottom: 20px;
    }
}
</style>