<template>
    <div class="content-padding">
        <v-container class="content-padding">
            <v-contacts :show-link="false" tag="h1"></v-contacts>
        </v-container>

        <v-container>
            <h2 class="mb-md-14 mb-9 text-uppercase">Реквизиты</h2>
            <client-only>
                <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="3"
                        v-for="item, index in settings.requisites"
                        :key="index"
                    >
                        <p class="d-block req-title mb-1">{{ item.name }}:</p>
                        <p
                            :class="index < 4 ? 'padding-info' : '' "
                            class="req-info mb-0"
                        >{{ item.value }}</p>
                    </v-col>
                </v-row>
            </client-only>
        </v-container>
    </div>
</template>

<script>
import VContacts from "~/components/VContacts/index.vue";
import { mapState } from "vuex";

export default {
    components: {
        VContacts,
    },

    head() {
        return {
            title: "Контакты - Официальный дилер техники",
            meta: [
                { charset: "utf-8" },
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Контактные данные официального дилера техники XCMG ➤ Телефоны, адреса и e-mail филиалов по городам России.",
                },
                { hid: "keywords", name: "keywords", content: "" },
            ],
        };
    },

    computed: {
        ...mapState(["settings"]),
    },

    async asyncData({ store }) {
        let contact = store.getters["getDynamicContact"];

        if (!contact) {
            const contacts = store.getters["getContacts"];

            if (contacts.lenght) {
                contact = contacts[0];
            }
        }

        await store.dispatch("setAddress", contact);

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
                disabled: true,
                href: "/contacts",
                position: 2,
            },
        ]);
    },
};
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