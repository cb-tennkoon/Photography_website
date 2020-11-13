<template>
  <v-content>
    <v-img
      src="../assets/images/about/t8.jpg"
      aspect-ratio="3.7"
    >
      <v-row class="d-flex align-end fill-height ">
        <v-col cols="12">
          <h2 class="font-weight-regular pl-4">About Us</h2>
        </v-col>     
      </v-row>
    </v-img>
    <v-container >
    <v-row justify="space-around">
      <v-col cols="12" sm="6" md="4" >
        <v-img
          src="../assets/images/about/t2.jpeg"
          aspect-ratio="1.7"
        ></v-img>
      </v-col>  
      <v-col cols="12" sm="6" md="4">
        <v-img
          src="../assets/images/about/t3.jpg"
          aspect-ratio="1.7"
        ></v-img>
      </v-col> 
      <v-col cols="12" sm="6" md="4">
        <v-img
          src="../assets/images/about/t4.jpg"
          aspect-ratio="1.7"
        ></v-img>
      </v-col>   
    </v-row>
        <v-row justify="space-around">
      <v-col cols="4">
        <v-img
          src="../assets/images/about/t5.jpg"
          aspect-ratio="1.7"
        ></v-img>
      </v-col>  
      <v-col cols="4">
        <v-img
          src="../assets/images/about/t6.jpg"
          aspect-ratio="1.7"
        ></v-img>
      </v-col> 
      <v-col cols="4">
        <v-img
          src="../assets/images/about/t7.jpg"
          aspect-ratio="1.7"
        ></v-img>
      </v-col>   
    </v-row>
    <v-row justify="space-around">
      <v-col cols="4">
        <v-img
          src="../assets/images/about/t8.jpg"
          aspect-ratio="1.7"
        ></v-img>
      </v-col>  
      <v-col cols="4">
        <v-img
          src="../assets/images/about/t9.jpg"
          aspect-ratio="1.7"
        ></v-img>
      </v-col> 
      <v-col cols="4">
        <v-img
          src="../assets/images/about/t4.jpg"
          aspect-ratio="1.7"
        ></v-img>
      </v-col>   
    </v-row>
    <v-row justify="space-around">
      <v-col cols="4">
        <v-img
          src="../assets/images/about/t8.jpg"
          aspect-ratio="1.7"
        ></v-img>
      </v-col>  
      <v-col cols="4">
        <v-img
          src="../assets/images/about/t9.jpg"
          aspect-ratio="1.7"
        ></v-img>
      </v-col> 
      <v-col cols="4">
        <v-img
          src="../assets/images/about/t4.jpg"
          aspect-ratio="1.7"
        ></v-img>
      </v-col>   
    </v-row>
    <div class="pt-4 ">
      <p>He went on to note the government will continue to remain as the owner of Other State Forests which are not declared under any enactment (Forest Conservation Ordinance, Fauna and Flora Protection Ordinance or the National Heritage Wilderness Areas Act), but are nevertheless forest areas that come under the purview of the Forest Conservation Department.</p>
    </div>
    <div class="">
      <h2 class="text-center">Our Team</h2>
      <v-row>
        <v-col cols="4" v-for="item in items" :key="item.id">
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              :src="item.src"
              height="200px"
            ></v-img>

            <v-card-title>
              {{item.title}}
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container >
    <v-container class="grey lighten-5" fluid>
    <v-row
      v-for="j in justify"
      :key="j"
      :justify="j"
    >
      <v-col
        v-for="k in 2"
        :key="k"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-img
          src="../assets/images/about/m3.jpg"
          aspect-ratio="1"
        ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-content>

</template>

<script>
  export default{
    name: 'about',

    data () {
      return {
        items: [
        {
          id:1,
          src:require("../assets/images/members/m1.jpg"),
          name:'Peter smith',
          title:'Director'
        },
        {
          id:2,
          src:require("../assets/images/members/m2.jpg"),
          name:'Peter smith',
          title:'Director'
        },
        {
          id:3,
          src:require("../assets/images/members/m3.jpg"),
          name:'Peter smith',
          title:'Director'
        },
        ],
        show: false,
        justify: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
      images_res:[
        'require("../assets/images/about/m1.jpg")',
        'require("../assets/images/about/m2.jpg")',
        'require("../assets/images/about/m3.jpg")',
        'require("../assets/images/about/m4.jpg")',
        'require("../assets/images/about/m5.jpg")',
        'require("../assets/images/about/m6.jpg")',
        'require("../assets/images/about/m7.jpg")',
        'require("../assets/images/about/m8.jpg")',
        'require("../assets/images/about/m9.jpg")',
        'require("../assets/images/about/m10.jpg")',
      ],
      }
    },
  }
</script>
