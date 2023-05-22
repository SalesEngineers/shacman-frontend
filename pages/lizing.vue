<template>
  <div>
    <MainWindow :slides="[{image: '/img/lizing/slide-1.jpg', title: 'Лизинг спецтехники Shacman', btnTitle: 'Получить консультацию', link: ''}]"/>
    <v-container class="content-padding">
        <v-row align="center" class="block-padding mt-0">
            <v-col cols="12" lg="6">
                <div class="mr-xl-9 mr-lg-4">
                    <h2 class="text-uppercase mb-md-14 mb-9">
                        Лизинговые условия   
                    </h2>
                    <p class="pb-11 mb-0 pb-xl-16 mb-xl-2">
                        Финансирование компаний&nbsp;&mdash; важное направление деятельности нашего предприятия, поэтому мы&nbsp;разработали гибкую схему продажи техники в&nbsp;лизинг. Предлагаемые условия устроят как крупную промышленную компанию, так и&nbsp;начинающего предпринимателя.<br><br>
                        Случаются ситуации, когда специализированное оборудование требуется срочно, и&nbsp;каждый день промедления способен обернуться серьезными финансовыми потерями. Партнеры компании &laquo;KOMTRANS Group&raquo; избавлены от&nbsp;переживаний о&nbsp;сорванных сроках и&nbsp;простоях на&nbsp;производстве, ведь мы&nbsp;реализуем технику в&nbsp;кратчайшие сроки.
                    </p>    
                    <v-btn class="main-button text-none font-weight-bold mb-9 mb-lg-0" color="primary" @click="$store.commit('onModalWindow', {title: 'Оставить заявку', btnName: 'Оставить заявку'})">
                        Оставить заявку
                    </v-btn>
                </div>
            </v-col>
            <v-col cols="12" lg="6">
                <Collage/>
            </v-col>
        </v-row>

        <v-row class="lizing-block block-padding">
            <v-col cols="12">
                <h2 class="text-uppercase mb-md-8 mb-3">
                    Лизинговые компании
                </h2>
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(item, index) in lizing_items" :key="index">
                <v-card class="pa-7">
                    <v-img
                        contain
                        :height="imageHeight"
                        :src="item.img"
                    ></v-img>
                </v-card>
            </v-col>
        </v-row>

        <v-contacts></v-contacts>
    </v-container>
    <FeedbackMan title="Подайте заявку на&nbsp;лизинг" content="Квалифицированный менеджер поможет с выбором лизинговой программы и ответит на любой вопрос" btnTitle="Подать заявку"/>
  </div>
</template>

<script>
import MainWindow from '~/components/Main_window.vue'
import Collage from '~/components/collage/Collage_lizing.vue'
import VContacts from '~/components/VContacts/index.vue'
import FeedbackMan from '~/components/Feedback_man.vue'

export default {
    components: {
        MainWindow,
        Collage,
        VContacts,
        FeedbackMan
    },
    head () {
        return {
        title: 'Лизинг китайской техники',
        meta: [
            { charset: 'utf-8' },
            { hid: 'description', name: 'description', content: 'Лизинг спецтехники Shacman - Условия: Первоначальный взнос от 10% ⬥ Срок лизинга от 1 до 5 лет ⬥ Удорожание до 5% ⬥ Досрочное погашение.'},
            { hid: 'keywords', name: 'keywords', content: 'лизинг спецтехники shacman, шахман, шакман'}
        ]
        }
    },
    data() {
        return {
            lizing_items: [
                {
                    img: '/img/lizing/sber.svg',
                },
                {
                    img: '/img/lizing/vtb.svg',
                },
                {
                    img: '/img/lizing/alfa.svg',
                },
                {
                    img: '/img/lizing/element.svg',
                },
                {
                    img: '/img/lizing/euro.svg',
                },
                {
                    img: '/img/lizing/evo.svg',
                },
                {
                    img: '/img/lizing/balt.svg',
                },
                {
                    img: '/img/lizing/gazprom.svg',
                },
                {
                    img: '/img/lizing/realist.svg',
                },
                {
                    img: '/img/lizing/chill.svg',
                },
                {
                    img: '/img/lizing/delta.svg',
                },
                {
                    img: '/img/lizing/inter.svg',
                }
            ]
        }
    },
    created() {
        this.$store.commit('offVisabilityHeader')
        this.$store.commit('setBreadCrumbs', 
        [
            {
            text: 'Официальный дилер Shacman',
            disabled: false,
            href: '/',
            position: 1,
            },
            {
            text: 'Лизинг',
            disabled: true,
            href: '/lizing',
            position: 2,
            },
        ])
    },
    computed: {
      imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '15vw'
          case 'sm': return '10vw'
          case 'md': return '5vw'
          case 'lg': return '5vw'
          case 'xl': return '5vw'
        }
      },
    }
}
</script>

<style lang="scss" scoped>
    .lizing-block .v-card {
        box-shadow: $card-shadow !important;
    }
</style>