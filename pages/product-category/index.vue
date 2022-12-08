<template>
    <div>
        <v-container class="content-padding">
            <h1 class="mb-md-14 mb-9">
                Каталог
            </h1>
            <!-- <Banner class="block-padding"/> -->

            <div class="block-padding" v-if="catalogSpec.length != 0">
                <h2 class="text-uppercase mb-md-14 mb-9">
                    Cпецтехника
                </h2>
                <Catalog :items="catalogSpec"/>
            </div>
            <div class="block-padding" v-if="catalogNaves.length != 0">
                <h2 class="text-uppercase mb-md-14 mb-9">
                    Навесное оборудование
                </h2>
                <Catalog :items="catalogNaves"/>
            </div>
            
            <h2 class="text-uppercase mb-md-14 mb-9">
                Контакты
            </h2>
            <ContactCardsList/>
        </v-container>
        <FeedbackMan title="Подберём технику специально для вас!" content="Квалифицированный менеджер поможет с выбором спецтехники под вашу задачу и ответит на любой вопрос" btnTitle="Подобрать технику"/>
    </div>
</template>

<script>
import ContactCardsList from '~/components/Contact_cards_list.vue'
import FeedbackMan from '~/components/Feedback_man.vue'
import Banner from '~/components/Banner.vue'
import Catalog from '~/components/Catalog_cards_list.vue'
import { mapState } from 'vuex'

export default {
    components: {
        ContactCardsList,
        FeedbackMan,
        Banner,
        Catalog
    },
    head () {
        return {
        title: 'Каталог спецтехники от представителя компании',
        meta: [
            { charset: 'utf-8' },
            { hid: 'description', name: 'description', content: 'Каталог техники XCMG: в наличии фронтальные погрузчики, автокраны, бульдозеры, гусеничные краны и другие виды техники. Доставка по всей РФ.' },
            { hid: 'keywords', name: 'keywords', content: '' }
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
            text: 'Официальный дилер XCMG',
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

<style>

</style>