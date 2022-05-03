<template>
  <UploadFileDocument ref="upload" />
  <button @click="uploadFiles">Upload Document</button>
</template>
<script>
import axios from "axios";
import UploadFileDocument from "@/components/UploadFileDocument";

export default {
  components: {
    UploadFileDocument,
  },
  setup() {},
  methods: {
    uploadFiles() {
      const filesSelected = this.$refs.upload.selectedFiles;
      const formData = new FormData();
      for (const i of Object.keys(filesSelected)) {
        formData.append(`attachments[${i}]`, filesSelected[i]);
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