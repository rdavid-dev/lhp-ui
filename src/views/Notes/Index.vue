<template>
    <section>
        <h1>NOTES LISTING</h1>
        <a href="#" @click.prevent="logoutUser">Logout</a>
    </section>
</template>

<script>
import { defineComponent, onMounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const api = inject('$api')
    const store = useStore()
    const router = useRouter()

    const loadNotes = async() => { 
      try {
        const response = api.get('notes')
        console.log(response)
      } catch(error) {
        console.log(error)
      }
    }

    const logoutUser = async() => {
        await store.dispatch('auth/logout')
        router.push('/login')
    }
    
    onMounted(() => {
      loadNotes()
    })

    return {
        logoutUser
    }
  },
})
</script>

