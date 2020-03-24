<template>
    <div :style="{backgroundImage:'url(https://rickandmortypod.com/wp-content/uploads/2018/11/cropped-RM_page-header_background1-3.png)', height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}">
        <ul class="pt-5" style="list-style:none">
            <li v-for="persona in personas" :key="persona.name">
                <img class="rounded-circle mb-3" :src="persona.image" :alt="persona.name" style="width:100px">
                <span id="name" class="font-weight-bold text-success" style="padding-bottom:2em">{{persona.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // Nombre del componente
    name: 'personajes',
   
    data() {
        return {
            bgImage: 'https://rickandmortypod.com/wp-content/uploads/2018/11/cropped-RM_page-header_background1-3.png',
            personas: [
                {name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
                {name: 'Morty Smith', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
                {name: 'Summer Smith', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg' },
                {name: 'Beth Smith', image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg' },
                {name: 'Jerry Smith', image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg' }
            ]
        }
    }
}

</script>

<style scoped>
    /* ul {
        list-style: none;
    }   */
</style> 