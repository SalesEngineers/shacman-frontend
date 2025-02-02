<template>
    <div class="content-padding">
        <v-container>
            <h1 class="text-uppercase mb-md-14 mb-9">Блог</h1>
            <template v-if="articles.length != 0">
                <article-list :articles="articles"></article-list>
                <Pagination class="mt-8" v-if="meta?.last_page !== 1" :isFirst="true" :meta="meta" />
            </template>
            <h2 v-else>Статей нет, посетите другие разделы</h2>
        </v-container>
    </div>
</template>

<script>
import ArticleList from "~/components/ArticleList.vue";
import Pagination from "~/components/Pagination.vue";
export default {
    components: {
        ArticleList,
        Pagination,
    },
    
    scrollToTop: true,

    head() {
        return {
            title: "Блог - Официальный дилер техники",
            meta: [
                { charset: "utf-8" },
                {
                    hid: "description",
                    name: "description",
                    content: "Блог официального дилера техники XCMG",
                },
                { hid: "keywords", name: "keywords", content: "" },
            ],
            link: [
                {
                    hid: "canonical",
                    rel: "canonical",
                    href: `https://shacman-rf.ru/blog/`,
                },
            ],
        };
    },
    created() {
        this.$store.commit("onVisabilityHeader");
        this.$store.commit("setBreadCrumbs", [
            {
                text: 'Официальный дилер Shacman',
                disabled: false,
                href: "/",
                position: 1,
            },
            {
                text: "Блог",
                disabled: true,
                href: "/blog/",
                position: 2,
            },
        ]);
    },
    async asyncData({ store, error }) {
        try {
            const { data, meta } = await store
                .dispatch("loadArticlesPaginate", { page: 1 })
                .then((r) => r.data);
            return { articles: data, meta };
        } catch (e) {
            console.log(e);
            error({ statusCode: 404, message: "Страница не найдена" });
        }
    },
};
</script>

<style lang="scss" scoped>
</style>