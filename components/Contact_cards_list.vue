<template>
    <v-row>
        <template>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="item, index in contacts" :key="index">
                <v-card class="contact-card" @click="
                    [clickCard == index ? clickCard = null : '' 
                    || clickCard == null ? clickEvent(index, item) : '' 
                    || clickCard !== null ? clickEvent(index, item) : '', scrollToMap()]"
                >
                    <v-card-actions>
                        <v-card-text>
                            <p class="card-title mb-0 mb-sm-7 mb-xl-10">{{ item.name }}</p>
                            <div class="contact-card_content d-none d-sm-flex">
                                <span class="d-flex mb-4 mb-xl-7">
                                    <v-icon class="mr-3" color="third" >mdi-map-marker</v-icon>
                                    <span>
                                        {{ item.address }}
                                    </span>
                                </span>
                                <div>
                                    <span class="d-flex mb-4 mb-xl-7">
                                        <v-icon class="mr-3" color="third" >mdi-phone</v-icon>
                                        <a @click.stop :href="item.phone.href">{{ item.phone.name }}</a>
                                    </span>
                                    <span class="d-flex" v-if="item.email">
                                        <v-icon class="mr-3" color="third" >mdi-email</v-icon>
                                        <a @click.stop :href="item.email.href">{{ item.email.name }}</a>
                                    </span>
                                </div>
                            </div>
                        </v-card-text>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="d-block d-sm-none"
                            icon
                        >
                            <v-icon x-large color="third">{{ clickCard == index ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="clickCard == index">
                            <v-card-text class="mobile-contacts d-block d-sm-none">
                                <div>
                                    <span class="d-flex mb-4 mb-xl-7">
                                        <v-icon class="mr-3" color="third" >mdi-map-marker</v-icon>
                                        <span>
                                            {{ item.address }}
                                        </span>
                                    </span>
                                    <span class="d-flex mb-4 mb-xl-7">
                                        <v-icon class="mr-3" color="third" >mdi-phone</v-icon>
                                        <a :href="item.phone.href">{{ item.phone.name }}</a>
                                    </span>
                                    <span class="d-flex">
                                        <v-icon class="mr-3" color="third" >mdi-email</v-icon>
                                        <a :href="item.email.href">{{ item.email.name }}</a>
                                    </span>
                                </div>
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </template>
    </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            clickCard: null,
            address: null
        }
    },
    computed: {
        ...mapState([
            'contacts',
            'addressMap'
        ])
    },
    methods: {
        clickEvent(index, item) {
            this.clickCard = index;
            this.$store.commit('setAddress', item)
        },
        scrollToMap() {
            try {
                if (process.browser) {
                    let map = document.getElementsByClassName("map-container")[0]
                    if(map && document.documentElement.clientWidth > 600) {
                        map.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    a {
        color: black;
    }
    .contact-card {
        height: 100%;
        transition: .5s all;
        box-shadow: 0px 4px 40px rgba(1, 84, 166, 0.05),
                    0px 2.00195px 20.0391px rgba(1, 84, 166, 0.0332233),
                    0px 1.20588px 12.1177px rgba(1, 84, 166, 0.0256112),
                    0px 0.772793px 7.4559px rgba(1, 84, 166, 0.0199626),
                    0px 0.500862px 5.0172px rgba(1, 84, 166, 0.015),
                    0px 0.315287px 3.30574px rgba(1, 84, 166, 0.0100374),
                    0px 0.181152px 1.62304px rgba(1, 84, 166, 0.0143888),
                    0px 0.0797297px 0.59459px rgba(1, 84, 166, 0.0167767) !important;
    }
    .contact-card:hover {
        box-shadow: $card-shadow !important;
    }
    .contact-card:before {
        background: unset !important;
    }
    .contact-card .v-card__actions {
        height: 100%;
    }
    .contact-card span {
        font-size: 20px;
    }
    .card-title {
        font-family: $title_bold;
        font-size: 24px;
    }
    .contact-card .v-card__text {
        padding: 30px 30px;
        height: inherit;
        display: flex;
        flex-direction: column;
    }
    .contact-card .contact-card_content {
        flex-direction: column;
        justify-content: space-between;
        height: inherit;
    }
    @include xl {
        .contact-card .v-card__text {
            padding: 50px 40px;
        }
    }
    @include lg {
        .card-title {
            font-size: 20px;
        }
        .contact-card span {
            font-size: 14px;
        }
        .contact-card .v-card__text {
            padding: 22px
        }
        .contact-card .v-card__text {
            padding: 30px 20px;
        }
    }

    @include xs {
        .contact-card .v-card__text {
            padding: 12px
        }
        .contact-card {
            height: unset;
        }
        .contact-card .v-card__actions {
            height: unset;
        }
    }
</style>