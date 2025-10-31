<template>
    <div ref="serviceBox" class="service-box" id="serviceWidget">
        <button class="service-box-close" @click.prevent="close" title="Закрыть">×</button>
        <img src="/img/service-box.webp" alt="">
        <a href="#" class="service-box-link" @click.prevent="goToCatalog"></a>
    </div>
</template>

<script>
export default {
    name: "ServiceWidget",

    mounted() {
        this.checkAndShow();
    },

    methods: {
        goToCatalog() {
            this.close();
            window.open("https://chinasparts.ru/category/komplekty-dlya-obsluzhivaniya-spectekhniki/", "_blank");
        },

        open() {
            this.$refs.serviceBox.classList.add("service-box--show")
        },

        close() {
            this.$refs.serviceBox.classList.remove("service-box--show");
            this.setHideTimeout();
        },

        checkAndShow() {
            const hideUntil = localStorage.getItem('serviceWidgetHideUntil');
            
            if (hideUntil) {
                const now = new Date().getTime();
                if (now < parseInt(hideUntil)) {
                    // Еще не прошло 15 минут
                    const timeLeft = parseInt(hideUntil) - now;
                    setTimeout(() => this.open(), timeLeft);
                    return;
                } else {
                    // Время истекло, удаляем из localStorage
                    localStorage.removeItem('serviceWidgetHideUntil');
                }
            }
            
            // Показываем после проверки
            setTimeout(() => this.open(), 3000);
        },

        setHideTimeout() {
            const hideUntil = new Date().getTime() + (15 * 60 * 1000); // 15 минут
            localStorage.setItem('serviceWidgetHideUntil', hideUntil.toString());
        }
    }
}
</script>

<style lang="scss">
.service-box {
    position: fixed;
    width: 430px;
    height: 290px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    bottom: 20px;
    right: -500px;
    z-index: 1000;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    opacity: 0;
    transform: translateX(0);
    border-radius: 8px;
    overflow: hidden;

    @include sm {
        width: 290px;
        height: 194px;

        img {
            display: block;
            width: 100%;
        }
    }
}

.service-box--show {
    right: 20px;
    opacity: 1;
    transform: translateX(0);
}

.service-box-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    background: transparent;
    border: 1px solid #f6ba15;
    color: #f6ba15;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    line-height: 1;
    
    &:hover {
        background: rgba(0, 0, 0, 0.7);
    }
}

/* Дополнительные стили для красоты */
.service-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: 12px 12px 0 0;
}

.service-box:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}

.service-box-link {
    position: absolute;
    inset: 0;
}
</style>