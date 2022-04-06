<template>
    <section>
        <h1 class="inline-block w-full">
            <label
                class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200"
            >
                List of
                Notes
            </label>
            <button
                @click="addNewArticle"
                class="float-right h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
            >
                Create
                Note
            </button>
        </h1>
        <div class="flex flex-col">
            <div class="overflow-auto sm:-mx-6 lg:-mx-8">
                <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full text-center">
                            <thead class="border-b bg-gray-800">
                                <tr>
                                    <th
                                        scope="col"
                                        class="text-sm font-medium text-white px-6 py-4"
                                    >ID</th>
                                    <th
                                        scope="col"
                                        class="text-sm font-medium text-white px-6 py-4"
                                    >Title</th>
                                    <th
                                        scope="col"
                                        class="text-sm font-medium text-white px-6 py-4"
                                    >Description</th>
                                    <th
                                        scope="col"
                                        class="text-sm font-medium text-white px-6 py-4"
                                    >Action</th>
                                </tr>
                            </thead>
                            <tbody class="border-b">
                                <tr v-for="note in notes" :key="note.id" class="bg-white border-b">
                                    <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ note.id }}</td>
                                    <td
                                        class="text-sm text-gray-900 font-light px-6 py-4"
                                    >{{ note.title }}</td>
                                    <td
                                        class="text-sm text-gray-900 font-light px-6 py-4"
                                    >{{ note.description }}</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4">
                                        <div class="flex">
                                            <button
                                                type="button"
                                                class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                                            >
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                            </button>
                                            <button
                                                @click="deleteNotes(note.id)"
                                                type="button"
                                                class="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                                            >
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <DeleteModal :modal="showModal" @execute="processDeleteNote" @close="toggleDeleteModal"/>
</template>

<script>
import { defineComponent, onMounted, ref, inject } from 'vue'
import DeleteModal from '@/components/Modals/Delete.vue'

export default defineComponent({
    components: {
        DeleteModal
    },
    setup() {
        const api = inject('$api')
        const notes = ref([])
        const showModal = ref(false)
        const noteIDSelected = ref(0)

        const loadNotes = async () => {
            try {
                const response = await api.get('notes')
                notes.value = response.data
            } catch (error) {
                console.log(error)
            }
        }

        const deleteNotes = (note_id) => {
            noteIDSelected.value = note_id
            showModal.value = true
        }

        const processDeleteNote = async() => {
            try {
                await api.destroy(`notes/${noteIDSelected.value}`)
                loadNotes()
                showModal.value = !showModal.value
            } catch (error) {
                console.error('Error:', error)
            }
        }

        const toggleDeleteModal = () => {
            showModal.value = !showModal.value
        }
        

        onMounted(() => {
            loadNotes()
        })

        return {
            notes,
            showModal,
            deleteNotes,
            toggleDeleteModal,
            processDeleteNote
        }
    },
})
</script>

