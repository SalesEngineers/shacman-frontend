<template>
    <v-row class="catalog-block">
        <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(item, index) in mainCharacteristicsArray"
            :key="item.id"
        >
            <v-card
                @mouseenter="hoverEvent(index)"
                @mouseleave="hoverEvent(null)"
                :class="hoverCard == index ? 'shadow-primary' : ''"
            >
                <nuxt-link class="card-link" :to="`/product/${item.url}/`">
                    <div class="card-content">
                        <div v-if="item.is_out_of_production" class="label-wrapper">
                            <div class="label" style="background-color: #8D8D8D;">
                                <span>Снят с производства</span>
                            </div>
                            <svg
                                width="17"
                                height="36"
                                viewBox="0 0 17 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0H17L2.55556 36H0V0Z" fill="#8D8D8D" />
                            </svg>
                        </div>
                        <component v-else-if="item.labels.length != 0" :is="item.labels[0]?.noindex ? 'noindex' : 'div'" class="label-wrapper">
                            <div class="label" :style="'background-color:' + item.labels[0].color">
                                <span>{{ item.labels[0].name }}</span>
                            </div>
                            <svg
                                width="17"
                                height="36"
                                viewBox="0 0 17 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0H17L2.55556 36H0V0Z" :fill="item.labels[0].color" />
                            </svg>
                        </component>
                        <img
                            v-if="item.images.length == 1"
                            :src="item.images[0].url"
                            :alt="item.images[0].alt"
                            :title="item.images[0].title"
                            loading="lazy"
                        />
                        <div class="hover-slider" v-else-if="item.images.length > 1">
                            <div class="hover-slide_wrapper">
                                <span
                                    @mouseover="hoverPhotoEvent(item, 0)"
                                    :class="item.hoverPhoto == 0 ? 'active-breadcrumb' : ''"
                                    class="hover-slide"
                                ></span>
                                <span
                                    @mouseover="hoverPhotoEvent(item, 1)"
                                    :class="item.hoverPhoto == 1 ? 'active-breadcrumb' : ''"
                                    class="hover-slide"
                                ></span>
                            </div>
                            <img
                                class="hover-slider_image"
                                :class="
                  hoverCard == index ? 
                    hoverSinglePhoto == indexPhoto ? 'active' : 'inactive' 
                  : 
                    item.hoverPhoto == indexPhoto ? 'active' : 'inactive'"
                                v-for="photo, indexPhoto in itemPhoto(item.images, 2)"
                                :src="photo.url"
                                :alt="photo.alt"
                                :title="photo.title"
                                loading="lazy"
                            />
                        </div>
                        <img
                            v-else
                            src="/img/no_photo.svg"
                            alt="Нет фотографии"
                            title="Нет фотографии"
                            loading="lazy"
                        />
                        <div class="card-inner-content">
                            <p class="card-title catalog-card__title">{{ item.name }}</p>
                            <div
                                class="catalog-card__characteristics"
                                v-if="item.mainCharacteristics"
                            >
                                <p v-for="(item, index) in item.mainCharacteristics" :key="index">
                                    <span>{{ item.name }}</span>
                                    <span>{{ item.value }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </nuxt-link>
                <v-expand-transition>
                    <div class="card-buttons" v-show="hoverCard == index">
                        <v-row no-gutters dense>
                            <v-col cols="6">
                                <nuxt-link :to="`/product/${item.url}/`">
                                    <v-btn
                                        color="#C8C7C7"
                                        height="43px"
                                        class="text-none font-weight-bold more-link"
                                        block
                                    >Подробнее</v-btn>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="6">
                                <v-btn
                                    v-if="item.is_out_of_production"
                                    color="primary"
                                    height="43px"
                                    class="text-none font-weight-bold btn-analog"
                                    block
                                    @click="$store.commit('onModalWindow', {title: 'Подобрать аналог', btnName: 'Подобрать аналог', text: '<strong>' + item.name + '</strong>'})"
                                >Подобрать аналог</v-btn>
                                <v-btn
                                    v-else
                                    color="primary"
                                    height="43px"
                                    class="text-none font-weight-bold"
                                    block
                                    @click="$store.commit('onModalWindow', {title: 'Узнать цену', btnName: 'Узнать цену', text: '<strong>' + item.name + '</strong>'})"
                                >Узнать цену</v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </v-expand-transition>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
        },
        category: {
            type: Object,
        },
    },
    computed: {
        mainCharacteristicsArray() {
            //Главные характеристики
            this.items.forEach((element) => {
                let mainCharacteristics = [];
                element.hoverPhoto = 0;
                this.category.product_main_characteristic_ids.forEach(
                    (mainCharCategory) => {
                        element.characteristics.forEach((char) => {
                            if (mainCharCategory == char.id) {
                                mainCharacteristics.push(char);
                            }
                        });
                    }
                );

                element.mainCharacteristics = mainCharacteristics;
            });
            return this.items;
        },
    },
    data() {
        return {
            mainCharacteristics: [],
            hoverCard: null,
            hoverSinglePhoto: 0,
        };
    },
    methods: {
        hoverEvent(index) {
            this.hoverCard = index;
        },
        hoverPhotoEvent(item, numPhoto) {
            item.hoverPhoto = numPhoto;
            this.hoverSinglePhoto = numPhoto;
        },
        itemPhoto(imagesArray, count) {
            return imagesArray.slice(0, count);
        },
    },
};
</script>

<style lang="scss" scoped>
.btn-analog {
    padding: 0 8px !important;
}
.v-card {
    height: 100%;

    .card-link {
        color: #231f20 !important;
    }

    .card-buttons {
        position: absolute;
        width: 100%;

        .more-link {
            color: white;
        }
        .v-btn {
            border-radius: 0 !important;
        }
    }
    .hover-slider {
        position: relative;
        .hover-slide_wrapper {
            height: 100%;
            display: flex;
            position: absolute;
            width: 100%;
        }
        .hover-slide {
            width: 50%;
            height: 100%;
            border-bottom: rgba(35, 31, 32, 0.5) 2px solid;
        }
        .active-breadcrumb {
            transition: all 0.5s;
            border-bottom: $hover-color 2px solid !important;
        }
        .active {
            display: block;
        }
        .inactive {
            display: none;
        }
    }
}

.v-card .card-content {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
}
.v-card .card-content .label-wrapper {
    position: absolute;
    display: flex;
    align-items: center;
    top: 25px;
    height: 36px;
    z-index: 1;

    .label {
        height: 100%;
        display: flex;
        align-items: center;
    }
    span {
        display: block;
        padding-left: 8px;
        font-size: 20px;
        text-transform: lowercase;
        color: white;
        font-weight: 800;

        @include sm {
            font-size: 16px;
        }
    }
}
.v-card .card-inner-content {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}
.catalog-block img {
    border: 0.5px solid rgba(168, 169, 173, 0.3);
    border-radius: 4px;
    height: 250px;
    width: 100%;
    object-fit: cover;
    flex-shrink: 0;
}
.catalog-card__title {
    padding: 20px;
    margin: 0;
}
.catalog-card__characteristics {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
}
.catalog-card__characteristics p {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding-bottom: 10px;
}
.catalog-card__characteristics span {
    font-size: 12px;
}
.catalog-block .v-card {
    transition: all 0.5s;
    box-shadow: unset !important;
}
.catalog-block .shadow-primary {
    box-shadow: $card-shadow !important;
    position: relative;
    z-index: 10;
}
.catalog-block a,
.catalog-block .v-card {
    height: 100%;
}
@include xl {
    .catalog-block .v-card-title {
        font-size: 24px;
    }
    .catalog-card__characteristics span {
        font-size: 16px;
    }
}
</style>