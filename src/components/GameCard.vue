<template>
    <router-link :to="{name: 'Generation', params: {id: index}}">
        <div :class="`pf-card pf-color--${name}`">
            <div class="pf-card pf-card__content">
                <svg class="pf-card__logo" width="95" height="95" viewBox="0 0 95 95" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.5 0.959595C21.8025 0.959595 0.950012 21.8026 0.950012 47.4906C0.950012 73.1881 21.8025 94.0406 47.5 94.0406C73.1975 94.0406 94.05 73.1881 94.05 47.4906C94.05 21.7931 73.1975 0.959595 47.5 0.959595ZM47.5 33.5636C55.195 33.5636 61.446 39.7956 61.446 47.4906C61.446 55.1856 55.195 61.4366 47.5 61.4366C39.805 61.4366 33.554 55.1856 33.554 47.4906C33.554 39.7956 39.805 33.5636 47.5 33.5636ZM8.04651 50.4831H27.55C28.994 60.2016 37.3825 67.6496 47.5 67.6496C57.6175 67.6496 66.006 60.2016 67.45 50.4831H86.9535C85.4145 70.9271 68.3335 87.0676 47.5 87.0676C26.6665 87.0676 9.57601 70.9366 8.04651 50.4831Z" fill="currentColor"/>
                </svg>
                <h1 class="pf-heading pf-heading--semi">{{ index }}</h1>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'name',
    props: {
        name: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    }
}
</script>
<style lang="stylus" scoped>
h1
    color #fff
</style>