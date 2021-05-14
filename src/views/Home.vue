<template>
  <Toolbar />
  <div class="pf-container pf-container--left">
    <h1 class="pf-heading">POKE FINDER</h1>
    <p class="pf-subheading pf-subheading--medium">Find your Games and favorite Pokemons. Discovery generations, abilities and types.</p>
  </div>
  <div class="pf-container pf-container--filter pf-align pf-align--left">
      <h2 class="pf-filter-tile">Search by</h2>
      <button
        :class="['pf-btn', {'pf-btn--active': is_visible === 'GameList'}]"
        @click.prevent="changeFilter('GameList')"
      >
        generations
      </button>
      <button
        :class="['pf-btn', {'pf-btn--active': is_visible === 'PokemonFilter'}]"
        @click.prevent="changeFilter('PokemonFilter')"
      >
        pokemons
      </button>
  </div>
  <keep-alive>
    <component :is="is_visible" />
  </keep-alive>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Toolbar from '@/components/Toolbar.vue';
import GameList from '@/components/GameList.vue';
import PokemonFilter from '../components/PokemonFilter.vue';

export default {
  name: 'Home',
  components: {
    Toolbar,
    GameList,
    PokemonFilter
  },
  data() {
    return { is_visible: 'GameList'}
  },

  methods: {
    changeFilter(value) {
      this.is_visible = value;
    }
  }
}
</script>
