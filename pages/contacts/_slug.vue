<template>
    <div class="content-padding">
        <v-container>
            <h1 class="text-uppercase mb-md-14 mb-9">{{ title }}</h1>

            <div v-if="contact.content" class="block-padding">
                <div v-html="contact.content"></div>
            </div>

            <v-row v-if="images.length" class="block-padding">
                <v-col v-for="(image, i) in images" :key="i" cols="6">
                    <v-img :src="image.url" :alt="image.alt" :title="image.title"></v-img>
                </v-col>
            </v-row>

            <v-contacts :show-link="false"></v-contacts>
        </v-container>
    </div>
</template>

<script>
import VContacts from "~/components/VContacts/index.vue";

export default {
    components: {
        VContacts,
    },

    head() {
        const title = this.contact?.seo.title || this.title;

        return {
            title: `${title} - Официальный дилер техники`,
            meta: [
                { charset: "utf-8" },
                {
                    hid: "description",
                    name: "description",
                    content: this.contact?.seo?.description ?? "",
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: this.contact?.seo?.keywords ?? "",
                },
            ],
        };
    },

    computed: {
        title() {
            return this.contact.title || this.contact.name;
        },

        images() {
            return this.contact?.images || [];
        },
    },

    async asyncData({ store, params, error }) {
        const { slug } = params;
        let contact;

        try {
            contact = await store
                .dispatch("loadContact", slug)
                .then((r) => r.data.data);

            store.commit("onVisabilityHeader");
            store.commit("setBreadCrumbs", [
                {
                    text: "Официальный дилер XCMG",
                    disabled: false,
                    href: "/",
                    position: 1,
                },
                {
                    text: "Контакты",
                    disabled: false,
                    href: "/contacts",
                    position: 2,
                },
                {
                    text: contact.title || contact.name,
                    disabled: true,
                    href: "",
                    position: 3,
                },
            ]);
        } catch (e) {
            error({ statusCode: 404, message: "Страница не найдена" });
        }

        return {
            contact,
        };
    },
};
</script>