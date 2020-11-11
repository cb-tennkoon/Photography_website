<template>
<v-container>
    <div class="d-flex justify-center ">
        <h1 class="border_content">Latest Post</h1>
    </div>
    <v-row>
        <v-col 
        v-for="item in items"
        :key="item.id"
        cols="4"
        >
            <v-card
            class="mx-auto"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                v-bind:src="item.src"
                >
                <v-card-title>{{item.title}}</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">
                {{item.subtitle}}
                </v-card-subtitle>

                <v-card-text class="text--primary">
                <div>{{item.description}}</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="orange"
                    text
                >
                    Share
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>  
</template>

<script>
  export default{
    name:'LatestPost',

     data: () => ({
        items: [
            {
                id:1,
                title:'one',
                subtitle:'one one',
                description:'Chief Scientist of the World Health Organization',
                src:require('../assets/images/LatestNews/one1.jpg'),
            },
            {
                id:2,
                title:'two',
                subtitle:'one one',
                description:'Chief Scientist of the World Health Organization',
                src:require('../assets/images/LatestNews/one2.jpg'),
            },
            {
                id:3,
                title:'three',
                subtitle:'one one',
                description:'Chief Scientist of the World Health Organization',
                src:require('../assets/images/LatestNews/one3.jpg'),
            },
        ],
      }),
  }
</script>
