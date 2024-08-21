<template>
    <transition class="fade">
        <article class="details-card" v-if="cardDetails">

            <button class="close-button" @click="closeDetails">X</button>

            <section class="general-info">

                <div class="content image-movie">
                    <img :src="cardDetails?.Poster" alt="">
                </div>
                <h3 class="title-card"></h3>
                <p>
                    <span>Año: </span>
                    <span class="text-content"> {{ cardDetails?.Year }} </span>
                </p>

                <p>
                    <span>Type: </span>
                    <span class="text-content"> {{ cardDetails?.Type }} </span>
                </p>

            </section>
            <section class="details">
                <p>
                    <span> Actors: </span>
                    <span class="text-content"> {{ cardDetails?.Actors }} </span>
                </p>

                <p>
                    <span> Director: </span>
                    <span class="text-content"> {{ cardDetails?.Director }} </span>
                </p>
                <p>
                    <span> Country: </span>
                    <span class="text-content"> {{ cardDetails?.Country }} </span>
                </p>

                <p>
                    <span> Language: </span>
                    <span class="text-content"> {{ cardDetails?.Language }} </span>
                </p>
                <p>
                    <span> Awards: </span>
                    <span class="text-content"> {{ cardDetails?.Awards }} </span>
                </p>

                <p>
                    <span> Genre: </span>
                    <span class="text-content"> {{ cardDetails?.Genre }} </span>
                </p>

                <p>
                    <span> Description: </span>
                    <span class="text-content"> {{ cardDetails?.Plot }} </span>
                </p>

            </section>
        </article>
    </transition>
</template>

<script setup lang="ts">
import { defineEmits, ref, watch } from 'vue';
import HTTP from '@/api/client-http'
import type { MovieDetails } from './movies/movie-model';

    const props = defineProps<{idData: string}>();
    
    const handleClick = async (id: string) => {

    const card = await HTTP.get('', {
        params: {
            i: id
        }
    })

        cardDetails.value = card.data
    }

    watch(() => props.idData, 
    () => handleClick(props.idData), 
    {immediate: true})
    
    let cardDetails = ref<MovieDetails | null>(null)

    const emit = defineEmits(['close'])

    const closeDetails = () => {
        emit('close')
    }

</script>

<style scoped lang="scss">

    .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
    opacity: 0;
    }

    .details-card {

        position: fixed;
        top: 5%;
        left: 30%;
        width: 600px;
        height: auto;
        border-radius: 10px;
        border: 2px solid $primary;
        background: $secondary;
        padding: 2rem;
        opacity: 1;

        .close-button {
        position: absolute;
        top: -10px;
        right: -5px;
        background-color: transparent;
        border: none;
        font-size: 1.5rem;
        color: $primary;
        cursor: pointer;
        }

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

        .text-content {
            color: white;
        }
        }

        img {
            width: 100%;
            height: 300px;
            object-fit: scale-down;
            border-radius: 10px;
        }

        button {

            padding: 4px 10px;
            border-radius: 5px;
            margin: 10px;
            background-color: $primary;
            border: none;
            color: white;
            font-weight: 800;
        }

        button:hover {
            cursor: pointer;
            box-shadow: 1px 1px 10px white;
        }

    }



</style>