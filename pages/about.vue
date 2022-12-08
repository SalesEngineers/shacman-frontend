<template>
    <div class="content-padding">
        <v-container>
            <v-row align="center" class="block-padding">
                <v-col cols="12" lg="6">
                    <div class="mr-xl-9 mr-lg-4">
                        <h1 class="text-uppercase mb-md-14 mb-9">
                            О бренде XCMG
                        </h1>
                        <p class="pb-9 pb-lg-0">
                            XCMG Group была основана в&nbsp;марте 1989&nbsp;года. На&nbsp;протяжении 30&nbsp;лет она всегда сохраняла лидирующие позиции в&nbsp;отрасли строительной техники Китая.<br><br>
                            Xugong Group&nbsp;&mdash; пятая по&nbsp;величине компания по&nbsp;производству строительной техники в&nbsp;мире. XCMG создала широкую сеть своих представительств, охватывающую более 2000 пунктов сервисного обслуживания, более 6000 технических специалистов и&nbsp;более 5000 специалистов по&nbsp;маркетингу и&nbsp;продажам, в&nbsp;183&nbsp;странах. Благодаря этому компания на&nbsp;постоянной основе предоставляет заказчикам во&nbsp;всем мире эффективные услуги по&nbsp;предпродажной подготовке, осуществляет продажи и&nbsp;послепродажное обслуживание оборудования, а&nbsp;также оказывает различные финансовые услуги. Это глобальный надежный поставщик строительного оборудования и&nbsp;услуг.
                        </p>    
                    </div>
                </v-col>
                <v-col cols="12" lg="6">
                    <CollageMain/>
                </v-col>
            </v-row>

            <div class="history-block block-padding">
                <h2 class="text-uppercase mb-md-14 mb-9">История бренда</h2>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-tabs
                                v-model="tab"
                                show-arrows
                                center-active
                                hide-slider
                            >
                                <v-tab
                                    class="text-none"
                                    v-for="item in items"
                                    :key="item.tab"
                                >
                                    {{ item.tab }}
                                </v-tab>
                            </v-tabs>
                        </v-col>
                    </v-row>
                    
                    <v-tabs-items v-model="tab">
                        <v-tab-item
                            :transition="false"
                            :reverse-transition="false"
                            v-for="item in items"
                            :key="item.tab"
                        >  
                        <v-card>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <img class="slider-photo" :src="item.img" alt="">
                                </v-col>
                                <v-col cols="12" md="6" class="d-flex align-center">
                                    <p class="mb-0" v-html="item.content">
                                    </p>
                                </v-col>
                            </v-row>
                        </v-card>
                        </v-tab-item>
                    </v-tabs-items>
            </div>

            <v-row align="center" class="block-padding">
                <v-col cols="12" lg="6">
                    <CollageSecond class="pb-9 pb-lg-0"/>
                </v-col>
                <v-col cols="12" lg="6">
                    <div class="ml-xl-9 ml-lg-4">
                        <h2 class="text-uppercase mb-md-14 mb-9">
                            О компании <br class="d-none d-lg-inline">«KOMTRANS <span class="text-none">Group</span>»                      
                        </h2>
                        <p>
                            Компания основана в&nbsp;2009 году и&nbsp;имеет большой опыт работы в&nbsp;сфере продажи спецтехники. За&nbsp;время работы открыто 12&nbsp;филиалов по&nbsp;стране, собственные сервисные центры и&nbsp;склад запасных частей для спецтехники и&nbsp;грузовых автомобилей.<br><br>
                            На&nbsp;протяжении многих лет успешно реализуем спецтехнику XCMG. Работа без посредников позволяет быть уверенным в&nbsp;надежности сделки, а&nbsp;также позволяет реализовать технику по&nbsp;самым выгодным ценам на&nbsp;рынке. Благодаря тому, что техника поступает к&nbsp;нам напрямую с&nbsp;завода, вы&nbsp;можете быть уверены в&nbsp;ее&nbsp;качестве. Мы&nbsp;самостоятельно осуществляем всю логистику по&nbsp;Китаю и&nbsp;России и&nbsp;обеспечиваем прохождение таможни, это гарантирует доставку техники в&nbsp;целостности и&nbsp;сохранности.
                        </p>    
                    </div>
                </v-col>
            </v-row>


            <div class="certificates-block block-padding">
                <h2 class="text-uppercase mb-md-14 mb-9">Сертификаты</h2>
                <v-row>
                    <v-col v-for="(item, index) in certs" :key="index" cols="6" sm="4">
                        <v-dialog max-width="600px">
                            <template v-slot:activator="{ on }">
                                <v-img 
                                    :src="item.img"
                                    v-on="on"
                                >
                                </v-img>
                            </template>
                            <v-card>
                                <v-img 
                                    :src="item.img"
                                >
                                </v-img>
                            </v-card>
                        </v-dialog>
                    </v-col>
                </v-row>
            </div>


            <Feedback/>

            <h2 class="text-uppercase mb-md-14 mb-9">
                Контакты
            </h2>
            <ContactCardsList/>
        </v-container>
    </div>
</template>

<script>
import ContactCardsList from '~/components/Contact_cards_list.vue'
import Feedback from '~/components/Feedback.vue'
import CollageMain from '~/components/collage/Collage_about_main.vue'
import CollageSecond from '~/components/collage/Collage_about_second.vue'

export default {
    components: {
        ContactCardsList,
        Feedback,
        CollageMain,
        CollageSecond
    },
    head () {
        return {
        title: 'О компании - Официальный дилер техники',
        meta: [
            { charset: 'utf-8' },
            { hid: 'description', name: 'description', content: 'Сегодня у нас есть филиалы в 12 городах России, собственные станции сервисного обслуживания, большой штат высококлассных специалистов в разных сферах — продажи, ремонт, гарантия.'},
            { hid: 'keywords', name: 'keywords', content: ''}
        ]
        }
    },
    data() {
        return {
            tab: null,
            items: [
            { tab: '1943-1988', img: '/img/history_slider/history.png', content: 
                `В 1943 году создан предшественник XCMG Group, Huaxing Iron Factory.<br><br>
                В 1957 году успешно изготовлен первый башенный кран. Это событие стало началом пути XCMG в производстве строительной техники.<br><br>
                В период с 1960 по 1988 XCMG создаёт первые для Китая модели такой техники как 10-тонный паровой каток, 5-тонный автокран, 16-тонный автокран с полным гидравлическим приводом, гидравлический одноцилиндровый колесный вибрационный каток.` 
            },
            { tab: '1989-1998', img: '/img/history_slider/brand.png', content: 
                `XCMG Group была официально создана и стала первой компанией группы в отрасли в 1989 году.<br><br>
                В период с 1989 по 1995 XCMG разработала первый отечественный асфальтоукладчик и самый большой 160-тонный вездеходный кран в Азии.<br><br>
                В 1996 году XCMG была зарегистрирована на Шэньчжэньской фондовой бирже.`  },
            { tab: '1999-2008', img: '/img/history_slider/tech.png', content: 
                `В 1999 началась новая глава в истории XCMG — новый руководящий состав и принципы управления для повышения производственной и финансовой дисциплины.<br><br>
                В 2000 году компания активно реформировала внутренню деятельность в экономическом и социальном направлениях.<br><br>
                В период с 2000 по 2003 XCMG разработала ZL50G (китайский погрузчик третьего поколения) и первый в Китае вездеходный кран QAY25.<br><br>
                К 2003 году доход XCMG превысил 10 миллиардов юаней.`  },
            { tab: '2009-настоящее время', img: '/img/history_slider/workers.png', content: 
                `В 2009 году XCMG размещается на фондовой бирже.<br><br>
                В 2011 году шагающий горный экскаватор XCMG ET110 получил вторую премию Национальной премии в области науки и технологий. В этот же период компания вошла в пятерку крупнейших мировых производителей строительной техники.<br><br>
                С 2012 по 2019 годы XCMG активно развивается и запускает предприятия по всему миру. С производственной линии компании сходят первые вездеходный кран XCA5000 с самым большим в мире тоннажем, самый большой в мире карьерный самосвал DE400, 700-тонный гидравлический экскаватор.`  },
            ],
            certs: [{img: '/img/certificates/cert1.png'}, {img: '/img/certificates/cert2.png'}, {img: '/img/certificates/cert3.png'}]
        }
    },
    created() {
        this.$store.commit('onVisabilityHeader')
        this.$store.commit('setBreadCrumbs', 
        [
            {
            text: 'Официальный дилер XCMG',
            disabled: false,
            href: '/',
            position: 1,
            },
            {
            text: 'О компании',
            disabled: true,
            href: '/about',
            position: 2,
            },
        ])
    },
}
</script>

<style lang="scss">
    .history-block .v-tabs .v-tab--active {
        color: white !important;
        background: $primary-color;
    }
    .history-block .v-tab {
        font-weight: bold;
        font-size: 24px;
        color: #231F20 !important;
    }
    .slider-photo {
        height: 25vw;
        width: 100%;
        object-fit: cover;
    }
    .history-block .v-tabs {
        border-bottom: 4px solid $primary-color;
    }
    .certificates-block .v-image{
        cursor: pointer;
        height: 100%;
        border: 1px solid $primary-color;
        box-shadow: $card-shadow;
    }
    @include lg {
        .history-block .v-tab {
            font-size: 16px;
        }
    }
    @include sm {
        .slider-photo {
            height: 45vw;
        }
    }
    @include xs {
        .history-block .v-tab {
            font-size: 14px;
        }
    }
</style>