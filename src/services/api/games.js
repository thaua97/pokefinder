import Config from './config';

export default class Pokemons extends Config {
    constructor() {
        super('https://pokeapi.co/api/v2/');
    }

    getVersions() {
        return this.axios.get(`version`);
    }

    getVersionGroups() {
        return this.axios.get(`version-group`);
    }

    getGeneration() {
        return this.axios.get(`generation`);
    }

    getGenerationById(id) {
        return this.axios.get(`generation/${id}`);
    }
}