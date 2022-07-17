<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
      <RestaurantsNavPills :categories="categories"  />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
    :category-id="categoryId"
    :current-page="currentPage"
    :total-page="totalPage"
    :previous-page="previousPage"
    :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantsPagination from '../components/RestaurantsPagination.vue'
const dummyData = 
  {
    "restaurants": [
        {
            "id": 1,
            "name": "Cooper Marks",
            "tel": "(398) 780-6025",
            "address": "888 Everett Ways",
            "opening_hours": "08:00",
            "description": "Autem ratione occaecati. Doloribus libero vel veli",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.29284518798984",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Hazel Gusikowski",
            "tel": "1-886-533-1646 x4460",
            "address": "4022 Corkery Villages",
            "opening_hours": "08:00",
            "description": "Est consequatur sapiente mollitia facilis exceptur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.455089881674116",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Kurt Gulgowski",
            "tel": "596.059.5113 x548",
            "address": "11721 Maximillia Lodge",
            "opening_hours": "08:00",
            "description": "Iusto incidunt repellat nesciunt asperiores earum ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.39848637821252",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Ms. Loyal Conn",
            "tel": "847-749-3746",
            "address": "51093 Ross Lock",
            "opening_hours": "08:00",
            "description": "Officiis totam laboriosam in dolorum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.42174830298681",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Tyler Cole III",
            "tel": "(711) 955-3213 x97621",
            "address": "813 Thiel Underpass",
            "opening_hours": "08:00",
            "description": "Quam repellendus dolores voluptatem aut est volupt",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.50547744101341",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Shanelle Denesik",
            "tel": "(307) 202-8890 x329",
            "address": "256 Lakin Spring",
            "opening_hours": "08:00",
            "description": "Tenetur consequatur nihil vel repudiandae. Velit i",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.31227827726136",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Jerrod Marks",
            "tel": "(635) 543-9538",
            "address": "778 Geraldine Well",
            "opening_hours": "08:00",
            "description": "Non dolor est officiis dignissimos.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.96667711269043",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Hailie Ullrich",
            "tel": "(218) 434-4720",
            "address": "5186 Bernhard Forest",
            "opening_hours": "08:00",
            "description": "Velit ex aut et itaque. Autem qui laborum autem do",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.30438955373546",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Lindsay Pfannerstill",
            "tel": "(229) 898-9112 x772",
            "address": "8835 Hayes Road",
            "opening_hours": "08:00",
            "description": "perferendis assumenda ut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.43166773746272",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Elmira Dickens",
            "tel": "1-348-360-1852 x19585",
            "address": "684 Howell Grove",
            "opening_hours": "08:00",
            "description": "Quisquam sed molestiae ducimus velit mollitia ut p",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.96377953122788",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
   }
  },
  methods: {
    fetchRestaurants () {
      const { 
        restaurants, 
        categories, 
        categoryId, 
        page, 
        totalPage, 
        prev, 
        next 
      }  = dummyData
      this.restaurants = restaurants,
      this.categories = categories,
      this.categoryId = categoryId,
      this.currentPage = page,
      this.totalPage = totalPage,
      this.previousPage = prev,
      this.nextPage = next
    }   
  },
  created () {
    this.fetchRestaurants()
  }
}
</script>