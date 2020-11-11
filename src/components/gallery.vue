<template>
<v-container>

  <!-- <v-subheader>Subheader</v-subheader> -->
    <div class="d-flex justify-center ">
        <h1 class="border_content">Gallery</h1>
    </div>
  <v-row>
    <v-col
      v-for="item in items"
      :key="item.id"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="item.src"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'gallery',

    data: () => ({
        items:[
        {
            id:1,
            src:require("../assets/images/colection/two1.jpg")
        },
        {
            id:1,
            src:require("../assets/images/colection/two2.jpg")
        },
        {
            id:1,
            src:require("../assets/images/colection/two3.jpg")
        },
        {
            id:1,
            src:require("../assets/images/colection/two4.jpg")
        },
        {
            id:1,
            src:require("../assets/images/colection/two5.jpg")
        },
        {
            id:1,
            src:require("../assets/images/colection/two6.jpg")
        },
        {
            id:1,
            src:require("../assets/images/colection/two7.jpg")
        },
        {
            id:1,
            src:require("../assets/images/colection/two8.jpg")
        },
        {
            id:1,
            src:require("../assets/images/colection/two9.jpg")
        }
        ]        
    }),
  }
</script>
