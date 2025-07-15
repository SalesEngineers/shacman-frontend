<template>
    <v-dialog
      v-model="showModal"
      max-width="500px"
    >
      <v-card>
        <v-icon class="btn-close" color="primary" @click="$store.commit('offModalWindow')">mdi-plus</v-icon>
        <v-form  ref="form" class="form-order">
            <div class="mb-5">
                <p class="modal-title text-uppercase">{{ modalContent.title }}</p>
                <p v-html="modalContent.text"></p>
                <p class="font-weight-bold mb-3">Ваше имя<span class="primary-text">*</span></p>
                <v-text-field
                    dense
                    v-model="name"
                    :rules="[() => !!name || 'Введите имя']"
                    label="Например, Иван"
                    outlined
                    single-line
                    required
                ></v-text-field>
                <p class="font-weight-bold mb-3">Ваш телефон<span class="primary-text">*</span></p>
                <v-text-field
                    dense
                    v-model="phone"
                    @focus="phoneMask()"
                    @input="phoneMask()"
                    @blur="phoneMaskClear()"
                    :rules="[() => !!phone || 'Введите номер телефона']"
                    v-mask="'+7 (###) ###-##-##'"
                    label="+7 (9__)___-__-__"
                    outlined
                    required
                    single-line
                ></v-text-field>
            </div>
            <v-btn class="modal-window_button text-none font-weight-bold mb-4" :disabled="!agree" color="primary" @click="order()">{{ modalContent.btnName }}</v-btn>
            <v-checkbox v-model="agree" class="mt-0">
                <template v-slot:label>
                    <div>
                        Нажимая кнопку «{{ modalContent.btnName }}» Вы даете согласие на обработку
                        <a href="/privacy/" target="_blank" class="link font-weight-bold" @click.stop><span>персональных данных</span></a>.
                    </div>
                </template>
            </v-checkbox>
        </v-form>
      </v-card>
    </v-dialog>

</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            name: '',
            phone: '',
            agree: false
        }
    },
    computed: {
        showModal: {
            get() {
                return this.$store.getters.getModalWindow
            },
            set() {
                this.$store.commit('offModalWindow')
                this.name = ''
                this.phone = ''
            }
        },
        ...mapState([
            'modalContent'
        ])
    },
    methods: {
        order() {
            this.$refs.form.validate();
            if (this.$refs.form.validate()) {
                //формируем продукт
                let product = '-'
                let title = this.$meta().resume().metaInfo.title.replace(' - XCMG', '')

                if (title == 'XCMG' || title == '') {
                    title = '-'
                }
                if(this.modalContent.text.indexOf('strong') != -1) {
                    product = this.modalContent.text.replace('<strong>', '').replace('</strong>', '')
                } 


                this.$axios.post('/form-order', {
                    fields: {
                        name: this.name,
                        phoneNumber: this.phone,
                        product: product,
                        title: title,
                    },
                    labels: {
                        name: 'Имя',
                        phoneNumber: 'Номер телефона',
                        product: 'Название продукта',
                        title: 'Тип заявки',
                    }
                }).then((res) => {
                    this.name = ''
                    this.phone = ''
                    this.$store.commit('offModalWindow')
                    this.$router.push('/success/')
                }).catch((e) => {
                    console.log(e)
                })
            }
        },
        phoneMask(){
            if(this.phone == '' || this.phone[3] !== '(') {
                this.phone = '+7 ( '
            } if (this.phone == '+7 (') {
                this.phone = ''
            }

        },
        phoneMaskClear(){
            if(this.phone.length < 18) {
                this.phone = ''
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    .v-card {
        position: relative;
        padding: 56px 40px;
    }
    .btn-close {
        position: absolute;
        right: 25px;
        top: 25px;
        font-size:35px;
        transform:rotate(45deg);
    }
    .modal-window_button {
        width: 100%;
        font-size: 20px;
        height: 48px !important;
    }
    @include xs {
        .v-card {
            padding: 36px 20px;
        }
        .btn-close {
            right: 15px;
            top: 15px;
        }
    }
</style>

<style lang="scss">
.link {
    color: inherit;
    text-decoration: underline;

    &:hover {
        text-decoration: none;
    }
}
    .v-dialog {
        box-shadow: $card-shadow !important;
    }
    .modal-title {
        font-size: 30px;
        font-family: $title_bold;
    }
</style>