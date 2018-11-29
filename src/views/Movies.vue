<template>
  <div>
    <h1>Tillgängliga filmer</h1>
    <Movies />
  </div>
</template>

<script>
import Movies from '@/components/Movies.vue'

export default {
  name: 'movies',
  components: {
    Movies
  }
}
</script>
