<template>
    <router-link
        :to="{name: 'Pokemon', params: {name: infos.name, id: gen}}"
        @click="setPokemonOnState"
    >
        <div :class="`pf-card pf-color--shape`">
            <div class="pf-card pf-card__content pf-card__content--line">
                <img
                    v-if="infos.sprites"
                    class="pf-card pf-card__poke"
                    :src="infos?.sprites?.front_default"
                    :alt="name"
                />
                <img
                    v-else
                    class="pf-card pf-card__not-found"
                    src="../assets/logo_transparent.png"
                    alt="not found"
                />
                <div>
                    <h1 class="pf-subheading">{{ infos.name || 'Not found' }}</h1>
                    <div class="pf-tips" v-if="infos?.types">
                        <div
                            :class="`pf-tip pf-tip--small pf-color--${item.type.name}`"
                            v-for="item in infos.types"
                            :key="item.type.name"
                        >
                            {{item?.type?.name}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import api from '@/services/api';
import {mapActions} from 'vuex';

export default {
    name: 'PokemonCard',

    props: {
        pokemon: Object,
        name: String,
        gen: String
    },

    data() {
        return { infos: {}}
    },

    created() {
        if(this.pokemon) {
            this.infos = this.pokemon;
        } else {
            this.fetchPokemonByName(this.name);
        }
    },

    methods: {
        ...mapActions('pokemons', ['setPokemon']),

        async fetchPokemonByName(name) {
            const pokemon = new api.Pokemons();

            try {
                const { data: res } = await pokemon.getPokemonByName(name);

                this.infos = res;
            } catch (error) {
                console.error(error);
            }
        },

        setPokemonOnState() {
            this.setPokemon(this.infos);
        }
    }
}
</script>