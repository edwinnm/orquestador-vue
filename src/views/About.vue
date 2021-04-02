<template>
<div>
    <h5 class="text-h4 my-4">Servicios utilizados</h5>
    <v-card tile >
        <v-list-item v-for="service in services" :key="service.title">
            <v-list-item-content >
                <v-list-item-title class="text-h5 py-4">{{service.title}}</v-list-item-title>
                <v-list-item-subtitle class="text-subtitle-1 py-1">
                {{service.description}}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                    <a class="text-decoration-none" :href="service.url" target="_blank">{{service.url}}</a>
                </v-list-item-subtitle>
            </v-list-item-content>
      </v-list-item>
    </v-card>



</div>
</template>
<script>
export default {
    data(){
        return {
            services: [{
                title:"Usuario Random",
                description:"Servicio empleado para obtener información de usuarios ficticios.",
                url:"https://randomuser.me/"
            },{
                title:"Avatars",
                description:"Servicio utilizado para generar avatars estilo pixel art a partir del username y el nombre real de usuario.",
                url:"https://avatars.dicebear.com/"
            },{
                title:"Lorem Picsum",
                description:"Servicio utilizado para generar la galería de cada usuario.",
                url:"https://picsum.photos/"
            }]
        }
    }
}
</script>