<template>
    <p>Buscar por:</p>
    <ul>
        <Button @click.prevent="changeFilter('game-list')">Gerações</Button>
        <Button @click.prevent="changeFilter('pokemon-filter')">Pokemons</Button>
    </ul>
</template>

<script>
import Button from '@/components/Button';

export default {
    name: 'button-filter',
    components: {
        Button
    },
    data() {
        return {
            filter: ''
        }
    },
    methods: {
        changeFilter(value) {
            this.filter = value;
        }
    }
}
</script>

<style>

</style>