<script>
export default {
    name: 'CookiesBanner',
    data() {
        return {
            isVisible: false
        }
    },
    methods: {
        isAccepted() {
            return localStorage.getItem('cookiesAccepted') == 1
        },
        hideNotification() {
            this.isVisible = false
            localStorage.setItem('cookiesAccepted', 1)
        }
    },
    mounted() {
        if (!this.isAccepted()) {
            setTimeout(() => {
                this.isVisible = true
            }, 1000)
        }
    },
    computed: {
        xs() {
            return this.$vuetify.breakpoint.xs
        }
    }
}
</script>

<template>
    <Transition name="slide">
        <div v-if="isVisible" class="cookies-notification shadow">
            <p class="mb-0">Пользуясь нашим сайтом, вы соглашаетесь с тем, что <NuxtLink to="/privacy/" target="_blank"
                    class="link font-weight-bold"><span>мы&nbsp;используем и обрабатывает данные cookies и Яндекс
                        Метрики</span>.</NuxtLink>
                Это улучшает работу сайта и взаимодействие с ним. Подтвердите ваше согласие, нажав кнопку «OK».
            </p>
            <div class="text-right">
                <v-btn color="primary" @click="hideNotification" :block="xs">OK</v-btn>
            </div>
        </div>
    </Transition>
</template>

<style scoped lang="scss">
.cookies-notification {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    background: white;
    padding: 15px 20px;
    display: flex;
    gap: 15px;
    flex-direction: column;
    z-index: 1000;
    border-radius: 8px;
    box-shadow: $card-shadow;

    p {
        a {
            color: inherit;
            text-decoration: underline;

            &:hover {
                text-decoration: none;
            }
        }
    }
}

/* Анимация появления и скрытия */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translate(-50%, 100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translate(-50%, 0);
}

@media (max-width: 959px) {
    .cookies-notification {
        left: 24px;
        right: 24px;
        transform: translate(0, 0);
    }
}

@media (max-width: 599px) {
    .cookies-notification {
        flex-direction: column;
    }
}
</style>