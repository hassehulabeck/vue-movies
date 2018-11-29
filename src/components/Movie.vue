<template>
  <div class = 'movie'>
    <router-link :to="{ name: 'movie', params: {movie: 'movie', id: 'movie.id'} }">
      <section class="image">
        <img :src="movie.image" />
      </section>
    </router-link>
      <section class="facts">
        <router-link :to="{ name: 'movie', params: {name:movie.name, id:movie.id} }">
          <h2> {{ movie.name }} </h2>
        </router-link>
        <h3>Director: <span class='director'>{{ movie.director }}</span> </h3>
      </section>
  </div>
</template>

<script>
export default {
  name: 'movie',
  props: [
    'movie'
  ]
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
