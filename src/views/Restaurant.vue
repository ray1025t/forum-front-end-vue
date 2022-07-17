<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurantComments="restaurantComments" 
    @after-delet-comment="afterDeleteComment"  />
    <!-- 新增評論 CreateComment -->
    <CreateComment 
    :restaurant-id="restaurant.id"
    @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'
import CreateComment  from './../components/CreateComment.vue'

const dammyData = {
    "restaurant": {
        "id": 1,
        "name": "Cooper Marks",
        "tel": "(398) 780-6025",
        "address": "888 Everett Ways",
        "opening_hours": "08:00",
        "description": "Autem ratione occaecati. Doloribus libero vel velit inventore officiis debitis adipisci est voluptas. Nulla laboriosam in animi sed quibusdam optio.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.29284518798984",
        "viewCounts": 1,
        "createdAt": "2022-07-04T10:57:45.000Z",
        "updatedAt": "2022-07-09T08:11:56.407Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
        "Comments": [
            {
                "id": 1,
                "text": "Aut aliquam voluptatum aspernatur eum ut eum exercitationem impedit beatae.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$ARIJckvVLk6.adw5DgcAOeUAbk5g93G6PVbP1FNeeocSY/JnUGgWy",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-04T10:57:45.000Z",
                    "updatedAt": "2022-07-04T10:57:45.000Z"
                }
            },
            {
                "id": 51,
                "text": "Non aut reiciendis repellat voluptatibus.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$cQ1jTWpj9/ZkCTbff8IgiO1OSjC.0WpD5MArr1xrCPuffaD8U6uUi",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-04T10:57:45.000Z",
                    "updatedAt": "2022-07-04T10:57:45.000Z"
                }
            },
            {
                "id": 101,
                "text": "Quasi veniam saepe consectetur cumque sit corporis.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$cQ1jTWpj9/ZkCTbff8IgiO1OSjC.0WpD5MArr1xrCPuffaD8U6uUi",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-04T10:57:45.000Z",
                    "updatedAt": "2022-07-04T10:57:45.000Z"
                }
            }
        ]
    },
    "isFavorited": false,
    "isLiked": false
}
const dammyUser = {
  currentUser:{
   
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "image": null,
    "isAdmin": true
,
isAuthenticated: true
}
}

export default {
  name: 'Restaurant',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,

  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      currentUser: dammyUser.currentUser
    }
  },
  created() {
    const  {  id: restaurantId } = this.$route.params 
    this.fetchRestaurant( restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)
      const { restaurant, isFavorited, isLiked } = dammyData
      const {
        id,
        name,
        Category,
        image,
        opening_hours: openingHours,
        tel,
        address,
        description,
        Comments,
      } = restaurant

      this.restaurant = {
         id,
        name,
        CategoryName: Category ? Category.name : '未分類',
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      }
      this.restaurantComments = Comments
       // 也可以這樣寫
      // this.restaurant = {
      //   id: dummyData.restaurant.id,
      //   name: dummyData.restaurant.name,
      //   categoryName: dummyData.restaurant.Category.name,
      //   image: dummyData.restaurant.image,
      //   openingHours: dummyData.restaurant.opening_hours,
      //   tel: dummyData.restaurant.tel,
      //   address: dummyData.restaurant.address,
      //   description: dummyData.restaurant.description,
      //   isFavorited: dummyData.isFavorited,
      //   isLiked: dummyData.isLiked,
      // }

      // this.restaurantComments = dummyData.restaurant.Comments
    },
    afterDeleteComment(commentId) {
      console.log('afterDeleteComment' , commentId)
      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment(payload) {
      console.log('payload', payload)
      const { commentId , restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        text,
        User:{
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        createdAt: new Date()
      })
    }

    
  }
}

</script>