<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants  :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
         <!-- 最新評論 NewestComments-->
         <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  created() {
    this.fetchFeeds()
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  methods: {
    async fetchFeeds() {
        try {
        this.isLoading = true
        const { data } = await restaurantsAPI.getFeeds()
        const { restaurants, comments } = data
        this.restaurants = restaurants
        this.comments = comments.filter(
          comment => comment.Restaurant && comment.text
        )
        console.log(this.comments)
        this.isLoading = false
        } catch(error) {
            Toast.fire({
                icon: 'error',
                title: '無法取得餐廳資料，請稍後再試' 
            }) 
        }
     
    }
  }
}
</script>