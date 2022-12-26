<template>
    <div class="svg-map-contacts" @mouseleave="onMouseLeave">       
        <v-svg ref="map"></v-svg>
        <v-scroll-y-transition>
            <svg-map-contact 
                v-if="contact"
                :key="contact.name"
                :name="contact.name" 
                :address="contact.address"
                :modes="contact.operating_mode"
                :email="contact.email.value"
                :phone="contact.phone.value"
            ></svg-map-contact>
        </v-scroll-y-transition>
    </div>
</template>

<script>
import VSvg from "./VSvg.vue";
import SvgMapContact from "../SvgMap/SvgMapContact.vue";

export default {
    props: {
        citySlug: {
            type: String
        },

        contacts: {
            type: Array,
            default: () => ([])
        }
    },

    components: {
        VSvg,
        SvgMapContact
    },

    data() {
        return {
            cities: [],
            dotes: [],
            contact: null,
            defaultCity: null
        }
    },

    mounted() {
        const map = this.$refs.map.$el;

        if (map) {
            this.cities = [...map.querySelectorAll("#cities > g > path")];
            this.dots = [...map.querySelectorAll('[id^="dot-"]')];
        }

        this.cities.forEach(city => {
            city.addEventListener("mouseenter", this.onMouseEnter);
        });

        const defaultCitySlug = this.citySlug ? this.citySlug?.toLowerCase() : '';
        this.defaultCity = this.cities.find(city => city.closest('g')?.id?.toLowerCase() === defaultCitySlug);
    },

    beforeDestroy() {
        this.cities.forEach(city => {
            city.removeEventListener("mouseenter", this.onMouseEnter);
        });
    },

    methods: {
        onMouseEnter(e) {
            const target = e.target;
            const id = target.closest('g')?.id?.toLowerCase();
            
            this.setMapActive(id);            
        },

        setMapActive(slug) {
            if (!slug) return;

            const map = document.querySelector(".city-active");
            const contact = this.contacts.find(contact => contact?.slug?.toLowerCase() === slug);            
            const current = this.cities.find(city => city.closest('g')?.id?.toLowerCase() === contact?.slug?.toLowerCase());

            if (map && current && map !== current) {
                map.classList.remove("city-active");
            }

            if (current) {
                this.contact = contact;
                current.classList.add("city-active");
            }

            this.setDotActive(slug);
        },

        setDotActive(slug) {
            const dot = document.querySelector(".dot-active");
            const current = this.dots.find(dot => dot?.id?.toLowerCase() === `dot-${slug}`);

            if (dot && current && dot !== current) {
                dot.classList.remove("dot-active");
            }

            if (current) {
                current.classList.add("dot-active");
            }
        },

        onMouseLeave(e) {
            const city = this.defaultCity;

            const id = city?.closest('g')?.id?.toLowerCase();

            this.setMapActive(id);
        },
    },
}
</script>

<style lang="scss" scoped>
    .svg-map-contacts {
        position: relative
    }
</style>