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
import { Toast } from './../utils/helpers'
import commentsAPI from './../apis/comments'
export default {
  methods: {
    async handleSubmit() {
      try {
      if(!this.text) {
          Toast.fire({
            icon: 'warning',
            title: '尚未填寫評論'
          })
          return
        }

      const { data } = await commentsAPI.addComment({
          restaurantId: this.restaurantId,
          text: this.text
        })

       if (data.status === 'error') {
          throw new Error(data.message)
        }
      this.$emit('after-create-comment' , {
        commentId: data.commentId,   
        restaurantId: this.restaurantId,
        text: this.text   
      })

      this.text = ''
      } catch(error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '新增失敗，請稍後再試'
        })
      }
      
    }
  },
  data() {
    return {
      text: '',
      isProcessing: false
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

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>