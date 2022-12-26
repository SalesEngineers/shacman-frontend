<template>
    <client-only>
        <div :class="isBig ? 'map-container' : 'map-container-block'">
            <yandex-map 
                v-if="coords"
                :coords="filteredCoords"
                :zoom="12" 
                :controls="[]"
            >
                <ymap-marker 
                :coords="filteredCoords" 
                marker-id="123" 
                />
            </yandex-map>
        </div>
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            coordsDefault: [54.82896654088406,39.831893822753904]
        }
    },
    props: {
        isBig: {
            type: Boolean,
            default: false
        },
        coords: {
            type: String,
            default: '[54.82896654088406,39.831893822753904]'
        }
    },
    computed: {
        filteredCoords() {
            if(this.coords && this.coords.indexOf('null') == -1) {
                return JSON.parse(this.coords)
            } else {
                return this.coordsDefault
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .ymap-container {
        height: 100%;
        a {
            font-size: 16px !important;
        }
    }
    .map-container-block {
        flex: 1 0 0;
        position: relative;
        .ymap-container {            
            border-radius: 16px;
            overflow: hidden;
        }
    }
    .map-container {
        position: relative;
        
        .ymap-container {
            margin-top: 20px;
            margin-bottom: 20px;
            height: 40vw;
            max-height: 500px;
            border-radius: 16px;
            overflow: hidden;
        }
    }

    @include md {
        .map-container {
            .ymap-container {
                height: 50vw;
            }
        }
    }

    @include sm {
        .map-container {
            .ymap-container {
                height: 66vw;
            }
        }
    }

    @include xs {
        .map-container {
            margin-bottom: 60px;
            .ymap-container {
                height: 60vw;
                margin-bottom: 0;
            }
        }
        .map-container-block {
            .ymap-container {
                min-height: 350px;
            }
        }
    }
</style>