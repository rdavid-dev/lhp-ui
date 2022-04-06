<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import { defineComponent, onMounted, inject } from 'vue'

export default defineComponent({
  setup() {
    const api = inject('$api')

    const loadNotes = async() => { 
      try {
        const response = api.get('notes')
        console.log(response)
      } catch(error) {
        console.log(error)
      }
    }

    onMounted(() => {
      loadNotes()
    })
  },
})
</script>
