<template>
  <v-container class="feedback-man_block">
    <v-row>
        <v-col cols="12" sm="6">
            <div class="d-flex flex-column justify-center fill-height">
                <h2 class="text-uppercase mb-9" v-html="title">
                </h2>
                <p class="mb-14" v-html="content">
                </p>
                <v-btn class="main-window_button text-none font-weight-bold mb-md-14 mb-9" color="primary" @click="$store.commit('onModalWindow', {title: btnTitle, btnName: btnTitle})">
                    {{ btnTitle }}
                </v-btn>
            </div>
        </v-col>
        <v-col cols="12" sm="6">
            <div class="d-flex flex-column justify-end fill-height">
                    <img loading="lazy" src="/img/form.jpg"/>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Оствьте заявку'
    },
    content: {
      type: String,
      default: 'Квалифицированный менеджер поможет с&nbsp;выбором услуги и&nbsp;ответит на&nbsp;любой вопрос'
    },
    btnTitle: {
        type: String,
        default: 'Подать заявку'
    }
  },
}
</script>

<style lang="scss" scoped>
    .feedback-man_block .main-window_button {
        font-size: 20px;
        height: 47px;
        width: 320px;
    }
    .feedback-man_block img {
        max-height: 900px;
        object-fit: contain;
    }
    @include xl {
        .feedback-man_block .main-window_button {
            font-size: 24px;
            height: 58px;
            width: 400px;
        }
    }
    @include md {
        .feedback-man_block .main-window_button {
            font-size: 20px;
            height: 47px;
            width: 245px;
        }
    }
    @include xs {
        .feedback-man_block .main-window_button {
            width: 100%;
        }
    }
</style>