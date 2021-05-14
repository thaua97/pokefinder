<template>
    <div class="pf-container pf-container--main">
        <ul class="pf-list">
            <div v-for="(item, index) in generations" :key="item.id">
                <GameCard :name="item.name" :index="index + 1"/>
            </div>
        </ul>
    </div>
</template>

<script>
import api from '@/services/api';
import GameCard from '@/components/GameCard';

export default {
    name: 'game-list',
    components: {
        GameCard
    },
    data() {
        return {
            games: {},
            generations: []
        }
    },
    created() {
        this.fetchGames();
        this.fetchGamesByGeneration();
    },

    methods: {
        async fetchGames() {
            const game = new api.Games();

            try {
                const {data: res} = await game.getVersionGroups();

                this.games = res.results;
            } catch (error) {
                console.error(error)
            }
        },

        async fetchGamesByGeneration() {
            const games = new api.Games();

            try {
                const {data: res} = await games.getGeneration();

                this.generations = res.results;
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>