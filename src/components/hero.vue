<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
      <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            {{item.title}}
          </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default{
    name: 'Hero',

    data () {
      return {
        items: [
          {
            src: require("../assets/images/one1.jpg"),
            title:"first"
          },
          {
            src: require("../assets/images/one2.jpg"),
            title:"second"

          },
          {
            src: require("../assets/images/one3.jpg"),
            title:"thired"
          },
        ],
      }
    },
  }
</script>
