<template>
  <v-content>
    <Hero/>
    <Gallery/>
    <LatestPost/>
  </v-content>
</template>

<script>
import Hero from '../components/hero';
import Gallery from '../components/gallery';
import LatestPost from '../components/LatestPost';

  export default{
    name: 'home',
    components: {
      Hero,
      Gallery,
      LatestPost,
    },
    data () {
      return {
        items: [

        ],
      }
    },
  }
</script>
