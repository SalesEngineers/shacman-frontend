<template>
    <client-only>
        <div class="map-container">
            <yandex-map 
                v-if="coords"
                :coords="coords"
                :zoom="12" 
                :controls="[]"
            >
                <ymap-marker 
                :coords="coords" 
                marker-id="123" 
                />
            </yandex-map>
            <v-card class="map-card px-5 py-7" v-if="addressMap">
                <p class="card-city card-title text-uppercase mb-sm-6">{{ addressMap.name }}</p>
                <div class="mb-4 mb-xl-7">
                    <div v-if="addressMap.address">
                        <p class="font-weight-bold mb-0">
                            Адрес:
                        </p>
                        <p>
                            {{ addressMap.address }}
                        </p>
                        </div>
                    <div v-if="addressMap.operating_mode.length != 0">
                        <p class="font-weight-bold mb-0">
                            График работы:
                        </p>
                        <p class="mb-0" v-for="item, index in addressMap.operating_mode" :key="index">
                            <span>{{ item.name }}</span>: 
                            <span>{{ item.value }}</span>
                        </p>
                    </div>
                    <div v-if="addressMap.email">
                        <p class="font-weight-bold mt-4 mb-0">
                            E-mail:
                        </p>
                        <p class="card-main mb-0">
                            <a :href="addressMap.email.href">{{ addressMap.email.name }}</a>
                        </p>
                    </div>
                </div>
                <a :href="addressMap.phone.href" class="card-phone card-title font-weight-bold text-uppercase mt-4 mb-0">{{ addressMap.phone.name }}</a>
            </v-card>
        </div>
    </client-only>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            coords: null,
        }
    },
    computed: {
        ...mapState([
            'contacts',
            'addressMap'
        ]),
    },
    watch: {
        addressMap() {
            if(this.addressMap) {
                if(this.addressMap.map.coords.indexOf('null') == -1) {
                    this.coords = JSON.parse(this.addressMap.map.coords)
                }
            }
        },
        contacts() {
            if(this.contacts && this.contacts.length !=0) {
                this.$store.commit('setAddress', this.contacts[0])
            }
        }
    },
    mounted() {
        if(this.addressMap) {
            if(this.addressMap.map.coords.indexOf('null') == -1) {
                this.coords = JSON.parse(this.addressMap.map.coords)
            }
        }
    },
    methods: {
        // onClick(e) {
        //     this.coords = e.get('coords');
        // },
    },
}
</script>

<style lang="scss" scoped>
    .map-container {
        position: relative;
    }
    .ymap-container {
        // pointer-events:none;
        margin-top: 60px;
        margin-bottom: 60px;
        height: 40vw;
        max-height: 500px;
    }
    .card-city {
        font-family: $title_bold;
        color: $primary_color;
    }
    .card-main a {
        color: black;
    }
    .card-phone {
        color: $primary_color;
    }
    .map-card {
        position: absolute;
        top: 50px;
        left: 50px;
        width: 350px;
    }

    @include md {
        .ymap-container {
            height: 50vw;
        }
    }

    @include sm {
        .ymap-container {
            height: 40vw;
            margin-bottom: 0;
        }
        .map-card {
            box-shadow: $card-shadow !important;
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
        }
        .map-container {
            margin-bottom: 60px;
        }
        
    }


    @include xs {
        .ymap-container {
            height: 60vw;
        }
    }
</style>