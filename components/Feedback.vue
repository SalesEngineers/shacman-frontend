<template>
    <div class="block-padding">
        <div class="feedback-slider_wrap">
            <h2 class="text-uppercase mb-md-14 mb-9">Отзывы</h2>
            <client-only>
                <VueSlickCarousel
                    class="feedback-slider"
                    v-bind="settingsFeedback"
                >
                    <div
                        class="feedback-block pa-7"
                        v-for="(item, index) in slides"
                        :key="index"
                    >
                        <v-img
                            height="80px"
                            max-width="160px"
                            class="mb-7"
                            position="center left"
                            contain
                            :src="item.img"
                        >
                        </v-img>
                        <p v-html="item.title"></p>
                    </div>
                </VueSlickCarousel>
            </client-only>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            slides: [
                {
                    img: "/img/feedback/rusal_logo.png",
                    title: "С&nbsp;китайскими погрузчиками до&nbsp;этого не&nbsp;работали, немного опасались, но&nbsp;стали рассматривать из-за цен. Искали поставщика с&nbsp;наличием, чтобы сразу оценить технику, посмотреть на&nbsp;качество металла, двигатель, управление. Вышли на&nbsp;&laquo;Комтранс&raquo;. Были предложения дешевле, но&nbsp;с&nbsp;долгой доставкой, поэтому не&nbsp;стали их&nbsp;рассматривать. Парни из&nbsp;&laquo;Комтранс&raquo; рассказали про марку XCMG, про завод, гарантию, объяснили, что у&nbsp;них свой сервис и&nbsp;за&nbsp;поломки волноваться не&nbsp;стоит. В&nbsp;итоге приобрели погрузчики XCMG. Машина себя оправдала, простая, надежная, работает без нареканий, обслуживается легко.",
                },
                {
                    img: "/img/feedback/evraz_logo.png",
                    title: "Выражаем благодарность компании за&nbsp;оказанное содействие в&nbsp;покупке дорожной техники китайского завода XCMG. Техника была приобретена в&nbsp;марте 2019&nbsp;года, с&nbsp;тех пор работает без нареканий, поломок за&nbsp;время эксплуатации не&nbsp;наблюдалось. Рассматриваем компанию как надёжного партнера для приобретения новой техники и&nbsp;благодарим за&nbsp;достойное сотрудничество.",
                },
                {
                    img: "/img/feedback/rusgidro_logo.png",
                    title: "&laquo;Комтранс&raquo; посоветовали коллеги, сами брали у&nbsp;них китайскую технику и&nbsp;остались довольны. Про XCMG уже были наслышаны, у&nbsp;самих в&nbsp;парке такая машинка уже есть. У&nbsp;компании большое наличие, за&nbsp;несколько дней привозят технику с&nbsp;любой своей стоянки, не&nbsp;надо греть голову с&nbsp;доставкой. Пару лет назад довелось иметь дело с&nbsp;конторой, которая только под заказ возят, так они только завтраками кормили, здесь такого нет. Ребята хорошие, серьезные, с&nbsp;такими приятно иметь дело.",
                },
                {
                    img: "/img/feedback/rusmedcom_logo.png",
                    title: "Покупали технику у&nbsp;&laquo;Комтранс&raquo; в&nbsp;2019&nbsp;году. Первое и&nbsp;главное, что порадовало&nbsp;&mdash; это наличие нужных машин прямо в&nbsp;Красноярске. Стоянка вообще большая, сразу можно посмотреть разные машины и&nbsp;сравнить вживую, что очень важно. Менеджеры &laquo;Комтранса&raquo; вели все этапы сделки, с&nbsp;радаров не&nbsp;пропадали, участвовали в&nbsp;сделке максимально. Осталось приятноевпечатление о&nbsp;технике и&nbsp;о&nbsp;самой компании.",
                },
                {
                    img: "/img/feedback/ygmk_logo.png",
                    title: "Обратились в&nbsp;&laquo;Комтранс&raquo; за&nbsp;покупкой автокрана. Искали именно китайскую модель, потому что отечественных не&nbsp;хватало по&nbsp;ТТХ, а&nbsp;европейцы дорогие. Сначала хотели везти сами напрямую из&nbsp;Китая, оказалось, что это целое приключение. &laquo;Комтранс&raquo; сказал, что у&nbsp;них своя логистика, сеть филиалов, работают они напрямую, поэтому сложностей никаких не&nbsp;будет. Сказать можно много чего, но&nbsp;на&nbsp;деле оказалось, что все правда. За&nbsp;оперативность спасибо.",
                },
            ],
            settingsFeedback: {
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 2,
                slidesToScroll: 1,
                touchThreshold: 2,

                responsive: [
                    {
                        breakpoint: 1264,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },
        };
    },
};
</script>

<style lang="scss">
.feedback-block {
    height: 100%;
}
.feedback-slider {
    padding: 0 60px 60px;

    .slick-dots {
        bottom: 0px !important;
    }
}
.feedback-slider p {
    margin: 0;
}
.feedback-slider .slick-track {
    display: flex !important;
}
.feedback-slider .slick-slide > div {
    height: 100%;
}
.feedback-slider .slick-slide {
    height: inherit !important;
    margin: 0 10px;
    box-shadow: 0px 2px 4px rgba(1, 84, 166, 0.07),
        0px 2.00195px 4.0391px rgba(1, 84, 166, 0.0532233),
        0px 1.20588px 4.1177px rgba(1, 84, 166, 0.0456112),
        0px 0.772793px 15.4559px rgba(1, 84, 166, 0.0399626),
        0px 0.500862px 10.0172px rgba(1, 84, 166, 0.035),
        0px 0.315287px 6.30574px rgba(1, 84, 166, 0.0300374),
        0px 0.181152px 3.62304px rgba(1, 84, 166, 0.0243888),
        0px 0.0797297px 1.59459px rgba(1, 84, 166, 0.0167767);
}
.feedback-slider .slick-list {
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 -10px !important;
}
.feedback-slider .slick-arrow {
    font-size: 0;
    line-height: 0;
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
}

.feedback-slider .slick-prev {
    left: 5px;
    z-index: 10;
}

.feedback-slider .slick-prev::before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    border-left: 5px solid $primary-color;
    border-bottom: 5px solid $primary-color;
    transform: rotate(45deg);
    -webkit-transition: border-bottom 0.5s, border-left 0.5s,
        -webkit-transform 0.5s;
    transition: border-bottom 0.5s, border-left 0.5s, transform 0.5s;
    opacity: 1;
}

.feedback-slider .slick-prev:hover::before {
    border-left: 5px solid $hover-color !important;
    border-bottom: 5px solid $hover-color !important;
}

.feedback-slider .slick-next {
    right: 5px;
    z-index: 10;
}

.feedback-slider .slick-next::before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    border-top: 5px solid $primary-color;
    border-right: 5px solid $primary-color;
    transform: rotate(45deg);
    -webkit-transition: border-top 0.5s, border-right 0.5s,
        -webkit-transform 0.5s;
    transition: border-top 0.5s, border-right 0.5s, transform 0.5s;
    opacity: 1;
}

.feedback-slider .slick-next:hover::before {
    border-top: 5px solid $hover-color !important;
    border-right: 5px solid $hover-color !important;
}
.feedback-slider .slick-dots li button:before {
    color: $primary-color;
    opacity: 1;
}

.slick-dots li.slick-active button:before {
    color: $hover-color !important;
    opacity: 1;
}
.slick-dots {
    padding: 0 !important;
    bottom: -40px !important;
    left: 0;
}
.slick-dots li {
    margin: 0 10px !important;
}
.slick-dots li button:before {
    font-size: 16px !important;
}

@include md {
    .slick-arrow {
        display: none !important;
    }
    .feedback-slider {
        //padding: 0;
    }
}
</style>