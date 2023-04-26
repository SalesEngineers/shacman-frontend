<template>
    <div>
        <template v-if="isMain">
            <div class="block-padding" v-if="mainArticles.length != 0">
                <v-row class="mt-0 mb-md-8 mb-3">
                    <v-col cols="12" sm="6">
                        <h2 class="text-uppercase">Блог</h2>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        class="d-flex align-center justify-sm-end"
                    >
                        <nuxt-link
                            class="big-main-text href-primary text-none underline-href font-weight-bold"
                            to="/blog/"
                            >Перейти в блог</nuxt-link
                        >
                    </v-col>
                </v-row>
                <v-row class="catalog-block">
                    <v-col
                        v-for="(item, index) in mainArticles"
                        :key="index"
                        :class="[
                            index == 6 ? (index = 0) : '',
                            index == 0 || index == 4
                                ? 'col-sm-6 col-md-6 col-12'
                                : 'col-sm-6 col-md-3 col-12',
                        ]"
                    >
                        <v-card
                            :class="
                                index == 1 || index == 4 || index == 5
                                    ? 'background-card'
                                    : 'card'
                            "
                        >
                            <img
                                :src="
                                    index == 1 || index == 4 || index == 5
                                        ? item.image_vertical.url
                                        : item.image_horizontal.url
                                "
                                :alt="
                                    index == 1 || index == 4 || index == 5
                                        ? item.image_vertical.alt
                                        : item.image_horizontal.alt
                                "
                                :title="
                                    index == 1 || index == 4 || index == 5
                                        ? item.image_vertical.title
                                        : item.image_horizontal.title
                                "
                            />
                            <div class="content-card">
                                <p class="font-weight-bold">
                                    {{ item.name | cutText(100, "...") }}
                                </p>
                                <p>{{ item.published_at | formatDate }}</p>
                                <nuxt-link
                                    class="big-main-text underline-href text-none font-weight-bold"
                                    :to="`/blog/${item.url}/`"
                                    >Читать полностью</nuxt-link
                                >
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </template>
        <v-row class="catalog-block" v-else>
            <v-col
                v-for="(item, index) in sortArticles"
                :key="index"
                class="col-sm-6 col-md-6 col-12"
            >
                <v-card class="card">
                    <v-img
                        :src="item.image_horizontal.url"
                        :alt="item.image_horizontal.alt"
                        :title="item.image_horizontal.title"
                        max-height="320"
                        cover
                    ></v-img>
                    <div class="content-card">
                        <p class="font-weight-bold">
                            {{ item.name | cutText(100, "...") }}
                        </p>
                        <p>{{ item.published_at | formatDate }}</p>
                        <nuxt-link
                            class="big-main-text underline-href text-none font-weight-bold"
                            :to="item.url + '/'"
                            >Читать полностью</nuxt-link
                        >
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
  
  <script>
import { mapState } from "vuex";
export default {
    props: {
        isMain: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            mainArticles: [],
            sortArticles: {},
        };
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
            if (this.isMain) {
                for (var item of this.sortArticles) {
                    if (item.is_main == true) {
                        this.mainArticles.push(this.checkPhoto(item));
                    }
                    if (this.mainArticles.length == 6) break;
                }
            } else {
                for (var item of this.sortArticles) {
                    item = this.checkPhoto(item);
                }
            }
        },
    },
    mounted() {
        if (this.$store.getters.getArticles.length == 0) {
            this.$store.dispatch("loadArticles");
        }
        this.displayBlog();
    },
    watch: {
        articles() {
            this.sortArticles = JSON.parse(JSON.stringify(this.articles));
            this.displayBlog();
        },
    },
    computed: {
        ...mapState(["articles"]),
    },
};
</script>
  
  <style lang="scss" scoped>
.v-card {
    max-height: 600px;
    box-shadow: $card-shadow !important;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        min-height: 200px;
    }
    .content-card {
        padding: 40px 20px;
        position: relative;
        z-index: 1;
    }
}

.card {
    display: flex;
    height: 100%;
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
@include sm {
    .v-card {
        height: 400px;
    }
}
</style>