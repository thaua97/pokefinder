<template>
  <Toolbar back="/" />
  <div class="pf-container pf-align pf-align--left">
    <div>
      <h1 class="pf-tile">{{ infos?.name }}</h1>
      <div class="pf-tips">
        <div
          :class="`pf-tip pf-color--${item.type.name}`"
          v-for="item in infos.types"
          :key="item.type.name"
        >
          {{ item.type.name }}
        </div>
      </div>
    </div>
    <img
      class="pf-img"
      :src="infos?.sprites?.front_default"
      :alt="infos?.name"
    />
  </div>
  <div class="pf-container pf-align pf-align--column">
    <p class="pf-info">
      Height <strong>{{ infos.height }}</strong>
    </p>
    <p class="pf-info">
      Weight <strong>{{ infos.weight }}</strong>
    </p>
    <div class="pf-tips">
      <p class="pf-info">Abilities</p>
      <div
        :class="`pf-tip pf-color--silver`"
        v-for="item in infos.abilities"
        :key="item.ability.name"
      >
        {{ item.ability.name }}
      </div>
    </div>
    <div
      class="pf-align pf-align--between"
      v-for="item in infos.stats"
      :key="item.stat.name"
    >
      <p class="pf-info">{{ item.stat.name }}</p>
      <StatusBar :progress="item.base_stat" :stat="item.stat.name" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import api from "@/services/api";

import Toolbar from "@/components/Toolbar.vue";
import StatusBar from "@/components/StatusBar.vue";
export default {
  name: "pokemon",
  components: {
    Toolbar,
    StatusBar,
  },
  data() {
    return {
      infos: {},
    };
  },
  computed: {...mapGetters("pokemons", ["getPokemon"])},

  created() {
    if (!this.getPokemon.name) {
      this.loadPokemons(this.$route.params.name);
    }
    this.infos = this.getPokemon;
  },

  methods: {
    ...mapActions("pokemons", ["setPokemon"]),

    async loadPokemons(name) {
      const pokemon = new api.Pokemons();

      try {
        const { data: res } = await pokemon.getPokemonByName(name);

        this.setPokemon(res);
        this.infos = res;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped lang="stylus">
.pf-img
  height 12rem
</style>