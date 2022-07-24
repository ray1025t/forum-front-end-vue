<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#">
            {{ comment.User.name }}
          </a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>


<script>
/* eslint-disable */
import { fromNowFilter } from "./../utils/mixins";
import { mapState } from "vuex";
import commentsAPI from './../apis/comments'
import { Toast } from './../utils/helpers'

export default {
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    handleDeleteButtonClick(commentId) {
      // try {
      //   const { data } = await commentsAPI.removeComment({commentId})
      //   if(data.status === 'error') {
      //     throw new Error(data.message)
      //   }
      this.$emit("after-delet-comment", commentId);
      // } catch(error) {
      //   console.error(error.message)
      //   Toast.fire({
      //     icon: 'error',
      //     title: '刪除失敗，請稍後再試'
      //   })
      // }
    },
  },
};
</script>