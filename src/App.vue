<template>
  <v-app>
    <v-app-bar flat app color="white">
      <Header/>
    </v-app-bar>
    <v-content class="content-padding" >
      <Hero/>
      
      <Gallery/>

      <LatestPost/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/header';
import Hero from './components/hero';
import Gallery from './components/gallery';
import LatestPost from './components/LatestPost';
import Footer from './components/footer';

export default {
  name: 'App',

  components: {
    Header,
    Hero,
    Gallery,
    LatestPost,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
