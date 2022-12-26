<template>
    <div class="map-card-wrapper">
        <v-card class="map-card px-5 py-7">
            <p class="card-city card-title text-uppercase mb-sm-6">{{ name }}</p>
            <div class="mb-4 mb-xl-7">
                <div v-if="address">
                    <p class="font-weight-bold mb-0">Адрес:</p>
                    <p>{{ address }}</p>
                </div>
                <div v-if="modes.length">
                    <p class="font-weight-bold mb-0">График работы:</p>
                    <p class="mb-0" v-for="item, index in modes" :key="index">
                        <span>{{ item.name }}</span>: 
                        <span>{{ item.value }}</span>
                    </p>
                </div>
                <div v-if="email">
                    <p class="font-weight-bold mt-4 mb-0">E-mail:</p>
                    <p class="card-main mb-0"><a :href="`mailto:${email}`">{{ email }}</a></p>
                </div>
            </div>
            <a v-if="phone" :href="phoneForTag" class="card-phone card-title font-weight-bold text-uppercase mt-4 mb-0">{{ phoneFormat }}</a>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String
        },

        address: {
            type: String
        },

        modes: {
            type: Array,
            default: () => ([])
        },

        email: {
            type: String
        },

        phone: {
            type: String
        }
    },

    computed: {
        phoneForTag() {
            return this.phone ? `tel:${this.phone.replace(/\D/g, '')}` : '';
        },

        phoneFormat() {
            let match = ('' + this.phone).replace(/\D/g, '').match(/^(7|8|)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
            
            const prefix = match[1] == 7 ? '+' : '';

            if (match) {
                return [prefix, match[1], ' ', match[2], ' ', match[3], '-', match[4], '-', match[5]].join('')
            }
            
            return this.phone;
        }
    }
}
</script>

<style lang="scss" scoped>
    .map-card-wrapper {
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        pointer-events: none;
    }
    .map-card {
        width: 300px;
        box-shadow: $card-shadow !important;
        position: sticky;
        top: 120px;
        pointer-events: all;
    }
    .card-city {
        font-family: $title_bold;
    }
    .card-main a {
        color: black;
    }
    .card-phone {
        color: $primary_color;
    }

    @include xl {
        .map-card {
            width: 400px;
        }
    }
  
    @include sm {
        .map-wrapper {
            margin-bottom: 75px;
        }
        .map-card-wrapper {
            position: relative;
            top: 0;
            left: 0;
        }
        .map-card {
            margin-top: 20px;
            width: 100%;
        }
    }
</style>