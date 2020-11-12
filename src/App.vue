<template>
  <v-app>
    <v-app-bar flat app color="white">
      <Header/>
    </v-app-bar>
    <v-content class="content-padding" >
      <router-view></router-view>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/header';
import Footer from './components/footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
