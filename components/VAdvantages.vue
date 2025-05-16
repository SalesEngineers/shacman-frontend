<template>
    <div v-if="items.length" class="advantages block-padding">
        <h2 v-if="!hideTitle" class="mb-md-14 mb-9 text-uppercase">{{ title }}</h2>
        <v-row v-for="item, index in items" :key="index" :class="[++index % 2 ? '' : 'flex-row-reverse']"
            class="align-center mb-md-14 mb-10">
            <v-col cols="12" md="6">
                <div :class="[index % 2 ? 'mr-xl-9 mr-lg-4' : 'ml-xl-9 ml-lg-4']">
                    <h3 v-if="item.name" class="mb-5 mb-md-9">{{ item.name }}</h3>
                    <p v-html="item.content"></p>
                </div>
            </v-col>
            <v-col cols="12" md="6" v-if="item.image">
                <v-img :src="item.image.url" :alt="item.image.alt" :title="item.image.title" class="shadow-img" />
            </v-col>
            <v-col cols="12" md="6" v-else="item.video">
                <div class="ratio ratio-16x9 shadow-img">
                    <iframe :src="item.video.url" :title="item.video.title" allowfullscreen class="rounded-lg"></iframe>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "VAdvantages",

    props: {
        title: {
            type: String,
            default: "Преимущества автокранов xcmg",
        },
        hideTitle: {
            type: Boolean,
            default: false
        },
        items: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="scss" scoped>
.shadow-img {
    box-shadow: $card-shadow;
    border-radius: 4px;
}

h3 {
    font-size: clamp(20px, 2vw, 36px);
}

iframe {
    border: 0;
}

.ratio-16x9 {
    --aspect-ratio: 56.25%;
}

.ratio {
    position: relative;

    &:before {
        display: block;
        padding-top: var(--aspect-ratio);
        content: "";
    }

    &>* {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>