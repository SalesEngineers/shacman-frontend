<template>
    <div class="contacts">
        <div
            class="
                d-sm-flex d-block
                mb-9 mb-md-12
                align-center
                justify-space-between
            "
        >
            <h2 class="text-uppercase">Контакты</h2>
            <div>
                <nuxt-link
                    class="font-weight-bold underline-href contacts-link"
                    to="/contacts/"
                    >Перейти на страницу контактов</nuxt-link
                >
            </div>
        </div>

        <client-only>
            <div class="contacts__main">
                <v-card class="contacts__card shadow-card">
                    <p class="card-title font-weight-bold mb-4">
                        Выберите филиал
                    </p>
                    <template v-if="contacts && contacts.length > 0">
                        <div class="contacts__card-i">
                            <div
                                class="d-none d-md-block contacts__city"
                                @click="setCurrentCity(item)"
                                :class="
                                    currentColoredCity == item.id
                                        ? 'contacts__city-colored'
                                        : ''
                                "
                                v-for="item in contacts"
                                :key="item.id"
                            >
                                {{ item.name }}
                            </div>
                        </div> 
                        <v-select
                            class="d-block d-md-none contacts__city-input"
                            v-on:change="setCurrentCity()"
                            v-model="currentCity"
                            :items="contacts"
                            item-text="name"
                            return-object
                            color="primary"
                            item-color="secondary"
                            :menu-props="{ bootom: true, offsetY: true }"
                            hide-details
                            validate-on-blur
                            persistent-hint
                            outlined
                        >
                        </v-select>
                    </template>
                </v-card>

                <div class="contacts__main-map">
                    <v-contacts-map
                        v-if="currentCity && currentCity.map.coords"
                        :coords="currentCity.map.coords"
                    ></v-contacts-map>
                    <div class="map-disable-wrapper" v-else></div>
                    <v-card
                        class="contacts__main-info shadow-card"
                        v-if="currentCity"
                    >
                        <div
                            class="contacts__single pr-0 pr-sm-8 pr-lg-0"
                            v-if="currentCity.phone"
                        >
                            <div class="contacts_img-wrapper mb-4 mb-md-8">
                                <img src="/img/icons/phone.svg" alt="phone" />
                            </div>
                            <p class="card-title font-weight-bold mb-2">
                                Телефон
                            </p>
                            <div>
                                <a
                                    class="card-small-text"
                                    :href="`tel:${currentCity.phone.value}`"
                                    >{{ currentCity.phone.name }}</a
                                >
                            </div>
                        </div>
                        <div class="contacts__single" v-if="currentCity.email">
                            <div class="contacts_img-wrapper mb-4 mb-md-8">
                                <img src="/img/icons/mail.svg" alt="mail" />
                            </div>
                            <p class="card-title font-weight-bold mb-2">
                                E-mail
                            </p>
                            <div>
                                <a
                                    class="card-small-text"
                                    :href="`mailto:${currentCity.email.value}`"
                                    >{{ currentCity.email.name }}</a
                                >
                            </div>
                        </div>
                        <div
                            class="contacts__single pr-0 pr-sm-8 pr-lg-0"
                            v-if="currentCity.address"
                        >
                            <div class="contacts_img-wrapper mb-4 mb-md-8">
                                <img src="/img/icons/marker.svg" alt="marker" />
                            </div>
                            <p class="card-title font-weight-bold mb-2">
                                Адрес
                            </p>
                            <div>
                                <p class="card-small-text">
                                    {{ currentCity.address }}
                                </p>
                            </div>
                        </div>
                        <div
                            class="contacts__single"
                            v-if="currentCity.operating_mode.length > 0"
                        >
                            <div class="contacts_img-wrapper mb-4 mb-md-8">
                                <img
                                    src="/img/icons/graphic.svg"
                                    alt="graphic"
                                />
                            </div>
                            <p class="card-title font-weight-bold mb-2">
                                График работы
                            </p>
                            <div>
                                <div
                                    class="card-small-text"
                                    v-for="(
                                        item, index
                                    ) in currentCity.operating_mode"
                                    :key="index"
                                >
                                    <span>{{ item.name }}</span
                                    >:
                                    <span>{{ item.value }}</span>
                                </div>
                            </div>
                        </div>
                    </v-card>
                </div>
            </div>
        </client-only>
    </div>
</template>

<script>
import VContactsMap from "./VContactsMap.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        VContactsMap,
    },

    data() {
        return {
            currentCity: null,
            currentLocation: null,
            currentColoredCity: null,
        };
    },

    computed: {
        ...mapGetters({
            contacts: "getContacts"
        }),
    },

    watch: {
        contacts: {
            handler(newCity, oldCity) {
                if (!oldCity && newCity?.length > 0) {
                    this.setCurrentCity(newCity[0]);
                }
            },
            immediate: true
        },
    },
    methods: {
        setCurrentCity(objCity = false) {
            if (objCity) {
                this.currentCity = { ...objCity };
                this.currentColoredCity = objCity.id;
            } else {
                this.currentColoredCity = this.currentCity.id;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.contacts-link {
    color: $primary-color;
}
.contacts__card {
    overflow: hidden;
    padding: 40px 22px 40px 40px;
}
.contacts__card-i {
    max-height: 600px;
    overflow-y: auto;

    & {
        scrollbar-width: auto;
    }

    &::-webkit-scrollbar {
        width: 8px;        
    }

    &::-webkit-scrollbar-track {
        background: rgba(1, 84, 166, 0.2);
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: $primary-color;
        border-radius: 2px;
        border: none;
    }
}
.contacts {

    .contacts__info {
        .v-card {
            padding: 30px;
            height: 100%;
        }
    }
    .contacts__main {
        display: flex;
        column-gap: 20px;
        .contacts__main-map {
            display: flex;
            flex-flow: column;
            gap: 20px;

            min-width: 0;
            flex: 0 0 70%;
            .map-disable-wrapper {
                display: none;
            }
        }
        .contacts__card {
            flex: auto;
        }
    }
    
    .contacts__city {
        padding: 4px 0;
        cursor: pointer;
        transition: 0.5s all;

        & + .contacts__city {
            margin-top: 8px;
        }
    }
    .contacts__main-info {
        padding: 40px 30px;
        border-radius: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        row-gap: 30px;

        a {
            color: #231F20;
        }
    }
    .contacts__single-adress {
        height: 100%;
        padding: 30px 30px;
        display: flex;
        flex-direction: column;
    }
    .contacts__single-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: inherit;
        .v-icon.v-icon {
            align-items: flex-start;
        }
    }
    .contacts__single {
        max-width: 210px;
    }
    .contacts_img-wrapper {
        height: 24px;
        width: 24px;
        svg {
            height: inherit;
            width: inherit;
        }
    }
}
@include xl {
    .contacts {
        .contacts__main {
            .contacts__main-map {
                flex: 0 0 80%;
            }
        }
    }
}
@include lg {
    .contacts {
        .contacts__main-info {
            padding: 30px;
        }

        .contacts_img-wrapper {
            svg {
                height: inherit;
                width: inherit;
            }
        }
    }
}

@include md {
    .contacts {
        .contacts__single {
            flex: 50%;
            max-width: unset;
        }
    }
}
@include sm {
    .contacts {
        .contacts__main {
            position: relative;
            .contacts__main-map {
                flex: 0 0 100%;
                .map-disable-wrapper {
                    display: block;
                    height: 200px;
                }
            }
            .contacts__card {
                width: 250px;
                top: 30px;
                left: 20px;
                padding: 20px;
                position: absolute;
                z-index: 1;
            }
        }
    }
}
@include xs {
    .contacts {
        .contacts__single {
            flex: 100%;
        }
        .contacts__main {
            .contacts__card {
                padding: 15px;
                top: 10px;
                left: 10px;
            }
        }
    }
}
</style>