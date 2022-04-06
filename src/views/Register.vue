<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg w-1/4">
      <div v-if="!registeredSuccess">
        <h3 class="text-2xl font-bold text-center">Register your account</h3>
        <div
          v-if="errors.length > 0"
          class="mt-5 nb-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span class="block sm:inline" v-for="(error, index) in errors" :key="index">
            {{ error }}
            <br />
          </span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              class="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
        </div>
        <form @submit.prevent="addUser">
          <div class="mt-4">
            <div>
              <label class="block" for="name">Full Name</label>
              <input
                v-model.trim="name"
                type="text"
                placeholder="Fullname"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <label class="block" for="email">Email</label>
              <input
                v-model.trim="email"
                type="email"
                placeholder="Email"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div class="mt-4">
              <label class="block">Password</label>
              <input
                v-model.trim="password"
                type="password"
                placeholder="Password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div class="mt-4">
              <label class="block">Confirm Password</label>
              <input
                v-model.trim="password_confirmation"
                type="password"
                placeholder="Confirm Password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div class="flex items-baseline justify-between">
              <button
                type="submit"
                class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >Register</button>
            </div>
          </div>
        </form>
      </div>
      <div v-else class="text-center">
        <h3 class="text-2xl font-bold">SUCCESS!</h3>
        <span>Congratulations, your account has been created.</span>
        <router-link
          to="/login"
          class="mt-5 inline-block text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Continue</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const api = inject('$api')
    const errors = ref([])
    const formInputs = reactive({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
    const registeredSuccess = ref(false)

    const addUser = async () => {
      errors.value = []
      try {
        await api.post('register', formInputs)
        registeredSuccess.value = true
      } catch (error) {
        error.errors.forEach((e) => {
          errors.value.push(e)
        })
      }
    }

    return {
      ...toRefs(formInputs),
      registeredSuccess,
      errors,
      addUser
    }
  },
})
</script>
