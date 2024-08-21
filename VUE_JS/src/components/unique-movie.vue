<template>

    <article class="unique-page-container">
            <div class="movie-details">
            <div class="movie-poster">
            <img :src="movie?.Poster" alt="Movie Poster">
            </div>
            <div class="movie-info">
            <h2 class="movie-title">{{ movie?.Title }}</h2>
            <p><strong>Year:</strong> {{ movie?.Year }}</p>
            <p><strong>Type:</strong> {{ movie?.Type }}</p>
            <p><strong>Actors:</strong> {{ movie?.Actors }}</p>
            <p><strong>Awards:</strong>{{ movie?.Awards}}</p>
            <p><strong>Country:</strong> {{ movie?.Country }}</p>
            <p><strong>Director:</strong> {{ movie?.Director }}</p>
            <p><strong>Genre:</strong> {{ movie?.Genre }}</p>
            <p><strong>Language:</strong> {{ movie?.Language }}</p>
            <p><strong>Plot:</strong> {{ movie?.Plot }}</p>
            </div>
        </div>


        <router-link to="/" class="back-button">Volver</router-link>
    </article>

</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import HTTP from '@/api/client-http'
import type { MovieDetails } from './movies/movie-model';
import { ref } from 'vue';

    const route = useRoute()
    const movieId = route.params.id
    
    let movie = ref<MovieDetails | null>(null)

    const getMovieId = async (id: string | string[]) => {

        const movieFound = await HTTP.get('', {
            params: {
                i: id
            }
        })
        movie.value = movieFound.data
    }

    getMovieId(movieId)

</script>

<style scoped lang="scss">


.unique-page-container{

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .movie-details {
    display: flex;
    background-color: $secondary;
    color: $white;
    padding: 20px;
    border-radius: 10px;
    max-width: 800px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    .movie-poster {
        flex: 1;
        img {
        max-width: 100%;
        border-radius: 10px;
        }
    }

    .movie-info {
        flex: 2;
        margin-left: 20px;

        .movie-title {
        color: $primary;
        font-size: 2rem;
        margin-bottom: 10px;
        }

        p {
        margin: 5px 0;
        line-height: 1.5;
        
        strong {
            color: $success;
        }
        }
    }

    }

    
    .back-button {
        text-decoration: none;
        background-color: $primary;
        border-radius: 10px;
        color: white;
        padding: 6px 16px;
        font-weight: 800;
        margin-top: 40px;
    }


}

</style>



