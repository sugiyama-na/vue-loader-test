<template>
  <div id="app">
    <form id="formTest" 
    action="http://localhost:5000/api/post" 
    method="post"
    @submit.prevent="formSubmitted"
    >
        <input
          type="text"
          value=""
          name="name"
        />
        <input
          type="email"
          value=""
          name="email"
        />

      <uploader
        end-point="http://localhost:5000/api/post"
        :multiple="true"
        :multipart="true"
        :multipartChunkSize="102400"
      >
      </uploader>
      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script>
import Uploader from "vuejs-uploader";

export default {
  name: "app",
  components: {
    Uploader,
  },
  data() {
    return {
      name: "aaa",
      email: "natsuki@fork.co.jp",
    };
  },
  methods: {
    demo1Status(response) {
      this.demo1 = response;
    },
    resetLog(prop) {
      this[prop] = null;
    },
    errorHandler(error) {
      console.error(error, error.response);
      alert(error.message);
    },
    formSubmitted() {
      const event = new Event('click')
      const uploadBtn = document.querySelector('.vuejs-uploader__btn--upload')
      uploadBtn.dispatchEvent(event)
    },
  },
};
</script>

<style>
#app {
  padding: 20px 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 30px;
}

.disable-btn {
  display: none;
}
</style>
