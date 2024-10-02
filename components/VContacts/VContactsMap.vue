<template>
    <client-only>
        <div :class="isBig ? 'map-container' : 'map-container-block'">
            <yandex-map ref="map" :coords="center" :zoom="12" :controls="[]" :map-was-initialized="initialized">
                <ymap-marker v-for="(marker, i) in markers" :key="i" :coords="marker" :marker-id="`marker-${i}`"></ymap-marker>                
            </yandex-map>
        </div>
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            coordsDefault: [54.82896654088406, 39.831893822753904],
            center: [],
            markers: []
        };
    },
    props: {
        isBig: {
            type: Boolean,
            default: false,
        },
        map: {
            type: Object,
            default: () => ({}),
        },
    },
    watch: {
        map: {
            handler(map) {
                const zoom = map.zoom ? map.zoom : 12;
                
                try {
                    const coords = JSON.parse(map.coords);
                    this.$refs.map?.myMap?.setZoom(zoom)
                    const isMultiple = this.isArrayWithArrays(coords);

                    if (isMultiple) {
                        this.center = JSON.parse(map.center);
                        this.markers = coords;
                    } else {
                        this.center = coords;
                        this.markers = [coords];
                    }
                } catch (e) {
                    this.markers = [this.coordsDefault];
                    this.center = this.coordsDefault;
                }
            },
            immediate: true,
        },
    },
    methods: {
        isArrayWithArrays(arr) {
            // Проверяем, что все элементы являются массивами
            return Array.isArray(arr) && arr.every(Array.isArray);
        },

        initialized() {
            console.log('')
        }
    },
};
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