<template>
    <div>
        <h2 v-if="this.name.length" class="text-uppercase mb-md-8 mb-9">{{ name }}</h2>

        <v-tabs v-model="currentTabIndex" class="gallery-tabs">
            <v-tab v-for="(tab, i) in tabs" :key="i" :value="i" class="gallery-tab">{{ tab }}</v-tab>
        </v-tabs>
        <v-window v-model="currentTabIndex">
            <v-window-item v-for="(col, j) in collection" :key="j" :value="j">
                <div class="gallery-list">
                    <v-row>
                        <v-col v-for="(image, k) in col.images" :key="k" cols="6" md="4">
                            <v-img
                                :src="image.url"
                                :lazy-src="image.url"
                                :alt="image.alt"
                                :title="image.title"
                                aspect-ratio="4:3"
                            >
                                <a :href="image.url" :data-fancybox="`gallery-${j}`" rel="nofollow" class="gallery-fancybox"></a>
                            </v-img>
                        </v-col>
                    </v-row>
                </div>
            </v-window-item>
        </v-window>
    </div>
</template>

<script>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default {
    name: "CategoryGallery",

    props: {
        name: {
            type: String,
            default: "",
        },

        collection: {
            type: Array,
            default: () => [],
        },
    },

    computed: {
        tabs() {
            return this.collection.map((tab) => tab.name);
        },
    },

    data() {
        return {
            currentTabIndex: 0,
        };
    },

    mounted() {
        if (!this.$isServer) {
            Fancybox.bind(this.$refs.container, "[data-fancybox]");
        }
    },

    beforeDestroy() {
        Fancybox.destroy();
    },
};
</script>

<style lang="scss" scoped>
.gallery-list {
    padding-top: 15px;
}

.gallery-tab {
    text-transform: none !important;
    font-weight: normal;
    font-size: 16px;
}

.gallery-fancybox {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>