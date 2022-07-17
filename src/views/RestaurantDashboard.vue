<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.Comments.length }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
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
        "updatedAt": "2022-07-09T08:11:56.000Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z"
        },
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
    }
}
export default {
  neme: 'RestanrantDashboard',
  data() {
    return {
      restaurant: []
    }
  },
  methods: {
    fetchRestaurant() {
      // this.restaurant = [...dammyData.restaurant]
      this.restaurant = dammyData.restaurant
    }
  },
  created() {
    this.fetchRestaurant()
   
  }
}
</script>