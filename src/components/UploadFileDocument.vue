<template>
  <div>
    <h1>Upload File Component</h1>
    <h2>List of Uploads</h2>
    <ul>
      <li v-for="(file, index) in selectedFiles" :key="index">
        {{ file.name }}
        <a @click="removeFileUpload(index)">remove</a>
      </li>
    </ul>
    <!-- 
    <label class="btn btn-default">
      <input type="file" multiple @change="selectFile" />
    </label>
    <button class="btn btn-success" @click="uploadFiles">Upload</button> -->

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
        style="background-color:#6574cd"
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
        @change="selectFile"
        multiple
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
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