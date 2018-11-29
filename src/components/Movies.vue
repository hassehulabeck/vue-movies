<template>
  <section>
    <div v-for='movie,index in movies'>
      <Movie :movie='movie' />
    </div>
  </section>
</template>

<script>
import Movie from './Movie.vue'

export default {
  name: 'Movies',
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
  components: {
    Movie
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
