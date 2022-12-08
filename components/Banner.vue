<template>
  <v-card class="banner">
    <v-row no-gutters class="flex-row-reverse">
        <v-col cols="12" md="6">
            <div class="banner-imagae__wrap fill-height">
                <svg viewBox="0 0 104 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0H104L17 239H0.5V0Z" fill="#0153A5"/>
                <path d="M0.5 0H104L17 239H0.5V0Z" fill="#0153A5"/>
                </svg>
                <div class="d-flex fill-height">
                    <img
                        class="banner-image"
                        :src="img.url"
                        :alt="img.alt"
                        :title="img.title"
                    />
                </div>
            </div>
        </v-col>
        <v-col cols="12" md="6">
            <div class="banner-content">
                <h2 class="banner-title text-uppercase" v-html="title">
                </h2>
                <v-btn class="banner-button text-none font-weight-bold" color="white" @click="$store.commit('onModalWindow', {title: 'Получить предложение', btnName: 'Получить предложение'})">
                    Получить предложение
                </v-btn>
            </div>
        </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
    props: {
        img: {
            type: Object,
            default() {
                return {
                    url: '/img/no_photo.svg',
                    alt: 'Нет фото',
                    title: 'Нет фото'
                }
            }
        },
        title: {
            type: String,
            default: '<span style="color: #FEC210">Скидки</span><br><span> на спецтехнику и навесное</span>'
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
    .banner {
        background-color: $primary-color !important;
        box-shadow: $card-shadow !important;
    }
    .banner-content {
        position: relative;
        padding: 35px 30px;
    }
    .banner-imagae__wrap {
        position: relative;
        overflow: hidden;
    }
    .banner-imagae__wrap svg {
        position: absolute;
        z-index: 1;
        left: -15px;
        height: 100%;
        -webkit-filter: blur(1px);
        -moz-filter: blur(1px);
        -o-filter: blur(1px);
        -ms-filter: blur(1px);
        filter: blur(1px);
    }
    .banner-imagae__wrap svg path{
        fill: $primary-color;
    }
    .banner-image {
        max-height: 320px;
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
    .border {
        position: absolute;
    }
    .banner-title {
        margin-bottom: 20px;
        font-size: 40px;
        font-family: $title_bold;
        color: white;
    }
    .banner-button {
        width: 350px;
        height: 48px !important;
        font-size: 24px;
    }
    @include lg {
        .banner-title {
            font-size: 30px;
        }
        .banner-button {
            font-size: 16px;
            width: 250px;
        }
    }
    @include md {
        .banner-title {
            font-size: 26px;
        }
    }
    @include sm {
        .banner-button {
            width: 100%;
        }
        .banner-imagae__wrap svg {
            display: none;
        }
    }
</style>