<template>
  <div class="pf-container pf-align pf-align--column">
    <div class="pf-align pf-align--left">
        <input
            class="pf-input"
            placeholder="Search by name or id"
            type="text"
            v-model="search"
        />
        <button :class="['pf-btn pf-btn--high', {'pf-btn--disabled': !search}]" @click.prevent="fetchPokemonByName(search)">Search</button>
    </div>
    <PokemonCard v-if="pokemon" :pokemon="pokemon"/>
  </div>
</template>

<script>
import api from "@/services/api";

import PokemonCard from "@/components/PokemonCard"

export default {
  name: "pokemon-filter",

  data() {
    return {
      search: '',
      pokemon: ''
    };
  },

  components: {
    PokemonCard
  },

  methods: {
    async fetchPokemonByName(name) {
      this.pokemon = '';
      const pokemon = new api.Pokemons();

      try {
        const { data: res } = await pokemon.getPokemonByName(name);

        this.pokemon = res;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>