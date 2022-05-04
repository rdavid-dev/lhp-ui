<template>
  <div class="w-1/2 m-5">
    <h1>Upload File Component</h1>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr v-for="(file, index) in selectedFiles" 
              :key="index" 
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="
                px-6
                py-4
                font-medium
                text-gray-900
                dark:text-white
                whitespace-nowrap
              "
            >
              {{ file.name }}
            </th>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                @click="removeFileUpload(index)"
                class="
                  font-medium
                  text-blue-600
                  dark:text-blue-500
                  hover:underline
                "
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="overflow-hidden relative w-56 mt-4 mb-4">
      <button
        class="
          bg-blue
          hover:bg-blue-light
          text-white
          font-bold
          py-2
          px-4
          w-full
          inline-flex
          items-center
          cursor-pointer
        "
        style="background-color: #6574cd"
      >
        <svg
          fill="#FFF"
          height="18"
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
        </svg>
        <span class="ml-2">Upload Document</span>
      </button>
      <input
        class="
          cursor-pointer
          absolute
          block
          py-2
          px-4
          w-full
          opacity-0
          pin-r pin-t
          top-0
        "
        type="file"
        accept="application/pdf"
        @change="selectFile"
        multiple
      />
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
  data() {
    return {
      tempSelectedFiles: undefined,
      selectedFiles: [],
    };
  },
  methods: {
    bytesToMegaBytes(bytes) {
      return bytes / 1024 ** 2;
    },
    storeFileSelected(files) {
      for (const i of Object.keys(files)) {
        console.log(files[i]);
        this.selectedFiles.push(files[i]);
      }
    },
    selectFile(event) {
      this.storeFileSelected(event.target.files);
    },
    removeFileUpload(idx) {
      const removeFile = this.selectedFiles[idx];
      this.selectedFiles = this.selectedFiles.filter(
        (file) => file !== removeFile
      );
    },
    uploadFiles() {
      const formData = new FormData();
      for (const i of Object.keys(this.selectedFiles)) {
        formData.append(`attachments[${i}]`, this.selectedFiles[i]);
      }
      axios
        .post("http://localhost:5010/api/v1/file-upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>