<template>
  <v-app>
    <Header/>

    <v-main>
      <Nuxt />
    </v-main>

    <Footer/>
    <Modal/>

    <client-only>
        <ServiceWidget />
    </client-only>

    <client-only>
        <CookiesBanner />
    </client-only>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Modal from '~/components/ModalWindow.vue'
import CookiesBanner from "~/components/CookiesBanner.vue"
import ServiceWidget from "~/components/ServiceWidget.vue";

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    Modal,
    CookiesBanner,
    ServiceWidget
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.commit('offModalWindow')
  },
}
</script>
