<template>
<div class="">
<v-footer
    padless
  >
    <v-card
      class="flex blue-grey lighten-5"
      flat
      tile
    >
      <v-card-title class="">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 "
          dark
          icon
        >
          <v-icon size="24px" class="black--text">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 black--text text-center grey">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
</v-footer>
</div>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
      icons: [
        'fab fa-facebook-square',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
    ]}),
  }
</script>
