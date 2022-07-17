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
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：0</span>
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
             @click.prevent.stop="deleteFavorite(restaurant)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.prevent.stop="addFavorite(restaurant)"
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

const dammyData = {
    "restaurants": [
        {
            "id": 50,
            "name": "Betty Windler",
            "tel": "284-535-6368 x89169",
            "address": "47155 Daniella Spur",
            "opening_hours": "08:00",
            "description": "Non voluptas eum beatae qui suscipit quasi omnis d",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.8328555142947",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Vita MacGyver",
            "tel": "228.097.0621 x640",
            "address": "2146 Sienna Plaza",
            "opening_hours": "08:00",
            "description": "ipsam asperiores vel",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.31202659076266",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Luis Mohr",
            "tel": "244.444.7357",
            "address": "3186 Vernon Stream",
            "opening_hours": "08:00",
            "description": "Sed ipsum at odio consectetur fugiat. In corrupti ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.050651913672272",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Casey Davis",
            "tel": "840.798.6290 x0563",
            "address": "83034 Savanna Manor",
            "opening_hours": "08:00",
            "description": "Dolorem quis provident. Repellendus et molestiae a",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.590075407341289",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Christop Dach",
            "tel": "(641) 357-8562 x1918",
            "address": "2393 Bernhard Plaza",
            "opening_hours": "08:00",
            "description": "Ut necessitatibus rem. Quae voluptas debitis quo e",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.8221941596115",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Ladarius Daniel",
            "tel": "1-034-403-5056 x388",
            "address": "8214 Parker Freeway",
            "opening_hours": "08:00",
            "description": "Culpa tenetur est ut est ea dolore sit.\nNisi rerum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.34784754853096",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Mr. Emmalee Bauch",
            "tel": "781-487-2869",
            "address": "14550 Kutch Ways",
            "opening_hours": "08:00",
            "description": "Hic et accusamus rerum maxime ipsa provident eos r",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.441051802127387",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Annalise Gaylord",
            "tel": "1-030-700-5877 x12857",
            "address": "844 Mandy Unions",
            "opening_hours": "08:00",
            "description": "voluptates sequi quisquam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.921482979800865",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Paula Wuckert",
            "tel": "757-191-6638 x52989",
            "address": "637 Nikolaus Route",
            "opening_hours": "08:00",
            "description": "Quo doloremque voluptatum provident enim saepe ut ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.44627977593957",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Ross Spinka",
            "tel": "(079) 592-1141 x72229",
            "address": "5808 Jett Drive",
            "opening_hours": "08:00",
            "description": "Blanditiis enim id cum nisi voluptate ipsam autem ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.70724310563524",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: dammyData.restaurants
    }
  },
  methods: {
    addFavorite(restaurant) {
      restaurant.isFavorited = true
    },
    deleteFavorite(restaurant) {
      restaurant.isFavorited = false
    }
  }
}
</script>