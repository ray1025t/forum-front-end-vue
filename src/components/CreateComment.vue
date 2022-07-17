<template>
  <form @submit.prevent.stop="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        class="form-control"
        rows="3"
        name="text"
        v-model="text"
        
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid"

export default {
  methods: {
    handleSubmit() {
      // TODO：向 API 請求POST
      // 伺服器新增Comment 成功後...
      this.$emit('after-create-comment' , {
        commentId: uuidv4(),   // 尚尚未串接API，暫時使用uuid
        restaurantId: this.restaurantId,
        text: this.text   
      })
      this.text = ''
    }
  },
  data() {
    return {
      text: ''
    }
  },
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  }
  
}
</script>