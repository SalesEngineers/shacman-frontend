<template>
    <div class="main-window-wrap">
        <div style="position: absolute; height: 100%; width: 100%">
            <v-carousel
                v-if="slides.length != 1"
                cycle
                height="100%"
                hide-delimiter-background
                :show-arrows="false"
                v-model="index"
            >
                <v-carousel-item
                    height="100%"
                    v-for="(slide, index) in slides"
                    :key="index"
                >
                    <img v-if="index > 0" :src="slide.image" loading="lazy" />
                    <img v-else :src="slide.image" loading="lazy" />
                </v-carousel-item>
            </v-carousel>
            <v-carousel
                v-else
                cycle
                height="100%"
                hide-delimiter-background
                hide-delimiters
                :show-arrows="false"
            >
                <v-carousel-item
                    height="100%"
                    v-for="(slide, i) in slides"
                    :key="i"
                >
                    <img :src="slide.image" loading="lazy" />
                </v-carousel-item>
            </v-carousel>
        </div>
        <v-container class="main-window-content_wrap">
            <v-row class="main-window_content">
                <v-col lg="8">
                    <component class="pb-10 pb-sm-15 pt-16 slide-title" :is="currentSlide?.tag || tag" v-html="currentSlide?.title || title"></component>

                    <nuxt-link :to="currentSlide.link" v-if="currentSlide?.link">
                        <v-btn
                            class="main-window_button text-none font-weight-bold"
                            color="primary"
                        >
                            {{ currentSlide.btnTitle || btnTitle }}
                        </v-btn>
                    </nuxt-link>
                    <v-btn
                        v-else
                        class="main-window_button text-none font-weight-bold"
                        color="primary"
                        @click="
                            $store.commit('onModalWindow', {
                                title: currentSlide.btnTitle || btnTitle,
                                btnName: currentSlide.btnTitle || title,
                            })
                        "
                    >
                        {{ currentSlide.btnTitle || btnTitle }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Техника XCMG",
        },
        slides: {
            type: Array,
        },
        btnTitle: {
            type: String,
            default: "Получить консультацию",
        },
        link: {
            type: String,
            default: "",
        },
        tag: {
            type: String,
            default: 'div'
        }
    },
    data() {
        return {
            index: 0,
        };
    },

    computed: {
        currentSlide() {
            return this.slides[this.index]
        }
    }
};
</script>

<style lang="scss" scoped>
.slide-title {
    color: white;
    font-size: 48px;
    margin-bottom: 30px;
    font-family: "Tektur_Bold";
    line-height: 1.2;

    @include lg {
		font-size: 52px;
	}

	@include sm {
		font-size: 42px;
	}

    @media (max-width: 767px) {
        font-size: 32px;
        line-height: 40px;
    }

    @include xs {
        font-size: 26px;
        line-height: 30px;
    }
}
.main-window-wrap {
    position: relative;
    height: 100vh;
    display: flex;
}
.main-window-wrap img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}
.main-window-content_wrap {
    position: relative;
}
.main-window-content_wrap {
    display: flex;
    align-items: center;
}
.main-window-wrap .main-window_button {
    font-size: 20px;
    height: 47px;
    width: 320px;
}
@include xl {
    .main-window-wrap .main-window_button {
        font-size: 24px;
        height: 58px;
        width: 370px;
    }
}
@include sm {
    .main-window-wrap {
        height: 55vh;
    }
}
@include xs {
    .main-window-wrap .main-window_button {
        width: 100%;
    }
}
</style>

<style lang="scss">
.main-window-wrap .v-carousel__controls__item {
    margin: 0 6px !important;
}
.main-window-wrap .v-carousel__controls {
    justify-content: end;
    padding-right: 100px;
    padding-bottom: 55px;
}
.main-window-wrap .v-item-group .v-carousel__controls__item {
    color: $primary_color;
}
.main-window-wrap .v-item-group .v-icon {
    opacity: 1;
}
.main-window-wrap .v-item-group .v-item--active {
    color: $hover-color !important;
}
@include sm {
    .main-window-wrap .v-carousel__controls {
        justify-content: center;
        padding-right: 0px;
        padding-bottom: 20px;
    }
}
</style>