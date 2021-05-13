import Config from './config';

export default class Pokemons extends Config {
    constructor() {
        super('https://pokeapi.co/api/v2/');
    }

    getPokemonById(id) {
        return this.axios.get(`pokemon/${id}`)
    }

    getPokemonByName(name) {
        return this.axios.get(`pokemon/${name}`)
    }
}