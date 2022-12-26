<template>
    <div class="content-padding">
        <v-container>
            <h1 class="text-uppercase mb-md-14 mb-9">
                Блог
            </h1>
            <template v-if="$store.getters.getArticles.length != 0">
                <BlogList/>
            </template>
            <h2 v-else>Статей нет, посетите другие разделы</h2>
        </v-container>
    </div>
</template>

<script>
import BlogList from '~/components/Blog_list.vue'
export default {
    components: {
        BlogList
    },
    head () {
        return {
        title: 'Блог - Официальный дилер техники',
        meta: [
            { charset: 'utf-8' },
            { hid: 'description', name: 'description', content: 'Блог официального дилера техники XCMG'},
            { hid: 'keywords', name: 'keywords', content: ''}
        ]
        }
    },
    data() {
        return {
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
            text: 'Блог',
            disabled: true,
            href: '/blog/',
            position: 2,
            },
        ])
    },
}
</script>

<style lang="scss" scoped>
</style>