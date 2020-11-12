<template>
  <v-container fluid>
    <v-card  flat height="" tile>
      <v-toolbar flat>
        <v-toolbar-title>Photography</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text>
            <router-link to="/" style="text-decoration:none !important">Home</router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/about" style="text-decoration:none !important">About</router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/contact" style="text-decoration:none !important">Contact</router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'header',

    data: () => ({

    }),
  }
</script>
