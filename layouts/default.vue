<template>
  <v-app>
    <Header/>

    <v-main>
      <Nuxt />
    </v-main>

    <Footer/>
    <Modal/>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Modal from '~/components/ModalWindow.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    Modal
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
