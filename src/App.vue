<template>
  <main>
    <h1>LHP</h1>
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
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
