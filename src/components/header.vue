<template>
  <v-container fluid>
    <v-card  flat height="" tile>
      <v-toolbar flat>
        <v-toolbar-title>Photography</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="d-none d-sm-block">   
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
        <v-toolbar-items class="d-block d-sm-none">
            <v-menu>
            <template v-slot:activator="{ on}">
                  <v-app-bar-nav-icon v-on="on" color="black"></v-app-bar-nav-icon>
            </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title class="d-block">
                      <v-btn text block>
                        <router-link to="/" style="text-decoration:none !important">Home</router-link>
                      </v-btn>
                    </v-list-item-title>
                    <v-list-item-title class="d-block">
                      <v-btn text block>
                        <router-link to="/about" style="text-decoration:none !important">About</router-link>
                      </v-btn>
                    </v-list-item-title>
                    <v-list-item-title>
                      <v-btn text>
                        <router-link to="/contact" style="text-decoration:none !important;">Contact</router-link>
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
            </v-menu>
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
