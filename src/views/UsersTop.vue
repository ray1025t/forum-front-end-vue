<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center" >
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img
            src="貼上引用圖片網址，同學可自行選擇圖片進行實作"
            width="140px"
            height="140px"
          >
        </a>
        <h2>{{  user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.prevent.stop="deleteFollowed(user)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            :key="user.id"
          @click.prevent.stop="addFollowed(user)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

const dammyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$FGI05OZZn8yglqEz6DXa6OqMA93hz/wdCRBBrQkYYp.4MQuoCRxs2",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$ARIJckvVLk6.adw5DgcAOeUAbk5g93G6PVbP1FNeeocSY/JnUGgWy",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$cQ1jTWpj9/ZkCTbff8IgiO1OSjC.0WpD5MArr1xrCPuffaD8U6uUi",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}
export default {
  name: 'UsersTop',
  components: {
    NavTabs,
  },
  data() {
    return{
       users: []
    }
  },
  /* eslint-disable */ 
  methods: {
    fetchUsers() {
      this.users = dammyData.users
    },
    addFollowed(user) {
      // user.isFollowed = true
      user = {
        ...user,
        isFollowed:true
      }
    },
    deleteFollowed(user) {
       user.isFollowed = false
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>