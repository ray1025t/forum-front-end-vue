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

const dummyData = {
  "restaurants": [
        {
            "id": 38,
            "name": "Dr. Lucinda Roob",
            "tel": "(719) 332-2819",
            "address": "55052 Monty Lock",
            "opening_hours": "08:00",
            "description": "Dolores culpa animi nihil. Porro dicta vero deserunt assumenda rerum quo doloremque. Magni et omnis sit praesentium dicta blanditiis non. Molestias error modi atque quis quia quod officia suscipit soluta. Vero quibusdam voluptatem quia veniam et fugiat itaque eius.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.47972146133747",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            }
        },
        {
            "id": 44,
            "name": "Mr. Emmalee Bauch",
            "tel": "781-487-2869",
            "address": "14550 Kutch Ways",
            "opening_hours": "08:00",
            "description": "Hic et accusamus rerum maxime ipsa provident eos ratione. Enim rerum excepturi beatae placeat commodi id nobis est. Excepturi enim sunt est aut aut accusantium necessitatibus.\n \rHic et voluptatem nesciunt. Incidunt consequatur quia est facere voluptatem reprehenderit dolorem ut sit. Deserunt dolor est voluptatem ab dolorem debitis debitis magni et. Rem quod deserunt eveniet illum ad. Consequatur aut voluptatibus et natus voluptatem soluta et pariatur aut. Et error autem.\n \rAt magni non occaecati odio. Quia ut qui ut magni. Atque eos sapiente saepe. Voluptatem alias aut sed quia. Debitis tempora sunt eligendi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.441051802127387",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            }
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
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            }
        },
        {
            "id": 25,
            "name": "Raleigh Rohan",
            "tel": "286.643.6642",
            "address": "71560 Schmeler Bypass",
            "opening_hours": "08:00",
            "description": "Qui at vitae animi non sed. Dolore debitis porro. Non voluptatem esse repellat. Aut eum nisi consequuntur et esse sed ut necessitatibus.\n \rEveniet ut qui nihil autem. Et commodi porro et sapiente enim eos corrupti eius. Veritatis animi iure sunt nihil eos dolorem deserunt blanditiis et. Voluptatem consequatur animi suscipit. Ipsam nulla labore aut blanditiis eligendi magni numquam porro. Dolorem eos sed repellat consequuntur alias sed corrupti nulla.\n \rQuam ut laborum rem non voluptas magnam et. Vel omnis itaque rerum asperiores et autem nihil. Optio consequuntur eum quia praesentium blanditiis dolore quaerat. Consequatur ut fugit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.493005400870032",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            }
        },
        {
            "id": 5,
            "name": "Tyler Cole III",
            "tel": "(711) 955-3213 x97621",
            "address": "813 Thiel Underpass",
            "opening_hours": "08:00",
            "description": "Quam repellendus dolores voluptatem aut est voluptas non quod aliquid. Corporis blanditiis amet vel omnis eos modi. Temporibus quasi voluptatem quos. Fuga a commodi minus.",
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
            }
        },
        {
            "id": 47,
            "name": "Casey Davis",
            "tel": "840.798.6290 x0563",
            "address": "83034 Savanna Manor",
            "opening_hours": "08:00",
            "description": "Dolorem quis provident. Repellendus et molestiae alias atque perspiciatis assumenda possimus adipisci minima. Dolorem qui ipsam sit vero eos temporibus. Eligendi maxime suscipit ut autem repellendus eligendi velit. Vel quas facilis consequuntur. Qui alias voluptatum quo inventore magni rerum maiores.\n \rDoloremque eum commodi omnis vero. Nihil reiciendis rem accusantium labore ut. Mollitia quia quis iusto nostrum labore at laborum eveniet possimus. Vero vel ullam vel iusto earum. Saepe consequatur deleniti ea ducimus impedit.\n \rAssumenda et consequatur dolor. Fugit qui culpa inventore sit aut corrupti quaerat. Est sed debitis quia veniam. Sint harum asperiores tempora sint minima nulla sunt enim. Et veritatis ipsum ut perferendis. Officiis qui illo maxime veritatis quasi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.590075407341289",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            }
        },
        {
            "id": 11,
            "name": "Melody Paucek",
            "tel": "1-849-490-7606",
            "address": "791 Loy Crossing",
            "opening_hours": "08:00",
            "description": "Maiores cupiditate eligendi voluptate laborum ab quia vero.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.65706708359574",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            }
        },
        {
            "id": 46,
            "name": "Christop Dach",
            "tel": "(641) 357-8562 x1918",
            "address": "2393 Bernhard Plaza",
            "opening_hours": "08:00",
            "description": "Ut necessitatibus rem. Quae voluptas debitis quo ea et cupiditate. Excepturi quisquam tempore non repellat non et. Laborum assumenda voluptas et et odio facere quo tenetur voluptatem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.8221941596115",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            }
        },
        {
            "id": 3,
            "name": "Kurt Gulgowski",
            "tel": "596.059.5113 x548",
            "address": "11721 Maximillia Lodge",
            "opening_hours": "08:00",
            "description": "Iusto incidunt repellat nesciunt asperiores earum cumque sed qui.\nAssumenda cum facilis quis.\nHarum molestias minima itaque et minus unde enim.\nPorro adipisci delectus ducimus natus natus vel optio.",
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
            }
        },
        {
            "id": 45,
            "name": "Ladarius Daniel",
            "tel": "1-034-403-5056 x388",
            "address": "8214 Parker Freeway",
            "opening_hours": "08:00",
            "description": "Culpa tenetur est ut est ea dolore sit.\nNisi rerum similique possimus porro quis mollitia est ipsum et.\nVero doloribus hic non rem nesciunt.\nOccaecati placeat odit ut placeat.\nQuidem quod laboriosam sit quis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.34784754853096",
            "viewCounts": 0,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            }
        }
    ],
    "comments": [
        {
            "id": 12,
            "text": "Aut eos tempore et quasi voluptatem accusantium voluptatem fugit.",
            "UserId": 1,
            "RestaurantId": 12,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$FGI05OZZn8yglqEz6DXa6OqMA93hz/wdCRBBrQkYYp.4MQuoCRxs2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "Restaurant": {
                "id": 12,
                "name": "Neha Medhurst",
                "tel": "1-831-723-7912",
                "address": "96061 Christiansen Union",
                "opening_hours": "08:00",
                "description": "Asperiores quia quibusdam.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.318846755416576",
                "viewCounts": 0,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 41,
            "text": "Ipsum esse consectetur quisquam voluptatem quas dolorem consequatur quia laborum.",
            "UserId": 1,
            "RestaurantId": 41,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$FGI05OZZn8yglqEz6DXa6OqMA93hz/wdCRBBrQkYYp.4MQuoCRxs2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "Restaurant": {
                "id": 41,
                "name": "Ross Spinka",
                "tel": "(079) 592-1141 x72229",
                "address": "5808 Jett Drive",
                "opening_hours": "08:00",
                "description": "Blanditiis enim id cum nisi voluptate ipsam autem iure. Amet eum quia. Et et harum atque numquam ipsam. Qui ad quia quam sit quidem.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.70724310563524",
                "viewCounts": 0,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 62,
            "text": "Accusantium aut odit voluptas id omnis.",
            "UserId": 1,
            "RestaurantId": 12,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$FGI05OZZn8yglqEz6DXa6OqMA93hz/wdCRBBrQkYYp.4MQuoCRxs2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "Restaurant": {
                "id": 12,
                "name": "Neha Medhurst",
                "tel": "1-831-723-7912",
                "address": "96061 Christiansen Union",
                "opening_hours": "08:00",
                "description": "Asperiores quia quibusdam.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.318846755416576",
                "viewCounts": 0,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 92,
            "text": "Nemo deserunt unde quia.",
            "UserId": 1,
            "RestaurantId": 42,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$FGI05OZZn8yglqEz6DXa6OqMA93hz/wdCRBBrQkYYp.4MQuoCRxs2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "Restaurant": {
                "id": 42,
                "name": "Paula Wuckert",
                "tel": "757-191-6638 x52989",
                "address": "637 Nikolaus Route",
                "opening_hours": "08:00",
                "description": "Quo doloremque voluptatum provident enim saepe ut sequi. Occaecati qui dignissimos libero sed provident possimus. Aut eos deleniti rerum est asperiores non vero aspernatur.\n \rVel aspernatur ut harum cumque. Rem iure numquam est aperiam. Exercitationem voluptatum at recusandae minus maiores eos praesentium repellat. Nostrum laudantium libero. Dolorem aperiam aut tempore vero enim pariatur alias et.\n \rNostrum fugit a ea. Maxime voluptatibus ut eligendi. Nisi explicabo voluptas culpa velit voluptatem. Unde vitae fugiat provident sit facilis.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.44627977593957",
                "viewCounts": 0,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 123,
            "text": "Sed repudiandae voluptas minus dolores quia amet error.",
            "UserId": 1,
            "RestaurantId": 23,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$FGI05OZZn8yglqEz6DXa6OqMA93hz/wdCRBBrQkYYp.4MQuoCRxs2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "Restaurant": {
                "id": 23,
                "name": "Mrs. Domenic Schulist",
                "tel": "1-151-390-5543 x8600",
                "address": "5388 Becker Underpass",
                "opening_hours": "08:00",
                "description": "dolorum non autem",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.170443076545801",
                "viewCounts": 0,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 143,
            "text": "Esse tenetur veritatis minima labore eligendi odit ut.",
            "UserId": 1,
            "RestaurantId": 43,
            "createdAt": "2022-07-04T10:57:45.000Z",
            "updatedAt": "2022-07-04T10:57:45.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$FGI05OZZn8yglqEz6DXa6OqMA93hz/wdCRBBrQkYYp.4MQuoCRxs2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 3
            }
        },
        {
            "id": 15,
            "text": "Temporibus totam impedit atque enim.",
            "UserId": 2,
            "RestaurantId": 15,
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
            },
            "Restaurant": {
                "id": 15,
                "name": "Dax Hoppe",
                "tel": "1-990-964-0823",
                "address": "31563 Weldon Camp",
                "opening_hours": "08:00",
                "description": "eligendi",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.57247645779803",
                "viewCounts": 0,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 40,
            "text": "Libero in atque assumenda iste optio.",
            "UserId": 2,
            "RestaurantId": 40,
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
            },
            "Restaurant": {
                "id": 40,
                "name": "Mrs. Rosemarie Wiza",
                "tel": "(237) 154-1635 x0914",
                "address": "25626 Alysha Orchard",
                "opening_hours": "08:00",
                "description": "Harum eos quo accusantium consectetur voluptatem doloribus itaque eos quae.\nQuam natus ducimus delectus.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.08452607000075",
                "viewCounts": 0,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 68,
            "text": "Reprehenderit dolores eos laboriosam dolores nobis perspiciatis harum illum harum.",
            "UserId": 2,
            "RestaurantId": 18,
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
            },
            "Restaurant": {
                "id": 18,
                "name": "Kelsie Reichert",
                "tel": "1-025-346-1538",
                "address": "008 Virgil Lodge",
                "opening_hours": "08:00",
                "description": "dolorem",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.13192407725907",
                "viewCounts": 0,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 88,
            "text": "Ut assumenda eaque.",
            "UserId": 2,
            "RestaurantId": 38,
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
            },
            "Restaurant": {
                "id": 38,
                "name": "Dr. Lucinda Roob",
                "tel": "(719) 332-2819",
                "address": "55052 Monty Lock",
                "opening_hours": "08:00",
                "description": "Dolores culpa animi nihil. Porro dicta vero deserunt assumenda rerum quo doloremque. Magni et omnis sit praesentium dicta blanditiis non. Molestias error modi atque quis quia quod officia suscipit soluta. Vero quibusdam voluptatem quia veniam et fugiat itaque eius.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.47972146133747",
                "viewCounts": 0,
                "createdAt": "2022-07-04T10:57:45.000Z",
                "updatedAt": "2022-07-04T10:57:45.000Z",
                "CategoryId": 1
            }
        }
    ]
}
export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  created() {
    this.fetchfeeds()
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  methods: {
    fetchfeeds() {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>