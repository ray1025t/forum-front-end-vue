import { apiHelper } from './../utils/helpers'


export default {
  addComment({ restaurantId, text }) {
    return apiHelper.post('/comments', {
      restaurantId,
      text
    })
  },
  removeComment({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  },
}
