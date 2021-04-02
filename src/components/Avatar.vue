<template>
    <div class="mt-5">
        <div v-if="user">
            <v-row justify="center">
                <v-col>
                    <div class="title text-center" justify="center">Foto de perfíl</div>
                    <v-img :src="user.picture.large" height="225" contain>  </v-img>
                </v-col>
                <v-col>
                    <div class="title text-center" justify="center">Avatar</div>
                    <v-img :src="avatarPic" height="225" contain></v-img>
                </v-col>
            </v-row>
            <v-row justify="space-around">
                <v-col>
                    <v-text-field label="Nombre completo" :value="nombreCompleto" readonly></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field label="Username" v-model="username" ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="space-between">
                <v-col>
                    <v-text-field label="Email" :value="user.email" readonly></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field label="Género" :value="user.gender" readonly></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="space-around">
                <v-col>
                    <v-text-field label="Teléfono" :value="user.phone" readonly></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field label="Nacionalidad" :value="user.nat" readonly></v-text-field>
                </v-col>
            </v-row>
            <v-row class="title">
                Tu Galería
            </v-row>
            <v-row>
                <v-col 
                    v-for="(image, $index) in imagenes" 
                    :key="$index"
                    class="d-flex child-flex"
                    cols="4">
                <v-img
                    :src="image"
                    :lazy-src="image"
                    aspect-ratio="1"
                    class="grey lighten-2">
                </v-img>
                </v-col>
            </v-row>
        </div>
        <v-row justify="center" class="my-4">
            <v-btn elevation="4" @click="dameUsuario">{{accion}}</v-btn>
        </v-row>
        
    </div>
</template>

<script>
export default {
  name: 'Avatar',
  data(){
      return {
          username: "",
          user: null,
          accion: "Dame un usuario",
          imagenes: [],
          
      }
  }, 
  computed:{
      nombreCompleto(){
          return `${this.user.name.first} ${this.user.name.last}`
      },
      avatarPic(){
          return `https://avatars.dicebear.com/api/${this.user.gender}/:${this.nombreCompleto}${this.username}.svg?w=150&h=150`
      },


  },
  methods:{
      dameUsuario(){
          this.imagenes=[]
          console.log("Hice click en dame");
          fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(respuesta => this.user = respuesta.results[0]);
        for (let i=0;i<9;i++){
            this.galeria()
        }
        this.accion = "Dame otro usuario";

      },
      galeria(){
          fetch("https://picsum.photos/200")
            .then(response => this.imagenes.push(response.url))
            
          
      }

  }

}
</script>

