<template>
  <section>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg w-1/5">
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>
        <form @submit.prevent="handleLogin">
          <div class="mt-4">
            <div>
              <label class="block" for="email">Email</label>
                  <input type="text" v-model.trim="email" placeholder="Email"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
            </div>
            <div class="mt-4">
              <label class="block">Password</label>
                  <input type="password" v-model.trim="password" placeholder="Password"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
            </div>
            <div class="flex items-baseline justify-between">
              <button type="submit" class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import router from '../routes'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()

    const formData = reactive({
      email: '',
      password: ''
    })

    const handleLogin = async() => {
      store.dispatch('auth/login', formData)
      .then(user => {
        console.log(user)
        router.push('/')
      }).catch(error => {
        console.log(error.message)
      })
    }

    onMounted(() => {
      console.log("Store:", store.getters["auth/getTest"])
    })

    return {
      ...toRefs(formData),
      handleLogin
    }
  },
})
</script>
