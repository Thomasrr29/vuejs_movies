
<template>
    <div>
        <BannerComponent @update-message ="handleMessage"/> 
        <Movies :searchedMovies="movies" @get_id="receive"/>
        <detailsMovie v-if="visible" :idData="card_id_received" @close="closePop"/>
    </div>

</template>

<script setup lang="ts" >
    import Movies from '../movies/Movies.vue';
    import BannerComponent from '@/components/banner/Banner.vue'
    import detailsMovie from '../details-movie.vue';
    import HTTP from '@/api/client-http'
    import { ref } from 'vue';
    import type { Movie } from '../movies/movie-model';


  const visible = ref(false)
  const card_id_received = ref('')
  const textInput = ref('')
  let movies = ref<Movie[]>([])
  let timeout: ReturnType<typeof setTimeout > | null = null


  const receive = (card_id: string) => {

    card_id_received.value = card_id
    visible.value = true

  }

  const handleMessage = (message: string) => {

    textInput.value = message

    if(timeout) clearTimeout(timeout)

    timeout = setTimeout( async () => {
      getInput(message)
    }, 500) 
  }


  const getInput = async (message: string) => {
    console.log('SEARCHING')
    const response = await HTTP.get('', {
          params: {
              s: textInput.value,
              page: 1, 
              type: 'movie',
          }
      })

      movies = response.data.Search
      console.log('THE MOVIES DUDE!!!', movies)
  }


  
  const closePop = () => {
    visible.value = false
  }


</script>