<template>
    <Header/>
    <div class="max-w-6xl mx-auto px-4">
      <div class="my-20"><router-view></router-view></div>
    </div>
    <Footer/>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Footer
  },
  setup() {
  
  },
})
</script>
