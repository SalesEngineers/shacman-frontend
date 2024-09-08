<template>
    <div class="content-padding">
        <v-container>
            <v-row align="center" class="block-padding">
                <v-col cols="12" lg="6">
                    <div class="mr-xl-9 mr-lg-4">
                        <h1 class="text-uppercase mb-md-14 mb-9">
                            О бренде Shacman
                        </h1>
                        <p>
                            Shacman — бренд техники, выпускаемый заводом Shaanxi
                            Heavy Duty Automobile Co. Бренд Shacman родился в
                            результате сотрудничества компании MAN с заводом
                            Shaanxi в 2004 году.
                        </p>
                        <p class="pb-9 pb-lg-0">
                            Группа компаний Shaanxi входит в число 500
                            крупнейших предприятий Китая и имеет более 300
                            сотрудников в штате. Дилерская сеть компании
                            покрывает более 80 стран и регионов мира, отвечает
                            за реализацию продукции SHACMAN и предоставление
                            комплексного сервисного обслуживания на
                            международном рынке.
                        </p>
                    </div>
                </v-col>
                <v-col cols="12" lg="6">
                    <CollageMain />
                </v-col>
            </v-row>

            <v-row align="center" class="block-padding">
                <v-col cols="12" lg="6">
                    <CollageSecond class="pb-9 pb-lg-0" />
                </v-col>
                <v-col cols="12" lg="6">
                    <div class="ml-xl-9 ml-lg-4">
                        <h2 class="text-uppercase mb-md-14 mb-9">
                            О компании
                            <br class="d-none d-lg-inline" />«KOMTRANS
                            <span class="text-none">Group</span>»
                        </h2>
                        <p>
                            Компания основана в 2009 году и имеет большой опыт работы в сфере продажи грузовой техники. За время работы открыто более 28 филиалов по стране, собственные сервисные центры и склад запасных частей для грузовых автомобилей.
                        </p>
                        <p>
                            На протяжении многих лет успешно реализуем грузовую технику Shacman. Работа без посредников позволяет быть уверенным в надежности сделки, а также позволяет реализовать технику по самым выгодным ценам на рынке. Благодаря тому, что техника поступает к нам напрямую с завода, вы можете быть уверены в ее качестве. Мы самостоятельно осуществляем всю логистику по Китаю и России и обеспечиваем прохождение таможни, это гарантирует доставку техники в целостности и сохранности.
                        </p>
                    </div>
                </v-col>
            </v-row>

            <div v-if="settings.video" class="block-padding">
              <v-row>
                <v-col cols="12" md="6">
                  <div class="iframe-video-block">
                    <iframe loading="lazy" :src="settings.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </v-col>
              </v-row>
            </div>

            <div class="certificates-block block-padding">
                <h2 class="text-uppercase mb-md-14 mb-9">Сертификаты</h2>
                <v-row>
                    <v-col
                        v-for="(item, index) in certs"
                        :key="index"
                        cols="6"
                        sm="4"
                    >
                        <v-dialog max-width="600px">
                            <template v-slot:activator="{ on }">
                                <v-img :src="item.img" v-on="on"> </v-img>
                            </template>
                            <v-card>
                                <v-img :src="item.img"> </v-img>
                            </v-card>
                        </v-dialog>
                    </v-col>
                </v-row>
            </div>

            <Feedback />

            <v-contacts></v-contacts>  

        </v-container>
    </div>
</template>

<script>
import VContacts from "~/components/VContacts/index.vue";
import Feedback from "~/components/Feedback.vue";
import CollageMain from "~/components/collage/Collage_about_main.vue";
import CollageSecond from "~/components/collage/Collage_about_second.vue";
import { mapState } from 'vuex'

export default {
    components: {
        Feedback,
        CollageMain,
        CollageSecond,
        VContacts,
    },
    head() {
        return {
            title: "О компании - Официальный дилер техники",
            meta: [
                { charset: "utf-8" },
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Сегодня у нас есть филиалы более чем в 28 городах России, собственные станции сервисного обслуживания, большой штат высококлассных специалистов в разных сферах — продажи, ремонт, гарантия.",
                },
                { hid: "keywords", name: "keywords", content: "о компании" },
            ],
        };
    },
    computed: {
        ...mapState([
            'settings'
        ])
    },
    data() {
        return {
            certs: [
                { img: "/img/certificates/cert1.jpg" },
                { img: "/img/certificates/cert2.jpg" },
            ],
        };
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
                text: "О компании",
                disabled: true,
                href: "/about",
                position: 2,
            },
        ]);
    },
};
</script>

<style lang="scss">
.history-block .v-tabs .v-tab--active {
    color: white !important;
    background: $primary-color;
}
.history-block .v-tab {
    font-weight: bold;
    font-size: 24px;
    color: #231f20 !important;
}
.slider-photo {
    height: 25vw;
    width: 100%;
    object-fit: cover;
}
.history-block .v-tabs {
    border-bottom: 4px solid $primary-color;
}
.certificates-block .v-image {
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