<template>
    <Toolbar />
    <div class="pf-container pf-align pf-align--left">
        <h1 class="pf-title">{{generation}}</h1>
        <div class="pf-align pf-align--column">
            <h1 class="pf-heading">Generation</h1>
            <ul>
                <li class="pf-subheading">This principal region is <strong>{{ region}}</strong></li>
                <li class="pf-subheading">And has <strong>{{ pokemons.length }} pokemons</strong></li>
                <li class="pf-subheading" v-if="typesNumber > 0">Added <strong>{{ typesNumber }} pokemons</strong> new types</li>
            </ul>
        </div>
    </div>
    <div class="pf-container pf-align pf-align--column">
        <h1 class="pf-subtile">Pokemons</h1>
        <ul class="pf-list pf-list--pokemons">
            <li v-for="poke in pokemons" :key="poke.name">
                <PokemonCard :name="poke.name" :gen="generation"/>
            </li>
        </ul>
    </div>
</template>

<script>
import api from '@/services/api';

import Toolbar from '@/components/Toolbar.vue';
import PokemonCard from '@/components/PokemonCard.vue';

export default {
    name: 'Generation',
    components: {
        Toolbar,
        PokemonCard
    },
    data() {
        return {
            pokemons: [],
            region: '',
            types: []
        }
    },
    computed: {
        generation() {
            return this.$route.params.id;
        },
        typesNumber() {
            return this.types.length;
        }
    },

    created() {
        this.fetchGenerationById(this.generation);
    },

    methods: {
        async fetchGenerationById(id) {
            const gen = new api.Games();

            try {
                const {data: res} = await gen.getGenerationById(id);
                this.pokemons = res.pokemon_species
                this.region = res.main_region.name
                this.types = res.types;
            } catch (error) {
                console.error(error);
            }
        }
    },
}
</script>
