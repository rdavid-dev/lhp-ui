<template>
    <section>
        <div class="inline-block w-full">
            <button
                @click="router.push('/notes')"
                class="float-left h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
            >Back to Notes</button>
        </div>
        <form @submit.prevent="updateNotes" class="pt-5 px-2 pb-4 space-y-6">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Update Notes</h3>
            <div>
                <label
                    for="title"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Title</label>
                <input
                    type="text"
                    v-model="title"
                    id="title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Notes Title"
                    required
                />
            </div>
            <div>
                <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Description</label>
                <textarea
                    id="description"
                    v-model="description"
                    placeholder="Notes Description"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                ></textarea>
            </div>
            <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Update Notes</button>
        </form>
    </section>
</template>

<script>
import { defineComponent, onMounted, ref, reactive, toRefs, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
    setup() {
        const api = inject('$api')
        const route  = useRoute()
        const router = useRouter()
        const note_id = ref(route.params.id)
        const formNotes = reactive({
            title: '',
            description: ''
        })

        const getNoteDetails = async() => {
            try {
                const response = await api.get(`notes/${note_id.value}`)

                formNotes.title = response.data.title
                formNotes.description = response.data.description
            } catch(error) {
                console.log('Error', error)
            }
        }

        const updateNotes = async() => {
            try {
                await api.update(`notes/${note_id.value}`, formNotes)
                router.push('/notes')
            } catch(error) {
                console.log('Error', error)
            }
        }

        onMounted(() => getNoteDetails())

        return {
            router,
            ...toRefs(formNotes),
            updateNotes
        }
    },
})
</script>
