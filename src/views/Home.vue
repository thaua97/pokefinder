<template>
  <Toolbar />
  <div class="pf-container pf-container--left">
    <h1 class="pf-heading">POKE FINDER</h1>
    <p class="pf-subheading pf-subheading--medium">Encontre seus Games, Pokemons favoritos. Descobrindo suas geracoes e habilidades e caracteristicas.</p>
  </div>
  <GameList />
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';
import GameList from '@/components/GameList.vue';

export default {
  name: 'Home',
  components: {
    Toolbar,
    GameList
  }
}
</script>
