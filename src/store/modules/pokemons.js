const
    state = {
        pokemon: {},
        pokemons: []
    },

    getters = {
        getPokemon: (pokeState) => pokeState.pokemon,
        getPokemons: (pokeState) => pokeState.pokemons,
    },

    mutations = {
        SET_POKEMON: (pokeState, payload) => {
            pokeState.pokemon = payload;
        },
        SET_POKEMONS: (pokeState, payload) => {
            pokeState.pokemons = payload;
        }
    },
    actions = {
        setPokemon: ({commit}, payload) => commit('SET_POKEMON', payload),
        setPokemons: ({commit}, payload) => commit('SET_POKEMONS', payload),
    };

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};