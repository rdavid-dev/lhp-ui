<template>
  <header>
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
                
              <a href="#" class="flex items-center py-4 px-2">
                <span class="font-semibold text-gray-500 text-lg"
                  >LHP</span
                >
              </a>
            </div>
            <!-- Primary Navbar items -->
            <div class="hidden md:flex items-center space-x-1">
              <router-link :to="{ name: 'notes.list'}"
                class="
                  py-4
                  px-2
                  text-gray-500
                  font-semibold
                  hover:text-green-500
                  transition
                  duration-300
                "
                >Notes</router-link>
            </div>
          </div>
            <div class="hidden md:flex items-center space-x-1 float-right">
              <a href="#" @click.prevent="logoutUser"
                class="
                  py-4
                  px-2
                  text-gray-500
                  font-semibold
                  hover:text-green-500
                  transition
                  duration-300
                "
                >Logout</a>
            </div>
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button">
              <svg
                class="w-6 h-6 text-gray-500 hover:text-green-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- mobile menu -->
      <div class="hidden mobile-menu">
        <ul class="">
          <li>
            <a
              href="#services"
              class="
                block
                text-sm
                px-2
                py-4
                hover:bg-green-500
                transition
                duration-300
              "
              >Articles</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        const router = useRouter()

        const logoutUser = async() => {
            await store.dispatch('auth/logout')
            router.push('/login')
        }

        return {
            logoutUser
        }
    },
}
</script>