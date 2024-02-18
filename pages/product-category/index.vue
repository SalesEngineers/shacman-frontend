<template>
    <div>
        <v-container class="content-padding">
            <h1 class="mb-md-14 mb-9">
                Каталог грузовой техники Shacman
            </h1>
            <!-- <Banner class="block-padding"/> -->

            <div class="block-padding" v-if="catalogSpec.length != 0">
                <h2 class="text-uppercase mb-md-14 mb-9">
                    Грузовая техника
                </h2>
                <Catalog :items="catalogSpec"/>
            </div>
            <div class="block-padding" v-if="catalogNaves.length != 0">
                <h2 class="text-uppercase mb-md-14 mb-9">
                    Навесное оборудование
                </h2>
                <Catalog :items="catalogNaves"/>
            </div>

            <div v-if="settings.video" class="block-padding">
              <v-row>
                <v-col cols="12" md="6">
                  <div class="iframe-video-block">
                    <iframe loading="lazy" :src="settings.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </v-col>
              </v-row>
            </div>
            
            <v-contacts></v-contacts>
        </v-container>
        <FeedbackMan title="Подберём технику специально для вас!" content="Квалифицированный менеджер поможет с выбором грузовой техники под вашу задачу и ответит на любой вопрос" btnTitle="Подобрать технику"/>
    </div>
</template>

<script>
import VContacts from '~/components/VContacts/index.vue'
import FeedbackMan from '~/components/Feedback_man.vue'
import Banner from '~/components/Banner.vue'
import Catalog from '~/components/Catalog_cards_list.vue'
import { mapState } from 'vuex'

export default {
    components: {
        VContacts,
        FeedbackMan,
        Banner,
        Catalog
    },
    head () {
        return {
            title: 'Каталог китайской грузовой техники Shacman по выгодным ценам',
            meta: [
                { charset: 'utf-8' },
                { hid: 'description', name: 'description', content: 'Продажа китайской грузовой техники Shacman от официального дилера по России: в наличии самосвалы, грузовая техника, седельные тягачи, автобетоносмесители и др.' },
                { hid: 'keywords', name: 'keywords', content: 'каталог спецтехники shacman, шакман, шахман, продажа, купить, цена' }
            ]
        }
    },
    data() {
        return {
            catalogSpec: [],
            catalogNaves: []
        }
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
            disabled: true,
            href: '/product-category/',
            position: 2,
            },
        ])
    },
    mounted() {
        this.getCategories()
    },
    computed: {
        ...mapState([
            'categories',
            'settings'
        ])
    },
    watch: {
        categories() {
            this.catalogSpec = []
            this.catalogNaves = []
            this.getCategories()
        }
    },
    methods: {
        getCategories() {
            this.categories.forEach(element => {
                if (element.id == 1) {
                    element.children.forEach(category => {
                        this.catalogNaves.push(category)
                    });
                } else {
                    element.children.forEach(category => {
                        this.catalogSpec.push(category)
                    });
                }
            });
        }
    },
}
</script>