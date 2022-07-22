<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
          >
            Show
          </router-link>

          <a href="#" class="btn btn-link">Edit</a>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Cooper Marks",
      tel: "(398) 780-6025",
      address: "888 Everett Ways",
      opening_hours: "08:00",
      description:
        "Autem ratione occaecati. Doloribus libero vel velit inventore officiis debitis adipisci est voluptas. Nulla laboriosam in animi sed quibusdam optio.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.29284518798984",
      viewCounts: 1,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-09T08:11:56.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 2,
      name: "Hazel Gusikowski",
      tel: "1-886-533-1646 x4460",
      address: "4022 Corkery Villages",
      opening_hours: "08:00",
      description:
        "Est consequatur sapiente mollitia facilis excepturi quasi autem. Vel cumque accusamus nesciunt quam. Illum sunt ut id. Dolor blanditiis minima voluptatem aperiam aliquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.455089881674116",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 3,
      name: "Kurt Gulgowski",
      tel: "596.059.5113 x548",
      address: "11721 Maximillia Lodge",
      opening_hours: "08:00",
      description:
        "Iusto incidunt repellat nesciunt asperiores earum cumque sed qui.\nAssumenda cum facilis quis.\nHarum molestias minima itaque et minus unde enim.\nPorro adipisci delectus ducimus natus natus vel optio.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.39848637821252",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 4,
      name: "Ms. Loyal Conn",
      tel: "847-749-3746",
      address: "51093 Ross Lock",
      opening_hours: "08:00",
      description: "Officiis totam laboriosam in dolorum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.42174830298681",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 5,
      name: "Tyler Cole III",
      tel: "(711) 955-3213 x97621",
      address: "813 Thiel Underpass",
      opening_hours: "08:00",
      description:
        "Quam repellendus dolores voluptatem aut est voluptas non quod aliquid. Corporis blanditiis amet vel omnis eos modi. Temporibus quasi voluptatem quos. Fuga a commodi minus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.50547744101341",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 6,
      name: "Shanelle Denesik",
      tel: "(307) 202-8890 x329",
      address: "256 Lakin Spring",
      opening_hours: "08:00",
      description:
        "Tenetur consequatur nihil vel repudiandae. Velit id reprehenderit reiciendis dolorem nesciunt accusantium. Est sunt officia magnam doloremque aut non qui. Et dicta optio dignissimos sapiente nisi accusamus rerum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.31227827726136",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 7,
      name: "Jerrod Marks",
      tel: "(635) 543-9538",
      address: "778 Geraldine Well",
      opening_hours: "08:00",
      description: "Non dolor est officiis dignissimos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.96667711269043",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 8,
      name: "Hailie Ullrich",
      tel: "(218) 434-4720",
      address: "5186 Bernhard Forest",
      opening_hours: "08:00",
      description:
        "Velit ex aut et itaque. Autem qui laborum autem dolores modi a quae sunt unde. Alias molestiae ad assumenda perferendis aut et. Aut qui deleniti placeat at vitae voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.30438955373546",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 9,
      name: "Lindsay Pfannerstill",
      tel: "(229) 898-9112 x772",
      address: "8835 Hayes Road",
      opening_hours: "08:00",
      description: "perferendis assumenda ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.43166773746272",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 10,
      name: "Elmira Dickens",
      tel: "1-348-360-1852 x19585",
      address: "684 Howell Grove",
      opening_hours: "08:00",
      description:
        "Quisquam sed molestiae ducimus velit mollitia ut possimus commodi asperiores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.96377953122788",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 11,
      name: "Melody Paucek",
      tel: "1-849-490-7606",
      address: "791 Loy Crossing",
      opening_hours: "08:00",
      description:
        "Maiores cupiditate eligendi voluptate laborum ab quia vero.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=25.65706708359574",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 12,
      name: "Neha Medhurst",
      tel: "1-831-723-7912",
      address: "96061 Christiansen Union",
      opening_hours: "08:00",
      description: "Asperiores quia quibusdam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.318846755416576",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 13,
      name: "Yadira Lesch",
      tel: "1-905-463-2233 x53588",
      address: "433 Konopelski Springs",
      opening_hours: "08:00",
      description:
        "Quia eligendi similique adipisci et vel vel molestiae id consectetur. Modi aut nam debitis et voluptates enim in. Non at omnis dolores error enim facilis debitis enim perspiciatis.\n \rEum commodi repellat consequatur eaque facere suscipit. Et labore quod autem perspiciatis libero dolor ut nemo. Aut ipsam sunt qui et reiciendis nesciunt. Sapiente animi adipisci ut iure nesciunt sint voluptatem quos ipsa. Unde eligendi incidunt omnis aut.\n \rTempora ut et. Necessitatibus sapiente repellat molestias sapiente laboriosam voluptas ut a similique. Quisquam omnis consequatur voluptas culpa maxime non velit. Itaque fugit voluptate molestiae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.01958008411089",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 14,
      name: "Ben Dickens",
      tel: "916.475.7497 x497",
      address: "53590 Boyd Lodge",
      opening_hours: "08:00",
      description:
        "Optio eligendi voluptatem esse fuga eum repudiandae animi dolores. Nam doloremque laudantium ut debitis consequuntur totam quam dolore aliquid. Totam sit excepturi sint. Aut aspernatur quaerat sit quidem corporis eaque impedit vitae. Sit vitae mollitia non vel saepe. Quaerat error dolores expedita veritatis iusto cumque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.94586908736954",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 15,
      name: "Dax Hoppe",
      tel: "1-990-964-0823",
      address: "31563 Weldon Camp",
      opening_hours: "08:00",
      description: "eligendi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.57247645779803",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 16,
      name: "Cortney Gleason",
      tel: "1-746-337-0425 x96935",
      address: "476 Johnston Stream",
      opening_hours: "08:00",
      description: "quam magni repellendus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.1381434024664",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 17,
      name: "Cassandra Runolfsson",
      tel: "(124) 621-4939 x38707",
      address: "36763 Kailee Ramp",
      opening_hours: "08:00",
      description: "eos vel id",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.456556855329325",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 18,
      name: "Kelsie Reichert",
      tel: "1-025-346-1538",
      address: "008 Virgil Lodge",
      opening_hours: "08:00",
      description: "dolorem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.13192407725907",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 19,
      name: "Marlon Kshlerin",
      tel: "(249) 976-5434",
      address: "46252 Gottlieb Turnpike",
      opening_hours: "08:00",
      description: "ab omnis atque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.333572036684252",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 20,
      name: "Miss Mozell Erdman",
      tel: "1-638-693-4535",
      address: "26386 Milan Harbor",
      opening_hours: "08:00",
      description:
        "Voluptatibus totam voluptatibus aut veniam dolore deserunt autem soluta. Similique ipsa mollitia suscipit eius ut praesentium aut. Consequuntur eos nisi qui animi itaque. Quis qui deserunt nisi cum. Non pariatur voluptatibus cupiditate eum totam aperiam quidem sapiente quis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.522881128107805",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 21,
      name: "Ms. Jaida Mosciski",
      tel: "(951) 204-2984 x08890",
      address: "7494 Lang Turnpike",
      opening_hours: "08:00",
      description:
        "Et similique sed omnis. Vel est quaerat. A eum praesentium totam facere necessitatibus et animi cumque. Quia in minima repudiandae veritatis aut facere molestiae deleniti.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.6727654187516334",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 22,
      name: "Major Huel",
      tel: "1-167-966-7873",
      address: "522 Lolita Terrace",
      opening_hours: "08:00",
      description: "Quos in voluptatem sed.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.88626424174953",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 23,
      name: "Mrs. Domenic Schulist",
      tel: "1-151-390-5543 x8600",
      address: "5388 Becker Underpass",
      opening_hours: "08:00",
      description: "dolorum non autem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.170443076545801",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 24,
      name: "Stanley Mueller",
      tel: "(472) 368-1659 x743",
      address: "2047 Juston Common",
      opening_hours: "08:00",
      description: "provident",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.373462400218614",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 25,
      name: "Raleigh Rohan",
      tel: "286.643.6642",
      address: "71560 Schmeler Bypass",
      opening_hours: "08:00",
      description:
        "Qui at vitae animi non sed. Dolore debitis porro. Non voluptatem esse repellat. Aut eum nisi consequuntur et esse sed ut necessitatibus.\n \rEveniet ut qui nihil autem. Et commodi porro et sapiente enim eos corrupti eius. Veritatis animi iure sunt nihil eos dolorem deserunt blanditiis et. Voluptatem consequatur animi suscipit. Ipsam nulla labore aut blanditiis eligendi magni numquam porro. Dolorem eos sed repellat consequuntur alias sed corrupti nulla.\n \rQuam ut laborum rem non voluptas magnam et. Vel omnis itaque rerum asperiores et autem nihil. Optio consequuntur eum quia praesentium blanditiis dolore quaerat. Consequatur ut fugit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.493005400870032",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 26,
      name: "Erik Smitham",
      tel: "784.632.5169",
      address: "600 Assunta Row",
      opening_hours: "08:00",
      description: "Iusto et molestias animi expedita ut dolores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.4369810376325916",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 27,
      name: "Freida Turner I",
      tel: "991.993.5740 x431",
      address: "26622 Kihn Wells",
      opening_hours: "08:00",
      description:
        "Accusantium vitae natus sed vel molestiae voluptas amet minus. Eum temporibus voluptatum et quod alias deserunt labore rerum. Aut ipsum ipsum et voluptatum. Commodi eos provident dolores voluptas omnis ratione omnis animi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.11760202933056",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 28,
      name: "Rhianna Hahn",
      tel: "087.543.5361",
      address: "3225 Alia Mall",
      opening_hours: "08:00",
      description:
        "Quidem voluptate laborum consequatur praesentium maiores at perferendis.\nAmet possimus unde dolorem omnis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.78704271734665",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 29,
      name: "Shayne Bednar",
      tel: "873-380-2616 x6819",
      address: "3208 Muller Parks",
      opening_hours: "08:00",
      description: "qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.973565149545592",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 30,
      name: "Charles Goyette",
      tel: "1-671-843-5650",
      address: "902 Luettgen Light",
      opening_hours: "08:00",
      description:
        "Molestias distinctio ut sed dicta modi qui. Inventore nihil exercitationem eaque fugiat et. Soluta nesciunt nihil iusto et rerum. Sit repellat laboriosam quidem similique dolorum qui accusantium ipsa. Omnis nostrum in.\n \rDucimus quam error repudiandae inventore. Saepe nam explicabo. Placeat minima est illum et ab. Impedit saepe et tenetur ipsam possimus placeat.\n \rAliquid et id quae voluptate unde voluptatem laudantium odit. Beatae doloremque sunt velit est quos est iusto. Officiis error facere ullam quidem iste enim culpa facilis magni. Magnam exercitationem dolorum illo facere harum aut voluptatum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.55161156222708",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 31,
      name: "Mrs. Gerry Hagenes",
      tel: "345.529.2026",
      address: "89870 West Stravenue",
      opening_hours: "08:00",
      description: "veniam nihil voluptate",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.008092469304735",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 32,
      name: "Kelsie D'Amore",
      tel: "(124) 653-9340 x626",
      address: "2461 Joy Island",
      opening_hours: "08:00",
      description: "aut velit molestias",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.87537980880231",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 33,
      name: "Ms. Pasquale Little",
      tel: "490-649-5881",
      address: "034 Ebony Camp",
      opening_hours: "08:00",
      description:
        "Velit mollitia reprehenderit doloremque. Recusandae aperiam tempore reiciendis pariatur dolorum. In illo aspernatur nihil et sunt. Amet sunt possimus nobis. Esse numquam voluptatum ab et. Enim quam et reiciendis ea rerum sunt ipsam nam id.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.65288641780946",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 34,
      name: "Thea Renner",
      tel: "420-917-6548",
      address: "000 Bobbie Drives",
      opening_hours: "08:00",
      description:
        "Sapiente dolor eveniet dolorem. Ea quisquam ut sunt. Consequuntur consequuntur consectetur omnis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.08825632473368",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 35,
      name: "Jameson Gibson",
      tel: "(771) 446-3396",
      address: "86000 Turcotte Expressway",
      opening_hours: "08:00",
      description:
        "Velit dolorem omnis qui voluptatem ipsam in. Omnis nemo aliquam magni fugiat aliquid rerum iusto quo. Qui eum voluptatem hic repudiandae. Tenetur id et odit excepturi et est et voluptatum non. Accusantium minus praesentium voluptatum ipsa saepe.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.62598290052838",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 36,
      name: "Kayleigh Cruickshank DVM",
      tel: "265.188.1485",
      address: "618 Letitia Rapid",
      opening_hours: "08:00",
      description:
        "Fugiat enim delectus quasi et beatae voluptatem porro perspiciatis doloribus. Ea sed vitae. Nam eaque distinctio corrupti eum temporibus enim provident non. Numquam quos animi eos culpa ipsum ut.\n \rId et cumque et nemo. Voluptas et quia culpa qui ab. Minus accusantium voluptatem rerum consequatur et ratione. Non aut doloribus. Ratione est modi rerum repudiandae voluptas eos consequatur distinctio ea. Aliquam dolores minima non praesentium.\n \rConsequatur at in odit. Aliquid iste omnis tempore praesentium impedit dolores sed possimus suscipit. Quas distinctio dolores quidem eveniet labore. Beatae et eveniet sed quis et illum porro recusandae commodi. Rerum soluta saepe id assumenda voluptatibus nam provident.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.085556891943202",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 37,
      name: "Oleta Tillman",
      tel: "(879) 091-0378",
      address: "7291 Courtney Parkways",
      opening_hours: "08:00",
      description:
        "Doloremque accusantium nisi qui consectetur aut neque laborum.\nLaboriosam numquam explicabo maiores et laborum ullam corporis in.\nEt necessitatibus et dolor est aut consequatur aliquam consectetur.\nUt est necessitatibus odit numquam dolor deserunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.766617873135154",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 38,
      name: "Dr. Lucinda Roob",
      tel: "(719) 332-2819",
      address: "55052 Monty Lock",
      opening_hours: "08:00",
      description:
        "Dolores culpa animi nihil. Porro dicta vero deserunt assumenda rerum quo doloremque. Magni et omnis sit praesentium dicta blanditiis non. Molestias error modi atque quis quia quod officia suscipit soluta. Vero quibusdam voluptatem quia veniam et fugiat itaque eius.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.47972146133747",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 39,
      name: "Thurman Pagac",
      tel: "099.916.1859 x12050",
      address: "49975 Kasey Turnpike",
      opening_hours: "08:00",
      description:
        "Voluptatem alias eius commodi. Blanditiis sed voluptate aut dolores autem dolor accusantium perspiciatis. Non velit minus enim omnis nesciunt quia delectus ipsum minima. Necessitatibus aut rerum et ea sed ea velit accusantium. Occaecati at magnam a asperiores est sit. Sequi dolor voluptates est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.27648726471968",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 40,
      name: "Mrs. Rosemarie Wiza",
      tel: "(237) 154-1635 x0914",
      address: "25626 Alysha Orchard",
      opening_hours: "08:00",
      description:
        "Harum eos quo accusantium consectetur voluptatem doloribus itaque eos quae.\nQuam natus ducimus delectus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=73.08452607000075",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 41,
      name: "Ross Spinka",
      tel: "(079) 592-1141 x72229",
      address: "5808 Jett Drive",
      opening_hours: "08:00",
      description:
        "Blanditiis enim id cum nisi voluptate ipsam autem iure. Amet eum quia. Et et harum atque numquam ipsam. Qui ad quia quam sit quidem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.70724310563524",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 42,
      name: "Paula Wuckert",
      tel: "757-191-6638 x52989",
      address: "637 Nikolaus Route",
      opening_hours: "08:00",
      description:
        "Quo doloremque voluptatum provident enim saepe ut sequi. Occaecati qui dignissimos libero sed provident possimus. Aut eos deleniti rerum est asperiores non vero aspernatur.\n \rVel aspernatur ut harum cumque. Rem iure numquam est aperiam. Exercitationem voluptatum at recusandae minus maiores eos praesentium repellat. Nostrum laudantium libero. Dolorem aperiam aut tempore vero enim pariatur alias et.\n \rNostrum fugit a ea. Maxime voluptatibus ut eligendi. Nisi explicabo voluptas culpa velit voluptatem. Unde vitae fugiat provident sit facilis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.44627977593957",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 43,
      name: "Annalise Gaylord",
      tel: "1-030-700-5877 x12857",
      address: "844 Mandy Unions",
      opening_hours: "08:00",
      description: "voluptates sequi quisquam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.921482979800865",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 44,
      name: "Mr. Emmalee Bauch",
      tel: "781-487-2869",
      address: "14550 Kutch Ways",
      opening_hours: "08:00",
      description:
        "Hic et accusamus rerum maxime ipsa provident eos ratione. Enim rerum excepturi beatae placeat commodi id nobis est. Excepturi enim sunt est aut aut accusantium necessitatibus.\n \rHic et voluptatem nesciunt. Incidunt consequatur quia est facere voluptatem reprehenderit dolorem ut sit. Deserunt dolor est voluptatem ab dolorem debitis debitis magni et. Rem quod deserunt eveniet illum ad. Consequatur aut voluptatibus et natus voluptatem soluta et pariatur aut. Et error autem.\n \rAt magni non occaecati odio. Quia ut qui ut magni. Atque eos sapiente saepe. Voluptatem alias aut sed quia. Debitis tempora sunt eligendi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.441051802127387",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 45,
      name: "Ladarius Daniel",
      tel: "1-034-403-5056 x388",
      address: "8214 Parker Freeway",
      opening_hours: "08:00",
      description:
        "Culpa tenetur est ut est ea dolore sit.\nNisi rerum similique possimus porro quis mollitia est ipsum et.\nVero doloribus hic non rem nesciunt.\nOccaecati placeat odit ut placeat.\nQuidem quod laboriosam sit quis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.34784754853096",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 46,
      name: "Christop Dach",
      tel: "(641) 357-8562 x1918",
      address: "2393 Bernhard Plaza",
      opening_hours: "08:00",
      description:
        "Ut necessitatibus rem. Quae voluptas debitis quo ea et cupiditate. Excepturi quisquam tempore non repellat non et. Laborum assumenda voluptas et et odio facere quo tenetur voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.8221941596115",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 47,
      name: "Casey Davis",
      tel: "840.798.6290 x0563",
      address: "83034 Savanna Manor",
      opening_hours: "08:00",
      description:
        "Dolorem quis provident. Repellendus et molestiae alias atque perspiciatis assumenda possimus adipisci minima. Dolorem qui ipsam sit vero eos temporibus. Eligendi maxime suscipit ut autem repellendus eligendi velit. Vel quas facilis consequuntur. Qui alias voluptatum quo inventore magni rerum maiores.\n \rDoloremque eum commodi omnis vero. Nihil reiciendis rem accusantium labore ut. Mollitia quia quis iusto nostrum labore at laborum eveniet possimus. Vero vel ullam vel iusto earum. Saepe consequatur deleniti ea ducimus impedit.\n \rAssumenda et consequatur dolor. Fugit qui culpa inventore sit aut corrupti quaerat. Est sed debitis quia veniam. Sint harum asperiores tempora sint minima nulla sunt enim. Et veritatis ipsum ut perferendis. Officiis qui illo maxime veritatis quasi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.590075407341289",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 48,
      name: "Luis Mohr",
      tel: "244.444.7357",
      address: "3186 Vernon Stream",
      opening_hours: "08:00",
      description:
        "Sed ipsum at odio consectetur fugiat. In corrupti earum rerum voluptatem. Culpa et doloremque a architecto. Explicabo deserunt dolores et sit. Ut consequatur a. Id inventore distinctio ipsam laboriosam facere ut at alias.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.050651913672272",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 49,
      name: "Vita MacGyver",
      tel: "228.097.0621 x640",
      address: "2146 Sienna Plaza",
      opening_hours: "08:00",
      description: "ipsam asperiores vel",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.31202659076266",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
    {
      id: 50,
      name: "Betty Windler",
      tel: "284-535-6368 x89169",
      address: "47155 Daniella Spur",
      opening_hours: "08:00",
      description:
        "Non voluptas eum beatae qui suscipit quasi omnis deleniti voluptatem. Velit vitae minima quisquam odio laboriosam. In voluptatem consequuntur eos quaerat velit debitis placeat eligendi. Molestiae consequatur voluptatem tenetur. Ipsa cum delectus quasi quia iste alias voluptatem.\n \rEt occaecati voluptatem nihil dicta sapiente eos at. Neque id sed ratione soluta facere laborum incidunt aspernatur error. Illo ratione ea eum voluptate repudiandae. Vero repellat tenetur molestiae. Rem eligendi et.\n \rLaboriosam consequatur eaque ipsam provident ipsa qui. Nemo rerum quam quos. Dolores aliquid ut qui reprehenderit ipsa. Eius a cum cupiditate non ratione sed. Eos unde sed iusto est aperiam a. Assumenda error expedita et possimus sequi dolorem eum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.8328555142947",
      viewCounts: 0,
      createdAt: "2022-07-04T10:57:45.000Z",
      updatedAt: "2022-07-04T10:57:45.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-04T10:57:45.000Z",
        updatedAt: "2022-07-04T10:57:45.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>