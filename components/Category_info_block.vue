<template>
    <div class="advantages-block block-padding" v-if="array && array.length != 0">
        <h2 class="mb-md-14 mb-9 text-uppercase">
            Преимущества автокранов xcmg
        </h2>
        <v-row class="align-center mb-md-14 mb-10" :class="[++index % 2 ? '' : 'flex-row-reverse']" v-for="item, index in array" :key="index">
            <template>
                <v-col cols="12" md="6">
                    <div :class="[index % 2 ? 'mr-xl-9 mr-lg-4' : 'ml-xl-9 ml-lg-4']">
                        <h3 class="mb-5 mb-md-9">
                            0{{ index }}. {{ item.name }}
                        </h3>
                        <p v-html="item.content">
                        </p>
                    </div>
                </v-col>
                <v-col cols="12" md="6" v-if="item.image">
                    <img :src="item.image.url" :alt="item.image.alt" :title="item.image.title">
                </v-col>
            </template>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <iframe src="https://www.youtube.com/embed/UNSInCTi12Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            array: [
                {
                    name: 'Универсальность',
                    content: 'Автокраны XCMG универсальны, по&nbsp;качеству технического и&nbsp;конструкционного исполнения автокраны XCMG успешно конкурируют с&nbsp;европейскими производителями и&nbsp;занимают лидирующие позиции на&nbsp;российском рынке.',
                    image: {
                        url: '/img/info-block/avtokran_back.jpg',
                        alt: 'avtokran_back',
                        title: 'avtokran_back'
                    }
                },
                {
                    name: 'Мировые стандарты',
                    content: 'Автокраны XCMG отлично подходят для эксплуатации в&nbsp;суровых российских условиях:<br><br><ul><li>доступное языковое сопровождение операционной системы (на&nbsp;русском языке);</li><li>устойчивость к&nbsp;низкому температурному режиму благодаря современной отопительной системе;</li><li>режимы повышенной и&nbsp;пониженной мощности для соблюдения баланса между расходом топлива и&nbsp;динамикой производительности;</li><li>соответствие стандартам&nbsp;РФ и&nbsp;Евро&nbsp;IV.</li></ul>',
                    image: {
                        url: '/img/info-block/avtokran_inner.jpg',
                        alt: 'avtokran_inner',
                        title: 'avtokran_inner'
                    }
                },
                {
                    name: 'Надёжный дилер',
                    content: 'KOMTRANS Group&nbsp;&mdash; крупнейший дилер XCMG. Компания имеет 12&nbsp;сервисных центров, 20&nbsp;выездных бригад, собственные склады запчастей и&nbsp;реализует 1000 единиц техники в&nbsp;год.<br>KOMTRANS Group соблюдает сроки поставки, несёт ответственность по&nbsp;договору и&nbsp;отвечает за&nbsp;качество поставляемой техники. Сопровождаем клиента как на&nbsp;этапе покупки техники, так и&nbsp;в&nbsp;период гарантийного и&nbsp;постгарантийного обслуживания.',
                    image: {
                        url: '/img/info-block/felials_map.jpg',
                        alt: 'felials_map',
                        title: 'felials_map'
                    }
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .advantages-block {
        img {
            display: block;
            width: 100%;
            border-radius: 4px;
            box-shadow: $card-shadow;
            max-height: 500px;
            object-fit: cover;
        }
        iframe {
            width: 100%;
            box-shadow: $card-shadow;
            border-radius: 4px;
            height: 25vw;
        }
    }
    @include md {
        .advantages-block {
            iframe {
                height: 40vw;
            }
        }
    }
    @include xs {
        .advantages-block {
            iframe {
                height: 50vw;
            }
        }
    }
</style>