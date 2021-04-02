<template>
  <v-app>
    <v-app-bar app  class="primary lighten-1 text-center white--text">
      <v-toolbar-title>Orquestador de servicios</v-toolbar-title>
        <router-link to="/" class="text-decoration-none">
          <v-btn text class="white--text">
          Inicio
          </v-btn>
        </router-link>
        <router-link to="/about" class="text-decoration-none">
          <v-btn text class="white--text">
          Acerca
          </v-btn>
        </router-link>

    </v-app-bar>
    <v-main>
      <v-container class="grey lighten-5">
        <router-view/>
        
      </v-container>
    </v-main>
    <v-footer padless>
      <v-row>
        <v-col class="primary lighten-1 py-4 text-center white--text"
        cols="12">
          {{ new Date().getFullYear() }} — <strong>edwinnm</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({

  }),
};
</script>
