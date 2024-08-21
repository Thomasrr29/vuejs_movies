<template>
    <article class="movie-card" >
    
        <div class="content image-movie">
            <img :src="PropsMovie.poster" alt="">
        </div>
        <h3 class="title-card"> {{ PropsMovie.title }}</h3>
        <p>
            <span>Año: {{ PropsMovie.year }}</span>
        </p>
        <p>
            <span>Type: {{ PropsMovie.type }}</span>
        </p>

        <div class="footer-card">
            <button class="button-details" :id="PropsMovie.id" @click="handleClick">Detalles</button>
            <router-link to="/movie/:id" class="button-details" :id="PropsMovie.id" @click="gotoMovie">Comprar</router-link>
        </div>

    </article>
</template>

<script setup lang="ts">

    import router from '@/router';
    import { defineEmits } from 'vue';

    interface props {
        title: string,
        poster: string,
        year: string, 
        type: string,
        id: string 
    }

    const PropsMovie = defineProps<props>()
    const emit = defineEmits(['get_id'])

    const handleClick = (e:any) => {
        let button = e.target as HTMLButtonElement
        let id = button.id
        emit('get_id', id)
    }

    const gotoMovie = (e:any) => {

        console.log('GO TO MOVIE')
        let button = e.target as HTMLButtonElement
        let id = button.id

        router.push({name:"unique movie", params: {id: id}})
    }

</script>

<style scoped lang="scss">
.movie-card {
    height: 100%;
    width: 300px;
    background: $secondary;
    padding: 10px;
    text-align: center;
    border: 2px solid $primary;
    border-radius: 10px;

    .title-card {
        color: $white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
    }

    p {
        color: $white;
        span {
            color: $primary;
            font-weight: bold;
        }
    }

    img {
        width: 90%;
        height: 300px;
        object-fit: scale-down;
        border-radius: 10px;
    }

    .button-details {

        padding: 4px 10px;
        border-radius: 5px;
        margin: 10px;
        background-color: $primary;
        border: none;
        color: white;
        font-weight: 800;
        text-decoration: none;
    }

    .button-details:hover {
        cursor: pointer;
        box-shadow: 1px 1px 10px white;
    }

}
</style>