<template>
    <div class="main-window-wrap">
        <div style="position: absolute; height: 100%; width: 100%">
            <v-carousel
                v-if="items.length !== 1"
                v-model="currentSlideIndex"
                cycle
                height="100%"
                hide-delimiter-background
                :show-arrows="false"
                interval="7000"
            >
                <v-carousel-item height="100%" v-for="image, index in items" :key="index">
                    <img v-if="index > 0" :src="image" loading="lazy" />
                    <img v-else :src="image" loading="lazy" />
                </v-carousel-item>
            </v-carousel>
            <v-carousel
                v-else
                v-model="currentSlideIndex"
                cycle
                height="100%"
                hide-delimiter-background
                hide-delimiters
                :show-arrows="false"
            >
                <v-carousel-item height="100%" v-for="(image, i) in items" :key="i">
                    <img :src="image" loading="lazy" />
                </v-carousel-item>
            </v-carousel>
        </div>
        <v-container class="main-window-content_wrap">
            <v-row class="main-window_content">
                <v-col md="12" lg="11" xl="9">
                    <component class="pt-16 slide-title" :is="currentTag" v-html="currentTitle"></component>
                    <!-- <div class="pt-16 slide-title" v-html="currentTitle"></div> -->
                    <div v-if="currentContent.length > 0" class="slide-contents">
                        <div class="slide-content" v-for="(content, i) in currentContent" :key="i">
                            <div class="slide-content__title" v-html="content.title"></div>
                            <div class="slide-content__description" v-html="content.description"></div>
                        </div>
                    </div>
                    <div v-if="currentBullets?.items?.length > 0" class="bullets" :style="{'--cols':currentBullets?.cols || 1}">
                        <div
                            v-if="currentBullets.title"
                            class="bullet-title"
                        >{{ currentBullets.title }}</div>
                        <ul class="bullet-list">
                            <li
                                v-for="(bullet, i) in currentBullets.items"
                                :key="i"
                                class="bullet-item"
                            >
                                <span>{{ bullet }}</span>
                            </li>
                        </ul>
                    </div>
                    <nuxt-link v-if="currentLink" :to="currentLink">
                        <v-btn
                            class="main-window_button text-none font-weight-bold"
                            color="primary"
                        >{{ currentBtnTitle }}</v-btn>
                    </nuxt-link>
                    <v-btn
                        v-else-if="currentBtnTitle"
                        class="main-window_button text-none font-weight-bold"
                        color="primary"
                        @click="$store.commit('onModalWindow', {title: currentBtnTitle, btnName: currentBtnTitle})"
                    >{{ currentBtnTitle }}</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <div v-if="currentNotes.length > 0" class="notes">
            <v-container>
                <div class="note" v-for="(note, i) in currentNotes" :key="i" v-html="note"></div>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Техника XCMG",
        },
        btnTitle: {
            type: String,
            default: "Получить консультацию",
        },
        link: {
            type: [Object, String],
            default: null,
        },
        slides: {
            type: Array,
            default: () => [],
        },
        tag: {
            type: String,
            default: 'div'
        }
    },

    computed: {
        currentSlide() {
            const slide = this.slides[this.currentSlideIndex];

            if (typeof slide === "object") {
                return slide;
            }

            return null;
        },
        currentTitle() {
            return this.currentSlide?.title || this.title;
        },
        currentBtnTitle() {
            return this.currentSlide?.btnTitle || this.btnTitle;
        },
        currentLink() {
            return this.currentSlide?.link ?? this.link;
        },
        currentBullets() {
            return this.currentSlide?.bullets ?? {};
        },
        currentNotes() {
            return this.currentSlide?.notes ?? [];
        },
        currentContent() {
            return this.currentSlide?.content ?? [];
        },
        currentTag() {
            return this.currentSlide?.tag ?? this.tag;
        },
        items() {
            return this.slides.map((slide) =>
                typeof slide === "object" ? slide.image : slide
            );
        },
    },

    data() {
        return {
            currentSlideIndex: 0,
        };
    },
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
}
.main-window-wrap {
    position: relative;
    padding-bottom: 80px;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-flow: column;

    &:after {
        background: linear-gradient(
            0deg,
            rgba(0, 21, 43, 0.4),
            rgba(0, 21, 43, 0.4)
        );
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        pointer-events: none;
        user-select: none;
    }
}
.main-window-wrap img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
}
.main-window-content_wrap {
    position: relative;
    margin-top: auto;
    margin-bottom: auto;
    padding-top: 100px;
    position: relative;
    z-index: 1;
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
.bullets {
    color: white;
}
.bullet-list {
    font-weight: 500;
    font-size: 24px;
    line-height: 130%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 34px;
    margin-left: -20px;
    margin-right: -20px;
    padding: 0;
}
.bullet-item {
    flex: 0 0 calc(100% / var(--cols));
    max-width: calc(100% / var(--cols));
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 5px;

    span {
        position: relative;
        padding-left: 15px;

        &:before {
            position: absolute;
            left: 0;
            top: 13px;
            content: "";
            width: 5px;
            height: 5px;
            background: $secondary-color;
        }
    }
}
.bullet-title {
    font-family: "Tektur_Bold";
    font-size: 24px;
    line-height: 30px;
    text-transform: uppercase;
    margin-bottom: 10px;
}
.notes {
    position: relative;
    margin-top: auto;
    color: white;
    font-size: 13px;
    line-height: 130%;
    padding: 46px 0 0;
    z-index: 1;
    //pointer-events: none;
    user-select: none;

    a {
        pointer-events: all;
    }
}
.slide-contents {
    display: flex;
    flex-wrap: wrap;
    color: white;
    margin-bottom: 34px;
    margin-left: -20px;
    margin-right: -20px;
}

.slide-content {
    flex: 1 1 50%;
    max-width: 50%;
    padding-left: 20px;
    padding-right: 20px;
}
.slide-content__title {
    font-family: "Tektur_bold";
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    text-transform: uppercase;
    color: $hover-color;
    margin-bottom: 2px;
}
.slide-content__description {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
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
        height: 100%;
    }
}
@include xs {
    .main-window-wrap .main-window_button {
        width: 100%;
    }
}

@media (max-width: 1500px) {
    .bullet-title {
        font-size: 20px;
    }
    .bullet-list {
        font-size: 18px;

        span {
            &:before {
                top: 9px;
            }
        }
    }
}

@media (max-width: 1024px) {
    .bullet-item {
        flex: 0 0 50%;
        max-width: 50%;
    }
}

@media (max-width: 767px) {
    .slide-title {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 15px;
    }

    .bullet-title {
        font-size: 18px;
    }

    .bullet-list {
        font-size: 14px;
    }

    .slide-content__title {
        font-size: 24px;
        line-height: 30px;
    }

    .slide-content__description {
        font-size: 12px;
        line-height: 15px;
    }
}

@media (max-width: 576px) {
    .bullet-item {
        flex: 0 0 100%;
        max-width: 100%;
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