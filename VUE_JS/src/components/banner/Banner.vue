<template>
  <section class="banner-section d-middle w-100 p-10">
    <form>
      <div class="search-input d-middle">
        <input
          type="text"
          :required="true"
          v-model="message"
          @input="emitMessage"
        />
        <span>Search movie</span>
      </div>
    </form>
    <div class="container-image-banner">
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, defineEmits} from 'vue';

  let message = ref("")

  const emit = defineEmits(['update-message'])

  function emitMessage(){
    emit('update-message', message.value)
  }

</script>

<style scoped lang="scss">
@import "@/components/banner/banner";
</style>
