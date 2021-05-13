<template>
    <router-link
        :to="{name: 'Pokemon', params: {name: name, id: gen}}"
        @click="setPokemonOnState"
    >
        <div :class="`pf-card pf-color--shape`">
            <div class="pf-card pf-card__content pf-card__content--line">
                <img
                    class="pf-card pf-card__poke"
                    :src="infos?.sprites?.front_default"
                    :alt="name"
                />
                <div>
                    <h1 class="pf-subheading">{{ name }}</h1>
                    <div class="pf-tips">
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
        name: {
            type: String,
            required: true
        },
        gen: {
            type: String,
            required: true
        }
    },

    data() {
        return { infos: {}}
    },

    created() {
        this.fetchPokemonByName(this.name);
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