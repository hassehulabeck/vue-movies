<template>
  <div class = 'movie'>
      <section class="image">
        <img :src="movie.image" />
      </section>
      <section class="facts">
        <h2> {{ movie.name }} </h2>
        <h3>Director: <span class='director'>{{ movie.director }}</span> </h3>
        <p>Year: {{ movie.year }}</p>
        <p>Category: {{ movie.category }}</p>
        <h3>Actors (selected)</h3>
        <ul>
          <li v-for='actor in movie.actors'>
            {{ actor }}
          </li>
        </ul>
      </section>
  </div>
</template>

<script>
export default {
  name: 'movie',
  props: [
    'movie'
  ],
  computed: {
    movie() {
      var name = this.$route.params.name;
      return this.$store.state.movies.find(function(movie) {
        return movie.name == name
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 100px;
  border: 2px solid yellow;
  padding: 2px;
}
.movie {
  display: flex;
  padding: 1em;
}
.image, .facts {
  flex: 0 1 auto;
  text-align: left;
  padding-left: 2em;
}
.image {
  min-width: 175px;
}
h2 {
  font-family: 'Lobster', cursive;
  color: yellow;
  text-shadow: 1px 1px 8px black;
}
.director {
  color: yellow;
  text-shadow: 1px 1px 8px black;
}
</style>
