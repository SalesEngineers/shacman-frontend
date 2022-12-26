<template>
    <div class="content-padding">
        <v-container>
            <h1 class="text-uppercase mb-md-14 mb-9">
                Контакты
            </h1>
            <ContactCardsList/>
        </v-container>
        <Ymap/>
        <v-container>
            <h2 class="mb-md-14 mb-9 text-uppercase">
                Реквизиты
            </h2>
            <client-only>
                <v-row>
                    <v-col cols="12" sm="6" md="3"  v-for="item, index in settings.requisites" :key="index">
                        <p class="d-block req-title mb-1">{{ item.name }}:</p> 
                        <p :class="index < 4 ? 'padding-info' : '' " class="req-info mb-0">{{ item.value }}</p>
                    </v-col>
                </v-row>
            </client-only>
        </v-container>
    </div>
</template>

<script>
import ContactCardsList from '~/components/Contact_cards_list.vue'
import Ymap from '~/components/Ymap.vue'
import { mapState } from 'vuex'

export default {
    components: {
        ContactCardsList,
        Ymap
    },
    head () {
        return {
        title: 'Контакты - Официальный дилер техники',
        meta: [
            { charset: 'utf-8' },
            { hid: 'description', name: 'description', content: 'Контактные данные официального дилера техники XCMG ➤ Телефоны, адреса и e-mail филиалов по городам России.'},
            { hid: 'keywords', name: 'keywords', content: ''}
        ]
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
            text: 'Контакты',
            disabled: true,
            href: '/contacts',
            position: 2,
            },
        ])
    },
    data() {
        return {
        }
    }, 
    computed: {
        ...mapState([
            'settings'
        ])
    },
}
</script>

<style lang="scss" scoped>
    .req-title {
        font-family: $title_bold;
        color: $primary-color;
    }
    .req-info {
        line-height: 1.2;
    }
    .padding-info {
        padding-bottom: 28px;
    }
    @include sm {
        .padding-info {
            padding-bottom: 0;
        }
    }
</style>