<template>
  <div class="hello">
    <uploader
      end-point="http://localhost:8080"
      @change="selectedFile"
      @dragenter="dragEnter"
      @dragleave="dragLeave"
      @dragover.prevent
      @drop.prevent="dropFile"
    >
      <button slot="browse-btn" @click="upload" type="submit">
        Select File
      </button>
    </uploader>
    {{ uploadFile }}
    <div>
        <ul>
            <li v-for="(file, index) in files" :key="index">{{ file.name }}
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: "Upload",
  props: {},
  data() {
    return {
      uploadFile: "",
      files:[]
    };
  },
  methods: {
    selectedFile(e) {
      // 選択された File の情報を保存しておく
      e.preventDefault();
      let files = e.target.files;
      this.uploadFile = files[0];
    },
    dragEnter() {
      this.isEnter = true;
    },
    dragLeave() {
      this.isEnter = false;
    },
    dropFile() {
      this.files = [...event.dataTransfer.files]
      console.log(event.dataTransfer.files);
    },

    upload() {
      console.log("clicked");
      // // FormData を利用して File を POST する
      // let formData = new FormData();
      // formData.append("yourFileKey", this.uploadFile);
      // let config = {
      //   headers: {
      //     "content-type": "multipart/form-data",
      //   },
      // };
      // axios
      //   .post("yourUploadUrl", formData, config)
      //   .then(function (response) {
      //     // response 処理
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     // error 処理
      //     console.log(error)
      //   });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
