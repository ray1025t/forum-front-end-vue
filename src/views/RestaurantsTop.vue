<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <router-link class="card-title" :to="{ name: 'restaurant', params: {id: restaurant.id } }">
              {{ restaurant.name }}
            </router-link>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{  restaurant.description }}
            </p>
            <a
              href="#"
              class="btn btn-primary mr-2"
            >Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
             @click.prevent.stop="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.prevent.stop="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'


export default {
  name: 'RestaurantTop',
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    async fetchRestaurants() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants()
        this.restaurants = data.restaurants
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '載入失敗，請稍後再試'
        })
      }
    },
    async addFavorite(restaurantId) {
      try {
        const { data } = await restaurantsAPI.addFavorite({restaurantId})
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.map(restaurant => {
          if(restaurant.id !== restaurantId) {
            return restaurant
          } else {
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount + 1,
              isFavorited: true
            }
          }
        })
        console.log(data)
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '加入失敗，請稍後再試'
        })
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await restaurantsAPI.deleteFavorite({restaurantId})
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.map(restaurant => {
          if(restaurant.id !== restaurantId) {
            return restaurant
          } else {
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount - 1,
              isFavorited: false
            }
          }
        })
        console.log(data)
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '加入失敗，請稍後再試'
        })
      }
    },
  }
}
</script>