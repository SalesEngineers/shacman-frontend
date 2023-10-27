<template>
    <v-footer padless color="primary">
        <v-container>
            <v-row no-gutters class="footer-menu">
                <v-col class="pa-3" cols="12" sm="12" md="3">
                    <div class="footer-info">
                        <client-only>
                            <div v-if="dynamicContact" class="footer-contact_block">
                                <v-lazy>
                                    <nuxt-link to="/" style="line-height: 1">
                                        <img class="footer-logo" height="35" src="/img/logo_shacman.svg" />
                                    </nuxt-link>
                                </v-lazy>
                                <span class="footer-title d-block pb-5" v-if="dynamicContact.phone">
                                    <a :href="dynamicContact.phone.href">
                                        {{
                                        dynamicContact.phone.name
                                        }}
                                    </a>
                                </span>
                                <span class="footer-title d-block pb-5" v-if="dynamicContact.email">
                                    <a :href="dynamicContact.email.href">
                                        {{
                                        dynamicContact.email.name
                                        }}
                                    </a>
                                </span>
                                <span
                                    class="footer-title d-block pb-5"
                                    v-if="dynamicContact.address"
                                    v-html="dynamicContact.address"
                                ></span>
                                <span
                                    class="footer-title d-block pb-5"
                                    v-if="
                                                dynamicContact.operating_mode &&
                                                dynamicContact.operating_mode
                                                    .length != 0
                                            "
                                >
                                    <p
                                        class="ma-0"
                                        v-for="(
                                                    item, index
                                                ) in dynamicContact.operating_mode"
                                        :key="index"
                                    >
                                        <span>{{ item.name }}</span>:
                                        <span>{{ item.value }}</span>
                                    </p>
                                </span>
                            </div>
                        </client-only>
                        <client-only>
                            <div
                                class="footer-bottom_block d-none d-md-block"
                                v-if="
                                            settings.social_networks &&
                                            settings.social_networks.length != 0
                                        "
                            >
                                <span class="footer-title d-block pb-3">Будьте с нами</span>
                                <template>
                                    <a
                                        target="_blank"
                                        v-for="(
                                                    item, index
                                                ) in settings.social_networks"
                                        :key="index"
                                        :href="item.url"
                                        v-html="item.icon"
                                    ></a>
                                </template>
                            </div>
                        </client-only>
                        <div class="footer-bottom_block pb-5 pb-md-0 pt-5">
                            <client-only>
                                <span class="pb-3 d-block footer-text" v-if="settings.attachment">
                                    <a
                                        class="underline-href font-weight-bold"
                                        target="_blank"
                                        :href="settings.attachment.url"
                                    >Скачать реквизиты</a>
                                </span>
                            </client-only>
                            <span class="pb-3 d-block footer-text">
                                <nuxt-link class="underline-href font-weight-bold" to="/privacy/">
                                    Политика
                                    конфиденциальности
                                </nuxt-link>
                            </span>
                        </div>
                    </div>
                </v-col>
                <v-col class="pa-3" cols="12" sm="12" md="9">
                    <v-row>
                        <v-col
                            cols="12"
                            :sm="naves.length != 0 ? 6 : 12"
                            :md="naves.length != 0 ? 6 : 12"
                        >
                            <div class="footer-info footer-contact_general-menu pb-5">
                                <div class="footer-contact_block">
                                    <span
                                        class="footer-title font-weight-bold text-uppercase d-block"
                                    >
                                        <nuxt-link to="/about/">О нас</nuxt-link>
                                    </span>
                                    <span
                                        class="footer-title font-weight-bold text-uppercase d-block"
                                    >
                                        <nuxt-link to="/service/">Сервис</nuxt-link>
                                    </span>
                                    <span
                                        class="footer-title font-weight-bold text-uppercase d-block"
                                    >
                                        <nuxt-link to="/parts/">Запчасти</nuxt-link>
                                    </span>
                                    <span
                                        class="footer-title font-weight-bold text-uppercase d-block"
                                    >
                                        <nuxt-link to="/lizing/">Лизинг</nuxt-link>
                                    </span>
                                    <span
                                        class="footer-title font-weight-bold text-uppercase d-block"
                                    >
                                        <nuxt-link to="/blog/">Блог</nuxt-link>
                                    </span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div>
                                <span
                                    class="pb-5 footer-title font-weight-bold text-uppercase d-block"
                                >Грузовая техника</span>
                                <v-row no-gutters>
                                    <v-col                                        
                                        v-for="(techCat, i) in techChunk"
                                        :key="i"
                                        cols="12"
                                        md="4"
                                    >
                                        <div
                                            v-for="(item, index) in techCat"
                                            :key="index"
                                            class="footer-text pb-3 footer-menu-item"
                                        >
                                            <nuxt-link
                                                :to="`/product-category/${item.url}/`"
                                            >{{ item.name }}</nuxt-link>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                        <v-col v-if="naves.length != 0" class="pa-3" cols="12">
                            <div>
                                <span
                                    class="pb-5 footer-title font-weight-bold text-uppercase d-block"
                                >Навесное оборудование</span>
                                <v-row no-gutters>
                                    <v-col
                                        v-for="(navesCat, i) in navesChunk"
                                        :key="i"
                                        cols="12"
                                        md="4"
                                    >
                                        <div
                                            v-for="(item, index) in navesCat"
                                            :key="index"
                                            class="footer-text pb-3 footer-menu-item"
                                        >
                                            <nuxt-link
                                                :to="`/product-category/${item.url}/`"
                                            >{{ item.name }}</nuxt-link>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            tech: [],
            naves: [],
        };
    },
    computed: {
        ...mapGetters({
            categories: "getCategories", 
            settings: "getSettings",
            dynamicContact: "getDynamicContact"
        }),
        techChunk() {
            return this.arrayChunks(this.tech, 3);
        },
        navesCat() {
            return this.arrayChunks(this.naves, 3);
        },
    },
    watch: {
        categories: {
            handler() {
                this.naves = [];
                this.tech = [];
                this.categories.forEach((element) => {
                    if (element.id == 1) {
                        element.children.forEach((category) => {
                            this.naves.push(category);
                        });
                    } else {
                        element.children.forEach((category) => {
                            this.tech.push(category);
                        });
                    }
                });
            },
            immediate: true,
        },
    },

    methods: {
        arrayChunks(array, size) {
            const chunkSize = Math.round(array.length / size);
            const chunks = [];

            for (let i = 0; i < array.length; i += chunkSize) {
                const chunk = array.slice(i, i + chunkSize);
                chunks.push(chunk);
            }

            return chunks;
        },
    },
};
</script>

<style lang="scss" scoped>
.footer-bottom_block :deep(svg),
.footer-bottom_block_mobile :deep(svg) {
    margin-right: 16px;
    cursor: pointer;

    @include hover-active {
        path {
            fill: $hover-color;
            @include hover-transition(0.5s);
        }
    }
}

.footer-contact_general-menu {
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    .footer-contact_block {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }
}

.footer-menu-item {
    padding-right: 15px;
}

.footer-title {
    font-size: 20px;
}
.footer-text {
    font-size: 20px;
}
.footer-logo {
    margin-bottom: 60px;
}

.footer-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.v-footer {
    padding: 60px 0;
    color: #ffffff !important;
}

.hide-rows {
    display: block;
}
.show-rows {
    display: block;
}
.show-more {
    display: none;
}

@include lg {
    .footer-title {
        font-size: 16px;
    }
    .footer-text {
        font-size: 14px;
    }
}
@include xs {
    .hide-rows {
        display: none;
    }
    .show-more {
        display: block;
    }
}

@include sm {
    .footer-menu {
        flex-direction: column-reverse;
    }

    .footer-logo {
        margin-bottom: 15px;
    }

    .footer-contact_general-menu {
        .footer-contact_block {
            gap: 15px;
        }
    }
}
</style>