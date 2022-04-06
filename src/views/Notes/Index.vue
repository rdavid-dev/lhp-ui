<template>
    <section>
        <h1 class="inline-block w-full">
            <label
                class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200"
            >List of Notes</label>
            <button
                @click="addNewArticle"
                class="float-right h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
            >Create Note</button>
        </h1>
    </section>
</template>

<script>
import { defineComponent, onMounted, inject } from 'vue'

export default defineComponent({
    setup() {
        const api = inject('$api')

        const loadNotes = async () => {
            try {
                const response = api.get('notes')
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }

        onMounted(() => {
            loadNotes()
        })
    },
})
</script>

