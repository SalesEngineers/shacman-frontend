<template>
    <v-row class="catalog-block">
        <v-col v-for="item, index in list" :key="index" class="col-sm-6 col-md-6 col-12">
            <v-card class="card">
                <img
                    :src="index == 1 || index == 4 || index == 5 ? item.image_vertical.url : item.image_horizontal.url"
                    :alt="index == 1 || index == 4 || index == 5 ? item.image_vertical.alt : item.image_horizontal.alt"
                    :title="index == 1 || index == 4 || index == 5 ? item.image_vertical.title : item.image_horizontal.title"
                />
                <div class="content-card">
                    <p class="font-weight-bold">{{ item.name | cutText(100, '...')}}</p>
                    <p>{{ item.published_at | formatDate }}</p>
                    <nuxt-link
                        class="big-main-text underline-href text-none font-weight-bold"
                        :to="{ name: 'blog-article', params: { article: item.url } }"
                    >Читать полностью</nuxt-link>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>
    
<script>
export default {
    props: {
        articles: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            list: []
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
            this.list = this.articles.map(article => this.checkPhoto(article));
        },
    },

    mounted() {
        this.displayBlog();
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
</style>