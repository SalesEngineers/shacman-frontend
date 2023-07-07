<template>
    <div>
        <v-container class="content-padding">
            <div class="block-padding">
                <h1 class="mb-md-14 mb-9">
                    {{ product.name }}
                </h1>
                <v-row>
                    <v-col cols="12" md="6">
                        <div>
                            <div class="main-photo-card">
                                <div class="photo-box">
                                    <img :src="mainImgUrl" :alt="mainImgAlt" :title="mainImgTitle"/>
                                </div>
                                <div class="thumbs" v-if="product.images.length != 0">                                       
                                    <template v-if="product.images.length != 0">                              
                                        <img @click="changeMainPhoto(item, index)" v-for="item, index in product.images" :class="activeSlide == index ? 'active-slide' : ''" :key="index" :src="item.url" :alt="item.alt" :title="item.title"/>
                                    </template>
                                </div>  
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="product-content product-card-text mb-5">
                            <div class="d-flex flex-wrap mb-lg-10 mb-sm-9 mb-8 mb-8">
                                <span v-for="(item, index) in product.labels"
                                    :key="index"
                                    class="px-2 py-1 text-lowercase product-content__label mr-4 mb-2 d-block" :style="'background-color:' + item.color + ';color:white'">
                                    {{ item.name }}
                                </span>
                                <nuxt-link to="/parts/" class="mr-4 mb-2">
                                    <span class="px-2 py-1 text-lowercase product-content__label product-content__label_parts d-block">
                                        запчасти
                                    </span>
                                </nuxt-link>
                                <nuxt-link to="/service/" class="mb-2">
                                    <span class="px-2 py-1 text-lowercase product-content__label product-content__label_service d-block">
                                        сервис
                                    </span>
                                </nuxt-link>
                            </div>
                            <div class="mb-lg-11 mb-sm-10 mb-9 product-characteristics" v-if="mainCharacteristics.length != 0">
                                <div class="d-flex justify-space-between" v-for="(item, index) in mainCharacteristics"
                                    :key="index">
                                    <p class="font-weight-bold">{{ item.name }}</p>
                                    <p>{{ item.value }}</p>
                                </div>
                            </div>
                            <div class="product-links test-drive-link__wrapeer">
                                <v-btn height="44px" color="primary" class="big-main-text modal-window_button text-none font-weight-bold" @click="$store.commit('onModalWindow', {title: 'Узнать цену', btnName: 'Узнать цену', text: '<strong>' + product.name + '</strong>'})">Узнать цену</v-btn>

                                <!-- <span class="sub-primary-text href-primary underline-href font-weight-bold" @click="$store.commit('onModalWindow', {title: 'Записаться на тест-драйв', btnName: 'Записаться'})">Записаться на тест-драйв</span> -->
                                
                            </div>
                        </div>
                        <div class="lizing-content test-drive-link__wrapeer">
                            <p class="mb-0 font-weight-bold text-uppercase">{{ product.categories[product.categories.length - 1].name }} XCMG в лизинг</p>
                            <p class="mb-5">с первоначальным взносом от 10%</p>
                            <span class="product-card-text href-primary underline-href font-weight-bold" @click="$store.commit('onModalWindow', {title: 'Рассчитать лизинг', btnName: 'Рассчитать'})">Рассчитать лизинг</span>
                        </div>
                    </v-col>
                </v-row>
         
            </div>

            <div class="block-padding main-content-product">
                <v-tabs
                    v-model="tab"
                    show-arrows
                    center-active
                >
                    <v-tab
                        class="text-none font-weight-bold"
                    >
                        Характеристики
                    </v-tab>

                    <v-tab
                        v-if="product.content"
                        class="text-none font-weight-bold"
                    >
                        Описание
                    </v-tab>

                    <v-tab
                        v-if="product.dimension.width || product.dimension.height || product.dimension.length || product.dimension.image_list"
                        class="text-none font-weight-bold"
                    >
                        Габариты
                    </v-tab>
                    
                </v-tabs>
                <v-tabs-items v-model="tab">

                    <v-tab-item>  
                        <v-card>

                            <p class="font-weight-bold mb-8">Рабочие показатели:</p>
                            <div class="column-content" v-if="characteristics.length != 0">
                                <div class="d-flex justify-space-between " v-for="(item, index) in characteristics"
                                    :key="index">
                                    <p class="pr-1">{{ item.name }}: </p>
                                    <p>{{ item.value }}</p>
                                </div>
                            </div>
                            <div v-else>
                                <p class="font-weight-bold">Уточняйте у менеджера</p>
                            </div>
                        </v-card>
                    </v-tab-item>

                    <v-tab-item v-if="product.content">  
                        <v-card>

                            <div class="column-content">
                                <p v-html="product.content">
                                </p>
                            </div>

                        </v-card>
                    </v-tab-item>

                    <v-tab-item v-if="product.dimension.width || product.dimension.height || product.dimension.length || product.dimension.image_list">  
                        <v-card>
                            <v-row>
                                <template v-if="product.dimension.image_list && product.dimension.image_list.length != 0">
                                    <v-col cols="12" md="6" v-for="(item, index) in product.dimension.image_list" :key="index">
                                        <v-img
                                            :src="item"
                                            height="400"
                                        ></v-img>
                                    </v-col>
                                </template>
                                <v-col cols="12" md="6" v-if="product.dimension.width || product.dimension.height || product.dimension.length">
                                    <div class="d-flex justify-space-between" v-if="product.dimension.width">
                                        <p>Ширина, мм</p>
                                        <p>{{ product.dimension.width }}</p>
                                    </div>
                                    <div class="d-flex justify-space-between" v-if="product.dimension.height">
                                        <p>Высота, мм</p>
                                        <p>{{ product.dimension.height }}</p>
                                    </div>
                                    <div class="d-flex justify-space-between" v-if="product.dimension.length">
                                        <p>Длина, мм</p>
                                        <p>{{ product.dimension.length }}</p>
                                    </div>
                                </v-col>

                            </v-row>
                        </v-card>
                    </v-tab-item>

                </v-tabs-items>
            </div>
            

            <div style="display: none;" v-if="product.script" v-html="product.script"></div>


            <div class="download-block block-padding" v-if="product.attachments && product.attachments.length != 0">
                <h2 class="mb-md-14 mb-9 text-uppercase">
                    Материалы для скачивания
                </h2>
                <v-row>
                    <v-col cols="12" md="6" v-for="(item, index) in product.attachments" :key="index" @mouseenter="hoverEvent(index)" @mouseleave='hoverEvent(null)'>
                        <a target="_blank" :href="item.url">
                            <v-card class="shadow-text-card" :class="hoverDownload == index ? 'active-download-card' : ''">
                                <svg class="mr-6" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.791667 17.4167H18.2083C18.4183 17.4167 18.6197 17.5001 18.7681 17.6485C18.9166 17.797 19 17.9984 19 18.2083C19 18.4183 18.9166 18.6197 18.7681 18.7681C18.6197 18.9166 18.4183 19 18.2083 19H0.791667C0.581704 19 0.38034 18.9166 0.231874 18.7681C0.0834077 18.6197 0 18.4183 0 18.2083C0 17.9984 0.0834077 17.797 0.231874 17.6485C0.38034 17.5001 0.581704 17.4167 0.791667 17.4167ZM10.2917 11.1403L15.7838 5.64673C15.979 5.45143 16.2957 5.4514 16.4909 5.64668L16.9032 6.05898C17.0985 6.25423 17.0985 6.57079 16.9033 6.76605L9.42083 14.25L1.93689 6.76605C1.74162 6.57079 1.74162 6.25421 1.93689 6.05895L2.3492 5.64664C2.54446 5.45137 2.86104 5.45138 3.0563 5.64664L8.70833 11.2987V0.5C8.70833 0.223857 8.93219 0 9.20833 0H9.79167C10.0678 0 10.2917 0.223858 10.2917 0.5V11.1403Z" fill="#FEC210"/>
                                </svg>
                                <span class="card-title text-uppercase">{{ item.name }}</span>
                            </v-card>
                        </a>
                    </v-col>
                </v-row>
            </div>            

            <div class="advantages-block block-padding" v-if="product.advantages && product.advantages.length != 0">
                <h2 class="mb-md-14 mb-9 text-uppercase">
                    Конструктивные преимущества
                </h2>
                <v-row class="align-center" :class="[++index % 2 ? '' : 'flex-row-reverse', item == product.advantages[product.advantages.length - 1]  ? '' : 'mb-md-14 mb-10']" v-for="item, index in product.advantages" :key="index">
                    <template>
                        <v-col cols="12" md="6">
                            <h3 class="mb-9">
                                0{{ index }}. {{ item.name }}
                            </h3>
                            <p v-html="item.content">
                            </p>
                        </v-col>
                        <v-col cols="12" md="6" v-if="item.image">
                            <img :src="item.image.url" :alt="item.image.alt" :title="item.image.title">
                        </v-col>
                    </template>
                </v-row>
            </div>

            <div v-if="product.video" class="block-padding">
              <v-row>
                <v-col sm="6" md="3" lg="4">
                  <div class="iframe-video-block">
                    <iframe loading="lazy" :src="videoYoutube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                <h2 class="mb-md-14 mb-9 text-uppercase">
                Оплата и доставка
                </h2>
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
                        <p>Доставка возможна эвакуатором, фурой, ЖД&nbsp;транспортом. Служба доставки может осуществлять разборку спецтехники, погрузку, увязку, доставку, разгрузку, сборку, ТО на&nbsp;месте эксплуатации &nbsp;передачу покупателю. Ответственность за&nbsp;время всех работ и&nbsp;доставки несет компания.</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-card class="shadow-text-card">
                        <p class="card-title primary-text text-uppercase">Гарантия</p>
                        <p>Одна из самых долгих гарантий на рынке спецтехники — 24&nbsp;месяца или 3000&nbsp;моточасов.</p>
                        </v-card>
                    </v-col>
                </v-row>
            </div>

            <div class="block-padding" v-if="product.equipments && product.equipments.length != 0">
                <h2 class="mb-md-14 mb-9 text-uppercase">
                    Навесное оборудование для этой модели
                </h2>
                <CatalogNaves :items="product.equipments"/>
            </div>

            <Services :images="['/img/services/service.jpg','/img/services/parts.jpg','/img/services/lizing.jpg']"/>

            <Feedback/>
            
            <v-contacts></v-contacts>
        </v-container>
        <FeedbackMan title="Подберём технику специально для вас!" content="Квалифицированный менеджер поможет с выбором спецтехники под вашу задачу и ответит на любой вопрос" btnTitle="Подобрать технику"/>
    </div>
</template>

<script>
import VContacts from '~/components/VContacts/index.vue'
import FeedbackMan from '~/components/Feedback_man.vue'
import Services from '~/components/Services.vue'
import CatalogNaves from '~/components/Catalog_navesnoe_list.vue'
import Feedback from '~/components/Feedback.vue'

const YOUTUBE_REG = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;

export default {
    components: {
        VContacts,
        FeedbackMan,
        Services,
        CatalogNaves,
        Feedback
    },
    data() {
        return {
            tab: null,
            hoverDownload: null,
            product: null,
            characteristics: [],
            mainCharacteristics: [],
            showYouTube: false,
            mainImgUrl: '',
            mainImgAlt: '',
            mainImgTitle: '',
            activeSlide: 0,
        }
    },
    computed: {
        videoYoutube() {
            if (!this.product.video) return null;

            const video = this.product?.video.match(YOUTUBE_REG);
            
            if (video[1]) {
                return `https://www.youtube.com/embed/${video[1]}`;
            }

            return null;
        }
    },
    head () {
        return {
            title: this.product.seo.title,
            meta: [
                { charset: 'utf-8' },
                { hid: 'description', name: 'description', content: this.product.seo.description},
                { hid: 'keywords', name: 'keywords', content: this.product.seo.keywords}
            ]
        }
    },
    async asyncData ({ $axios, error, route }) {
        const productUrl = route.params.product
        let product = null

        product = await $axios.get('/products/' + productUrl)
        .then((res) => {
            const temps = res.data.data
            return temps
        }).catch((e) => {
            console.log(e)
            error({ statusCode: 404, message: 'Страница не найдена' })
        })

        return { product: product };
    },
    created() {
        this.$store.commit('onVisabilityHeader')
        this.$store.commit('setBreadCrumbs', 
        [
            {
            text: 'Официальный дилер Shacman',
            disabled: false,
            href: '/',
            position: 1,
            },
            {
            text: 'Каталог',
            disabled: false,
            href: '/product-category/',
            position: 2,
            },
            {
            text: this.product.categories[this.product.categories.length - 1].name,
            disabled: false,
            href: '/product-category/' + this.product.categories[this.product.categories.length - 1].url + '/',
            position: 3,
            },
            {
            text: this.product.name,
            disabled: true,
            href: '',
            position: 4,
            },            
        ])

        //Главное изображение
        if (this.product.images.length != 0) {
            this.mainImgUrl = this.product.images[0].url
            this.mainImgAlt = this.product.images[0].alt 
            this.mainImgTitle = this.product.images[0].title 
        } else {
            this.mainImgUrl = '/img/no_photo.svg'
            this.mainImgAlt = 'Нет фотографии'
            this.mainImgTitle = "Нет фотографии"
        }

        //Главные характеристики
        this.characteristics = this.product.characteristics
        this.product.characteristics.forEach((char) => {
            this.product.categories[this.product.categories.length - 1].product_main_characteristic_ids.forEach(mainChar => {
                if(char.id == mainChar) {
                    this.mainCharacteristics.push(char)
                    this.characteristics = this.characteristics.filter(function(item) {
                        return item !== char
                    })
                }
            });
        });  
    },
    methods: {
        hoverEvent(index) {
            this.hoverDownload = index;
        },
        changeMainPhoto(item, index) {
            this.mainImgUrl = item.url
            this.mainImgAlt = item.alt 
            this.mainImgTitle = item.title 
            this.activeSlide = index
        }
    }
}
</script>

<style lang="scss" scoped>
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
            transition: .5s;
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
        scrollbar-color: #0154A6 #DFE9EB;
    }
    /* Chrome, Edge and Safari */
    .thumbs::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    .thumbs::-webkit-scrollbar-track {
        border-radius: 6px;
        background-color: #DFE9EB;
    }
    .thumbs::-webkit-scrollbar-track:hover {
        background-color: #CED7DA;
    }
    .thumbs::-webkit-scrollbar-track:active {
        background-color: #CED7DA;
    }
    .thumbs::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #FEC210;
    }
    .video-wrapper {
        position: relative;
    }
    .btn-close {
        position: absolute;
        right: 25px;
        top: 25px;
        font-size:35px;
        transform:rotate(45deg);
    }
    .product-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .active-slide {
        outline: 2px solid $hover-color;
    }
    .product-content span, .lizing-content span {
        transition: .5s all;
    } 
    .product-content__label {
        border-radius: 4px;
    }
    .product-content__label_parts {
        color: white;
        background-color: #8EC31E;
        transition: .5s;
    }
    .product-content__label_parts:hover {
        background-color: #74aa00;
    }
    .product-content__label_service {
        color:white;
        background-color: #1FB0E6;
        transition: .5s;
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
    .download-block .v-card{
        transition: .5s all;
    }
    .download-block span {
        transition: .5s all;
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
        &:hover{
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
        .product-links {
            flex-direction: column;
        }
        .product-links .v-btn {
            width: 100%;
            margin-bottom: 20px;
        }
    }
</style>