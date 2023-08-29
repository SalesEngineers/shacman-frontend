<template>
    <div class="content-padding">
        <v-container>
            <h1 class="text-uppercase mb-lg-6 mb-5">{{ article.name }}</h1>
            <p class="font-weight-bold mb-lg-11 mb-10">{{ article.published_at | formatDate }}</p>
            <v-row>
                <v-col :class="twoArticles.length == 0 ? 'col-12' : 'col-md-8 col-12'">
                    <div class="article blog-content mb-14 mb-md-0">
                        <img
                            class="mb-lg-14 mb-13"
                            v-if="article.image_horizontal.url || article.image_vertical.url"
                            :src="article.image_horizontal.url ? article.image_horizontal.url : article.image_vertical.url"
                            :alt="article.image_horizontal.alt ? article.image_horizontal.alt : article.image_vertical.alt"
                            :title="article.image_horizontal.title ? article.image_horizontal.title : article.image_vertical.title"
                        />
                        <div class="mb-lg-14 mb-13" v-html="article.content"></div>
                        <div v-if="article.video" class="block-padding">
                          <v-row>
                            <v-col cols="12" md="6">
                              <div class="iframe-video-block">
                                <iframe
                                    loading="lazy"                                
                                    :src="article.video"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                              </div>
                            </v-col>
                          </v-row>
                        </div>
                        <nuxt-link
                            class="href-primary big-main-text underline-href text-none font-weight-bold"
                            to="/blog/"
                        >Вернуться к списку статей</nuxt-link>
                    </div>
                </v-col>
                <v-col cols="12" md="4" v-if="twoArticles.length != 0">
                    <p class="card-title mb-5">Читайте также</p>
                    <v-row class="articles-block">
                        <v-col
                            cols="12"
                            sm="6"
                            md="12"
                            v-for="item, index in twoArticles"
                            :key="index"
                        >
                            <v-card class="card">
                                <v-img
                                    :src="item.image_horizontal.url"
                                    :alt="item.image_horizontal.alt"
                                    :title="item.image_horizontal.title"
                                    cover
                                ></v-img>
                                <div class="content-card">
                                    <p class="font-weight-bold">{{ item.name }}</p>
                                    <p>{{ item.published_at | formatDate }}</p>
                                    <nuxt-link
                                        class="big-main-text underline-href text-none font-weight-bold"
                                        :to="`/blog/${item.url}/`"
                                    >Читать полностью</nuxt-link>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    head() {
        return {
            title: this.article.seo.title,
            meta: [
                { charset: "utf-8" },
                {
                    hid: "description",
                    name: "description",
                    content: this.article.seo.description,
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: this.article.seo.keywords,
                },
            ],
        };
    },
    data() {
        return {
            article: null,
            sortArticles: [],
            twoArticles: [],
        };
    },
    created() {
        this.article = this.checkPhoto(this.article);
        this.$store.commit("onVisabilityHeader");
        this.$store.commit("setBreadCrumbs", [
            {
                text: "Официальный дилер Shacman",
                disabled: false,
                href: "/",
                position: 1,
            },
            {
                text: "Блог",
                disabled: false,
                href: "/blog/",
                position: 2,
            },
            {
                text: this.article.name,
                disabled: true,
                href: this.article.url + "/",
                position: 3,
            },
        ]);
    },
    async asyncData({ $axios, error, route }) {
        const articleUrl = route.params.article;
        const article = await $axios
            .get("/articles/" + articleUrl)
            .then((res) => {
                return res.data.data;
            })
            .catch((e) => {
                console.log(e);
                error({ statusCode: 404, message: "Страница не найдена" });
            });
        return { article: article };
    },
    mounted() {
        if (this.$store.getters.getArticles.length == 0) {
            this.$store.dispatch("loadArticles");
        }

        this.displayBlog();

        for (const item of this.sortArticles) {
            if (item.url != this.article.url) {
                this.twoArticles.push(item);
            }
            if (this.twoArticles.length >= 2) break;
        }
    },
    methods: {
        checkPhoto(item) {
            const noPhoto = {
                url: "/img/no_photo.svg",
                alt: "Нет фотографии",
                title: "Нет фотографии",
            };
            item.image_vertical ? "" : (item.image_vertical = noPhoto);
            item.image_horizontal ? "" : (item.image_horizontal = noPhoto);
            return item;
        },
        displayBlog() {
            this.sortArticles = JSON.parse(JSON.stringify(this.articles));
            for (var item of this.sortArticles) {
                item = this.checkPhoto(item);
            }
        },
    },
    watch: {
        articles() {
            this.displayBlog();
        },
    },
    computed: {
        ...mapState(["articles"]),
    },
};
</script>

<style lang="scss" scoped>
.article {
    margin-right: 60px;
}
.article img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 4px;
}
.articles-block .v-card {
    min-height: 450px;
    box-shadow: $card-shadow !important;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        min-height: 200px;
        flex: auto;
    }
    .content-card {
        padding: 40px 20px;
        position: relative;
        z-index: 1;
    }
}

.card {
    display: flex;
    flex-direction: column;

    a {
        color: $primary-color;
    }
}
.background-card {
    position: relative;
    height: 100%;
    color: white;

    img {
        object-fit: cover;
        position: absolute;
        border-radius: inherit;
    }
}
.iframe-video {
    width: 100%;
    height: 30vw;
    max-height: 340px;
    display: block;
}

@include md {
    .article {
        margin-right: 0px;
    }
}
@include sm {
    .articles-block .v-card {
        height: 400px;
        min-height: unset;
    }
}
</style>

<style lang="scss">
.blog-content {
    --v-anchor-base: #231F20;

    a {
        color: $primary-color;
        text-decoration: underline;

        &:hover {
            text-decoration: none;
        }
    }

    h2 {
        margin-top: 25px;
        margin-bottom: 15px;
    }

    h3 {
        margin-top: 15px;
        margin-bottom: 5px;
    }
}
</style>